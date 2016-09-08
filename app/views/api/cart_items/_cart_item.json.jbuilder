json.extract! cart_item, :id, :product_id, :quantity

json.product do
  json.id cart_item.product.id
  json.title cart_item.product.title
  json.medium cart_item.product.medium
  json.artist_id cart_item.product.user.id
  json.artist_name cart_item.product.user.name
  json.description cart_item.product.description
  json.price cart_item.product.price
  json.in_stock cart_item.product.in_stock
  json.img_url cart_item.product.img_url
end
