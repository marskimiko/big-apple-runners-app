class ReviewsController < ApplicationController
  # delete later so only logged in user can have access
  skip_before_action :authorize, only: :index, :show

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

  def update
    review = Review.find(params[:id])
    render json: review.update!(review_params), status: :created
  end

  def destroy
    review = Review.find(params[:id])
    review.destroy
    head :no_content
  end

  # maybe dont use this

  # def user_reviews
  #   logged_in_user_reviews = Review.joins(:user).where(:user => {:id => params[:id]})
  # end

  private

  def review_params
    params.permit(:title, :body, :rating, :user_id, :route_id)
  end 

end
