class Api::ProductsController < ApplicationController

  def index
    @products = Product.all
  end

  def show
    @product = Product.find(params[:id])
  end

  def create
    @product = Product.new(product_params)

    if @product.save
      render json: ["item created!"]
    else
      render json: ["item unable to be created!"]
    end
  end

  def edit
    @product = Product.find(params[:id])
  end

  def update
    @product = Product.find(params[:id])
  end

  # def destroy
  #   @product = Product.find(params[:id])
  #   if @product
  #   else
  #   end
  # end

  private
  def product_params
    params.require(:product).permit(:title, :type, :artist_id, :description,
      :price, :in_stock, :img_url)
  end
end
