class Politician < ActiveRecord::Base
	has_many :followings
  	has_many :users, through: :followings
end
