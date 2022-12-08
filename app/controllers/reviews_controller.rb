class ReviewsController < ApplicationController
  # delete later so only logged in user can have access
  skip_before_action :authorize, only: :index

  def index
    render json: Review.all, status: :ok
  end

  def show
    review = Review.all(params[:id])
    render json: review
  end
  
  def create
    render json: Review.create!(review_params), status: :created 
  end

  private

  def review_params
    params.permit(:title, :body, :rating, :user_id, :route_id)
  end 

end
