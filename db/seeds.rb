# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

description1 = "Giclee print on premium, museum quality, archival paper. 11x17. Limited edition, signed set of 50. Available framed or unframed."

descriptionDreamBigger = "Dream Bigger street art by WRDSMTH on a super soft, textured black tank top."

# user5 = User.create!(username: "abagnard", password: "password")
# user6 = User.create!(username: "mhayuk", password: "password", name: "Maya Hayuk")
# user7 = User.create!(username: "cmiller", password: "password", name: "Colette Miller")
# user8 = User.create!(username: "wrdsmth", password: "password", name: "WRDSMTH")
# user9 = User.create!(username: "royal", password: "password", name: "Royal")
# user10 = User.create!(username: "alexink", password: "password", name: "ALEX INC")

# ink1 = Product.create!(title: "Wanderlust", medium: "ink", artist_id: 8, description: description1, price: 100, in_stock: true, img_url: "http://res.cloudinary.com/dv18unrq9/image/upload/v1472684012/wrdsmth_wanderlust_fknzif.png")



cotton1 = Product.create!(title: "Dream Bigger Tank", medium: "cotton", artist_id: 8, description: descriptionDreamBigger, price: 30, in_stock: true, img_url: "http://res.cloudinary.com/dv18unrq9/image/upload/v1472754668/wrdsmth_cotton_dream_bigger_.jpg")
