class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :title
      t.integer :card_id
      t.boolean :done, default: false

      t.timestamps null: false
    end

    add_index :items, :card_id
  end
end
