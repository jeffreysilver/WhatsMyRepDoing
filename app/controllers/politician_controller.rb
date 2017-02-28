class PoliticianController < ApplicationController

	def show
		@politician = Politician.find(params[:id])
		render component: 'Politician', props: {politician: @politician}
	end
end
