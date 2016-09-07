json.extract! cart_item, :id, :product_id, :user_id

json.set! cart_item.product_id do
  json.product_title cart_item.product.title
  json.product_medium cart_item.product.medium
  json.product_artist_name cart_item.product.user.name
  json.product_description cart_item.product.description
  json.product_price cart_item.product.price
  json.product_in_stock cart_item.product.in_stock
  json.product_img_url cart_item.product.img_url
end

json.set! cart_item.user_id do
  json.username cart_item.user.username
end
