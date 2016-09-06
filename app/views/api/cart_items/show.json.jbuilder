json.partial! "api/cart_items/cart_item", cart_item: @cart_item
json.product do
  json.array!(@cart_item.product) do |product|
    json.partial!('api/products/product', product: product)
  end
end
