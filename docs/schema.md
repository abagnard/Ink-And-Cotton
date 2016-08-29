<!-- USERS:
#
#  id                 :integer          not null, primary key
#  username           :string           not null, indexed, unique
#  password_digest    :string           not null
#  session_token      :string           not null, indexed, unique
#  name               :string         


<!-- REVIEWS:
#
#  id                 :integer          not null, primary key
#  user_id            :integer          not null, foreign key (references user), indexed
#  product_id         :integer          not null, foreign key (references product), indexed
#  rating             :integer          not null, default: 1
#  comment            :text             not null



<!-- PRODUCTS:
#
#  id                 :integer          not null, primary key
#  artist_id          :integer          not null, foreign key (references users), indexed
#  title              :string           not null
#  in_stock           :boolean          not null, default: true
#  description        :text             not null
#  price              :integer          not null
#  image              :image            not null


<!-- PRODUCT TYPES:
#
#  id                 :integer          not null, primary key
#  name               :string           not null
#  product_id         :integer          not null, foreign key (references products), indexed



<!-- CART:
#
#  id                 :integer          not null, primary key
#  user_id            :integer          not null, foreign key (references users), indexed


<!-- CART ITEMS:
#
#  id                 :integer          not null, primary key
#  cart_id          ``:integer          not null, foreign key (references cart), indexed
#  product_id            :integer          not null, foreign key (references product), indexed
#  quantity           :integer          default: 1
#  option             :string            not null
