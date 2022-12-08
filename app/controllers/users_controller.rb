class UsersController < ApplicationController

  skip_before_action :authorize, only: [:create]
  before_action :authorize, only: [:show]

  # def create
  #   loggedin = User.create!(user_params)
  #   session[:user_id] = loggedin.id
  #   render json: loggedin, status: :created
  # end

  def create
      user = User.create(user_params)
      session[:user_id] = user.id
      render json: user, status: :created
  end

  def show
    render json: @current_user
  end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation)
  end

end
