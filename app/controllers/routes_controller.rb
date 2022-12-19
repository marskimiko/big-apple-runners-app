class RoutesController < ApplicationController
  skip_before_action :authorize, only: [:index]
  before_action :authorize, only: [:show]
  # skip_before_action [:index]

  def index
    render json: Route.all, status: :ok
  end

  def show
    route = Route.find(params[:id])
    render json: route
  end

  def create
    route = Route.create!(route_params)
    render json: route, status: :created
  end 

  private

  def route_params
    params.permit(:name, :image_url, :location, :time, :distance)
  end 

end
