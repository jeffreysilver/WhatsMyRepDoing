class User < ActiveRecord::Base
	has_many :followings
  	has_many :politicians, through: :followings
end
