class AddPoliticianCols < ActiveRecord::Migration
  def change
  	add_column :politicians, :bioguide_id, :string
    add_column :politicians, :birthday, :string
    add_column :politicians, :chamber, :string
    add_column :politicians, :contact_form, :string
    add_column :politicians, :crp_id, :string
    add_column :politicians, :district, :integer
    add_column :politicians, :facebook_id, :string
    add_column :politicians, :first_name, :string
    add_column :politicians, :gender, :string
    add_column :politicians, :govtrack_id, :string
    add_column :politicians, :in_office, :boolean
    add_column :politicians, :last_name, :string
    add_column :politicians, :leadership_role, :string
    add_column :politicians, :oc_email, :string
    add_column :politicians, :phone, :string
    add_column :politicians, :senate_class, :string
    add_column :politicians, :state_name, :string
    add_column :politicians, :state_rank, :string
    add_column :politicians, :term_end, :string
    add_column :politicians, :term_start, :string
    add_column :politicians, :title, :string
    add_column :politicians, :twitter_id, :string
    add_column :politicians, :votesmart_id, :string
    add_column :politicians, :youtube_id, :string
    add_column :politicians, :website, :string
    add_column :politicians, :fax, :string
  	add_column :politicians, :name_suffix, :string
  	add_column :politicians, :office_address, :string
  	add_column :politicians, :thomas_id, :string

  end
end
