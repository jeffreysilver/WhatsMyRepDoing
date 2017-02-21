# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170220192500) do

  create_table "followings", force: :cascade do |t|
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.integer  "user_id"
    t.integer  "politician_id"
  end

  create_table "many_to_manies", force: :cascade do |t|
  end

  create_table "politicians", force: :cascade do |t|
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "bioguide_id"
    t.string   "birthday"
    t.string   "chamber"
    t.string   "contact_form"
    t.string   "crp_id"
    t.integer  "district"
    t.string   "facebook_id"
    t.string   "first_name"
    t.string   "gender"
    t.string   "govtrack_id"
    t.boolean  "in_office"
    t.string   "last_name"
    t.string   "leadership_role"
    t.string   "oc_email"
    t.string   "phone"
    t.string   "senate_class"
    t.string   "state_name"
    t.string   "state_rank"
    t.string   "term_end"
    t.string   "term_start"
    t.string   "title"
    t.string   "twitter_id"
    t.string   "votesmart_id"
    t.string   "youtube_id"
    t.string   "website"
    t.string   "fax"
    t.string   "name_suffix"
    t.string   "office_address"
    t.string   "thomas_id"
    t.string   "party"
    t.string   "state"
    t.string   "image_url"
    t.string   "rss_url"
  end

  create_table "users", force: :cascade do |t|
    t.string   "email"
    t.string   "password"
    t.string   "address"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.float    "lat"
    t.float    "lng"
  end

end
