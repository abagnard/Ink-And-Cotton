json.extract! review, :user_id, :product_id, :title, :rating, :comment
json.author do
  json.username review.user.username
end
