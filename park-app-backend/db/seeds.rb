# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# new york, cali, nevada
ny = State.create(name: 'New York')
cali = State.create(name: 'California')
nv = State.create(name: 'Nevada')

# new york parks:
Park.create(name: 'Appalachian Trail', state: ny)
Park.create(name: 'Chesapeake Bay', state: ny)
Park.create(name: 'Ellis Island', state: ny)

# california parks:
Park.create(name: 'Alcatraz Island', state: cali)
Park.create(name: 'Death Valley', state: cali)
Park.create(name: 'Golden Gate Bridge', state: cali)

# nevada parks:
Park.create(name: 'Great Basin', state: nv)
Park.create(name: 'Lake Mead', state: nv)
Park.create(name: 'Tule Springs Fossil Beds', state: nv)