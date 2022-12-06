class RemoveDistance < ActiveRecord::Migration[6.1]
  def change
    remove_column :routes, :distance
  end
end
