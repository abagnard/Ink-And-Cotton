# == Schema Information
#
# Table name: products
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  medium        :string           not null
#  artist_id   :integer          not null
#  description :string
#  price       :integer          not null
#  in_stock    :boolean          default(TRUE)
#  img_url     :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Product < ActiveRecord::Base
  validates :title, :medium, :artist_id, :price, :in_stock, presence: true
  validates :title, uniqueness: true

  belongs_to :user


end