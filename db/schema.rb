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

ActiveRecord::Schema.define(version: 2018_11_16_212753) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "activities", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "activity_events", force: :cascade do |t|
    t.bigint "activity_id"
    t.bigint "event_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["activity_id"], name: "index_activity_events_on_activity_id"
    t.index ["event_id"], name: "index_activity_events_on_event_id"
  end

  create_table "activity_locations", force: :cascade do |t|
    t.bigint "activity_id"
    t.bigint "location_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["activity_id"], name: "index_activity_locations_on_activity_id"
    t.index ["location_id"], name: "index_activity_locations_on_location_id"
  end

  create_table "events", force: :cascade do |t|
    t.date "event_date"
    t.time "start_time"
    t.time "end_time"
    t.integer "quantity"
    t.integer "notification"
    t.boolean "completed", default: false, null: false
    t.bigint "location_id"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["location_id"], name: "index_events_on_location_id"
    t.index ["user_id"], name: "index_events_on_user_id"
  end

  create_table "locations", force: :cascade do |t|
    t.string "name"
    t.string "street"
    t.string "city"
    t.string "state"
    t.string "country"
    t.float "longitude"
    t.float "latitude"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "location_type"
  end

  create_table "messages", force: :cascade do |t|
    t.bigint "event_id"
    t.string "body"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["event_id"], name: "index_messages_on_event_id"
    t.index ["user_id"], name: "index_messages_on_user_id"
  end

  create_table "profiles", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "gender"
    t.string "phone_number"
    t.integer "notification"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id"
    t.integer "activity_id", default: [], array: true
    t.index ["user_id"], name: "index_profiles_on_user_id"
  end

  create_table "user_activities", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "activity_id"
    t.integer "skill"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["activity_id"], name: "index_user_activities_on_activity_id"
    t.index ["user_id"], name: "index_user_activities_on_user_id"
  end

  create_table "user_events", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "event_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["event_id"], name: "index_user_events_on_event_id"
    t.index ["user_id"], name: "index_user_events_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "activity_events", "activities"
  add_foreign_key "activity_events", "events"
  add_foreign_key "activity_locations", "activities"
  add_foreign_key "activity_locations", "locations"
  add_foreign_key "events", "locations"
  add_foreign_key "events", "users"
  add_foreign_key "messages", "events"
  add_foreign_key "messages", "users"
  add_foreign_key "profiles", "users"
  add_foreign_key "user_activities", "activities"
  add_foreign_key "user_activities", "users"
  add_foreign_key "user_events", "events"
  add_foreign_key "user_events", "users"
end
