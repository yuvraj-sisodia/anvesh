// Updated mock data repository for Anvesh including hike details and heritage info

export const DESTINATIONS = {
  "hampta pass trek": {
    name: "Hampta Pass Trek",
    location: "Himachal Pradesh, India",
    coordinates: "32.2276° N, 77.2588° E",
    tagline: "A spectacular crossover trek from the lush green Kullu valley to the barren desert of Lahaul.",
    rating: "4.7",
    reviews: "218 reviews",
    difficulty: "DIFFICULT",
    distance: "26 km",
    duration: "5 Days",
    altitude: "14,100 ft",
    season: "May - Oct",
    cost: "₹6,999",
    costSuffix: "per person",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=400&q=80",
    highlights: [
      "Cross the mighty Hampta Pass",
      "Stunning views of Deo Tibba",
      "Visit Chandratal Lake",
      "Diverse landscapes in one trek"
    ],
    categories: {
      "History & Lore": {
        title: "🏛️ The Legend of the Shepherd's Crossing",
        story: "For centuries, the Hampta Pass was not a tourist route but an ancient trade path connecting the nomadic shepherds of Kullu to the high-altitude pastures of Lahaul and Spiti. The shepherds, known as Gaddis, carry legendary tales of crossing the pass in heavy snows, guided by local gods (Devtas) whom they still appease with stone offerings at the summit cairn.",
        witness: "The Cairn Offering Ritual",
        directions: "Trek to the summit of Hampta Pass (14,100 ft). Stop at the stone pile (cairn) at the saddle. Observe how your local Gaddi guide places a fresh wildflower or stone on the pile, saying a prayer to the mountain lords for safe passage.",
        audioTitle: "Wind in the Pass",
        audioScript: "The roaring, biting wind whistles through the high-altitude rocky pass. Beneath the gusts, you hear the crunch of trekking boots on hard ice and the distant, rhythmic tinkle of bells from a flock of sheep descending the scree slopes.",
        baseCost: 0,
        costLabel: "Free experience (Included in trek)",
        accessibilityDetails: {
          "Standard": "Extremely rugged, multi-day trekking over loose scree, moraine, and snow bridges.",
          "Low-Walking": "Not recommended. Trails are steep and oxygen levels are low.",
          "Wheelchair/Stroller Accessible": "Inaccessible due to mountain wilderness and steep scree paths."
        }
      }
    }
  },
  "kyoto, japan": {
    name: "Kyoto, Japan",
    location: "Kansai Region, Japan",
    coordinates: "35.0116° N, 135.7681° E",
    tagline: "The cradle of Japanese culture, tea ceremonies, and ancient wooden architecture.",
    rating: "4.8",
    reviews: "320 reviews",
    difficulty: "MODERATE",
    distance: "8.5 km",
    duration: "1 Day",
    altitude: "345 ft",
    season: "Mar - Nov",
    cost: "Free",
    costSuffix: "entry",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=400&q=80",
    highlights: [
      "Moss paths of Honen-in",
      "Philosopher's path walk",
      "Kaiseki dashi tasting",
      "Nishijin weaver townhouses"
    ],
    categories: {
      "History & Lore": {
        title: "🏛️ The Moss-Lined Path of Honen-in Temple",
        story: "Tucked away in the eastern hills, Honen-in is a quiet sanctuary bypassed by large tour groups. Founded in 1680, its sand mounds are raked daily with patterns representing pure water. Walking through its thatched gate feels like stepping into a medieval scroll, where the wind through maple branches tells tales of wandering poets and monks who sought absolute silence.",
        witness: "The Morning Raking Ritual",
        directions: "Take the Kyoto City Bus 5 to Jodoji Stop. Walk east toward the mountains for 10 minutes along the Philosopher's Path. Arrive at 7:30 AM to see the temple caretaker meticulously drawing leaf patterns in the white sand.",
        audioTitle: "Bells in the Mist",
        audioScript: "The deep, resonant boom of the temple's bronze bell echoes through the mountain fog. As the sound decays over twenty seconds, it is joined by the gentle rustle of wet maple leaves and the soft sweep of a bamboo broom on mossy earth.",
        baseCost: 0,
        costLabel: "Free entry",
        accessibilityDetails: {
          "Standard": "Features stone step pathways, dirt trails, and historical wooden thresholds.",
          "Low-Walking": "Slight incline on access paths. Stone benches are placed near the entrance pond.",
          "Wheelchair/Stroller Accessible": "Wheelchair-accessible route is available via the southern gate. Main sand mounds can be viewed from flat stone pavement."
        }
      },
      "Culinary Roots": {
        title: "🥢 Nishiki Market Back-Alley Dashi Master",
        story: "Behind the main arcade lies a tiny stall where the chef boils kelp from Hokkaido and bonito flakes from Tosa. This 'dashi' broth is the savory heartbeat of Kyoto cuisine. For centuries, artisans have sourced water from deep underground wells to extract the pure umami flavors that define traditional Kaiseki dining.",
        witness: "Dashi Tasting & Bonito Shaving",
        directions: "Enter Nishiki Market from Karasuma side. Turn left into the second narrow lane. Look for the steaming copper pot and red lantern. Order a simple cup of warm dashi broth at the counter.",
        audioTitle: "The Simmering Hearth",
        audioScript: "Listen to the steady, soothing bubble of the dashi broth in a giant copper pot. Underneath it, you hear the rhythmic, crisp rasping sound of dried, fermented skipjack tuna being hand-shaved on a wooden plane.",
        baseCost: 5,
        costLabel: "Standard/Mid-Range ($4 - $8 per cup)",
        accessibilityDetails: {
          "Standard": "Tight standing room only in a crowded, high-energy historical alley.",
          "Low-Walking": "Flat concrete floor. Small wooden bar stools are available at the back counter.",
          "Wheelchair/Stroller Accessible": "Paved flat flooring. Alley is narrow (80cm wide); visit between 9 AM and 10 AM before crowds build for easy navigation."
        }
      },
      "Crafts & Art": {
        title: "🎨 The Nishijin Weaving Townhouses (Machiya)",
        story: "In the narrow residential streets of Nishijin, the rhythmic clacking of wooden looms still spills from traditional wooden machiya townhouses. Here, weavers use centuries-old jacquard cards to weave complex silk tapestries, keeping alive a traditional craft that once clothed emperors and courtesans.",
        witness: "Watching a Master Weaver at Work",
        directions: "Take the Karasuma Subway Line to Imadegawa Station. Walk west into the residential lanes behind Horikawa Street. Keep your ears open for the clattering sound and look for sliding screen doors left open to let the air in.",
        audioTitle: "The Song of the Loom",
        audioScript: "The hypnotic, double-beat clack-clack of the heavy oak shuttle flying across silk warps. In the background, the soft creak of the wooden foot-treadles and the low hum of the weaver singing an old folk tune.",
        baseCost: 0,
        costLabel: "Free to observe from the street",
        accessibilityDetails: {
          "Standard": "Paved narrow roads, viewing done while standing outside traditional screens.",
          "Low-Walking": "Flat terrain throughout. Benches available in nearby park (Kamigyo playground).",
          "Wheelchair/Stroller Accessible": "Paved streets are flat with low traffic. Excellent visibility from street level into open-front workshops."
        }
      },
      "Music & Soundscapes": {
        title: "🎧 The Bamboo Sough of Saga-Toriimoto",
        story: "While Arashiyama bamboo forest is packed, the northern path of Saga-Toriimoto offers absolute silence. The wind blowing through these tall stalks creates a hollow, rustling sound that has been designated as one of the '100 Soundscapes of Japan'.",
        witness: "Listening to the Bamboo Sough",
        directions: "Take the train to Saga-Arashiyama Station, walk north-west past Adashino Nenbutsu-ji Temple. Follow the ascending stone path into the bamboo-bordered lane.",
        audioTitle: "The Wind in the Reeds",
        audioScript: "The deep, echoing creaks of massive bamboo canes rubbing together in the wind, like the notes of an ancient wooden flute. Underneath, dry bamboo leaves rustle like soft rain.",
        baseCost: 0,
        costLabel: "Free experience",
        accessibilityDetails: {
          "Standard": "Requires walking up a moderate hill on natural soil and stone steps.",
          "Low-Walking": "Paved road options are available nearby with resting spots every 50 meters.",
          "Wheelchair/Stroller Accessible": "A secondary flat paved access road runs parallel to the dirt trail, allowing a smooth ride under the bamboo canopy."
        }
      }
    }
  },
  "mumbai, india": {
    name: "Mumbai, India",
    location: "Maharashtra, India",
    coordinates: "18.9220° N, 72.8347° E",
    tagline: "A chaotic, beautiful metropolis built on seven islands, carrying centuries of maritime heritage.",
    rating: "4.6",
    reviews: "154 reviews",
    difficulty: "EASY",
    distance: "12 km",
    duration: "2 Days",
    altitude: "45 ft",
    season: "Oct - Mar",
    cost: "Free",
    costSuffix: "experience",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=400&q=80",
    highlights: [
      "Banganga tank diya lighting",
      "Crawford Market cutting chai",
      "Sassoon fish dock net weavers",
      "Haji Ali Sufi Qawwali chants"
    ],
    categories: {
      "History & Lore": {
        title: "🏛️ The Sacred Waters of Banganga Tank",
        story: "Hidden amidst the luxury skyscrapers of Malabar Hill lies a fresh-water oasis dating back to the 12th century Silhara dynasty. According to legend, the spring was created when Lakshmana shot an arrow (Bana) into the earth to quench Rama's thirst. Surrounded by stone steps (ghats) and ancient temples, the water remains fresh despite being inches from the Arabian Sea.",
        witness: "The Evening Diya Lighting",
        directions: "Take a taxi to Teen Batti junction on Malabar Hill. Walk down the narrow stone alleys marked 'Banganga'. Sit on the stone steps of the tank at sunset to watch locals float clay lamps.",
        audioTitle: "Echoes of the Ghats",
        audioScript: "A soundscape of copper temple bells chiming in unison, the low drone of Sanskrit chants reflecting off the ancient stone, and the gentle splash of fresh water as ducks swim across the tank.",
        baseCost: 0,
        costLabel: "Free entry",
        accessibilityDetails: {
          "Standard": "Requires navigating steep, irregular stone stairs down to the tank floor.",
          "Low-Walking": "There is a flat paved viewing deck near the main entrance street with benches.",
          "Wheelchair/Stroller Accessible": "Best viewed from the top road overlooking the tank. Ramps lead down to the upper temple level, avoiding the steps."
        }
      },
      "Culinary Roots": {
        title: "🍛 The Chai Wallahs of Crawford Market",
        story: "In the bustling corridors of South Mumbai, the spice-infused cutting chai is the social glue. Brewed in massive brass kettles with grated ginger, crushed green cardamom, and heaps of lemongrass, the tea is boiled for hours. It is poured from high above to create a thick, frothy head, served in tiny 'cutting' glasses.",
        witness: "The Tea Aeration Performance",
        directions: "Walk to the corner of Lokmanya Tilak Road, opposite the historic Crawford Market building. Look for the stall with a large brass samovar and a crowd of merchants standing around it.",
        audioTitle: "The Cutting Chai Rhythm",
        audioScript: "The clinking of glass cups in wire crates, the roaring hiss of the kerosene burner, and the rhythmic, splashing sound of hot tea being poured back and forth from a height of three feet.",
        baseCost: 0.2,
        costLabel: "Extremely cheap (approx $0.15 - $0.30 per glass)",
        accessibilityDetails: {
          "Standard": "High density street crowd, stand on roadside while drinking.",
          "Low-Walking": "Very flat terrain, stall owners can bring plastic chairs upon request.",
          "Wheelchair/Stroller Accessible": "Paved sidewalks have high curbs. Accessible via vehicular drop-off right by the stall, where tea can be served directly to your vehicle or a flat curb area."
        }
      },
      "Crafts & Art": {
        title: "🎨 The Docks of Sassoon and Koli Loom Weaving",
        story: "Built in 1875 on reclaimed land, Sassoon Docks is the heart of Mumbai's original inhabitants, the Koli fisherfolk. While famous for fish auctions, the docks host artisans who repair massive, hand-knotted nylon nets. The patterns of these nets have been passed down orally through generations, customized to catch specific fish based on lunar tides.",
        witness: "Net Knotting & Repair",
        directions: "Enter Sassoon Docks in Colaba early in the morning (6:30 AM). Walk past the main gate towards the wet docks. The net weavers sit on large blue tarps along the dock walls.",
        audioTitle: "The Sea Walls of Sassoon",
        audioScript: "The slapping of sea waves against concrete walls, the screeching of seagulls overhead, and the snap-snap of heavy twine as fishers tighten knots with wooden shuttle needles.",
        baseCost: 0,
        costLabel: "Free to visit",
        accessibilityDetails: {
          "Standard": "Wet, slippery docks with fish crates and active loaders to dodge.",
          "Low-Walking": "Paved dock road is flat, but watch out for active handcarts. Resting spots are scarce.",
          "Wheelchair/Stroller Accessible": "The main dock pathway is a flat concrete road. Stroller/wheelchair visitors should stay on the paved main road to watch weavers from a safe, dry distance."
        }
      },
      "Music & Soundscapes": {
        title: "🎧 The Qawwali at Haji Ali Dargah",
        story: "Situated on a tiny islet off the coast of Worli, the Haji Ali Dargah is a tomb connected to the mainland by a narrow causeway. On Thursday and Friday evenings, devotional Sufi singers (Qawwals) gather in the courtyard. They sing passionate, improvisational poetry accompanied by harmonium and hand claps, creating an acoustic trance against the backdrop of crashing ocean waves.",
        witness: "The Friday Sufi Gathering",
        directions: "Walk across the Haji Ali causeway (only accessible during low tide). Enter the main courtyard of the mosque by 6:00 PM. Sit cross-legged on the cool marble floor.",
        audioTitle: "Oceanic Devotion",
        audioScript: "A swirling chorus of hand claps, a high-pitched harmonium melody, and powerful voices singing praises of the divine, all backed by the rhythmic crash of the tide hitting the temple walls.",
        baseCost: 0,
        costLabel: "Free (donations optional)",
        accessibilityDetails: {
          "Standard": "Requires walking 1km along a concrete causeway which can be wet and slippery.",
          "Low-Walking": "Wheelchairs or hand-pushed carts are hired by locals at the entrance to wheel visitors along the causeway for a small tip.",
          "Wheelchair/Stroller Accessible": "The mosque courtyard itself is flat marble. The causeway is flat but bumpy; motorized wheelchairs can traverse it easily during dry low-tides."
        }
      }
    }
  },
  "rome, italy": {
    name: "Rome, Italy",
    location: "Lazio Region, Italy",
    coordinates: "41.9028° N, 12.4964° E",
    tagline: "The Eternal City, where layers of ancient ruins, Renaissance art, and public fountains form a living museum.",
    rating: "4.9",
    reviews: "410 reviews",
    difficulty: "EASY",
    distance: "6.2 km",
    duration: "1 Day",
    altitude: "68 ft",
    season: "Year-Round",
    cost: "€5",
    costSuffix: "Pantheon entry",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=400&q=80",
    highlights: [
      "Solar beam at Pantheon Oculus",
      "Nasone fountains drinking trick",
      "Via Margutta art studios",
      "Trastevere evening accordions"
    ],
    categories: {
      "History & Lore": {
        title: "🏛️ The Sacred Oculus of the Pantheon",
        story: "The Pantheon's giant dome, built by Hadrian in 126 AD, remains the largest unreinforced concrete dome in the world. At its center is the Oculus, a 9-meter open circle. As the sun moves, a massive beam of light sweeps across the marble interior like a cosmic searchlight, once symbolizing the connection between Rome and the gods.",
        witness: "The Solar Beam Walk",
        directions: "Head to Piazza della Rotonda. Enter the Pantheon around noon on a sunny day to see the light pillar strike the floor.",
        audioTitle: "Chamber Whispers",
        audioScript: "The vast acoustic space of the brick dome hums with the whispers of hundreds of tourists, punctuated by the occasional echo of footsteps on ancient porphyry stone.",
        baseCost: 5,
        costLabel: "Standard (€5 ticket required)",
        accessibilityDetails: {
          "Standard": "Paved marble floor, standing room only, flat surface.",
          "Low-Walking": "Flat floor. Benches are lined along the circular perimeter walls for resting.",
          "Wheelchair/Stroller Accessible": "Equipped with a ramp at the entrance door. Inside is completely flat and smooth marble."
        }
      }
    }
  },
  "oaxaca, mexico": {
    name: "Oaxaca, Mexico",
    location: "Oaxaca State, Mexico",
    coordinates: "17.0732° N, 96.7266° W",
    tagline: "A vibrant cultural capital in southern Mexico, celebrated for Zapotec crafts and complex mole.",
    rating: "4.8",
    reviews: "185 reviews",
    difficulty: "EASY",
    distance: "5 km",
    duration: "1 Day",
    altitude: "5,080 ft",
    season: "Oct - May",
    cost: "$2",
    costSuffix: "donation",
    image: "https://images.unsplash.com/photo-1512813583145-baaa340ef29f?auto=format&fit=crop&w=400&q=80",
    highlights: [
      "Zapotec cochineal red dye",
      "Chocolate mills at Abastos",
      "Teotitlán pedal wool looms",
      "Zócalo afternoon marimbas"
    ],
    categories: {
      "History & Lore": {
        title: "🏛️ The Agave Fields and Zapotec Red (Cochineal)",
        story: "Centuries before synthetic dyes, the Zapotec people cultivated Cochineal—a tiny scale insect that feeds on the pads of nopal cacti. When dried and crushed, it produces a brilliant crimson dye that once colored the robes of European kings and cardinals. In the valleys of Oaxaca, families still maintain cactus nurseries, preserving this labor-intensive red dye process.",
        witness: "Cochineal Dye Extraction",
        directions: "Visit the community ethnobotanical garden behind the Temple of Santo Domingo. Or visit a family nursery in Santa María del Tule, located a short taxi ride from downtown.",
        audioTitle: "Crushing the Crimson",
        audioScript: "The soft, scraping sound of dried cochineal bugs being crushed on a volcanic stone mortar (metate), yielding a deep red paste, followed by the splash of water as it dissolves into brilliant scarlet.",
        baseCost: 2,
        costLabel: "Cheap ($2 - $5 entrance fee/donation)",
        accessibilityDetails: {
          "Standard": "Outdoor dirt paths with some loose gravel and sun exposure.",
          "Low-Walking": "Flat pathways, shade structures are provided with plastic chairs at the demo stations.",
          "Wheelchair/Stroller Accessible": "Main paths are packed earth and gravel, wide enough for chairs. Demostration table heights are accessible."
        }
      }
    }
  },
  "cairo, egypt": {
    name: "Cairo, Egypt",
    location: "Cairo Governorate, Egypt",
    coordinates: "30.0444° N, 31.2357° E",
    tagline: "The City of a Thousand Minarets, where Islamic medieval heritage meets the ancient Nile.",
    rating: "4.7",
    reviews: "312 reviews",
    difficulty: "MODERATE",
    distance: "14 km",
    duration: "2 Days",
    altitude: "75 ft",
    season: "Nov - Feb",
    cost: "$4",
    costSuffix: "show ticket",
    image: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=400&q=80",
    highlights: [
      "Applique stitchers of Bab Zuweila",
      "Stone oven flatbread baking",
      "Brass chasers of copper bazaar",
      "Tanoura whirling courtyard dance"
    ],
    categories: {
      "History & Lore": {
        title: "🏛️ The Tentmakers of Bab Zuweila",
        story: "Tucked inside a covered street behind the ancient gate of Bab Zuweila lies the Street of Tentmakers (Khayamiya). This medieval bazaar is home to the last guild of applique artists in Egypt. Originally making elaborate, colorful patterns for nomadic desert tents, these craftsmen sit cross-legged, stitching complex geometric Islamic motifs onto heavy canvas entirely by hand.",
        witness: "Hand Applique Stitching",
        directions: "Enter Al-Muizz street, walk south past the spice market to Bab Zuweila gate. The covered street of the tentmakers is directly opposite the gate.",
        audioTitle: "The Needle's Passage",
        audioScript: "The quiet, rhythmic friction of heavy thread passing through canvas, the snip-snip of small scissors, and the low, echoing calls to prayer from the surrounding minarets.",
        baseCost: 0,
        costLabel: "Free to visit the street",
        accessibilityDetails: {
          "Standard": "Historic cobblestone alley with busy pedestrian traffic and hanging goods.",
          "Low-Walking": "Flat road. High steps to sit in the tiny shops, but artisans are happy to hand down pieces to look at.",
          "Wheelchair/Stroller Accessible": "The street is covered and paved with flat stone blocks, though cobblestones can be bumpy. No steps on the street floor."
        }
      }
    }
  }
};

// Custom Response Generator for Custom Destination Search Queries
export function getDiscoveryData(destination, interest, mobility, budget) {
  const normalized = destination.toLowerCase().trim();
  
  // Try to match preset
  for (const key in DESTINATIONS) {
    if (normalized.includes(key) || key.includes(normalized)) {
      const data = DESTINATIONS[key];
      const categoryData = data.categories[interest] || Object.values(data.categories)[0];
      
      const accessibilityText = categoryData.accessibilityDetails[mobility] || categoryData.accessibilityDetails["Standard"];
      
      return {
        success: true,
        name: data.name,
        location: data.location,
        coordinates: data.coordinates,
        tagline: data.tagline,
        rating: data.rating,
        reviews: data.reviews,
        difficulty: data.difficulty,
        distance: data.distance,
        duration: data.duration,
        altitude: data.altitude,
        season: data.season,
        cost: data.cost || "Free",
        costSuffix: data.costSuffix || "experience",
        image: data.image,
        highlights: data.highlights,
        title: categoryData.title,
        story: categoryData.story,
        witness: categoryData.witness,
        directions: categoryData.directions,
        audioTitle: categoryData.audioTitle,
        audioScript: categoryData.audioScript,
        costCheck: budget === "Free Experiences Only" ? "100% Free Experience" : categoryData.costLabel,
        accessibilityCheck: accessibilityText
      };
    }
  }

  // Fallback dynamic entry
  const formattedDest = destination.split(",")[0].trim().replace(/^\w/, c => c.toUpperCase());
  const finalDest = destination.includes(",") ? destination : `${formattedDest}, Global Trail`;
  
  return {
    success: true,
    name: formattedDest,
    location: destination.includes(",") ? destination.split(",").slice(1).join(",").trim() : "Heritage Route",
    coordinates: "34.0522° N, 118.2437° W (Generated Location)",
    tagline: `A beautiful custom cultural trail located in ${formattedDest}, offering localized history and secrets.`,
    rating: "4.7",
    reviews: "12 reviews",
    difficulty: "MODERATE",
    distance: "10.4 km",
    duration: "1 Day",
    altitude: "120 ft",
    season: "Year-Round",
    cost: "Free",
    costSuffix: "experience",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80",
    highlights: [
      `Local micro-history of ${formattedDest}`,
      "Traditional architectural pathways",
      "Authentic neighborhood food preparation",
      "Street soundscapes and chants"
    ],
    title: `🏛️ The Forgotten Whispers of ${formattedDest}`,
    story: `Beneath the modern surface of ${formattedDest} lies a layered heritage dating back centuries. Local oral traditions speak of early settlements, trade pacts, and the hidden architectural footprints left by pioneers and craftsmen. Walking through the older sections reveals structural masonry that has survived modern development.`,
    witness: "The Dusk Lantern Walk",
    directions: `Head to the historic municipal center of ${formattedDest}. Locate the old clocktower or municipal archive. Walk 100 meters north along the stone alleyway just as the streetlights begin to flicker on.`,
    audioTitle: "Voices of the Elders",
    audioScript: "The faint chime of a distant clock tower, the low hum of street conversations in the local dialect, and the gentle wind passing through narrow historic corridors.",
    costCheck: "Free public access",
    accessibilityCheck: "Paved sidewalks with curb cuts. Flat terrain with no stairs required on the main heritage path."
  };
}
