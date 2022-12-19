class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest

  has_many :reviews
  has_many :routes
end

# only show button if review created review, use conditional in componenet that has the button to be displayed

# in the backend on reivews controller action, before you call update check that the review user id attribute matches the current user. Compare objects revew.user_id == current_user.id and

# in edit or delete action

# category or tags