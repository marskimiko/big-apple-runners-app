class AddDistanceAsFloat < ActiveRecord::Migration[6.1]
  def change
    add_column :routes, :distance, :float
  end
end
