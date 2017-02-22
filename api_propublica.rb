require 'httparty'
url = 'https://api.propublica.org/congress/v1/115/senate/members.json'
response = HTTParty.get(url, :headers => { "X-API-Key" => '9akGdvZNmTkQNU0eF9xs7XQK1Ug8Scl2nq9eLXe4'})
results = response['results'] # this is returning an array?? Weird
puts results.first['members']