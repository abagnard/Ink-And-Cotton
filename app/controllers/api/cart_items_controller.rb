class Api::CartItemsController < ApplicationController

    def index
      @cart_items = current_user.cart_items.includes(:product)
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

    def update
      @cart_item = current_user.cart_items.find_by(product_id: params[:cart_item][:product_id])
      # debugger
      if @cart_item.update({quantity: params[:cart_item][:quantity]})
        render "api/cart_items/show"
      else
        @errors = @cart_item.errors.full_messages
        render "api/shared/errors", status: 422
      end
    end

    def destroy
      @cart_item = current_user.cart_items.find(params[:id])
      if(@cart_item.destroy)
        # @product = @cart_item.product
        render json: @cart_item.id

      end
    end


    private
    def cart_item_params
      params.require(:cart_item).permit(:user_id, :product_id, :quantity)
    end

  end
