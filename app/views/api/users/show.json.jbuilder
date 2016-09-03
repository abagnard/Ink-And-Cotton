json.partial! "api/users/user", user: @user
json.products do
  json.array!(@user.products) do |product|
    json.partial!('api/products/product', product: product)
  end
end
