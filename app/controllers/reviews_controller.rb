class ReviewsController < ApplicationController  
  before_action :authorize

  def index
    render json: Review.all, status: :ok
  end

  def show
    review = Review.all(params[:id])
    render json: review
  end
  
  def create
      review = @current_user.reviews.create!(review_params)
      render json: review, status: :created
  end

  # def update
  #   review = Review.find(params[:id])
  #   if review && review.user_id == @current_user.id
  #     review.update!(review_params)
  #     render json: review , status: :created
  #   else
  #     render json: "Invalid Credentials", status: :unauthorized
  #   end
  # end

  def update
      review = Review.find(params[:id])
      review.update!(review_params)
      render json: review , status: :created
  end

  def destroy
    review = Review.find(params[:id])
    review.destroy
    head :no_content
  end

  # def destroy
  #   review = Review.find(params[:id])
  #   if review && review.user_id == @current_user.id
  #     # byebug
  #     review.destroy
  #     head :no_content
  #   else
  #     render json: "Invalid Credentials", status: :unauthorized
  #   end
  # end

  private

  def review_params
    params.permit(:title, :body, :rating, :route_id)
  end 

end
