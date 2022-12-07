class RoutesController < ApplicationController
  skip_before_action :authorize, only: :index

  def index
    render json: Route.all, status: :ok
  end

  def show
    route = Route.find(params[:id])
    render json: route
  end

end
