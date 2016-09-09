# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

description1 = "Giclee print on premium, museum quality, archival paper. 11x17. Limited edition, signed set of 50."
descriptionDreamBigger = "Dream Bigger street art by WRDSMTH on a super soft, textured black tank top."
descriptionDreamBigger2 = "Dream Bigger street art by WRDSMTH on a super soft, textured black tshirt."
descriptionAspire = "Aspire street art by WRDSMTH on a super soft, textured black tank top."
descriptionAspire2 = "Aspire street art by WRDSMTH on a super soft, textured black tshirt."

description_alex = "LIMITED EDITION by the one and only Alex Inc! Signed, hand painted set of 50. Giclee print + spray paint on premium, museum quality, archival paper. 300gsm, 100% rag cotton. 11x17."
description_alex_tshirt = "Limited Edition Baseball Tee. The Post No Bills print on a classic, super soft, retro baseball tee."
description_alex_tank = "The Post No Bills street art on a super soft, textured, white muscle tank top."

description_cmiller_angel_wings = "The latest Colette Miller street art piece turned print, these global angel wings have been pasted around the world, representing peace and hope in each city they reside in. Giclee print on premium, museum quality, archival paper. 11x17. Limited edition, signed set of 50. Available framed or unframed."
description_cmiller_i_love_la = "Giclee print on premium, museum quality, archival paper. 11x18. Limited edition, signed set of 20. Available framed or unframed."
description_cmiller_angel_wings_tank = "The Global Angel Wings by Colette Miller on a super soft cotton tank. Blank front with wings on the back."
description_cmiller_i_fly_la = "I Fly LA street art print on a limited edition, super soft, comfy baseball tee."

description_royal_son = "Limited edition, signed, numbered set of 25.  10% of the proceeds benefit Inner City Arts, which offers a safe, creative space for students. Widely regarded as one of the nation's most effective arts education providers, Inner City Arts is an oasis of learning, achievement and creativity in the heart of Skid Row, and a vital partner in the work of creating a safer, healthier Los Angeles. Giclee print on premium, museum quality, archival paper. 310gsm, 100% rag cotton. 13x17, available framed or unframed."
description_royal_samo = "Limited edition, signed, numbered set of 25. Giclee print on premium, museum quality, archival paper. 310gsm, 100% rag cotton. 17x13, available framed or unframed."

description_mhayuk = "Acrylic on wood. 40 × 20 inches."
description_mhayuk2 = "Acrylic on panel. 48 × 36 inches."
description_mhayuk3 = "Acrylic on wood panel. 24 × 24 inches."


user1 = User.create!(username: "abagnard", password: "password")
user2 = User.create!(username: "guest", password: "password")
user3 = User.create!(username: "mhayuk", password: "password", name: "Maya Hayuk")
user4 = User.create!(username: "cmiller", password: "password", name: "Colette Miller")
user5 = User.create!(username: "wrdsmth", password: "password", name: "WrdSmth")
user6 = User.create!(username: "royal", password: "password", name: "Royal")
user7 = User.create!(username: "alexink", password: "password", name: "Alex Inc")

#MAYA HAYUK
  ink35 = Product.create!(title: "The Sun", medium: "ink", artist_id: 3, description: description_mhayuk3, price: 6000, in_stock: true, img_url: "http://res.cloudinary.com/dv18unrq9/image/upload/v1473439753/mhayuk_the_sun_1.jpg")
  ink34 = Product.create!(title: "Heavy Wing", medium: "ink", artist_id: 3, description: description_mhayuk3, price: 6000, in_stock: true, img_url: "http://res.cloudinary.com/dv18unrq9/image/upload/v1473439787/larger_kkjuan.jpg")
  ink30 = Product.create!(title: "Gate NYC", medium: "ink", artist_id: 3, description: description_mhayuk, price: 4500, in_stock: true, img_url: "http://res.cloudinary.com/dv18unrq9/image/upload/v1473440244/mhayuk_gate_nyc.jpg")
  ink31 = Product.create!(title: "Big House", medium: "ink", artist_id: 3, description: description_mhayuk, price: 4500, in_stock: true, img_url: "http://res.cloudinary.com/dv18unrq9/image/upload/v1473440183/mhayuk_big_house.jpg")
  ink33 = Product.create!(title: "Chemical Trails", medium: "ink", artist_id: 3, description: description_mhayuk2, price: 7500, in_stock: true, img_url: "http://res.cloudinary.com/dv18unrq9/image/upload/v1473440026/mhayuk_chem_trails.jpg")
  ink32 = Product.create!(title: "Chemical Light", medium: "ink", artist_id: 3, description: description_mhayuk2, price: 7500, in_stock: true, img_url: "http://res.cloudinary.com/dv18unrq9/image/upload/v1473440062/mhayuk_chemical_light.jpg")
  ink36 = Product.create!(title: "Letter", medium: "ink", artist_id: 3, description: description_mhayuk, price: 4500, in_stock: true, img_url: "http://res.cloudinary.com/dv18unrq9/image/upload/v1473439693/mhayuk_letter.jpg")
  ink37 = Product.create!(title: "The Other Forest", medium: "ink", artist_id: 3, description: description_mhayuk2, price: 7500, in_stock: true, img_url: "http://res.cloudinary.com/dv18unrq9/image/upload/v1473439655/mhayuk_forest.jpg")

#WORDSMTH
  ink1 = Product.create!(title: "Wanderlust", medium: "ink", artist_id: 5, description: description1, price: 100, in_stock: true, img_url: "http://res.cloudinary.com/dv18unrq9/image/upload/v1472684012/wrdsmth_wanderlust_fknzif.png")
  ink2 = Product.create!(title: "The Only Lie", medium: "ink", artist_id: 5, description: description1, price: 100, in_stock: true, img_url: "http://res.cloudinary.com/dv18unrq9/image/upload/v1473004883/wrdsmth_the_only_lie.png")
  ink3 = Product.create!(title: "Funny Timing", medium: "ink", artist_id: 5, description: description1, price: 100, in_stock: true, img_url: "http://res.cloudinary.com/dv18unrq9/image/upload/v1473005339/wrdsmth_funny_timing.png")
  ink4 = Product.create!(title: "Sweet Tasty Delicious", medium: "ink", artist_id: 5, description: description1, price: 100, in_stock: true, img_url: "http://res.cloudinary.com/dv18unrq9/image/upload/v1473015941/wrdsmth_sweet_tasty_delicious.png")
  ink5 = Product.create!(title: "Aspire", medium: "ink", artist_id: 5, description: description1, price: 100, in_stock: true, img_url: "http://res.cloudinary.com/dv18unrq9/image/upload/v1473016070/wrdsmth_aspire.png")
  ink6 = Product.create!(title: "Blush and Shine", medium: "ink", artist_id: 5, description: description1, price: 100, in_stock: true, img_url: "http://res.cloudinary.com/dv18unrq9/image/upload/v1473016334/wrdsmth_blush.png")
  ink7 = Product.create!(title: "Once Upon A Time", medium: "ink", artist_id: 5, description: description1, price: 100, in_stock: true, img_url: "http://res.cloudinary.com/dv18unrq9/image/upload/v1473439426/once_web_1024x1024_esad1s.png")
  ink8 = Product.create!(title: "Amazing", medium: "ink", artist_id: 5, description: description1, price: 100, in_stock: true, img_url: "http://res.cloudinary.com/dv18unrq9/image/upload/v1473439367/wrdsmth_amazing_ink.png")
  cotton1 = Product.create!(title: "Dream Bigger Tank", medium: "cotton", artist_id: 5, description: descriptionDreamBigger, price: 30, in_stock: true, img_url: "http://res.cloudinary.com/dv18unrq9/image/upload/v1472754668/wrdsmth_cotton_dream_bigger_.jpg")
  cotton2 = Product.create!(title: "Dream Bigger Tshirt", medium: "cotton", artist_id: 5, description: descriptionDreamBigger2, price: 40, in_stock: true, img_url: "http://res.cloudinary.com/dv18unrq9/image/upload/v1473005000/wrdsmth_dream_bigger_tshirt.jpg")
  cotton3 = Product.create!(title: "Aspire Tank", medium: "cotton", artist_id: 5, description: descriptionAspire, price: 30, in_stock: true, img_url: "http://res.cloudinary.com/dv18unrq9/image/upload/v1473439546/wrdsmth_aspire_tank.jpg")
  cotton4 = Product.create!(title: "Aspire Tshirt", medium: "cotton", artist_id: 5, description: descriptionAspire2, price: 40, in_stock: true, img_url: "http://res.cloudinary.com/dv18unrq9/image/upload/v1473439501/wrdsmth_aspire_tshirt.jpg")

#ALEX INC
  ink101 = Product.create!(title: "Post No Bills", medium: "ink", artist_id: 7, description: description_alex, price: 150, in_stock: true, img_url: "http://res.cloudinary.com/dv18unrq9/image/upload/v1473005245/alex_inc_ink_post_no_bills.png")
  cotton101 = Product.create!(title: "Post No Bills Tshirt", medium: "cotton", artist_id: 7, description: description_alex_tshirt, price: 45, in_stock: true, img_url: "http://res.cloudinary.com/dv18unrq9/image/upload/v1473005077/alex_post_no_bills_tshirt.jpg")
  cotton102 = Product.create!(title: "Post No Bills Tank", medium: "cotton", artist_id: 7, description: description_alex_tank, price: 30, in_stock: true, img_url: "http://res.cloudinary.com/dv18unrq9/image/upload/v1473005194/alex_post_no_bills_muscle_tank.jpg")

#COLETTE Miller
  ink71 = Product.create!(title: "Global Angel Wings", medium: "ink", artist_id: 4, description: description_cmiller_angel_wings, price: 150, in_stock: true, img_url: "http://res.cloudinary.com/dv18unrq9/image/upload/v1473005421/cmiller_global_angel_wings_white.jpg")
  ink72 = Product.create!(title: "Global Angel Wings", medium: "ink", artist_id: 4, description: description_cmiller_angel_wings, price: 150, in_stock: true, img_url: "http://res.cloudinary.com/dv18unrq9/image/upload/v1473014639/Cmiller_global_angel_wings_black.png")
  ink73 = Product.create!(title: "I Love LA", medium: "ink", artist_id: 4, description: description_cmiller_i_love_la, price: 100, in_stock: true, img_url: "http://res.cloudinary.com/dv18unrq9/image/upload/v1473014745/cmiller_i_love_LA_white.png")
  ink74 = Product.create!(title: "I Love LA", medium: "ink", artist_id: 4, description: description_cmiller_i_love_la, price: 100, in_stock: true, img_url: "http://res.cloudinary.com/dv18unrq9/image/upload/v1473014770/cmiller_i_love_LA_black.png")
  cotton71 = Product.create!(title: "Angel Wings Tank", medium: "cotton", artist_id: 4, description: description_cmiller_angel_wings_tank, price: 30, in_stock: true, img_url: "http://res.cloudinary.com/dv18unrq9/image/upload/v1473014793/Cmiller_global_angel_wings_tank.jpg")
  cotton72 = Product.create!(title: "I Fly LA", medium: "cotton", artist_id: 4, description: description_cmiller_i_fly_la, price: 50, in_stock: true, img_url: "http://res.cloudinary.com/dv18unrq9/image/upload/v1473439071/cmiller_i_fly_la_baseball_t.jpg")

#Royal
  ink91 = Product.create!(title: "Son", medium: "ink", artist_id: 6, description: description_royal_son, price: 250, in_stock: true, img_url: "http://res.cloudinary.com/dv18unrq9/image/upload/v1473015268/royal_son.png")
  ink92 = Product.create!(title: "SAMO", medium: "ink", artist_id: 6, description: description_royal_samo, price: 250, in_stock: true, img_url: "http://res.cloudinary.com/dv18unrq9/image/upload/v1473015244/royal_samo.png")


#COLETTE Miller
  rev71 = Review.create!(title: "Read description!", product_id: 28, user_id: 1, rating: 2, comment: "Did not realize the wings were on the BACK of the tank! Picture makes it look like they are on the front, but they are not! Do not be fooled like I was.")
  rev72 = Review.create!(title: "Super soft!", product_id: 28, user_id: 2, rating: 5, comment: "Loved the fabric of the tank! Wear it all the time -- even to bed!")

#WRDSMT
  rev1 = Review.create!(title: "LOVE IT", product_id: 10, user_id: 1, rating: 5, comment: "My boyfriend gave me this and I absolutely love it! The framing is so professionally done...I highly reccomend it! Great gift for someone you love")
  rev2 = Review.create!(title: "Stunning!", product_id: 9, user_id: 1, rating: 5, comment: "I get so many compliments on this piece. The colors are fantastic!")
