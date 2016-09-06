json.extract! cart_item, :id, :product_it, :user_id

  json.product do
    json.product cart_item.product
  end
