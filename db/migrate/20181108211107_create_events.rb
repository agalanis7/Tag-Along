class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.date :event_date
      t.time :start_time
      t.time :end_time
      t.integer :quantity
      t.integer :notification
      t.boolean :completed

      t.timestamps
    end
  end
end
