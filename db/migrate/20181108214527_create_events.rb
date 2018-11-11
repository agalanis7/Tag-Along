class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.date :event_date
      t.time :start_time
      t.time :end_time
      t.integer :quantity
      t.integer :notification
      t.boolean :completed, null: false, default: false
      t.references :location, foreign_key: true
      t.references :user, foreign_key: true, index: true
      t.timestamps
    end
  end
end
