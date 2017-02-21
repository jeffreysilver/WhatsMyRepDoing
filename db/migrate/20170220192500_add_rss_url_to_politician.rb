class AddRssUrlToPolitician < ActiveRecord::Migration
  def change
    add_column :politicians, :rss_url, :string
  end
end
