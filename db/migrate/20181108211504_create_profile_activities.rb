class CreateProfileActivities < ActiveRecord::Migration[5.2]
  def change
    create_table :profile_activities do |t|
      t.references :profile, foreign_key: true
      t.references :activity, foreign_key: true
      t.integer :skill

      t.timestamps
    end
  end
end
