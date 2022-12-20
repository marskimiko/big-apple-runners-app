class Route < ApplicationRecord
  has_many :reviews
  has_many :users, through: :reviews

  validates :name, presence: true
  validates :image_url, presence: true
  validates :location, presence: true
  validates :time, presence: true
  validates :distance, presence: true

  # def slugify
  #   self.level = name.parameterize
  # end 

  def average_rating
    reviews.average(:rating).round(2).to_f
  end

end
