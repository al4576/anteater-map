// Anteater Location Data - UPDATED
const LOCATIONS = [
  {
    "id": "zoo-001",
    "name": "Abilene Zoo",
    "address": "2070 Zoo Ln, Abilene, TX 79602, USA",
    "city": "Abilene",
    "state": "TX",
    "country": "United States",
    "lat": 32.4390889,
    "lng": -99.6909357,
    "website": "http://www.abilenezoo.org/?utm_source=gmb&utm_medium=organic",
    "encounter": true,
    "species": [
      "Giant Anteater"
    ],
    "notes": "Home to 'Demo' (mother) and her twin pups born in 2022 (first twins for the zoo). Exhibits are located in the South America area.",
    "encounter_details": "Giant Anteater Tour: $25/person (3+). Tuesdays, Thursdays, Saturdays at 11:00 AM. 20-30 mins. Behind-the-scenes look at diet and adaptations. Unavailable Jan-March due to temps."
  },
  {
    "id": "zoo-002",
    "name": "Aggieland Safari",
    "address": "18075 FM974, Bryan, TX 77808, USA",
    "city": "Bryan",
    "state": "TX",
    "country": "United States",
    "lat": 30.8746929,
    "lng": -96.23462669999999,
    "website": "https://www.aggielandsafari.com/",
    "encounter": false,
    "species": [
      "Southern Tamandua"
    ],
    "notes": "Tamanduas are typically found in the Adventure Zoo's 'Nocturnal Hallway.'",
    "encounter_details": "No specific tamandua encounter listed (capybara and otter encounters available)."
  },
  {
    "id": "zoo-003",
    "name": "Alabama Safari Park",
    "address": "1664 Venable Rd, Hope Hull, AL 36043, USA",
    "city": "Hope Hull",
    "state": "AL",
    "country": "United States",
    "lat": 32.2163154,
    "lng": -86.3986674,
    "website": "http://www.alabamasafaripark.com/",
    "encounter": false,
    "species": [
      "Giant Anteater"
    ],
    "notes": "The park participates in the 'Anteaters & Highways' conservation project in Brazil.",
    "encounter_details": ""
  },
  {
    "id": "zoo-004",
    "name": "Alexandria Zoological Park",
    "address": "3016 Masonic Dr, Alexandria, LA 71301, USA",
    "city": "Alexandria",
    "state": "LA",
    "country": "United States",
    "lat": 31.2877778,
    "lng": -92.45722219999999,
    "website": "https://www.thealexandriazoo.com/",
    "encounter": false,
    "species": [
      "Giant Anteater"
    ],
    "notes": "Located in the 'Amazon' exhibit area alongside jaguars and caimans.",
    "encounter_details": ""
  },
  {
    "id": "zoo-005",
    "name": "Audubon Zoo",
    "address": "6500 Magazine St, New Orleans, LA 70118, USA",
    "city": "New Orleans",
    "state": "LA",
    "country": "United States",
    "lat": 29.9237334,
    "lng": -90.1314068,
    "website": "https://audubonnatureinstitute.org/",
    "encounter": false,
    "species": [
      "Giant Anteater"
    ],
    "notes": "Part of the South American Pampas exhibit. No current public anteater encounter listed.",
    "encounter_details": ""
  },
  {
    "id": "zoo-006",
    "name": "Austin Aquarium",
    "address": "13530 US-183 #101, Austin, TX 78750, USA",
    "city": "Austin",
    "state": "TX",
    "country": "United States",
    "lat": 30.4499019,
    "lng": -97.792278,
    "website": "http://www.austinaquarium.com/",
    "encounter": false,
    "species": [
      "Southern Tamandua"
    ],
    "notes": "Tamanduas are part of the 'Rainforest' interactive exhibits.",
    "encounter_details": "Encounters use a 'Token' system; while sloths and porcupines are listed, tamanduas are often featured as 'Animal Ambassadors' during general floor hours."
  },
  {
    "id": "zoo-007",
    "name": "Bergen County Zoo",
    "address": "Van Saun County Park, 216 Forest Ave, Paramus, NJ 07652, USA",
    "city": "Paramus",
    "state": "NJ",
    "country": "United States",
    "lat": 40.9336376,
    "lng": -74.047575,
    "website": "https://bergencountynj.gov/bergen-county-department-of-parks/bergen-county-zoo/",
    "encounter": false,
    "species": [
      "Giant Anteater"
    ],
    "notes": "Located in the South American section. The zoo focuses on New World species.",
    "encounter_details": ""
  },
  {
    "id": "zoo-008",
    "name": "Big Joel's Safari",
    "address": "13187 State Hwy M, Wright City, MO 63390, USA",
    "city": "Wright City",
    "state": "MO",
    "country": "United States",
    "lat": 38.7898121,
    "lng": -91.02145999999999,
    "website": "http://www.bigjoelsafari.com/",
    "encounter": false,
    "species": [
      "Southern Tamandua"
    ],
    "notes": "Private facility; tamanduas are part of the 'Petting Zoo/Foot Safari' area.",
    "encounter_details": "Sloth encounters available, but no specific tamandua encounter currently listed."
  },
  {
    "id": "zoo-009",
    "name": "Branson's Promised Land Zoo",
    "address": "2751 Shepherd of the Hills Expy, Branson, MO 65616, USA",
    "city": "Branson",
    "state": "MO",
    "country": "United States",
    "lat": 36.6520222,
    "lng": -93.2749218,
    "website": "https://www.plzoo.com/",
    "encounter": true,
    "species": [
      "Southern Tamandua"
    ],
    "notes": "Known for high levels of interaction with 'Animal Ambassadors.'",
    "encounter_details": "VIP Gold Experience allows you to choose an animal for a private encounter; Tamanduas are frequently available options. Price varies by package (approx $100-$150)."
  },
  {
    "id": "zoo-010",
    "name": "Brevard Zoo",
    "address": "8225 N Wickham Rd, Melbourne, FL 32940, USA",
    "city": "Melbourne",
    "state": "FL",
    "country": "United States",
    "lat": 28.2249886,
    "lng": -80.7138556,
    "website": "http://www.brevardzoo.org/",
    "encounter": false,
    "species": [
      "Giant Anteater"
    ],
    "notes": "Home to 'Boo' (female) and 'Abner' (male). They reside in the 'Rainforest Revealed' exhibit.",
    "encounter_details": ""
  },
  {
    "id": "zoo-011",
    "name": "Brights Zoo",
    "address": "3425 US-11E, Limestone, TN 37681, USA",
    "city": "Limestone",
    "state": "TN",
    "country": "United States",
    "lat": 36.2526819,
    "lng": -82.5976603,
    "website": "https://www.brightszoo.com/",
    "encounter": false,
    "species": [
      "Giant Anteater",
      "Southern Tamandua"
    ],
    "notes": "Private family-owned zoo. Anteaters are housed in the Central/South American section.",
    "encounter_details": ""
  },
  {
    "id": "zoo-012",
    "name": "Bronx Zoo",
    "address": "2300 Southern Blvd, Bronx, NY 10460, USA",
    "city": "Bronx",
    "state": "NY",
    "country": "United States",
    "lat": 40.85014150000001,
    "lng": -73.87672169999999,
    "website": "https://bronxzoo.com/",
    "encounter": false,
    "species": [
      "Giant Anteater"
    ],
    "notes": "Located in the Children's Zoo area. Publicly viewable daily.",
    "encounter_details": "Offers 'Wild Encounters,' but currently no specific public ticket for anteaters (mostly cheetahs, penguins, sloths)."
  },
  {
    "id": "zoo-013",
    "name": "Brookfield Zoo",
    "address": "8400 31st St, Brookfield, IL 60513, USA",
    "city": "Brookfield",
    "state": "IL",
    "country": "United States",
    "lat": 41.83352259999999,
    "lng": -87.8362185,
    "website": "https://www.czs.org/Brookfield-ZOO/Home",
    "encounter": false,
    "species": [
      "Giant Anteater",
      "Southern Tamandua"
    ],
    "notes": "Home to 'Tulum' (female giant anteater). Housed in Tropic World: South America.",
    "encounter_details": "No specific anteater encounter; has 'Wild Connections' for penguins and otters."
  },
  {
    "id": "zoo-014",
    "name": "Caldwell Zoo",
    "address": "2203 W Martin Luther King Jr Blvd, Tyler, TX 75702, USA",
    "city": "Tyler",
    "state": "TX",
    "country": "United States",
    "lat": 32.3699838,
    "lng": -95.3255729,
    "website": "http://www.caldwellzoo.org/",
    "encounter": false,
    "species": [
      "Giant Anteater"
    ],
    "notes": "Exhibited in 'Amazon River's Edge.'",
    "encounter_details": ""
  },
  {
    "id": "zoo-015",
    "name": "Charles Paddock Zoo",
    "address": "9100 Morro Rd, Atascadero, CA 93422, USA",
    "city": "Atascadero",
    "state": "CA",
    "country": "United States",
    "lat": 35.4667708,
    "lng": -120.6699131,
    "website": "http://www.centralcoastzoo.org/",
    "encounter": false,
    "species": [
      "Southern Tamandua"
    ],
    "notes": "Focuses on small-to-medium tropical species. Tamanduas are in the indoor/protected exhibits.",
    "encounter_details": ""
  },
  {
    "id": "zoo-016",
    "name": "Chattanooga Zoo",
    "address": "301 N Holtzclaw Ave, Chattanooga, TN 37404, USA",
    "city": "Chattanooga",
    "state": "TN",
    "country": "United States",
    "lat": 35.0426324,
    "lng": -85.2820989,
    "website": "http://www.chattzoo.org/",
    "encounter": true,
    "species": [
      "Giant Anteater"
    ],
    "notes": "Home to 'Betsy' and 'Pico.' They are known for being very food-motivated.",
    "encounter_details": "Wild Encounter: $150. Includes feeding yogurt and potentially touching their noses. 30 minutes. Limited availability."
  },
  {
    "id": "zoo-017",
    "name": "Cincinnati Zoo & Botanical Gardens",
    "address": "3400 Vine St, Cincinnati, OH 45220, USA",
    "city": "Cincinnati",
    "state": "OH",
    "country": "United States",
    "lat": 39.1441388,
    "lng": -84.50848979999999,
    "website": "https://cincinnatizoo.org/",
    "encounter": true,
    "species": [
      "Southern Tamandua"
    ],
    "notes": "Located in the Children\u2019s Zoo. Tamanduas are used as 'Animal Ambassadors.'",
    "encounter_details": "Private Animal Appearances: Can be booked for events starting at $300-$500. Not a standard walk-up ticketed encounter for individuals."
  },
  {
    "id": "zoo-018",
    "name": "Cleveland Metroparks Zoo",
    "address": "3900 Wildlife Way, Cleveland, OH 44109, USA",
    "city": "Cleveland",
    "state": "OH",
    "country": "United States",
    "lat": 41.4469876,
    "lng": -81.7118064,
    "website": "https://www.clevelandmetroparks.com/zoo",
    "encounter": false,
    "species": [
      "Giant Anteater"
    ],
    "notes": "Housed in the 'RainForest' building. They have a detailed research profile on their anteaters.",
    "encounter_details": ""
  },
  {
    "id": "zoo-019",
    "name": "Columbian Park Zoo",
    "address": "1915 Scott St, Lafayette, IN 47904, USA",
    "city": "Lafayette",
    "state": "IN",
    "country": "United States",
    "lat": 40.4134673,
    "lng": -86.8705371,
    "website": "http://columbianparkzoo.org/",
    "encounter": true,
    "species": [
      "Southern Tamandua"
    ],
    "notes": "Home to 'Digger' the tamandua. He is an ambassador animal.",
    "encounter_details": "Wild Encounter: $100 (includes 2 people). Approx 30 mins. Includes watching an enrichment session and a touching opportunity. Available April-October."
  },
  {
    "id": "zoo-020",
    "name": "Columbus Zoo & Aquarium",
    "address": "4850 W Powell Rd, Powell, OH 43065, USA",
    "city": "Powell",
    "state": "OH",
    "country": "United States",
    "lat": 40.1562089,
    "lng": -83.1173498,
    "website": "https://www.columbuszoo.org/",
    "encounter": true,
    "species": [
      "Southern Tamandua"
    ],
    "notes": "Tamanduas are part of the 'Adventure Cove' animal ambassador team.",
    "encounter_details": "Wild Encounters Experience: $600 for up to 10 guests. Private tour that includes several ambassadors; tamanduas often rotate into this program."
  },
  {
    "id": "zoo-021",
    "name": "Connecticut's Beardsley Zoo",
    "address": "1875 Noble Ave, Bridgeport, CT 06610, USA",
    "city": "Bridgeport",
    "state": "CT",
    "country": "United States",
    "lat": 41.2097156,
    "lng": -73.1821327,
    "website": "https://www.beardsleyzoo.org/",
    "encounter": false,
    "species": [
      "Giant Anteater"
    ],
    "notes": "Home to 'Pana' (female) and 'E.O.' (male), named after entomologist E.O. Wilson. They have successfully bred multiple pups, including 'Mochilla' (now at Alexandria Zoo).",
    "encounter_details": ""
  },
  {
    "id": "zoo-023",
    "name": "Dallas World Aquarium",
    "address": "1801 N Griffin St, Dallas, TX 75202, USA",
    "city": "Dallas",
    "state": "TX",
    "country": "United States",
    "lat": 32.7834737,
    "lng": -96.805358,
    "website": "https://www.dwazoo.com/",
    "encounter": false,
    "species": [
      "Giant Anteater"
    ],
    "notes": "Exhibited in the Mundo Maya section. The aquarium is known for its multi-level rainforest recreation.",
    "encounter_details": ""
  },
  {
    "id": "zoo-024",
    "name": "Dallas Zoo",
    "address": "650 S R.L. Thornton Fwy, Dallas, TX 75203, USA",
    "city": "Dallas",
    "state": "TX",
    "country": "United States",
    "lat": 32.7409696,
    "lng": -96.81532,
    "website": "https://www.dallaszoo.com/",
    "encounter": false,
    "species": [
      "Giant Anteater",
      "Southern Tamandua"
    ],
    "notes": "Giant anteaters are typically in the 'Wilds of Africa' or South American areas. Tamanduas are often used as education ambassadors.",
    "encounter_details": "Offers 'Backstage Safaris' (starting at $160-$180), but anteaters are not currently a guaranteed part of the rotation (rotates between elephants, predators, and lemurs)."
  },
  {
    "id": "zoo-025",
    "name": "Denver Zoo",
    "address": "2300 Steele St, Denver, CO 80205, USA",
    "city": "Denver",
    "state": "CO",
    "country": "United States",
    "lat": 39.7495961,
    "lng": -104.9508519,
    "website": "https://denverzoo.org/",
    "encounter": false,
    "species": [
      "Southern Tamandua"
    ],
    "notes": "Southern Tamanduas are kept as part of the Conservation Alliance's South American focus. Known as the 'stinkers of the forest' in zoo educational talks due to their scent glands.",
    "encounter_details": ""
  },
  {
    "id": "zoo-026",
    "name": "Detroit Zoo",
    "address": "8450 W 10 Mile Rd, Royal Oak, MI 48067, USA",
    "city": "Royal Oak",
    "state": "MI",
    "country": "United States",
    "lat": 42.4768358,
    "lng": -83.14904419999999,
    "website": "http://detroitzoo.org/",
    "encounter": false,
    "species": [
      "Giant Anteater"
    ],
    "notes": "Home to 'Bissel' and 'Mojo.' They are located in the American Grasslands habitat.",
    "encounter_details": ""
  },
  {
    "id": "zoo-027",
    "name": "DeYoung Family Zoo",
    "address": "N5406 Co Rd 577, Wallace, MI 49893, USA",
    "city": "Wallace",
    "state": "MI",
    "country": "United States",
    "lat": 45.3075872,
    "lng": -87.6434172,
    "website": "http://www.thedeyoungfamilyzoo.com/",
    "encounter": false,
    "species": [
      "Southern Tamandua"
    ],
    "notes": "Private zoo known for high-interaction exhibits, though no specific tamandua-only public booking is listed online.",
    "encounter_details": ""
  },
  {
    "id": "zoo-028",
    "name": "Discovery Cove Orlando",
    "address": "6000 Discovery Cove Way, Orlando, FL 32821, USA",
    "city": "Orlando",
    "state": "FL",
    "country": "United States",
    "lat": 28.4050951,
    "lng": -81.4631122,
    "website": "https://discoverycove.com/orlando?utm_source=google&utm_medium=organic&utm_campaign=gbp_listing",
    "encounter": true,
    "species": [
      "Southern Tamandua"
    ],
    "notes": "Tamanduas are part of the 'Animal Ambassador' team and are often brought out for the 'Animal Trek.'",
    "encounter_details": "Animal Trek: $79-$99 upgrade. Guests meet various ambassadors including birds, sloths, and tamanduas. 30-minute experience. Participants must be at least 6 years old."
  },
  {
    "id": "zoo-029",
    "name": "Disney's Animal Kingdom",
    "address": "Bay Lake, FL 34747, USA",
    "city": "Bay Lake",
    "state": "FL",
    "country": "United States",
    "lat": 28.3574423,
    "lng": -81.5905788,
    "website": "https://disneyworld.disney.go.com/destinations/animal-kingdom/?CMP=OKC-80007823_GM_WDW_destination_disneysanimalkingdomthemepark_NA",
    "encounter": false,
    "species": [
      "Giant Anteater"
    ],
    "notes": "Located in the Oasis Exhibits (near the park entrance). The habitat features leafy canopies and tranquil pools. Known for running through sprinklers as enrichment.",
    "encounter_details": ""
  },
  {
    "id": "zoo-030",
    "name": "El Paso Zoo",
    "address": "Train Station, 4001 E Paisano Dr, El Paso, TX 79905, USA",
    "city": "El Paso",
    "state": "TX",
    "country": "United States",
    "lat": 31.7690489,
    "lng": -106.4448897,
    "website": "http://www.elpasozoo.org/",
    "encounter": false,
    "species": [
      "Southern Tamandua"
    ],
    "notes": "Exhibited in the South America section. No currently active public encounter listed.",
    "encounter_details": ""
  },
  {
    "id": "zoo-031",
    "name": "Electric City Aquarium & Reptile Den",
    "address": "300 Lackawanna Ave, Scranton, PA 18503, USA",
    "city": "Scranton",
    "state": "PA",
    "country": "United States",
    "lat": 41.4079877,
    "lng": -75.66826739999999,
    "website": "http://www.electriccityaquarium.com/",
    "encounter": false,
    "species": [
      "Southern Tamandua"
    ],
    "notes": "The facility features tamanduas alongside rainforest reptiles. They focus on education/ambassador animals.",
    "encounter_details": ""
  },
  {
    "id": "zoo-032",
    "name": "Franklin Park Zoo",
    "address": "1 Franklin Park Rd, Boston, MA 02121, USA",
    "city": "Boston",
    "state": "MA",
    "country": "United States",
    "lat": 42.3051206,
    "lng": -71.08976950000002,
    "website": "https://www.zoonewengland.org/franklin-park-zoo/",
    "encounter": false,
    "species": [
      "Giant Anteater"
    ],
    "notes": "Exhibited in the Tropical Forest pavilion. No specific public anteater feeding or encounter listed currently.",
    "encounter_details": ""
  },
  {
    "id": "zoo-033",
    "name": "Fresno Chaffee Zoo",
    "address": "894 W Belmont Ave, Fresno, CA 93728, USA",
    "city": "Fresno",
    "state": "CA",
    "country": "United States",
    "lat": 36.7521966,
    "lng": -119.8231766,
    "website": "https://fcz.org/",
    "encounter": false,
    "species": [
      "Giant Anteater"
    ],
    "notes": "Home to 'Chive' (female) and her pup 'Aj\u00ed' (born 2022). They participate in the Anteaters & Highways conservation program.",
    "encounter_details": ""
  },
  {
    "id": "zoo-034",
    "name": "Great Bend-Brit Spaugh Zoo",
    "address": "2123 Main St, Great Bend, KS 67530, USA",
    "city": "Great Bend",
    "state": "KS",
    "country": "United States",
    "lat": 38.373035,
    "lng": -98.76636010000001,
    "website": "https://www.greatbendks.net/84/Zoo",
    "encounter": false,
    "species": [
      "Southern Tamandua"
    ],
    "notes": "Home to 'Enzo' (male), a Southern Tamandua who serves as an education ambassador.",
    "encounter_details": "Meet-and-greets occur during special events/keeper chats, but there is no regularly scheduled private encounter for purchase."
  },
  {
    "id": "zoo-035",
    "name": "Greensboro Science Center",
    "address": "4301 Lawndale Dr, Greensboro, NC 27455, USA",
    "city": "Greensboro",
    "state": "NC",
    "country": "United States",
    "lat": 36.1296495,
    "lng": -79.8334197,
    "website": "http://www.greensboroscience.org/",
    "encounter": false,
    "species": [
      "Giant Anteater"
    ],
    "notes": "The center previously housed a beloved anteater named 'Eury' who passed in 2023. The habitat remains part of the Animal Discovery Zoological Park.",
    "encounter_details": ""
  },
  {
    "id": "zoo-036",
    "name": "Greenville Zoo",
    "address": "150 Cleveland Park Dr, Greenville, SC 29601, USA",
    "city": "Greenville",
    "state": "SC",
    "country": "United States",
    "lat": 34.8476002,
    "lng": -82.3856309,
    "website": "http://www.greenvillezoo.com/",
    "encounter": true,
    "species": [
      "Giant Anteater"
    ],
    "notes": "Home to 'Anton' the Giant Anteater, known for eating over 35,000 insects daily.",
    "encounter_details": "Anteater Enrichment Encounter: $43.75+ per person. Must be requested 2 weeks in advance. Includes learning about and providing enrichment for the anteater."
  },
  {
    "id": "zoo-037",
    "name": "Gulf Breeze Zoo",
    "address": "5701 Gulf Breeze Pkwy, Gulf Breeze, FL 32563, USA",
    "city": "Gulf Breeze",
    "state": "FL",
    "country": "United States",
    "lat": 30.40116159999999,
    "lng": -86.9844129,
    "website": "http://www.gbzoo.com/",
    "encounter": false,
    "species": [
      "Giant Anteater"
    ],
    "notes": "Home to 'Demetrio' and 'Alice.' They are exhibited in the South American Aviary area.",
    "encounter_details": ""
  },
  {
    "id": "zoo-038",
    "name": "Happy Hollow Park & Zoo",
    "address": "748 Story Rd, San Jose, CA 95112, USA",
    "city": "San Jose",
    "state": "CA",
    "country": "United States",
    "lat": 37.3259432,
    "lng": -121.8607856,
    "website": "https://happyhollow.org/",
    "encounter": false,
    "species": [
      "Giant Anteater"
    ],
    "notes": "Anteaters at Happy Hollow are fed a specialized pelleted diet plus oranges and avocado. Housed in the 'Zoo on the Hill' area.",
    "encounter_details": ""
  },
  {
    "id": "zoo-039",
    "name": "Hattiesburg Zoo",
    "address": "107 S 17th Ave, Hattiesburg, MS 39401, USA",
    "city": "Hattiesburg",
    "state": "MS",
    "country": "United States",
    "lat": 31.3226596,
    "lng": -89.3150027,
    "website": "http://www.hattiesburgzoo.com/",
    "encounter": false,
    "species": [
      "Giant Anteater"
    ],
    "notes": "Giant anteaters reside in the South American exhibit. No specific encounter listed for this species (sloth/lemur/wallaby encounters are the primary offerings).",
    "encounter_details": ""
  },
  {
    "id": "zoo-040",
    "name": "Hillcrest Park Zoo",
    "address": "1208 N Norris St, Clovis, NM 88101, USA",
    "city": "Clovis",
    "state": "NM",
    "country": "United States",
    "lat": 34.4084766,
    "lng": -103.1834935,
    "website": "https://hillcrestparkzoo.com/",
    "encounter": false,
    "species": [
      "Southern Tamandua"
    ],
    "notes": "A smaller facility that focuses on education; tamanduas are part of the tropical mammal collection.",
    "encounter_details": ""
  },
  {
    "id": "zoo-041",
    "name": "Houston Zoo",
    "address": "6200 Hermann Park Dr, Houston, TX 77030, USA",
    "city": "Houston",
    "state": "TX",
    "country": "United States",
    "lat": 29.7157813,
    "lng": -95.39032069999999,
    "website": "https://www.houstonzoo.org/",
    "encounter": false,
    "species": [
      "Giant Anteater"
    ],
    "notes": "Located in the 'South America's Pantanal' exhibit. The zoo provides significant funding for the 'Anteaters & Highways' project in Brazil.",
    "encounter_details": ""
  },
  {
    "id": "zoo-042",
    "name": "Jacksonville Zoo & Gardens",
    "address": "370 Zoo Pkwy, Jacksonville, FL 32218, USA",
    "city": "Jacksonville",
    "state": "FL",
    "country": "United States",
    "lat": 30.4040262,
    "lng": -81.6436476,
    "website": "http://www.jacksonvillezoo.org/",
    "encounter": false,
    "species": [
      "Giant Anteater"
    ],
    "notes": "Located in the 'Range of the Jaguar' South American loop. They often share space with other South American species in mixed-animal habitats.",
    "encounter_details": ""
  },
  {
    "id": "zoo-043",
    "name": "John Ball Zoo",
    "address": "1300 Fulton St W, Grand Rapids, MI 49504, USA",
    "city": "Grand Rapids",
    "state": "MI",
    "country": "United States",
    "lat": 42.9624365,
    "lng": -85.7029737,
    "website": "https://jbzoo.org/",
    "encounter": false,
    "species": [
      "Giant Anteater"
    ],
    "notes": "Giant anteaters are housed in the South American habitat, recently integrated with Chacoan peccaries and capybaras.",
    "encounter_details": ""
  },
  {
    "id": "zoo-044",
    "name": "Kentucky Down Under Adventure Zoo",
    "address": "3700 L and North Turnpike Road, at Exit 58, I-65, Horse Cave, KY 42749, USA",
    "city": "Horse Cave",
    "state": "KY",
    "country": "United States",
    "lat": 37.2030154,
    "lng": -85.9328298,
    "website": "https://www.kentuckydownunder.com/",
    "encounter": false,
    "species": [
      "Southern Tamandua"
    ],
    "notes": "While famous for kangaroo interactions, they house tamanduas as part of their exotic animal collection, often seen in 'Animal Ambassador' chats.",
    "encounter_details": ""
  },
  {
    "id": "zoo-045",
    "name": "Keystone Safari",
    "address": "2284 Mercer Butler Pike, Grove City, PA 16127, USA",
    "city": "Grove City",
    "state": "PA",
    "country": "United States",
    "lat": 41.1258007,
    "lng": -80.1278268,
    "website": "http://www.keystonesafari.com/?utm_source=google&utm_medium=wix_google_business_profile&utm_campaign=959061869245255995",
    "encounter": false,
    "species": [
      "Giant Anteater"
    ],
    "notes": "Home to parents 'Helga' and 'Hugo.' Helga was actually raised at the facility. They recently celebrated the birth of a pup in late 2025.",
    "encounter_details": ""
  },
  {
    "id": "zoo-046",
    "name": "Lee Richardson Zoo",
    "address": "312 E Finnup Dr, Garden City, KS 67846, USA",
    "city": "Garden City",
    "state": "KS",
    "country": "United States",
    "lat": 37.9593595,
    "lng": -100.873311,
    "website": "http://leerichardsonzoo.org/",
    "encounter": false,
    "species": [
      "Giant Anteater"
    ],
    "notes": "Home to a female giant anteater named 'Chili.' She can be found in the South American Pampas exhibit.",
    "encounter_details": ""
  },
  {
    "id": "zoo-047",
    "name": "Lincoln's Children's Zoo",
    "address": "1222 S 27th St, Lincoln, NE 68502, USA",
    "city": "Lincoln",
    "state": "NE",
    "country": "United States",
    "lat": 40.79971250000001,
    "lng": -96.6808452,
    "website": "http://www.lincolnzoo.org/",
    "encounter": false,
    "species": [
      "Giant Anteater"
    ],
    "notes": "Home to 'Maisy' (mother) and 'Asterix' (father). They had a pup named 'Lancaster' in 2022. Pups are often visible for limited morning hours.",
    "encounter_details": ""
  },
  {
    "id": "zoo-048",
    "name": "Little Rock Zoo",
    "address": "1 Zoo Dr, Little Rock, AR 72205, USA",
    "city": "Little Rock",
    "state": "AR",
    "country": "United States",
    "lat": 34.7468773,
    "lng": -92.3302705,
    "website": "http://www.littlerockzoo.com/",
    "encounter": false,
    "species": [
      "Giant Anteater"
    ],
    "notes": "Located across from the Duiker exhibit in the South America section. Known for using their claws to tear into logs provided by keepers.",
    "encounter_details": ""
  },
  {
    "id": "zoo-049",
    "name": "Los Angeles Zoo & Botanical Gardens",
    "address": "5333 Zoo Dr, Los Angeles, CA 90027, USA",
    "city": "Los Angeles",
    "state": "CA",
    "country": "United States",
    "lat": 34.1482153,
    "lng": -118.2882601,
    "website": "https://www.lazoo.org/",
    "encounter": false,
    "species": [
      "Giant Anteater",
      "Southern Tamandua"
    ],
    "notes": "The tamanduas are often utilized as education animals. Giant anteaters are in a large naturalistic habitat within the South America section.",
    "encounter_details": ""
  },
  {
    "id": "zoo-050",
    "name": "Lupa Zoo",
    "address": "62 Nash Hill Rd, Ludlow, MA 01056, USA",
    "city": "Ludlow",
    "state": "MA",
    "country": "United States",
    "lat": 42.1956719,
    "lng": -72.4891588,
    "website": "http://lupazoo.org/",
    "encounter": false,
    "species": [
      "Southern Tamandua"
    ],
    "notes": "A smaller facility where tamanduas are part of a diverse collection of South American mammals.",
    "encounter_details": ""
  },
  {
    "id": "zoo-051",
    "name": "Memphis Zoo",
    "address": "2000 Prentiss Pl, Memphis, TN 38112, USA",
    "city": "Memphis",
    "state": "TN",
    "country": "United States",
    "lat": 35.15019270000001,
    "lng": -89.994219,
    "website": "https://memphiszoo.org/",
    "encounter": false,
    "species": [
      "Southern Tamandua"
    ],
    "notes": "Tamanduas are housed in the 'Cat Country' loop (which features many South American species) or the Tropical Bird House area as ambassadors.",
    "encounter_details": ""
  },
  {
    "id": "zoo-052",
    "name": "Mesker Park Zoo & Botanical Garden",
    "address": "1545 Mesker Park Dr, Evansville, IN 47720, USA",
    "city": "Evansville",
    "state": "IN",
    "country": "United States",
    "lat": 37.99685230000001,
    "lng": -87.6059008,
    "website": "http://www.meskerparkzoo.com/",
    "encounter": false,
    "species": [
      "Giant Anteater"
    ],
    "notes": "Housed in the 'Amazonia' exhibit, a 20,000 sq ft climate-controlled rainforest biome.",
    "encounter_details": ""
  },
  {
    "id": "zoo-053",
    "name": "Metro Richmond Zoo",
    "address": "8300 Beaver Bridge Rd, Moseley, VA 23120, USA",
    "city": "Moseley",
    "state": "VA",
    "country": "United States",
    "lat": 37.3831953,
    "lng": -77.7661679,
    "website": "http://www.metrorichmondzoo.com/",
    "encounter": false,
    "species": [
      "Giant Anteater"
    ],
    "notes": "Known for successful breeding programs. Anteaters are part of the South American walk-through areas.",
    "encounter_details": ""
  },
  {
    "id": "zoo-054",
    "name": "Miller Park Zoo",
    "address": "New York, NY 10019, USA",
    "city": "New York",
    "state": "NY",
    "country": "United States",
    "lat": 40.7678543,
    "lng": -73.9717321,
    "website": "https://www.bloomingtonparks.org/facilities/miller-park-zoo",
    "encounter": false,
    "species": [
      "Southern Tamandua"
    ],
    "notes": "Features a breeding pair of Southern Tamanduas located in the Tropical Rainforest building. They also serve as ambassador animals for classes.",
    "encounter_details": ""
  },
  {
    "id": "zoo-055",
    "name": "Montgomery Zoo & Mann Wildlife Learning Museum",
    "address": "2301 Coliseum Pkwy, Montgomery, AL 36110, USA",
    "city": "Montgomery",
    "state": "AL",
    "country": "United States",
    "lat": 32.4198404,
    "lng": -86.2751933,
    "website": "https://www.montgomeryzoo.com/",
    "encounter": true,
    "species": [
      "Giant Anteater"
    ],
    "notes": "Home to several anteaters including 'Navy', 'Chickpea', 'Lima', and 'Green Bean.' Located in the South America/Africa border area.",
    "encounter_details": "Maned Wolves/Giant Anteater Chat: Scheduled at 1:30 PM (varies by day). While it's a 'chat' and not a private hands-on ticket, keepers often provide enrichment during this time for public viewing."
  },
  {
    "id": "zoo-056",
    "name": "Moody Gardens",
    "address": "1 Hope Blvd, Galveston, TX 77554, USA",
    "city": "Galveston",
    "state": "TX",
    "country": "United States",
    "lat": 29.274746,
    "lng": -94.85169189999999,
    "website": "https://www.moodygardens.com/",
    "encounter": false,
    "species": [
      "Southern Tamandua"
    ],
    "notes": "Located in the Rainforest Pyramid. While they have otter and penguin encounters, the tamanduas are currently display-only or random ambassador sightings.",
    "encounter_details": ""
  },
  {
    "id": "zoo-057",
    "name": "Naples Zoo",
    "address": "1590 Goodlette-Frank Rd, Naples, FL 34102, USA",
    "city": "Naples",
    "state": "FL",
    "country": "United States",
    "lat": 26.1681188,
    "lng": -81.79058990000001,
    "website": "http://napleszoo.org/",
    "encounter": true,
    "species": [
      "Giant Anteater"
    ],
    "notes": "Home to 'Dee Gee' the Giant Anteater.",
    "encounter_details": "Wild Encounter: $100+ per person. Guests go behind the scenes to learn about conservation and assist in feeding Dee Gee (yogurt/special diet). Participants must be 5+."
  },
  {
    "id": "zoo-058",
    "name": "Nashville Zoo",
    "address": "3777 Nolensville Pk, Nashville, TN 37211, USA",
    "city": "Nashville",
    "state": "TN",
    "country": "United States",
    "lat": 36.0894986,
    "lng": -86.74247059999999,
    "website": "http://www.nashvillezoo.org/",
    "encounter": true,
    "species": [
      "Giant Anteater",
      "Southern Tamandua"
    ],
    "notes": "Home to 'Andre' the Tamandua, a famous star of their 'WildWorks' show. The zoo is a world leader in giant anteater breeding.",
    "encounter_details": "Backstage Pass: While Giant Anteaters are a staple, specific species interaction depends on the 'Animal Ambassador' rotation. Andre the Tamandua frequently meets guests after shows."
  },
  {
    "id": "zoo-059",
    "name": "North Florida Wildlife Center",
    "address": "1386 Cook Rd, Lamont, FL 32336, USA",
    "city": "Christmas",
    "state": "FL",
    "country": "United States",
    "lat": 30.4527978,
    "lng": -83.9105135,
    "website": "https://www.northfloridawildlife.org/",
    "encounter": true,
    "species": [
      "Giant Anteater"
    ],
    "notes": "Focuses heavily on up-close conservation experiences. Home to 'Eury' (referencing lineage) or current residents.",
    "encounter_details": "Giant Anteater Encounter: $150 per person. A private experience that includes entering the habitat area, learning about their specialized diet, and a feeding opportunity."
  },
  {
    "id": "zoo-060",
    "name": "Palm Beach Zoo",
    "address": "1301 Summit Blvd, West Palm Beach, FL 33405, USA",
    "city": "West Palm Beach",
    "state": "FL",
    "country": "United States",
    "lat": 26.666953,
    "lng": -80.0692442,
    "website": "https://www.palmbeachzoo.org/",
    "encounter": true,
    "species": [
      "Giant Anteater"
    ],
    "notes": "Home to giant anteaters in the Tropics section. They are known for their 'Safari Nights' events where animals are more active.",
    "encounter_details": "Interactive Experiences: The zoo periodically offers 'Anteater Experiences' (approx $50 upgrade) where guests can watch a training session and ask keeper questions."
  },
  {
    "id": "zoo-061",
    "name": "Pana'ewa Rainforest Zoo",
    "address": "800 Stainback Hwy, Hilo, HI 96720, USA",
    "city": "Hilo",
    "state": "HI",
    "country": "United States",
    "lat": 19.6553755,
    "lng": -155.0749049,
    "website": "https://www.parks.hawaiicounty.gov/divisions/pana-ewa-recreational-complex/pana-ewa-rainforest-zoo-gardens/plan-your-visit/-fsiteid-6#!/",
    "encounter": false,
    "species": [
      "Giant Anteater"
    ],
    "notes": "The only tropical rainforest zoo in the US. Anteaters are part of a lush, naturalistic South American collection.",
    "encounter_details": ""
  },
  {
    "id": "zoo-062",
    "name": "Phoenix Zoo",
    "address": "455 N Galvin Pkwy, Phoenix, AZ 85008, USA",
    "city": "Phoenix",
    "state": "AZ",
    "country": "United States",
    "lat": 33.4500374,
    "lng": -111.9470063,
    "website": "https://www.phoenixzoo.org/",
    "encounter": false,
    "species": [
      "Giant Anteater",
      "Southern Tamandua"
    ],
    "notes": "Giant anteaters can be found along the 'Tropics Trail.' Tamanduas are part of the 'Harmony Farm' or education ambassador group.",
    "encounter_details": ""
  },
  {
    "id": "zoo-063",
    "name": "Pittsburgh Zoo & Aquarium",
    "address": "7370 Baker St, Pittsburgh, PA 15206, USA",
    "city": "Pittsburgh",
    "state": "PA",
    "country": "United States",
    "lat": 40.4842648,
    "lng": -79.922206,
    "website": "http://www.pittsburghzoo.org/",
    "encounter": false,
    "species": [
      "Giant Anteater"
    ],
    "notes": "Located in the 'Tropical Forest' area. No current private encounter available for purchase.",
    "encounter_details": ""
  },
  {
    "id": "zoo-064",
    "name": "Point Defiance Zoo & Aquarium",
    "address": "5400 N Pearl St, Tacoma, WA 98407, USA",
    "city": "Tacoma",
    "state": "WA",
    "country": "United States",
    "lat": 47.3049533,
    "lng": -122.5216575,
    "website": "http://www.pdza.org/",
    "encounter": false,
    "species": [
      "Southern Tamandua"
    ],
    "notes": "Tamanduas are featured in the 'Wild Wonders Outdoor Theater' show. One of their famous residents is 'Gonza.'",
    "encounter_details": "Public show appearances daily; no private/paid encounter currently listed."
  },
  {
    "id": "zoo-065",
    "name": "Potawatomi Zoo",
    "address": "500 S Greenlawn Ave, South Bend, IN 46615, USA",
    "city": "South Bend",
    "state": "IN",
    "country": "United States",
    "lat": 41.6693401,
    "lng": -86.2179554,
    "website": "https://potawatomizoo.org/",
    "encounter": true,
    "species": [
      "Giant Anteater",
      "Southern Tamandua"
    ],
    "notes": "Home to 'Inca' (female) and 'Corri' (male). They recently moved into a new South American habitat.",
    "encounter_details": "Anteater Encounter: $75 per person. Includes a behind-the-scenes look at their habitat and a chance to provide enrichment. Seasonal availability (typically May-Sept)."
  },
  {
    "id": "zoo-066",
    "name": "Potter Park Zoo",
    "address": "1301 S Pennsylvania Ave, Lansing, MI 48912, USA",
    "city": "Lansing",
    "state": "MI",
    "country": "United States",
    "lat": 42.71786960000001,
    "lng": -84.5276713,
    "website": "http://www.potterparkzoo.org/",
    "encounter": false,
    "species": [
      "Giant Anteater"
    ],
    "notes": "Housed in the South American section. The zoo is very active in the SSP (Species Survival Plan) for giant anteaters.",
    "encounter_details": ""
  },
  {
    "id": "zoo-067",
    "name": "Reid Park Zoo",
    "address": "3400 E Zoo Ct, Tucson, AZ 85716, USA",
    "city": "Tucson",
    "state": "AZ",
    "country": "United States",
    "lat": 32.2098259,
    "lng": -110.9206637,
    "website": "https://reidparkzoo.org/?utm_source=google&utm_medium=organic&utm_campaign=GMB",
    "encounter": true,
    "species": [
      "Giant Anteater"
    ],
    "notes": "Home to 'Xochi' (female) and 'Zander' (male). They recently welcomed a pup named 'Lupa' (born 2023).",
    "encounter_details": "Behind-the-Scenes Tour: $95+. Can be customized to focus on the South American animals including the anteaters, depending on animal health and staff availability."
  },
  {
    "id": "zoo-068",
    "name": "Roger Williams Park Zoo",
    "address": "1000 Elmwood Ave, Providence, RI 02907, USA",
    "city": "Providence",
    "state": "RI",
    "country": "United States",
    "lat": 41.7903742,
    "lng": -71.4148082,
    "website": "http://www.rwpzoo.org/",
    "encounter": false,
    "species": [
      "Giant Anteater",
      "Southern Tamandua"
    ],
    "notes": "Home to Giant Anteaters 'Delilah' and 'Corwin.' The tamanduas are often featured in the 'Faces of the Rainforest' exhibit, which mimics an Amazonian environment.",
    "encounter_details": ""
  },
  {
    "id": "zoo-069",
    "name": "Rolling Hills Zoo",
    "address": "625 N Hedville Rd, Salina, KS 67401, USA",
    "city": "Salina",
    "state": "KS",
    "country": "United States",
    "lat": 38.8525676,
    "lng": -97.76415809999999,
    "website": "http://www.rollinghillszoo.org/",
    "encounter": false,
    "species": [
      "Giant Anteater"
    ],
    "notes": "Located in the South American area. Known for 'Dimitri' (male). The exhibit features a large outdoor yard and a climate-controlled indoor viewing area.",
    "encounter_details": ""
  },
  {
    "id": "zoo-070",
    "name": "Rosamond Gifford Zoo",
    "address": "1 Conservation Pl, Syracuse, NY 13204, USA",
    "city": "Syracuse",
    "state": "NY",
    "country": "United States",
    "lat": 43.0431701,
    "lng": -76.1810721,
    "website": "http://www.rosamondgiffordzoo.org/",
    "encounter": false,
    "species": [
      "Southern Tamandua"
    ],
    "notes": "Home to 'Mochi.' Found in the USS Antique exhibit (nocturnal/indoor rainforest section).",
    "encounter_details": ""
  },
  {
    "id": "zoo-071",
    "name": "Sacramento Zoo",
    "address": "3930 W Land Park Dr, Sacramento, CA 95822, USA",
    "city": "Sacramento",
    "state": "CA",
    "country": "United States",
    "lat": 38.5392791,
    "lng": -121.5040041,
    "website": "http://saczoo.org/",
    "encounter": false,
    "species": [
      "Giant Anteater"
    ],
    "notes": "Home to 'Inca.' The habitat is located near the entrance of the zoo in a lush, shaded area.",
    "encounter_details": ""
  },
  {
    "id": "zoo-072",
    "name": "Saint Louis Aquarium at Union Station",
    "address": "201 S 18th St, St. Louis, MO 63103, USA",
    "city": "St. Louis",
    "state": "MO",
    "country": "United States",
    "lat": 38.6277735,
    "lng": -90.2075416,
    "website": "https://www.stlouisaquarium.com/",
    "encounter": false,
    "species": [
      "Southern Tamandua"
    ],
    "notes": "Home to 'Mochi' the tamandua. Located in the 'Global Rivers' area. While highly visible, there is no public ticketed encounter.",
    "encounter_details": ""
  },
  {
    "id": "zoo-073",
    "name": "Saint Louis Zoo",
    "address": "1 Government Dr, St. Louis, MO 63110, USA",
    "city": "St. Louis",
    "state": "MO",
    "country": "United States",
    "lat": 38.6349169,
    "lng": -90.29097750000001,
    "website": "https://stlzoo.org/",
    "encounter": false,
    "species": [
      "Giant Anteater"
    ],
    "notes": "Located in the 'River\u2019s Edge' exhibit, specifically the South American section alongside bush dogs and capybaras.",
    "encounter_details": ""
  },
  {
    "id": "zoo-074",
    "name": "San Antonio Aquarium",
    "address": "6320 Bandera Rd, Leon Valley, TX 78238, USA",
    "city": "Leon Valley",
    "state": "TX",
    "country": "United States",
    "lat": 29.4871014,
    "lng": -98.6097745,
    "website": "http://www.sanantonioaquarium.net/",
    "encounter": true,
    "species": [
      "Southern Tamandua"
    ],
    "notes": "Tamanduas are part of the 'Rainforest' exhibit floor.",
    "encounter_details": "Interaction Tokens: Guests can purchase tokens (approx $20-$30 value) to feed or pet certain rainforest animals. Tamanduas are frequently available as part of the 'Animal Ambassador' rotation."
  },
  {
    "id": "zoo-075",
    "name": "San Antonio Zoo",
    "address": "3903 N St Mary's St, San Antonio, TX 78212, USA",
    "city": "San Antonio",
    "state": "TX",
    "country": "United States",
    "lat": 29.4635835,
    "lng": -98.4725926,
    "website": "https://sazoo.org/",
    "encounter": false,
    "species": [
      "Giant Anteater",
      "Southern Tamandua"
    ],
    "notes": "Located in the 'Kronkosky Tiny Tot Nature Spot' and 'Neotropica.' No public feeding/encounter currently listed.",
    "encounter_details": ""
  },
  {
    "id": "zoo-076",
    "name": "San Diego Zoo",
    "address": "2920 Zoo Dr, San Diego, CA 92101, USA",
    "city": "San Diego",
    "state": "CA",
    "country": "United States",
    "lat": 32.7360353,
    "lng": -117.1509849,
    "website": "https://zoo.sandiegozoo.org/",
    "encounter": false,
    "species": [
      "Giant Anteater",
      "Southern Tamandua"
    ],
    "notes": "Famous for 'Cinco' and 'Xena.' Located in the Elephant Odyssey (mixed species) and the Lost Forest. While they have many 'Exclusive Extras,' none currently feature anteaters specifically.",
    "encounter_details": ""
  },
  {
    "id": "zoo-077",
    "name": "San Diego Zoo Safari Park",
    "address": "15500 San Pasqual Valley Rd, Escondido, CA 92027, USA",
    "city": "Escondido",
    "state": "CA",
    "country": "United States",
    "lat": 33.0997931,
    "lng": -116.9922942,
    "website": "https://sdzsafaripark.org/",
    "encounter": false,
    "species": [
      "Southern Tamandua"
    ],
    "notes": "Tamanduas are part of the 'Walkabout Australia' and 'Nairobi Village' ambassador groups. Frequently seen during 'Wildlife Wonders' presentations.",
    "encounter_details": ""
  },
  {
    "id": "zoo-078",
    "name": "San Francisco Zoo",
    "address": "Sloat Blvd &, Upper Great Hwy, San Francisco, CA 94132, USA",
    "city": "San Francisco",
    "state": "CA",
    "country": "United States",
    "lat": 37.7329394,
    "lng": -122.5028348,
    "website": "https://www.sfzoo.org/",
    "encounter": false,
    "species": [
      "Giant Anteater"
    ],
    "notes": "Located in South America's Tropical Rainforest and Aviary. Housed near the capybaras.",
    "encounter_details": ""
  },
  {
    "id": "zoo-079",
    "name": "Santa Ana Zoo",
    "address": "1801 E Chestnut Ave, Santa Ana, CA 92701, USA",
    "city": "Santa Ana",
    "state": "CA",
    "country": "United States",
    "lat": 33.7435545,
    "lng": -117.8424885,
    "website": "http://www.santaanazoo.org/",
    "encounter": false,
    "species": [
      "Giant Anteater"
    ],
    "notes": "Part of the Tierney South America Trek. Features a breeding pair that contributes to the SSP.",
    "encounter_details": ""
  },
  {
    "id": "zoo-080",
    "name": "Santa Barbara Zoo",
    "address": "500 Ninos Dr, Santa Barbara, CA 93103, USA",
    "city": "Santa Barbara",
    "state": "CA",
    "country": "United States",
    "lat": 34.4204053,
    "lng": -119.6670952,
    "website": "http://www.sbzoo.org/",
    "encounter": false,
    "species": [
      "Giant Anteater"
    ],
    "notes": "Located in the 'Discovery Outpost.' Noted for their unique 'ant-hill' style enrichment feeders.",
    "encounter_details": ""
  },
  {
    "id": "zoo-081",
    "name": "Sedgwick County Zoo",
    "address": "5555 W Zoo Blvd, Wichita, KS 67212, USA",
    "city": "Wichita",
    "state": "KS",
    "country": "United States",
    "lat": 37.717034,
    "lng": -97.40856099999999,
    "website": "https://scz.org/",
    "encounter": false,
    "species": [
      "Giant Anteater"
    ],
    "notes": "Located in the Tropical America building. No public encounter listed (only for penguins/giraffes).",
    "encounter_details": ""
  },
  {
    "id": "zoo-082",
    "name": "Six Flags Great Adventure Wild Safari",
    "address": "4HH9+PJ, Jackson Township, NJ, USA",
    "city": "Jackson Township",
    "state": "NJ",
    "country": "United States",
    "lat": 40.1307062,
    "lng": -74.4297927,
    "website": "https://www.sixflags.com/wildsafariadventure",
    "encounter": false,
    "species": [
      "Giant Anteater"
    ],
    "notes": "Viewable from the drive-through safari in the 'Americas' section. Often seen foraging in the open grass areas.",
    "encounter_details": ""
  },
  {
    "id": "zoo-083",
    "name": "Smithsonian National Zoo",
    "address": "3001 Connecticut Ave NW, Washington, DC 20008, USA",
    "city": "Washington",
    "state": "DC",
    "country": "United States",
    "lat": 38.9296156,
    "lng": -77.0497844,
    "website": "https://nationalzoo.si.edu/",
    "encounter": false,
    "species": [
      "Giant Anteater",
      "Southern Tamandua"
    ],
    "notes": "Giant anteaters reside on the 'American Trail.' Tamanduas are located in the 'Amazonia' exhibit. Known for 'Dante' and 'Maripi.'",
    "encounter_details": ""
  },
  {
    "id": "zoo-084",
    "name": "Staten Island Zoo",
    "address": "614 Broadway, Staten Island, NY 10310, USA",
    "city": "Staten Island",
    "state": "NY",
    "country": "United States",
    "lat": 40.6250833,
    "lng": -74.1153588,
    "website": "http://www.statenislandzoo.org/",
    "encounter": false,
    "species": [
      "Southern Tamandua"
    ],
    "notes": "Housed in the tropical forest section. Tamanduas are frequently used in the zoo's virtual and traveling educational programs.",
    "encounter_details": ""
  },
  {
    "id": "zoo-085",
    "name": "Summerfield Zoo",
    "address": "3088 Flora Rd, Belvidere, IL 61008, USA",
    "city": "Belvidere",
    "state": "IL",
    "country": "United States",
    "lat": 42.204969,
    "lng": -88.84350839999999,
    "website": "http://www.summerfieldfarmandzoo.com/",
    "encounter": true,
    "species": [
      "Southern Tamandua"
    ],
    "notes": "A smaller, highly interactive zoo. Known for their 'Ambassador' animals.",
    "encounter_details": "Private Animal Encounter: $50-$100 (plus admission). Tamanduas are listed as a bookable species for up-close educational sessions. Must be booked in advance."
  },
  {
    "id": "zoo-086",
    "name": "Sunset Zoo",
    "address": "169 54th St, Brooklyn, NY 11220, USA",
    "city": "Manhattan",
    "state": "NY",
    "country": "United States",
    "lat": 40.64751649999999,
    "lng": -74.01994959999999,
    "website": "https://growthzoo.com/contact/",
    "encounter": false,
    "species": [
      "Giant Anteater"
    ],
    "notes": "Located in the 'South American Pampas' area. No current ticketed encounter.",
    "encounter_details": ""
  },
  {
    "id": "zoo-087",
    "name": "Sustainable Safari at Maplewood Mall",
    "address": "3001 White Bear Ave #2001, Maplewood, MN 55109, USA",
    "city": "Maplewood",
    "state": "MN",
    "country": "United States",
    "lat": 45.03052,
    "lng": -93.0223559,
    "website": "https://sustainablesafari.net/",
    "encounter": true,
    "species": [
      "Southern Tamandua"
    ],
    "notes": "A mall-based interactive zoo. Features tamanduas as major attractions.",
    "encounter_details": "Interaction Package: General admission + approx $15-$20 for interaction. Guests can pet and take photos with tamanduas during scheduled 'handling' times throughout the day."
  },
  {
    "id": "zoo-088",
    "name": "Tanganyika Wildlife Park",
    "address": "1000 S Hawkins Ln, Goddard, KS 67052, USA",
    "city": "Goddard",
    "state": "KS",
    "country": "United States",
    "lat": 37.672633,
    "lng": -97.5577569,
    "website": "http://www.twpark.com/",
    "encounter": true,
    "species": [
      "Giant Anteater"
    ],
    "notes": "One of the most interactive zoos in the country. Known for their 'Anteater and Avocado' sessions.",
    "encounter_details": "Anteater Meet & Greet: Part of the 'Best Day Ever' or 'Ultimate Weekend' packages ($150+). Includes feeding avocados to giant anteaters. Available seasonally."
  },
  {
    "id": "zoo-089",
    "name": "The Birmingham Zoo",
    "address": "2630 Cahaba Rd, Birmingham, AL 35223, USA",
    "city": "Birmingham",
    "state": "AL",
    "country": "United States",
    "lat": 33.4870467,
    "lng": -86.77940459999999,
    "website": "http://www.birminghamzoo.com/",
    "encounter": false,
    "species": [
      "Giant Anteater"
    ],
    "notes": "Located in the South American habitat. No public encounter listed (focuses on rhino/giraffe/sloth).",
    "encounter_details": ""
  },
  {
    "id": "zoo-090",
    "name": "The Buffalo Zoo",
    "address": "300 Parkside Ave, Buffalo, NY 14214, USA",
    "city": "Buffalo",
    "state": "NY",
    "country": "United States",
    "lat": 42.9371231,
    "lng": -78.85160909999999,
    "website": "http://www.buffalozoo.org/",
    "encounter": false,
    "species": [
      "Giant Anteater"
    ],
    "notes": "Home to 'Ketchikan' (male) and 'Aari' (female). Located in the 'Rainforest Falls' exhibit.",
    "encounter_details": ""
  },
  {
    "id": "zoo-091",
    "name": "The Toledo Zoo",
    "address": "2 Hippo Way, Toledo, OH 43609, USA",
    "city": "Toledo",
    "state": "OH",
    "country": "United States",
    "lat": 41.6216435,
    "lng": -83.5825426,
    "website": "https://www.toledozoo.org/",
    "encounter": false,
    "species": [
      "Southern Tamandua"
    ],
    "notes": "Found in the Museum of Science/Indoor Rainforest area. Tamanduas are part of their educational outreach fleet.",
    "encounter_details": ""
  },
  {
    "id": "zoo-092",
    "name": "Timbavati Wildlife Park",
    "address": "2220 Wisconsin Dells Pkwy, Wisconsin Dells, WI 53965, USA",
    "city": "Wisconsin Dells",
    "state": "WI",
    "country": "United States",
    "lat": 43.6223078,
    "lng": -89.78333719999999,
    "website": "http://www.timbavatiwildlifepark.com/",
    "encounter": true,
    "species": [
      "Southern Tamandua"
    ],
    "notes": "Private wildlife park with a focus on close-up encounters.",
    "encounter_details": "VIP Tour: Prices start around $100. Allows for private time with various mammals; tamanduas are a common request/option for these sessions."
  },
  {
    "id": "zoo-093",
    "name": "Turtle Back Zoo",
    "address": "560 Northfield Ave, West Orange, NJ 07052, USA",
    "city": "West Orange",
    "state": "NJ",
    "country": "United States",
    "lat": 40.7676853,
    "lng": -74.2799115,
    "website": "http://turtlebackzoo.com/",
    "encounter": false,
    "species": [
      "Giant Anteater",
      "Southern Tamandua"
    ],
    "notes": "Giant anteaters are in the South American exhibit area. Tamanduas are often kept in the education center.",
    "encounter_details": ""
  },
  {
    "id": "zoo-094",
    "name": "Virginia Safari Park",
    "address": "229 Safari Ln, Natural Bridge, VA 24578, USA",
    "city": "Natural Bridge",
    "state": "VA",
    "country": "United States",
    "lat": 37.6731761,
    "lng": -79.51684259999999,
    "website": "http://www.virginiasafaripark.com/",
    "encounter": false,
    "species": [
      "Giant Anteater"
    ],
    "notes": "Visible in the village walk-through area (not the drive-through). Home to 'Demetrio.'",
    "encounter_details": ""
  },
  {
    "id": "zoo-095",
    "name": "Washington Park Zoo",
    "address": "115 Lake Shore Dr, Michigan City, IN 46360, USA",
    "city": "Michigan City",
    "state": "IN",
    "country": "United States",
    "lat": 41.7253654,
    "lng": -86.90120069999999,
    "website": "http://washingtonparkzoo.com/",
    "encounter": false,
    "species": [
      "Southern Tamandua"
    ],
    "notes": "Located in the 'Amazon' area. No currently ticketed private interaction.",
    "encounter_details": ""
  },
  {
    "id": "zoo-096",
    "name": "Zoo Boise",
    "address": "355 Julia Davis Dr, Boise, ID 83702, USA",
    "city": "Boise",
    "state": "ID",
    "country": "United States",
    "lat": 43.60822049999999,
    "lng": -116.2031429,
    "website": "http://www.zooboise.org/",
    "encounter": false,
    "species": [
      "Giant Anteater"
    ],
    "notes": "Located in the 'South American' exhibit. No anteater encounter (only for sloths/penguins).",
    "encounter_details": ""
  },
  {
    "id": "zoo-097",
    "name": "Zoo Miami",
    "address": "12400 SW 152nd St, Miami, FL 33177, USA",
    "city": "Miami",
    "state": "FL",
    "country": "United States",
    "lat": 25.6095318,
    "lng": -80.3964056,
    "website": "https://www.zoomiami.org/",
    "encounter": false,
    "species": [
      "Giant Anteater"
    ],
    "notes": "Home to 'Baron' (male) and 'Priscilla' (female). They are featured in the Amazon and Beyond section.",
    "encounter_details": ""
  },
  {
    "id": "zoo-098",
    "name": "Zoological Wildlife Foundation Miami",
    "address": "16225 SW 172nd Ave, Miami, FL 33187, USA",
    "city": "Miami",
    "state": "FL",
    "country": "United States",
    "lat": 25.6140329,
    "lng": -80.47050879999999,
    "website": "http://www.zoologicalwildlifefoundation.com/",
    "encounter": true,
    "species": [
      "Giant Anteater",
      "Southern Tamandua"
    ],
    "notes": "A strictly by-appointment encounter facility. Home to 'Pili' the tamandua.",
    "encounter_details": "Anteater/Tamandua Encounter: $100-$150. A private session that allows for up-close interaction and photo opportunities. Must be booked in advance."
  },
  {
    "id": "zoo-099",
    "name": "Miller Zoo",
    "address": "20 Rte Hurley, Frampton, QC G0R 1M0, Canada",
    "city": "Frampton",
    "state": "QC",
    "country": "Canada",
    "lat": 46.5096183,
    "lng": -70.8253507,
    "website": "https://millerzoo.ca/",
    "encounter": false,
    "species": [
      "Giant Anteater"
    ],
    "notes": "Home to 'Xochi' and 'Lupa' (originally from US zoos). Located in the South American sector. Known for their rescue and rehabilitation focus.",
    "encounter_details": ""
  },
  {
    "id": "zoo-100",
    "name": "Aluxes Palenque",
    "address": "Carretera, Ruinas-Palenque Km 2.6, 29960 Palenque, Chis., Mexico",
    "city": "Palenque",
    "state": "Chis.",
    "country": "Mexico",
    "lat": 17.499517,
    "lng": -92.01495,
    "website": "https://aluxes.org/",
    "encounter": false,
    "species": [
      "Northern Tamandua"
    ],
    "notes": "An ecopark specializing in the rescue and release of Chiapas wildlife. Tamanduas are often brought in for rehab.",
    "encounter_details": ""
  },
  {
    "id": "zoo-101",
    "name": "Parque Zool\u00f3gico del Centenario",
    "address": "Av. Itzaes s/n x 59, Parque Santiago, Centro, 97000 M\u00e9rida, Yuc., Mexico",
    "city": "M\u00e9rida",
    "state": "Yuc.",
    "country": "Mexico",
    "lat": 20.9692828,
    "lng": -89.6401597,
    "website": "https://www.merida.gob.mx/centenario/centenario/centenario.phpx",
    "encounter": false,
    "species": [
      "Northern Tamandua"
    ],
    "notes": "A free public park in M\u00e9rida. Tamanduas are located in the tropical mammals section. No private encounters.",
    "encounter_details": ""
  },
  {
    "id": "zoo-102",
    "name": "Zool\u00f3gico Miguel \u00c1lvarez del Toro (ZOOMAT)",
    "address": "Calz. Cerro Hueco s/n, El Zapotal, 29094 Tuxtla Guti\u00e9rrez, Chis., Mexico",
    "city": "Tuxtla Guti\u00e9rrez",
    "state": "Chis.",
    "country": "Mexico",
    "lat": 16.7250544,
    "lng": -93.09365079999999,
    "website": "https://www.zoomat.chiapas.gob.mx/",
    "encounter": false,
    "species": [
      "Northern Tamandua"
    ],
    "notes": "Unique for only housing species native to Chiapas. Tamanduas are kept in large semi-wild enclosures. No public encounters.",
    "encounter_details": ""
  }
];