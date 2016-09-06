class Api::CartItemsController < ApplicationController

    def index
      @cart_items = CartItem.all
    end

    def show
      @cart_item = CartItem.find(params[:id])
    end

    def create
      @cart_item = CartItem.new(cart_item_params)
      @cart_item.user_id = current_user.id
      if @cart_item.save
        @product = @cart_item.product
        render "api/cart_items/show"
      else
        @errors = @cart_item.errors.full_messages
        render "api/shared/errors", status: 422
      end
    end

    # def update
    #   @cart_item = CartItem.find(params[:id])
    #   if @cart_item.update(cart_item_params)
    #     render "api/cart_items/index"
    #   else
    #     render (
    #       json: ["**ERROR -- cart_item cannot be UPDATED**"],
    #       status: 422
    #     )
    #   end
    # end

    def destroy
      @cart_item = CartItem.find(params[:id])
      if(@cart_item.destroy)
        render "/api/cart_items/show"
      else
        @errors = @cart_item.errors.full_messages
        render "api/shared/errors", status: 422
      end
    end

    #  id         :integer          not null, primary key
    #  user_id    :integer          not null
    #  product_id :integer          not null
    #  quantity   :integer

    private
    def cart_item_params
      params.require(:cart_item).permit(:user_id, :product_id)
    end
  end
