class CreateManyToMany < ActiveRecord::Migration
  def change
    create_table :many_to_manies do |t|
    	add_column :followings, :user_id, :integer
    	add_column :followings, :politician_id, :integer
    end
  end
end
