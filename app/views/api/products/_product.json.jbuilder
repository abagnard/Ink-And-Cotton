json.extract! product, :id, :title, :medium, :artist_id, :description,
  :price, :in_stock, :img_url
  json.artist do
    json.name product.user.name
  end
  json.is_in_cart current_user.cart_products.include?(product)
