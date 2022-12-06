class CreateRoutes < ActiveRecord::Migration[6.1]
  def change
    create_table :routes do |t|
      t.string :name
      t.string :image_url
      t.string :distance

      t.timestamps
    end
  end
end
