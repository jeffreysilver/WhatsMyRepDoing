class AddImageUrlToPoliticians < ActiveRecord::Migration
  def change
    add_column :politicians, :image_url, :string
  end
end
