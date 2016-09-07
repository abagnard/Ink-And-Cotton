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
        render "api/products/show"
      else
        @errors = @cart_item.errors.full_messages
        render "api/shared/errors", status: 422
      end
    end

    # def update
    #   @cart_item = CartItem.find(params[:id])
    #   if @cart_item.update(cart_item_params)
    #     render "api/products/show"
    #   else
    #     @errors = @cart_item.errors.full_messages
    #     render "api/shared/errors", status: 422
    #   end
    # end

    def destroy
      @cart_item = CartItem.find(params[:id])
      if(@cart_item.destroy)
        render "/api/products/show"
      else
        @errors = @cart_item.errors.full_messages
        render "api/shared/errors", status: 422
      end
    end


    private
    def cart_item_params
      params.require(:cart_item).permit(:user_id, :product_id, :quantity)
    end

  end
