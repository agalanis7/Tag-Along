# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Activity.destroy_all

basketball = Activity.find_or_create_by(name: "Basketball")
Activity.find_or_create_by(name: "Softball")
Activity.find_or_create_by(name: "Tennis")
Activity.find_or_create_by(name: "Volleyball")
Activity.find_or_create_by(name: "Cycling")


Location.destroy_all

bball_court = Location.create(name: "Basketball court", street: "Lincoln rd", city: "Miami", state: "Fl", country: "USA")

ActivityLocation.create(activity: basketball, location: bball_court)
