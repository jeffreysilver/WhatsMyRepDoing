class ApiController < ApplicationController

	def search
		@politicians = Politician.search(params[:query]).take(5)
		@addresses = Geocoder.search(params[:query]).select{|r| r.country == "United States" }.take(5)
		p @addresses.first
		render "search.json"
	end
end
