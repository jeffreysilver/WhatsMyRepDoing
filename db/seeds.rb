# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
require 'open-uri'

# url = "https://congress.api.sunlightfoundation.com/legislators?per_page=all"
# results = JSON.parse(open(url).read)
# results = results['results']
# results.each do |r|
# 	r.delete("fec_ids")
# 	r.delete("middle_name")
# 	r.delete("nickname")
# 	r.delete("ocd_id")
# 	r["office_address"] = r["office"]
# 	r.delete("office")
# 	r.delete("icpsr_id")
# 	r.delete("lis_id")
# 	r.delete("other_names")
# 	Politician.create(r)
# end

url = 'https://api.propublica.org/congress/v1/115/senate/members.json'