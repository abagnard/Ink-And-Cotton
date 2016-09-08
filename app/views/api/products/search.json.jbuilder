json.products do 
  json.array! @products do |product|
    json.id product.id
    json.title product.title
    json.img product.img_url
  end
end

json.users do
  json.array! @users do |user|
    json.id user.id
    json.name user.name
  end
end

# json.(product, *Product.column_names)
