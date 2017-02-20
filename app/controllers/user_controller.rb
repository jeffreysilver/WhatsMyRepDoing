require 'congress'

class UserController < ApplicationController

	def register
		@user = User.create(user_params)
		client = Congress::Client.new('jeffreygsilver@gmail.com')
		result = client.legislators_locate(@user.lat, @user.lng)
		bioguide_ids = result['results'].map{|l| l['bioguide_id']}
		bioguide_ids.each do |b|
			l = Politician.where(bioguide_id: b).first
			@user.politicians << l 
		end
		@user.save
		redirect_to("/home/#{@user.id}")
	end

	def show
		if params[:id] && User.find(params[:id])
			@user = User.find(params[:id])
  			render component: 'ShowUser', props: {user: @user, legislators: @user.politicians}
		else
			render component: 'Landing', props: {}
		end  			
	end

	def user_params
    	params.require(:user).permit(:name, :email, :address, :password, :lat, :lng)
  	end
end
