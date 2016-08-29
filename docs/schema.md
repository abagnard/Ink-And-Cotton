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
type        | string    | not null
artist_id   | integer   | not null, foreign key (references users), indexed
description | string    | not null
price       | integer   | not null
in_stock    | boolean   | not null, default: true
img_url     | string    | not null


## CartItems
Column Name | Data Type | Details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references user), indexed
product_id  | integer   | not null, foreign key (references product), indexed
quantity    | integer   | default: 1


## Reviews
Column Name | Data Type | Details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
product_id  | integer   | not null, foreign key (references products), indexed
rating      | integer   | not null, default: 1
title       | string    | not null
comment     | text      |
