class User < ApplicationRecord
  has_secure_password
  validates :user, :password, :password_confirmation, presence: true
  
  has_many :reviews
  has_many :routes, through: :reviews
end
