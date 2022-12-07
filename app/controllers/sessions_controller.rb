class SessionsController < ApplicationController

  # login
  def create
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password])
      sessions[user.id] = user.id
      render json: user, status: :created
    else
      render json: { error: "You entered incorrect username or password" }, status: :unauthorized
    end  
  end

  # logout
  def destroy
    session.delete :user_id
    head :no_content
  end

end
