json.array!(@cart_items) do |cart_item|
  json.partial!('cart_item', cart_item: cart_item)
end
