# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

user1 = User.create!(username: "abagnard", password: "password")
user2 = User.create!(username: "mhayuk", password: "password", name: "Maya Hayuk")
user3 = User.create!(username: "cmiller", password: "password", name: "Colette Miller")
user4 = User.create!(username: "wrdsmth", password: "password", name: "WRDSMTH")
user5 = User.create!(username: "royal", password: "password", name: "Royal")
user6 = User.create!(username: "alexink", password: "password", name: "ALEX INC")
