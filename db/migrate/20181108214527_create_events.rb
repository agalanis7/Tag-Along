class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.date :event_date
      t.time :start_time
      t.time :end_time
      t.integer :quantity
      t.string :notification
      t.references :location, foreign_key: true
      t.references :user, foreign_key: true, index: true
      t.references :participant, index: true, foreign_key: {to_table: :users}
      t.timestamps
    end
  end
end
