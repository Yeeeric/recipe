const moods = [
  {
    id: "comfort",
    label: "Comforting",
    emoji: "🤗",
    description: "Cozy, warm & nostalgic.",
  },
  {
    id: "energetic",
    label: "Energized",
    emoji: "⚡",
    description: "Bright, fresh & zesty.",
  },
  {
    id: "stressed",
    label: "Stressed",
    emoji: "😵",
    description: "Simple, soothing & low-effort.",
  },
  {
    id: "romantic",
    label: "Romantic",
    emoji: "💕",
    description: "A little fancy & shareable.",
  },
  {
    id: "adventurous",
    label: "Adventurous",
    emoji: "🌶️",
    description: "Bold flavors & fun twists.",
  },
  {
    id: "lazy",
    label: "Lazy",
    emoji: "😴",
    description: "Minimal dishes, maximum payoff.",
  },
];

const recipesByMood = {
  comfort: [
    {
      title: "Creamy One-Pot Mac & Cheese",
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
    },
    {
      title: "Slow-Baked Tomato Soup with Toasted Bread",
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
    },
    {
      title: "Japanese-Style Golden Curry (Weeknight Version)",
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
    },
    {
      title: "Miso-Butter Corn Ramen",
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
    },
  ],
  energetic: [
    {
      title: "Citrus Power Bowl",
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
    },
    {
      title: "Matcha Yogurt Parfait",
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
    },
    {
      title: "Herby Chimichurri Chickpea Smash Toast",
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
    },
    {
      title: "Thai-Inspired Larb Lettuce Cups",
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
    },
  ],
  stressed: [
    {
      title: "5-Minute Peanut Butter Noodles",
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
    },
    {
      title: "Microwave Mug Omelet",
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
    },
    {
      title: "Rice Cooker (or Pot) Ginger Congee",
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
    },
    {
      title: "Crispy-Edge Butter Soy Rice with Fried Egg",
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
    },
  ],
  romantic: [
    {
      title: "Garlic Butter Shrimp with Lemon Pasta",
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
    },
    {
      title: "Dark Chocolate Berry Skillet",
      description:
        "Warm, gooey dark chocolate and berries served straight from the pan.",
      time: "20 min",
      difficulty: "Easy",
      tag: "Shareable Dessert",
      ingredients: [
        "1 cup mixed berries (fresh or frozen)",
        "100 g dark chocolate, chopped",
        "1 tbsp butter",
        "1 tbsp sugar or honey",
        "Pinch of salt",
        "Vanilla ice cream or yogurt to serve",
      ],
      steps: [
        "Warm berries, butter, sugar, and a pinch of salt in a small skillet.",
        "Simmer until berries are saucy and slightly thickened.",
        "Remove from heat, scatter chocolate on top, and let it melt.",
        "Serve warm straight from the skillet with ice cream or yogurt.",
      ],
    },
    {
      title: "Seared Salmon with Honey-Dijon Pan Sauce",
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
    },
    {
      title: "Burrata, Roasted Grapes & Hot Honey Toast",
      description:
        "Creamy burrata with jammy grapes and a sweet-heat drizzle—unexpected and romantic.",
      time: "18 min",
      difficulty: "Easy",
      tag: "Little Luxe",
      ingredients: [
        "1 cup grapes",
        "1 tbsp olive oil",
        "Pinch of salt",
        "Burrata (or fresh mozzarella)",
        "Toasted sourdough or baguette slices",
        "Hot honey (or honey + chili flakes)",
        "Optional: basil",
      ],
      steps: [
        "Roast grapes with olive oil and salt at 220°C / 425°F for 12–15 minutes until jammy.",
        "Spread burrata on toast and top with warm roasted grapes.",
        "Drizzle hot honey and add basil if you have it.",
      ],
    },
  ],
  adventurous: [
    {
      title: "Spicy Gochujang Roasted Cauliflower Tacos",
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
    },
    {
      title: "Mango Chili Lime Salsa with Chips",
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
    },
    {
      title: "Sichuan Smashed Cucumber Salad",
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
    },
    {
      title: "Berbere Lentils with Spiced Oil",
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
    },
  ],
  lazy: [
    {
      title: "Sheet-Pan Veggie & Feta Dinner",
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
    },
    {
      title: "No-Cook Pantry Chickpea Salad",
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
    },
    {
      title: "2-Ingredient Pita Pizzas",
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
    },
    {
      title: "Tuna Mayo Onigiri-Style Rice Bowl",
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
    },
  ],
};

const moodChipsContainer = document.getElementById("moodChips");
const recipeCard = document.getElementById("recipeCard");
const recipeEmpty = document.getElementById("recipeEmpty");
const recipeContent = document.getElementById("recipeContent");
const recipeTitle = document.getElementById("recipeTitle");
const recipeMoodLabel = document.getElementById("recipeMoodLabel");
const recipeDescription = document.getElementById("recipeDescription");
const recipeTime = document.getElementById("recipeTime");
const recipeDifficulty = document.getElementById("recipeDifficulty");
const recipeIngredients = document.getElementById("recipeIngredients");
const recipeSteps = document.getElementById("recipeSteps");
const recipeTag = document.getElementById("recipeTag");
const newRecipeBtn = document.getElementById("newRecipeBtn");

let currentMoodId = null;
let lastRecipeIndex = null;

function createMoodChips() {
  moods.forEach((mood) => {
    const button = document.createElement("button");
    button.className = "chip";
    button.type = "button";
    button.dataset.moodId = mood.id;
    button.innerHTML = `<span>${mood.emoji}</span> ${mood.label}`;
    button.title = mood.description;
    button.addEventListener("click", () => handleMoodSelect(mood.id));
    moodChipsContainer.appendChild(button);
  });
}

function handleMoodSelect(moodId) {
  currentMoodId = moodId;
  lastRecipeIndex = null;

  Array.from(moodChipsContainer.children).forEach((chip) => {
    chip.classList.toggle("active", chip.dataset.moodId === moodId);
  });

  showRandomRecipeForMood(moodId);
}

function showRandomRecipeForMood(moodId) {
  const recipes = recipesByMood[moodId] || [];
  if (!recipes.length) return;

  let index;
  if (recipes.length === 1) {
    index = 0;
  } else {
    do {
      index = Math.floor(Math.random() * recipes.length);
    } while (index === lastRecipeIndex);
  }
  lastRecipeIndex = index;

  const recipe = recipes[index];
  renderRecipe(recipe, moodId);
}

function renderRecipe(recipe, moodId) {
  const mood = moods.find((m) => m.id === moodId);
  recipeTitle.textContent = recipe.title;
  recipeMoodLabel.textContent = mood
    ? `${mood.emoji} ${mood.label} mood`
    : "";
  recipeDescription.textContent = recipe.description;
  recipeTime.textContent = recipe.time;
  recipeDifficulty.textContent = recipe.difficulty;
  recipeTag.textContent = recipe.tag;

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

newRecipeBtn.addEventListener("click", () => {
  if (!currentMoodId) return;
  showRandomRecipeForMood(currentMoodId);
});

createMoodChips();

