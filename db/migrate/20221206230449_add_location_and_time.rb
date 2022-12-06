class AddLocationAndTime < ActiveRecord::Migration[6.1]
  def change
    add_column :routes, :location, :string
    add_column :routes, :time, :string
  end
end
