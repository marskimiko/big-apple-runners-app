class Route < ApplicationRecord
  has_many :reviews
  has_many :users, through: :reviews

  # def slugify
  #   self.level = name.parameterize
  # end 

  def average_rating
    reviews.average(:rating).round(2).to_f
  end

end
