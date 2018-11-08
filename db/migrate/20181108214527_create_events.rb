class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.date :event_date
      t.time :start_time
      t.time :end_time
      t.integer :quantity
      t.string :notification
      t.references :location, foreign_key: true

      t.timestamps
    end
  end
end
