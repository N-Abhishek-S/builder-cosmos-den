const Products = [
    {
        id: 1,
        title: "Wireless Noise-Cancelling Headphones",
        price: 20875,
        originalPrice: 25065,
        rating: 4.8,
        reviewCount: 1245,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        category: "electronics",
        featured: true,
        discount: 17,
        description: "Premium wireless headphones with active noise cancellation technology for immersive sound experience.",
        colorTone: "black"
    },
    {
        id: 2,
        title: "Classic Aviator Sunglasses",
        price: 7515,
        originalPrice: 10020,
        rating: 4.6,
        reviewCount: 876,
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        category: "accessories",
        featured: true,
        discount: 25,
        description: "Timeless aviator style sunglasses with UV400 protection and polarized lenses.",
        faceShape: ["oval", "square"],
        colorTone: "gold"
    },
    {
        id: 3,
        title: "Slim Fit Cotton T-Shirt",
        price: 2505,
        originalPrice: 3340,
        rating: 4.4,
        reviewCount: 543,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        category: "clothing",
        featured: false,
        discount: 25,
        description: "Premium quality cotton t-shirt with perfect slim fit for everyday comfort.",
        colorTone: "navy"
    },
    {
        id: 4,
        title: "Smart Fitness Tracker",
        price: 6680,
        originalPrice: 8350,
        rating: 4.5,
        reviewCount: 2310,
        image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        category: "electronics",
        featured: true,
        discount: 20,
        description: "Advanced fitness tracker with heart rate monitoring, sleep analysis, and smartphone notifications.",
        colorTone: "black"
    },
    {
        id: 5,
        title: "Round Retro Sunglasses",
        price: 5425,
        originalPrice: 7095,
        rating: 4.3,
        reviewCount: 432,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        category: "accessories",
        featured: false,
        discount: 24,
        description: "Vintage-inspired round sunglasses with durable frames and 100% UV protection.",
        faceShape: ["square", "diamond"],
        colorTone: "tortoise"
    },
    {
        id: 6,
        title: "Denim Jacket",
        price: 5845,
        originalPrice: 7515,
        rating: 4.7,
        reviewCount: 765,
        image: "https://images.unsplash.com/photo-1544642899-f0d6e5f6ed6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        category: "clothing",
        featured: true,
        discount: 22,
        description: "Classic denim jacket with modern fit, perfect for layering in all seasons.",
        colorTone: "blue"
    },
    {
        id: 7,
        title: "Wireless Earbuds",
        price: 10855,
        originalPrice: 13360,
        rating: 4.6,
        reviewCount: 1987,
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        category: "electronics",
        featured: false,
        discount: 19,
        description: "True wireless earbuds with noise isolation and 24-hour battery life.",
        colorTone: "white"
    },
    {
        id: 8,
        title: "Wayfarer Sunglasses",
        price: 6265,
        originalPrice: 7930,
        rating: 4.8,
        reviewCount: 1123,
        image: "https://images.unsplash.com/photo-1577803645773-f96470509666?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        category: "accessories",
        featured: true,
        discount: 21,
        description: "Iconic wayfarer style sunglasses with polarized lenses and durable frame.",
        faceShape: ["round", "oval"],
        colorTone: "black"
    },
    {
        id: 9,
        title: "Casual Sneakers",
        price: 5010,
        originalPrice: 6680,
        rating: 4.5,
        reviewCount: 876,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        category: "footwear",
        featured: false,
        discount: 25,
        description: "Comfortable everyday sneakers with cushioned insoles and stylish design.",
        colorTone: "white"
    },
    {
        id: 10,
        title: "Smartphone with Triple Camera",
        price: 58465,
        originalPrice: 66815,
        rating: 4.7,
        reviewCount: 3456,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        category: "electronics",
        featured: true,
        discount: 13,
        description: "Latest smartphone with triple camera system, powerful processor, and all-day battery.",
        colorTone: "midnight blue"
    },
    {
        id: 11,
        title: "Cat-Eye Sunglasses",
        price: 6015,
        originalPrice: 7515,
        rating: 4.4,
        reviewCount: 567,
        image: "https://images.unsplash.com/photo-1577219491135-31151a6c8934?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        category: "accessories",
        featured: false,
        discount: 20,
        description: "Elegant cat-eye sunglasses with UV protection and lightweight frame.",
        faceShape: ["heart", "oval"],
        colorTone: "pink"
    },
    {
        id: 12,
        title: "Cotton Sweater",
        price: 3840,
        originalPrice: 5010,
        rating: 4.3,
        reviewCount: 432,
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        category: "clothing",
        featured: false,
        discount: 23,
        description: "Soft cotton sweater perfect for cool weather, available in multiple colors.",
        colorTone: "cream"
    },
    {
        id: 13,
        title: "Portable Bluetooth Speaker",
        price: 7515,
        originalPrice: 10020,
        rating: 4.6,
        reviewCount: 987,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        category: "electronics",
        featured: false,
        discount: 25,
        description: "Waterproof Bluetooth speaker with 360° sound and 12-hour battery life.",
        colorTone: "red"
    },
    {
        id: 14,
        title: "Sports Sunglasses",
        price: 7930,
        originalPrice: 10020,
        rating: 4.5,
        reviewCount: 654,
        image: "https://images.unsplash.com/photo-1556306535-0f09a537f0c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        category: "accessories",
        featured: false,
        discount: 21,
        description: "Wraparound sports sunglasses with non-slip grip and impact-resistant lenses.",
        faceShape: ["oval", "square"],
        colorTone: "matte black"
    },
    {
        id: 15,
        title: "Leather Ankle Boots",
        price: 10855,
        originalPrice: 13360,
        rating: 4.7,
        reviewCount: 765,
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        category: "footwear",
        featured: true,
        discount: 19,
        description: "Genuine leather ankle boots with comfortable cushioning and durable sole.",
        colorTone: "brown"
    },
    {
        id: 16,
        title: "4K Ultra HD Smart TV",
        price: 41750,
        originalPrice: 50100,
        rating: 4.8,
        reviewCount: 2341,
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        category: "electronics",
        featured: true,
        discount: 17,
        description: "55-inch 4K Ultra HD Smart TV with HDR and streaming capabilities.",
        colorTone: "black"
    },
    {
        id: 17,
        title: "Oversized Square Sunglasses",
        price: 5680,
        originalPrice: 7100,
        rating: 4.2,
        reviewCount: 321,
        image: "https://images.unsplash.com/photo-1610136649371-a0b025b0a3c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        category: "accessories",
        featured: false,
        discount: 20,
        description: "Fashionable oversized square sunglasses with UV protection and trendy design.",
        faceShape: ["round", "heart"],
        colorTone: "black"
    },
    {
        id: 18,
        title: "Waterproof Jacket",
        price: 7515,
        originalPrice: 10020,
        rating: 4.6,
        reviewCount: 543,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        category: "clothing",
        featured: false,
        discount: 25,
        description: "Lightweight waterproof jacket with breathable membrane and adjustable hood.",
        colorTone: "green"
    },
    {
        id: 19,
        title: "Gaming Laptop",
        price: 108550,
        originalPrice: 125250,
        rating: 4.7,
        reviewCount: 876,
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        category: "electronics",
        featured: true,
        discount: 13,
        description: "High-performance gaming laptop with dedicated graphics and high refresh rate display.",
        colorTone: "gray"
    },
    {
        id: 20,
        title: "Polarized Aviator Sunglasses",
        price: 8775,
        originalPrice: 11275,
        rating: 4.9,
        reviewCount: 987,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        category: "accessories",
        featured: true,
        discount: 22,
        description: "Premium polarized aviator sunglasses with anti-glare coating and metal frame.",
        faceShape: ["oval", "diamond"],
        colorTone: "silver"
    },
    {
        id: 21,
        title: "Running Shoes",
        price: 6680,
        originalPrice: 8350,
        rating: 4.5,
        reviewCount: 1234,
        image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        category: "footwear",
        featured: false,
        discount: 20,
        description: "Lightweight running shoes with responsive cushioning and breathable mesh.",
        colorTone: "blue"
    },
    {
        id: 22,
        title: "Smart Watch",
        price: 16700,
        originalPrice: 20875,
        rating: 4.6,
        reviewCount: 1987,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        category: "electronics",
        featured: true,
        discount: 20,
        description: "Advanced smartwatch with fitness tracking, heart rate monitor, and smartphone integration.",
        colorTone: "black"
    },
    {
        id: 23,
        title: "Round Metal Sunglasses",
        price: 7100,
        originalPrice: 9190,
        rating: 4.4,
        reviewCount: 432,
        image: "https://images.unsplash.com/photo-1520974722031-1e0f1a2be6cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        category: "accessories",
        featured: false,
        discount: 23,
        description: "Vintage-inspired round metal sunglasses with blue light filtering technology.",
        faceShape: ["square", "diamond"],
        colorTone: "gold"
    },
    {
        id: 24,
        title: "Knit Beanie",
        price: 2085,
        originalPrice: 2920,
        rating: 4.3,
        reviewCount: 321,
        image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        category: "accessories",
        featured: false,
        discount: 29,
        description: "Warm knit beanie made from premium acrylic wool blend, one size fits all.",
        colorTone: "charcoal"
    },
    {
        id: 25,
        title: "Wireless Charging Pad",
        price: 3340,
        originalPrice: 4175,
        rating: 4.5,
        reviewCount: 765,
        image: "https://images.unsplash.com/photo-1587080413959-06b859fb6dde?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        category: "electronics",
        featured: false,
        discount: 20,
        description: "Fast wireless charging pad compatible with Qi-enabled devices.",
        colorTone: "white"
    },
    {
        id: 26,
        title: "Designer Sunglasses",
        price: 12950,
        originalPrice: 16285,
        rating: 4.7,
        reviewCount: 654,
        image: "https://images.unsplash.com/photo-1588850561407-5727a6d4342a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        category: "accessories",
        featured: true,
        discount: 21,
        description: "Luxury designer sunglasses with premium lenses and signature detailing.",
        faceShape: ["heart", "oval"],
        colorTone: "tortoise"
    },
    {
        id: 27,
        title: "Classic White Sneakers",
        price: 5845,
        originalPrice: 7515,
        rating: 4.6,
        reviewCount: 987,
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        category: "footwear",
        featured: false,
        discount: 22,
        description: "Timeless white leather sneakers with vulcanized rubber sole and padded collar.",
        colorTone: "white"
    },
    {
        id: 28,
        title: "Tablet with Stylus",
        price: 33400,
        originalPrice: 41750,
        rating: 4.7,
        reviewCount: 765,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        category: "electronics",
        featured: true,
        discount: 20,
        description: "10-inch tablet with included stylus for drawing and note-taking.",
        colorTone: "gray"
    },
    {
        id: 29,
        title: "Rectangle Sunglasses",
        price: 6265,
        originalPrice: 7930,
        rating: 4.3,
        reviewCount: 432,
        image: "https://images.unsplash.com/photo-1591869383377-1aad2d2cda44?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        category: "accessories",
        featured: false,
        discount: 21,
        description: "Modern rectangle sunglasses with gradient lenses and lightweight frame.",
        faceShape: ["oval", "square"],
        colorTone: "black"
    },
    {
        id: 30,
        title: "Leather Wallet",
        price: 4175,
        originalPrice: 5845,
        rating: 4.5,
        reviewCount: 654,
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        category: "accessories",
        featured: false,
        discount: 29,
        description: "Genuine leather wallet with multiple card slots and currency compartment.",
        colorTone: "brown"
    },
    {
        id: 31,
        title: "Portable SSD",
        price: 10855,
        originalPrice: 13360,
        rating: 4.8,
        reviewCount: 432,
        image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        category: "electronics",
        featured: false,
        discount: 19,
        description: "1TB portable SSD with fast transfer speeds and durable design.",
        colorTone: "silver"
    },
    {
        id: 32,
        title: "Sport Wrap Sunglasses",
        price: 5425,
        originalPrice: 7100,
        rating: 4.4,
        reviewCount: 321,
        image: "https://images.unsplash.com/photo-1577219491135-31151a6c8934?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        category: "accessories",
        featured: false,
        discount: 24,
        description: "Sport wrap sunglasses with non-slip nose pads and shatterproof lenses.",
        faceShape: ["square", "round"],
        colorTone: "red"
    },
    {
        id: 33,
        title: "Hooded Sweatshirt",
        price: 4590,
        originalPrice: 5845,
        rating: 4.5,
        reviewCount: 876,
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        category: "clothing",
        featured: false,
        discount: 21,
        description: "Cozy hooded sweatshirt with front pocket and ribbed cuffs.",
        colorTone: "gray"
    },
    {
        id: 34,
        title: "Noise Cancelling Earbuds",
        price: 12525,
        originalPrice: 15030,
        rating: 4.6,
        reviewCount: 987,
        image: "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        category: "electronics",
        featured: true,
        discount: 17,
        description: "True wireless earbuds with active noise cancellation and transparency mode.",
        colorTone: "black"
    },
    {
        id: 35,
        title: "Oval Sunglasses",
        price: 6845,
        originalPrice: 8765,
        rating: 4.3,
        reviewCount: 234,
        image: "https://images.unsplash.com/photo-1594992494443-41a18ee48c68?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        category: "accessories",
        featured: false,
        discount: 22,
        description: "Fashionable oval sunglasses with mirrored lenses and acetate frame.",
        faceShape: ["square", "heart"],
        colorTone: "tortoise"
    },
    {
        id: 36,
        title: "Backpack",
        price: 5010,
        originalPrice: 6680,
        rating: 4.7,
        reviewCount: 765,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        category: "accessories",
        featured: false,
        discount: 25,
        description: "Durable backpack with laptop compartment and multiple organizational pockets.",
        colorTone: "navy"
    },
    {
        id: 37,
        title: "Smart Home Speaker",
        price: 8350,
        originalPrice: 10855,
        rating: 4.5,
        reviewCount: 876,
        image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        category: "electronics",
        featured: false,
        discount: 23,
        description: "Voice-controlled smart speaker with premium sound quality and home automation.",
        colorTone: "charcoal"
    },
    {
        id: 38,
        title: "Browline Sunglasses",
        price: 7930,
        originalPrice: 10020,
        rating: 4.6,
        reviewCount: 543,
        image: "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        category: "accessories",
        featured: false,
        discount: 21,
        description: "Classic browline sunglasses with metal frame and polarized lenses.",
        faceShape: ["round", "oval"],
        colorTone: "gold"
    },
    {
        id: 39,
        title: "Dress Shoes",
        price: 10020,
        originalPrice: 12525,
        rating: 4.7,
        reviewCount: 654,
        image: "https://images.unsplash.com/photo-1449505978164-7628921a4f72?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        category: "footwear",
        featured: false,
        discount: 20,
        description: "Classic oxford dress shoes made from genuine leather with cushioned insoles.",
        colorTone: "black"
    },
    {
        id: 40,
        title: "Action Camera",
        price: 16700,
        originalPrice: 20875,
        rating: 4.6,
        reviewCount: 987,
        image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        category: "electronics",
        featured: true,
        discount: 20,
        description: "4K action camera with waterproof housing and image stabilization.",
        colorTone: "black"
    },
    {
        id: 41,
        title: "Shield Sunglasses",
        price: 6510,
        originalPrice: 8185,
        rating: 4.4,
        reviewCount: 321,
        image: "https://images.unsplash.com/photo-1563292185-3261a2f2b3b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        category: "accessories",
        featured: false,
        discount: 20,
        description: "Modern shield sunglasses with wide field of vision and impact-resistant lenses.",
        faceShape: ["oval", "square"],
        colorTone: "matte black"
    },
    {
        id: 42,
        title: "Winter Parka",
        price: 12525,
        originalPrice: 16700,
        rating: 4.8,
        reviewCount: 765,
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        category: "clothing",
        featured: true,
        discount: 25,
        description: "Heavy-duty winter parka with insulated lining and faux fur trim hood.",
        colorTone: "navy"
    },
    {
        id: 43,
        title: "Wireless Keyboard",
        price: 6680,
        originalPrice: 8350,
        rating: 4.5,
        reviewCount: 654,
        image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        category: "electronics",
        featured: false,
        discount: 20,
        description: "Slim wireless keyboard with quiet keys and long battery life.",
        colorTone: "silver"
    },
    {
        id: 44,
        title: "Clubmaster Sunglasses",
        price: 7345,
        originalPrice: 9185,
        rating: 4.7,
        reviewCount: 543,
        image: "https://images.unsplash.com/photo-1603204918617-1ea8089498a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        category: "accessories",
        featured: false,
        discount: 20,
        description: "Classic clubmaster sunglasses with combination frame and premium lenses.",
        faceShape: ["heart", "oval"],
        colorTone: "tortoise"
    },
    {
        id: 45,
        title: "Yoga Pants",
        price: 3755,
        originalPrice: 5010,
        rating: 4.6,
        reviewCount: 876,
        image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        category: "clothing",
        featured: false,
        discount: 25,
        description: "High-waisted yoga pants with moisture-wicking fabric and four-way stretch.",
        colorTone: "black"
    },
    {
        id: 46,
        title: "Drone with Camera",
        price: 25050,
        originalPrice: 33400,
        rating: 4.7,
        reviewCount: 543,
        image: "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        category: "electronics",
        featured: true,
        discount: 25,
        description: "Foldable drone with 4K camera, GPS, and 30-minute flight time.",
        colorTone: "gray"
    },
    {
        id: 47,
        title: "Retro Square Sunglasses",
        price: 6015,
        originalPrice: 7515,
        rating: 4.3,
        reviewCount: 321,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        category: "accessories",
        featured: false,
        discount: 20,
        description: "Retro square sunglasses with gradient lenses and lightweight frame.",
        faceShape: ["round", "heart"],
        colorTone: "black"
    },
    {
        id: 48,
        title: "Leather Belt",
        price: 3340,
        originalPrice: 4175,
        rating: 4.5,
        reviewCount: 432,
        image: "https://images.unsplash.com/photo-1600975089941-1e5ad46e5c2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        category: "accessories",
        featured: false,
        discount: 20,
        description: "Genuine leather belt with polished buckle, available in multiple sizes.",
        colorTone: "brown"
    },
    {
        id: 49,
        title: "E-Reader",
        price: 10855,
        originalPrice: 12525,
        rating: 4.6,
        reviewCount: 765,
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        category: "electronics",
        featured: false,
        discount: 13,
        description: "Paper-like E-Reader with built-in light and weeks-long battery life.",
        colorTone: "black"
    },
    {
        id: 50,
        title: "Pilot Sunglasses",
        price: 9605,
        originalPrice: 12115,
        rating: 4.8,
        reviewCount: 654,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        category: "accessories",
        featured: true,
        discount: 21,
        description: "Classic pilot sunglasses with teardrop shape and anti-reflective coating.",
        faceShape: ["oval", "diamond"],
        colorTone: "gold"
    }
];

export { Products };

export const getRecommendedProducts = (result) => {
    if (!result) return [];

    let recommendations = [];

    // Filter products based on face shape - using sunglasses only
    const sunglasses = Products.filter(p => p.category === "accessories" && p.faceShape);

    if (result.faceShape === 'oval') {
        // Oval faces suit most frame types
        recommendations = sunglasses.filter(p =>
            p.faceShape.includes('oval') || p.faceShape.includes('square')
        );
    } else if (result.faceShape === 'round') {
        // Round faces suit angular frames like aviators
        recommendations = sunglasses.filter(p =>
            p.faceShape.includes('oval') || p.faceShape.includes('square')
        );
    } else if (result.faceShape === 'square') {
        // Square faces suit round frames
        recommendations = sunglasses.filter(p =>
            p.faceShape.includes('round') || p.faceShape.includes('oval')
        );
    } else if (result.faceShape === 'heart') {
        // Heart faces suit aviator and cat-eye frames
        recommendations = sunglasses.filter(p =>
            p.faceShape.includes('heart') || p.faceShape.includes('oval')
        );
    } else {
        // Default to oval recommendations
        recommendations = sunglasses.filter(p => p.faceShape.includes('oval'));
    }

    // Filter based on skin tone for color recommendations
    if (result.skinTone === 'medium' || result.skinTone === 'warm') {
        // Warm tones suit gold, brown, tortoise frames
        recommendations = recommendations.filter(p =>
            p.colorTone.toLowerCase().includes('gold') ||
            p.colorTone.toLowerCase().includes('brown') ||
            p.colorTone.toLowerCase().includes('tortoise')
        );
    } else {
        // Cool tones suit silver, black frames
        recommendations = recommendations.filter(p =>
            p.colorTone.toLowerCase().includes('silver') ||
            p.colorTone.toLowerCase().includes('black')
        );
    }

    // If we have too many results, limit to 6
    if (recommendations.length > 6) {
        return recommendations.slice(0, 6);
    }

    // If we don't have enough results, supplement with other sunglasses
    if (recommendations.length < 3) {
        const additionalProducts = sunglasses
            .filter(p => !recommendations.some(r => r.id === p.id))
            .slice(0, 6 - recommendations.length);
        return [...recommendations, ...additionalProducts];
    }

    return recommendations;
};