# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

routes = Route.create([
  {
    name: "Brooklyn & Manhattan Bridges",
    image_url: "https://iili.io/HCLhPpt.png",
    distance: 5.9,
    location: "Start at Cadman Plaza Park facing the Brooklyn War Memorial.",
    time: "Sunrise before the Brooklyn Bridge becomes too crowded"
  },
  {
    name: "Central Park",
    image_url: "https://iili.io/HCLjEut.png",
    distance: 5.0,
    location: "Central Park, start at the NYRR RUNCENTER featuring the New Balance Run Hub.",
    time: "Early morning or early evening. During the day, there is limited shade and lots of foot traffic."
  },
  {
    name: "Flushing Meadows-Corona Park",
    image_url: "https://iili.io/HCLhPpt.png",
    distance: 3.8,
    location: "Start on the boardwalk outside the 7 train's Mets Willets Point subway stop.",
    time: "Early morning or early evening. During the day, there is limited shade and lots of foot traffic."
  },
  {
    name: "High Bridge Bronx",
    image_url: "https://freeimage.host/i/HCLhPpthttps://iili.io/HCLeNse.png",
    distance: 3.4,
    location: "Start in the center of Keltch Park.",
    time: "Early morning or early evening. During the day, there can be limited shade and lots of foot traffic."
  },
  {
    name: "Lower Manhattan",
    image_url: "https://iili.io/HCLvo8v.png",
    distance: 4.6,
    location: "Start at the base of the Williamsburg Bridge on the Manhattan side.",
    time: "Early morning or late afternoon are great times to enjoy this route, but our favorite is to time the route to catch the sunset behind the Statue of Liberty."
  },
  {
    name: "North Brooklyn & Queens",
    image_url: "https://iili.io/HCLvWo7.png",
    distance: 6.1,
    location: "Start in the corner of Mcarren Park near Lorimer St and Driggs Ave.",
    time: " Early morning or early evening. During the day, there is limited shade and lots of foot traffic, cyclists, and cars."
  },
  {
    name: "Northern Manhattan",
    image_url: "https://iili.io/HCLrzQV.png",
    distance: 3.1,
    location: "Start at the Fort Tyron park entrance near the 190th St. subway station.",
    time: "Early morning or early evening. During the day, there is limited shade and lots of foot traffic."
  },
  {
    name: "Prospect Park",
    image_url: "https://iili.io/HCLrMGI.png",
    distance: 3.0,
    location: "Prospect Park, start at Grand Army Plaza under the Soldiers and Sailors Monument.",
    time: "Early morning or early evening. During the day, there is limited shade and lots of foot traffic."
  },
  {
    name: "Queens Waterfront",
    image_url: "https://iili.io/HCL4z9s.png",
    distance: 5.5,
    location: "Start at the Vernon Blvd Jackson Ave 7 train subway stop facing 51st Ave.",
    time: "Early morning or early evening. During the day, there is limited shade and lots of foot traffic."
  },
  {
    name: "Rockaway Beach",
    image_url: "https://iili.io/HCL65mJ.png",
    distance: 5.4,
    location: "Rockaway Beach, Rockaway Ferry Terminal,",
    time: "Early morning or early evening to enjoy the sunrise or the sunset along the beach."
  },
  {
    name: "Silver Lake Park",
    image_url: "https://iili.io/HCLPtn4.png",
    distance: 4.6,
    location: "Start outside the Staten Island St. George Terminal near bus platform D and the Ferry Terminal Viaduct.",
    time: "Early morning or late afternoon. Make sure you allow enough time to finish the route in daylight."
  },
  {
    name: "Van Cortlandt Park",
    image_url: "https://iili.io/HCLsYzb.png",
    distance: 3.5,
    location: "Start inside Van Cortlandt Park just inside the 242nd St. subway entrance.",
    time: "Early morning or early evening offer cooler temperatures while the shade from the tress can offer cooler runs in the afternoon than other locations in NYC."
  },
  {
    name: "Yankee Stadium to Grants Tomb",
    image_url: "https://iili.io/HCLLycN.png",
    distance: 3.2,
    location: "Start at Gate 6 of Yankee Stadium near the 161 Street-Yankee Stadium subway stop.",
    time: "Early morning or early evening. During the day, there is limited shade and lots of foot traffic."
  }
])