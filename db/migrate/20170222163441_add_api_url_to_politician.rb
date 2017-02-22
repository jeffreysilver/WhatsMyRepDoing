class AddApiUrlToPolitician < ActiveRecord::Migration
  def change
    add_column :politicians, :api_url, :string
    add_column :politicians, :next_election, :string
    add_column :politicians, :missed_votes_pct, :string
    add_column :politicians, :votes_with_party_pct, :string
  end
end
