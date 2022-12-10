class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :rating, :route_id, :user_id
  has_one :route
  has_one :user
end
