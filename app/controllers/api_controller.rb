class ApiController < ApplicationController

	def search
		puts params
		render :nothing => true
	end
end
