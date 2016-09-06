json.extract! review, :id, :user_id, :product_id, :title, :rating, :comment
json.author do
  json.username review.user.username
end
