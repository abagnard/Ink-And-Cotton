## Users
Column Name     | Data Type | Details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
name            | string    |
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## Products
Column Name | Data Type | Details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
artist_id   | integer   | not null, foreign key (references users), indexed
description | string    | not null
price       | integer   | not null
in_stock    | boolean   | not null, default: true
image       | image     | not null

## Product Types
Column Name | Data Type | Details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
product_id  | integer   | not null, foreign key (references products), indexed


## Cart
Column Name | Data Type | Details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed


## Cart Items
Column Name | Data Type | Details
------------|-----------|-----------------------
id          | integer   | not null, primary key
cart_id     | integer   | not null, foreign key (references cart), indexed
product_id  | integer   | not null, foreign key (references product), indexed
quantity    | integer   | default: 1
option      | string    | not null


## Reviews
Column Name | Data Type | Details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
product_id  | integer   | not null, foreign key (references products), indexed
rating      | integer   | not null, default: 1
title       | string    | not null
comment     | text      |
