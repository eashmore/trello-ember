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

ActiveRecord::Schema.define(version: 20151108230434) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "board_memberships", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "board_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "board_memberships", ["board_id"], name: "index_board_memberships_on_board_id", using: :btree
  add_index "board_memberships", ["user_id"], name: "index_board_memberships_on_user_id", using: :btree

  create_table "boards", force: :cascade do |t|
    t.string   "title"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "boards", ["user_id"], name: "index_boards_on_user_id", using: :btree

  create_table "card_assignments", force: :cascade do |t|
    t.integer  "card_id"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "card_assignments", ["card_id"], name: "index_card_assignments_on_card_id", using: :btree
  add_index "card_assignments", ["user_id"], name: "index_card_assignments_on_user_id", using: :btree

  create_table "cards", force: :cascade do |t|
    t.string   "title"
    t.integer  "list_id"
    t.text     "description"
    t.float    "ord",         default: 0.0
    t.datetime "created_at",                null: false
    t.datetime "updated_at",                null: false
  end

  add_index "cards", ["list_id"], name: "index_cards_on_list_id", using: :btree

  create_table "items", force: :cascade do |t|
    t.string   "title"
    t.integer  "card_id"
    t.boolean  "done",       default: false
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
  end

  add_index "items", ["card_id"], name: "index_items_on_card_id", using: :btree

  create_table "lists", force: :cascade do |t|
    t.string   "title"
    t.integer  "board_id"
    t.float    "ord",        default: 0.0
    t.datetime "created_at",               null: false
    t.datetime "updated_at",               null: false
  end

  add_index "lists", ["board_id"], name: "index_lists_on_board_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username"
    t.string   "password_digest"
    t.string   "session_token"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", using: :btree
  add_index "users", ["username"], name: "index_users_on_username", using: :btree

end
