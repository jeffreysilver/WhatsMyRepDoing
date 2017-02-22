class ApiController < ApplicationController

	def search
		@politicians = Politician.search(params[:query]).take(5)
		render "search.json"
	end
end
