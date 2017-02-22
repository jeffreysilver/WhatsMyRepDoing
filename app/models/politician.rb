class Politician < ActiveRecord::Base
	has_many :followings
  	has_many :users, through: :followings


  	def self.search(query)
  		query = query.downcase
		Politician.select{ |p| p.first_name.downcase.starts_with?(query) || p.last_name.downcase.starts_with?(query) || (p.first_name + " " + p.last_name).downcase.starts_with?(query)}
  	end

end
