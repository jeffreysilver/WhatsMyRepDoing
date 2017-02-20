class AddPartyToPolitician < ActiveRecord::Migration
  def change
    add_column :politicians, :party, :string
    add_column :politicians, :state, :string
  end
end
