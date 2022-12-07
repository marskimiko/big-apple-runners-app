class UsersController < ApplicationController

  #signup
  def create
  
  end

   # get current user and render in in json
  def show
    user = User.find_by(id: session[:user_id])
    if user
      render json: user
    else
      render json: { error: ["Not Authorizable"] }, status: :unauthorized
    end
  end

end
