require "net/http"
require "uri"

url = URI.parse("https://api.propublica.org/congress/v1/114/senate/members.json")
req = Net::HTTP::Get.new(url.path)
req.add_field("X-API-Key:", "9akGdvZNmTkQNU0eF9xs7XQK1Ig8Scl2nq9eLXe4")
puts req.to_hash
res = Net::HTTP.new(url.host, url.port).start do |http|
  http.request(req)
end
puts res.body
puts res.code


