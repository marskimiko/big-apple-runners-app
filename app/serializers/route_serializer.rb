class RouteSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :location, :time, :distance

  has_many :reviews
end
