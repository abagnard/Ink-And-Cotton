# == Schema Information
#
# Table name: cart_items
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  product_id :integer          not null
#  quantity   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class CartItem < ActiveRecord::Base
  validates :user_id, :product_id, presence: true
  validates :product_id, uniqueness: true

  belongs_to :user
  belongs_to :product
end
