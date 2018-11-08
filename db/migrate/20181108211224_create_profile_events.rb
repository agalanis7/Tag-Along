class CreateProfileEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :profile_events do |t|
      t.references :profile, foreign_key: true
      t.references :event, foreign_key: true

      t.timestamps
    end
  end
end
