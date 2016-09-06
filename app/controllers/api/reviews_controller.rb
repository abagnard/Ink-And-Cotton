class Api::ReviewsController < ApplicationController


  def index
    @reviews = Review.all
  end

  def create
    @review = Review.new(review_params)
    @review.user_id = current_user.id
    if @review.save
      @product = @review.product
      render "api/products/show"
    else
      @errors = @review.errors.full_messages
      render "api/shared/errors", status: 422
    end
  end

  # def destroy
  #   @review = Review.find_by(
  #     user_id: current_user.id,
  #     product_id: review_params[:product_id]
  #   )
  #   if(@review.destroy)
  #     render "/api/products/show"
  #   else
  #   end
  # end


  private
  def review_params
    params.require(:review).permit(:user_id, :product_id, :title, :rating, :comment)
  end
end
