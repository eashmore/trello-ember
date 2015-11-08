class CreateCardAssignments < ActiveRecord::Migration
  def change
    create_table :card_assignments do |t|
      t.integer :card_id
      t.integer :user_id

      t.timestamps null: false
    end

    add_index :card_assignments, :card_id
    add_index :card_assignments, :user_id
  end
end
