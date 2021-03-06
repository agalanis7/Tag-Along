class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.belongs_to :event, foreign_key: true
      t.string :body
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
