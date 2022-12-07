class User < ApplicationRecord
  has_secure_password
  validates :username, presence: true
  
  has_many :reviews
  has_many :routes, through: :reviews

  # validates :username, presence: true, uniqueness: true
end
