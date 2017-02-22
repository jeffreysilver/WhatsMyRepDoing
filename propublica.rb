require "net/http"
require "uri"

# url = URI.parse("https://api.propublica.org/congress/v1/114/house/members.json")
# req = Net::HTTP::Get.new(url.path)
# req.delete('accept-encoding')
# req.delete('user-agent')
# req.delete('accept')
# req.add_field("X-API-Key:", " 9akGdvZNmTkQNU0eF9xs7XQK1Ig8Scl2nq9eLXe4")
# puts req.to_hash
# res = Net::HTTP.new(url.host, url.port).start do |http|
#   http.request(req)
# end
# puts res.body
# puts res.code


uri = URI.parse("https://api.propublica.org/congress/v1/114/house/members.json")

http = Net::HTTP.new(uri.host, uri.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE
request = Net::HTTP::Get.new(uri.request_uri)
puts request.to_hash
request.add_field("X-API-Key", "9akGdvZNmTkQNU0eF9xs7XQK1Ig8Scl2nq9eLXe4")

response = http.request(request)
puts response.body
puts response.code