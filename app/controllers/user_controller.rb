class UserController < ApplicationController

	def create
		@user = User.create(user_params)
		render component: 'Signup', props: {}
	end

	def user_params
    	params.require(:user).permit(:name, :email, :address)
  	end
end
