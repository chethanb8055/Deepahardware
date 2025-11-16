const products = [
  {
    id: "g1",
    name: "Universal Screwdriver Set",
    category: "general",
    price: 399,
    image:
      "https://images.unsplash.com/photo-1581622550591-2c64e0c7b1b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    popular: true,
    description:
      "Durable multipurpose screwdriver set with multiple bit sizes.",
  },
  {
    id: "g2",
    name: "Heavy Duty Hammer",
    category: "general",
    price: 249,
    image:
      "https://images.unsplash.com/photo-1585894724660-bf846a8d64f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    popular: true,
    description: "Comfort grip hammer for carpentry and general use.",
  },
  {
    id: "g3",
    name: "Power Drill 500W",
    category: "general",
    price: 2499,
    image:
      "https://images.unsplash.com/photo-1560185893-a55f7a4a3771?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    popular: true,
    description: "Compact and powerful drill for home and professional use.",
  },
  {
    id: "g4",
    name: "Adjustable Spanner",
    category: "general",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1602488257136-2d697ce0efa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    popular: false,
    description: "Adjustable wrench for multiple applications.",
  },
  {
    id: "g5",
    name: "Measuring Tape 5m",
    category: "general",
    price: 129,
    image:
      "https://images.unsplash.com/photo-1584467735815-36a7e3573d9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    popular: false,
    description: "Accurate measuring tape with lock mechanism.",
  },
  {
    id: "g6",
    name: "Cordless Electric Saw",
    category: "general",
    price: 3499,
    image:
      "https://images.unsplash.com/photo-1593105544552-f5e3c5cdf1c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    popular: true,
    description:
      "Portable and powerful cordless saw for cutting wood and metal.",
  },
  {
    id: "g7",
    name: "Pliers Set (3-Piece)",
    category: "general",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    popular: true,
    description: "Versatile pliers set for gripping, twisting, and cutting.",
  },
  {
    id: "g8",
    name: "Level Tool 60cm",
    category: "general",
    price: 179,
    image:
      "https://images.unsplash.com/photo-1581291518850-88787c1d58b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    popular: false,
    description: "Precision spirit level for accurate measurements.",
  },
  {
    id: "f1",
    name: "Wooden Chair",
    category: "furniture",
    price: 2999,
    image:
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    popular: true,
    description: "Classic comfortable wooden chair for home use.",
  },
  {
    id: "f2",
    name: "Dining Table (6-Seater)",
    category: "furniture",
    price: 18500,
    image:
      "https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    popular: true,
    description: "Spacious dining table for family meals.",
  },
  {
    id: "f3",
    name: "Bookshelf (5-Tier)",
    category: "furniture",
    price: 6999,
    image:
      "https://images.unsplash.com/photo-1592490381362-6e434a071d86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    popular: false,
    description: "Spacious bookshelf for home or office.",
  },
  {
    id: "f4",
    name: "Modern Coffee Table",
    category: "furniture",
    price: 4599,
    image:
      "https://images.unsplash.com/photo-1533090368676-1fd25485db88?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    popular: false,
    description: "Sleek coffee table with minimalist design.",
  },
  {
    id: "f5",
    name: "TV Stand (Wooden)",
    category: "furniture",
    price: 5499,
    image:
      "https://images.unsplash.com/photo-1599619585752-c3f01dd27e2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    popular: true,
    description: "Sturdy wooden TV stand with storage compartments.",
  },
  {
    id: "p1",
    name: "Premium White Emulsion 10L",
    category: "paints",
    price: 2600,
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    popular: true,
    description: "Low-odor washable emulsion paint for interiors.",
  },
  {
    id: "p2",
    name: "Exterior Weatherproof Paint 10L",
    category: "paints",
    price: 3200,
    image:
      "https://images.unsplash.com/photo-1581092335397-7a251f1b59c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    popular: true,
    description: "Durable exterior paint for all weather conditions.",
  },
  {
    id: "p3",
    name: "Matte Black Paint 5L",
    category: "paints",
    price: 1800,
    image:
      "https://images.unsplash.com/photo-1560032773-3d688a5e0e2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    popular: false,
    description: "Bold matte black paint for interior accents.",
  },
  {
    id: "p4",
    name: "Gloss Enamel Paint 4L",
    category: "paints",
    price: 2200,
    image:
      "https://images.unsplash.com/photo-1586023492125-27a5ce4c2d27?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    popular: true,
    description: "High-gloss enamel paint for wood and metal surfaces.",
  },
];

export default products;
