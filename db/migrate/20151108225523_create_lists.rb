class CreateLists < ActiveRecord::Migration
  def change
    create_table :lists do |t|
      t.string :title
      t.integer :board_id
      t.float :ord, default: 0

      t.timestamps null: false
    end

    add_index :lists, :board_id
  end
end
