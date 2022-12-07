class User < ApplicationRecord
  has_secure_password
  
  has_many :reviews
  has_many :routes, through: :reviews
end
