class Api::ProductsController < ApplicationController

  def index
    @products = Product.all
  end

  def show
    @product = Product.find(params[:id])
    if @product
      @artist = User.find(@product.artist_id)
      render "api/products/index"
    else
      render (
        json: ['**ERROR -- Product could not be found**'],
        status: 401
      )
    end
  end

  def create
    @product = Product.new(product_params)
    if @product.save
      render "api/products/index"
    else
      render (
        json: ["**ERROR -- product cannot be CREATED**"],
        status: 422
      )
    end
  end

  def update
    @product = Product.find(params[:id])
    if @product.update(product_params)
      render "api/products/index"
    else
      render (
        json: ["**ERROR -- product cannot be UPDATED**"],
        status: 422
      )
    end
  end

  def destroy
    @product = Product.find(params[:id])
    if(@product.destroy)
      render "/api/products/index"
    else
      render (
        json: ["**ERROR -- product cannot be DELETED**"],
        status: 422
      )
    end
  end


  private
  def product_params
    params.require(:product).permit(:title, :type, :artist_id, :description,
      :price, :in_stock, :img_url)
  end
end
