# == Schema Information
#
# Table name: reviews
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  product_id :integer          not null
#  rating     :integer          not null
#  title      :string           not null
#  comment    :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Review < ActiveRecord::Base
  validates :user_id, :product_id, :rating, :title, presence: true

  belongs_to :user
  belongs_to :product


end
