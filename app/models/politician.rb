require 'httparty'

class Politician < ActiveRecord::Base
	has_many :followings
  	has_many :users, through: :followings

  	# attr_writer :api_url, :rss_url
  	# attr_accessor :next_election, :missed_votes_pct, :votes_with_party_pct

  	def self.search(query)
  		query = query.downcase
		Politician.select{ |p| p.first_name.downcase.starts_with?(query) || p.last_name.downcase.starts_with?(query) || (p.first_name + " " + p.last_name).downcase.starts_with?(query)}
  	end

  	def self.update_stats
  		Politician.all.each do |p|
  			p.update_stats
  		end
  	end

  	def self.add_propublica_fields(chamber)
  		url = "https://api.propublica.org/congress/v1/115/#{chamber}/members.json"
		response = HTTParty.get(url, :headers => { "X-API-Key" => '9akGdvZNmTkQNU0eF9xs7XQK1Ug8Scl2nq9eLXe4'})
		results = response['results'] # this is returning an array?? Weird
		members = results.first['members']
		members.each do |m|
			pol = Politician.where(bioguide_id: m['id']).first
			unless pol.nil?
				pol.api_url = m['api_url']
				pol.rss_url = m['rss_url']
				pol.next_election = m['next_election']
				pol.missed_votes_pct = m['missed_votes_pct']
				pol.votes_with_party_pct = m['votes_with_party_pct']
				pol.save
			end
		end
  	end

end
