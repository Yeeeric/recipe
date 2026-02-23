const pantryGroups = [
  {
    id: "proteins",
    label: "Proteins",
    options: [
      { id: "chicken", label: "Chicken" },
      { id: "beef", label: "Ground beef" },
      { id: "seafood", label: "Seafood / tuna / shrimp" },
      { id: "fish", label: "White fish" },
      { id: "eggs", label: "Eggs" },
      { id: "tofu", label: "Tofu" },
      { id: "beans", label: "Beans / chickpeas" },
      { id: "cheese", label: "Cheese" },
      { id: "yogurt", label: "Yogurt" },
    ],
  },
  {
    id: "veg",
    label: "Vegetables & Greens",
    options: [
      { id: "leafy", label: "Leafy greens" },
      { id: "tomato", label: "Tomatoes" },
      { id: "potato", label: "Potatoes" },
      { id: "citrus", label: "Lemon / lime / orange" },
      { id: "berries", label: "Berries" },
      { id: "grapes", label: "Grapes" },
      { id: "spicy", label: "Chilies / hot sauce" },
    ],
  },
  {
    id: "carbs",
    label: "Carbs & Grains",
    options: [
      { id: "pasta", label: "Pasta / noodles" },
      { id: "rice", label: "Rice / grains" },
      { id: "bread", label: "Bread" },
      { id: "tortilla", label: "Tortillas / wraps" },
      { id: "chips", label: "Tortilla chips" },
    ],
  },
];

// Flat list if needed elsewhere
const pantryOptions = pantryGroups.flatMap((group) => group.options);

const recipesByMood = {
  comfort: [
    {
      title: "Creamy One-Pot Mac & Cheese",
      timeMinutes: 25,
      description: "Ultra-creamy stovetop mac that tastes like a hug in a bowl.",
      time: "25 min",
      difficulty: "Easy",
      tag: "Comfort Classic",
      ingredients: [
        "2 cups short pasta (elbows, shells, etc.)",
        "2 cups milk",
        "1 cup water",
        "1 cup shredded cheddar",
        "2 tbsp butter",
        "Salt & pepper to taste",
      ],
      steps: [
        "Add pasta, milk, water, a pinch of salt to a pot.",
        "Simmer gently, stirring often, until pasta is just tender.",
        "Remove from heat, stir in butter and cheddar until glossy.",
        "Season with pepper; thin with a splash of milk if needed.",
      ],
      keywords: ["pasta", "cheese"],
    },
    {
      title: "Slow-Baked Tomato Soup with Toasted Bread",
      timeMinutes: 45,
      description:
        "Deeply flavored tomato soup served with crunchy, olive-oil toast.",
      time: "45 min",
      difficulty: "Medium",
      tag: "Rainy Day",
      ingredients: [
        "1 can crushed tomatoes",
        "1 small onion, sliced",
        "2 cloves garlic, smashed",
        "2 cups vegetable broth",
        "2 tbsp olive oil",
        "1 tsp sugar, salt & pepper",
        "Bread slices for toasting",
      ],
      steps: [
        "Sauté onion and garlic in olive oil until soft.",
        "Add tomatoes, broth, sugar, salt and pepper.",
        "Simmer 30 minutes; blend until smooth and silky.",
        "Toast bread with olive oil and salt; serve on top of soup.",
      ],
      keywords: ["tomato", "bread"],
    },
    {
      title: "Japanese-Style Golden Curry (Weeknight Version)",
      timeMinutes: 40,
      description:
        "Sweet-savory curry with tender potatoes and carrots—deep comfort with minimal effort.",
      time: "40 min",
      difficulty: "Easy",
      tag: "Cozy Bowl",
      ingredients: [
        "1 onion, sliced",
        "2 carrots, chopped",
        "2 potatoes, cubed",
        "2 tbsp oil",
        "3 cups water or broth",
        "1 pack Japanese curry roux blocks",
        "Cooked rice to serve",
        "Optional: chicken thighs, tofu, or chickpeas",
      ],
      steps: [
        "Sauté onion in oil until softened and lightly golden.",
        "Add carrots and potatoes (and protein if using); cook 3–5 minutes.",
        "Add water/broth and simmer until vegetables are tender.",
        "Turn off heat, stir in curry roux until dissolved; simmer 5 minutes to thicken.",
        "Serve over rice.",
      ],
      keywords: ["rice", "potato"],
    },
    {
      title: "Miso-Butter Corn Ramen",
      timeMinutes: 12,
      description:
        "Instant-ramen upgrade with miso, butter, and sweet corn for a rich, savory broth.",
      time: "12 min",
      difficulty: "Easy",
      tag: "Noodle Hug",
      ingredients: [
        "1 pack instant ramen (discard or use seasoning as you like)",
        "1 tbsp miso paste",
        "1 tbsp butter",
        "1/2 cup corn (frozen or canned)",
        "1 egg (optional)",
        "Green onion or sesame (optional)",
      ],
      steps: [
        "Bring water to a simmer; add corn and noodles.",
        "Whisk miso with a little hot broth in a bowl, then stir back into the pot.",
        "Turn off heat, stir in butter until melted.",
        "Optional: soft-boil an egg or poach it in the broth.",
        "Top with green onion or sesame.",
      ],
      keywords: ["noodles", "pasta"],
    },
    {
      title: "Oven-Baked Chicken & Rice Tray",
      timeMinutes: 55,
      description:
        "Chicken thighs and rice baked together in one pan with savory stock and onions.",
      time: "55 min",
      difficulty: "Medium",
      tag: "Hands-Off Dinner",
      ingredients: [
        "4 bone-in chicken thighs",
        "1.5 cups long grain rice, rinsed",
        "3 cups chicken stock",
        "1 onion, sliced",
        "2 cloves garlic, minced",
        "2 tbsp butter or oil",
        "Optional: frozen peas or chopped carrots",
      ],
      steps: [
        "Heat the oven to 190°C / 375°F.",
        "Scatter rice, onion, garlic, and any veg in a baking dish; pour over hot stock.",
        "Season chicken and lay on top, skin-side up; drizzle with a little oil.",
        "Cover with foil and bake 30 minutes, then uncover and bake 15–20 minutes until rice is tender and chicken is golden.",
      ],
      keywords: ["rice", "chicken"],
    },
    {
      title: "Tomato Basil One-Pot Orzo",
      timeMinutes: 25,
      description:
        "Creamy, risotto-style orzo with tomato and basil cooked in a single saucepan.",
      time: "25 min",
      difficulty: "Easy",
      tag: "One Pot",
      ingredients: [
        "1 cup orzo",
        "1.5 cups vegetable or chicken stock",
        "1 cup canned tomatoes, crushed",
        "1 small onion or shallot, finely chopped",
        "1 clove garlic, minced",
        "2 tbsp olive oil",
        "Handful fresh basil or 1 tsp dried herbs",
        "Grated Parmesan to serve (optional)",
      ],
      steps: [
        "Sauté onion and garlic in olive oil until translucent.",
        "Stir in orzo to toast lightly, then add stock and tomatoes.",
        "Simmer, stirring occasionally, until orzo is al dente and saucy; add a splash of water if it gets too thick.",
        "Stir in basil and cheese if using, then serve.",
      ],
      keywords: ["pasta", "tomato", "cheese"],
    },
  ],
  energetic: [
    {
      title: "Citrus Power Bowl",
      timeMinutes: 20,
      description:
        "A bright bowl with grains, crunchy veg, and a punchy citrus dressing.",
      time: "20 min",
      difficulty: "Easy",
      tag: "Fresh Start",
      ingredients: [
        "1 cup cooked quinoa or rice",
        "1 orange or grapefruit, segmented",
        "1 small cucumber, chopped",
        "Handful baby spinach",
        "2 tbsp olive oil",
        "1 tbsp lemon juice",
        "Salt, pepper, chili flakes",
      ],
      steps: [
        "Whisk olive oil, lemon juice, salt, pepper, and chili flakes.",
        "In a bowl, layer grains, spinach, cucumber, and citrus segments.",
        "Drizzle dressing over the top and toss gently.",
        "Taste and adjust seasoning before serving.",
      ],
      keywords: ["rice", "leafy", "citrus"],
    },
    {
      title: "Matcha Yogurt Parfait",
      timeMinutes: 10,
      description:
        "Protein-packed yogurt with matcha, nuts, and fruit for a clean energy lift.",
      time: "10 min",
      difficulty: "Easy",
      tag: "Morning Boost",
      ingredients: [
        "1 cup Greek yogurt",
        "1 tsp matcha powder",
        "1–2 tsp honey or maple syrup",
        "Granola or chopped nuts",
        "Fresh berries or sliced fruit",
      ],
      steps: [
        "Stir matcha and honey into the yogurt until smooth and pale green.",
        "Layer yogurt with granola and fruit in a glass or bowl.",
        "Finish with a sprinkle of nuts or extra matcha on top.",
      ],
      keywords: ["yogurt"],
    },
    {
      title: "Herby Chimichurri Chickpea Smash Toast",
      timeMinutes: 12,
      description:
        "Bright, garlicky, herb-forward toast that feels like flipping the lights on.",
      time: "12 min",
      difficulty: "Easy",
      tag: "Zingy",
      ingredients: [
        "1 can chickpeas, rinsed",
        "2 tbsp olive oil",
        "1 tbsp red wine vinegar or lemon juice",
        "1 small garlic clove, grated",
        "Handful parsley (and/or cilantro), chopped",
        "Salt, pepper, chili flakes",
        "Toasted bread",
      ],
      steps: [
        "Roughly smash chickpeas with olive oil, vinegar/lemon, garlic, herbs, salt, and pepper.",
        "Taste and adjust acidity and salt until it pops.",
        "Pile onto toast and finish with chili flakes.",
      ],
      keywords: ["bread", "beans"],
    },
    {
      title: "Thai-Inspired Larb Lettuce Cups",
      timeMinutes: 20,
      description:
        "Punchy lime, herbs, and a little heat—high flavor, light and energizing.",
      time: "20 min",
      difficulty: "Medium",
      tag: "Bright & Spicy",
      ingredients: [
        "300 g ground chicken or turkey (or crumbled tofu)",
        "1 tbsp oil",
        "Juice of 1–2 limes",
        "1 tbsp fish sauce (or soy sauce)",
        "1 tsp sugar or honey",
        "Mint + cilantro (big handful), chopped",
        "Cucumber slices",
        "Lettuce leaves to serve",
      ],
      steps: [
        "Cook ground meat/tofu in oil until done; remove from heat.",
        "Stir in lime juice, fish/soy sauce, and sugar; taste for balance.",
        "Fold in herbs and serve in lettuce leaves with cucumber.",
      ],
      keywords: ["chicken", "leafy"],
    },
    {
      title: "Sheet-Pan Harissa Veg & Halloumi",
      timeMinutes: 30,
      description:
        "Roasted vegetables and chewy halloumi with a chili-spiked harissa coating.",
      time: "30 min",
      difficulty: "Medium",
      tag: "High-Flavor Veg",
      ingredients: [
        "1 block halloumi, sliced",
        "2 cups mixed vegetables (zucchini, peppers, red onion)",
        "1–2 tbsp harissa paste",
        "2 tbsp olive oil",
        "Lemon wedges to serve",
      ],
      steps: [
        "Heat oven to 220°C / 425°F.",
        "Toss vegetables with harissa and olive oil and spread on a tray.",
        "Roast 10 minutes, then add halloumi slices on top.",
        "Roast another 10–12 minutes until halloumi is golden and veg are tender; finish with lemon.",
      ],
      keywords: ["cheese", "leafy"],
    },
    {
      title: "Mediterranean Chickpea Couscous Bowl",
      timeMinutes: 18,
      description:
        "Quick couscous with chickpeas, crunchy veg, and a lemony herb dressing.",
      time: "18 min",
      difficulty: "Easy",
      tag: "Light but Filling",
      ingredients: [
        "1 cup couscous",
        "1 cup boiling water or stock",
        "1 can chickpeas, rinsed",
        "1 small cucumber, diced",
        "Handful cherry tomatoes, halved",
        "2 tbsp olive oil",
        "Juice of 1 lemon",
        "Handful parsley, chopped",
      ],
      steps: [
        "Cover couscous with boiling water or stock, cover, and let stand 5 minutes; fluff with a fork.",
        "Whisk olive oil, lemon juice, and a pinch of salt together.",
        "Toss couscous with chickpeas, cucumber, tomatoes, parsley, and dressing.",
        "Adjust seasoning to taste and serve warm or at room temperature.",
      ],
      keywords: ["beans", "citrus"],
    },
  ],
  stressed: [
    {
      title: "5-Minute Peanut Butter Noodles",
      timeMinutes: 10,
      description:
        "Ridiculously simple savory-sweet noodles you can make between emails.",
      time: "10 min",
      difficulty: "Easy",
      tag: "Low Effort",
      ingredients: [
        "1 serving noodles (any kind)",
        "1.5 tbsp peanut butter",
        "1 tbsp soy sauce",
        "1 tsp honey or sugar",
        "1 tsp rice vinegar or lime juice",
        "Warm water to loosen",
        "Chili flakes & green onions (optional)",
      ],
      steps: [
        "Cook noodles according to package; reserve a splash of cooking water.",
        "In a bowl, whisk peanut butter, soy, honey, vinegar, and a bit of warm water.",
        "Toss hot noodles in the sauce, adding cooking water to make it silky.",
        "Top with chili flakes and green onions if desired.",
      ],
      keywords: ["pasta"],
    },
    {
      title: "Microwave Mug Omelet",
      timeMinutes: 7,
      description:
        "A fluffy, protein-rich omelet in one mug with almost no cleanup.",
      time: "7 min",
      difficulty: "Easy",
      tag: "Desk-Friendly",
      ingredients: [
        "2 eggs",
        "2 tbsp milk or water",
        "2 tbsp shredded cheese",
        "A few cherry tomatoes or chopped veggies",
        "Salt & pepper",
      ],
      steps: [
        "Whisk eggs, milk, salt, and pepper in a large microwave-safe mug.",
        "Stir in cheese and chopped veggies.",
        "Microwave in 30-second bursts, stirring once, until just set.",
        "Let stand 1 minute; it will finish cooking as it rests.",
      ],
      keywords: ["eggs", "cheese"],
    },
    {
      title: "Rice Cooker (or Pot) Ginger Congee",
      timeMinutes: 45,
      description:
        "A calm, cozy bowl that’s gentle and forgiving—perfect when you’re maxed out.",
      time: "45 min",
      difficulty: "Easy",
      tag: "Soft Landing",
      ingredients: [
        "1/2 cup rice",
        "6 cups water or broth",
        "1 thumb ginger, sliced",
        "Salt to taste",
        "Optional toppings: soy sauce, sesame oil, scallions, shredded chicken",
      ],
      steps: [
        "Rinse rice; add to cooker/pot with water/broth and ginger.",
        "Cook until broken down and creamy (stir occasionally if on stovetop).",
        "Salt to taste and top with whatever feels easiest.",
      ],
      keywords: ["rice"],
    },
    {
      title: "Crispy-Edge Butter Soy Rice with Fried Egg",
      timeMinutes: 12,
      description:
        "Fast comfort: buttery soy-glossed rice with a crispy bottom and a runny egg.",
      time: "12 min",
      difficulty: "Easy",
      tag: "Barely Any Brainpower",
      ingredients: [
        "2 cups cooked rice (day-old is great)",
        "1 tbsp butter",
        "1–2 tsp soy sauce",
        "1 egg",
        "Optional: furikake or sesame, scallions",
      ],
      steps: [
        "Heat butter in a nonstick pan; press rice into an even layer.",
        "Cook until the bottom turns golden and crispy; drizzle soy sauce around the edge.",
        "Fry an egg in the same pan or alongside.",
        "Serve rice topped with the egg; add furikake/sesame if you have it.",
      ],
      keywords: ["rice", "eggs"],
    },
    {
      title: "Garlic Chili Tuna Toast",
      timeMinutes: 8,
      description:
        "Pantry tuna mixed with chili and garlic, piled onto crunchy toast.",
      time: "8 min",
      difficulty: "Easy",
      tag: "Cupboard Hero",
      ingredients: [
        "1 can tuna, drained",
        "1 tbsp mayonnaise or yogurt",
        "1 small garlic clove, grated",
        "1 tsp chili crisp or chili flakes in oil",
        "2 slices bread, toasted",
      ],
      steps: [
        "Mix tuna with mayo/yogurt, garlic, and chili.",
        "Taste and adjust salt and heat.",
        "Pile onto hot toast and eat straight away.",
      ],
      keywords: ["bread", "seafood", "spicy"],
    },
    {
      title: "One-Pan Tomato Egg Scramble",
      timeMinutes: 10,
      description:
        "Soft, saucy scrambled eggs with chunks of tomato and scallions, great over rice or toast.",
      time: "10 min",
      difficulty: "Easy",
      tag: "Any-Meal Eggs",
      ingredients: [
        "3 eggs",
        "1 large tomato, chopped (or 1/2 cup canned)",
        "1 tbsp oil",
        "1 tsp soy sauce",
        "Sliced green onions to finish",
      ],
      steps: [
        "Sauté tomato in oil for 2–3 minutes until juicy.",
        "Beat eggs with soy sauce and pour into the pan.",
        "Gently stir until just set but still soft.",
        "Finish with green onions and serve over rice or toast.",
      ],
      keywords: ["eggs", "tomato", "rice", "bread"],
    },
  ],
  romantic: [
    {
      title: "Garlic Butter Shrimp with Lemon Pasta",
      timeMinutes: 30,
      description:
        "Silky lemon-garlic butter pasta with juicy shrimp, perfect for two.",
      time: "30 min",
      difficulty: "Medium",
      tag: "Date Night",
      ingredients: [
        "200 g pasta (linguine or spaghetti)",
        "250 g shrimp, peeled",
        "3 tbsp butter",
        "2 cloves garlic, minced",
        "Zest & juice of 1 lemon",
        "2 tbsp grated Parmesan",
        "Parsley, salt & pepper",
      ],
      steps: [
        "Cook pasta in salted water until al dente; reserve 1/2 cup pasta water.",
        "Sauté garlic in butter until fragrant, then add shrimp; cook until pink.",
        "Add lemon zest, juice, and a splash of pasta water to create a sauce.",
        "Toss pasta with sauce and Parmesan; finish with parsley, salt, and pepper.",
      ],
      keywords: ["pasta", "seafood", "cheese"],
    },
    {
      title: "Seared Salmon with Honey-Dijon Pan Sauce",
      timeMinutes: 25,
      description:
        "Crispy skin, silky sauce—feels restaurant-y without being fussy.",
      time: "25 min",
      difficulty: "Medium",
      tag: "Simple Elegance",
      ingredients: [
        "2 salmon fillets",
        "Salt & pepper",
        "1 tbsp oil",
        "1 tbsp butter",
        "1 tsp Dijon mustard",
        "1 tsp honey",
        "Splash of lemon juice",
        "Optional: asparagus or greens to serve",
      ],
      steps: [
        "Season salmon. Sear skin-side down in oil until crisp; flip to finish.",
        "Remove salmon; add butter to the pan.",
        "Stir in Dijon, honey, and lemon juice; loosen with a splash of water if needed.",
        "Spoon sauce over salmon and serve with greens.",
      ],
      keywords: ["seafood", "leafy"],
    },
    {
      title: "Caprese Chicken Skillet",
      timeMinutes: 30,
      description:
        "Seared chicken breasts simmered with tomato, basil, and mozzarella for a one-pan main.",
      time: "30 min",
      difficulty: "Medium",
      tag: "Skillet Dinner",
      ingredients: [
        "2 chicken breasts",
        "1 cup cherry tomatoes, halved (or canned tomatoes)",
        "2 cloves garlic, minced",
        "1 tbsp olive oil",
        "4 slices mozzarella or 1/2 cup shredded",
        "Handful fresh basil",
        "Salt & pepper",
      ],
      steps: [
        "Season chicken and sear in olive oil until golden on both sides; remove from pan.",
        "Add garlic and tomatoes; cook until tomatoes soften and release juices.",
        "Return chicken to the pan and simmer 5–8 minutes until cooked through.",
        "Top chicken with mozzarella, cover until melted, then finish with basil.",
      ],
      keywords: ["chicken", "tomato", "cheese"],
    },
    {
      title: "Creamy Mushroom Garlic Tagliatelle",
      timeMinutes: 30,
      description:
        "Silky pasta coated in a creamy garlic mushroom sauce finished with parmesan.",
      time: "30 min",
      difficulty: "Medium",
      tag: "Pasta Night",
      ingredients: [
        "250 g tagliatelle or fettuccine",
        "250 g mushrooms, sliced",
        "2 cloves garlic, minced",
        "1 tbsp butter + 1 tbsp olive oil",
        "1/2 cup cream or evaporated milk",
        "1/3 cup grated Parmesan",
        "Parsley, salt & pepper",
      ],
      steps: [
        "Cook pasta in salted water until al dente; reserve 1/2 cup cooking water.",
        "Sauté mushrooms in butter and oil until deeply golden; add garlic for 1 minute.",
        "Pour in cream and simmer briefly, then stir in Parmesan.",
        "Toss pasta with the sauce, loosening with reserved water as needed; finish with parsley.",
      ],
      keywords: ["pasta", "cheese"],
    },
    {
      title: "Lemon Herb Roast Chicken Thighs & Potatoes",
      timeMinutes: 50,
      description:
        "Golden roasted chicken thighs and potatoes with a lemony herb pan sauce.",
      time: "50 min",
      difficulty: "Medium",
      tag: "Roast Dinner",
      ingredients: [
        "4 chicken thighs",
        "500 g potatoes, cut into chunks",
        "2 tbsp olive oil",
        "Juice and zest of 1 lemon",
        "2 cloves garlic, minced",
        "1 tsp dried oregano or mixed herbs",
        "Salt & pepper",
      ],
      steps: [
        "Heat oven to 200°C / 400°F.",
        "Toss potatoes with half the oil, half the garlic, herbs, salt, and pepper; spread in a roasting pan.",
        "Season chicken, rub with remaining oil, garlic, and lemon zest; place on top of potatoes.",
        "Roast 35–45 minutes until chicken is cooked through and potatoes are crisp at the edges, then squeeze lemon juice over everything.",
      ],
      keywords: ["chicken", "potato", "citrus"],
    },
  ],
  adventurous: [
    {
      title: "Spicy Gochujang Roasted Cauliflower Tacos",
      timeMinutes: 35,
      description:
        "Smoky, spicy cauliflower with crunchy toppings in warm tortillas.",
      time: "35 min",
      difficulty: "Medium",
      tag: "Flavor Adventure",
      ingredients: [
        "1 small head cauliflower, florets",
        "2 tbsp gochujang",
        "1 tbsp soy sauce",
        "1 tbsp honey",
        "2 tbsp oil",
        "Corn or flour tortillas",
        "Cabbage, lime, cilantro for topping",
      ],
      steps: [
        "Toss cauliflower with gochujang, soy, honey, and oil.",
        "Roast at 220°C / 425°F for 20–25 minutes until browned at edges.",
        "Warm tortillas and pile in cauliflower.",
        "Top with shredded cabbage, cilantro, and a squeeze of lime.",
      ],
      keywords: ["spicy", "tortilla"],
    },
    {
      title: "Mango Chili Lime Salsa with Chips",
      timeMinutes: 15,
      description:
        "Sweet, spicy, and tangy salsa that wakes up your palate.",
      time: "15 min",
      difficulty: "Easy",
      tag: "Snack Adventure",
      ingredients: [
        "1 ripe mango, diced",
        "1/4 red onion, finely chopped",
        "1 small chili, minced",
        "Juice of 1 lime",
        "Handful cilantro, chopped",
        "Salt to taste",
        "Tortilla chips for serving",
      ],
      steps: [
        "Combine mango, onion, chili, cilantro, and lime juice in a bowl.",
        "Season with salt and let sit 5–10 minutes.",
        "Serve with tortilla chips or spoon over grilled protein.",
      ],
      keywords: ["chips", "spicy"],
    },
    {
      title: "Sichuan Smashed Cucumber Salad",
      timeMinutes: 12,
      description:
        "Cold, crunchy, garlicky, and numbing-spicy (optional)—a big flavor shock in minutes.",
      time: "12 min",
      difficulty: "Easy",
      tag: "Tingly Crunch",
      ingredients: [
        "2 cucumbers",
        "1 clove garlic, grated",
        "1 tbsp soy sauce",
        "1 tbsp black vinegar (or rice vinegar)",
        "1 tsp sugar",
        "1–2 tsp chili oil",
        "Optional: toasted sesame seeds",
      ],
      steps: [
        "Smash cucumbers, then chop into bite-size pieces; lightly salt for 5 minutes, then drain.",
        "Mix soy sauce, vinegar, sugar, garlic, and chili oil.",
        "Toss cucumbers with dressing and top with sesame if desired.",
      ],
      keywords: ["spicy"],
    },
    {
      title: "Berbere Lentils with Spiced Oil",
      timeMinutes: 35,
      description:
        "Warm Ethiopian-inspired lentils with a fragrant spice kick and a glossy finish.",
      time: "35 min",
      difficulty: "Medium",
      tag: "Deep & Spiced",
      ingredients: [
        "1 cup red lentils",
        "1 small onion, chopped",
        "2 cloves garlic, minced",
        "2 tbsp oil",
        "1–2 tsp berbere spice blend (or curry + paprika + chili)",
        "2.5 cups water or broth",
        "Salt, lemon to finish",
      ],
      steps: [
        "Sauté onion and garlic in oil until soft.",
        "Stir in berbere for 30 seconds until fragrant.",
        "Add lentils and water/broth; simmer until creamy and tender.",
        "Salt to taste and finish with lemon.",
      ],
      keywords: ["beans", "spicy"],
    },
    {
      title: "Kimchi Fried Rice with Bacon",
      timeMinutes: 20,
      description:
        "Crispy fried rice tossed with kimchi, bacon, and a fried egg on top.",
      time: "20 min",
      difficulty: "Medium",
      tag: "Bold & Savory",
      ingredients: [
        "2 cups cold cooked rice",
        "1 cup chopped kimchi with some juices",
        "3 strips bacon, chopped (or ham)",
        "1 tbsp oil",
        "1 tsp soy sauce",
        "2 eggs",
        "Green onions to finish",
      ],
      steps: [
        "Cook bacon until crisp; push to one side and add kimchi, frying for 1–2 minutes.",
        "Add rice and soy sauce; fry until hot and a little crispy in spots.",
        "Fry eggs separately to your liking.",
        "Top rice with fried eggs and green onions.",
      ],
      keywords: ["rice", "eggs", "spicy"],
    },
    {
      title: "Coconut Lime Fish Curry",
      timeMinutes: 30,
      description:
        "Chunks of white fish gently poached in a fragrant coconut and lime broth.",
      time: "30 min",
      difficulty: "Medium",
      tag: "Fragrant Curry",
      ingredients: [
        "2 white fish fillets, cut into chunks",
        "1 small onion, sliced",
        "1 tbsp red or yellow curry paste",
        "1 can coconut milk",
        "Juice of 1 lime",
        "Oil, salt to taste",
        "Fresh herbs to serve (cilantro or basil)",
      ],
      steps: [
        "Sauté onion in a little oil until soft.",
        "Stir in curry paste and cook 30 seconds until fragrant.",
        "Pour in coconut milk and bring to a gentle simmer.",
        "Add fish pieces and poach 5–8 minutes until just cooked; finish with lime juice and herbs.",
      ],
      keywords: ["fish", "citrus"],
    },
  ],
  lazy: [
    {
      title: "Sheet-Pan Veggie & Feta Dinner",
      timeMinutes: 30,
      description:
        "Chop, toss, roast—everything cooks on one pan, including the cheese.",
      time: "30 min",
      difficulty: "Easy",
      tag: "One Pan",
      ingredients: [
        "Any mix of quick-roasting veg (zucchini, peppers, onions, cherry tomatoes)",
        "Olive oil",
        "Salt, pepper, dried oregano",
        "Block or chunks of feta",
        "Bread or cooked grains to serve",
      ],
      steps: [
        "Spread chopped veg on a sheet pan; drizzle with olive oil and season.",
        "Nestle feta among the veggies.",
        "Roast at 220°C / 425°F for 20–25 minutes until golden.",
        "Serve over bread or grains, spooning pan juices on top.",
      ],
      keywords: ["cheese", "bread"],
    },
    {
      title: "No-Cook Pantry Chickpea Salad",
      timeMinutes: 10,
      description:
        "A satisfying salad built entirely from pantry staples and a few fresh bits.",
      time: "10 min",
      difficulty: "Easy",
      tag: "Zero Stove",
      ingredients: [
        "1 can chickpeas, rinsed",
        "Olive oil",
        "Lemon juice or vinegar",
        "Salt, pepper, dried herbs",
        "Jarred roasted peppers or olives (optional)",
        "Any fresh herbs or raw veg you have",
      ],
      steps: [
        "Combine chickpeas with chopped peppers/olives and any fresh veg.",
        "Dress with olive oil, lemon juice or vinegar, salt, and pepper.",
        "Add dried herbs and fresh herbs if you have them.",
        "Let sit a few minutes for flavors to meld before eating.",
      ],
      keywords: ["beans"],
    },
    {
      title: "2-Ingredient Pita Pizzas",
      timeMinutes: 12,
      description:
        "Fast, crispy, customizable personal pizzas with almost no cleanup.",
      time: "12 min",
      difficulty: "Easy",
      tag: "Instant Gratification",
      ingredients: [
        "Pitas or naan",
        "Jarred pizza sauce or marinara",
        "Shredded cheese",
        "Any toppings you have (pepperoni, mushrooms, olives, etc.)",
      ],
      steps: [
        "Spread sauce on pitas, add cheese and toppings.",
        "Bake at 220°C / 425°F for 8–10 minutes until crisp and bubbly.",
        "Slice and eat immediately.",
      ],
      keywords: ["bread", "cheese"],
    },
    {
      title: "Tuna Mayo Onigiri-Style Rice Bowl",
      timeMinutes: 8,
      description:
        "All the onigiri vibes without shaping—just rice, tuna-mayo, and seaweed.",
      time: "8 min",
      difficulty: "Easy",
      tag: "No-Cook-ish",
      ingredients: [
        "Cooked rice",
        "1 can tuna, drained",
        "1–2 tbsp mayonnaise",
        "Soy sauce (optional)",
        "Nori (seaweed) sheets or furikake (optional)",
      ],
      steps: [
        "Mix tuna with mayo (and a tiny splash of soy sauce if you want).",
        "Spoon over warm rice and crumble nori on top.",
        "Eat with a spoon—zero shaping required.",
      ],
      keywords: ["rice", "seafood"],
    },
    {
      title: "Weeknight Mapo Tofu (Mild)",
      description:
        "Silky tofu and savory minced meat in a glossy, chili-bean sauce—weeknight-friendly and served over rice.",
      time: "25 min",
      timeMinutes: 25,
      difficulty: "Medium",
      tag: "Takeout at Home",
      ingredients: [
        "300 g soft tofu, cubed",
        "150 g ground pork or beef",
        "2 cloves garlic, minced",
        "1 tbsp ginger, minced",
        "1–2 tbsp doubanjiang or chili bean paste",
        "1 tbsp soy sauce",
        "1 tsp sugar",
        "1 cup water or broth",
        "1 tsp cornstarch mixed with 2 tbsp water",
        "Green onions to finish",
        "Cooked rice to serve",
      ],
      steps: [
        "Brown the ground meat in a pan, then add garlic and ginger and cook until fragrant.",
        "Stir in doubanjiang, soy sauce, and sugar; cook for 30 seconds.",
        "Pour in water or broth and bring to a simmer, then gently slide in tofu cubes.",
        "Stir in cornstarch slurry to thicken to a glossy sauce.",
        "Finish with chopped green onions and serve over rice.",
      ],
      keywords: ["tofu", "beef", "rice", "spicy"],
    },
    {
      title: "Crispy Baked Panko Fish",
      description:
        "Flaky white fish with a crunchy panko crust, baked instead of fried.",
      time: "25 min",
      timeMinutes: 25,
      difficulty: "Easy",
      tag: "Sheet-Pan",
      ingredients: [
        "2 white fish fillets",
        "1 cup panko breadcrumbs",
        "2 tbsp mayonnaise or yogurt",
        "1 tsp Dijon mustard",
        "Lemon wedges to serve",
      ],
      steps: [
        "Heat oven to 220°C / 425°F and line a tray.",
        "Spread mayo and Dijon over the top of the fish.",
        "Press panko onto the fish to coat in a thick layer.",
        "Bake 12–15 minutes until the topping is golden and the fish flakes easily.",
        "Serve with lemon wedges and any quick side veg or salad.",
      ],
      keywords: ["fish"],
    },
    {
      title: "Simple Red Lentil Soup",
      description:
        "Creamy, lightly spiced red lentil soup made in one pot, great with bread or rice.",
      time: "30 min",
      timeMinutes: 30,
      difficulty: "Easy",
      tag: "One Pot",
      ingredients: [
        "1 cup red lentils, rinsed",
        "1 small onion, chopped",
        "1 carrot, chopped",
        "2 cloves garlic, minced",
        "1 tbsp oil",
        "1 tsp ground cumin or curry powder",
        "4 cups vegetable or chicken stock",
        "Lemon wedges to serve",
      ],
      steps: [
        "Sauté onion, carrot, and garlic in oil until softened.",
        "Stir in cumin or curry powder for 30 seconds.",
        "Add lentils and stock; simmer 15–20 minutes until lentils are soft.",
        "Blend partially or leave chunky, then serve with a squeeze of lemon.",
      ],
      keywords: ["beans", "citrus"],
    },
  ],
};

const recipeCard = document.getElementById("recipeCard");
const recipeEmpty = document.getElementById("recipeEmpty");
const recipeContent = document.getElementById("recipeContent");
const recipeTitle = document.getElementById("recipeTitle");
const recipeDescription = document.getElementById("recipeDescription");
const recipeTime = document.getElementById("recipeTime");
const recipeDifficulty = document.getElementById("recipeDifficulty");
const recipeIngredients = document.getElementById("recipeIngredients");
const recipeSteps = document.getElementById("recipeSteps");
const pantryList = document.getElementById("pantryList");
const recipesList = document.getElementById("recipesList");
const recipesCount = document.getElementById("recipesCount");
const timeRange = document.getElementById("timeRange");
const timeLabel = document.getElementById("timeLabel");

const selectedPantryInclude = new Set();
const selectedPantryExclude = new Set();
let currentRecipeId = null;

const allRecipes = Object.entries(recipesByMood).flatMap(
  ([moodId, list]) =>
    list.map((recipe, index) => ({
      ...recipe,
      id: `${moodId}-${index}`,
    }))
);

const MAX_TIME = 60;

function getFilteredRecipes() {
  const maxTime = Number(timeRange.value || MAX_TIME);
  const filtered = allRecipes.filter((recipe) => {
    if (recipe.timeMinutes && recipe.timeMinutes > maxTime) return false;

    const keys = recipe.keywords || [];

    if ([...selectedPantryExclude].some((k) => keys.includes(k))) {
      return false;
    }

    if (selectedPantryInclude.size) {
      return [...selectedPantryInclude].every((k) => keys.includes(k));
    }

    return true;
  });

  return filtered;
}

function renderRecipe(recipe) {
  recipeTitle.textContent = recipe.title;
  recipeDescription.textContent = recipe.description;
  recipeTime.textContent = recipe.time;
  recipeDifficulty.textContent = recipe.difficulty;

  recipeIngredients.innerHTML = "";
  recipe.ingredients.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    recipeIngredients.appendChild(li);
  });

  recipeSteps.innerHTML = "";
  recipe.steps.forEach((step) => {
    const li = document.createElement("li");
    li.textContent = step;
    recipeSteps.appendChild(li);
  });

  recipeEmpty.style.display = "none";
  recipeContent.classList.remove("hidden");
}

function createPantryList() {
  pantryGroups.forEach((group) => {
    const groupEl = document.createElement("div");
    groupEl.className = "pantry-group";

    const titleEl = document.createElement("div");
    titleEl.className = "pantry-group-title";
    titleEl.textContent = group.label;

    const itemsEl = document.createElement("div");
    itemsEl.className = "pantry-group-items";

    group.options.forEach((item) => {
      const label = document.createElement("label");
      label.className = "pantry-item";

      const span = document.createElement("span");
      span.textContent = item.label;

      label.dataset.state = "none";

      label.addEventListener("click", () => {
        const current = label.dataset.state;
        let next;
        if (current === "none") next = "include";
        else if (current === "include") next = "exclude";
        else next = "none";

        label.dataset.state = next;

        label.style.borderStyle =
          next === "none" ? "dashed" : "solid";
        label.style.borderColor =
          next === "include"
            ? "#16a34a"
            : next === "exclude"
            ? "#dc2626"
            : "rgba(148, 163, 184, 0.7)";
        label.style.backgroundColor =
          next === "include"
            ? "rgba(22, 163, 74, 0.08)"
            : next === "exclude"
            ? "rgba(220, 38, 38, 0.06)"
            : "rgba(255, 255, 255, 0.9)";

        selectedPantryInclude.delete(item.id);
        selectedPantryExclude.delete(item.id);
        if (next === "include") selectedPantryInclude.add(item.id);
        if (next === "exclude") selectedPantryExclude.add(item.id);

        updateRecipesView();
      });

      label.appendChild(span);
      itemsEl.appendChild(label);
    });

    groupEl.appendChild(titleEl);
    groupEl.appendChild(itemsEl);
    pantryList.appendChild(groupEl);
  });
}

function renderRecipesList(recipes) {
  recipesList.innerHTML = "";

  const scored = recipes
    .map((recipe) => {
      const keys = recipe.keywords || [];
      const includeMatches = [...selectedPantryInclude].filter((k) =>
        keys.includes(k)
      ).length;
      return { recipe, includeMatches };
    })
    .sort((a, b) => {
      if (b.includeMatches !== a.includeMatches) {
        return b.includeMatches - a.includeMatches;
      }
      const ta = a.recipe.timeMinutes || MAX_TIME;
      const tb = b.recipe.timeMinutes || MAX_TIME;
      if (ta !== tb) return ta - tb;
      return a.recipe.title.localeCompare(b.recipe.title);
    });

  scored.forEach(({ recipe }) => {
    const li = document.createElement("li");
    li.className = "recipes-list-item";
    li.dataset.id = recipe.id;

    const titleSpan = document.createElement("span");
    titleSpan.className = "recipes-list-item-title";
    titleSpan.textContent = recipe.title;

    const metaSpan = document.createElement("span");
    metaSpan.className = "recipes-list-item-meta";
    metaSpan.textContent = `${recipe.time} • ${recipe.difficulty}`;

    li.appendChild(titleSpan);
    li.appendChild(metaSpan);

    li.addEventListener("click", () => {
      currentRecipeId = recipe.id;
      document
        .querySelectorAll(".recipes-list-item")
        .forEach((el) => el.classList.toggle("selected", el === li));
      renderRecipe(recipe);
    });

    recipesList.appendChild(li);
  });

  const count = recipes.length;
  recipesCount.textContent =
    count === 0
      ? "No recipes match these filters."
      : `${count} recipe${count === 1 ? "" : "s"} found`;
}

function updateTimeLabel() {
  const value = Number(timeRange.value || MAX_TIME);
  timeLabel.textContent = `Up to ${value} min`;
}

function updateRecipesView() {
  const filtered = getFilteredRecipes();
  renderRecipesList(filtered);

  const existing =
    filtered.find((r) => r.id === currentRecipeId) || filtered[0];

  if (existing) {
    currentRecipeId = existing.id;
    const li = document.querySelector(
      `.recipes-list-item[data-id="${existing.id}"]`
    );
    if (li) {
      document
        .querySelectorAll(".recipes-list-item")
        .forEach((el) =>
          el.classList.toggle("selected", el === li)
        );
    }
    renderRecipe(existing);
  } else {
    recipeContent.classList.add("hidden");
    recipeEmpty.style.display = "flex";
    currentRecipeId = null;
  }
}

timeRange.addEventListener("input", () => {
  updateTimeLabel();
  updateRecipesView();
});

createPantryList();
updateTimeLabel();
updateRecipesView();

