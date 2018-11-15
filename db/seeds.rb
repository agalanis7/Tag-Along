# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Activity.destroy_all

basketball = Activity.find_or_create_by(name: "Basketball")
biking     = Activity.find_or_create_by(name: "Biking")
golf       = Activity.find_or_create_by(name: "Golf")
baseball   = Activity.find_or_create_by(name: "Baseball")
tennis     = Activity.find_or_create_by(name: "Tennis")
volleyball = Activity.find_or_create_by(name: "Volleyball")



Location.destroy_all

bball_court   = Location.find_or_create_by(name: "Basketball Court", street: "Lincoln rd", city: "Miami", state: "Fl", country: "USA")
bball_court_1 = Location.find_or_create_by(name: "Gibson Park", street: "401 NW 12th St", city: "Miami", state: "Fl", country: "USA")
bball_court_2 = Location.find_or_create_by(name: "Williams Park", street: "1717 NW 5th Ave", city: "Miami", state: "Fl", country: "USA")
bball_court_3 = Location.find_or_create_by(name: "Basketball Court", street: "123 NW 34th St", city: "Miami", state: "Fl", country: "USA")
bball_court_4 = Location.find_or_create_by(name: "Basketball Court", street: "799 NE 54th St", city: "Miami", state: "Fl", country: "USA")
bball_court_5 = Location.find_or_create_by(name: "Margaret Pace Park", street: "1745 N Bayshore Dr", city: "Miami", state: "Fl", country: "USA")
bball_court_6 = Location.find_or_create_by(name: "Jose Marti Park", street: "351 SW 4th Ave", city: "Miami", state: "Fl", country: "USA")
bball_court_7 = Location.find_or_create_by(name: "Basketball Court", street: "1955 N Bayshore Dr", city: "Miami", state: "Fl", country: "USA")
bball_court_8 = Location.find_or_create_by(name: "Dorsey Park", street: "1701 Nw 1st AV", city: "Miami", state: "Fl", country: "USA")

ActivityLocation.find_or_create_by(activity: basketball, location: bball_court)
ActivityLocation.find_or_create_by(activity: basketball, location: bball_court_1)
ActivityLocation.find_or_create_by(activity: basketball, location: bball_court_2)
ActivityLocation.find_or_create_by(activity: basketball, location: bball_court_3)
ActivityLocation.find_or_create_by(activity: basketball, location: bball_court_4)
ActivityLocation.find_or_create_by(activity: basketball, location: bball_court_5)
ActivityLocation.find_or_create_by(activity: basketball, location: bball_court_6)
ActivityLocation.find_or_create_by(activity: basketball, location: bball_court_7)
ActivityLocation.find_or_create_by(activity: basketball, location: bball_court_8)

biking_trail   = Location.find_or_create_by(name: "Amelia Earhart Park", street: "401 E 65th St", city: "Hieleah", state: "Fl", country: "USA")
biking_trail_1 = Location.find_or_create_by(name: "Virginia Key North Point Trails", street: "Arthur Lamb Jr Rd,", city: "Miami", state: "Fl", country: "USA")
biking_trail_2 = Location.find_or_create_by(name: "Brickell Key Park", street: "Brickell Key Dr", city: "Miami", state: "Fl", country: "USA")
biking_trail_3 = Location.find_or_create_by(name: "Oleta River State Park", street: "3400 NE 163rd St", city: "Miami", state: "Fl", country: "USA")

ActivityLocation.find_or_create_by(activity: biking, location: biking_trail)
ActivityLocation.find_or_create_by(activity: biking, location: biking_trail_1)
ActivityLocation.find_or_create_by(activity: biking, location: biking_trail_2)
ActivityLocation.find_or_create_by(activity: biking, location: biking_trail_3)

golf_field   = Location.find_or_create_by(name: "Normandy Shores Golf Course", street: "2401 Biarrits Dr", city: "Miami Beach", state: "Fl", country: "USA")
golf_field_1 = Location.find_or_create_by(name: "Biltmore Golf Course", street: "1210 Anastasia Ave", city: "Coral Gables", state: "Fl", country: "USA")
golf_field_2 = Location.find_or_create_by(name: "Crandon Golf at Key Biscayne", street: "6700 Crandon Blvd", city: "Key Biscayne", state: "Fl", country: "USA")
golf_field_3 = Location.find_or_create_by(name: "Granada Golf Course", street: "2001 Granada Blvd", city: "Coral Gables", state: "Fl", country: "USA")
golf_field_4 = Location.find_or_create_by(name: "La Gorce Golf Course", street: "5685 Alton Rd", city: "Miami Beach", state: "Fl", country: "USA")
golf_field_5 = Location.find_or_create_by(name: "Miami Beach Golf Club", street: "2301 Alton Rd", city: "Miami Beach", state: "Fl", country: "USA")
golf_field_6 = Location.find_or_create_by(name: "Deering Bay Yacht & Country", street: "13610 Deering Bay Dr", city: "Miami", state: "Fl", country: "USA")
golf_field_7 = Location.find_or_create_by(name: "Greynolds Golf Course", street: "17530 West Dixie Highway", city: "North Miami Beach", state: "Fl", country: "USA")

ActivityLocation.find_or_create_by(activity: golf, location: golf_field)
ActivityLocation.find_or_create_by(activity: golf, location: golf_field_1)
ActivityLocation.find_or_create_by(activity: golf, location: golf_field_2)
ActivityLocation.find_or_create_by(activity: golf, location: golf_field_3)
ActivityLocation.find_or_create_by(activity: golf, location: golf_field_4)
ActivityLocation.find_or_create_by(activity: golf, location: golf_field_5)
ActivityLocation.find_or_create_by(activity: golf, location: golf_field_6)
ActivityLocation.find_or_create_by(activity: golf, location: golf_field_7)

baseball_field   = Location.find_or_create_by(name: "Prince Field", street: "343 Payne Dr", city: "Miami Springs", state: "Fl", country: "USA")
baseball_field_1 = Location.find_or_create_by(name: "Baseball Field", street: "101 NW 34th St", city: "Miami", state: "Fl", country: "USA")
baseball_field_2 = Location.find_or_create_by(name: "Baseball Field", street: "511 SW 3rd Ave", city: "Miami", state: "Fl", country: "USA")
baseball_field_3 = Location.find_or_create_by(name: "Curtis Park", street: "1901 NW 24th Ave", city: "Miami", state: "Fl", country: "USA")
baseball_field_4 = Location.find_or_create_by(name: "Baseball Field", street: "2795 SW 37th Ave", city: "Coconut Grove", state: "Fl", country: "USA")

ActivityLocation.find_or_create_by(activity: baseball, location: baseball_field)
ActivityLocation.find_or_create_by(activity: baseball, location: baseball_field_1)
ActivityLocation.find_or_create_by(activity: baseball, location: baseball_field_2)
ActivityLocation.find_or_create_by(activity: baseball, location: baseball_field_3)
ActivityLocation.find_or_create_by(activity: baseball, location: baseball_field_4)

tennis_court   = Location.find_or_create_by(name: "Jason Schaffer Tennis Court", street: "650 West Ave", city: "Miami Beach", state: "Fl", country: "USA")
tennis_court_1 = Location.find_or_create_by(name: "Moore Tennis Center", street: "765 NW 36th St", city: "Miami", state: "Fl", country: "USA")
tennis_court_2 = Location.find_or_create_by(name: "Morningside Tennis Center", street: "750 NE 55th Terrace ", city: "Miami", state: "Fl", country: "USA")
tennis_court_3 = Location.find_or_create_by(name: "Miami Springs Tennis Courts", street: "401 Westward Drive", city: "Miami Spring", state: "Fl", country: "USA")
tennis_court_4 = Location.find_or_create_by(name: "Virginia Gardens Tennis Courts", street: "6420 NW 38th Terrace", city: "Virginia Gardens", state: "Fl", country: "USA")

ActivityLocation.find_or_create_by(activity: tennis, location: tennis_court)
ActivityLocation.find_or_create_by(activity: tennis, location: tennis_court_1)
ActivityLocation.find_or_create_by(activity: tennis, location: tennis_court_2)
ActivityLocation.find_or_create_by(activity: tennis, location: tennis_court_3)
ActivityLocation.find_or_create_by(activity: tennis, location: tennis_court_4)

volleyball_field   = Location.find_or_create_by(name: "Volleyball Miami", street: "873 Ocean Dr", city: "Miami Beach", state: "Fl", country: "USA")
volleyball_field_1 = Location.find_or_create_by(name: "Playa Collins Av", street: "101 27th St", city: "Miami Beach", state: "Fl", country: "USA")
volleyball_field_2 = Location.find_or_create_by(name: "Mahoney-Pearson Volleyball Courts", street: "1198, 1150 Standford Dr", city: "Coral Gables", state: "Fl", country: "USA")
volleyball_field_3 = Location.find_or_create_by(name: "Miami Beach Volley Training", street: "641 SW 46th AVE", city: "Miami", state: "Fl", country: "USA")
volleyball_field_4 = Location.find_or_create_by(name: "Key Biscayne Beach", street: "6747 Crandon Boulevard", city: "Key Biscayne", state: "Fl", country: "USA")

ActivityLocation.find_or_create_by(activity: volleyball, location: volleyball_field)
ActivityLocation.find_or_create_by(activity: volleyball, location: volleyball_field_1)
ActivityLocation.find_or_create_by(activity: volleyball, location: volleyball_field_2)
ActivityLocation.find_or_create_by(activity: volleyball, location: volleyball_field_3)
ActivityLocation.find_or_create_by(activity: volleyball, location: volleyball_field_4)

puts "hi"
