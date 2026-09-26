const petifyData = {
  header: {
    title: "Pëtify",
    logoUrl: "images/logo.png",
    tagline: "Pure love, premium care",
    pills: [
      "Exotic Pets & Birds",
      "Ornamental Fish Food",
      "Cages & Enclosures",
      "Premium Accessories"
    ]
  },
  contact: {
    whatsappNumber: "919745001101",
    phoneDisplay: "+91 97450 01101",
    email: "petify.shopping@gmail.com",
    location: "Kerala, India",
  },
//   normal products
  singleProducts: [
    {
      id: "shrimp",
      badge: "Treat",
      title: "Freeze Dried Shrimp",
      description: "Natural & protein-rich nutritional treat ideal for Discus, Arowana, Cichlids, Flowerhorn, Oscar, Snakehead, and other carnivorous fish.",
      specs: [
        "<strong>Protein:</strong> Min 55%",
        "<strong>Sizes:</strong> 35g, 50g, 100g",
        "<strong>Features:</strong> No added preservatives, natural color booster."
      ],
      defaultWhatsappMsg: "Hi Petify, I want to order Freeze Dried Shrimp"
    },
    {
      id: "channa",
      badge: "Specialized Feed",
      title: "Channa Stick (125g)",
      description: "Premium protein-rich fish food formulated specifically for Snakehead (Channa spp.) and carnivorous fish.",
      specs: [
        "<strong>Protein:</strong> Min 45%",
        "<strong>Net Wt:</strong> 125g",
        "<strong>Features:</strong> Omega-3 rich, boosts immunity, enhances natural pattern & color."
      ],
      defaultWhatsappMsg: "Hi Petify, I want to order Channa Stick 125g"
    },
    {
      id: "arowana",
      badge: "Premium Feed",
      title: "Arowana Stick (125g)",
      description: "Specially formulated for Arowana and large top/mid-water predators for healthy growth and vitality.",
      specs: [
        "<strong>Protein:</strong> Min 45%",
        "<strong>Net Wt:</strong> 125g",
        "<strong>Features:</strong> Fortified with vitamins & minerals for disease resistance."
      ],
      defaultWhatsappMsg: "Hi Petify, I want to order Arowana Stick 125g"
    }
  ],

//   combo
  comboProducts: [
    {
      id: "combo-1",
      saveTag: "SAVE ₹65",
      badge: "Starter Combo",
      title: "Channa Stick + Shrimp 35g",
      description: "Channa Stick 125g + Freeze Dried Shrimp 35g",
      price: "₹599",
      oldPrice: "₹664",
      defaultWhatsappMsg: "Hi Petify, I want to order Combo ₹599"
    },
    {
      id: "combo-2",
      saveTag: "SAVE ₹79",
      badge: "Popular Combo",
      title: "Channa Stick + Shrimp 50g",
      description: "Channa Stick 125g + Freeze Dried Shrimp 50g",
      price: "₹699",
      oldPrice: "₹778",
      defaultWhatsappMsg: "Hi Petify, I want to order Combo ₹699"
    },
    {
      id: "combo-3",
      saveTag: "SAVE ₹99",
      badge: "Value Combo",
      title: "Channa Stick + Shrimp 100g",
      description: "Channa Stick 125g + Freeze Dried Shrimp 100g",
      price: "₹899",
      oldPrice: "₹998",
      defaultWhatsappMsg: "Hi Petify, I want to order Combo ₹899"
    }
  ],
  features: [
    {
      title: "Exotic Pets & Birds",
      description: "Healthy, hand-reared birds, small pets, and expert care guidance."
    },
    {
      title: "Fish & Specialty Foods",
      description: "High-protein nutritional feeds for Channa, Arowana, Discus & more."
    },
    {
      title: "Cages & Housing",
      description: "Durable, comfortable enclosures tailored for birds and small pets."
    },
    {
      title: "Pet Care Accessories",
      description: "Essential toys, grooming supplies, and everyday care essentials."
    }
  ]
};