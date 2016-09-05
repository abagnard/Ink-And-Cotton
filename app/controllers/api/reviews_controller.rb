class Api::ReviewsController < ApplicationController


  def index
    @reviews = Review.all
  end

  def show
    @review = Review.find(params[:id])
  end

  def create
    @review = Review.new(review_params)
    # if @review.save
    #   render "api/reviews/index"
    # else
    #   render (
    #     json: ["**ERROR -- review cannot be CREATED**"],
    #     status: 422
    #   )
    # end
  end

  def update
    @review = Review.find(params[:id])
    # if @review.update(review_params)
    #   render "api/reviews/index"
    # else
    #   render (
    #     json: ["**ERROR -- review cannot be UPDATED**"],
    #     status: 422
    #   )
    # end
  end

  def destroy
    @review = Review.find(params[:id])
    # if(@review.destroy)
    #   render "/api/reviews/index"
    # else
    #   render (
    #     json: ["**ERROR -- review cannot be DELETED**"],
    #     status: 422
    #   )
    # end
  end


  private
  def review_params
    params.require(:review).permit(:user_id, :product_id, :title, :rating, :comment)
  end
end
