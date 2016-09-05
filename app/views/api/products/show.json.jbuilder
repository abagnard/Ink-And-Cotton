json.partial! "api/products/product", product: @product
json.reviews do
  json.array!(@product.reviews) do |review|
    json.partial!('api/reviews/review', review: review)
  end
end
