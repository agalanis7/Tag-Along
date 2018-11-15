class AddTypeToLocations < ActiveRecord::Migration[5.2]
  def change
    add_column :locations, :type, :string
  end
end
