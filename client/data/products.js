const normalizeGender = (gender) => {
  if (!gender) return 'unisex';
  return gender.toLowerCase();
};
export const products = {
  // Male Products
  male: {
    clothing: [
  {
    "id": 1,
    "name": "Navy Blue Formal Shirt",
    "image": "https://imagescdn.louisphilippe.com/img/app/product/3/39676684-13734339.jpg",
    "price": 1899,
    "category": "Formal",
    "skinToneCompatibility": ["Fair", "Medium", "Olive"],
    "description": "Navy blue enhances fair and olive complexions, creating a sophisticated contrast for professional settings."
  },
  {
    "id": 2,
    "name": "Charcoal Grey Suit",
    "image": "https://imagescdn.louisphilippe.com/img/app/product/8/895807-10929724.jpg?auto=format&w=390",
    "price": 5999,
    "category": "Formal",
    "skinToneCompatibility": ["Medium", "Dark", "Cool"],
    "description": "Charcoal provides elegant contrast against medium and dark skin tones while complementing cool undertones."
  },
  {
    "id": 3,
    "name": "White Dress Shirt",
    "image": "https://images-cdn.ubuy.co.in/65392deb4d99a613676679de-lion-nardo-dress-shirts-for-men-long.jpg",
    "price": 1499,
    "category": "Formal",
    "skinToneCompatibility": ["Medium", "Dark", "Olive", "Warm"],
    "description": "Crisp white creates a striking contrast against deeper skin tones and enhances warm undertones."
  },
  {
    "id": 4,
    "name": "Burgundy Tie",
    "image": "https://assets.ajio.com/medias/sys_master/root/20230905/Ke9G/64f6c025afa4cf41f5a5f1e1/-473Wx593H-466051719-burgundy-MODEL.jpg",
    "price": 899,
    "category": "Formal",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Rich burgundy adds warmth to fair complexions and complements cool and neutral undertones."
  },
  {
    "id": 5,
    "name": "Light Blue Oxford Shirt",
    "image": "https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/D48110s.jpg?im=Resize,width=750",
    "price": 1699,
    "category": "Formal",
    "skinToneCompatibility": ["Fair", "Cool", "Olive"],
    "description": "Soft blue brightens fair skin and harmonizes with cool and olive undertones."
  },
  {
    "id": 6,
    "name": "Black Formal Blazer",
    "image": "https://imagescdn.louisphilippe.com/img/app/product/3/336501-14604981.jpg?auto=format&w=390",
    "price": 3999,
    "category": "Formal",
    "skinToneCompatibility": ["Fair", "Dark", "Neutral"],
    "description": "Classic black creates versatile contrast against both fair and dark skin tones."
  },
  {
    "id": 7,
    "name": "Forest Green Dress Shirt",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTliv_7ILKIc8el0XBhef6xUJ35ZbmKP_AajQ&s",
    "price": 2199,
    "category": "Formal",
    "skinToneCompatibility": ["Warm", "Olive", "Medium"],
    "description": "Earthy green enhances warm undertones and complements olive and medium complexions."
  },
  {
    "id": 8,
    "name": "Silver Grey Tie",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-rzaZnushBeQChp_hIZzK4SjwUyuNnWkXCg&s",
    "price": 999,
    "category": "Formal",
    "skinToneCompatibility": ["Cool", "Fair", "Neutral"],
    "description": "Metallic silver brightens fair skin and harmonizes with cool undertones."
  },
  {
    "id": 9,
    "name": "Navy Pinstripe Suit",
    "image": "https://cdn.suitsupply.com/image/upload/b_rgb:efefef,c_fill,w_2600,h_3597/b_rgb:efefef,c_pad,dpr_1,w_850,h_1176,f_auto,q_auto,fl_progressive/products/suits/default/Winter/P6923_102.jpg",
    "price": 6499,
    "category": "Formal",
    "skinToneCompatibility": ["Medium", "Dark", "Warm"],
    "description": "Navy pinstripes create sophisticated contrast against deeper skin tones with warm undertones."
  },
  {
    "id": 10,
    "name": "Cream Formal Shirt",
    "image": "https://imagescdn.louisphilippe.com/img/app/product/3/39703414-14447572.jpg?auto=format&w=390",
    "price": 1799,
    "category": "Formal",
    "skinToneCompatibility": ["Dark", "Warm", "Olive"],
    "description": "Soft cream provides elegant contrast against darker skin tones and enhances warm undertones."
  },
  {
    "id": 11,
    "name": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmyhWn_FIyKzQW7rPKLIJPzzG3bESFcHMeqg&s",
    "price": 2299,
    "category": "Formal",
    "skinToneCompatibility": ["Cool", "Fair", "Neutral"],
    "description": "Deep plum adds richness to fair skin and complements cool undertones."
  },
  {
    "id": 12,
    "name": "Charcoal Waistcoat",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS80HPThcENoBxNzVL3Rgxv45btbeIi5IMtmw&s",
    "price": 2499,
    "category": "Formal",
    "skinToneCompatibility": ["Medium", "Dark", "Cool"],
    "description": "Structured charcoal adds depth to medium and dark skin tones while complementing cool undertones."
  },
  {
    "id": 13,
    "name": "Sky Blue Formal Shirt",
    "image": "https://www.richlook.in/cdn/shop/files/1_1_8334707d-82ce-473b-ac81-b9191d6d341a.jpg?v=1754918307",
    "price": 1599,
    "category": "Formal",
    "skinToneCompatibility": ["Fair", "Cool", "Olive"],
    "description": "Light blue brightens fair skin and harmonizes with cool and olive undertones."
  },
  {
    "id": 14,
    "name": "Black Formal Trousers",
    "image": "https://m.media-amazon.com/images/I/81C8qvQLP+L._UY1100_.jpg",
    "price": 2999,
    "category": "Formal",
    "skinToneCompatibility": ["Fair", "Dark", "Neutral"],
    "description": "Versatile black creates clean lines against both fair and dark skin tones."
  },
  {
    "id": 15,
    "name": "Olive Green Shirt",
    "image": "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/11904108/2020/7/14/869203dc-200a-4284-9d2d-a06fd5ea582d1594707585600-Roadster-Men-Shirts-1041594707583386-1.jpg",
    "price": 1999,
    "category": "Formal",
    "skinToneCompatibility": ["Warm", "Olive", "Medium"],
    "description": "Earthy olive enhances warm undertones and complements olive and medium complexions."
  },
  {
    "id": 16,
    "name": "Denim Jacket",
    "image": "https://redflame.in/cdn/shop/products/DFJT-29163-B_1.jpg?v=1641464933&width=1260",
    "price": 2499,
    "category": "Informal",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Classic denim provides casual contrast against fair skin and complements cool undertones."
  },
  {
    "id": 17,
    "name": "Olive Chinos",
    "image": "https://pantproject.com/cdn/shop/files/DSC8368_0eee72d1-25f7-49b9-a3cb-64d126a2455f.jpg?v=1744797558",
    "price": 1899,
    "category": "Informal",
    "skinToneCompatibility": ["Warm", "Medium", "Olive"],
    "description": "Earthy olive enhances warm undertones and complements medium and olive complexions."
  },
  {
    "id": 18,
    "name": "Grey Henley Shirt",
    "image": "https://imagescdn.allensolly.com/img/app/product/9/943164-12083431.jpg?auto=format&w=390",
    "price": 1299,
    "category": "Informal",
    "skinToneCompatibility": ["Cool", "Fair", "Neutral"],
    "description": "Soft grey harmonizes with cool undertones and provides subtle contrast against fair skin."
  },
  {
    "id": 19,
    "name": "Burgundy Polo Shirt",
    "image": "https://crocodile.in/cdn/shop/files/1_ccfa956d-8f68-405f-937f-c3a7c1b3b70f.jpg?v=1739023059&width=1080",
    "price": 1499,
    "category": "Informal",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Rich burgundy adds warmth to fair complexions and complements cool undertones."
  },
  {
    "id": 20,
    "name": "Navy Blue Sweater",
    "image": "https://world.benetton.com/dw/image/v2/BBSF_PRD/on/demandware.static/-/Sites-ucb-master/default/dw47b5e7f5/images/Full_PDP_h/06_25A_1002U1G34_016_BS.jpg?sw=768&sh=1024",
    "price": 2199,
    "category": "Informal",
    "skinToneCompatibility": ["Fair", "Medium", "Olive"],
    "description": "Deep navy enhances fair and olive complexions for a sophisticated casual look."
  },
  {
    "id": 21,
    "name": "Khaki Cargo Pants",
    "image": "https://assets.ajio.com/medias/sys_master/root/20241203/yUKL/674f22880f47f80c87d08a26/-473Wx593H-700873234-khaki-MODEL.jpg",
    "price": 1999,
    "category": "Informal",
    "skinToneCompatibility": ["Dark", "Warm", "Medium"],
    "description": "Neutral khaki creates balanced contrast against darker and warm skin tones."
  },
  {
    "id": 22,
    "name": "Forest Green Hoodie",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUnmQjqdWh3Dg1ZQB7RbEC9fHDDFMhlVNVxQ&s",
    "price": 1799,
    "category": "Informal",
    "skinToneCompatibility": ["Warm", "Olive", "Medium"],
    "description": "Earthy green enhances warm undertones and complements olive and medium complexions."
  },
  {
    "id": 23,
    "name": "White Linen Shirt",
    "image": "https://thehouseofrare.com/cdn/shop/files/LINEX-1WHITE-12083.webp?v=1747895837&width=2732",
    "price": 1699,
    "category": "Informal",
    "skinToneCompatibility": ["Medium", "Dark", "Olive", "Warm"],
    "description": "Crisp white creates striking contrast against deeper skin tones and enhances warm undertones."
  },
  {
    "id": 24,
    "name": "Black Denim Jacket",
    "image": "https://d1pdzcnm6xgxlz.cloudfront.net/tops/8905875007210-9.jpg",
    "price": 2799,
    "category": "Informal",
    "skinToneCompatibility": ["Fair", "Dark", "Neutral"],
    "description": "Versatile black creates edgy contrast against both fair and dark skin tones."
  },
  {
    "id": 25,
    "name": "Beige Chinos",
    "image": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcThrjBjLa2WyfnvzzhJPyB5wK8vrevZQOEUxRCV7plJRkJzJUtUnxTdya6IwI496UqMfkwQoLfSKcvggtJJDE1k1HPdYjuPnAAzb5KG9ZM61k4q_oNyplX5MEgHCpkpEHbH_d5JdS8&usqp=CAc",
    "price": 1799,
    "category": "Informal",
    "skinToneCompatibility": ["Dark", "Warm", "Neutral"],
    "description": "Light beige tones balance darker and warm skin tones for a relaxed look."
  },
  {
    "id": 26,
    "name": "Charcoal Knit Sweater",
    "image": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSsUItKk_tSi-ErKst8uQPJrkzHPDAGkKOy-8OylpkiLIj202Zk28WqLZiVOtm6BLRhXFz6LHsjb1vUpBhujR2jYK4NFTVoAw-cRIiRSpjRWUyamXDGVt782c6ykA-Fl-97z89tUWLSVw&usqp=CAc",
    "price": 2399,
    "category": "Informal",
    "skinToneCompatibility": ["Medium", "Dark", "Cool"],
    "description": "Deep charcoal adds sophistication to medium and dark skin tones while complementing cool undertones."
  },
  {
    "id": 27,
    "name": "Olive Green Bomber Jacket",
    "image": "https://www.crimsouneclub.com/cdn/shop/products/5_16e43c76-72e1-4edb-9cbe-d6915ea7a992.webp?v=1754633089",
    "price": 2999,
    "category": "Informal",
    "skinToneCompatibility": ["Warm", "Olive", "Medium"],
    "description": "Military olive enhances warm undertones and complements olive and medium complexions."
  },
  {
    "id": 28,
    "name": "Navy Blue Polo Shirt",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyzzzZdTSrkEowirRZIFbyMIETCu6iL42pwQ&s",
    "price": 1399,
    "category": "Informal",
    "skinToneCompatibility": ["Fair", "Medium", "Olive"],
    "description": "Classic navy enhances fair and olive complexions for a versatile casual look."
  },
  {
    "id": 29,
    "name": "Grey Sweatpants",
    "image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTWQzYa-Hu1n4cEumpYgLc9Nt1jWTXu-ZxchSnQHqfuTJowv61n_riVcA0CvFUIvfpE5jjVyXubK0r3oeKHUmc6bwrjbUBdfeYuISa6qDfQIlBzshDlAWf863WPpyH08ZdeKoxZpxtTo14&usqp=CAc",
    "price": 1499,
    "category": "Informal",
    "skinToneCompatibility": ["Cool", "Fair", "Neutral"],
    "description": "Soft grey harmonizes with cool undertones and provides subtle contrast against fair skin."
  },
  {
    "id": 30,
    "name": "Burgundy Sweatshirt",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbIRs_B0MhbxF1lW9xITfdIXghOMEaETji8Q&s",
    "price": 1999,
    "category": "Informal",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Rich burgundy adds warmth to fair complexions and complements cool undertones."
  },
  {
    "id": 31,
    "name": "White T-Shirt",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLjHpDrEMFIkwLykuw2V2cRQYad_F8SizbtA&s",
    "price": 799,
    "category": "Casual",
    "skinToneCompatibility": ["Medium", "Dark", "Olive", "Warm"],
    "description": "Crisp white creates striking contrast against deeper skin tones and enhances warm undertones."
  },
  {
    "id": 32,
    "name": "Black Jeans",
    "image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRUmvW8hAXTmkj18tApy_bR5yrc8811SJ_uN9kVwYZNf4Hq6k9WfxRkw7k7BPGuo9YCzkuRbdloVY-nxm0mo1RL1u--ydEpG29NBQmSSHUZcWss2vZqNQ3OTP70hFJcLp-LSGNsoVM&usqp=CAc",
    "price": 1999,
    "category": "Casual",
    "skinToneCompatibility": ["Fair", "Dark", "Neutral"],
    "description": "Versatile black creates clean lines against both fair and dark skin tones."
  },
  {
    "id": 33,
    "name": "Beige Shorts",
    "image": "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/22218130/2025/4/10/aa2e38a4-6831-4781-a6fa-6a0256f3ed2f1744290633946-DAMENSCH-Men-Ultra-Light-Casual-Lounge-Short-41744290633486-1.jpg",
    "price": 1299,
    "category": "Casual",
    "skinToneCompatibility": ["Dark", "Warm", "Neutral"],
    "description": "Light beige tones balance darker and warm skin tones for summer wear."
  },
  {
    "id": 34,
    "name": "Navy Blue T-Shirt",
    "image": "https://veirdo.in/cdn/shop/files/3_8.jpg?v=1754543334",
    "price": 899,
    "category": "Casual",
    "skinToneCompatibility": ["Fair", "Medium", "Olive"],
    "description": "Classic navy enhances fair and olive complexions for a versatile casual look."
  },
  {
    "id": 35,
    "name": "Grey Hoodie",
    "image": "https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/N77918s.jpg?im=Resize,width=750",
    "price": 1599,
    "category": "Casual",
    "skinToneCompatibility": ["Cool", "Fair", "Neutral"],
    "description": "Soft grey harmonizes with cool undertones and provides subtle contrast against fair skin."
  },
  {
    "id": 36,
    "name": "Olive Green T-Shirt",
    "image": "https://triprindia.com/cdn/shop/files/OGRZ1331.jpg?v=1743915230",
    "price": 999,
    "category": "Casual",
    "skinToneCompatibility": ["Warm", "Olive", "Medium"],
    "description": "Earthy olive enhances warm undertones and complements olive and medium complexions."
  },
  {
    "id": 37,
    "name": "Light Blue Polo Shirt",
    "image": "https://unirecstore.com/cdn/shop/files/mens-solid-matte-sky-blue-polo-t-shirt-996377.jpg?v=1757350385",
    "price": 1199,
    "category": "Casual",
    "skinToneCompatibility": ["Fair", "Cool", "Olive"],
    "description": "Soft blue brightens fair skin and harmonizes with cool and olive undertones."
  },
  {
    "id": 38,
    "name": "Charcoal Joggers",
    "image": "https://veirdo.in/cdn/shop/files/imgpsh_fullsize_anim_6_3f93cb4f-2cb5-4b29-9eb7-d3e503ede96e.jpg?v=1754543487",
    "price": 1699,
    "category": "Casual",
    "skinToneCompatibility": ["Medium", "Dark", "Cool"],
    "description": "Deep charcoal adds sophistication to medium and dark skin tones while complementing cool undertones."
  },
  {
    "id": 39,
    "name": "Burgundy T-Shirt",
    "image": "https://www.beyoung.in/api/cache/catalog/products/plain_new_update_images/burgundy_plain_t-shirt_base_25_5_2022_700x933.jpg",
    "price": 1099,
    "category": "Casual",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Rich burgundy adds warmth to fair complexions and complements cool undertones."
  },
  {
    "id": 40,
    "name": "Khaki Shorts",
    "image": "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/32495658/2025/6/23/0b83f663-b645-4124-9586-b002778071351750679537581-Roadster-Men-Shorts-1731750679536841-1.jpg",
    "price": 1399,
    "category": "Casual",
    "skinToneCompatibility": ["Dark", "Warm", "Medium"],
    "description": "Neutral khaki creates balanced contrast against darker and warm skin tones."
  },
  {
    "id": 41,
    "name": "Forest Green Tank Top",
    "image": "https://www.solidattire.com/media/products/IMG_6088.jpg",
    "price": 899,
    "category": "Casual",
    "skinToneCompatibility": ["Warm", "Olive", "Medium"],
    "description": "Earthy green enhances warm undertones and complements olive and medium complexions."
  },
  {
    "id": 42,
    "name": "White Linen Shirt",
    "image": "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/2025/SEPTEMBER/10/1BgcTc2m_9b444d63adaa414badb511e31916f6d5.jpg",
    "price": 1499,
    "category": "Casual",
    "skinToneCompatibility": ["Medium", "Dark", "Olive", "Warm"],
    "description": "Crisp white creates striking contrast against deeper skin tones and enhances warm undertones."
  },
  {
    "id": 43,
    "name": "Black Sweatshirt",
    "image": "https://urbandrift.in/cdn/shop/files/7AD35E8C-2EC4-4E85-AF7F-1203884BC76C.jpg?v=1730818454&width=2000",
    "price": 1799,
    "category": "Casual",
    "skinToneCompatibility": ["Fair", "Dark", "Neutral"],
    "description": "Versatile black creates edgy contrast against both fair and dark skin tones."
  },
  {
    "id": 44,
    "name": "Grey Shorts",
    "image": "https://levi.in/cdn/shop/files/A83280002_05_Front_Details_b5e9f04d-b178-4314-92f4-1df2bafa4dc0.jpg?v=1712743193&width=1445g",
    "price": 1199,
    "category": "Casual",
    "skinToneCompatibility": ["Cool", "Fair", "Neutral"],
    "description": "Soft grey harmonizes with cool undertones and provides subtle contrast against fair skin."
  },
  {
    "id": 45,
    "name": "Navy Blue Shorts",
    "image": "https://ttbazaar.com/cdn/shop/files/Navy_Back_03994f0c-f133-4973-a148-9244b87ff015.jpg?v=1757738384",
    "price": 1299,
    "category": "Casual",
    "skinToneCompatibility": ["Fair", "Medium", "Olive"],
    "description": "Classic navy enhances fair and olive complexions for versatile summer wear."
  },
  {
    "id": 46,
    "name": "Embroidered Kurta",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcN6o4ixB81xf7dj2hHjwmOohrfY75k8_cug&s",
    "price": 2999,
    "category": "Traditional",
    "skinToneCompatibility": ["Medium", "Olive", "Warm"],
    "description": "Intricate embroidery enhances medium and olive tones, perfect for cultural celebrations."
  },
  {
    "id": 47,
    "name": "Nehru Jacket",
    "image": "https://medias.utsavfashion.com/media/catalog/product/cache/1/image/1000x/040ec09b1e35df139433887a97daa66f/d/i/digital-printed-art-silk-nehru-jacket-in-off-white-v1-mly2301.jpg",
    "price": 3499,
    "category": "Traditional",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Structured silhouette complements fair skin and harmonizes with cool undertones."
  },
  {
    "id": 48,
    "name": "White Sherwani",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwOKwkU73clGooFXoWTzHjmcWI-imaqH-xeA&s",
    "price": 7999,
    "category": "Traditional",
    "skinToneCompatibility": ["Medium", "Dark", "Olive", "Warm"],
    "description": "Elegant white creates striking contrast against deeper skin tones for special occasions."
  },
  {
    "id": 49,
    "name": "Beige Kurta Pajama",
    "image": "https://www.nabia.in/cdn/shop/files/9_e8a3f2fe-9467-4ba5-9b89-446578fe9f0e.jpg?v=1738298567",
    "price": 2499,
    "category": "Traditional",
    "skinToneCompatibility": ["Dark", "Warm", "Neutral"],
    "description": "Light beige tones balance darker and warm skin tones for traditional events."
  },
  {
    "id": 50,
    "name": "Maroon Bandhgala",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6GlClmGP0xvVmTXpWxKszKSIWMCLeJHLSCg&s",
    "price": 4999,
    "category": "Traditional",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Rich maroon adds warmth to fair complexions and complements cool undertones."
  },
  {
    "id": 51,
    "name": "Olive Green Kurta",
    "image": "https://img.perniaspopupshop.com/catalog/product/d/v/DVVCM092341_2.jpg?impolicy=detailimageprod",
    "price": 2799,
    "category": "Traditional",
    "skinToneCompatibility": ["Warm", "Olive", "Medium"],
    "description": "Earthy olive enhances warm undertones and complements olive and medium complexions."
  },
  {
    "id": 52,
    "name": "Black Achkan",
    "image": "https://cdn.hangrr.com/v7/s3/product/953/deep-black-wool-achkan-multi.webp",
    "price": 5999,
    "category": "Traditional",
    "skinToneCompatibility": ["Fair", "Dark", "Neutral"],
    "description": "Classic black creates dramatic contrast against both fair and dark skin tones."
  },
  {
    "id": 53,
    "name": "Ikkat Print Shirt",
    "image": "https://theindiacrafthouse.com/cdn/shop/files/IkatHandWovenSoftCottonShirt-IndiBlue-TIS04M2@2x.jpg",
    "price": 2299,
    "category": "Traditional",
    "skinToneCompatibility": ["Warm", "Medium", "Olive"],
    "description": "Vibrant patterns enhance warm undertones and complement olive and medium complexions."
  },
  {
    "id": 54,
    "name": "Navy Blue Jodhpuri Suit",
    "image": "https://assets.panashindia.com/media/catalog/product/cache/1/image/479x671/9df78eab33525d08d6e5fb8d27136e95/1/1/1161mw23-msst-1652-306-2.jpg",
    "price": 6999,
    "category": "Traditional",
    "skinToneCompatibility": ["Fair", "Medium", "Olive"],
    "description": "Royal navy enhances fair and olive complexions for formal traditional events."
  },
  {
    "id": 55,
    "name": "Cream Sherwani",
    "image": "https://pictures.kartmax.in/inside/live/1200x1200/quality=6/sites/9s145MyZrWdIAwpU0JYS/product-images/trendy_silk_cream_sherwani_17014295632233_1.jpg",
    "price": 8499,
    "category": "Traditional",
    "skinToneCompatibility": ["Dark", "Warm", "Olive"],
    "description": "Soft cream provides elegant contrast against darker skin tones and enhances warm undertones."
  },
  {
    "id": 56,
    "name": "Indigo Dhoti Kurta",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKIFqT03Uibpy7J6JoA55oD5VzTH3O1x6rDw&s",
    "price": 3299,
    "category": "Traditional",
    "skinToneCompatibility": ["Cool", "Fair", "Neutral"],
    "description": "Deep indigo brightens fair skin and harmonizes with cool undertones."
  },
  {
    "id": 57,
    "name": "Saffron Kurta",
    "image": "https://img2.ogaanindia.com/pub/media/catalog/product/cache/3f6619daccdb194398d06464ab49fa6e/b/_/b_72280.jpg",
    "price": 2599,
    "category": "Traditional",
    "skinToneCompatibility": ["Warm", "Medium", "Olive"],
    "description": "Vibrant saffron enhances warm undertones and complements olive and medium complexions."
  },
  {
    "id": 58,
    "name": "Charcoal Bandi Jacket",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRupOw7ziXJ-bFnq0lQ9PP2a6S--tb7ZZ2ldg&s",
    "price": 3999,
    "category": "Traditional",
    "skinToneCompatibility": ["Medium", "Dark", "Cool"],
    "description": "Structured charcoal adds depth to medium and dark skin tones while complementing cool undertones."
  },
  {
    "id": 59,
    "name": "Peach Pathani Suit",
    "image": "https://medias.utsavfashion.com/media/catalog/product/cache/1/image/500x/040ec09b1e35df139433887a97daa66f/s/o/solid-color-cotton-slub-paithani-suit-in-peach-v1-mtx3315.jpg",
    "price": 2999,
    "category": "Traditional",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Soft peach adds warmth to fair complexions and complements cool undertones."
  },
  {
    "id": 60,
    "name": "Forest Green Angarakha",
    "image": "https://manyavar.scene7.com/is/image/manyavar/M10481_09-11-2022-11-07:650x900?&dpr=on,2",
    "price": 4599,
    "category": "Traditional",
    "skinToneCompatibility": ["Warm", "Olive", "Medium"],
    "description": "Earthy green enhances warm undertones and complements olive and medium complexions."
  }
],
Watches : [
  {
    "id": 1,
    "name": "Rose Gold Formal Watch",
    "image": "https://m.media-amazon.com/images/I/71bRz-yw+0L._UY1000_.jpg",
    "price": 4499,
    "category": "Formal",
    "skinToneCompatibility": ["Fair", "Warm", "Neutral"],
    "description": "Warm rose gold enhances fair and neutral skin tones, adding sophistication to formal attire."
  },
  {
    "id": 2,
    "name": "Silver Stainless Steel Watch",
    "image": "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw54205a45/images/Xylys/Catalog/40058SM01E_1.jpg?sw=360&sh=360",
    "price": 3999,
    "category": "Formal",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Cool silver complements fair skin and neutral undertones for professional elegance."
  },
  {
    "id": 3,
    "name": "Gold Ceramic Watch",
    "image": "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw900d4cff/images/Titan/Catalog/1696KC01_1.jpg?sw=800&sh=800",
    "price": 5499,
    "category": "Formal",
    "skinToneCompatibility": ["Medium", "Dark", "Warm"],
    "description": "Rich gold ceramic enhances warm undertones in medium and dark skin tones."
  },
  {
    "id": 4,
    "name": "Black Dial Watch",
    "image": "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw5c61fc1c/images/Titan/Catalog/90014KC05_1.jpg?sw=600&sh=600",
    "price": 3499,
    "category": "Formal",
    "skinToneCompatibility": ["Fair", "Dark", "Neutral"],
    "description": "Sleek black dial creates striking contrast against both fair and dark skin tones."
  },
  {
    "id": 5,
    "name": "Platinum Bracelet Watch",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6xTRrLOsVkS8_YwXH8r1_Jdpfn0vXoEeyTw&s",
    "price": 6999,
    "category": "Formal",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Cool platinum brightens fair skin and enhances cool undertones for formal occasions."
  },
  {
    "id": 6,
    "name": "Two-Tone Watch",
    "image": "https://static.chrono24.com/magazine/wp-content/uploads/2023/09/Rolex-Datejust-36-MENS-WATCH-116233-YELLOW-GOLD-AND-STEEL.jpeg",
    "price": 4799,
    "category": "Formal",
    "skinToneCompatibility": ["Medium", "Neutral", "Olive"],
    "description": "Versatile two-tone design complements medium and olive skin tones with neutral undertones."
  },
  {
    "id": 7,
    "name": "Black Ceramic Watch",
    "image": "https://in.danielwellington.com/cdn/shop/products/f8d337fea33fdc9e2c3c132b66e220e5a8a1de19.png?v=1686815188&width=1500",
    "price": 4299,
    "category": "Formal",
    "skinToneCompatibility": ["Fair", "Dark", "Neutral"],
    "description": "Matte black ceramic creates elegant contrast against both fair and dark skin tones."
  },
  {
    "id": 8,
    "name": "Champagne Dial Watch",
    "image": "https://m.media-amazon.com/images/I/61sEyPSIi9L._UY1000_.jpg",
    "price": 3999,
    "category": "Formal",
    "skinToneCompatibility": ["Warm", "Medium", "Olive"],
    "description": "Warm champagne dial enhances medium and olive skin tones with warm undertones."
  },
  {
    "id": 9,
    "name": "Diamond-Accented Watch",
    "image": "https://images-cdn.ubuy.co.in/68659507865cc9c4f809920b-bulova-mens-diamond-accented-gold-tone.jpg",
    "price": 7999,
    "category": "Formal",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Subtle diamond accents brighten fair skin and complement cool undertones."
  },
  {
    "id": 10,
    "name": "Blue Dial Watch",
    "image": "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw1d53188a/images/Fastrack/Catalog/3281KM02_1.jpg?sw=600&sh=600",
    "price": 4599,
    "category": "Formal",
    "skinToneCompatibility": ["Fair", "Cool", "Olive"],
    "description": "Cool blue dial brightens fair skin and harmonizes with cool and olive undertones."
  },
  {
    "id": 11,
    "name": "Yellow Gold Watch",
    "image": "https://zimsonwatches.com/cdn/shop/products/SX138.jpg?v=1686922152",
    "price": 5999,
    "category": "Formal",
    "skinToneCompatibility": ["Medium", "Dark", "Warm", "Olive"],
    "description": "Classic yellow gold enhances warm undertones in medium, dark, and olive skin tones."
  },
  {
    "id": 12,
    "name": "Rose Gold Mesh Watch",
    "image": "https://5.imimg.com/data5/LH/SU/MY-77579052/pm-wa-m-00024.jpg",
    "price": 4299,
    "category": "Formal",
    "skinToneCompatibility": ["Fair", "Warm", "Neutral"],
    "description": "Delicate rose gold mesh adds warmth to fair skin and complements warm undertones."
  },
  {
    "id": 13,
    "name": "White Ceramic Watch",
    "image": "https://m.media-amazon.com/images/I/61kZsP98fAL._UY1000_.jpg",
    "price": 4699,
    "category": "Formal",
    "skinToneCompatibility": ["Medium", "Dark", "Olive", "Warm"],
    "description": "Clean white ceramic creates striking contrast against deeper skin tones and warm undertones."
  },
  {
    "id": 14,
    "name": "Silver Roman Numeral Watch",
    "image": "https://images-cdn.ubuy.co.in/667bf0efb2bd6028d705607d-mens-silver-big-rocks-with-roman.jpg",
    "price": 3799,
    "category": "Formal",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Classic silver with Roman numerals brightens fair skin and complements cool undertones."
  },
  {
    "id": 15,
    "name": "Gold Link Bracelet Watch",
    "image": "https://images.hugoboss.com/is/image/boss/hbeu58565055_999_200?$re_fullPageZoom$&qlt=85&fit=crop,1&align=1,1&bgcolor=ebebeb&lastModified=1756200433000&wid=1200&hei=1818",
    "price": 5299,
    "category": "Formal",
    "skinToneCompatibility": ["Medium", "Dark", "Warm", "Olive"],
    "description": "Substantial gold links enhance warm undertones in medium, dark, and olive skin tones."
  },
  {
    "id": 16,
    "name": "Two-Tone Bezel Watch",
    "image": "https://m.media-amazon.com/images/I/71JQSSjsYBL._UY1000_.jpg",
    "price": 4599,
    "category": "Formal",
    "skinToneCompatibility": ["Medium", "Neutral", "Olive"],
    "description": "Versatile two-tone bezel complements medium and olive skin tones with neutral undertones."
  },
  {
    "id": 17,
    "name": "Black Dial Rose Gold Watch",
    "image": "https://in.danielwellington.com/cdn/shop/products/dbd5e5b6734dd6a902ba1b0fae4a7a3f79b62a9c.png?v=1679929589",
    "price": 4899,
    "category": "Formal",
    "skinToneCompatibility": ["Fair", "Warm", "Neutral"],
    "description": "Contrasting black dial with rose gold case adds elegance to fair and warm skin tones."
  },
  {
    "id": 18,
    "name": "Mother-of-Pearl Watch",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcfqD0WMODJl9AJeSHXuatLpGphW3gx1VzRw&s",
    "price": 5399,
    "category": "Formal",
    "skinToneCompatibility": ["Medium", "Dark", "Olive", "Warm"],
    "description": "Iridescent mother-of-pearl dial enhances deeper skin tones and warm undertones."
  },
  {
    "id": 19,
    "name": "Platinum Mesh Watch",
    "image": "https://d17anp2eo56k6j.cloudfront.net/media/catalog/product/cache/ebf27a1c268f59435b925806ebd2433d/v/a/vacheron-constantin-diamond-platinum-mesh-art-deco-bracelet-watch_2_60-3-10021.jpg",
    "price": 6499,
    "category": "Formal",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Luxurious platinum mesh brightens fair skin and enhances cool undertones."
  },
  {
    "id": 20,
    "name": "Green Dial Watch",
    "image": "https://m.media-amazon.com/images/I/61MW5lzHBrL._UF1000,1000_QL80_.jpg",
    "price": 4399,
    "category": "Formal",
    "skinToneCompatibility": ["Warm", "Olive", "Medium"],
    "description": "Rich green dial enhances warm undertones and complements olive and medium skin tones."
  },
  {
    "id": 21,
    "name": "Diamond Bezel Watch",
    "image": "https://img.chrono24.com/images/uhren/42084931-fib0ec8v5dgkadjx1obmq5rl-ExtraLarge.jpg",
    "price": 8999,
    "category": "Formal",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Sparkling diamond bezel brightens fair skin and complements cool undertones."
  },
  {
    "id": 22,
    "name": "Rose Gold Leather Watch",
    "image": "https://m.media-amazon.com/images/I/711f2tX87UL.jpg",
    "price": 4199,
    "category": "Formal",
    "skinToneCompatibility": ["Fair", "Warm", "Neutral"],
    "description": "Rose gold case with leather strap adds warmth to fair and neutral skin tones."
  },
  {
    "id": 23,
    "name": "Gold Ceramic Watch",
    "image": "https://justintime.in/cdn/shop/products/CE1112.jpg?v=1682326064",
    "price": 5199,
    "category": "Formal",
    "skinToneCompatibility": ["Medium", "Dark", "Warm", "Olive"],
    "description": "Luxurious gold ceramic enhances warm undertones in deeper skin tones."
  },
  {
    "id": 24,
    "name": "Silver Moonphase Watch",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY1x5XuROfno5-KIwrQmaoJ__7hb7wjHi-eQ&s",
    "price": 5699,
    "category": "Formal",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Elegant silver moonphase brightens fair skin and complements cool undertones."
  },
  {
    "id": 25,
    "name": "Two-Tone Bracelet Watch",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTznHn1J-M6ag0QZeLqPNerNtiXfw8u8DNYeg&s",
    "price": 4999,
    "category": "Formal",
    "skinToneCompatibility": ["Medium", "Neutral", "Olive"],
    "description": "Classic two-tone bracelet complements medium and olive skin tones with neutral undertones."
  },
  {
    "id": 26,
    "name": "Black Ceramic Rose Gold Watch",
    "image": "https://m.media-amazon.com/images/I/619CYvVMzSL._UY1000_.jpg",
    "price": 5399,
    "category": "Formal",
    "skinToneCompatibility": ["Fair", "Warm", "Neutral"],
    "description": "Striking black ceramic with rose gold accents adds elegance to fair and warm skin tones."
  },
  {
    "id": 27,
    "name": "White Gold Diamond Watch",
    "image": "https://productimages.withfloats.com/tile/5c7a7270f06c8d0001290255.jpg",
    "price": 9999,
    "category": "Formal",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Luxurious white gold with diamonds brightens fair skin and enhances cool undertones."
  },
  {
    "id": 28,
    "name": "Brown Leather Watch",
    "image": "https://fossil.scene7.com/is/image/FossilPartners/FS5437_9L?$sfcc_lifestyle_large$",
    "price": 3299,
    "category": "Formal",
    "skinToneCompatibility": ["Medium", "Olive", "Warm"],
    "description": "Classic brown leather enhances warm undertones in medium and olive skin tones."
  },
  {
    "id": 29,
    "name": "Gold Skeleton Watch",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTkxdoYiStU1_pkKje1vXyXH03dA0TNVkF_Q&s",
    "price": 6299,
    "category": "Formal",
    "skinToneCompatibility": ["Medium", "Dark", "Warm", "Olive"],
    "description": "Intricate gold skeleton design enhances warm undertones in deeper skin tones."
  },
  {
    "id": 30,
    "name": "Blue Ceramic Watch",
    "image": "https://img.chrono24.com/images/uhren/33632132-0pblciujygl6uqiuhlfx6o09-ExtraLarge.jpg",
    "price": 4799,
    "category": "Formal",
    "skinToneCompatibility": ["Fair", "Cool", "Olive"],
    "description": "Vibrant blue ceramic brightens fair skin and harmonizes with cool and olive undertones."
  },
  {
    "id": 31,
    "name": "Leather Strap Watch",
    "image": "https://cdn.shopify.com/s/files/1/0322/8424/6155/files/SRPD37J1.png?v=1685768931",
    "price": 2499,
    "category": "Casual",
    "skinToneCompatibility": ["Medium", "Olive", "Warm"],
    "description": "Brown leather strap enhances warm undertones in medium and olive skin tones for everyday wear."
  },
  {
    "id": 32,
    "name": "Rose Gold Casual Watch",
    "image": "https://m.media-amazon.com/images/I/61CaI8AeQkL._UY1000_.jpg",
    "price": 2999,
    "category": "Casual",
    "skinToneCompatibility": ["Fair", "Warm", "Neutral"],
    "description": "Warm rose gold adds elegance to fair skin and complements warm undertones for casual styling."
  },
  {
    "id": 33,
    "name": "Navy Silicone Watch",
    "image": "https://justintime.in/cdn/shop/files/25200384_1.png?v=1733895030",
    "price": 1999,
    "category": "Casual",
    "skinToneCompatibility": ["Fair", "Cool", "Olive"],
    "description": "Cool navy silicone brightens fair skin and harmonizes with cool and olive undertones."
  },
  {
    "id": 34,
    "name": "Gold-Tone Watch",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnJ3hURxl_TSvgjqQbsjJC1CgsfxSgCvTbww&s",
    "price": 2299,
    "category": "Casual",
    "skinToneCompatibility": ["Medium", "Dark", "Warm"],
    "description": "Warm gold-tone enhances medium and dark skin tones with warm undertones for everyday elegance."
  },
  {
    "id": 35,
    "name": "Silver Mesh Watch",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcPQFB-14u4-HcFDq4T9l5_F0P6q-opN8e3Q&s",
    "price": 2699,
    "category": "Casual",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Cool silver mesh brightens fair skin and complements cool undertones for versatile casual wear."
  },
  {
    "id": 36,
    "name": "Beige Strap Watch",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZgrXNGLbsv5vsyZ63MbC57aSbXgyCEWK5_w&s",
    "price": 2199,
    "category": "Casual",
    "skinToneCompatibility": ["Dark", "Warm", "Neutral"],
    "description": "Light beige strap balances darker and warm skin tones for relaxed everyday styling."
  },
  {
    "id": 37,
    "name": "Black Stainless Steel Watch",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSblfOpwFj9IZkM4SftnvGlJBw6Ov1zHKKiRA&s",
    "price": 2799,
    "category": "Casual",
    "skinToneCompatibility": ["Fair", "Dark", "Neutral"],
    "description": "Sleek black stainless steel creates versatile contrast against both fair and dark skin tones."
  },
  {
    "id": 38,
    "name": "Turquoise Watch",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Bjs0Ywd1C_je4-rhJHbyl4wD_bxZuXKovA&s",
    "price": 2399,
    "category": "Casual",
    "skinToneCompatibility": ["Warm", "Olive", "Medium"],
    "description": "Vibrant turquoise enhances warm undertones and complements olive and medium skin tones."
  },
  {
    "id": 39,
    "name": "Two-Tone Casual Watch",
    "image": "https://images-cdn.ubuy.co.in/65dfad13f4f5881a653926bb-timex-men-s-easy-reader-date.jpg",
    "price": 2999,
    "category": "Casual",
    "skinToneCompatibility": ["Medium", "Neutral", "Olive"],
    "description": "Versatile two-tone design complements medium and olive skin tones with neutral undertones."
  },
  {
    "id": 40,
    "name": "Burgundy Leather Watch",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJiDQRe5S8m2eOUPjmw5A4zM5nSJpZtDRs1A&s",
    "price": 2599,
    "category": "Casual",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Rich burgundy leather adds warmth to fair complexions and complements cool undertones."
  },
  {
    "id": 41,
    "name": "Rose Gold Silicone Watch",
    "image": "https://justintime.in/cdn/shop/files/GW0745L4_P.jpg?v=1732009532&width=1946",
    "price": 2299,
    "category": "Casual",
    "skinToneCompatibility": ["Fair", "Warm", "Neutral"],
    "description": "Sporty rose gold silicone adds warmth to fair skin and complements warm undertones."
  },
  {
    "id": 42,
    "name": "Green Canvas Watch",
    "image": "https://m.media-amazon.com/images/I/91UrJuLomhL._UY1000_.jpg",
    "price": 1999,
    "category": "Casual",
    "skinToneCompatibility": ["Warm", "Olive", "Medium"],
    "description": "Earthy green canvas enhances warm undertones and complements olive and medium skin tones."
  },
  {
    "id": 43,
    "name": "Silver Sport Watch",
    "image": "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwcca62695/images/Xylys/Catalog/40057SM02E_1.jpg?sw=360&sh=360",
    "price": 2499,
    "category": "Casual",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Athletic silver brightens fair skin and complements cool undertones for active wear."
  },
  {
    "id": 44,
    "name": "Gold Mesh Watch",
    "image": "https://images-cdn.ubuy.co.in/63537f6de2853245062135c4-women-039-s-elegant-amp.jpg",
    "price": 3299,
    "category": "Casual",
    "skinToneCompatibility": ["Medium", "Dark", "Warm", "Olive"],
    "description": "Shimmering gold mesh enhances warm undertones in deeper skin tones for casual elegance."
  },
  {
    "id": 45,
    "name": "White Ceramic Watch",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2NzY-j9xcbqeA8-psBcUmMMWt_KQtSR-FZw&s",
    "price": 2799,
    "category": "Casual",
    "skinToneCompatibility": ["Medium", "Dark", "Olive", "Warm"],
    "description": "Clean white ceramic creates striking contrast against deeper skin tones and warm undertones."
  },
  {
    "id": 46,
    "name": "Black Rubber Watch",
    "image": "https://m.media-amazon.com/images/I/615zfNme1xL._UY1000_.jpg",
    "price": 2199,
    "category": "Casual",
    "skinToneCompatibility": ["Fair", "Dark", "Neutral"],
    "description": "Sporty black rubber creates versatile contrast against both fair and dark skin tones."
  },
  {
    "id": 47,
    "name": "Purple Silicone Watch",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyB15vMlcpcIv8WIx5xrGvip0jFDYBGRGu6A&s",
    "price": 2099,
    "category": "Casual",
    "skinToneCompatibility": ["Cool", "Fair", "Neutral"],
    "description": "Vibrant purple silicone brightens fair skin and complements cool undertones."
  },
  {
    "id": 48,
    "name": "Tan Leather Watch",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI_8eBsSONo6Se2KNKAlLWLl-KIMQ7ShBzsw&s",
    "price": 2399,
    "category": "Casual",
    "skinToneCompatibility": ["Warm", "Medium", "Olive"],
    "description": "Warm tan leather enhances medium and olive skin tones with warm undertones."
  },
  {
    "id": 49,
    "name": "Rose Gold Mesh Watch",
    "image": "https://m.media-amazon.com/images/I/61f+MuJYMJL._UY1000_.jpg",
    "price": 3199,
    "category": "Casual",
    "skinToneCompatibility": ["Fair", "Warm", "Neutral"],
    "description": "Delicate rose gold mesh adds warmth to fair skin and complements warm undertones."
  },
  {
    "id": 50,
    "name": "Navy Leather Watch",
    "image": "https://m.media-amazon.com/images/I/81R2NEoOQVL._UY350_.jpg",
    "price": 2599,
    "category": "Casual",
    "skinToneCompatibility": ["Fair", "Cool", "Olive"],
    "description": "Classic navy leather brightens fair skin and harmonizes with cool and olive undertones."
  },
  {
    "id": 51,
    "name": "Gold Sport Watch",
    "image": "https://m.media-amazon.com/images/I/61zrYPb5f1L.jpg",
    "price": 2699,
    "category": "Casual",
    "skinToneCompatibility": ["Medium", "Dark", "Warm", "Olive"],
    "description": "Athletic gold enhances warm undertones in deeper skin tones for active wear."
  },
  {
    "id": 52,
    "name": "Silver Minimalist Watch",
    "image": "https://zimsonwatches.com/cdn/shop/files/AR11599.jpg?v=1716450478",
    "price": 2299,
    "category": "Casual",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Clean silver design brightens fair skin and complements cool undertones for everyday wear."
  },
  {
    "id": 53,
    "name": "Two-Tone Silicone Watch",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdmOa-aPFiOni_iNwM-94Jv8qpdMUOYd--nA&s",
    "price": 2499,
    "category": "Casual",
    "skinToneCompatibility": ["Medium", "Neutral", "Olive"],
    "description": "Sporty two-tone silicone complements medium and olive skin tones with neutral undertones."
  },
  {
    "id": 54,
    "name": "Coral Silicone Watch",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfoUTYOLLhsK6yc_4BqfHpVFS8i5k903hvTg&s",
    "price": 2199,
    "category": "Casual",
    "skinToneCompatibility": ["Warm", "Medium", "Olive"],
    "description": "Vibrant coral enhances warm undertones and complements olive and medium skin tones."
  },
  {
    "id": 55,
    "name": "Black Ceramic Watch",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2qnuShRPdcDYiKMmtRY_t30xQ3pzUi9XEOA&s",
    "price": 2899,
    "category": "Casual",
    "skinToneCompatibility": ["Fair", "Dark", "Neutral"],
    "description": "Sleek black ceramic creates versatile contrast against both fair and dark skin tones."
  },
  {
    "id": 56,
    "name": "Rose Gold Leather Watch",
    "image": "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwb45259e6/images/Titan/Catalog/1825WL02_1.jpg?sw=600&sh=600",
    "price": 2999,
    "category": "Casual",
    "skinToneCompatibility": ["Fair", "Warm", "Neutral"],
    "description": "Rose gold with leather strap adds warmth to fair skin and complements warm undertones."
  },
  {
    "id": 57,
    "name": "Silver Digital Watch",
    "image": "https://assets.myntassets.com/h_1440,q_75,w_1080/v1/assets/images/251026/2022/7/18/ef58f3b6-ecdb-481b-b5c8-0de7f8361bf81658123343401-Casio-Youth-Digital-Men-Silver-Digital-watch-D099-AE-1200WHD-11.jpg",
    "price": 1999,
    "category": "Casual",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Modern silver digital brightens fair skin and complements cool undertones for tech-savvy wear."
  },
  {
    "id": 58,
    "name": "Wooden Watch",
    "image": "https://m.media-amazon.com/images/I/61MOYYvyRmS._SL1000_.jpg",
    "price": 2499,
    "category": "Casual",
    "skinToneCompatibility": ["Warm", "Medium", "Olive"],
    "description": "Natural wooden enhances warm undertones and complements olive and medium skin tones."
  },
  {
    "id": 59,
    "name": "Gold Chronograph Watch",
    "image": "https://m.media-amazon.com/images/I/71xWfzKNkKL._UY1000_.jpg",
    "price": 3299,
    "category": "Casual",
    "skinToneCompatibility": ["Medium", "Dark", "Warm", "Olive"],
    "description": "Sporty gold chronograph enhances warm undertones in deeper skin tones for active wear."
  },
  {
    "id": 60,
    "name": "Teal Silicone Watch",
    "image": "https://m.media-amazon.com/images/I/71tmghA4i9L._UY1000_.jpg",
    "price": 2299,
    "category": "Casual",
    "skinToneCompatibility": ["Cool", "Fair", "Olive"],
    "description": "Vibrant teal silicone brightens fair skin and harmonizes with cool and olive undertones."
  }
],
accessories : [
  {
    "id": 1,
    "name": "Silver Cufflinks",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrJh3n2KrOYtokTT07z6nphd-aTeeZ13uxVQ&s",
    "price": 1999,
    "category": "Jewelry",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Cool silver complements fair skin and enhances cool undertones for formal occasions."
  },
  {
    "id": 2,
    "name": "Gold Signet Ring",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDlm8bE-wo8F04sJ_rPxpBO11daU6ZuG_6ew&s",
    "price": 3499,
    "category": "Jewelry",
    "skinToneCompatibility": ["Medium", "Dark", "Warm"],
    "description": "Warm gold enhances deeper skin tones and brings out warmth in olive complexions."
  },
  {
    "id": 3,
    "name": "Leather Bracelet",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiif1b_DYFQ2d1MPEOUycPEpvid68p2YvSbA&s",
    "price": 1299,
    "category": "Jewelry",
    "skinToneCompatibility": ["Medium", "Olive", "Warm"],
    "description": "Natural leather tones complement warm and olive skin tones for rugged elegance."
  },
  {
    "id": 4,
    "name": "Titanium Necklace",
    "image": "https://m.media-amazon.com/images/I/71QGP+ZY9HL._UY1000_.jpg",
    "price": 2499,
    "category": "Jewelry",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Cool titanium brightens fair skin and harmonizes with cool undertones."
  },
  {
    "id": 5,
    "name": "Rose Gold Tie Clip",
    "image": "https://m.media-amazon.com/images/I/71EwW43nZbL._UY1100_.jpg",
    "price": 1599,
    "category": "Jewelry",
    "skinToneCompatibility": ["Fair", "Warm", "Neutral"],
    "description": "Warm rose gold adds sophistication to fair skin and neutral undertones."
  },
  {
    "id": 6,
    "name": "Black Onyx Ring",
    "image": "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/2025/JUNE/25/ATBB7gax_2c166191b1ba44e6bca7ee5bb445f4fe.jpg",
    "price": 2999,
    "category": "Jewelry",
    "skinToneCompatibility": ["Fair", "Dark", "Neutral"],
    "description": "Striking black onyx creates contrast against both fair and dark skin tones."
  },
  {
    "id": 7,
    "name": "Silver Chain Necklace",
    "image": "https://zariyajewellery.in/cdn/shop/files/Pendant_necklace_for_men.jpg?v=1736180587",
    "price": 2199,
    "category": "Jewelry",
    "skinToneCompatibility": ["Fair", "Cool", "Olive"],
    "description": "Cool silver chain brightens fair skin and complements olive undertones."
  },
  {
    "id": 8,
    "name": "Wooden Bead Bracelet",
    "image": "https://images-cdn.ubuy.co.in/6441ba508c1c0e1238305e24-bohemian-wood-beaded-bracelets-for-women.jpg",
    "price": 999,
    "category": "Jewelry",
    "skinToneCompatibility": ["Warm", "Medium", "Olive"],
    "description": "Natural wood tones enhance warm undertones and complement olive skin."
  },
  {
    "id": 9,
    "name": "Platinum Cufflinks",
    "image": "https://www.jewelove.in/cdn/shop/files/jewelove-platinum-cufflinks-for-men-jl-pt-c-01-si-ij-38787248980209_1024x.jpg?v=1693314883",
    "price": 4499,
    "category": "Jewelry",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Luxurious platinum brightens fair skin and enhances cool undertones."
  },
  {
    "id": 10,
    "name": "Bronze Pocket Watch",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBNXiiyr6Vi_4e0360SNtkGA3Pz6OkAv7pYQ&s",
    "price": 3999,
    "category": "Jewelry",
    "skinToneCompatibility": ["Warm", "Medium", "Olive"],
    "description": "Warm bronze tones complement warm and olive skin tones for vintage elegance."
  },
  {
    "id": 11,
    "name": "Stainless Steel Bracelet",
    "image": "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/2471044/2021/4/21/d859dd5e-02dd-4495-92a8-28fd98343bdf1618996404891-Yellow-Chimes-3891618996403982-1.jpg",
    "price": 1799,
    "category": "Jewelry",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Cool stainless steel brightens fair skin and complements cool undertones."
  },
  {
    "id": 12,
    "name": "Gold Chain Necklace",
    "image": "https://m.media-amazon.com/images/I/81Tu9dLoYVL._UY1100_.jpg",
    "price": 3299,
    "category": "Jewelry",
    "skinToneCompatibility": ["Medium", "Dark", "Warm"],
    "description": "Classic gold enhances deeper skin tones and brings out warmth in complexions."
  },
  {
    "id": 13,
    "name": "Leather Messenger Bag",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa5jC2U808pdill8MSMP-w1804f4DTT4RUog&s",
    "price": 4999,
    "category": "Bags",
    "skinToneCompatibility": ["Medium", "Olive", "Warm"],
    "description": "Rich leather complements warm and olive skin tones for professional style."
  },
  {
    "id": 14,
    "name": "Black Backpack",
    "image": "https://www.fgear.in/cdn/shop/files/1_5df4be86-4f4d-40dc-a00c-ffebd6be7904.jpg?v=1707367801&width=1946",
    "price": 2999,
    "category": "Bags",
    "skinToneCompatibility": ["Fair", "Dark", "Neutral"],
    "description": "Versatile black creates contrast against both fair and dark skin tones."
  },
  {
    "id": 15,
    "name": "Canvas Tote Bag",
    "image": "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/30189103/2025/7/1/b9309775-88df-4127-ba0f-1334663e23d41751352562193-Womanix-Structured-Colourblocked-Tote-Bag-9991751352561761-1.jpg",
    "price": 1999,
    "category": "Bags",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Natural canvas complements fair skin and cool undertones for casual wear."
  },
  {
    "id": 16,
    "name": "Brown Leather Briefcase",
    "image": "https://www.satchel-page.com/cdn/shop/products/DSF7307-New_BG-1920x1360_2500x.jpg?v=1646055699",
    "price": 7999,
    "category": "Bags",
    "skinToneCompatibility": ["Medium", "Olive", "Warm"],
    "description": "Classic brown leather enhances warm undertones in medium and olive skin."
  },
  {
    "id": 17,
    "name": "Navy Duffel Bag",
    "image": "https://m.media-amazon.com/images/I/61J0MaspdML._UY1100_.jpg",
    "price": 3499,
    "category": "Bags",
    "skinToneCompatibility": ["Fair", "Cool", "Olive"],
    "description": "Cool navy brightens fair skin and harmonizes with cool and olive undertones."
  },
  {
    "id": 18,
    "name": "Grey Laptop Bag",
    "image": "https://safaribags.com/cdn/shop/files/2_3d6acc65-50a9-4d45-b83c-31bb315d7b05.jpg?v=1707731912",
    "price": 3999,
    "category": "Bags",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Sophisticated grey complements fair skin and cool undertones for work."
  },
  {
    "id": 19,
    "name": "Tan Crossbody Bag",
    "image": "https://assets.ajio.com/medias/sys_master/root/20240116/KoxH/65a604db16fd2c6e6aa9db05/-473Wx593H-466984783-tan-MODEL.jpg",
    "price": 2499,
    "category": "Bags",
    "skinToneCompatibility": ["Warm", "Medium", "Olive"],
    "description": "Warm tan tones enhance medium and olive skin tones for casual style."
  },
  {
    "id": 20,
    "name": "Black Leather Briefcase",
    "image": "https://rukminim2.flixcart.com/image/480/640/xif0q/briefcase/h/w/s/large-genuine-leather-black-briefcase-attach-case-with-dual-original-imaggf8cwj5wgkve.jpeg?q=90",
    "price": 8999,
    "category": "Bags",
    "skinToneCompatibility": ["Fair", "Dark", "Neutral"],
    "description": "Professional black creates elegant contrast against fair and dark skin."
  },
  {
    "id": 21,
    "name": "Olive Green Backpack",
    "image": "https://images-cdn.ubuy.co.in/6494b59162cc3563e9671355-20-in-green-large-sport-washed-canvas.jpg",
    "price": 2799,
    "category": "Bags",
    "skinToneCompatibility": ["Warm", "Olive", "Medium"],
    "description": "Earthy olive enhances warm undertones and complements olive skin tones."
  },
  {
    "id": 22,
    "name": "Beige Messenger Bag",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRof71CbO_zxVofoK6S_LlFIyCdgZj2HPw0YA&s",
    "price": 3299,
    "category": "Bags",
    "skinToneCompatibility": ["Dark", "Warm", "Neutral"],
    "description": "Light beige balances darker skin tones and enhances warm undertones."
  },
  {
    "id": 23,
    "name": "Charcoal Gym Bag",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvLa2eYLv5EgzSmrEUWFA6FgH1FTgBo2kLiw&s",
    "price": 2299,
    "category": "Bags",
    "skinToneCompatibility": ["Medium", "Dark", "Cool"],
    "description": "Deep charcoal adds sophistication to deeper skin tones with cool undertones."
  },
  {
    "id": 24,
    "name": "Burgundy Travel Bag",
    "image": "https://m.media-amazon.com/images/I/61mLsWqcFkL._UY1100_.jpg",
    "price": 4499,
    "category": "Bags",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Rich burgundy adds warmth to fair skin and complements cool undertones."
  },
  {
    "id": 25,
    "name": "Brown Leather Belt",
    "image": "https://teakwoodleathers.com/cdn/shop/products/T_BT_473_CfBr_6_1080x.jpg?v=1750934390",
    "price": 2499,
    "category": "Belts & Wallets",
    "skinToneCompatibility": ["Medium", "Olive", "Warm"],
    "description": "Classic brown leather enhances warm undertones in medium and olive skin."
  },
  {
    "id": 26,
    "name": "Black Leather Wallet",
    "image": "https://m.media-amazon.com/images/I/81WIcyHQ7oL._UY1100_.jpg",
    "price": 1999,
    "category": "Belts & Wallets",
    "skinToneCompatibility": ["Fair", "Dark", "Neutral"],
    "description": "Versatile black creates contrast against both fair and dark skin tones."
  },
  {
    "id": 27,
    "name": "Canvas Belt",
    "image": "https://rukminim2.flixcart.com/image/480/640/xif0q/belt/h/a/r/one-size-canvas-belt-01-urf-bt-161-bt-33-grn-d-belt-usl-original-imagvthcpwa6cztw.jpeg?q=90",
    "price": 1299,
    "category": "Belts & Wallets",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Natural canvas complements fair skin and cool undertones for casual wear."
  },
  {
    "id": 28,
    "name": "Tan Leather Wallet",
    "image": "https://lorenzindia.com/cdn/shop/files/GL-34_1-PhotoRoom.png?v=1689948907",
    "price": 1799,
    "category": "Belts & Wallets",
    "skinToneCompatibility": ["Warm", "Medium", "Olive"],
    "description": "Warm tan tones enhance medium and olive skin tones for everyday use."
  },
  {
    "id": 29,
    "name": "Silver Cardholder",
    "image": "https://www.codesilver.in/cdn/shop/files/CSOA0141.jpg?v=1719462822",
    "price": 1599,
    "category": "Belts & Wallets",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Cool silver brightens fair skin and complements cool undertones."
  },
  {
    "id": 30,
    "name": "Black Braided Belt",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0fP-A7kkISLlP3pWYb33xRgcPU_ptLa1jXQ&s",
    "price": 2199,
    "category": "Belts & Wallets",
    "skinToneCompatibility": ["Fair", "Dark", "Neutral"],
    "description": "Textured black creates versatile contrast against fair and dark skin."
  },
 {
    "id": 31,
    "name": "Olive Green Belt",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuYADkyfPkg6w5BABIKMmrm_S5PZqEZQTDrQ&s",
    "price": 1699,
    "category": "Belts & Wallets",
    "skinToneCompatibility": ["Warm", "Olive", "Medium"],
    "description": "Earthy olive enhances warm undertones and complements olive skin tones."
  },
  {
    "id": 32,
    "name": "Beige Wallet",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAoY3zo16AYQbGhR9LvPYJZKbZs5nb4JZKTg&s",
    "price": 1499,
    "category": "Belts & Wallets",
    "skinToneCompatibility": ["Dark", "Warm", "Neutral"],
    "description": "Light beige balances darker skin tones and enhances warm undertones."
  },
  {
    "id": 33,
    "name": "Navy Blue Belt",
    "image": "https://redtape.com/cdn/shop/files/1_b342edf6-8b6d-4055-befe-240d21968ef2.jpg?v=1754292021",
    "price": 1899,
    "category": "Belts & Wallets",
    "skinToneCompatibility": ["Fair", "Cool", "Olive"],
    "description": "Cool navy brightens fair skin and harmonizes with cool and olive undertones."
  },
  {
    "id": 34,
    "name": "Brown Leather Wallet",
    "image": "https://rukminim2.flixcart.com/image/480/640/xif0q/wallet-card-wallet/i/b/z/w03-1-11-original-purses-12-wallet-spiffy-9-original-imahfcz5gwxw4hvk.jpeg?q=90",
    "price": 2199,
    "category": "Belts & Wallets",
    "skinToneCompatibility": ["Medium", "Olive", "Warm"],
    "description": "Rich brown leather enhances warm undertones in medium and olive skin."
  },
  {
    "id": 35,
    "name": "Charcoal Cardholder",
    "image": "hhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8WtNnFZ8NujbTqWoH9IePsjLKMq3U5ChHeA&s",
    "price": 1399,
    "category": "Belts & Wallets",
    "skinToneCompatibility": ["Medium", "Dark", "Cool"],
    "description": "Deep charcoal adds sophistication to deeper skin tones with cool undertones."
  },
  {
    "id": 36,
    "name": "Burgundy Belt",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFqhjAxK4ewJsoT-CL_btjx131yavyGVRmYA&s",
    "price": 1999,
    "category": "Belts & Wallets",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Rich burgundy adds warmth to fair skin and complements cool undertones."
  },
  {
    "id": 37,
    "name": "Black Beanie",
    "image": "https://assets.ajio.com/medias/sys_master/root/20230602/vzGA/6479572842f9e729d7112291/-1117Wx1400H-461575039-black-MODEL.jpg",
    "price": 999,
    "category": "Hats & Caps",
    "skinToneCompatibility": ["Fair", "Dark", "Neutral"],
    "description": "Classic black creates versatile contrast against both fair and dark skin tones."
  },
  {
    "id": 38,
    "name": "Brown Fedora",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu_BCoWinik7jaiFtjjM1MZ-6g5y4-iuPvPw&s",
    "price": 2499,
    "category": "Hats & Caps",
    "skinToneCompatibility": ["Medium", "Olive", "Warm"],
    "description": "Warm brown enhances medium and olive skin tones for sophisticated style."
  },
  {
    "id": 39,
    "name": "Grey Baseball Cap",
    "image": "https://m.media-amazon.com/images/I/5155gtu3iTL._UY1100_.jpg",
    "price": 1299,
    "category": "Hats & Caps",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Cool grey complements fair skin and cool undertones for casual wear."
  },
  {
    "id": 40,
    "name": "Navy Blue Beanie",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT74U7eDo26fjE2ytb3ccWrKcjZjtATfm21QA&s",
    "price": 1199,
    "category": "Hats & Caps",
    "skinToneCompatibility": ["Fair", "Cool", "Olive"],
    "description": "Cool navy brightens fair skin and harmonizes with cool and olive undertones."
  },
  {
    "id": 41,
    "name": "Tan Fedora",
    "image": "https://hatstore.imgix.net/888588959534_1.jpg?auto=compress%2Cformat&w=717&h=574&fit=crop&q=80",
    "price": 2299,
    "category": "Hats & Caps",
    "skinToneCompatibility": ["Warm", "Medium", "Olive"],
    "description": "Warm tan tones enhance medium and olive skin tones for vintage style."
  },
  {
    "id": 42,
    "name": "Black Fedora",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKb4uT1rImDL5lH8x_1yFIaDja8iTEtO-4Xg&s",
    "price": 2699,
    "category": "Hats & Caps",
    "skinToneCompatibility": ["Fair", "Dark", "Neutral"],
    "description": "Classic black creates elegant contrast against fair and dark skin tones."
  },
  {
    "id": 43,
    "name": "Olive Green Cap",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0qRTKP6fj2bXau5AxYGs9M8yU5_6qUnLnmQ&s",
    "price": 1399,
    "category": "Hats & Caps",
    "skinToneCompatibility": ["Warm", "Olive", "Medium"],
    "description": "Earthy olive enhances warm undertones and complements olive skin tones."
  },
  {
    "id": 44,
    "name": "Beige Bucket Hat",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaiW5Zqvxea65rt0eYFIFo_FbZ6ivrbNdAQQ&s",
    "price": 1599,
    "category": "Hats & Caps",
    "skinToneCompatibility": ["Dark", "Warm", "Neutral"],
    "description": "Light beige balances darker skin tones and enhances warm undertones."
  },
  {
    "id": 45,
    "name": "Charcoal Beanie",
    "image": "https://www.hush-uk.com/dw/image/v2/BDNS_PRD/on/demandware.static/-/Sites-hush-master-catalog/default/dw75262052/large/012266-2806-02.jpg?sw=580&q=90",
    "price": 1099,
    "category": "Hats & Caps",
    "skinToneCompatibility": ["Medium", "Dark", "Cool"],
    "description": "Deep charcoal adds sophistication to deeper skin tones with cool undertones."
  },
  {
    "id": 46,
    "name": "Burgundy Beanie",
    "image": "https://5.imimg.com/data5/ECOM/Default/2024/1/377248114/BB/BM/IC/115334353/gr-1703342979973-img-20210101-wa0030-origin80prcnt-500x500.jpg",
    "price": 1299,
    "category": "Hats & Caps",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Rich burgundy adds warmth to fair skin and complements cool undertones."
  },
  {
    "id": 47,
    "name": "Green Baseball Cap",
    "image": "https://www.jackjones.in/cdn/shop/files/902170402_g0_03e426f4-d3e4-44e8-9988-ce5ef317e25b.jpg?v=1754380855&width=2048",
    "price": 1499,
    "category": "Hats & Caps",
    "skinToneCompatibility": ["Warm", "Olive", "Medium"],
    "description": "Earthy green enhances warm undertones and complements olive skin tones."
  },
  {
    "id": 48,
    "name": "Silver Fedora",
    "image": "https://m.media-amazon.com/images/I/71SCh-C1pAL._UY1100_.jpg",
    "price": 2999,
    "category": "Hats & Caps",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Metallic silver brightens fair skin and enhances cool undertones for modern style."
  }
],
  sunglasses :  [
    {
      "id": 1,
      "name": "Aviator Classic",
      "image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSN8vYZxDF60AMio1_3g7LrtrOOuuxvhy_HnQ1fERhwgZWVef-IWuW0EIVOGzaOODVmni8jgdsotKRuuk_3uO-hEZ2wyQGDyDW9Rg2dv1W-w_uf9TMUj4suGw",
      "price": 1599,
      "faceShapeCompatibility": ["Oval", "Square"],
      "description": "Teardrop lens shape complements oval proportions while balancing angular features of square faces."
    },
    {
      "id": 2,
      "name": "Round Retro Shades",
      "image": "https://images2.ray-ban.com//cdn-record-files-pi/07e56baa-a7f4-4f33-9a19-abfd012770f7/18553959-e7a2-4035-986f-ad26011f72b7/0RB3447__919648__STD__shad__qt.png?impolicy=RB_Product_clone&width=700&bgc=%23f2f2f2",
      "price": 1299,
      "faceShapeCompatibility": ["Square", "Heart"],
      "description": "Circular frames soften sharp jawlines and add width to narrower chins characteristic of heart-shaped faces."
    },
    {
      "id": 3,
      "name": "Wayfarer Classics",
      "image": "https://india.ray-ban.com/media/catalog/product/cache/c5a5bd13e2650a156913221dd914de35/0/r/0rw4006__601st3__p21__shad__qt.png",
      "price": 1799,
      "faceShapeCompatibility": ["Round", "Oval"],
      "description": "Structured silhouette adds definition to round faces while enhancing the natural symmetry of oval faces."
    },
    {
      "id": 4,
      "name": "Cat-Eye Glamour",
      "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTbg25-9D95fiPJtGNTINzHG8cLYPcr55E2c7HoVUDcmK3hMQW-R7Qh2eBb_EXM0JRV-Sho6JXujQlDyznyb539bRtMg1fJEy9NvR9sp4oV6m_otbfcs4qaNQ",
      "price": 1999,
      "faceShapeCompatibility": ["Heart", "Diamond"],
      "description": "Upswept corners highlight cheekbones and balance wider foreheads of heart and diamond face shapes."
    },
    {
      "id": 5,
      "name": "Square Bold Frames",
      "image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR93pCwyT9VjQmH32zpG3azBNaFqrlcIimfPYjpBm0upK7-4H9Qpe8CQ_ZMmRinKjVbHL5NRiWPYW91_IiF4DxbCvUXNFOB2LSgmObPpjQkxebtmR9uhsvOT70",
      "price": 1499,
      "faceShapeCompatibility": ["Round", "Oval"],
      "description": "Angular design adds structure to soft curves of round faces while complementing balanced oval proportions."
    },
    {
      "id": 6,
      "name": "Oval Minimalist",
      "image": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSVzT7UXkXl7XqL4xmfDK-YUZYrFbJ4sZoNncU34KjItaRjRhx8MdvJdHpLmjjN9NIL5T52Kac1mBTl9b_okBTv3uXKcr_PC7uqkHy1DoyF5XB6HNeGFs9hCw",
      "price": 1399,
      "faceShapeCompatibility": ["Square", "Diamond"],
      "description": "Gentle curves soften strong jawlines and angular features of square and diamond face shapes."
    },
    {
      "id": 7,
      "name": "Rectangle Sport",
      "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTvahzbDKD3x4qYEU_kR1I7zj5H1XmaaWd0Z5f6NY-KfNGa8Hn5SGQ3IFzxuXd5mg0MjGjQeNXJkREn7kp2a8wu0Ivrg_n563C9EPLF7LipusgJZGZ_4qV6Mg",
      "price": 1699,
      "faceShapeCompatibility": ["Oblong", "Oval"],
      "description": "Horizontal lines break up facial length of oblong faces while enhancing natural oval symmetry."
    },
    {
      "id": 8,
      "name": "Butterfly Elegant",
      "image": "https://voeyecare.com/cdn/shop/files/VOTJ706_7.jpg?v=1710418330&width=600",
      "price": 1899,
      "faceShapeCompatibility": ["Heart", "Oval"],
      "description": "Wide top narrows toward bottom, balancing wider forehead of heart shapes while flattering oval proportions."
    },
    {
      "id": 9,
      "name": "Geometric Modern",
      "image": "https://moonx.in/cdn/shop/files/MoonX_Jaguar_Best_Metal_sunglasses_from_MoonX_Eyewear1.jpg?v=1721157352&width=1080",
      "price": 2199,
      "faceShapeCompatibility": ["Round", "Diamond"],
      "description": "Angular design adds definition to soft round features while complementing striking diamond cheekbones."
    },
    {
      "id": 10,
      "name": "Teardrop Vintage",
      "image": "https://m.media-amazon.com/images/I/710hzRCyIIL._UY350_.jpg",
      "price": 1799,
      "faceShapeCompatibility": ["Oblong", "Heart"],
      "description": "Tapered design adds width to narrow oblong faces while balancing wider forehead of heart shapes."
    },
    {
      "id": 11,
      "name": "Browline Classic",
      "image": "https://i.etsystatic.com/10211348/r/il/d00175/5921154883/il_570xN.5921154883_2nus.jpg",
      "price": 1499,
      "faceShapeCompatibility": ["Oval", "Round"],
      "description": "Distinctive upper frame adds structure to round faces while enhancing balanced oval proportions."
    },
    {
      "id": 12,
      "name": "Shield Sport",
      "image": "https://cdn.thewirecutter.com/wp-content/media/2024/12/BEST-SPORT-SUNGLASSES-2048px-5855.jpg?auto=webp&quality=75&width=1024",
      "price": 1999,
      "faceShapeCompatibility": ["Oblong", "Square"],
      "description": "Wide single lens adds width to narrow oblong faces while softening angular square features."
    },
    {
      "id": 13,
      "name": "Hexagon Edgy",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3_1nomopFbO5yndmcn6oieZMEfhfeRMG2iA&s",
      "price": 2299,
      "faceShapeCompatibility": ["Diamond", "Heart"],
      "description": "Angular design highlights diamond cheekbones while balancing wider forehead of heart shapes."
    },
    {
      "id": 14,
      "name": "Rimless Lightweight",
      "image": "https://images.meesho.com/images/products/423332559/5ndqi_512.webp?width=512",
      "price": 1699,
      "faceShapeCompatibility": ["Oval", "Oblong"],
      "description": "Minimal design doesn't overwhelm oval proportions while adding subtle width to narrow oblong faces."
    },
    {
      "id": 15,
      "name": "Clubmaster Retro",
      "image": "https://india.ray-ban.com/media/catalog/product/cache/9198bde1d0eff71feec5e39d680e88c5/8/0/8053672973334_4.jpg",
      "price": 1599,
      "faceShapeCompatibility": ["Round", "Square"],
      "description": "Bold upper frame adds structure to round faces while softening strong square jawlines."
    },
    {
      "id": 16,
      "name": "Wrap Sport",
      "image": "https://m.media-amazon.com/images/I/515m2A+HltL._UY1100_.jpg",
      "price": 1899,
      "faceShapeCompatibility": ["Oblong", "Diamond"],
      "description": "Curved design adds width to narrow oblong faces while complementing angular diamond features."
    },
    {
      "id": 17,
      "name": "Keyhole Vintage",
       "image": "https://www.krnglasses.com/cdn/shop/files/ZIGGY_10_7407b14d-f7d0-4e1a-ab15-228642afbfd4_393x@3x.progressive.jpg?v=1754037577",
      "price": 1399,
      "faceShapeCompatibility": ["Heart", "Oval"],
      "description": "Distinctive bridge detail draws attention to eyes, balancing heart shape while flattering oval symmetry."
    },
    {
      "id": 18,
      "name": "Phantos Soft",
       "image": "https://www.rkumar.in/cdn/shop/files/0HC7183__947380__P21__shad__qt.jpg?v=1758953577&width=1920",
      "price": 1699,
      "faceShapeCompatibility": ["Square", "Diamond"],
      "description": "Rounded corners soften angular features of square and diamond face shapes."
    },
    {
      "id": 19,
      "name": "Oversized Glam",
       "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlcGZacWvy9a7_0EkX3ALEpYTH7FH8bYUR8w&s",
      "price": 2199,
      "faceShapeCompatibility": ["Oval", "Heart"],
      "description": "Large proportions complement balanced oval features while adding width to narrower heart chin."
    },
    {
      "id": 20,
      "name": "Navigator Bold",
       "image": "https://solsticesunglasses.com/cdn/shop/products/CL40205U_01A_08_740x.jpg?v=1641390921",
      "price": 1999,
      "faceShapeCompatibility": ["Oblong", "Round"],
      "description": "Wide design adds width to narrow oblong faces while adding structure to soft round features."
    },
    {
      "id": 21,
      "name": "Round Thin Metal",
       "image": "https://thecraze.in/cdn/shop/files/1669025989767-43774bf9d9e6463bb5a1e58c60853e7f-goods.jpg?v=1747623342",
      "price": 1799,
      "faceShapeCompatibility": ["Square", "Heart"],
      "description": "Delicate circular frames soften angular features while balancing wider forehead of heart shapes."
    },
    {
      "id": 22,
      "name": "Square Thick Acetate",
       "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz-a9eYV-Dpy7h7xC9p0TDhBOPo1sbE0KEuA&s",
      "price": 1599,
      "faceShapeCompatibility": ["Round", "Oval"],
      "description": "Bold angular design adds definition to soft round features while complementing balanced oval proportions."
    },
    {
      "id": 23,
      "name": "Cat-Eye Subtle",
       "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE18VzHlLWBXi4d58wRdlNusSTe5SA3VF10A&s",
      "price": 1899,
      "faceShapeCompatibility": ["Diamond", "Oblong"],
      "description": "Gentle upsweep highlights diamond cheekbones while adding width to narrow oblong faces."
    },
    {
      "id": 24,
      "name": "Oval Thin Rim",
       "image": "https://tiimg.tistatic.com/fp/1/007/291/oval-sunglasses-051.jpg",
      "price": 1499,
      "faceShapeCompatibility": ["Square", "Heart"],
      "description": "Soft curves soften angular jawlines while balancing wider forehead of heart shapes."
    },
    {
      "id": 25,
      "name": "Rectangle Flat Top",
       "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR54ghagSU3wd7eGmbqvN41xhQaBQgwucJXmA&s",
      "price": 1699,
      "faceShapeCompatibility": ["Oblong", "Diamond"],
      "description": "Horizontal lines break up facial length while complementing angular diamond features."
    },
    {
      "id": 26,
      "name": "Butterfly Bold",
       "image": "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/2025/MAY/22/rUxVVn93_55d5cf6ab88b433ea75b09cb7cb809a0.jpg",
      "price": 2099,
      "faceShapeCompatibility": ["Heart", "Oval"],
      "description": "Wide top narrows toward bottom, balancing heart proportions while flattering oval symmetry."
    },
    {
      "id": 27,
      "name": "Geometric Hexagon",
       "image": "https://img.glassesdirect.com/blog/wp-content/uploads/2024/11/Geometric-main-.jpg",
      "price": 2399,
      "faceShapeCompatibility": ["Round", "Square"],
      "description": "Angular design adds structure to soft round features while softening strong square jawlines."
    },
    {
      "id": 28,
      "name": "Teardrop Double Bridge",
       "image": "https://m.media-amazon.com/images/I/71uaCUYgPYL._UY1100_.jpg",
      "price": 1899,
      "faceShapeCompatibility": ["Oblong", "Heart"],
      "description": "Tapered design adds width to narrow oblong faces while balancing wider heart forehead."
    },
    {
      "id": 29,
      "name": "Browline Thick",
       "image": "https://img.ebdcdn.com/product/front/white/pl6177.jpg",
      "price": 1599,
      "faceShapeCompatibility": ["Oval", "Round"],
      "description": "Bold upper frame adds structure to round faces while enhancing balanced oval proportions."
    },
    {
      "id": 30,
      "name": "Shield Mirrored",
       "image": "https://m.media-amazon.com/images/I/31u8cNhGq4L._UY1100_.jpg",
      "price": 2199,
      "faceShapeCompatibility": ["Oblong", "Square"],
      "description": "Wide single lens adds width to narrow oblong faces while softening angular square features."
    },
    {
      "id": 31,
      "name": "Hexagon Metal",
       "image": "https://m.media-amazon.com/images/I/51J3OHQZ0pL._UY1100_.jpg",
      "price": 1999,
      "faceShapeCompatibility": ["Diamond", "Heart"],
      "description": "Angular design highlights diamond cheekbones while balancing wider heart forehead."
    },
    {
      "id": 32,
      "name": "Rimless Round",
       "image": "https://m.media-amazon.com/images/I/61v8cPvh9xL._UY1100_.jpg",
      "price": 1799,
      "faceShapeCompatibility": ["Oval", "Oblong"],
      "description": "Minimal design doesn't overwhelm oval proportions while adding width to narrow oblong faces."
    },
    {
      "id": 33,
      "name": "Clubmaster Modern",
       "image": "https://india.ray-ban.com/media/catalog/product/cache/048600d570cc45aff3335c8130dd2121/0/r/0rb234190131p21shadqt.png",
      "price": 1699,
      "faceShapeCompatibility": ["Round", "Square"],
      "description": "Bold upper frame adds structure to round faces while softening strong square jawlines."
    },
    {
      "id": 34,
      "name": "Wrap Polarized",
       "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvMYbKjshI0ftzcRY7zfFXPd2Ia29uHBfqiw&s",
      "price": 2099,
      "faceShapeCompatibility": ["Oblong", "Diamond"],
      "description": "Curved design adds width to narrow oblong faces while complementing angular diamond features."
    },
    {
      "id": 35,
      "name": "Keyhole Round",
       "image": "https://i.etsystatic.com/6898462/r/il/3c2526/1195304186/il_570xN.1195304186_d4kv.jpg",
      "price": 1499,
      "faceShapeCompatibility": ["Heart", "Oval"],
      "description": "Distinctive bridge detail draws attention to eyes, balancing heart shape while flattering oval symmetry."
    },
    {
      "id": 36,
      "name": "Phantos Bold",
       "image": "https://www.rkumar.in/cdn/shop/files/SL_633_CALISTA-003-cat-xl.jpg?v=1757188483",
      "price": 1899,
      "faceShapeCompatibility": ["Square", "Diamond"],
      "description": "Rounded corners soften angular features of square and diamond face shapes."
    },
    {
      "id": 37,
      "name": "Oversized Square",
       "image": "https://static.cilory.com/740970-large_default/black-oversize-square-sunglasses.jpg.webp",
      "price": 2299,
      "faceShapeCompatibility": ["Oval", "Heart"],
      "description": "Large proportions complement balanced oval features while adding width to narrower heart chin."
    },
    {
      "id": 38,
      "name": "Navigator Pilot",
       "image": "https://d3995ea24pmi7m.cloudfront.net/ft-media/catalog/product/M/2/M253GR3V_1_lar.jpg",
      "price": 1999,
      "faceShapeCompatibility": ["Oblong", "Round"],
      "description": "Wide design adds width to narrow oblong faces while adding structure to soft round features."
    },
    {
      "id": 39,
      "name": "Round Tortoise",
       "image": "https://raen.com/cdn/shop/products/100U231BAS-S990-50_800x.png?v=1722633758",
      "price": 1599,
      "faceShapeCompatibility": ["Square", "Heart"],
      "description": "Circular frames soften angular jawlines and add width to narrower chins characteristic of heart-shaped faces."
    },
    {
      "id": 40,
      "name": "Square Gradient",
       "image": "https://assets.ajio.com/medias/sys_master/root/20250331/vOR5/67ea97c055340d4b4f9fc082/-473Wx593H-469731990-gold-MODEL.jpg",
      "price": 1799,
      "faceShapeCompatibility": ["Round", "Oval"],
      "description": "Structured silhouette adds definition to round faces while enhancing the natural symmetry of oval faces."
    },
    {
      "id": 41,
      "name": "Cat-Eye Crystal",
       "image": "https://m.media-amazon.com/images/I/51Kzb0GQJ8L._UY1100_.jpg",
      "price": 2199,
      "faceShapeCompatibility": ["Heart", "Diamond"],
      "description": "Upswept corners highlight cheekbones and balance wider foreheads of heart and diamond face shapes."
    },
    {
      "id": 42,
      "name": "Oval Gold",
       "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZIFsVb1wd30TKsIAGBf1ldzJvLjrJZgNJ4Q&s",
      "price": 1999,
      "faceShapeCompatibility": ["Square", "Diamond"],
      "description": "Gentle curves soften strong jawlines and angular features of square and diamond face shapes."
    },
    {
      "id": 43,
      "name": "Rectangle Sporty",
       "image": "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/656x464/9df78eab33525d08d6e5fb8d27136e95//v/i/transparent-green-grey-full-rim-wayfarer-vincent-chase-polarized-athleisure-vc-s14459-c6-sunglasses_g_2601_9_29_22.jpg",
      "price": 1899,
      "faceShapeCompatibility": ["Oblong", "Oval"],
      "description": "Horizontal lines break up facial length of oblong faces while enhancing natural oval symmetry."
    },
    {
      "id": 44,
      "name": "Butterfly Patterned",
       "image": "https://salty.co.in/cdn/shop/files/SG0022-G-BR_White1.jpg?v=1757775109&width=1080",
      "price": 2099,
      "faceShapeCompatibility": ["Heart", "Oval"],
      "description": "Wide top narrows toward bottom, balancing wider forehead of heart shapes while flattering oval proportions."
    },
    {
      "id": 45,
      "name": "Geometric Clear",
       "image": "https://d3995ea24pmi7m.cloudfront.net/ft-media/catalog/product/P/5/P513BR4V_1_lar.jpg",
      "price": 2499,
      "faceShapeCompatibility": ["Round", "Diamond"],
      "description": "Angular design adds definition to soft round features while complementing striking diamond cheekbones."
    },
    {
      "id": 46,
      "name": "Teardrop Vintage",
       "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZEmjOkL4GQgWHhr5Kpgy1359iuh5ORc6lmw&s",
      "price": 1899,
      "faceShapeCompatibility": ["Oblong", "Heart"],
      "description": "Tapered design adds width to narrow oblong faces while balancing wider forehead of heart shapes."
    },
    {
      "id": 47,
      "name": "Browline Thin",
       "image": "https://5.imimg.com/data5/SELLER/Default/2023/9/347830281/YS/IZ/TU/198542814/main-1664152751307-500x500.jpg",
      "price": 1699,
      "faceShapeCompatibility": ["Oval", "Round"],
      "description": "Distinctive upper frame adds structure to round faces while enhancing balanced oval proportions."
    },
    {
      "id": 48,
      "name": "Shield Sport",
       "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrNEcF6DGxzavqLthXwnXKM77qvOoAy7f6XA&s",
      "price": 2199,
      "faceShapeCompatibility": ["Oblong", "Square"],
      "description": "Wide single lens adds width to narrow oblong faces while softening angular square features."
    },
    {
      "id": 49,
      "name": "Hexagon Bold",
       "image": "https://www.glassesindia.com/cdn/shop/files/Stylish-Designer-Hexagon-Black-Gold-Sunglasses-2.png?v=1708405410",
      "price": 2399,
      "faceShapeCompatibility": ["Diamond", "Heart"],
      "description": "Angular design highlights diamond cheekbones while balancing wider forehead of heart shapes."
    },
    {
      "id": 50,
      "name": "Rimless Lightweight",
       "image": "https://images.meesho.com/images/products/423345796/omvuc_512.webp?width=512",
      "price": 1899,
      "faceShapeCompatibility": ["Oval", "Oblong"],
      "description": "Minimal design doesn't overwhelm oval proportions while adding subtle width to narrow oblong faces."
    },
    {
      "id": 51,
      "name": "Clubmaster Retro",
       "image": "https://rukminim1.flixcart.com/image/600/600/xif0q/sunglass/c/7/k/l-chi00174-c1-royal-son-original-imagx4ejfq6fcawd.jpeg?q=70",
      "price": 1799,
      "faceShapeCompatibility": ["Round", "Square"],
      "description": "Bold upper frame adds structure to round faces while softening strong square jawlines."
    },
    {
      "id": 52,
      "name": "Wrap Athletic",
       "image": "https://m.media-amazon.com/images/I/613iHEkD+2L._UY1100_.jpg",
      "price": 1999,
      "faceShapeCompatibility": ["Oblong", "Diamond"],
      "description": "Curved design adds width to narrow oblong faces while complementing angular diamond features."
    },
    {
      "id": 53,
      "name": "Keyhole Vintage",
       "image": "https://i.pinimg.com/736x/5f/e4/fd/5fe4fdf7144432a7731d2bca1e2148cb.jpg",
      "price": 1599,
      "faceShapeCompatibility": ["Heart", "Oval"],
      "description": "Distinctive bridge detail draws attention to eyes, balancing heart shape while flattering oval symmetry."
    },
    {
      "id": 54,
      "name": "Phantos Soft",
       "image": "https://m.media-amazon.com/images/I/51+09SHrzxL._UY1100_.jpg",
      "price": 1899,
      "faceShapeCompatibility": ["Square", "Diamond"],
      "description": "Rounded corners soften angular features of square and diamond face shapes."
    },
    {
      "id": 55,
      "name": "Oversized Glam",
       "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFNyXjjUCASjGjA3RNNkLOfPYOrC_KKF-hbg&s",
      "price": 2499,
      "faceShapeCompatibility": ["Oval", "Heart"],
      "description": "Large proportions complement balanced oval features while adding width to narrower heart chin."
    },
    {
      "id": 56,
      "name": "Navigator Bold",
       "image": "https://m.media-amazon.com/images/I/41oY6tDD-KL._UY350_.jpg",
      "price": 2199,
      "faceShapeCompatibility": ["Oblong", "Round"],
      "description": "Wide design adds width to narrow oblong faces while adding structure to soft round features."
    },
    {
      "id": 57,
      "name": "Round Thin Metal",
       "image": "https://m.media-amazon.com/images/I/61AEZQfZ6CL._UY1100_.jpg",
      "price": 1999,
      "faceShapeCompatibility": ["Square", "Heart"],
      "description": "Delicate circular frames soften angular features while balancing wider forehead of heart shapes."
    },
    {
      "id": 58,
      "name": "Square Thick Acetate",
       "image": "https://yourspex.com/cdn/shop/files/thick_black_square_full_rim_acetate_frame_for_men_2.jpg?v=1731766784&width=1445",
      "price": 1799,
      "faceShapeCompatibility": ["Round", "Oval"],
      "description": "Bold angular design adds definition to soft round features while complementing balanced oval proportions."
    },
    {
      "id": 59,
      "name": "Cat-Eye Subtle",
       "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxMUQKyavMItnyfrevguQF4xqqaZFIn-SRAA&s",
      "price": 2099,
      "faceShapeCompatibility": ["Diamond", "Oblong"],
      "description": "Gentle upsweep highlights diamond cheekbones while adding width to narrow oblong faces."
    },
    {
      "id": 60,
      "name": "Oval Thin Rim",
       "image": "https://images-na.ssl-images-amazon.com/images/I/31ipBYHAg0L.jpg",
      "price": 1699,
      "faceShapeCompatibility": ["Square", "Heart"],
      "description": "Soft curves soften angular jawlines while balancing wider forehead of heart shapes."
    },
    /*{
      "id": 61,
      "name": "Rectangle Flat Top",
       "image": "",
      "price": 1899,
      "faceShapeCompatibility": ["Oblong", "Diamond"],
      "description": "Horizontal lines break up facial length while complementing angular diamond features."
    },
    {
      "id": 62,
      "name": "Butterfly Bold",
       "image": "",
      "price": 2299,
      "faceShapeCompatibility": ["Heart", "Oval"],
      "description": "Wide top narrows toward bottom, balancing heart proportions while flattering oval symmetry."
    },
    {
      "id": 63,
      "name": "Geometric Hexagon",
       "image": "",
      "price": 2599,
      "faceShapeCompatibility": ["Round", "Square"],
      "description": "Angular design adds structure to soft round features while softening strong square jawlines."
    },
    {
      "id": 64,
      "name": "Teardrop Double Bridge",
       "image": "",
      "price": 2099,
      "faceShapeCompatibility": ["Oblong", "Heart"],
      "description": "Tapered design adds width to narrow oblong faces while balancing wider heart forehead."
    },
    {
      "id": 65,
      "name": "Browline Thick",
       "image": "",
      "price": 1799,
      "faceShapeCompatibility": ["Oval", "Round"],
      "description": "Bold upper frame adds structure to round faces while enhancing balanced oval proportions."
    },
    {
      "id": 66,
      "name": "Shield Mirrored",
       "image": "",
      "price": 2399,
      "faceShapeCompatibility": ["Oblong", "Square"],
      "description": "Wide single lens adds width to narrow oblong faces while softening angular square features."
    },
    {
      "id": 67,
      "name": "Hexagon Metal",
       "image": "",
      "price": 2199,
      "faceShapeCompatibility": ["Diamond", "Heart"],
      "description": "Angular design highlights diamond cheekbones while balancing wider heart forehead."
    },
    {
      "id": 68,
      "name": "Rimless Round",
       "image": "",
      "price": 1999,
      "faceShapeCompatibility": ["Oval", "Oblong"],
      "description": "Minimal design doesn't overwhelm oval proportions while adding width to narrow oblong faces."
    },
    {
      "id": 69,
      "name": "Clubmaster Modern",
       "image": "",
      "price": 1899,
      "faceShapeCompatibility": ["Round", "Square"],
      "description": "Bold upper frame adds structure to round faces while softening strong square jawlines."
    },
    {
      "id": 70,
      "name": "Wrap Polarized",
       "image": "",
      "price": 2299,
      "faceShapeCompatibility": ["Oblong", "Diamond"],
      "description": "Curved design adds width to narrow oblong faces while complementing angular diamond features."
    },
    {
      "id": 71,
      "name": "Keyhole Round",
       "image": "",
      "price": 1699,
      "faceShapeCompatibility": ["Heart", "Oval"],
      "description": "Distinctive bridge detail draws attention to eyes, balancing heart shape while flattering oval symmetry."
    },
    {
      "id": 72,
      "name": "Phantos Bold",
       "image": "",
      "price": 2099,
      "faceShapeCompatibility": ["Square", "Diamond"],
      "description": "Rounded corners soften angular features of square and diamond face shapes."
    },
    {
      "id": 73,
      "name": "Oversized Square",
       "image": "",
      "price": 2499,
      "faceShapeCompatibility": ["Oval", "Heart"],
      "description": "Large proportions complement balanced oval features while adding width to narrower heart chin."
    },
    {
      "id": 74,
      "name": "Navigator Pilot",
       "image": "",
      "price": 2199,
      "faceShapeCompatibility": ["Oblong", "Round"],
      "description": "Wide design adds width to narrow oblong faces while adding structure to soft round features."
    },
    {
      "id": 75,
      "name": "Round Tortoise",
       "image": "",
      "price": 1799,
      "faceShapeCompatibility": ["Square", "Heart"],
      "description": "Circular frames soften angular jawlines and add width to narrower chins characteristic of heart-shaped faces."
    },
    {
      "id": 76,
      "name": "Square Gradient",
       "image": "",
      "price": 1999,
      "faceShapeCompatibility": ["Round", "Oval"],
      "description": "Structured silhouette adds definition to round faces while enhancing the natural symmetry of oval faces."
    },
    {
      "id": 77,
      "name": "Cat-Eye Crystal",
       "image": "",
      "price": 2399,
      "faceShapeCompatibility": ["Heart", "Diamond"],
      "description": "Upswept corners highlight cheekbones and balance wider foreheads of heart and diamond face shapes."
    },
    {
      "id": 78,
      "name": "Oval Gold",
       "image": "",
      "price": 2199,
      "faceShapeCompatibility": ["Square", "Diamond"],
      "description": "Gentle curves soften strong jawlines and angular features of square and diamond face shapes."
    },
    {
      "id": 79,
      "name": "Rectangle Sporty",
       "image": "",
      "price": 2099,
      "faceShapeCompatibility": ["Oblong", "Oval"],
      "description": "Horizontal lines break up facial length of oblong faces while enhancing natural oval symmetry."
    },
    {
      "id": 80,
      "name": "Butterfly Patterned",
       "image": "",
      "price": 2299,
      "faceShapeCompatibility": ["Heart", "Oval"],
      "description": "Wide top narrows toward bottom, balancing wider forehead of heart shapes while flattering oval proportions."
    },
    {
      "id": 81,
      "name": "Geometric Clear",
       "image": "",
      "price": 2699,
      "faceShapeCompatibility": ["Round", "Diamond"],
      "description": "Angular design adds definition to soft round features while complementing striking diamond cheekbones."
    },
    {
      "id": 82,
      "name": "Teardrop Vintage",
       "image": "",
      "price": 2099,
      "faceShapeCompatibility": ["Oblong", "Heart"],
      "description": "Tapered design adds width to narrow oblong faces while balancing wider forehead of heart shapes."
    },
    {
      "id": 83,
      "name": "Browline Thin",
       "image": "",
      "price": 1899,
      "faceShapeCompatibility": ["Oval", "Round"],
      "description": "Distinctive upper frame adds structure to round faces while enhancing balanced oval proportions."
    },
    {
      "id": 84,
      "name": "Shield Sport",
       "image": "",
      "price": 2399,
      "faceShapeCompatibility": ["Oblong", "Square"],
      "description": "Wide single lens adds width to narrow oblong faces while softening angular square features."
    },
    {
      "id": 85,
      "name": "Hexagon Bold",
       "image": "",
      "price": 2599,
      "faceShapeCompatibility": ["Diamond", "Heart"],
      "description": "Angular design highlights diamond cheekbones while balancing wider forehead of heart shapes."
    },
    {
      "id": 86,
      "name": "Rimless Lightweight",
       "image": "",
      "price": 2099,
      "faceShapeCompatibility": ["Oval", "Oblong"],
      "description": "Minimal design doesn't overwhelm oval proportions while adding subtle width to narrow oblong faces."
    },
    {
      "id": 87,
      "name": "Clubmaster Retro",
       "image": "",
      "price": 1999,
      "faceShapeCompatibility": ["Round", "Square"],
      "description": "Bold upper frame adds structure to round faces while softening strong square jawlines."
    },
    {
      "id": 88,
      "name": "Wrap Athletic",
       "image": "",
      "price": 2299,
      "faceShapeCompatibility": ["Oblong", "Diamond"],
      "description": "Curved design adds width to narrow oblong faces while complementing angular diamond features."
    },
    {
      "id": 89,
      "name": "Keyhole Vintage",
       "image": "",
      "price": 1799,
      "faceShapeCompatibility": ["Heart", "Oval"],
      "description": "Distinctive bridge detail draws attention to eyes, balancing heart shape while flattering oval symmetry."
    },
    {
      "id": 90,
      "name": "Phantos Soft",
       "image": "",
      "price": 2099,
      "faceShapeCompatibility": ["Square", "Diamond"],
      "description": "Rounded corners soften angular features of square and diamond face shapes."
    },
    {
      "id": 91,
      "name": "Oversized Glam",
       "image": "",
      "price": 2699,
      "faceShapeCompatibility": ["Oval", "Heart"],
      "description": "Large proportions complement balanced oval features while adding width to narrower heart chin."
    },
    {
      "id": 92,
      "name": "Navigator Bold",
       "image": "",
      "price": 2399,
      "faceShapeCompatibility": ["Oblong", "Round"],
      "description": "Wide design adds width to narrow oblong faces while adding structure to soft round features."
    },
    {
      "id": 93,
      "name": "Round Thin Metal",
       "image": "",
      "price": 2199,
      "faceShapeCompatibility": ["Square", "Heart"],
      "description": "Delicate circular frames soften angular features while balancing wider forehead of heart shapes."
    },
    {
      "id": 94,
      "name": "Square Thick Acetate",
       "image": "",
      "price": 1999,
      "faceShapeCompatibility": ["Round", "Oval"],
      "description": "Bold angular design adds definition to soft round features while complementing balanced oval proportions."
    },
    {
      "id": 95,
      "name": "Cat-Eye Subtle",
       "image": "",
      "price": 2299,
      "faceShapeCompatibility": ["Diamond", "Oblong"],
      "description": "Gentle upsweep highlights diamond cheekbones while adding width to narrow oblong faces."
    },
    {
      "id": 96,
      "name": "Oval Thin Rim",
       "image": "",
      "price": 1899,
      "faceShapeCompatibility": ["Square", "Heart"],
      "description": "Soft curves soften angular jawlines while balancing wider forehead of heart shapes."
    },
    {
      "id": 97,
      "name": "Rectangle Flat Top",
       "image": "",
      "price": 2099,
      "faceShapeCompatibility": ["Oblong", "Diamond"],
      "description": "Horizontal lines break up facial length while complementing angular diamond features."
    },
    {
      "id": 98,
      "name": "Butterfly Bold",
       "image": "",
      "price": 2499,
      "faceShapeCompatibility": ["Heart", "Oval"],
      "description": "Wide top narrows toward bottom, balancing heart proportions while flattering oval symmetry."
    },
    {
      "id": 99,
      "name": "Geometric Hexagon",
       "image": "",
      "price": 2799,
      "faceShapeCompatibility": ["Round", "Square"],
      "description": "Angular design adds structure to soft round features while softening strong square jawlines."
    },
    {
      "id": 100,
      "name": "Teardrop Double Bridge",
       "image": "",
      "price": 2299,
      "faceShapeCompatibility": ["Oblong", "Heart"],
      "description": "Tapered design adds width to narrow oblong faces while balancing wider heart forehead."
    },
    {
      "id": 101,
      "name": "Browline Thick",
       "image": "",
      "price": 1999,
      "faceShapeCompatibility": ["Oval", "Round"],
      "description": "Bold upper frame adds structure to round faces while enhancing balanced oval proportions."
    },
    {
      "id": 102,
      "name": "Shield Mirrored",
       "image": "",
      "price": 2599,
      "faceShapeCompatibility": ["Oblong", "Square"],
      "description": "Wide single lens adds width to narrow oblong faces while softening angular square features."
    },
    {
      "id": 103,
      "name": "Hexagon Metal",
       "image": "",
      "price": 2399,
      "faceShapeCompatibility": ["Diamond", "Heart"],
      "description": "Angular design highlights diamond cheekbones while balancing wider heart forehead."
    },
    {
      "id": 104,
      "name": "Rimless Round",
       "image": "",
      "price": 2199,
      "faceShapeCompatibility": ["Oval", "Oblong"],
      "description": "Minimal design doesn't overwhelm oval proportions while adding width to narrow oblong faces."
    },
    {
      "id": 105,
      "name": "Clubmaster Modern",
       "image": "",
      "price": 2099,
      "faceShapeCompatibility": ["Round", "Square"],
      "description": "Bold upper frame adds structure to round faces while softening strong square jawlines."
    },
    {
      "id": 106,
      "name": "Wrap Polarized",
       "image": "",
      "price": 2499,
      "faceShapeCompatibility": ["Oblong", "Diamond"],
      "description": "Curved design adds width to narrow oblong faces while complementing angular diamond features."
    },
    {
      "id": 107,
      "name": "Keyhole Round",
       "image": "",
      "price": 1899,
      "faceShapeCompatibility": ["Heart", "Oval"],
      "description": "Distinctive bridge detail draws attention to eyes, balancing heart shape while flattering oval symmetry."
    },
    {
      "id": 108,
      "name": "Phantos Bold",
       "image": "",
      "price": 2299,
      "faceShapeCompatibility": ["Square", "Diamond"],
      "description": "Rounded corners soften angular features of square and diamond face shapes."
    },
    {
      "id": 109,
      "name": "Oversized Square",
       "image": "",
      "price": 2699,
      "faceShapeCompatibility": ["Oval", "Heart"],
      "description": "Large proportions complement balanced oval features while adding width to narrower heart chin."
    },
    {
      "id": 110,
      "name": "Navigator Pilot",
       "image": "",
      "price": 2399,
      "faceShapeCompatibility": ["Oblong", "Round"],
      "description": "Wide design adds width to narrow oblong faces while adding structure to soft round features."
    },
    {
      "id": 111,
      "name": "Round Tortoise",
       "image": "",
      "price": 1999,
      "faceShapeCompatibility": ["Square", "Heart"],
      "description": "Circular frames soften angular jawlines and add width to narrower chins characteristic of heart-shaped faces."
    },
    {
      "id": 112,
      "name": "Square Gradient",
       "image": "",
      "price": 2199,
      "faceShapeCompatibility": ["Round", "Oval"],
      "description": "Structured silhouette adds definition to round faces while enhancing the natural symmetry of oval faces."
    },
    {
      "id": 113,
      "name": "Cat-Eye Crystal",
       "image": "",
      "price": 2599,
      "faceShapeCompatibility": ["Heart", "Diamond"],
      "description": "Upswept corners highlight cheekbones and balance wider foreheads of heart and diamond face shapes."
    },
    {
      "id": 114,
      "name": "Oval Gold",
       "image": "",
      "price": 2399,
      "faceShapeCompatibility": ["Square", "Diamond"],
      "description": "Gentle curves soften strong jawlines and angular features of square and diamond face shapes."
    },
    {
      "id": 115,
      "name": "Rectangle Sporty",
       "image": "",
      "price": 2299,
      "faceShapeCompatibility": ["Oblong", "Oval"],
      "description": "Horizontal lines break up facial length of oblong faces while enhancing natural oval symmetry."
    },
    {
      "id": 116,
      "name": "Butterfly Patterned",
       "image": "",
      "price": 2499,
      "faceShapeCompatibility": ["Heart", "Oval"],
      "description": "Wide top narrows toward bottom, balancing wider forehead of heart shapes while flattering oval proportions."
    },
    {
      "id": 117,
      "name": "Geometric Clear",
       "image": "",
      "price": 2899,
      "faceShapeCompatibility": ["Round", "Diamond"],
      "description": "Angular design adds definition to soft round features while complementing striking diamond cheekbones."
    },
    {
      "id": 118,
      "name": "Teardrop Vintage",
       "image": "",
      "price": 2299,
      "faceShapeCompatibility": ["Oblong", "Heart"],
      "description": "Tapered design adds width to narrow oblong faces while balancing wider forehead of heart shapes."
    },
    {
      "id": 119,
      "name": "Browline Thin",
       "image": "",
      "price": 2099,
      "faceShapeCompatibility": ["Oval", "Round"],
      "description": "Distinctive upper frame adds structure to round faces while enhancing balanced oval proportions."
    },
    {
      "id": 120,
      "name": "Shield Sport",
       "image": "",
      "price": 2599,
      "faceShapeCompatibility": ["Oblong", "Square"],
      "description": "Wide single lens adds width to narrow oblong faces while softening angular square features."
    }*/
  ],

Footwear : [
  {
    "id": 1,
    "name": "Black Oxford Shoes",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1m975VONZLR0QoYiziwekcFPCwfadJ25xWA&s",
    "price": 3999,
    "category": "Formal",
    "skinToneCompatibility": ["Fair", "Dark", "Neutral"],
    "description": "Classic black oxfords create versatile contrast against both fair and dark skin tones."
  },
  {
    "id": 2,
    "name": "Brown Derby Shoes",
    "image": "https://www.escaro.in/cdn/shop/files/1009221662818742-5_thump.jpg?v=1756397214&width=2048",
    "price": 3499,
    "category": "Formal",
    "skinToneCompatibility": ["Medium", "Olive", "Warm"],
    "description": "Rich brown leather enhances warm undertones in medium and olive skin tones."
  },
  {
    "id": 3,
    "name": "Burgundy Loafers",
    "image": "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/2025/SEPTEMBER/11/6qN9dVbG_d51814fb4dec44f6b15b3fee3aabf789.jpg",
    "price": 4299,
    "category": "Formal",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Deep burgundy adds warmth to fair complexions and complements cool undertones."
  },
  {
    "id": 4,
    "name": "Tan Monk Straps",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9-qdRqVRab0pIPzUKO7nYzAEME4KjjfbBhg&s",
    "price": 4999,
    "category": "Formal",
    "skinToneCompatibility": ["Warm", "Medium", "Olive"],
    "description": "Warm tan tones enhance medium and olive skin tones for sophisticated formal wear."
  },
  {
    "id": 5,
    "name": "Black Chelsea Boots",
    "image": "https://rukminim2.flixcart.com/image/368/490/xif0q/shoe/5/y/p/-original-imahf8h3tfcdzmz2.jpeg?q=90&crop=false",
    "price": 4599,
    "category": "Formal",
    "skinToneCompatibility": ["Fair", "Dark", "Neutral"],
    "description": "Sleek black leather creates elegant contrast against both fair and dark skin tones."
  },
  {
    "id": 6,
    "name": "Oxford Brogues",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgbvFsUff9qJR7-Z-0tx3QclUkEVul3aj3bg&s",
    "price": 3799,
    "category": "Formal",
    "skinToneCompatibility": ["Fair", "Cool", "Olive"],
    "description": "Classic broguing brightens fair skin and harmonizes with cool and olive undertones."
  },
  {
    "id": 7,
    "name": "Cordovan Dress Shoes",
    "image": "https://www.casafagliano.com/wp-content/uploads/2021/05/Cordovan-Ankle-boots-2-scaled.jpg",
    "price": 7999,
    "category": "Formal",
    "skinToneCompatibility": ["Medium", "Dark", "Warm"],
    "description": "Rich cordovan leather enhances deeper skin tones with warm undertones."
  },
  {
    "id": 8,
    "name": "White Leather Shoes",
    "image": "https://costosoitaliano.com/cdn/shop/files/FinalLook_1024x1024@2x.png?v=1736591051",
    "price": 4499,
    "category": "Formal",
    "skinToneCompatibility": ["Medium", "Dark", "Olive", "Warm"],
    "description": "Crisp white creates striking contrast against deeper skin tones and warm undertones."
  },
  {
    "id": 9,
    "name": "Navy Blue Loafers",
    "image": "https://www.theroyalepeacock.com/cdn/shop/files/TheRoyalePeacockNavyBlueLeatherSuedePennyLoaferShoesforMen.jpg?v=1695538888",
    "price": 3999,
    "category": "Formal",
    "skinToneCompatibility": ["Fair", "Cool", "Olive"],
    "description": "Cool navy brightens fair skin and harmonizes with cool and olive undertones."
  },
  {
    "id": 10,
    "name": "Suede Tassel Loafers",
    "image": "https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/22768764/2023/4/14/1d3488c1-e7fd-480e-8bf1-cdebb367ca631681463415206TEAKWOODLEATHERMENSOLIDBROWNROUND-TOETASSELEDLOAFER1.jpg",
    "price": 4699,
    "category": "Formal",
    "skinToneCompatibility": ["Warm", "Medium", "Olive"],
    "description": "Textured suede enhances warm undertones in medium and olive skin tones."
  },
  {
    "id": 11,
    "name": "Black Patent Leather",
    "image": "https://alonzoshoes.in/cdn/shop/files/DSC_1211-PhotoRoom.jpg?v=1700850126&width=1445",
    "price": 4299,
    "category": "Formal",
    "skinToneCompatibility": ["Fair", "Dark", "Neutral"],
    "description": "Glossy patent creates sophisticated contrast against fair and dark skin tones."
  },
  {
    "id": 12,
    "name": "Walnut Wingtips",
    "image": "https://img.gem.app/1510552323/1t/1742613610/allen-edmonds-mcallister-wingtip-walnut-8-5d.jpg",
    "price": 3899,
    "category": "Formal",
    "skinToneCompatibility": ["Warm", "Medium", "Olive"],
    "description": "Rich walnut tones enhance warm undertones in medium and olive skin."
  },
  {
    "id": 13,
    "name": "Grey Formal Shoes",
    "image": "https://fausto.in/cdn/shop/products/FST_KI-9990_GREY_1-3_MOOD_78bf7791-848f-4e2f-bb16-e248a1c8301f_400x.jpg?v=1679583469",
    "price": 3599,
    "category": "Formal",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Sophisticated grey complements fair skin and cool undertones."
  },
  {
    "id": 14,
    "name": "Chestnut Dress Boots",
    "image": "https://www.amberjack.shop/cdn/shop/files/Boot_Chestnut_Diagonal.webp?v=1748017192&width=1500",
    "price": 4999,
    "category": "Formal",
    "skinToneCompatibility": ["Warm", "Medium", "Olive"],
    "description": "Warm chestnut enhances medium and olive skin tones for formal occasions."
  },
  {
    "id": 15,
    "name": "Two-Tone Spectators",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrewsH8iYba71byw_FwKvavQ96j9e0nEIshA&s",
    "price": 5499,
    "category": "Formal",
    "skinToneCompatibility": ["Medium", "Neutral", "Olive"],
    "description": "Classic two-tone design complements medium and olive skin tones."
  },
  {
    "id": 16,
    "name": "Brown Leather Loafers",
    "image": "https://rukminim2.flixcart.com/image/480/640/xif0q/shoe/h/j/r/-original-imah4ez4cu5xremn.jpeg?q=90",
    "price": 3299,
    "category": "Informal",
    "skinToneCompatibility": ["Medium", "Olive", "Warm"],
    "description": "Classic brown leather enhances warm undertones in medium and olive skin."
  },
  {
    "id": 17,
    "name": "Suede Chukka Boots",
    "image": "https://aramishshoes.com/wp-content/uploads/2024/03/1-600x600.jpg",
    "price": 3799,
    "category": "Informal",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Soft suede complements fair skin and cool undertones for smart casual wear."
  },
  {
    "id": 18,
    "name": "Tassel Loafers",
    "image": "https://5.imimg.com/data5/TD/BR/KV/SELLER-3219400/leather-tassel-loafers-shoes-500x500.jpg",
    "price": 3599,
    "category": "Informal",
    "skinToneCompatibility": ["Warm", "Medium", "Olive"],
    "description": "Classic tassel loafers enhance warm undertones in medium and olive skin."
  },
  {
    "id": 19,
    "name": "Black Leather Boots",
    "image": "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/13284064/2022/11/12/1651f155-d2d0-43bb-af72-754b9f38ddfc1668256722003-Delize-Women-Black-Flat-Boots-7891668256721487-1.jpg",
    "price": 4299,
    "category": "Informal",
    "skinToneCompatibility": ["Fair", "Dark", "Neutral"],
    "description": "Versatile black creates contrast against both fair and dark skin tones."
  },
  {
    "id": 20,
    "name": "Penny Loafers",
    "image": "https://www.montecarlo.in/cdn/shop/products/201819FW-1-7_9.jpg?v=1721213985",
    "price": 2999,
    "category": "Informal",
    "skinToneCompatibility": ["Fair", "Cool", "Olive"],
    "description": "Classic penny loafers brighten fair skin and complement olive undertones."
  },
  {
    "id": 21,
    "name": "Desert Boots",
    "image": "https://cdn.military.eu/en/media/catalog/product/3/0/305127_Buty-Mil-Tec-US-Desert-Boots-Khaki-12823000-2.jpg?width=800&height=640&store=military_en&image-type=image",
    "price": 3399,
    "category": "Informal",
    "skinToneCompatibility": ["Warm", "Medium", "Olive"],
    "description": "Suede desert boots enhance warm undertones in medium and olive skin."
  },
  {
    "id": 22,
    "name": "Brogue Shoes",
    "image": "https://i.pinimg.com/564x/1c/f1/5c/1cf15c8babcf795e49d7e4f8feb6301c.jpg",
    "price": 3199,
    "category": "Informal",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Classic broguing brightens fair skin and complements cool undertones."
  },
  {
    "id": 23,
    "name": "Chelsea Boots",
    "image": "https://m.media-amazon.com/images/I/814jq4EdzgL._UY1000_.jpg",
    "price": 3899,
    "category": "Informal",
    "skinToneCompatibility": ["Fair", "Dark", "Neutral"],
    "description": "Sleek Chelsea boots create contrast against both fair and dark skin tones."
  },
  {
    "id": 24,
    "name": "Monk Strap Shoes",
    "image": "https://costosoitaliano.com/cdn/shop/files/sceinteis_Black_Leather_Monk_Strap_Shoes_76b51da6-4cbd-454d-85ab-3d833c56a7f9_1200x1200.png?v=1736591401",
    "price": 4199,
    "category": "Informal",
    "skinToneCompatibility": ["Medium", "Olive", "Warm"],
    "description": "Distinctive monk straps enhance warm undertones in medium and olive skin."
  },
  {
    "id": 25,
    "name": "Driving Moccasins",
    "image": "https://fausto.in/cdn/shop/products/FST_FOSMC-2029_TAN_1-1_MOOD_1080x.jpg?v=1679578473",
    "price": 2799,
    "category": "Informal",
    "skinToneCompatibility": ["Warm", "Medium", "Olive"],
    "description": "Soft leather moccasins enhance warm undertones in medium and olive skin."
  },
  {
    "id": 26,
    "name": "Suede Bucks",
    "image": "https://www.countryclubprep.com/cdn/shop/products/spencer-white-nubuc-oxford-2_16.jpg?v=1645654957&width=864",
    "price": 3099,
    "category": "Informal",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Light suede brightens fair skin and complements cool undertones."
  },
  {
    "id": 27,
    "name": "Blucher Shoes",
    "image": "https://assets.manufactum.de/p/023/023409/23409_01.jpg/mens-blucher.jpg",
    "price": 3499,
    "category": "Informal",
    "skinToneCompatibility": ["Medium", "Olive", "Warm"],
    "description": "Classic bluchers enhance warm undertones in medium and olive skin."
  },
  {
    "id": 28,
    "name": "Leather Boots",
    "image": "https://craftandglory.in/cdn/shop/products/DSC00617_1.jpg?v=1745994646&width=1946",
    "price": 3999,
    "category": "Informal",
    "skinToneCompatibility": ["Fair", "Dark", "Neutral"],
    "description": "Versatile leather boots create contrast against fair and dark skin tones."
  },
  {
    "id": 29,
    "name": "Two-Tone Shoes",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6C1U10iAoIicbTemAptlksHe_76Er-HxfOQ&s",
    "price": 3699,
    "category": "Informal",
    "skinToneCompatibility": ["Medium", "Neutral", "Olive"],
    "description": "Versatile two-tone design complements medium and olive skin tones."
  },
  {
    "id": 30,
    "name": "Saddle Shoes",
    "image": "https://cdn11.bigcommerce.com/s-jjm7kgkrrc/images/stencil/1280x1280/products/78602/6829877/16767__79729.1714817145.jpg?c=1",
    "price": 3299,
    "category": "Informal",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Classic saddle shoes brighten fair skin and complement cool undertones."
  },
  {
    "id": 31,
    "name": "White Sneakers",
    "image": "https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/18458460/2022/5/28/c28d223f-6a82-46be-8922-6a21172bd2841653714541319AfroJackWomenWhiteSneakers1.jpg",
    "price": 2499,
    "category": "Casual",
    "skinToneCompatibility": ["Medium", "Dark", "Olive", "Warm"],
    "description": "Clean white creates striking contrast against deeper skin tones and warm undertones."
  },
  {
    "id": 32,
    "name": "Black Sneakers",
    "image": "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/29553912/2024/5/17/5f90bc0f-c248-4bff-8a88-54128a77c4a61715927218769HRXbyHrithikRoshanUnisexTexturedSneakers1.jpg",
    "price": 2799,
    "category": "Casual",
    "skinToneCompatibility": ["Fair", "Dark", "Neutral"],
    "description": "Versatile black creates contrast against both fair and dark skin tones."
  },
  {
    "id": 33,
    "name": "Brown Sandals",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1HNdulR1uyXjM7mH_ICZFUiYvZOMcsps8Rg&s",
    "price": 1599,
    "category": "Casual",
    "skinToneCompatibility": ["Medium", "Olive", "Warm"],
    "description": "Natural brown enhances warm undertones in medium and olive skin tones."
  },
  {
    "id": 34,
    "name": "Navy Blue Sneakers",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsaS6jR0PTqndv1HHRqo7E5_zmsXCQDtzo-A&s",
    "price": 2999,
    "category": "Casual",
    "skinToneCompatibility": ["Fair", "Cool", "Olive"],
    "description": "Cool navy brightens fair skin and harmonizes with cool and olive undertones."
  },
  {
    "id": 35,
    "name": "Canvas Shoes",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi0nQs4nYz_bf8unqPLc0ww9vSzMULrrHYRw&s",
    "price": 1999,
    "category": "Casual",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Light canvas complements fair skin and cool undertones for casual wear."
  },
  {
    "id": 36,
    "name": "Leather Sandals",
    "image": "https://teakwoodleathers.com/cdn/shop/files/T_SH_SR_02_TN_1080x.jpg?v=1750933426",
    "price": 2299,
    "category": "Casual",
    "skinToneCompatibility": ["Warm", "Medium", "Olive"],
    "description": "Natural leather enhances warm undertones in medium and olive skin."
  },
  {
    "id": 37,
    "name": "Running Shoes",
    "image": "https://www.skechers.in/on/demandware.static/-/Sites-skechers_india/default/dw6c0f5cc8/images/large/196311233128-1.jpg",
    "price": 3999,
    "category": "Casual",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Athletic design brightens fair skin and complements cool undertones."
  },
  {
    "id": 38,
    "name": "Slip-On Shoes",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp26_CK-LVSxbRdwKl7pWeC--Cm6eUb-M_mg&s",
    "price": 1799,
    "category": "Casual",
    "skinToneCompatibility": ["Warm", "Medium", "Olive"],
    "description": "Easy slip-ons enhance warm undertones in medium and olive skin."
  },
  {
    "id": 39,
    "name": "Grey Sneakers",
    "image": "https://baccabucci.com/cdn/shop/products/MG_5188_8cf3a1e4-51d3-41b9-a47a-bfdcb3962f02.jpg?v=1635929345",
    "price": 2699,
    "category": "Casual",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Neutral grey complements fair skin and cool undertones."
  },
  {
    "id": 40,
    "name": "Boat Shoes",
    "image": "https://dsb5btxtdmlo9.cloudfront.net/media/catalog/product/cache/e6f5e40aa2a6fa7f0521f9f1436021c2/w/e/web_-_deck_lady_ii_g2_blue_pair_1.jpg",
    "price": 2499,
    "category": "Casual",
    "skinToneCompatibility": ["Fair", "Cool", "Olive"],
    "description": "Classic boat shoes brighten fair skin and complement olive undertones."
  },
  {
    "id": 41,
    "name": "Espadrilles",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThaGvGv-7iQWC9qnxfNfRpt3OtETuLFWZNUQ&s",
    "price": 1899,
    "category": "Casual",
    "skinToneCompatibility": ["Warm", "Medium", "Olive"],
    "description": "Natural fibers enhance warm undertones in medium and olive skin."
  },
  {
    "id": 42,
    "name": "High-Top Sneakers",
    "image": "https://baccabucci.com/cdn/shop/files/MG_9335.jpg?v=1721638085",
    "price": 3299,
    "category": "Casual",
    "skinToneCompatibility": ["Fair", "Dark", "Neutral"],
    "description": "Bold high-tops create contrast against both fair and dark skin tones."
  },
  {
    "id": 43,
    "name": "Slide Sandals",
    "image": "https://images-cdn.ubuy.co.in/64e3548871317c25f6084c1b-alpine-swiss-mens-memory-foam-slide.jpg",
    "price": 1299,
    "category": "Casual",
    "skinToneCompatibility": ["Dark", "Warm", "Neutral"],
    "description": "Simple slides balance darker skin tones and enhance warm undertones."
  },
  {
    "id": 44,
    "name": "Mesh Sneakers",
    "image": "https://images-cdn.ubuy.co.in/672cb094047bc506e33e1b47-bruno-marc-men-39-s-knitflex-breeze.jpg",
    "price": 2799,
    "category": "Casual",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Breathable mesh brightens fair skin and complements cool undertones."
  },
  {
    "id": 45,
    "name": "Hiking Sandals",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHROTEuqj6WMmclgbpHtrCOQZqDaQaFuU42A&s",
    "price": 2199,
    "category": "Casual",
    "skinToneCompatibility": ["Warm", "Medium", "Olive"],
    "description": "Outdoor sandals enhance warm undertones in medium and olive skin."
  },
  {
    "id": 46,
    "name": "Leather Chappals",
    "image": "https://apisap.fabindia.com/medias/20170301-01.jpg?context=bWFzdGVyfGltYWdlc3wxMzc4ODN8aW1hZ2UvanBlZ3xhR1pqTDJnd01pOHpOREk0TnpJeE9UZ3pORGt4TUM4eU1ERTNNRE13TVY4d01TNXFjR2N8OTMyZDc3ZmQ0MTBmMTcxOWU5OTE4NDRkZDJhYWM2NmEyNjcxNTE0OTllY2ViMzJkMzNiNjQxZDI4NzU1OWVhMA&aio=w-768",
    "price": 999,
    "category": "Traditional",
    "skinToneCompatibility": ["Medium", "Olive", "Warm"],
    "description": "Traditional leather chappals enhance warm undertones in medium and olive skin."
  },
  {
    "id": 47,
    "name": "Kolhapuri Chappals",
    "image": "https://www.korakari.com/cdn/shop/files/Men_3.png?v=1723711786&width=700",
    "price": 1499,
    "category": "Traditional",
    "skinToneCompatibility": ["Warm", "Medium", "Olive"],
    "description": "Handcrafted Kolhapuris enhance warm undertones in medium and olive skin."
  },
  {
    "id": 48,
    "name": "Mojaris",
    "image": "https://m.media-amazon.com/images/I/81MGwUrw+gL._UY1000_.jpg",
    "price": 1999,
    "category": "Traditional",
    "skinToneCompatibility": ["Warm", "Medium", "Olive"],
    "description": "Embroidered mojaris enhance warm undertones in medium and olive skin."
  },
  {
    "id": 49,
    "name": "Jutti",
    "image": "https://www.kraftojodhpur.com/cdn/shop/products/81xXBFQNFhL._UL1500.jpg?v=1658490723",
    "price": 1799,
    "category": "Traditional",
    "skinToneCompatibility": ["Warm", "Medium", "Olive"],
    "description": "Traditional juttis enhance warm undertones in medium and olive skin."
  },
  {
    "id": 50,
    "name": "Peshawari Chappals",
    "image": "https://i.etsystatic.com/26022846/r/il/84a3ae/4935460581/il_570xN.4935460581_fiok.jpg",
    "price": 1699,
    "category": "Traditional",
    "skinToneCompatibility": ["Warm", "Medium", "Olive"],
    "description": "Classic Peshawaris enhance warm undertones in medium and olive skin."
  },
  {
    "id": 51,
    "name": "Rajasthani Mojari",
    "image": "https://www.kraftojodhpur.com/cdn/shop/files/Photoroom-20241112-140000_5.png?v=1744281761",
    "price": 2299,
    "category": "Traditional",
    "skinToneCompatibility": ["Warm", "Medium", "Olive"],
    "description": "Colorful Rajasthani mojaris enhance warm undertones in medium and olive skin."
  },
  {
    "id": 52,
    "name": "Leather Paduka",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHAG2M0F_frX82fyDAqzB-o3Sla37ARCAL_A&s",
    "price": 2499,
    "category": "Traditional",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Traditional padukas brighten fair skin and complement cool undertones."
  },
  {
    "id": 53,
    "name": "Wooden Khadau",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1ZpfKvR1If1VRS2Xw_OuDpREMtppsdpnQ7Q&s",
    "price": 1899,
    "category": "Traditional",
    "skinToneCompatibility": ["Warm", "Medium", "Olive"],
    "description": "Wooden khadau enhance warm undertones in medium and olive skin."
  },
  {
    "id": 54,
    "name": "Embroidered Jutti",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE4amGd3C2LuntXu6maaLgyMC_T80AWjFOfA&s",
    "price": 2599,
    "category": "Traditional",
    "skinToneCompatibility": ["Warm", "Medium", "Olive"],
    "description": "Intricate embroidery enhances warm undertones in medium and olive skin."
  },
  {
    "id": 55,
    "name": "Beaded Mojaris",
    "image": "https://m.media-amazon.com/images/I/51VMcKLKvDL._UY1000_.jpg",
    "price": 2799,
    "category": "Traditional",
    "skinToneCompatibility": ["Warm", "Medium", "Olive"],
    "description": "Beaded mojaris enhance warm undertones in medium and olive skin."
  },
  {
    "id": 56,
    "name": "Velvet Chappals",
    "image": "https://www.voganow.com/cdn/shop/files/VNGFS-476-03.jpg?v=1754550971",
    "price": 2199,
    "category": "Traditional",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Luxurious velvet brightens fair skin and complements cool undertones."
  },
  {
    "id": 57,
    "name": "Silk Jutti",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzIToDH3D5DpHhc1fv6Vg9oLgYBKPkf9SRNg&s",
    "price": 2399,
    "category": "Traditional",
    "skinToneCompatibility": ["Warm", "Medium", "Olive"],
    "description": "Silk juttis enhance warm undertones in medium and olive skin."
  },
  {
    "id": 58,
    "name": "Golden Mojari",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS3I9CZA0MbfobX5D1CmnKh5tZASyPv6wwpw&s",
    "price": 2999,
    "category": "Traditional",
    "skinToneCompatibility": ["Warm", "Medium", "Olive"],
    "description": "Golden mojaris enhance warm undertones in medium and olive skin."
  },
  {
    "id": 59,
    "name": "Silver Jutti",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkxznDuIAuYuF_J1dhOJufA1yDAGGfEobh1Q&s",
    "price": 2899,
    "category": "Traditional",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Silver juttis brighten fair skin and complement cool undertones."
  },
  {
    "id": 60,
    "name": "Leather Nagra",
    "image": "https://5.imimg.com/data5/SELLER/Default/2022/1/HG/HO/JS/2609366/whatsapp-image-2022-01-23-at-5-18-22-pm-1--500x500.jpeg",
    "price": 1999,
    "category": "Traditional",
    "skinToneCompatibility": ["Warm", "Medium", "Olive"],
    "description": "Traditional nagras enhance warm undertones in medium and olive skin."
  }
],
Hairstyle : [
  {
    "id": 1,
    "name": "Classic Undercut",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSctiMERU-IhBqhedqp6tMWLsZSdBj9JkrQGg&s",
    "category": "Short",
    "faceShapeCompatibility": ["Round", "Square"],
    "description": "The undercut adds sharpness to round faces and enhances the strong jawline of square faces."
  },
  {
    "id": 2,
    "name": "Textured Crop",
    "image": "https://i.pinimg.com/736x/e1/e2/3c/e1e23cfa72b1dc6e30039fe4eff878d9.jpg",
    "category": "Short",
    "faceShapeCompatibility": ["Oval", "Diamond"],
    "description": "The textured crop adds volume on top, complementing the balanced proportions of oval and diamond faces."
  },
  {
    "id": 3,
    "name": "Buzz Cut",
    "image": "https://i.pinimg.com/474x/7e/60/11/7e6011080322f5b721c8fc2a04cb8529.jpg",
    "category": "Short",
    "faceShapeCompatibility": ["Square", "Oblong"],
    "description": "The buzz cut emphasizes strong facial features, perfect for square faces and reducing length of oblong faces."
  },
  {
    "id": 4,
    "name": "Crew Cut",
    "image": "https://cdn.shopify.com/s/files/1/0899/2676/2789/files/Crew_Cut_with_Tapered_Sides.jpg?v=1741899163",
    "category": "Short",
    "faceShapeCompatibility": ["Round", "Heart"],
    "description": "The crew cut adds structure to round faces and balances the wider forehead of heart-shaped faces."
  },
  {
    "id": 5,
    "name": "Ivy League",
    "image": "https://cdn.shopify.com/s/files/1/0639/1237/8602/files/Medium_Length_Ivy_League_Haircuts_2_480x480.webp?v=1749292259",
    "category": "Short",
    "faceShapeCompatibility": ["Oval", "Diamond"],
    "description": "The Ivy League's neat appearance complements the balanced proportions of oval and diamond faces."
  },
  {
    "id": 6,
    "name": "French Crop",
    "image": "https://cdn.shopify.com/s/files/1/0641/2831/9725/files/Textured_French_crop.webp?v=1749782689",
    "category": "Short",
    "faceShapeCompatibility": ["Round", "Oblong"],
    "description": "The French crop adds height to round faces and breaks up the length of oblong faces."
  },
  {
    "id": 7,
    "name": "Side Part",
    "image": "https://cdn.shopify.com/s/files/1/0899/2676/2789/files/Classic_Side_Part.jpg?v=1735326797",
    "category": "Medium",
    "faceShapeCompatibility": ["Oval", "Square"],
    "description": "The side part adds sophistication to oval faces and softens the angular features of square faces."
  },
  {
    "id": 8,
    "name": "Quiff",
    "image": "https://cdn.shopify.com/s/files/1/0029/0868/4397/files/Classic-Quiff.webp?v=1755807445",
    "category": "Medium",
    "faceShapeCompatibility": "Heart",
    "description": "The quiff draws attention upward, balancing the wider forehead and narrower chin of heart-shaped faces."
  },
  {
    "id": 9,
    "name": "Slick Back",
    "image": "https://cdn.shopify.com/s/files/1/0255/2417/4922/files/a_guy_with_a_tapered_slick_back_haircut_1.jpg?v=1727779477",
    "category": "Medium",
    "faceShapeCompatibility": ["Oval", "Diamond"],
    "description": "The slick back highlights the balanced proportions of oval faces and the striking cheekbones of diamond faces."
  },
  {
    "id": 10,
    "name": "Caesar Cut",
    "image": "https://i.pinimg.com/736x/3d/1c/e8/3d1ce82ccc67bbc1537cf0470616a4f2.jpg",
    "category": "Medium",
    "faceShapeCompatibility": ["Round", "Oblong"],
    "description": "The Caesar cut adds structure to round faces and reduces the appearance of length in oblong faces."
  },
  {
    "id": 11,
    "name": "Messy Fringe",
    "image": "https://content.latest-hairstyles.com/wp-content/uploads/drop-low-fade-with-textured-wavy-bangs-for-dudes.jpg",
    "category": "Medium",
    "faceShapeCompatibility": ["Heart", "Diamond"],
    "description": "The messy fringe softens the forehead of heart-shaped faces and balances the narrow chin of diamond faces."
  },
  {
    "id": 12,
    "name": "Side Swept",
    "image": "https://i.pinimg.com/564x/60/7f/33/607f332377914675225fc9f353ed401e.jpg",
    "category": "Medium",
    "faceShapeCompatibility": ["Square", "Oval"],
    "description": "The side-swept style softens angular features of square faces and complements balanced oval proportions."
  },
  {
    "id": 13,
    "name": "Man Bun",
    "image": "https://www.birchbox.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fbirchbox%2FNWM4NmZmZjUtNDg1ZC00MDBhLTgxMjktOGZlNzE2MjI1OTA1_m_mar_besthairstyles2016_manbun_700x400.jpg%3Fauto%3Dcompress%2Cformat%26rect%3D0%2C0%2C700%2C400%26w%3D1680%26h%3D960&w=3840&q=75",
    "category": "Long",
    "faceShapeCompatibility": ["Oval", "Square"],
    "description": "The man bun adds length to square faces and enhances the balanced proportions of oval faces."
  },
  {
    "id": 14,
    "name": "Top Knot",
    "image": "https://i.pinimg.com/564x/07/8e/35/078e35113e67837affb5f5ce17f9a6d1.jpg",
    "category": "Long",
    "faceShapeCompatibility": ["Heart", "Diamond"],
    "description": "The top knot draws attention upward, balancing the wider forehead of heart-shaped faces and highlighting diamond cheekbones."
  },
  {
    "id": 15,
    "name": "Long Wavy",
    "image": "https://www.thefashionisto.com/wp-content/uploads/2024/10/Long-Wavy-Hair-Men.jpg",
    "category": "Long",
    "faceShapeCompatibility": ["Oval", "Diamond"],
    "description": "Long wavy hair adds softness to diamond faces and complements the balanced proportions of oval faces."
  },
  {
    "id": 16,
    "name": "Ponytail",
    "image": "https://i0.wp.com/therighthairstyles.com/wp-content/uploads/2024/11/man-ponytail-featured.jpg?fit=1280%2C720&ssl=1",
    "category": "Long",
    "faceShapeCompatibility": ["Square", "Oblong"],
    "description": "The ponytail softens angular features of square faces and adds width to narrow oblong faces."
  },
  {
    "id": 17,
    "name": "Braids",
    "image": "https://i0.wp.com/therighthairstyles.com/wp-content/uploads/2025/04/1-straight-back-cornrow-braids-for-men.jpg?resize=884%2C918&ssl=1",
    "category": "Long",
    "faceShapeCompatibility": ["Round", "Heart"],
    "description": "Braids add structure to round faces and draw attention away from the wider forehead of heart-shaped faces."
  },
  {
    "id": 18,
    "name": "Dreadlocks",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCVLqBZyh0t3SgpQJpWuMrHUFnI-6VT-G2uA&s",
    "category": "Long",
    "faceShapeCompatibility": ["Oval", "Diamond"],
    "description": "Dreadlocks add volume and texture, complementing the balanced proportions of oval and diamond faces."
  },
  {
    "id": 19,
    "name": "Low Fade",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD8v4AaJRemnZBObijTgODnUksp-pn-ZWZyA&s",
    "category": "Fade",
    "faceShapeCompatibility": ["Oval", "Round"],
    "description": "The low fade adds definition to oval faces and creates a slimming effect for round faces."
  },
  {
    "id": 20,
    "name": "High Fade",
    "image": "https://fadehaircut.co.uk/wp-content/uploads/2025/05/high-taper-fade-haircut-1.jpg",
    "category": "Fade",
    "faceShapeCompatibility": ["Square", "Heart"],
    "description": "The high fade emphasizes the jawline of square faces and balances the proportions of heart-shaped faces."
  },
  {
    "id": 21,
    "name": "Bald Fade",
    "image": "https://i.pinimg.com/564x/c9/7c/66/c97c66880649ca67ad2798ffbb6a31c0.jpg",
    "category": "Fade",
    "faceShapeCompatibility": ["Diamond", "Oblong"],
    "description": "The bald fade highlights the striking features of diamond faces and reduces length in oblong faces."
  },
  {
    "id": 22,
    "name": "Temp Fade",
    "image": "https://i0.wp.com/manhaircuts.com/wp-content/uploads/2022/03/Temp-Fade-on-Wavy-Hair.jpg?resize=600%2C600&ssl=1",
    "category": "Fade",
    "faceShapeCompatibility": ["Round", "Square"],
    "description": "The temp fade adds angularity to round faces and enhances the strong jawline of square faces."
  },
  {
    "id": 23,
    "name": "Drop Fade",
    "image": "https://www.barberstake.com/wp-content/uploads/2024/10/Low-Drop-Taper-with-Messy-Hair.jpg",
    "category": "Fade",
    "faceShapeCompatibility": ["Heart", "Oblong"],
    "description": "The drop fade balances the wider forehead of heart-shaped faces and adds width to narrow oblong faces."
  },
  {
    "id": 24,
    "name": "Mid Fade",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf9G0ogHN_-3DxDGDceFVUNucOt_Nn6dWPnQ&s",
    "category": "Fade",
    "faceShapeCompatibility": ["Oval", "Diamond"],
    "description": "The mid fade complements the balanced proportions of oval faces and highlights diamond cheekbones."
  },
  {
    "id": 25,
    "name": "Pompadour",
    "image": "https://i.pinimg.com/564x/48/d6/76/48d6761fe230ad0734d0817e603f08ec.jpg",
    "category": "Classic",
    "faceShapeCompatibility": ["Oval", "Heart"],
    "description": "The pompadour adds volume on top, balancing the wider forehead of heart-shaped faces and complementing oval proportions."
  },
  {
    "id": 26,
    "name": "Comb Over",
    "image": "https://cdn.shopify.com/s/files/1/0639/1237/8602/files/Untitled_design_42_1_480x480.webp?v=1740563848",
    "category": "Classic",
    "faceShapeCompatibility": ["Square", "Diamond"],
    "description": "The comb over softens angular features of square faces and complements the striking cheekbones of diamond faces."
  },
  {
    "id": 27,
    "name": "Parted Hair",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6YpjpFLLeOtibh7AthoYw35kj4oDeF2kKmQ&s",
    "category": "Classic",
    "faceShapeCompatibility": ["Oval", "Round"],
    "description": "Parted hair adds structure to round faces and enhances the balanced proportions of oval faces."
  },
  {
    "id": 28,
    "name": "Taper Cut",
    "image": "https://cdn.shopify.com/s/files/1/0029/0868/4397/files/Mid-Taper-Fade-Curly-Hair_600x600.webp?v=1751889694",
    "category": "Classic",
    "faceShapeCompatibility": ["Square", "Oblong"],
    "description": "The taper cut emphasizes the jawline of square faces and reduces length in oblong faces."
  },
  {
    "id": 29,
    "name": "Regulation Cut",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtNLmruQ4TN-Thl1oVZCXlsxMctad97nVwJg&s",
    "category": "Classic",
    "faceShapeCompatibility": ["Heart", "Diamond"],
    "description": "The regulation cut balances the proportions of heart-shaped faces and highlights diamond cheekbones."
  },
  {
    "id": 30,
    "name": "Short Back and Sides",
    "image": "https://i.pinimg.com/236x/95/7a/b1/957ab15c4727a28f633c77631d45a758.jpg",
    "category": "Classic",
    "faceShapeCompatibility": ["Round", "Oval"],
    "description": "Short back and sides adds definition to round faces and complements the balanced proportions of oval faces."
  },
  {
    "id": 31,
    "name": "Spiky Hair",
    "image": "https://www.menshairstylesnow.com/wp-content/uploads/2019/01/Short-Spiky-Hair-Men.jpg",
    "category": "Modern",
    "faceShapeCompatibility": ["Round", "Heart"],
    "description": "Spiky hair adds height and structure to round faces and balances the wider forehead of heart-shaped faces."
  },
  {
    "id": 32,
    "name": "Faux Hawk",
    "image": "https://cdn.shopify.com/s/files/1/0029/0868/4397/files/Faux-Hawk-Fade.webp?v=1754387960",
    "category": "Modern",
    "faceShapeCompatibility": ["Square", "Diamond"],
    "description": "The faux hawk softens angular features of square faces and highlights the striking cheekbones of diamond faces."
  },
  {
    "id": 33,
    "name": "Curly Top",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf1qOBKgcXT45LZ2Hl2vuJdr4SjEwwyJbeOw&s",
    "category": "Modern",
    "faceShapeCompatibility": ["Oval", "Oblong"],
    "description": "The curly top adds width to narrow oblong faces and complements the balanced proportions of oval faces."
  },
  {
    "id": 34,
    "name": "Shag",
    "image": "https://menshaircuts.com/wp-content/uploads/2021/10/tp-shaggy-haircut-men.jpg",
    "category": "Modern",
    "faceShapeCompatibility": ["Square", "Heart"],
    "description": "The shag softens angular features of square faces and balances the proportions of heart-shaped faces."
  },
  {
    "id": 35,
    "name": "Textured Fringe",
    "image": "https://cdn.shopify.com/s/files/1/0029/0868/4397/files/Waves_with_Voluminous_Top.png?v=1748032613",
    "category": "Modern",
    "faceShapeCompatibility": ["Round", "Diamond"],
    "description": "The textured fringe adds structure to round faces and balances the narrow chin of diamond faces."
  },
  {
    "id": 36,
    "name": "Disconnected Undercut",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIzWs4PgDeKbMyBska-DpwMCWrTIxTGE8FSA&s",
    "category": "Modern",
    "faceShapeCompatibility": ["Oval", "Oblong"],
    "description": "The disconnected undercut adds dimension to oval faces and breaks up the length of oblong faces."
  }
]
  },

  // Female Products
  female: {
    clothing: [
  {
    "id": 1,
    "name": "Navy Blue Formal Blazer",
    "image": "https://example.com/clothes/navy-blazer.jpg",
    "price": 3999,
    "category": "Formal",
    "skinToneCompatibility": ["Fair", "Medium", "Olive"],
    "description": "Deep navy enhances fair and olive complexions, creating professional contrast for formal settings."
  },
  {
    "id": 2,
    "name": "Cream Pencil Skirt",
    "image": "https://example.com/clothes/cream-skirt.jpg",
    "price": 2499,
    "category": "Formal",
    "skinToneCompatibility": ["Dark", "Warm", "Neutral"],
    "description": "Soft cream provides elegant contrast against darker skin tones and enhances warm undertones."
  },
  {
    "id": 3,
    "name": "Charcoal Grey Suit",
    "image": "https://example.com/clothes/charcoal-suit.jpg",
    "price": 6999,
    "category": "Formal",
    "skinToneCompatibility": ["Medium", "Dark", "Cool"],
    "description": "Charcoal creates sophisticated contrast against deeper skin tones while complementing cool undertones."
  },
  {
    "id": 4,
    "name": "White Formal Blouse",
    "image": "https://example.com/clothes/white-blouse.jpg",
    "price": 1899,
    "category": "Formal",
    "skinToneCompatibility": ["Medium", "Dark", "Olive", "Warm"],
    "description": "Crisp white creates striking contrast against deeper skin tones and enhances warm undertones."
  },
  {
    "id": 5,
    "name": "Burgundy Dress Pants",
    "image": "https://example.com/clothes/burgundy-pants.jpg",
    "price": 2999,
    "category": "Formal",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Rich burgundy adds warmth to fair complexions and complements cool undertones."
  },
  {
    "id": 6,
    "name": "Light Blue Button-Up",
    "image": "https://example.com/clothes/light-blue-shirt.jpg",
    "price": 2199,
    "category": "Formal",
    "skinToneCompatibility": ["Fair", "Cool", "Olive"],
    "description": "Soft blue brightens fair skin and harmonizes with cool and olive undertones."
  },
  {
    "id": 7,
    "name": "Black Formal Dress",
    "image": "https://example.com/clothes/black-dress.jpg",
    "price": 4999,
    "category": "Formal",
    "skinToneCompatibility": ["Fair", "Dark", "Neutral"],
    "description": "Classic black creates versatile contrast against both fair and dark skin tones."
  },
  {
    "id": 8,
    "name": "Forest Green Blazer",
    "image": "https://example.com/clothes/forest-blazer.jpg",
    "price": 4599,
    "category": "Formal",
    "skinToneCompatibility": ["Warm", "Olive", "Medium"],
    "description": "Earthy green enhances warm undertones and complements olive and medium complexions."
  },
  {
    "id": 9,
    "name": "Silver Grey Blouse",
    "image": "https://example.com/clothes/silver-blouse.jpg",
    "price": 2499,
    "category": "Formal",
    "skinToneCompatibility": ["Cool", "Fair", "Neutral"],
    "description": "Metallic silver brightens fair skin and harmonizes with cool undertones."
  },
  {
    "id": 10,
    "name": "Navy Pinstripe Suit",
    "image": "https://example.com/clothes/pinstripe-suit.jpg",
    "price": 7999,
    "category": "Formal",
    "skinToneCompatibility": ["Medium", "Dark", "Warm"],
    "description": "Navy pinstripes create sophisticated contrast against deeper skin tones with warm undertones."
  },
  {
    "id": 11,
    "name": "Ivory Formal Blouse",
    "image": "https://example.com/clothes/ivory-blouse.jpg",
    "price": 2299,
    "category": "Formal",
    "skinToneCompatibility": ["Dark", "Warm", "Olive"],
    "description": "Soft ivory provides elegant contrast against darker skin tones and enhances warm undertones."
  },
  {
    "id": 12,
    "name": "Plum Dress Pants",
    "image": "https://example.com/clothes/plum-pants.jpg",
    "price": 3299,
    "category": "Formal",
    "skinToneCompatibility": ["Cool", "Fair", "Neutral"],
    "description": "Deep plum adds richness to fair skin and complements cool undertones."
  },
  {
    "id": 13,
    "name": "Charcoal Pencil Skirt",
    "image": "https://example.com/clothes/charcoal-skirt.jpg",
    "price": 2799,
    "category": "Formal",
    "skinToneCompatibility": ["Medium", "Dark", "Cool"],
    "description": "Structured charcoal adds depth to medium and dark skin tones while complementing cool undertones."
  },
  {
    "id": 14,
    "name": "Sky Blue Blouse",
    "image": "https://example.com/clothes/sky-blue-blouse.jpg",
    "price": 1999,
    "category": "Formal",
    "skinToneCompatibility": ["Fair", "Cool", "Olive"],
    "description": "Light blue brightens fair skin and harmonizes with cool and olive undertones."
  },
  {
    "id": 15,
    "name": "Black Formal Pants",
    "image": "https://example.com/clothes/black-pants.jpg",
    "price": 3499,
    "category": "Formal",
    "skinToneCompatibility": ["Fair", "Dark", "Neutral"],
    "description": "Versatile black creates clean lines against both fair and dark skin tones."
  },
  {
    "id": 16,
    "name": "Olive Green Blazer",
    "image": "https://example.com/clothes/olive-blazer.jpg",
    "price": 4299,
    "category": "Formal",
    "skinToneCompatibility": ["Warm", "Olive", "Medium"],
    "description": "Earthy olive enhances warm undertones and complements olive and medium complexions."
  },
  {
    "id": 17,
    "name": "Mauve Formal Dress",
    "image": "https://example.com/clothes/mauve-dress.jpg",
    "price": 5499,
    "category": "Formal",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Soft mauve adds subtle warmth to fair complexions and complements cool undertones."
  },
  {
    "id": 18,
    "name": "Navy Blue Dress Pants",
    "image": "https://example.com/clothes/navy-pants.jpg",
    "price": 3199,
    "category": "Formal",
    "skinToneCompatibility": ["Fair", "Medium", "Olive"],
    "description": "Classic navy enhances fair and olive complexions for a professional look."
  },
  {
    "id": 19,
    "name": "Beige Formal Blouse",
    "image": "https://example.com/clothes/beige-blouse.jpg",
    "price": 2099,
    "category": "Formal",
    "skinToneCompatibility": ["Dark", "Warm", "Neutral"],
    "description": "Light beige tones balance darker and warm skin tones for elegant formal wear."
  },
  {
    "id": 20,
    "name": "Emerald Green Blazer",
    "image": "https://example.com/clothes/emerald-blazer.jpg",
    "price": 4999,
    "category": "Formal",
    "skinToneCompatibility": ["Warm", "Olive", "Medium"],
    "description": "Rich emerald enhances warm undertones and complements olive and medium complexions."
  },
  {
    "id": 21,
    "name": "Lavender Dress Shirt",
    "image": "https://example.com/clothes/lavender-shirt.jpg",
    "price": 2399,
    "category": "Formal",
    "skinToneCompatibility": ["Cool", "Fair", "Neutral"],
    "description": "Soft lavender brightens fair skin and harmonizes with cool undertones."
  },
  {
    "id": 22,
    "name": "Charcoal Formal Dress",
    "image": "https://example.com/clothes/charcoal-dress.jpg",
    "price": 5699,
    "category": "Formal",
    "skinToneCompatibility": ["Medium", "Dark", "Cool"],
    "description": "Deep charcoal adds sophistication to medium and dark skin tones while complementing cool undertones."
  },
  {
    "id": 23,
    "name": "Coral Blouse",
    "image": "https://example.com/clothes/coral-blouse.jpg",
    "price": 2199,
    "category": "Formal",
    "skinToneCompatibility": ["Warm", "Medium", "Olive"],
    "description": "Vibrant coral enhances warm undertones and complements olive and medium complexions."
  },
  {
    "id": 24,
    "name": "Navy Blue Pencil Skirt",
    "image": "https://example.com/clothes/navy-skirt.jpg",
    "price": 2999,
    "category": "Formal",
    "skinToneCompatibility": ["Fair", "Medium", "Olive"],
    "description": "Classic navy enhances fair and olive complexions for professional settings."
  },
  {
    "id": 25,
    "name": "Ivory Formal Dress",
    "image": "https://example.com/clothes/ivory-dress.jpg",
    "price": 5299,
    "category": "Formal",
    "skinToneCompatibility": ["Dark", "Warm", "Olive"],
    "description": "Soft ivory provides elegant contrast against darker skin tones and enhances warm undertones."
  },
  {
    "id": 26,
    "name": "Teal Blazer",
    "image": "https://example.com/clothes/teal-blazer.jpg",
    "price": 4699,
    "category": "Formal",
    "skinToneCompatibility": ["Cool", "Fair", "Neutral"],
    "description": "Rich teal brightens fair skin and harmonizes with cool undertones."
  },
  {
    "id": 27,
    "name": "Burgundy Formal Dress",
    "image": "https://example.com/clothes/burgundy-dress.jpg",
    "price": 5999,
    "category": "Formal",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Deep burgundy adds warmth to fair complexions and complements cool undertones."
  },
  {
    "id": 28,
    "name": "White Cotton T-Shirt",
    "image": "https://example.com/clothes/white-tshirt.jpg",
    "price": 999,
    "category": "Casual",
    "skinToneCompatibility": ["Medium", "Dark", "Olive", "Warm"],
    "description": "Crisp white creates striking contrast against deeper skin tones and enhances warm undertones."
  },
  {
    "id": 29,
    "name": "Black Jeans",
    "image": "https://example.com/clothes/black-jeans.jpg",
    "price": 2499,
    "category": "Casual",
    "skinToneCompatibility": ["Fair", "Dark", "Neutral"],
    "description": "Versatile black creates clean lines against both fair and dark skin tones."
  },
  {
    "id": 30,
    "name": "Beige Shorts",
    "image": "https://example.com/clothes/beige-shorts.jpg",
    "price": 1499,
    "category": "Casual",
    "skinToneCompatibility": ["Dark", "Warm", "Neutral"],
    "description": "Light beige tones balance darker and warm skin tones for summer wear."
  },
  {
    "id": 31,
    "name": "Navy Blue T-Shirt",
    "image": "https://example.com/clothes/navy-tshirt.jpg",
    "price": 1199,
    "category": "Casual",
    "skinToneCompatibility": ["Fair", "Medium", "Olive"],
    "description": "Classic navy enhances fair and olive complexions for a versatile casual look."
  },
  {
    "id": 32,
    "name": "Grey Hoodie",
    "image": "https://example.com/clothes/grey-hoodie.jpg",
    "price": 1999,
    "category": "Casual",
    "skinToneCompatibility": ["Cool", "Fair", "Neutral"],
    "description": "Soft grey harmonizes with cool undertones and provides subtle contrast against fair skin."
  },
  {
    "id": 33,
    "name": "Olive Green T-Shirt",
    "image": "https://example.com/clothes/olive-tshirt.jpg",
    "price": 1299,
    "category": "Casual",
    "skinToneCompatibility": ["Warm", "Olive", "Medium"],
    "description": "Earthy olive enhances warm undertones and complements olive and medium complexions."
  },
  {
    "id": 34,
    "name": "Light Blue Blouse",
    "image": "https://example.com/clothes/light-blue-blouse.jpg",
    "price": 1599,
    "category": "Casual",
    "skinToneCompatibility": ["Fair", "Cool", "Olive"],
    "description": "Soft blue brightens fair skin and harmonizes with cool and olive undertones."
  },
  {
    "id": 35,
    "name": "Charcoal Joggers",
    "image": "https://example.com/clothes/charcoal-joggers.jpg",
    "price": 2199,
    "category": "Casual",
    "skinToneCompatibility": ["Medium", "Dark", "Cool"],
    "description": "Deep charcoal adds sophistication to medium and dark skin tones while complementing cool undertones."
  },
  {
    "id": 36,
    "name": "Burgundy T-Shirt",
    "image": "https://example.com/clothes/burgundy-tshirt.jpg",
    "price": 1399,
    "category": "Casual",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Rich burgundy adds warmth to fair complexions and complements cool undertones."
  },
  {
    "id": 37,
    "name": "Khaki Shorts",
    "image": "https://example.com/clothes/khaki-shorts.jpg",
    "price": 1699,
    "category": "Casual",
    "skinToneCompatibility": ["Dark", "Warm", "Medium"],
    "description": "Neutral khaki creates balanced contrast against darker and warm skin tones."
  },
  {
    "id": 38,
    "name": "Forest Green Tank Top",
    "image": "https://example.com/clothes/forest-tank.jpg",
    "price": 1099,
    "category": "Casual",
    "skinToneCompatibility": ["Warm", "Olive", "Medium"],
    "description": "Earthy green enhances warm undertones and complements olive and medium complexions."
  },
  {
    "id": 39,
    "name": "White Denim Jacket",
    "image": "https://example.com/clothes/white-denim.jpg",
    "price": 2999,
    "category": "Casual",
    "skinToneCompatibility": ["Medium", "Dark", "Olive", "Warm"],
    "description": "Crisp white creates striking contrast against deeper skin tones and enhances warm undertones."
  },
  {
    "id": 40,
    "name": "Black Leggings",
    "image": "https://example.com/clothes/black-leggings.jpg",
    "price": 1299,
    "category": "Casual",
    "skinToneCompatibility": ["Fair", "Dark", "Neutral"],
    "description": "Versatile black creates edgy contrast against both fair and dark skin tones."
  },
  {
    "id": 41,
    "name": "Grey Shorts",
    "image": "https://example.com/clothes/grey-shorts.jpg",
    "price": 1399,
    "category": "Casual",
    "skinToneCompatibility": ["Cool", "Fair", "Neutral"],
    "description": "Soft grey harmonizes with cool undertones and provides subtle contrast against fair skin."
  },
  {
    "id": 42,
    "name": "Navy Blue Sundress",
    "image": "https://example.com/clothes/navy-sundress.jpg",
    "price": 2499,
    "category": "Casual",
    "skinToneCompatibility": ["Fair", "Medium", "Olive"],
    "description": "Classic navy enhances fair and olive complexions for versatile summer wear."
  },
  {
    "id": 43,
    "name": "Beige Cardigan",
    "image": "https://example.com/clothes/beige-cardigan.jpg",
    "price": 2299,
    "category": "Casual",
    "skinToneCompatibility": ["Dark", "Warm", "Neutral"],
    "description": "Light beige tones balance darker and warm skin tones for a relaxed look."
  },
  {
    "id": 44,
    "name": "Olive Green Jacket",
    "image": "https://example.com/clothes/olive-jacket.jpg",
    "price": 3299,
    "category": "Casual",
    "skinToneCompatibility": ["Warm", "Olive", "Medium"],
    "description": "Earthy olive enhances warm undertones and complements olive and medium complexions."
  },
  {
    "id": 45,
    "name": "Lavender Blouse",
    "image": "https://example.com/clothes/lavender-blouse.jpg",
    "price": 1899,
    "category": "Casual",
    "skinToneCompatibility": ["Cool", "Fair", "Neutral"],
    "description": "Soft lavender brightens fair skin and harmonizes with cool undertones."
  },
  {
    "id": 46,
    "name": "Charcoal Sweatshirt",
    "image": "https://example.com/clothes/charcoal-sweatshirt.jpg",
    "price": 2399,
    "category": "Casual",
    "skinToneCompatibility": ["Medium", "Dark", "Cool"],
    "description": "Deep charcoal adds sophistication to medium and dark skin tones while complementing cool undertones."
  },
  {
    "id": 47,
    "name": "Coral T-Shirt",
    "image": "https://example.com/clothes/coral-tshirt.jpg",
    "price": 1499,
    "category": "Casual",
    "skinToneCompatibility": ["Warm", "Medium", "Olive"],
    "description": "Vibrant coral enhances warm undertones and complements olive and medium complexions."
  },
  {
    "id": 48,
    "name": "Navy Blue Skirt",
    "image": "https://example.com/clothes/navy-skirt.jpg",
    "price": 1999,
    "category": "Casual",
    "skinToneCompatibility": ["Fair", "Medium", "Olive"],
    "description": "Classic navy enhances fair and olive complexions for versatile casual wear."
  },
  {
    "id": 49,
    "name": "Ivory Sweater",
    "image": "https://example.com/clothes/ivory-sweater.jpg",
    "price": 2699,
    "category": "Casual",
    "skinToneCompatibility": ["Dark", "Warm", "Olive"],
    "description": "Soft ivory provides elegant contrast against darker skin tones and enhances warm undertones."
  },
  {
    "id": 50,
    "name": "Teal Top",
    "image": "https://example.com/clothes/teal-top.jpg",
    "price": 1699,
    "category": "Casual",
    "skinToneCompatibility": ["Cool", "Fair", "Neutral"],
    "description": "Rich teal brightens fair skin and harmonizes with cool undertones."
  },
  {
    "id": 51,
    "name": "Burgundy Dress",
    "image": "https://example.com/clothes/burgundy-casual-dress.jpg",
    "price": 2799,
    "category": "Casual",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Deep burgundy adds warmth to fair complexions and complements cool undertones."
  },
  {
    "id": 52,
    "name": "Red Saree",
    "image": "https://example.com/clothes/red-saree.jpg",
    "price": 5999,
    "category": "Traditional",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Vibrant red creates stunning contrast against fair skin and complements cool undertones."
  },
  {
    "id": 53,
    "name": "Green Salwar Kameez",
    "image": "https://example.com/clothes/green-salwar.jpg",
    "price": 3999,
    "category": "Traditional",
    "skinToneCompatibility": ["Warm", "Olive", "Medium"],
    "description": "Earthy green enhances warm undertones and complements olive and medium complexions."
  },
  {
    "id": 54,
    "name": "Pink Lehenga",
    "image": "https://example.com/clothes/pink-lehenga.jpg",
    "price": 7999,
    "category": "Traditional",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Soft pink adds warmth to fair complexions and harmonizes with cool undertones."
  },
  {
    "id": 55,
    "name": "Blue Anarkali",
    "image": "https://example.com/clothes/blue-anarkali.jpg",
    "price": 4999,
    "category": "Traditional",
    "skinToneCompatibility": ["Fair", "Medium", "Olive"],
    "description": "Royal blue enhances fair and olive complexions for festive occasions."
  },
  {
    "id": 56,
    "name": "Yellow Saree",
    "image": "https://example.com/clothes/yellow-saree.jpg",
    "price": 5499,
    "category": "Traditional",
    "skinToneCompatibility": ["Warm", "Medium", "Olive"],
    "description": "Bright yellow enhances warm undertones and complements olive and medium complexions."
  },
  {
    "id": 57,
    "name": "Purple Kurti",
    "image": "https://example.com/clothes/purple-kurti.jpg",
    "price": 2999,
    "category": "Traditional",
    "skinToneCompatibility": ["Cool", "Fair", "Neutral"],
    "description": "Rich purple brightens fair skin and harmonizes with cool undertones."
  },
  {
    "id": 58,
    "name": "Orange Salwar Kameez",
    "image": "https://example.com/clothes/orange-salwar.jpg",
    "price": 4299,
    "category": "Traditional",
    "skinToneCompatibility": ["Warm", "Medium", "Olive"],
    "description": "Vibrant orange enhances warm undertones and complements olive and medium complexions."
  },
  {
    "id": 59,
    "name": "White Saree",
    "image": "https://example.com/clothes/white-saree.jpg",
    "price": 6499,
    "category": "Traditional",
    "skinToneCompatibility": ["Medium", "Dark", "Olive", "Warm"],
    "description": "Pure white creates striking contrast against deeper skin tones and enhances warm undertones."
  },
  {
    "id": 60,
    "name": "Maroon Lehenga",
    "image": "https://example.com/clothes/maroon-lehenga.jpg",
    "price": 8999,
    "category": "Traditional",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Deep maroon adds richness to fair skin and complements cool undertones."
  },
  {
    "id": 61,
    "name": "Beige Salwar Kameez",
    "image": "https://example.com/clothes/beige-salwar.jpg",
    "price": 3499,
    "category": "Traditional",
    "skinToneCompatibility": ["Dark", "Warm", "Neutral"],
    "description": "Light beige tones balance darker and warm skin tones for traditional events."
  },
  {
    "id": 62,
    "name": "Teal Anarkali",
    "image": "https://example.com/clothes/teal-anarkali.jpg",
    "price": 5499,
    "category": "Traditional",
    "skinToneCompatibility": ["Cool", "Fair", "Neutral"],
    "description": "Rich teal brightens fair skin and harmonizes with cool undertones."
  },
  {
    "id": 63,
    "name": "Olive Green Saree",
    "image": "https://example.com/clothes/olive-saree.jpg",
    "price": 4999,
    "category": "Traditional",
    "skinToneCompatibility": ["Warm", "Olive", "Medium"],
    "description": "Earthy olive enhances warm undertones and complements olive and medium complexions."
  },
  {
    "id": 64,
    "name": "Peach Kurti",
    "image": "https://example.com/clothes/peach-kurti.jpg",
    "price": 2499,
    "category": "Traditional",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Soft peach adds warmth to fair complexions and complements cool undertones."
  },
  {
    "id": 65,
    "name": "Navy Blue Saree",
    "image": "https://example.com/clothes/navy-saree.jpg",
    "price": 5799,
    "category": "Traditional",
    "skinToneCompatibility": ["Fair", "Medium", "Olive"],
    "description": "Classic navy enhances fair and olive complexions for elegant traditional wear."
  },
  {
    "id": 66,
    "name": "Ivory Lehenga",
    "image": "https://example.com/clothes/ivory-lehenga.jpg",
    "price": 7499,
    "category": "Traditional",
    "skinToneCompatibility": ["Dark", "Warm", "Olive"],
    "description": "Soft ivory provides elegant contrast against darker skin tones and enhances warm undertones."
  },
  {
    "id": 67,
    "name": "Emerald Green Salwar Kameez",
    "image": "https://example.com/clothes/emerald-salwar.jpg",
    "price": 4599,
    "category": "Traditional",
    "skinToneCompatibility": ["Warm", "Olive", "Medium"],
    "description": "Rich emerald enhances warm undertones and complements olive and medium complexions."
  },
  {
    "id": 68,
    "name": "Lavender Anarkali",
    "image": "https://example.com/clothes/lavender-anarkali.jpg",
    "price": 5299,
    "category": "Traditional",
    "skinToneCompatibility": ["Cool", "Fair", "Neutral"],
    "description": "Soft lavender brightens fair skin and harmonizes with cool undertones."
  },
  {
    "id": 69,
    "name": "Coral Saree",
    "image": "https://example.com/clothes/coral-saree.jpg",
    "price": 5299,
    "category": "Traditional",
    "skinToneCompatibility": ["Warm", "Medium", "Olive"],
    "description": "Vibrant coral enhances warm undertones and complements olive and medium complexions."
  },
  {
    "id": 70,
    "name": "Charcoal Salwar Kameez",
    "image": "https://example.com/clothes/charcoal-salwar.jpg",
    "price": 3999,
    "category": "Traditional",
    "skinToneCompatibility": ["Medium", "Dark", "Cool"],
    "description": "Deep charcoal adds sophistication to medium and dark skin tones while complementing cool undertones."
  },
  {
    "id": 71,
    "name": "Golden Yellow Lehenga",
    "image": "https://example.com/clothes/golden-lehenga.jpg",
    "price": 9999,
    "category": "Traditional",
    "skinToneCompatibility": ["Warm", "Medium", "Olive"],
    "description": "Rich golden yellow enhances warm undertones and complements olive and medium complexions."
  },
  {
    "id": 72,
    "name": "Silver Grey Saree",
    "image": "https://example.com/clothes/silver-saree.jpg",
    "price": 6299,
    "category": "Traditional",
    "skinToneCompatibility": ["Cool", "Fair", "Neutral"],
    "description": "Metallic silver brightens fair skin and harmonizes with cool undertones."
  },
  {
    "id": 73,
    "name": "Mauve Kurti",
    "image": "https://example.com/clothes/mauve-kurti.jpg",
    "price": 2799,
    "category": "Traditional",
    "skinToneCompatibility": ["Cool", "Fair", "Neutral"],
    "description": "Soft mauve adds subtle warmth to fair complexions and complements cool undertones."
  },
  {
    "id": 74,
    "name": "Turquoise Anarkali",
    "image": "https://example.com/clothes/turquoise-anarkali.jpg",
    "price": 5699,
    "category": "Traditional",
    "skinToneCompatibility": ["Cool", "Fair", "Neutral"],
    "description": "Vibrant turquoise brightens fair skin and harmonizes with cool undertones."
  },
  {
    "id": 75,
    "name": "Rust Salwar Kameez",
    "image": "https://example.com/clothes/rust-salwar.jpg",
    "price": 4399,
    "category": "Traditional",
    "skinToneCompatibility": ["Warm", "Medium", "Olive"],
    "description": "Earthy rust enhances warm undertones and complements olive and medium complexions."
  },
  {
    "id": 76,
    "name": "Ivory Saree with Gold Border",
    "image": "https://example.com/clothes/ivory-gold-saree.jpg",
    "price": 6999,
    "category": "Traditional",
    "skinToneCompatibility": ["Dark", "Warm", "Olive"],
    "description": "Soft ivory with gold accents provides elegant contrast against darker skin tones and enhances warm undertones."
  },
  {
    "id": 77,
    "name": "Navy Blue Lehenga",
    "image": "https://example.com/clothes/navy-lehenga.jpg",
    "price": 8499,
    "category": "Traditional",
    "skinToneCompatibility": ["Fair", "Medium", "Olive"],
    "description": "Royal navy enhances fair and olive complexions for festive celebrations."
  },
  {
    "id": 78,
    "name": "Emerald Green Saree",
    "image": "https://example.com/clothes/emerald-saree.jpg",
    "price": 6499,
    "category": "Traditional",
    "skinToneCompatibility": ["Warm", "Olive", "Medium"],
    "description": "Rich emerald enhances warm undertones and complements olive and medium complexions."
  },
  {
    "id": 79,
    "name": "Lavender Kurti",
    "image": "https://example.com/clothes/lavender-kurti.jpg",
    "price": 2899,
    "category": "Traditional",
    "skinToneCompatibility": ["Cool", "Fair", "Neutral"],
    "description": "Soft lavender brightens fair skin and harmonizes with cool undertones."
  },
  {
    "id": 80,
    "name": "Coral Anarkali",
    "image": "https://example.com/clothes/coral-anarkali.jpg",
    "price": 5399,
    "category": "Traditional",
    "skinToneCompatibility": ["Warm", "Medium", "Olive"],
    "description": "Vibrant coral enhances warm undertones and complements olive and medium complexions."
  },
  {
    "id": 81,
    "name": "Beige Lehenga",
    "image": "https://example.com/clothes/beige-lehenga.jpg",
    "price": 6999,
    "category": "Traditional",
    "skinToneCompatibility": ["Dark", "Warm", "Neutral"],
    "description": "Light beige tones balance darker and warm skin tones for elegant traditional wear."
  }
],
    accessories: [
  {
    "id": 1,
    "name": "Gold Hoop Earrings",
    "image": "https://example.com/accessories/gold-hoop.jpg",
    "price": 1299,
    "category": "Jewelry",
    "skinToneCompatibility": ["Dark", "Olive", "Warm"],
    "description": "Gold tones bring out the warmth in olive and dark skin, making these hoops a timeless choice."
  },
  {
    "id": 2,
    "name": "Silver Choker Necklace",
    "image": "https://example.com/accessories/silver-choker.jpg",
    "price": 1599,
    "category": "Jewelry",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Cool silver complements fair skin and enhances cool undertones for an elegant look."
  },
  {
    "id": 3,
    "name": "Rose Gold Bracelet",
    "image": "https://example.com/accessories/rosegold-bracelet.jpg",
    "price": 1899,
    "category": "Jewelry",
    "skinToneCompatibility": ["Fair", "Medium", "Warm"],
    "description": "Soft rose gold adds warmth to fair and medium complexions with warm undertones."
  },
  {
    "id": 4,
    "name": "Pearl Drop Earrings",
    "image": "https://example.com/accessories/pearl-drops.jpg",
    "price": 2199,
    "category": "Jewelry",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Classic pearls brighten fair skin and harmonize with cool undertones."
  },
  {
    "id": 5,
    "name": "Turquoise Statement Ring",
    "image": "https://example.com/accessories/turquoise-ring.jpg",
    "price": 1499,
    "category": "Jewelry",
    "skinToneCompatibility": ["Warm", "Olive", "Medium"],
    "description": "Vibrant turquoise enhances warm undertones and complements olive and medium skin tones."
  },
  {
    "id": 6,
    "name": "Bronze Cuff Bracelet",
    "image": "https://example.com/accessories/bronze-cuff.jpg",
    "price": 1799,
    "category": "Jewelry",
    "skinToneCompatibility": ["Dark", "Olive", "Warm"],
    "description": "Rich bronze tones highlight the warmth in deeper skin tones for a bold statement."
  },
  {
    "id": 7,
    "name": "Crystal Pendant Necklace",
    "image": "https://example.com/accessories/crystal-pendant.jpg",
    "price": 2499,
    "category": "Jewelry",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Sparkling crystals brighten fair skin and complement cool undertones."
  },
  {
    "id": 8,
    "name": "Gold Layered Necklace",
    "image": "https://example.com/accessories/gold-layered.jpg",
    "price": 2699,
    "category": "Jewelry",
    "skinToneCompatibility": ["Medium", "Dark", "Warm"],
    "description": "Layered gold chains enhance warm undertones in medium and dark skin tones."
  },
  {
    "id": 9,
    "name": "Silver Hoop Earrings",
    "image": "https://example.com/accessories/silver-hoops.jpg",
    "price": 1399,
    "category": "Jewelry",
    "skinToneCompatibility": ["Fair", "Cool", "Olive"],
    "description": "Cool silver brightens fair skin and complements olive undertones."
  },
  {
    "id": 10,
    "name": "Emerald Stud Earrings",
    "image": "https://example.com/accessories/emerald-studs.jpg",
    "price": 2999,
    "category": "Jewelry",
    "skinToneCompatibility": ["Warm", "Olive", "Medium"],
    "description": "Rich emerald enhances warm undertones and complements olive and medium complexions."
  },
  {
    "id": 11,
    "name": "Platinum Tennis Bracelet",
    "image": "https://example.com/accessories/platinum-bracelet.jpg",
    "price": 4999,
    "category": "Jewelry",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Cool platinum tones brighten fair skin and enhance cool undertones."
  },
  {
    "id": 12,
    "name": "Copper Statement Earrings",
    "image": "https://example.com/accessories/copper-earrings.jpg",
    "price": 1699,
    "category": "Jewelry",
    "skinToneCompatibility": ["Warm", "Medium", "Olive"],
    "description": "Warm copper tones enhance medium and olive skin with warm undertones."
  },
  {
    "id": 13,
    "name": "Beige Tote Bag",
    "image": "https://example.com/accessories/beige-tote.jpg",
    "price": 3499,
    "category": "Handbags",
    "skinToneCompatibility": ["Dark", "Warm", "Neutral"],
    "description": "Neutral beige complements darker skin tones and enhances warm undertones."
  },
  {
    "id": 14,
    "name": "Black Crossbody Bag",
    "image": "https://example.com/accessories/black-crossbody.jpg",
    "price": 2799,
    "category": "Handbags",
    "skinToneCompatibility": ["Fair", "Dark", "Neutral"],
    "description": "Versatile black creates contrast against both fair and dark skin tones."
  },
  {
    "id": 15,
    "name": "Navy Blue Clutch",
    "image": "https://example.com/accessories/navy-clutch.jpg",
    "price": 2299,
    "category": "Handbags",
    "skinToneCompatibility": ["Fair", "Medium", "Olive"],
    "description": "Deep navy enhances fair and olive complexions for elegant occasions."
  },
  {
    "id": 16,
    "name": "Olive Green Satchel",
    "image": "https://example.com/accessories/olive-satchel.jpg",
    "price": 3199,
    "category": "Handbags",
    "skinToneCompatibility": ["Warm", "Olive", "Medium"],
    "description": "Earthy olive enhances warm undertones and complements olive and medium skin tones."
  },
  {
    "id": 17,
    "name": "Ivory Shoulder Bag",
    "image": "https://example.com/accessories/ivory-shoulder.jpg",
    "price": 2999,
    "category": "Handbags",
    "skinToneCompatibility": ["Dark", "Warm", "Olive"],
    "description": "Soft ivory provides elegant contrast against darker skin tones and enhances warm undertones."
  },
  {
    "id": 18,
    "name": "Grey Leather Purse",
    "image": "https://example.com/accessories/grey-purse.jpg",
    "price": 2499,
    "category": "Handbags",
    "skinToneCompatibility": ["Cool", "Fair", "Neutral"],
    "description": "Cool grey harmonizes with fair skin and complements cool undertones."
  },
  {
    "id": 19,
    "name": "Burgundy Handbag",
    "image": "https://example.com/accessories/burgundy-handbag.jpg",
    "price": 3299,
    "category": "Handbags",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Rich burgundy adds warmth to fair complexions and complements cool undertones."
  },
  {
    "id": 20,
    "name": "Tan Leather Tote",
    "image": "https://example.com/accessories/tan-tote.jpg",
    "price": 3599,
    "category": "Handbags",
    "skinToneCompatibility": ["Warm", "Medium", "Olive"],
    "description": "Warm tan tones enhance medium and olive skin with warm undertones."
  },
  {
    "id": 21,
    "name": "Silver Evening Clutch",
    "image": "https://example.com/accessories/silver-clutch.jpg",
    "price": 2899,
    "category": "Handbags",
    "skinToneCompatibility": ["Cool", "Fair", "Neutral"],
    "description": "Metallic silver brightens fair skin and harmonizes with cool undertones."
  },
  {
    "id": 22,
    "name": "Forest Green Backpack",
    "image": "https://example.com/accessories/forest-backpack.jpg",
    "price": 2699,
    "category": "Handbags",
    "skinToneCompatibility": ["Warm", "Olive", "Medium"],
    "description": "Earthy green enhances warm undertones and complements olive and medium complexions."
  },
  {
    "id": 23,
    "name": "Cream Crossbody Bag",
    "image": "https://example.com/accessories/cream-crossbody.jpg",
    "price": 2599,
    "category": "Handbags",
    "skinToneCompatibility": ["Dark", "Warm", "Neutral"],
    "description": "Light cream tones balance darker and warm skin tones for everyday elegance."
  },
  {
    "id": 24,
    "name": "Charcoal Satchel",
    "image": "https://example.com/accessories/charcoal-satchel.jpg",
    "price": 2999,
    "category": "Handbags",
    "skinToneCompatibility": ["Medium", "Dark", "Cool"],
    "description": "Deep charcoal adds sophistication to medium and dark skin tones while complementing cool undertones."
  },
  {
    "id": 25,
    "name": "Silk Floral Scarf",
    "image": "https://example.com/accessories/floral-scarf.jpg",
    "price": 1499,
    "category": "Scarves & Shawls",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Delicate floral patterns brighten fair skin and complement cool undertones."
  },
  {
    "id": 26,
    "name": "Olive Green Pashmina",
    "image": "https://example.com/accessories/olive-pashmina.jpg",
    "price": 1999,
    "category": "Scarves & Shawls",
    "skinToneCompatibility": ["Warm", "Olive", "Medium"],
    "description": "Earthy olive enhances warm undertones and complements olive and medium complexions."
  },
  {
    "id": 27,
    "name": "Ivory Cashmere Shawl",
    "image": "https://example.com/accessories/ivory-shawl.jpg",
    "price": 3499,
    "category": "Scarves & Shawls",
    "skinToneCompatibility": ["Dark", "Warm", "Olive"],
    "description": "Soft ivory provides elegant contrast against darker skin tones and enhances warm undertones."
  },
  {
    "id": 28,
    "name": "Navy Blue Silk Scarf",
    "image": "https://example.com/accessories/navy-scarf.jpg",
    "price": 1799,
    "category": "Scarves & Shawls",
    "skinToneCompatibility": ["Fair", "Medium", "Olive"],
    "description": "Classic navy enhances fair and olive complexions for versatile styling."
  },
  {
    "id": 29,
    "name": "Burgundy Wool Scarf",
    "image": "https://example.com/accessories/burgundy-scarf.jpg",
    "price": 1899,
    "category": "Scarves & Shawls",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Rich burgundy adds warmth to fair complexions and complements cool undertones."
  },
  {
    "id": 30,
    "name": "Beige Linen Scarf",
    "image": "https://example.com/accessories/beige-linen.jpg",
    "price": 1299,
    "category": "Scarves & Shawls",
    "skinToneCompatibility": ["Dark", "Warm", "Neutral"],
    "description": "Light beige tones balance darker and warm skin tones for summer elegance."
  },
  {
    "id": 31,
    "name": "Silver Sequin Scarf",
    "image": "https://example.com/accessories/silver-sequin.jpg",
    "price": 2299,
    "category": "Scarves & Shawls",
    "skinToneCompatibility": ["Cool", "Fair", "Neutral"],
    "description": "Metallic silver brightens fair skin and harmonizes with cool undertones."
  },
  {
    "id": 32,
    "name": "Turquoise Printed Scarf",
    "image": "https://example.com/accessories/turquoise-scarf.jpg",
    "price": 1599,
    "category": "Scarves & Shawls",
    "skinToneCompatibility": ["Warm", "Olive", "Medium"],
    "description": "Vibrant turquoise enhances warm undertones and complements olive and medium skin tones."
  },
  {
    "id": 33,
    "name": "Grey Wool Wrap",
    "image": "https://example.com/accessories/grey-wrap.jpg",
    "price": 2199,
    "category": "Scarves & Shawls",
    "skinToneCompatibility": ["Cool", "Fair", "Neutral"],
    "description": "Soft grey harmonizes with fair skin and complements cool undertones."
  },
  {
    "id": 34,
    "name": "Coral Silk Scarf",
    "image": "https://example.com/accessories/coral-scarf.jpg",
    "price": 1699,
    "category": "Scarves & Shawls",
    "skinToneCompatibility": ["Warm", "Medium", "Olive"],
    "description": "Vibrant coral enhances warm undertones and complements olive and medium complexions."
  },
  {
    "id": 35,
    "name": "Charcoal Pashmina",
    "image": "https://example.com/accessories/charcoal-pashmina.jpg",
    "price": 2499,
    "category": "Scarves & Shawls",
    "skinToneCompatibility": ["Medium", "Dark", "Cool"],
    "description": "Deep charcoal adds sophistication to medium and dark skin tones while complementing cool undertones."
  },
  {
    "id": 36,
    "name": "Cream Cotton Scarf",
    "image": "https://example.com/accessories/cream-scarf.jpg",
    "price": 1199,
    "category": "Scarves & Shawls",
    "skinToneCompatibility": ["Dark", "Warm", "Neutral"],
    "description": "Soft cream provides elegant contrast against darker skin tones and enhances warm undertones."
  },
  {
    "id": 37,
    "name": "Pearl Hair Clips",
    "image": "https://example.com/accessories/pearl-clips.jpg",
    "price": 899,
    "category": "Hair Accessories",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Classic pearls brighten fair skin and harmonize with cool undertones."
  },
  {
    "id": 38,
    "name": "Gold Headband",
    "image": "https://example.com/accessories/gold-headband.jpg",
    "price": 1299,
    "category": "Hair Accessories",
    "skinToneCompatibility": ["Dark", "Olive", "Warm"],
    "description": "Warm gold tones highlight the richness in darker and olive skin tones."
  },
  {
    "id": 39,
    "name": "Floral Hair Scrunchie",
    "image": "https://example.com/accessories/floral-scrunchie.jpg",
    "price": 499,
    "category": "Hair Accessories",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Soft floral patterns complement fair skin and cool undertones."
  },
  {
    "id": 40,
    "name": "Turquoise Hair Pins",
    "image": "https://example.com/accessories/turquoise-pins.jpg",
    "price": 799,
    "category": "Hair Accessories",
    "skinToneCompatibility": ["Warm", "Olive", "Medium"],
    "description": "Vibrant turquoise enhances warm undertones and complements olive and medium skin tones."
  },
  {
    "id": 41,
    "name": "Silver Bobby Pins",
    "image": "https://example.com/accessories/silver-pins.jpg",
    "price": 599,
    "category": "Hair Accessories",
    "skinToneCompatibility": ["Fair", "Cool", "Olive"],
    "description": "Cool silver brightens fair skin and complements olive undertones."
  },
  {
    "id": 42,
    "name": "Copper Hair Combs",
    "image": "https://example.com/accessories/copper-combs.jpg",
    "price": 1099,
    "category": "Hair Accessories",
    "skinToneCompatibility": ["Warm", "Medium", "Olive"],
    "description": "Warm copper tones enhance medium and olive skin with warm undertones."
  },
  {
    "id": 43,
    "name": "Ivory Headband",
    "image": "https://example.com/accessories/ivory-headband.jpg",
    "price": 999,
    "category": "Hair Accessories",
    "skinToneCompatibility": ["Dark", "Warm", "Olive"],
    "description": "Soft ivory provides elegant contrast against darker skin tones and enhances warm undertones."
  },
  {
    "id": 44,
    "name": "Navy Blue Scrunchie",
    "image": "https://example.com/accessories/navy-scrunchie.jpg",
    "price": 399,
    "category": "Hair Accessories",
    "skinToneCompatibility": ["Fair", "Medium", "Olive"],
    "description": "Classic navy enhances fair and olive complexions for versatile styling."
  },
  {
    "id": 45,
    "name": "Burgundy Hair Clip",
    "image": "https://example.com/accessories/burgundy-clip.jpg",
    "price": 699,
    "category": "Hair Accessories",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Rich burgundy adds warmth to fair complexions and complements cool undertones."
  },
  {
    "id": 46,
    "name": "Beige Hair Scarf",
    "image": "https://example.com/accessories/beige-hair-scarf.jpg",
    "price": 899,
    "category": "Hair Accessories",
    "skinToneCompatibility": ["Dark", "Warm", "Neutral"],
    "description": "Light beige tones balance darker and warm skin tones for elegant hair styling."
  },
  {
    "id": 47,
    "name": "Rose Gold Hair Pins",
    "image": "https://example.com/accessories/rosegold-pins.jpg",
    "price": 1199,
    "category": "Hair Accessories",
    "skinToneCompatibility": ["Fair", "Medium", "Warm"],
    "description": "Soft rose gold adds warmth to fair and medium complexions with warm undertones."
  },
  {
    "id": 48,
    "name": "Emerald Green Headband",
    "image": "https://example.com/accessories/emerald-headband.jpg",
    "price": 1399,
    "category": "Hair Accessories",
    "skinToneCompatibility": ["Warm", "Olive", "Medium"],
    "description": "Rich emerald enhances warm undertones and complements olive and medium complexions."
  }
] ,
Watches : [
  {
    "id": 1,
    "name": "Rose Gold Formal Watch",
    "image": "https://example.com/watches/rose-gold-formal.jpg",
    "price": 3499,
    "category": "Formal",
    "skinToneCompatibility": ["Fair", "Warm", "Neutral"],
    "description": "Rose gold adds elegance and complements fair and warm undertones, perfect for formal wear."
  },
  {
    "id": 2,
    "name": "Silver Mesh Formal Watch",
    "image": "https://example.com/watches/silver-mesh.jpg",
    "price": 3999,
    "category": "Formal",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Cool silver mesh brightens fair skin and complements cool undertones for professional settings."
  },
  {
    "id": 3,
    "name": "Gold Ceramic Formal Watch",
    "image": "https://example.com/watches/gold-ceramic.jpg",
    "price": 4499,
    "category": "Formal",
    "skinToneCompatibility": ["Medium", "Dark", "Warm"],
    "description": "Rich gold ceramic enhances warm undertones in medium and dark skin tones for elegant occasions."
  },
  {
    "id": 4,
    "name": "White Mother-of-Pearl Watch",
    "image": "https://example.com/watches/white-mop.jpg",
    "price": 4999,
    "category": "Formal",
    "skinToneCompatibility": ["Medium", "Dark", "Olive", "Warm"],
    "description": "White mother-of-pearl creates striking contrast against deeper skin tones and enhances warm undertones."
  },
  {
    "id": 5,
    "name": "Platinum Stainless Steel Watch",
    "image": "https://example.com/watches/platinum-steel.jpg",
    "price": 5499,
    "category": "Formal",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Cool platinum tones brighten fair skin and enhance cool undertones for sophisticated formal wear."
  },
  {
    "id": 6,
    "name": "Two-Tone Gold & Silver Watch",
    "image": "https://example.com/watches/two-tone.jpg",
    "price": 4799,
    "category": "Formal",
    "skinToneCompatibility": ["Medium", "Neutral", "Olive"],
    "description": "Versatile two-tone design complements medium and olive skin tones with neutral undertones."
  },
  {
    "id": 7,
    "name": "Black Ceramic Formal Watch",
    "image": "https://example.com/watches/black-ceramic.jpg",
    "price": 4299,
    "category": "Formal",
    "skinToneCompatibility": ["Fair", "Dark", "Neutral"],
    "description": "Sleek black ceramic creates elegant contrast against both fair and dark skin tones."
  },
  {
    "id": 8,
    "name": "Champagne Dial Watch",
    "image": "https://example.com/watches/champagne-dial.jpg",
    "price": 3999,
    "category": "Formal",
    "skinToneCompatibility": ["Warm", "Medium", "Olive"],
    "description": "Warm champagne dial enhances medium and olive skin tones with warm undertones."
  },
  {
    "id": 9,
    "name": "Diamond-Accented Watch",
    "image": "https://example.com/watches/diamond-accent.jpg",
    "price": 6999,
    "category": "Formal",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Sparkling diamonds brighten fair skin and complement cool undertones for formal elegance."
  },
  {
    "id": 10,
    "name": "Blue Dial Formal Watch",
    "image": "https://example.com/watches/blue-dial.jpg",
    "price": 4599,
    "category": "Formal",
    "skinToneCompatibility": ["Fair", "Cool", "Olive"],
    "description": "Cool blue dial brightens fair skin and harmonizes with cool and olive undertones."
  },
  {
    "id": 11,
    "name": "Yellow Gold Bracelet Watch",
    "image": "https://example.com/watches/yellow-gold.jpg",
    "price": 5999,
    "category": "Formal",
    "skinToneCompatibility": ["Medium", "Dark", "Warm", "Olive"],
    "description": "Classic yellow gold enhances warm undertones in medium, dark, and olive skin tones."
  },
  {
    "id": 12,
    "name": "Rose Gold Mesh Watch",
    "image": "https://example.com/watches/rosegold-mesh.jpg",
    "price": 4299,
    "category": "Formal",
    "skinToneCompatibility": ["Fair", "Warm", "Neutral"],
    "description": "Delicate rose gold mesh adds warmth to fair skin and complements warm undertones."
  },
  {
    "id": 13,
    "name": "White Ceramic Bracelet Watch",
    "image": "https://example.com/watches/white-ceramic-bracelet.jpg",
    "price": 4699,
    "category": "Formal",
    "skinToneCompatibility": ["Medium", "Dark", "Olive", "Warm"],
    "description": "Clean white ceramic creates striking contrast against deeper skin tones and warm undertones."
  },
  {
    "id": 14,
    "name": "Silver-Tone Roman Numeral Watch",
    "image": "https://example.com/watches/silver-roman.jpg",
    "price": 3799,
    "category": "Formal",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Classic silver with Roman numerals brightens fair skin and complements cool undertones."
  },
  {
    "id": 15,
    "name": "Gold-Tone Link Bracelet Watch",
    "image": "https://example.com/watches/gold-link.jpg",
    "price": 5299,
    "category": "Formal",
    "skinToneCompatibility": ["Medium", "Dark", "Warm", "Olive"],
    "description": "Substantial gold links enhance warm undertones in medium, dark, and olive skin tones."
  },
  {
    "id": 16,
    "name": "Two-Tone Bezel Watch",
    "image": "https://example.com/watches/two-tone-bezel.jpg",
    "price": 4599,
    "category": "Formal",
    "skinToneCompatibility": ["Medium", "Neutral", "Olive"],
    "description": "Versatile two-tone bezel complements medium and olive skin tones with neutral undertones."
  },
  {
    "id": 17,
    "name": "Black Dial Rose Gold Watch",
    "image": "https://example.com/watches/black-dial-rosegold.jpg",
    "price": 4899,
    "category": "Formal",
    "skinToneCompatibility": ["Fair", "Warm", "Neutral"],
    "description": "Contrasting black dial with rose gold case adds elegance to fair and warm skin tones."
  },
  {
    "id": 18,
    "name": "Mother-of-Pearl Dial Watch",
    "image": "https://example.com/watches/mop-dial.jpg",
    "price": 5399,
    "category": "Formal",
    "skinToneCompatibility": ["Medium", "Dark", "Olive", "Warm"],
    "description": "Iridescent mother-of-pearl dial enhances deeper skin tones and warm undertones."
  },
  {
    "id": 19,
    "name": "Platinum Mesh Bracelet Watch",
    "image": "https://example.com/watches/platinum-mesh.jpg",
    "price": 6499,
    "category": "Formal",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Luxurious platinum mesh brightens fair skin and enhances cool undertones."
  },
  {
    "id": 20,
    "name": "Green Dial Formal Watch",
    "image": "https://example.com/watches/green-dial.jpg",
    "price": 4399,
    "category": "Formal",
    "skinToneCompatibility": ["Warm", "Olive", "Medium"],
    "description": "Rich green dial enhances warm undertones and complements olive and medium skin tones."
  },
  {
    "id": 21,
    "name": "Diamond Bezel Watch",
    "image": "https://example.com/watches/diamond-bezel.jpg",
    "price": 7999,
    "category": "Formal",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Sparkling diamond bezel brightens fair skin and complements cool undertones."
  },
  {
    "id": 22,
    "name": "Rose Gold Leather Strap Watch",
    "image": "https://example.com/watches/rosegold-leather.jpg",
    "price": 4199,
    "category": "Formal",
    "skinToneCompatibility": ["Fair", "Warm", "Neutral"],
    "description": "Rose gold case with leather strap adds warmth to fair and neutral skin tones."
  },
  {
    "id": 23,
    "name": "Gold Ceramic Bracelet Watch",
    "image": "https://example.com/watches/gold-ceramic-bracelet.jpg",
    "price": 5199,
    "category": "Formal",
    "skinToneCompatibility": ["Medium", "Dark", "Warm", "Olive"],
    "description": "Luxurious gold ceramic enhances warm undertones in deeper skin tones."
  },
  {
    "id": 24,
    "name": "Silver-Tone Moonphase Watch",
    "image": "https://example.com/watches/silver-moonphase.jpg",
    "price": 5699,
    "category": "Formal",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Elegant silver moonphase brightens fair skin and complements cool undertones."
  },
  {
    "id": 25,
    "name": "Two-Tone Bracelet Watch",
    "image": "https://example.com/watches/two-tone-bracelet.jpg",
    "price": 4999,
    "category": "Formal",
    "skinToneCompatibility": ["Medium", "Neutral", "Olive"],
    "description": "Classic two-tone bracelet complements medium and olive skin tones with neutral undertones."
  },
  {
    "id": 26,
    "name": "Black Ceramic Rose Gold Watch",
    "image": "https://example.com/watches/black-ceramic-rosegold.jpg",
    "price": 5399,
    "category": "Formal",
    "skinToneCompatibility": ["Fair", "Warm", "Neutral"],
    "description": "Striking black ceramic with rose gold accents adds elegance to fair and warm skin tones."
  },
  {
    "id": 27,
    "name": "White Gold Diamond Watch",
    "image": "https://example.com/watches/white-gold-diamond.jpg",
    "price": 8999,
    "category": "Formal",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Luxurious white gold with diamonds brightens fair skin and enhances cool undertones."
  },
  {
    "id": 28,
    "name": "Brown Leather Strap Watch",
    "image": "https://example.com/watches/brown-leather.jpg",
    "price": 3299,
    "category": "Formal",
    "skinToneCompatibility": ["Medium", "Olive", "Warm"],
    "description": "Classic brown leather strap enhances warm undertones in medium and olive skin tones."
  },
  {
    "id": 29,
    "name": "Gold-Tone Skeleton Watch",
    "image": "https://example.com/watches/gold-skeleton.jpg",
    "price": 6299,
    "category": "Formal",
    "skinToneCompatibility": ["Medium", "Dark", "Warm", "Olive"],
    "description": "Intricate gold skeleton design enhances warm undertones in deeper skin tones."
  },
  {
    "id": 30,
    "name": "Blue Ceramic Watch",
    "image": "https://example.com/watches/blue-ceramic.jpg",
    "price": 4799,
    "category": "Formal",
    "skinToneCompatibility": ["Fair", "Cool", "Olive"],
    "description": "Vibrant blue ceramic brightens fair skin and harmonizes with cool and olive undertones."
  },
  {
    "id": 31,
    "name": "Leather Strap Casual Watch",
    "image": "https://example.com/watches/leather-strap.jpg",
    "price": 2499,
    "category": "Casual",
    "skinToneCompatibility": ["Medium", "Olive", "Warm"],
    "description": "Brown leather strap enhances warm undertones in medium and olive skin tones for everyday wear."
  },
  {
    "id": 32,
    "name": "Rose Gold Casual Watch",
    "image": "https://example.com/watches/rose-gold-casual.jpg",
    "price": 2999,
    "category": "Casual",
    "skinToneCompatibility": ["Fair", "Warm", "Neutral"],
    "description": "Warm rose gold adds elegance to fair skin and complements warm undertones for casual styling."
  },
  {
    "id": 33,
    "name": "Navy Silicone Watch",
    "image": "https://example.com/watches/navy-silicone.jpg",
    "price": 1999,
    "category": "Casual",
    "skinToneCompatibility": ["Fair", "Cool", "Olive"],
    "description": "Cool navy silicone brightens fair skin and harmonizes with cool and olive undertones."
  },
  {
    "id": 34,
    "name": "Gold-Tone Casual Watch",
    "image": "https://example.com/watches/gold-tone.jpg",
    "price": 2299,
    "category": "Casual",
    "skinToneCompatibility": ["Medium", "Dark", "Warm"],
    "description": "Warm gold-tone enhances medium and dark skin tones with warm undertones for everyday elegance."
  },
  {
    "id": 35,
    "name": "Silver Mesh Casual Watch",
    "image": "https://example.com/watches/silver-mesh-casual.jpg",
    "price": 2699,
    "category": "Casual",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Cool silver mesh brightens fair skin and complements cool undertones for versatile casual wear."
  },
  {
    "id": 36,
    "name": "Beige Strap Watch",
    "image": "https://example.com/watches/beige-strap.jpg",
    "price": 2199,
    "category": "Casual",
    "skinToneCompatibility": ["Dark", "Warm", "Neutral"],
    "description": "Light beige strap balances darker and warm skin tones for relaxed everyday styling."
  },
  {
    "id": 37,
    "name": "Black Stainless Steel Watch",
    "image": "https://example.com/watches/black-steel.jpg",
    "price": 2799,
    "category": "Casual",
    "skinToneCompatibility": ["Fair", "Dark", "Neutral"],
    "description": "Sleek black stainless steel creates versatile contrast against both fair and dark skin tones."
  },
  {
    "id": 38,
    "name": "Turquoise Accent Watch",
    "image": "https://example.com/watches/turquoise-accent.jpg",
    "price": 2399,
    "category": "Casual",
    "skinToneCompatibility": ["Warm", "Olive", "Medium"],
    "description": "Vibrant turquoise enhances warm undertones and complements olive and medium skin tones."
  },
  {
    "id": 39,
    "name": "Two-Tone Casual Watch",
    "image": "https://example.com/watches/two-tone-casual.jpg",
    "price": 2999,
    "category": "Casual",
    "skinToneCompatibility": ["Medium", "Neutral", "Olive"],
    "description": "Versatile two-tone design complements medium and olive skin tones with neutral undertones."
  },
  {
    "id": 40,
    "name": "Burgundy Leather Watch",
    "image": "https://example.com/watches/burgundy-leather.jpg",
    "price": 2599,
    "category": "Casual",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Rich burgundy leather adds warmth to fair complexions and complements cool undertones."
  },
  {
    "id": 41,
    "name": "Rose Gold Silicone Watch",
    "image": "https://example.com/watches/rosegold-silicone.jpg",
    "price": 2299,
    "category": "Casual",
    "skinToneCompatibility": ["Fair", "Warm", "Neutral"],
    "description": "Sporty rose gold silicone adds warmth to fair skin and complements warm undertones."
  },
  {
    "id": 42,
    "name": "Green Canvas Strap Watch",
    "image": "https://example.com/watches/green-canvas.jpg",
    "price": 1999,
    "category": "Casual",
    "skinToneCompatibility": ["Warm", "Olive", "Medium"],
    "description": "Earthy green canvas enhances warm undertones and complements olive and medium skin tones."
  },
  {
    "id": 43,
    "name": "Silver-Tone Sport Watch",
    "image": "https://example.com/watches/silver-sport.jpg",
    "price": 2499,
    "category": "Casual",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Athletic silver-tone brightens fair skin and complements cool undertones for active wear."
  },
  {
    "id": 44,
    "name": "Gold Mesh Bracelet Watch",
    "image": "https://example.com/watches/gold-mesh-casual.jpg",
    "price": 3299,
    "category": "Casual",
    "skinToneCompatibility": ["Medium", "Dark", "Warm", "Olive"],
    "description": "Shimmering gold mesh enhances warm undertones in deeper skin tones for casual elegance."
  },
  {
    "id": 45,
    "name": "White Ceramic Casual Watch",
    "image": "https://example.com/watches/white-ceramic-casual.jpg",
    "price": 2799,
    "category": "Casual",
    "skinToneCompatibility": ["Medium", "Dark", "Olive", "Warm"],
    "description": "Clean white ceramic creates striking contrast against deeper skin tones and warm undertones."
  },
  {
    "id": 46,
    "name": "Black Rubber Watch",
    "image": "https://example.com/watches/black-rubber.jpg",
    "price": 2199,
    "category": "Casual",
    "skinToneCompatibility": ["Fair", "Dark", "Neutral"],
    "description": "Sporty black rubber creates versatile contrast against both fair and dark skin tones."
  },
  {
    "id": 47,
    "name": "Purple Silicone Watch",
    "image": "https://example.com/watches/purple-silicone.jpg",
    "price": 2099,
    "category": "Casual",
    "skinToneCompatibility": ["Cool", "Fair", "Neutral"],
    "description": "Vibrant purple silicone brightens fair skin and complements cool undertones."
  },
  {
    "id": 48,
    "name": "Tan Leather Strap Watch",
    "image": "https://example.com/watches/tan-leather.jpg",
    "price": 2399,
    "category": "Casual",
    "skinToneCompatibility": ["Warm", "Medium", "Olive"],
    "description": "Warm tan leather enhances medium and olive skin tones with warm undertones."
  },
  {
    "id": 49,
    "name": "Rose Gold Mesh Watch",
    "image": "https://example.com/watches/rosegold-mesh-casual.jpg",
    "price": 3199,
    "category": "Casual",
    "skinToneCompatibility": ["Fair", "Warm", "Neutral"],
    "description": "Delicate rose gold mesh adds warmth to fair skin and complements warm undertones."
  },
  {
    "id": 50,
    "name": "Navy Leather Strap Watch",
    "image": "https://example.com/watches/navy-leather.jpg",
    "price": 2599,
    "category": "Casual",
    "skinToneCompatibility": ["Fair", "Cool", "Olive"],
    "description": "Classic navy leather brightens fair skin and harmonizes with cool and olive undertones."
  },
  {
    "id": 51,
    "name": "Gold-Tone Sport Watch",
    "image": "https://example.com/watches/gold-sport.jpg",
    "price": 2699,
    "category": "Casual",
    "skinToneCompatibility": ["Medium", "Dark", "Warm", "Olive"],
    "description": "Athletic gold-tone enhances warm undertones in deeper skin tones for active wear."
  },
  {
    "id": 52,
    "name": "Silver-Tone Minimalist Watch",
    "image": "https://example.com/watches/silver-minimalist.jpg",
    "price": 2299,
    "category": "Casual",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Clean silver design brightens fair skin and complements cool undertones for everyday wear."
  },
  {
    "id": 53,
    "name": "Two-Tone Silicone Watch",
    "image": "https://example.com/watches/two-tone-silicone.jpg",
    "price": 2499,
    "category": "Casual",
    "skinToneCompatibility": ["Medium", "Neutral", "Olive"],
    "description": "Sporty two-tone silicone complements medium and olive skin tones with neutral undertones."
  },
  {
    "id": 54,
    "name": "Coral Silicone Watch",
    "image": "https://example.com/watches/coral-silicone.jpg",
    "price": 2199,
    "category": "Casual",
    "skinToneCompatibility": ["Warm", "Medium", "Olive"],
    "description": "Vibrant coral enhances warm undertones and complements olive and medium skin tones."
  },
  {
    "id": 55,
    "name": "Black Ceramic Casual Watch",
    "image": "https://example.com/watches/black-ceramic-casual.jpg",
    "price": 2899,
    "category": "Casual",
    "skinToneCompatibility": ["Fair", "Dark", "Neutral"],
    "description": "Sleek black ceramic creates versatile contrast against both fair and dark skin tones."
  },
  {
    "id": 56,
    "name": "Rose Gold Leather Watch",
    "image": "https://example.com/watches/rosegold-leather-casual.jpg",
    "price": 2999,
    "category": "Casual",
    "skinToneCompatibility": ["Fair", "Warm", "Neutral"],
    "description": "Rose gold with leather strap adds warmth to fair skin and complements warm undertones."
  },
  {
    "id": 57,
    "name": "Silver-Tone Digital Watch",
    "image": "https://example.com/watches/silver-digital.jpg",
    "price": 1999,
    "category": "Casual",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Modern silver digital brightens fair skin and complements cool undertones for tech-savvy wear."
  },
  {
    "id": 58,
    "name": "Wooden Strap Watch",
    "image": "https://example.com/watches/wooden-strap.jpg",
    "price": 2499,
    "category": "Casual",
    "skinToneCompatibility": ["Warm", "Medium", "Olive"],
    "description": "Natural wooden strap enhances warm undertones and complements olive and medium skin tones."
  },
  {
    "id": 59,
    "name": "Gold-Tone Chronograph Watch",
    "image": "https://example.com/watches/gold-chronograph.jpg",
    "price": 3299,
    "category": "Casual",
    "skinToneCompatibility": ["Medium", "Dark", "Warm", "Olive"],
    "description": "Sporty gold chronograph enhances warm undertones in deeper skin tones for active wear."
  },
  {
    "id": 60,
    "name": "Teal Silicone Watch",
    "image": "https://example.com/watches/teal-silicone.jpg",
    "price": 2299,
    "category": "Casual",
    "skinToneCompatibility": ["Cool", "Fair", "Olive"],
    "description": "Vibrant teal silicone brightens fair skin and harmonizes with cool and olive undertones."
  }
],

Footwear : [
  {
    "id": 1,
    "name": "Black Stiletto Heels",
    "image": "https://example.com/footwear/black-stilettos.jpg",
    "price": 3999,
    "category": "Formal",
    "skinToneCompatibility": ["Fair", "Dark", "Neutral"],
    "description": "Classic black stilettos create elegant contrast against both fair and dark skin tones."
  },
  {
    "id": 2,
    "name": "Navy Blue Pumps",
    "image": "https://example.com/footwear/navy-pumps.jpg",
    "price": 3499,
    "category": "Formal",
    "skinToneCompatibility": ["Fair", "Cool", "Olive"],
    "description": "Cool navy brightens fair skin and harmonizes with cool and olive undertones."
  },
  {
    "id": 3,
    "name": "Nude Block Heels",
    "image": "https://example.com/footwear/nude-block.jpg",
    "price": 3299,
    "category": "Formal",
    "skinToneCompatibility": ["Medium", "Dark", "Warm"],
    "description": "Nude tones elongate legs and complement deeper skin tones with warm undertones."
  },
  {
    "id": 4,
    "name": "Silver Evening Heels",
    "image": "https://example.com/footwear/silver-heels.jpg",
    "price": 4599,
    "category": "Formal",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Metallic silver brightens fair skin and enhances cool undertones for formal events."
  },
  {
    "id": 5,
    "name": "Burgundy Court Shoes",
    "image": "https://example.com/footwear/burgundy-court.jpg",
    "price": 3799,
    "category": "Formal",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Rich burgundy adds warmth to fair complexions and complements cool undertones."
  },
  {
    "id": 6,
    "name": "Gold Strappy Heels",
    "image": "https://example.com/footwear/gold-strappy.jpg",
    "price": 4299,
    "category": "Formal",
    "skinToneCompatibility": ["Medium", "Dark", "Warm"],
    "description": "Warm gold enhances deeper skin tones and brings out warmth in olive complexions."
  },
  {
    "id": 7,
    "name": "White Peep-Toe Heels",
    "image": "https://example.com/footwear/white-peep.jpg",
    "price": 3199,
    "category": "Formal",
    "skinToneCompatibility": ["Medium", "Dark", "Olive", "Warm"],
    "description": "Crisp white creates striking contrast against deeper skin tones and warm undertones."
  },
  {
    "id": 8,
    "name": "Emerald Green Heels",
    "image": "https://example.com/footwear/emerald-heels.jpg",
    "price": 3899,
    "category": "Formal",
    "skinToneCompatibility": ["Warm", "Olive", "Medium"],
    "description": "Rich emerald enhances warm undertones and complements olive and medium skin tones."
  },
  {
    "id": 9,
    "name": "Platinum Pumps",
    "image": "https://example.com/footwear/platinum-pumps.jpg",
    "price": 4999,
    "category": "Formal",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Cool platinum brightens fair skin and enhances cool undertones for sophisticated wear."
  },
  {
    "id": 10,
    "name": "Rose Gold Heels",
    "image": "https://example.com/footwear/rosegold-heels.jpg",
    "price": 4399,
    "category": "Formal",
    "skinToneCompatibility": ["Fair", "Warm", "Neutral"],
    "description": "Warm rose gold adds elegance to fair skin and complements warm undertones."
  },
  {
    "id": 11,
    "name": "Black Ankle Boots",
    "image": "https://example.com/footwear/black-ankle.jpg",
    "price": 3699,
    "category": "Formal",
    "skinToneCompatibility": ["Fair", "Dark", "Neutral"],
    "description": "Sleek black ankle boots create versatile contrast against fair and dark skin tones."
  },
  {
    "id": 12,
    "name": "Ivory Lace Heels",
    "image": "https://example.com/footwear/ivory-lace.jpg",
    "price": 4699,
    "category": "Formal",
    "skinToneCompatibility": ["Dark", "Warm", "Olive"],
    "description": "Soft ivory provides elegant contrast against darker skin tones and warm undertones."
  },
  {
    "id": 13,
    "name": "Sapphire Blue Heels",
    "image": "https://example.com/footwear/sapphire-heels.jpg",
    "price": 4099,
    "category": "Formal",
    "skinToneCompatibility": ["Fair", "Cool", "Olive"],
    "description": "Vibrant sapphire brightens fair skin and harmonizes with cool and olive undertones."
  },
  {
    "id": 14,
    "name": "Coral Pumps",
    "image": "https://example.com/footwear/coral-pumps.jpg",
    "price": 3599,
    "category": "Formal",
    "skinToneCompatibility": ["Warm", "Medium", "Olive"],
    "description": "Vibrant coral enhances warm undertones and complements olive and medium skin tones."
  },
  {
    "id": 15,
    "name": "Two-Tone Heels",
    "image": "https://example.com/footwear/two-tone-heels.jpg",
    "price": 4199,
    "category": "Formal",
    "skinToneCompatibility": ["Medium", "Neutral", "Olive"],
    "description": "Versatile two-tone design complements medium and olive skin tones with neutral undertones."
  },
  {
    "id": 16,
    "name": "Brown Loafers",
    "image": "https://example.com/footwear/brown-loafers.jpg",
    "price": 2799,
    "category": "Informal",
    "skinToneCompatibility": ["Medium", "Olive", "Warm"],
    "description": "Classic brown leather enhances warm undertones in medium and olive skin tones."
  },
  {
    "id": 17,
    "name": "Black Ballet Flats",
    "image": "https://example.com/footwear/black-ballet.jpg",
    "price": 2299,
    "category": "Informal",
    "skinToneCompatibility": ["Fair", "Dark", "Neutral"],
    "description": "Versatile black creates contrast against both fair and dark skin tones."
  },
  {
    "id": 18,
    "name": "Nude Low Heels",
    "image": "https://example.com/footwear/nude-low.jpg",
    "price": 2599,
    "category": "Informal",
    "skinToneCompatibility": ["Medium", "Dark", "Warm"],
    "description": "Nude tones elongate legs and complement deeper skin tones with warm undertones."
  },
  {
    "id": 19,
    "name": "Grey Mules",
    "image": "https://example.com/footwear/grey-mules.jpg",
    "price": 2399,
    "category": "Informal",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Soft grey complements fair skin and cool undertones for effortless style."
  },
  {
    "id": 20,
    "name": "Leather Ankle Boots",
    "image": "https://example.com/footwear/leather-ankle.jpg",
    "price": 3299,
    "category": "Informal",
    "skinToneCompatibility": ["Fair", "Dark", "Neutral"],
    "description": "Classic leather ankle boots create contrast against fair and dark skin tones."
  },
  {
    "id": 21,
    "name": "Suede Loafers",
    "image": "https://example.com/footwear/suede-loafers.jpg",
    "price": 2999,
    "category": "Informal",
    "skinToneCompatibility": ["Fair", "Cool", "Olive"],
    "description": "Soft suede brightens fair skin and harmonizes with cool and olive undertones."
  },
  {
    "id": 22,
    "name": "Burgundy Flats",
    "image": "https://example.com/footwear/burgundy-flats.jpg",
    "price": 2499,
    "category": "Informal",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Rich burgundy adds warmth to fair complexions and complements cool undertones."
  },
  {
    "id": 23,
    "name": "Tan Ankle Boots",
    "image": "https://example.com/footwear/tan-ankle.jpg",
    "price": 3099,
    "category": "Informal",
    "skinToneCompatibility": ["Warm", "Medium", "Olive"],
    "description": "Warm tan tones enhance medium and olive skin tones for casual elegance."
  },
  {
    "id": 24,
    "name": "Silver Flats",
    "image": "https://example.com/footwear/silver-flats.jpg",
    "price": 2699,
    "category": "Informal",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Metallic silver brightens fair skin and complements cool undertones."
  },
  {
    "id": 25,
    "name": "Olive Green Flats",
    "image": "https://example.com/footwear/olive-flats.jpg",
    "price": 2399,
    "category": "Informal",
    "skinToneCompatibility": ["Warm", "Olive", "Medium"],
    "description": "Earthy olive enhances warm undertones and complements olive and medium skin tones."
  },
  {
    "id": 26,
    "name": "Pointed Toe Flats",
    "image": "https://example.com/footwear/pointed-flats.jpg",
    "price": 2199,
    "category": "Informal",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Classic pointed toe brightens fair skin and complements cool undertones."
  },
  {
    "id": 27,
    "name": "Coral Loafers",
    "image": "https://example.com/footwear/coral-loafers.jpg",
    "price": 2599,
    "category": "Informal",
    "skinToneCompatibility": ["Warm", "Medium", "Olive"],
    "description": "Vibrant coral enhances warm undertones and complements olive and medium skin tones."
  },
  {
    "id": 28,
    "name": "Chelsea Boots",
    "image": "https://example.com/footwear/chelsea-boots.jpg",
    "price": 3499,
    "category": "Informal",
    "skinToneCompatibility": ["Fair", "Dark", "Neutral"],
    "description": "Sleek Chelsea boots create contrast against both fair and dark skin tones."
  },
  {
    "id": 29,
    "name": "Beige Ballerinas",
    "image": "https://example.com/footwear/beige-ballerinas.jpg",
    "price": 1999,
    "category": "Informal",
    "skinToneCompatibility": ["Dark", "Warm", "Neutral"],
    "description": "Light beige balances darker skin tones and enhances warm undertones."
  },
  {
    "id": 30,
    "name": "Two-Tone Flats",
    "image": "https://example.com/footwear/two-tone-flats.jpg",
    "price": 2799,
    "category": "Informal",
    "skinToneCompatibility": ["Medium", "Neutral", "Olive"],
    "description": "Versatile two-tone design complements medium and olive skin tones."
  },
  {
    "id": 31,
    "name": "White Sneakers",
    "image": "https://example.com/footwear/white-sneakers.jpg",
    "price": 2499,
    "category": "Casual",
    "skinToneCompatibility": ["Medium", "Dark", "Olive", "Warm"],
    "description": "Clean white creates striking contrast against deeper skin tones and warm undertones."
  },
  {
    "id": 32,
    "name": "Black Sneakers",
    "image": "https://example.com/footwear/black-sneakers.jpg",
    "price": 2799,
    "category": "Casual",
    "skinToneCompatibility": ["Fair", "Dark", "Neutral"],
    "description": "Versatile black creates contrast against both fair and dark skin tones."
  },
  {
    "id": 33,
    "name": "Navy Blue Sneakers",
    "image": "https://example.com/footwear/navy-sneakers.jpg",
    "price": 2999,
    "category": "Casual",
    "skinToneCompatibility": ["Fair", "Cool", "Olive"],
    "description": "Cool navy brightens fair skin and harmonizes with cool and olive undertones."
  },
  {
    "id": 34,
    "name": "Beige Sandals",
    "image": "https://example.com/footwear/beige-sandals.jpg",
    "price": 1799,
    "category": "Casual",
    "skinToneCompatibility": ["Dark", "Warm", "Neutral"],
    "description": "Light beige balances darker skin tones and enhances warm undertones."
  },
  {
    "id": 35,
    "name": "Pink Sneakers",
    "image": "https://example.com/footwear/pink-sneakers.jpg",
    "price": 2599,
    "category": "Casual",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Soft pink brightens fair skin and complements cool undertones."
  },
  {
    "id": 36,
    "name": "Brown Sandals",
    "image": "https://example.com/footwear/brown-sandals.jpg",
    "price": 1599,
    "category": "Casual",
    "skinToneCompatibility": ["Medium", "Olive", "Warm"],
    "description": "Natural brown enhances warm undertones in medium and olive skin tones."
  },
  {
    "id": 37,
    "name": "Grey Sneakers",
    "image": "https://example.com/footwear/grey-sneakers.jpg",
    "price": 2699,
    "category": "Casual",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Neutral grey complements fair skin and cool undertones."
  },
  {
    "id": 38,
    "name": "Turquoise Flip-Flops",
    "image": "https://example.com/footwear/turquoise-flip.jpg",
    "price": 999,
    "category": "Casual",
    "skinToneCompatibility": ["Warm", "Olive", "Medium"],
    "description": "Vibrant turquoise enhances warm undertones and complements olive and medium skin tones."
  },
  {
    "id": 39,
    "name": "Canvas Shoes",
    "image": "https://example.com/footwear/canvas-shoes.jpg",
    "price": 1999,
    "category": "Casual",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Light canvas complements fair skin and cool undertones for casual wear."
  },
  {
    "id": 40,
    "name": "Coral Sandals",
    "image": "https://example.com/footwear/coral-sandals.jpg",
    "price": 1499,
    "category": "Casual",
    "skinToneCompatibility": ["Warm", "Medium", "Olive"],
    "description": "Vibrant coral enhances warm undertones and complements olive and medium skin tones."
  },
  {
    "id": 41,
    "name": "Espadrilles",
    "image": "https://example.com/footwear/espadrilles.jpg",
    "price": 1899,
    "category": "Casual",
    "skinToneCompatibility": ["Warm", "Medium", "Olive"],
    "description": "Natural fibers enhance warm undertones in medium and olive skin tones."
  },
  {
    "id": 42,
    "name": "Slide Sandals",
    "image": "https://example.com/footwear/slides.jpg",
    "price": 1299,
    "category": "Casual",
    "skinToneCompatibility": ["Dark", "Warm", "Neutral"],
    "description": "Simple slides balance darker skin tones and enhance warm undertones."
  },
  {
    "id": 43,
    "name": "Lavender Sneakers",
    "image": "https://example.com/footwear/lavender-sneakers.jpg",
    "price": 2799,
    "category": "Casual",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Soft lavender brightens fair skin and complements cool undertones."
  },
  {
    "id": 44,
    "name": "Green Sneakers",
    "image": "https://example.com/footwear/green-sneakers.jpg",
    "price": 2499,
    "category": "Casual",
    "skinToneCompatibility": ["Warm", "Olive", "Medium"],
    "description": "Earthy green enhances warm undertones and complements olive and medium skin tones."
  },
  {
    "id": 45,
    "name": "Platform Sandals",
    "image": "https://example.com/footwear/platform-sandals.jpg",
    "price": 2199,
    "category": "Casual",
    "skinToneCompatibility": ["Medium", "Dark", "Warm"],
    "description": "Platform style enhances deeper skin tones with warm undertones."
  },
  {
    "id": 46,
    "name": "Golden Juttis",
    "image": "https://example.com/footwear/golden-juttis.jpg",
    "price": 2499,
    "category": "Traditional",
    "skinToneCompatibility": ["Warm", "Medium", "Olive"],
    "description": "Golden embroidery enhances warm undertones in medium and olive skin tones."
  },
  {
    "id": 47,
    "name": "Silver Mojaris",
    "image": "https://example.com/footwear/silver-mojaris.jpg",
    "price": 2299,
    "category": "Traditional",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Silver work brightens fair skin and complements cool undertones."
  },
  {
    "id": 48,
    "name": "Red Kolhapuris",
    "image": "https://example.com/footwear/red-kolhapuris.jpg",
    "price": 1999,
    "category": "Traditional",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Vibrant red adds warmth to fair complexions and complements cool undertones."
  },
  {
    "id": 49,
    "name": "Embroidered Juttis",
    "image": "https://example.com/footwear/embroidered-juttis.jpg",
    "price": 2799,
    "category": "Traditional",
    "skinToneCompatibility": ["Warm", "Medium", "Olive"],
    "description": "Colorful embroidery enhances warm undertones in medium and olive skin tones."
  },
  {
    "id": 50,
    "name": "Leather Nagra",
    "image": "https://example.com/footwear/leather-nagra.jpg",
    "price": 1799,
    "category": "Traditional",
    "skinToneCompatibility": ["Warm", "Medium", "Olive"],
    "description": "Traditional leather enhances warm undertones in medium and olive skin tones."
  },
  {
    "id": 51,
    "name": "Beaded Slippers",
    "image": "https://example.com/footwear/beaded-slippers.jpg",
    "price": 2999,
    "category": "Traditional",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Intricate beadwork brightens fair skin and complements cool undertones."
  },
  {
    "id": 52,
    "name": "Velvet Chappals",
    "image": "https://example.com/footwear/velvet-chappals.jpg",
    "price": 2199,
    "category": "Traditional",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Luxurious velvet brightens fair skin and complements cool undertones."
  },
  {
    "id": 53,
    "name": "Green Mojaris",
    "image": "https://example.com/footwear/green-mojaris.jpg",
    "price": 2399,
    "category": "Traditional",
    "skinToneCompatibility": ["Warm", "Olive", "Medium"],
    "description": "Earthy green enhances warm undertones and complements olive and medium skin tones."
  },
  {
    "id": 54,
    "name": "Pink Juttis",
    "image": "https://example.com/footwear/pink-juttis.jpg",
    "price": 2599,
    "category": "Traditional",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Soft pink brightens fair skin and complements cool undertones."
  },
  {
    "id": 55,
    "name": "Blue Kolhapuris",
    "image": "https://example.com/footwear/blue-kolhapuris.jpg",
    "price": 2099,
    "category": "Traditional",
    "skinToneCompatibility": ["Fair", "Cool", "Olive"],
    "description": "Cool blue brightens fair skin and harmonizes with cool and olive undertones."
  },
  {
    "id": 56,
    "name": "Zardosi Slippers",
    "image": "https://example.com/footwear/zardosi-slippers.jpg",
    "price": 3299,
    "category": "Traditional",
    "skinToneCompatibility": ["Warm", "Medium", "Olive"],
    "description": "Gold zardosi work enhances warm undertones in medium and olive skin tones."
  },
  {
    "id": 57,
    "name": "Mirror Work Juttis",
    "image": "https://example.com/footwear/mirror-juttis.jpg",
    "price": 2899,
    "category": "Traditional",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Reflective mirror work brightens fair skin and complements cool undertones."
  },
  {
    "id": 58,
    "name": "Cotton Chappals",
    "image": "https://example.com/footwear/cotton-chappals.jpg",
    "price": 1499,
    "category": "Traditional",
    "skinToneCompatibility": ["Warm", "Medium", "Olive"],
    "description": "Natural cotton enhances warm undertones in medium and olive skin tones."
  },
  {
    "id": 59,
    "name": "Silk Mojaris",
    "image": "https://example.com/footwear/silk-mojaris.jpg",
    "price": 2699,
    "category": "Traditional",
    "skinToneCompatibility": ["Fair", "Cool", "Neutral"],
    "description": "Luxurious silk brightens fair skin and complements cool undertones."
  },
  {
    "id": 60,
    "name": "Beaded Sandals",
    "image": "https://example.com/footwear/beaded-sandals.jpg",
    "price": 3199,
    "category": "Traditional",
    "skinToneCompatibility": ["Warm", "Medium", "Olive"],
    "description": "Colorful beads enhance warm undertones in medium and olive skin tones."
  }
],

Hairstyle : [
  {
    "id": 1,
    "name": "Long Layers",
    "image": "https://example.com/hairstyles/long-layers.jpg",
    "category": "Long",
    "faceShapeCompatibility": ["Oval", "Round"],
    "description": "Long layers add movement and soften the features of round faces while complementing oval proportions."
  },
  {
    "id": 2,
    "name": "Pixie Cut",
    "image": "https://example.com/hairstyles/pixie-cut.jpg",
    "category": "Short",
    "faceShapeCompatibility": ["Oval", "Heart"],
    "description": "The pixie cut highlights cheekbones and balances the wider forehead of heart-shaped faces while accentuating oval features."
  },
  {
    "id": 3,
    "name": "Blunt Bob",
    "image": "https://example.com/hairstyles/blunt-bob.jpg",
    "category": "Short",
    "faceShapeCompatibility": ["Square", "Oval"],
    "description": "The blunt bob softens angular features of square faces and complements the balanced proportions of oval faces."
  },
  {
    "id": 4,
    "name": "Side-Swept Bangs",
    "image": "https://example.com/hairstyles/side-swept-bangs.jpg",
    "category": "Bangs",
    "faceShapeCompatibility": ["Round", "Heart"],
    "description": "Side-swept bangs create diagonal lines that slim round faces and balance the wider forehead of heart-shaped faces."
  },
  {
    "id": 5,
    "name": "Beach Waves",
    "image": "https://example.com/hairstyles/beach-waves.jpg",
    "category": "Long",
    "faceShapeCompatibility": ["Diamond", "Oval"],
    "description": "Beach waves add width to narrow diamond faces and enhance the natural balance of oval faces."
  },
  {
    "id": 6,
    "name": "High Ponytail",
    "image": "https://example.com/hairstyles/high-ponytail.jpg",
    "category": "Updo",
    "faceShapeCompatibility": ["Oval", "Diamond"],
    "description": "The high ponytail elongates the neck and highlights the striking cheekbones of diamond faces while complementing oval proportions."
  },
  {
    "id": 7,
    "name": "Textured Lob",
    "image": "https://example.com/hairstyles/textured-lob.jpg",
    "category": "Medium",
    "faceShapeCompatibility": ["Round", "Square"],
    "description": "The textured lob adds movement and softness to round faces while breaking up the strong lines of square faces."
  },
  {
    "id": 8,
    "name": "Asymmetrical Cut",
    "image": "https://example.com/hairstyles/asymmetrical-cut.jpg",
    "category": "Short",
    "faceShapeCompatibility": ["Heart", "Diamond"],
    "description": "The asymmetrical cut draws attention away from the wider forehead of heart-shaped faces and balances narrow diamond chins."
  },
  {
    "id": 9,
    "name": "Curly Shag",
    "image": "https://example.com/hairstyles/curly-shag.jpg",
    "category": "Curly",
    "faceShapeCompatibility": ["Oval", "Round"],
    "description": "The curly shag adds volume and dimension to round faces while complementing the balanced proportions of oval faces."
  },
  {
    "id": 10,
    "name": "Curtain Bangs",
    "image": "https://example.com/hairstyles/curtain-bangs.jpg",
    "category": "Bangs",
    "faceShapeCompatibility": ["Oval", "Heart"],
    "description": "Curtain bangs frame the face beautifully, softening the forehead of heart-shaped faces and enhancing oval features."
  },
  {
    "id": 11,
    "name": "V-Cut Layers",
    "image": "https://example.com/hairstyles/v-cut-layers.jpg",
    "category": "Long",
    "faceShapeCompatibility": ["Diamond", "Oblong"],
    "description": "V-cut layers add width to narrow diamond faces and create the illusion of width in narrow oblong faces."
  },
  {
    "id": 12,
    "name": "Braided Updo",
    "image": "https://example.com/hairstyles/braided-updo.jpg",
    "category": "Updo",
    "faceShapeCompatibility": ["Square", "Oval"],
    "description": "The braided updo softens angular features of square faces and complements the balanced proportions of oval faces."
  },
  {
    "id": 13,
    "name": "Feathered Layers",
    "image": "https://example.com/hairstyles/feathered-layers.jpg",
    "category": "Medium",
    "faceShapeCompatibility": ["Round", "Heart"],
    "description": "Feathered layers add vertical lines that elongate round faces and balance the wider forehead of heart-shaped faces."
  },
  {
    "id": 14,
    "name": "Undercut Pixie",
    "image": "https://example.com/hairstyles/undercut-pixie.jpg",
    "category": "Short",
    "faceShapeCompatibility": ["Square", "Diamond"],
    "description": "The undercut pixie emphasizes the strong jawline of square faces and highlights the striking cheekbones of diamond faces."
  },
  {
    "id": 15,
    "name": "Soft Curls",
    "image": "https://example.com/hairstyles/soft-curls.jpg",
    "category": "Curly",
    "faceShapeCompatibility": ["Oval", "Square"],
    "description": "Soft curls add softness to angular features of square faces while complementing the balanced proportions of oval faces."
  },
  {
    "id": 16,
    "name": "Wispy Bangs",
    "image": "https://example.com/hairstyles/wispy-bangs.jpg",
    "category": "Bangs",
    "faceShapeCompatibility": ["Oval", "Diamond"],
    "description": "Wispy bangs soften the forehead and highlight the striking cheekbones of diamond faces while enhancing oval features."
  },
  {
    "id": 17,
    "name": "Blunt Cut with Bangs",
    "image": "https://example.com/hairstyles/blunt-bangs.jpg",
    "category": "Short",
    "faceShapeCompatibility": ["Oblong", "Heart"],
    "description": "The blunt cut with bangs shortens the appearance of long oblong faces and balances the wider forehead of heart-shaped faces."
  },
  {
    "id": 18,
    "name": "Messy Bun",
    "image": "https://example.com/hairstyles/messy-bun.jpg",
    "category": "Updo",
    "faceShapeCompatibility": ["Oval", "Heart"],
    "description": "The messy bun adds volume on top, balancing the wider forehead of heart-shaped faces while complementing oval proportions."
  },
  {
    "id": 19,
    "name": "Layered Bob",
    "image": "https://example.com/hairstyles/layered-bob.jpg",
    "category": "Medium",
    "faceShapeCompatibility": ["Round", "Diamond"],
    "description": "The layered bob adds volume and movement to round faces while softening the angular features of diamond faces."
  },
  {
    "id": 20,
    "name": "Angled Lob",
    "image": "https://example.com/hairstyles/angled-lob.jpg",
    "category": "Medium",
    "faceShapeCompatibility": ["Square", "Oblong"],
    "description": "The angled lob softens angular features of square faces and creates the illusion of width in narrow oblong faces."
  },
  {
    "id": 21,
    "name": "Tousled Waves",
    "image": "https://example.com/hairstyles/tousled-waves.jpg",
    "category": "Long",
    "faceShapeCompatibility": ["Square", "Heart"],
    "description": "Tousled waves add softness to angular features of square faces and balance the proportions of heart-shaped faces."
  },
  {
    "id": 22,
    "name": "Afro Puff",
    "image": "https://example.com/hairstyles/afro-puff.jpg",
    "category": "Curly",
    "faceShapeCompatibility": ["Oval", "Round"],
    "description": "The afro puff adds height and volume to round faces while complementing the balanced proportions of oval faces."
  },
  {
    "id": 23,
    "name": "Straight Across Bangs",
    "image": "https://example.com/hairstyles/straight-bangs.jpg",
    "category": "Bangs",
    "faceShapeCompatibility": ["Oval", "Oblong"],
    "description": "Straight across bangs shorten the appearance of long oblong faces and enhance the balanced proportions of oval faces."
  },
  {
    "id": 24,
    "name": "French Twist",
    "image": "https://example.com/hairstyles/french-twist.jpg",
    "category": "Updo",
    "faceShapeCompatibility": ["Diamond", "Oblong"],
    "description": "The French twist adds width to narrow diamond faces and creates the illusion of width in narrow oblong faces."
  },
  {
    "id": 25,
    "name": "Shaggy Layers",
    "image": "https://example.com/hairstyles/shaggy-layers.jpg",
    "category": "Medium",
    "faceShapeCompatibility": ["Round", "Square"],
    "description": "Shaggy layers add texture and movement to round faces while softening the strong lines of square faces."
  },
  {
    "id": 26,
    "name": "Pixie with Undercut",
    "image": "https://example.com/hairstyles/pixie-undercut.jpg",
    "category": "Short",
    "faceShapeCompatibility": "Heart",
    "description": "The pixie with undercut draws attention to the eyes and cheekbones, balancing the wider forehead of heart-shaped faces."
  },
  {
    "id": 27,
    "name": "Ringlets",
    "image": "https://example.com/hairstyles/ringlets.jpg",
    "category": "Curly",
    "faceShapeCompatibility": ["Diamond", "Heart"],
    "description": "Ringlets add width to narrow diamond faces and soften the angular features of heart-shaped faces."
  },
  {
    "id": 28,
    "name": "Arched Bangs",
    "image": "https://example.com/hairstyles/arched-bangs.jpg",
    "category": "Bangs",
    "faceShapeCompatibility": ["Square", "Round"],
    "description": "Arched bangs create curves that soften angular features of square faces and add height to round faces."
  },
  {
    "id": 29,
    "name": "Half-Up Half-Down",
    "image": "https://example.com/hairstyles/half-up-half-down.jpg",
    "category": "Updo",
    "faceShapeCompatibility": ["Oval", "Diamond"],
    "description": "The half-up half-down style highlights the cheekbones of diamond faces while complementing the balanced proportions of oval faces."
  },
  {
    "id": 30,
    "name": "Long Straight Hair",
    "image": "https://example.com/hairstyles/long-straight.jpg",
    "category": "Long",
    "faceShapeCompatibility": ["Oblong", "Heart"],
    "description": "Long straight hair elongates the neck and balances the wider forehead of heart-shaped faces while complementing oblong proportions."
  },
  {
    "id": 31,
    "name": "Textured Crop",
    "image": "https://example.com/hairstyles/textured-crop.jpg",
    "category": "Short",
    "faceShapeCompatibility": ["Oval", "Diamond"],
    "description": "The textured crop adds volume and dimension to narrow diamond faces while complementing the balanced proportions of oval faces."
  },
  {
    "id": 32,
    "name": "Wavy Lob",
    "image": "https://example.com/hairstyles/wavy-lob.jpg",
    "category": "Medium",
    "faceShapeCompatibility": ["Round", "Oblong"],
    "description": "The wavy lob adds volume and movement to round faces while creating the illusion of width in narrow oblong faces."
  },
  {
    "id": 33,
    "name": "Sleek Ponytail",
    "image": "https://example.com/hairstyles/sleek-ponytail.jpg",
    "category": "Updo",
    "faceShapeCompatibility": ["Square", "Oblong"],
    "description": "The sleek ponytail emphasizes the jawline of square faces and elongates the neck of oblong faces."
  },
  {
    "id": 34,
    "name": "Coiled Curls",
    "image": "https://example.com/hairstyles/coiled-curls.jpg",
    "category": "Curly",
    "faceShapeCompatibility": ["Round", "Heart"],
    "description": "Coiled curls add vertical lines that elongate round faces and balance the wider forehead of heart-shaped faces."
  },
  {
    "id": 35,
    "name": "Side-Parted Long Hair",
    "image": "https://example.com/hairstyles/side-parted-long.jpg",
    "category": "Long",
    "faceShapeCompatibility": ["Square", "Diamond"],
    "description": "Side-parted long hair softens angular features of square faces and adds width to narrow diamond faces."
  },
  {
    "id": 36,
    "name": "Micro Bangs",
    "image": "https://example.com/hairstyles/micro-bangs.jpg",
    "category": "Bangs",
    "faceShapeCompatibility": ["Oval", "Oblong"],
    "description": "Micro bangs shorten the appearance of long oblong faces and add a fashionable edge to oval proportions."
  }
],
  sunglasses : [
  {
    "id": 1,
    "name": "Classic Aviators",
    "image": "https://example.com/sunglasses1.jpg",
    "price": 1599,
    "faceShapeCompatibility": ["Oval", "Square"],
    "description": "Teardrop lens shape complements oval proportions while balancing angular features of square faces."
  },
  {
    "id": 2,
    "name": "Round Retro Shades",
    "image": "https://example.com/sunglasses2.jpg",
    "price": 1299,
    "faceShapeCompatibility": ["Square", "Heart"],
    "description": "Circular frames soften sharp jawlines and add width to narrower chins characteristic of heart-shaped faces."
  },
  {
    "id": 3,
    "name": "Wayfarer Classics",
    "image": "https://example.com/sunglasses3.jpg",
    "price": 1799,
    "faceShapeCompatibility": ["Round", "Oval"],
    "description": "Structured silhouette adds definition to round faces while enhancing the natural symmetry of oval faces."
  },
  {
    "id": 4,
    "name": "Cat-Eye Glamour",
    "image": "https://example.com/sunglasses4.jpg",
    "price": 1999,
    "faceShapeCompatibility": ["Heart", "Diamond"],
    "description": "Upswept corners highlight cheekbones and balance wider foreheads of heart and diamond face shapes."
  },
  {
    "id": 5,
    "name": "Square Bold Frames",
    "image": "https://example.com/sunglasses5.jpg",
    "price": 1499,
    "faceShapeCompatibility": ["Round", "Oval"],
    "description": "Angular design adds structure to soft curves of round faces while complementing balanced oval proportions."
  },
  {
    "id": 6,
    "name": "Oval Minimalist",
    "image": "https://example.com/sunglasses6.jpg",
    "price": 1399,
    "faceShapeCompatibility": ["Square", "Diamond"],
    "description": "Gentle curves soften strong jawlines and angular features of square and diamond face shapes."
  },
  {
    "id": 7,
    "name": "Rectangle Sport",
    "image": "https://example.com/sunglasses7.jpg",
    "price": 1699,
    "faceShapeCompatibility": ["Oblong", "Oval"],
    "description": "Horizontal lines break up facial length of oblong faces while enhancing natural oval symmetry."
  },
  {
    "id": 8,
    "name": "Butterfly Elegant",
    "image": "https://example.com/sunglasses8.jpg",
    "price": 1899,
    "faceShapeCompatibility": ["Heart", "Oval"],
    "description": "Wide top narrows toward bottom, balancing wider forehead of heart shapes while flattering oval proportions."
  },
  {
    "id": 9,
    "name": "Geometric Modern",
    "image": "https://example.com/sunglasses9.jpg",
    "price": 2199,
    "faceShapeCompatibility": ["Round", "Diamond"],
    "description": "Angular design adds definition to soft round features while complementing striking diamond cheekbones."
  },
  {
    "id": 10,
    "name": "Teardrop Vintage",
    "image": "https://example.com/sunglasses10.jpg",
    "price": 1799,
    "faceShapeCompatibility": ["Oblong", "Heart"],
    "description": "Tapered design adds width to narrow oblong faces while balancing wider forehead of heart shapes."
  },
  {
    "id": 11,
    "name": "Browline Classic",
    "image": "https://example.com/sunglasses11.jpg",
    "price": 1499,
    "faceShapeCompatibility": ["Oval", "Round"],
    "description": "Distinctive upper frame adds structure to round faces while enhancing balanced oval proportions."
  },
  {
    "id": 12,
    "name": "Shield Sport",
    "image": "https://example.com/sunglasses12.jpg",
    "price": 1999,
    "faceShapeCompatibility": ["Oblong", "Square"],
    "description": "Wide single lens adds width to narrow oblong faces while softening angular square features."
  },
  {
    "id": 13,
    "name": "Hexagon Edgy",
    "image": "https://example.com/sunglasses13.jpg",
    "price": 2299,
    "faceShapeCompatibility": ["Diamond", "Heart"],
    "description": "Angular design highlights diamond cheekbones while balancing wider forehead of heart shapes."
  },
  {
    "id": 14,
    "name": "Rimless Lightweight",
    "image": "https://example.com/sunglasses14.jpg",
    "price": 1699,
    "faceShapeCompatibility": ["Oval", "Oblong"],
    "description": "Minimal design doesn't overwhelm oval proportions while adding subtle width to narrow oblong faces."
  },
  {
    "id": 15,
    "name": "Clubmaster Retro",
    "image": "https://example.com/sunglasses15.jpg",
    "price": 1599,
    "faceShapeCompatibility": ["Round", "Square"],
    "description": "Bold upper frame adds structure to round faces while softening strong square jawlines."
  },
  {
    "id": 16,
    "name": "Wrap Sport",
    "image": "https://example.com/sunglasses16.jpg",
    "price": 1899,
    "faceShapeCompatibility": ["Oblong", "Diamond"],
    "description": "Curved design adds width to narrow oblong faces while complementing angular diamond features."
  },
  {
    "id": 17,
    "name": "Keyhole Vintage",
    "image": "https://example.com/sunglasses17.jpg",
    "price": 1399,
    "faceShapeCompatibility": ["Heart", "Oval"],
    "description": "Distinctive bridge detail draws attention to eyes, balancing heart shape while flattering oval symmetry."
  },
  {
    "id": 18,
    "name": "Phantos Soft",
    "image": "https://example.com/sunglasses18.jpg",
    "price": 1699,
    "faceShapeCompatibility": ["Square", "Diamond"],
    "description": "Rounded corners soften angular features of square and diamond face shapes."
  },
  {
    "id": 19,
    "name": "Oversized Glam",
    "image": "https://example.com/sunglasses19.jpg",
    "price": 2199,
    "faceShapeCompatibility": ["Oval", "Heart"],
    "description": "Large proportions complement balanced oval features while adding width to narrower heart chin."
  },
  {
    "id": 20,
    "name": "Navigator Bold",
    "image": "https://example.com/sunglasses20.jpg",
    "price": 1999,
    "faceShapeCompatibility": ["Oblong", "Round"],
    "description": "Wide design adds width to narrow oblong faces while adding structure to soft round features."
  },
  {
    "id": 21,
    "name": "Round Thin Metal",
    "image": "https://example.com/sunglasses21.jpg",
    "price": 1799,
    "faceShapeCompatibility": ["Square", "Heart"],
    "description": "Delicate circular frames soften angular features while balancing wider forehead of heart shapes."
  },
  {
    "id": 22,
    "name": "Square Thick Acetate",
    "image": "https://example.com/sunglasses22.jpg",
    "price": 1599,
    "faceShapeCompatibility": ["Round", "Oval"],
    "description": "Bold angular design adds definition to soft round features while complementing balanced oval proportions."
  },
  {
    "id": 23,
    "name": "Cat-Eye Subtle",
    "image": "https://example.com/sunglasses23.jpg",
    "price": 1899,
    "faceShapeCompatibility": ["Diamond", "Oblong"],
    "description": "Gentle upsweep highlights diamond cheekbones while adding width to narrow oblong faces."
  },
  {
    "id": 24,
    "name": "Oval Thin Rim",
    "image": "https://example.com/sunglasses24.jpg",
    "price": 1499,
    "faceShapeCompatibility": ["Square", "Heart"],
    "description": "Soft curves soften angular jawlines while balancing wider forehead of heart shapes."
  },
  {
    "id": 25,
    "name": "Rectangle Flat Top",
    "image": "https://example.com/sunglasses25.jpg",
    "price": 1699,
    "faceShapeCompatibility": ["Oblong", "Diamond"],
    "description": "Horizontal lines break up facial length while complementing angular diamond features."
  },
  {
    "id": 26,
    "name": "Butterfly Bold",
    "image": "https://example.com/sunglasses26.jpg",
    "price": 2099,
    "faceShapeCompatibility": ["Heart", "Oval"],
    "description": "Wide top narrows toward bottom, balancing heart proportions while flattering oval symmetry."
  },
  {
    "id": 27,
    "name": "Geometric Hexagon",
    "image": "https://example.com/sunglasses27.jpg",
    "price": 2399,
    "faceShapeCompatibility": ["Round", "Square"],
    "description": "Angular design adds structure to soft round features while softening strong square jawlines."
  },
  {
    "id": 28,
    "name": "Teardrop Double Bridge",
    "image": "https://example.com/sunglasses28.jpg",
    "price": 1899,
    "faceShapeCompatibility": ["Oblong", "Heart"],
    "description": "Tapered design adds width to narrow oblong faces while balancing wider heart forehead."
  },
  {
    "id": 29,
    "name": "Browline Thick",
    "image": "https://example.com/sunglasses29.jpg",
    "price": 1599,
    "faceShapeCompatibility": ["Oval", "Round"],
    "description": "Bold upper frame adds structure to round faces while enhancing balanced oval proportions."
  },
  {
    "id": 30,
    "name": "Shield Mirrored",
    "image": "https://example.com/sunglasses30.jpg",
    "price": 2199,
    "faceShapeCompatibility": ["Oblong", "Square"],
    "description": "Wide single lens adds width to narrow oblong faces while softening angular square features."
  },
  {
    "id": 31,
    "name": "Hexagon Metal",
    "image": "https://example.com/sunglasses31.jpg",
    "price": 1999,
    "faceShapeCompatibility": ["Diamond", "Heart"],
    "description": "Angular design highlights diamond cheekbones while balancing wider heart forehead."
  },
  {
    "id": 32,
    "name": "Rimless Round",
    "image": "https://example.com/sunglasses32.jpg",
    "price": 1799,
    "faceShapeCompatibility": ["Oval", "Oblong"],
    "description": "Minimal design doesn't overwhelm oval proportions while adding width to narrow oblong faces."
  },
  {
    "id": 33,
    "name": "Clubmaster Modern",
    "image": "https://example.com/sunglasses33.jpg",
    "price": 1699,
    "faceShapeCompatibility": ["Round", "Square"],
    "description": "Bold upper frame adds structure to round faces while softening strong square jawlines."
  },
  {
    "id": 34,
    "name": "Wrap Polarized",
    "image": "https://example.com/sunglasses34.jpg",
    "price": 2099,
    "faceShapeCompatibility": ["Oblong", "Diamond"],
    "description": "Curved design adds width to narrow oblong faces while complementing angular diamond features."
  },
  {
    "id": 35,
    "name": "Keyhole Round",
    "image": "https://example.com/sunglasses35.jpg",
    "price": 1499,
    "faceShapeCompatibility": ["Heart", "Oval"],
    "description": "Distinctive bridge detail draws attention to eyes, balancing heart shape while flattering oval symmetry."
  },
  {
    "id": 36,
    "name": "Phantos Bold",
    "image": "https://example.com/sunglasses36.jpg",
    "price": 1899,
    "faceShapeCompatibility": ["Square", "Diamond"],
    "description": "Rounded corners soften angular features of square and diamond face shapes."
  },
  {
    "id": 37,
    "name": "Oversized Square",
    "image": "https://example.com/sunglasses37.jpg",
    "price": 2299,
    "faceShapeCompatibility": ["Oval", "Heart"],
    "description": "Large proportions complement balanced oval features while adding width to narrower heart chin."
  },
  {
    "id": 38,
    "name": "Navigator Pilot",
    "image": "https://example.com/sunglasses38.jpg",
    "price": 1999,
    "faceShapeCompatibility": ["Oblong", "Round"],
    "description": "Wide design adds width to narrow oblong faces while adding structure to soft round features."
  },
  {
    "id": 39,
    "name": "Round Tortoise",
    "image": "https://example.com/sunglasses39.jpg",
    "price": 1599,
    "faceShapeCompatibility": ["Square", "Heart"],
    "description": "Circular frames soften angular jawlines and add width to narrower chins characteristic of heart-shaped faces."
  },
  {
    "id": 40,
    "name": "Square Gradient",
    "image": "https://example.com/sunglasses40.jpg",
    "price": 1799,
    "faceShapeCompatibility": ["Round", "Oval"],
    "description": "Structured silhouette adds definition to round faces while enhancing the natural symmetry of oval faces."
  },
  {
    "id": 41,
    "name": "Cat-Eye Crystal",
    "image": "https://example.com/sunglasses41.jpg",
    "price": 2199,
    "faceShapeCompatibility": ["Heart", "Diamond"],
    "description": "Upswept corners highlight cheekbones and balance wider foreheads of heart and diamond face shapes."
  },
  {
    "id": 42,
    "name": "Oval Gold",
    "image": "https://example.com/sunglasses42.jpg",
    "price": 1999,
    "faceShapeCompatibility": ["Square", "Diamond"],
    "description": "Gentle curves soften strong jawlines and angular features of square and diamond face shapes."
  },
  {
    "id": 43,
    "name": "Rectangle Sporty",
    "image": "https://example.com/sunglasses43.jpg",
    "price": 1899,
    "faceShapeCompatibility": ["Oblong", "Oval"],
    "description": "Horizontal lines break up facial length of oblong faces while enhancing natural oval symmetry."
  },
  {
    "id": 44,
    "name": "Butterfly Patterned",
    "image": "https://example.com/sunglasses44.jpg",
    "price": 2099,
    "faceShapeCompatibility": ["Heart", "Oval"],
    "description": "Wide top narrows toward bottom, balancing wider forehead of heart shapes while flattering oval proportions."
  },
  {
    "id": 45,
    "name": "Geometric Clear",
    "image": "https://example.com/sunglasses45.jpg",
    "price": 2499,
    "faceShapeCompatibility": ["Round", "Diamond"],
    "description": "Angular design adds definition to soft round features while complementing striking diamond cheekbones."
  },
  {
    "id": 46,
    "name": "Teardrop Vintage",
    "image": "https://example.com/sunglasses46.jpg",
    "price": 1899,
    "faceShapeCompatibility": ["Oblong", "Heart"],
    "description": "Tapered design adds width to narrow oblong faces while balancing wider forehead of heart shapes."
  },
  {
    "id": 47,
    "name": "Browline Thin",
    "image": "https://example.com/sunglasses47.jpg",
    "price": 1699,
    "faceShapeCompatibility": ["Oval", "Round"],
    "description": "Distinctive upper frame adds structure to round faces while enhancing balanced oval proportions."
  },
  {
    "id": 48,
    "name": "Shield Sport",
    "image": "https://example.com/sunglasses48.jpg",
    "price": 2199,
    "faceShapeCompatibility": ["Oblong", "Square"],
    "description": "Wide single lens adds width to narrow oblong faces while softening angular square features."
  },
  {
    "id": 49,
    "name": "Hexagon Bold",
    "image": "https://example.com/sunglasses49.jpg",
    "price": 2399,
    "faceShapeCompatibility": ["Diamond", "Heart"],
    "description": "Angular design highlights diamond cheekbones while balancing wider forehead of heart shapes."
  },
  {
    "id": 50,
    "name": "Rimless Lightweight",
    "image": "https://example.com/sunglasses50.jpg",
    "price": 1899,
    "faceShapeCompatibility": ["Oval", "Oblong"],
    "description": "Minimal design doesn't overwhelm oval proportions while adding subtle width to narrow oblong faces."
  },
  {
    "id": 51,
    "name": "Clubmaster Retro",
    "image": "https://example.com/sunglasses51.jpg",
    "price": 1799,
    "faceShapeCompatibility": ["Round", "Square"],
    "description": "Bold upper frame adds structure to round faces while softening strong square jawlines."
  },
  {
    "id": 52,
    "name": "Wrap Athletic",
    "image": "https://example.com/sunglasses52.jpg",
    "price": 1999,
    "faceShapeCompatibility": ["Oblong", "Diamond"],
    "description": "Curved design adds width to narrow oblong faces while complementing angular diamond features."
  },
  {
    "id": 53,
    "name": "Keyhole Vintage",
    "image": "https://example.com/sunglasses53.jpg",
    "price": 1599,
    "faceShapeCompatibility": ["Heart", "Oval"],
    "description": "Distinctive bridge detail draws attention to eyes, balancing heart shape while flattering oval symmetry."
  },
  {
    "id": 54,
    "name": "Phantos Soft",
    "image": "https://example.com/sunglasses54.jpg",
    "price": 1899,
    "faceShapeCompatibility": ["Square", "Diamond"],
    "description": "Rounded corners soften angular features of square and diamond face shapes."
  },
  {
    "id": 55,
    "name": "Oversized Glam",
    "image": "https://example.com/sunglasses55.jpg",
    "price": 2499,
    "faceShapeCompatibility": ["Oval", "Heart"],
    "description": "Large proportions complement balanced oval features while adding width to narrower heart chin."
  },
  {
    "id": 56,
    "name": "Navigator Bold",
    "image": "https://example.com/sunglasses56.jpg",
    "price": 2199,
    "faceShapeCompatibility": ["Oblong", "Round"],
    "description": "Wide design adds width to narrow oblong faces while adding structure to soft round features."
  },
  {
    "id": 57,
    "name": "Round Thin Metal",
    "image": "https://example.com/sunglasses57.jpg",
    "price": 1999,
    "faceShapeCompatibility": ["Square", "Heart"],
    "description": "Delicate circular frames soften angular features while balancing wider forehead of heart shapes."
  },
  {
    "id": 58,
    "name": "Square Thick Acetate",
    "image": "https://example.com/sunglasses58.jpg",
    "price": 1799,
    "faceShapeCompatibility": ["Round", "Oval"],
    "description": "Bold angular design adds definition to soft round features while complementing balanced oval proportions."
  },
  {
    "id": 59,
    "name": "Cat-Eye Subtle",
    "image": "https://example.com/sunglasses59.jpg",
    "price": 2099,
    "faceShapeCompatibility": ["Diamond", "Oblong"],
    "description": "Gentle upsweep highlights diamond cheekbones while adding width to narrow oblong faces."
  },
  {
    "id": 60,
    "name": "Oval Thin Rim",
    "image": "https://example.com/sunglasses60.jpg",
    "price": 1699,
    "faceShapeCompatibility": ["Square", "Heart"],
    "description": "Soft curves soften angular jawlines while balancing wider forehead of heart shapes."
  },
  {
    "id": 61,
    "name": "Rectangle Flat Top",
    "image": "https://example.com/sunglasses61.jpg",
    "price": 1899,
    "faceShapeCompatibility": ["Oblong", "Diamond"],
    "description": "Horizontal lines break up facial length while complementing angular diamond features."
  },
  {
    "id": 62,
    "name": "Butterfly Bold",
    "image": "https://example.com/sunglasses62.jpg",
    "price": 2299,
    "faceShapeCompatibility": ["Heart", "Oval"],
    "description": "Wide top narrows toward bottom, balancing heart proportions while flattering oval symmetry."
  },
  {
    "id": 63,
    "name": "Geometric Hexagon",
    "image": "https://example.com/sunglasses63.jpg",
    "price": 2599,
    "faceShapeCompatibility": ["Round", "Square"],
    "description": "Angular design adds structure to soft round features while softening strong square jawlines."
  },
  {
    "id": 64,
    "name": "Teardrop Double Bridge",
    "image": "https://example.com/sunglasses64.jpg",
    "price": 2099,
    "faceShapeCompatibility": ["Oblong", "Heart"],
    "description": "Tapered design adds width to narrow oblong faces while balancing wider heart forehead."
  },
  {
    "id": 65,
    "name": "Browline Thick",
    "image": "https://example.com/sunglasses65.jpg",
    "price": 1799,
    "faceShapeCompatibility": ["Oval", "Round"],
    "description": "Bold upper frame adds structure to round faces while enhancing balanced oval proportions."
  },
  {
    "id": 66,
    "name": "Shield Mirrored",
    "image": "https://example.com/sunglasses66.jpg",
    "price": 2399,
    "faceShapeCompatibility": ["Oblong", "Square"],
    "description": "Wide single lens adds width to narrow oblong faces while softening angular square features."
  },
  {
    "id": 67,
    "name": "Hexagon Metal",
    "image": "https://example.com/sunglasses67.jpg",
    "price": 2199,
    "faceShapeCompatibility": ["Diamond", "Heart"],
    "description": "Angular design highlights diamond cheekbones while balancing wider heart forehead."
  },
  {
    "id": 68,
    "name": "Rimless Round",
    "image": "https://example.com/sunglasses68.jpg",
    "price": 1999,
    "faceShapeCompatibility": ["Oval", "Oblong"],
    "description": "Minimal design doesn't overwhelm oval proportions while adding width to narrow oblong faces."
  },
  {
    "id": 69,
    "name": "Clubmaster Modern",
    "image": "https://example.com/sunglasses69.jpg",
    "price": 1899,
    "faceShapeCompatibility": ["Round", "Square"],
    "description": "Bold upper frame adds structure to round faces while softening strong square jawlines."
  },
  {
    "id": 70,
    "name": "Wrap Polarized",
    "image": "https://example.com/sunglasses70.jpg",
    "price": 2299,
    "faceShapeCompatibility": ["Oblong", "Diamond"],
    "description": "Curved design adds width to narrow oblong faces while complementing angular diamond features."
  },
  {
    "id": 71,
    "name": "Keyhole Round",
    "image": "https://example.com/sunglasses71.jpg",
    "price": 1699,
    "faceShapeCompatibility": ["Heart", "Oval"],
    "description": "Distinctive bridge detail draws attention to eyes, balancing heart shape while flattering oval symmetry."
  },
  {
    "id": 72,
    "name": "Phantos Bold",
    "image": "https://example.com/sunglasses72.jpg",
    "price": 2099,
    "faceShapeCompatibility": ["Square", "Diamond"],
    "description": "Rounded corners soften angular features of square and diamond face shapes."
  },
  {
    "id": 73,
    "name": "Oversized Square",
    "image": "https://example.com/sunglasses73.jpg",
    "price": 2499,
    "faceShapeCompatibility": ["Oval", "Heart"],
    "description": "Large proportions complement balanced oval features while adding width to narrower heart chin."
  },
  {
    "id": 74,
    "name": "Navigator Pilot",
    "image": "https://example.com/sunglasses74.jpg",
    "price": 2199,
    "faceShapeCompatibility": ["Oblong", "Round"],
    "description": "Wide design adds width to narrow oblong faces while adding structure to soft round features."
  },
  {
    "id": 75,
    "name": "Round Tortoise",
    "image": "https://example.com/sunglasses75.jpg",
    "price": 1799,
    "faceShapeCompatibility": ["Square", "Heart"],
    "description": "Circular frames soften angular jawlines and add width to narrower chins characteristic of heart-shaped faces."
  },
  {
    "id": 76,
    "name": "Square Gradient",
    "image": "https://example.com/sunglasses76.jpg",
    "price": 1999,
    "faceShapeCompatibility": ["Round", "Oval"],
    "description": "Structured silhouette adds definition to round faces while enhancing the natural symmetry of oval faces."
  },
  {
    "id": 77,
    "name": "Cat-Eye Crystal",
    "image": "https://example.com/sunglasses77.jpg",
    "price": 2399,
    "faceShapeCompatibility": ["Heart", "Diamond"],
    "description": "Upswept corners highlight cheekbones and balance wider foreheads of heart and diamond face shapes."
  },
  {
    "id": 78,
    "name": "Oval Gold",
    "image": "https://example.com/sunglasses78.jpg",
    "price": 2199,
    "faceShapeCompatibility": ["Square", "Diamond"],
    "description": "Gentle curves soften strong jawlines and angular features of square and diamond face shapes."
  },
  {
    "id": 79,
    "name": "Rectangle Sporty",
    "image": "https://example.com/sunglasses79.jpg",
    "price": 2099,
    "faceShapeCompatibility": ["Oblong", "Oval"],
    "description": "Horizontal lines break up facial length of oblong faces while enhancing natural oval symmetry."
  },
  {
    "id": 80,
    "name": "Butterfly Patterned",
    "image": "https://example.com/sunglasses80.jpg",
    "price": 2299,
    "faceShapeCompatibility": ["Heart", "Oval"],
    "description": "Wide top narrows toward bottom, balancing wider forehead of heart shapes while flattering oval proportions."
  },
  {
    "id": 81,
    "name": "Geometric Clear",
    "image": "https://example.com/sunglasses81.jpg",
    "price": 2699,
    "faceShapeCompatibility": ["Round", "Diamond"],
    "description": "Angular design adds definition to soft round features while complementing striking diamond cheekbones."
  },
  {
    "id": 82,
    "name": "Teardrop Vintage",
    "image": "https://example.com/sunglasses82.jpg",
    "price": 2099,
    "faceShapeCompatibility": ["Oblong", "Heart"],
    "description": "Tapered design adds width to narrow oblong faces while balancing wider forehead of heart shapes."
  },
  {
    "id": 83,
    "name": "Browline Thin",
    "image": "https://example.com/sunglasses83.jpg",
    "price": 1899,
    "faceShapeCompatibility": ["Oval", "Round"],
    "description": "Distinctive upper frame adds structure to round faces while enhancing balanced oval proportions."
  },
  {
    "id": 84,
    "name": "Shield Sport",
    "image": "https://example.com/sunglasses84.jpg",
    "price": 2399,
    "faceShapeCompatibility": ["Oblong", "Square"],
    "description": "Wide single lens adds width to narrow oblong faces while softening angular square features."
  },
  {
    "id": 85,
    "name": "Hexagon Bold",
    "image": "https://example.com/sunglasses85.jpg",
    "price": 2599,
    "faceShapeCompatibility": ["Diamond", "Heart"],
    "description": "Angular design highlights diamond cheekbones while balancing wider forehead of heart shapes."
  },
  {
    "id": 86,
    "name": "Rimless Lightweight",
    "image": "https://example.com/sunglasses86.jpg",
    "price": 2099,
    "faceShapeCompatibility": ["Oval", "Oblong"],
    "description": "Minimal design doesn't overwhelm oval proportions while adding subtle width to narrow oblong faces."
  },
  {
    "id": 87,
    "name": "Clubmaster Retro",
    "image": "https://example.com/sunglasses87.jpg",
    "price": 1999,
    "faceShapeCompatibility": ["Round", "Square"],
    "description": "Bold upper frame adds structure to round faces while softening strong square jawlines."
  },
  {
    "id": 88,
    "name": "Wrap Athletic",
    "image": "https://example.com/sunglasses88.jpg",
    "price": 2299,
    "faceShapeCompatibility": ["Oblong", "Diamond"],
    "description": "Curved design adds width to narrow oblong faces while complementing angular diamond features."
  },
  {
    "id": 89,
    "name": "Keyhole Vintage",
    "image": "https://example.com/sunglasses89.jpg",
    "price": 1799,
    "faceShapeCompatibility": ["Heart", "Oval"],
    "description": "Distinctive bridge detail draws attention to eyes, balancing heart shape while flattering oval symmetry."
  },
  {
    "id": 90,
    "name": "Phantos Soft",
    "image": "https://example.com/sunglasses90.jpg",
    "price": 2099,
    "faceShapeCompatibility": ["Square", "Diamond"],
    "description": "Rounded corners soften angular features of square and diamond face shapes."
  },
  {
    "id": 91,
    "name": "Oversized Glam",
    "image": "https://example.com/sunglasses91.jpg",
    "price": 2699,
    "faceShapeCompatibility": ["Oval", "Heart"],
    "description": "Large proportions complement balanced oval features while adding width to narrower heart chin."
  },
  {
    "id": 92,
    "name": "Navigator Bold",
    "image": "https://example.com/sunglasses92.jpg",
    "price": 2399,
    "faceShapeCompatibility": ["Oblong", "Round"],
    "description": "Wide design adds width to narrow oblong faces while adding structure to soft round features."
  },
  {
    "id": 93,
    "name": "Round Thin Metal",
    "image": "https://example.com/sunglasses93.jpg",
    "price": 2199,
    "faceShapeCompatibility": ["Square", "Heart"],
    "description": "Delicate circular frames soften angular features while balancing wider forehead of heart shapes."
  },
  {
    "id": 94,
    "name": "Square Thick Acetate",
    "image": "https://example.com/sunglasses94.jpg",
    "price": 1999,
    "faceShapeCompatibility": ["Round", "Oval"],
    "description": "Bold angular design adds definition to soft round features while complementing balanced oval proportions."
  },
  {
    "id": 95,
    "name": "Cat-Eye Subtle",
    "image": "https://example.com/sunglasses95.jpg",
    "price": 2299,
    "faceShapeCompatibility": ["Diamond", "Oblong"],
    "description": "Gentle upsweep highlights diamond cheekbones while adding width to narrow oblong faces."
  },
  {
    "id": 96,
    "name": "Oval Thin Rim",
    "image": "https://example.com/sunglasses96.jpg",
    "price": 1899,
    "faceShapeCompatibility": ["Square", "Heart"],
    "description": "Soft curves soften angular jawlines while balancing wider forehead of heart shapes."
  },
  {
    "id": 97,
    "name": "Rectangle Flat Top",
    "image": "https://example.com/sunglasses97.jpg",
    "price": 2099,
    "faceShapeCompatibility": ["Oblong", "Diamond"],
    "description": "Horizontal lines break up facial length while complementing angular diamond features."
  },
  {
    "id": 98,
    "name": "Butterfly Bold",
    "image": "https://example.com/sunglasses98.jpg",
    "price": 2499,
    "faceShapeCompatibility": ["Heart", "Oval"],
    "description": "Wide top narrows toward bottom, balancing heart proportions while flattering oval symmetry."
  },
  {
    "id": 99,
    "name": "Geometric Hexagon",
    "image": "https://example.com/sunglasses99.jpg",
    "price": 2799,
    "faceShapeCompatibility": ["Round", "Square"],
    "description": "Angular design adds structure to soft round features while softening strong square jawlines."
  },
  {
    "id": 100,
    "name": "Teardrop Double Bridge",
    "image": "https://example.com/sunglasses100.jpg",
    "price": 2299,
    "faceShapeCompatibility": ["Oblong", "Heart"],
    "description": "Tapered design adds width to narrow oblong faces while balancing wider heart forehead."
  },
  {
    "id": 101,
    "name": "Browline Thick",
    "image": "https://example.com/sunglasses101.jpg",
    "price": 1999,
    "faceShapeCompatibility": ["Oval", "Round"],
    "description": "Bold upper frame adds structure to round faces while enhancing balanced oval proportions."
  },
  {
    "id": 102,
    "name": "Shield Mirrored",
    "image": "https://example.com/sunglasses102.jpg",
    "price": 2599,
    "faceShapeCompatibility": ["Oblong", "Square"],
    "description": "Wide single lens adds width to narrow oblong faces while softening angular square features."
  },
  {
    "id": 103,
    "name": "Hexagon Metal",
    "image": "https://example.com/sunglasses103.jpg",
    "price": 2399,
    "faceShapeCompatibility": ["Diamond", "Heart"],
    "description": "Angular design highlights diamond cheekbones while balancing wider heart forehead."
  },
  {
    "id": 104,
    "name": "Rimless Round",
    "image": "https://example.com/sunglasses104.jpg",
    "price": 2199,
    "faceShapeCompatibility": ["Oval", "Oblong"],
    "description": "Minimal design doesn't overwhelm oval proportions while adding width to narrow oblong faces."
  },
  {
    "id": 105,
    "name": "Clubmaster Modern",
    "image": "https://example.com/sunglasses105.jpg",
    "price": 2099,
    "faceShapeCompatibility": ["Round", "Square"],
    "description": "Bold upper frame adds structure to round faces while softening strong square jawlines."
  },
  {
    "id": 106,
    "name": "Wrap Polarized",
    "image": "https://example.com/sunglasses106.jpg",
    "price": 2499,
    "faceShapeCompatibility": ["Oblong", "Diamond"],
    "description": "Curved design adds width to narrow oblong faces while complementing angular diamond features."
  },
  {
    "id": 107,
    "name": "Keyhole Round",
    "image": "https://example.com/sunglasses107.jpg",
    "price": 1899,
    "faceShapeCompatibility": ["Heart", "Oval"],
    "description": "Distinctive bridge detail draws attention to eyes, balancing heart shape while flattering oval symmetry."
  },
  {
    "id": 108,
    "name": "Phantos Bold",
    "image": "https://example.com/sunglasses108.jpg",
    "price": 2299,
    "faceShapeCompatibility": ["Square", "Diamond"],
    "description": "Rounded corners soften angular features of square and diamond face shapes."
  },
  {
    "id": 109,
    "name": "Oversized Square",
    "image": "https://example.com/sunglasses109.jpg",
    "price": 2699,
    "faceShapeCompatibility": ["Oval", "Heart"],
    "description": "Large proportions complement balanced oval features while adding width to narrower heart chin."
  },
  {
    "id": 110,
    "name": "Navigator Pilot",
    "image": "https://example.com/sunglasses110.jpg",
    "price": 2399,
    "faceShapeCompatibility": ["Oblong", "Round"],
    "description": "Wide design adds width to narrow oblong faces while adding structure to soft round features."
  },
  {
    "id": 111,
    "name": "Round Tortoise",
    "image": "https://example.com/sunglasses111.jpg",
    "price": 1999,
    "faceShapeCompatibility": ["Square", "Heart"],
    "description": "Circular frames soften angular jawlines and add width to narrower chins characteristic of heart-shaped faces."
  },
  {
    "id": 112,
    "name": "Square Gradient",
    "image": "https://example.com/sunglasses112.jpg",
    "price": 2199,
    "faceShapeCompatibility": ["Round", "Oval"],
    "description": "Structured silhouette adds definition to round faces while enhancing the natural symmetry of oval faces."
  },
  {
    "id": 113,
    "name": "Cat-Eye Crystal",
    "image": "https://example.com/sunglasses113.jpg",
    "price": 2599,
    "faceShapeCompatibility": ["Heart", "Diamond"],
    "description": "Upswept corners highlight cheekbones and balance wider foreheads of heart and diamond face shapes."
  },
  {
    "id": 114,
    "name": "Oval Gold",
    "image": "https://example.com/sunglasses114.jpg",
    "price": 2399,
    "faceShapeCompatibility": ["Square", "Diamond"],
    "description": "Gentle curves soften strong jawlines and angular features of square and diamond face shapes."
  },
  {
    "id": 115,
    "name": "Rectangle Sporty",
    "image": "https://example.com/sunglasses115.jpg",
    "price": 2299,
    "faceShapeCompatibility": ["Oblong", "Oval"],
    "description": "Horizontal lines break up facial length of oblong faces while enhancing natural oval symmetry."
  },
  {
    "id": 116,
    "name": "Butterfly Patterned",
    "image": "https://example.com/sunglasses116.jpg",
    "price": 2499,
    "faceShapeCompatibility": ["Heart", "Oval"],
    "description": "Wide top narrows toward bottom, balancing wider forehead of heart shapes while flattering oval proportions."
  },
  {
    "id": 117,
    "name": "Geometric Clear",
    "image": "https://example.com/sunglasses117.jpg",
    "price": 2899,
    "faceShapeCompatibility": ["Round", "Diamond"],
    "description": "Angular design adds definition to soft round features while complementing striking diamond cheekbones."
  },
  {
    "id": 118,
    "name": "Teardrop Vintage",
    "image": "https://example.com/sunglasses118.jpg",
    "price": 2299,
    "faceShapeCompatibility": ["Oblong", "Heart"],
    "description": "Tapered design adds width to narrow oblong faces while balancing wider forehead of heart shapes."
  },
  {
    "id": 119,
    "name": "Browline Thin",
    "image": "https://example.com/sunglasses119.jpg",
    "price": 2099,
    "faceShapeCompatibility": ["Oval", "Round"],
    "description": "Distinctive upper frame adds structure to round faces while enhancing balanced oval proportions."
  },
  {
    "id": 120,
    "name": "Shield Sport",
    "image": "https://example.com/sunglasses120.jpg",
    "price": 2599,
    "faceShapeCompatibility": ["Oblong", "Square"],
    "description": "Wide single lens adds width to narrow oblong faces while softening angular square features."
  }
],
  },

  // Unisex Products
  unisex: {
    clothing: [
      {
        id: 11,
        name: "Premium Cotton Hoodie",
        price: "$59.99",
        style: "casual",
        colors: ['#4B5563', '#DC2626'],
        category: "clothing",
        rating: 4.4,
        gender: 'unisex',
        tags: ['hoodie', 'casual', 'comfort']
      },
      {
        id: 12,
        name: "Classic White T-Shirt",
        price: "$24.99",
        style: "casual",
        colors: ['#FFFFFF', '#000000'],
        category: "clothing",
        rating: 4.1,
        gender: 'unisex',
        tags: ['tshirt', 'basic', 'casual']
      }
    ],
    accessories: [
      {
        id: 13,
        name: "Smart Fitness Watch",
        price: "$199.99",
        style: "sports",
        colors: ['#000000', '#FFFFFF'],
        category: "accessories",
        rating: 4.6,
        gender: 'unisex',
        tags: ['smartwatch', 'fitness', 'tech']
      },
      {
        id: 14,
        name: "Designer Backpack",
        price: "$79.99",
        style: "casual",
        colors: ['#1E3A8A', '#047857'],
        category: "accessories",
        rating: 4.5,
        gender: 'unisex',
        tags: ['backpack', 'travel', 'casual']
      }
    ],

    sunglasses : [
    {
      "id": 1,
      "name": "Classic Aviators",
      "image": "https://example.com/sunglasses1.jpg",
      "price": 1599,
      "faceShapeCompatibility": ["Oval", "Square"],
      "description": "Teardrop lens shape complements oval proportions while balancing angular features of square faces."
    },
    {
      "id": 2,
      "name": "Round Retro Shades",
      "image": "https://example.com/sunglasses2.jpg",
      "price": 1299,
      "faceShapeCompatibility": ["Square", "Heart"],
      "description": "Circular frames soften sharp jawlines and add width to narrower chins characteristic of heart-shaped faces."
    },
    {
      "id": 3,
      "name": "Wayfarer Classics",
      "image": "https://example.com/sunglasses3.jpg",
      "price": 1799,
      "faceShapeCompatibility": ["Round", "Oval"],
      "description": "Structured silhouette adds definition to round faces while enhancing the natural symmetry of oval faces."
    },
    {
      "id": 4,
      "name": "Cat-Eye Glamour",
      "image": "https://example.com/sunglasses4.jpg",
      "price": 1999,
      "faceShapeCompatibility": ["Heart", "Diamond"],
      "description": "Upswept corners highlight cheekbones and balance wider foreheads of heart and diamond face shapes."
    },
    {
      "id": 5,
      "name": "Square Bold Frames",
      "image": "https://example.com/sunglasses5.jpg",
      "price": 1499,
      "faceShapeCompatibility": ["Round", "Oval"],
      "description": "Angular design adds structure to soft curves of round faces while complementing balanced oval proportions."
    },
    {
      "id": 6,
      "name": "Oval Minimalist",
      "image": "https://example.com/sunglasses6.jpg",
      "price": 1399,
      "faceShapeCompatibility": ["Square", "Diamond"],
      "description": "Gentle curves soften strong jawlines and angular features of square and diamond face shapes."
    },
    {
      "id": 7,
      "name": "Rectangle Sport",
      "image": "https://example.com/sunglasses7.jpg",
      "price": 1699,
      "faceShapeCompatibility": ["Oblong", "Oval"],
      "description": "Horizontal lines break up facial length of oblong faces while enhancing natural oval symmetry."
    },
    {
      "id": 8,
      "name": "Butterfly Elegant",
      "image": "https://example.com/sunglasses8.jpg",
      "price": 1899,
      "faceShapeCompatibility": ["Heart", "Oval"],
      "description": "Wide top narrows toward bottom, balancing wider forehead of heart shapes while flattering oval proportions."
    },
    {
      "id": 9,
      "name": "Geometric Modern",
      "image": "https://example.com/sunglasses9.jpg",
      "price": 2199,
      "faceShapeCompatibility": ["Round", "Diamond"],
      "description": "Angular design adds definition to soft round features while complementing striking diamond cheekbones."
    },
    {
      "id": 10,
      "name": "Teardrop Vintage",
      "image": "https://example.com/sunglasses10.jpg",
      "price": 1799,
      "faceShapeCompatibility": ["Oblong", "Heart"],
      "description": "Tapered design adds width to narrow oblong faces while balancing wider forehead of heart shapes."
    },
    {
      "id": 11,
      "name": "Browline Classic",
      "image": "https://example.com/sunglasses11.jpg",
      "price": 1499,
      "faceShapeCompatibility": ["Oval", "Round"],
      "description": "Distinctive upper frame adds structure to round faces while enhancing balanced oval proportions."
    },
    {
      "id": 12,
      "name": "Shield Sport",
      "image": "https://example.com/sunglasses12.jpg",
      "price": 1999,
      "faceShapeCompatibility": ["Oblong", "Square"],
      "description": "Wide single lens adds width to narrow oblong faces while softening angular square features."
    },
    {
      "id": 13,
      "name": "Hexagon Edgy",
      "image": "https://example.com/sunglasses13.jpg",
      "price": 2299,
      "faceShapeCompatibility": ["Diamond", "Heart"],
      "description": "Angular design highlights diamond cheekbones while balancing wider forehead of heart shapes."
    },
    {
      "id": 14,
      "name": "Rimless Lightweight",
      "image": "https://example.com/sunglasses14.jpg",
      "price": 1699,
      "faceShapeCompatibility": ["Oval", "Oblong"],
      "description": "Minimal design doesn't overwhelm oval proportions while adding subtle width to narrow oblong faces."
    },
    {
      "id": 15,
      "name": "Clubmaster Retro",
      "image": "https://example.com/sunglasses15.jpg",
      "price": 1599,
      "faceShapeCompatibility": ["Round", "Square"],
      "description": "Bold upper frame adds structure to round faces while softening strong square jawlines."
    },
    {
      "id": 16,
      "name": "Wrap Sport",
      "image": "https://example.com/sunglasses16.jpg",
      "price": 1899,
      "faceShapeCompatibility": ["Oblong", "Diamond"],
      "description": "Curved design adds width to narrow oblong faces while complementing angular diamond features."
    },
    {
      "id": 17,
      "name": "Keyhole Vintage",
      "image": "https://example.com/sunglasses17.jpg",
      "price": 1399,
      "faceShapeCompatibility": ["Heart", "Oval"],
      "description": "Distinctive bridge detail draws attention to eyes, balancing heart shape while flattering oval symmetry."
    },
    {
      "id": 18,
      "name": "Phantos Soft",
      "image": "https://example.com/sunglasses18.jpg",
      "price": 1699,
      "faceShapeCompatibility": ["Square", "Diamond"],
      "description": "Rounded corners soften angular features of square and diamond face shapes."
    },
    {
      "id": 19,
      "name": "Oversized Glam",
      "image": "https://example.com/sunglasses19.jpg",
      "price": 2199,
      "faceShapeCompatibility": ["Oval", "Heart"],
      "description": "Large proportions complement balanced oval features while adding width to narrower heart chin."
    },
    {
      "id": 20,
      "name": "Navigator Bold",
      "image": "https://example.com/sunglasses20.jpg",
      "price": 1999,
      "faceShapeCompatibility": ["Oblong", "Round"],
      "description": "Wide design adds width to narrow oblong faces while adding structure to soft round features."
    },
    {
      "id": 21,
      "name": "Round Thin Metal",
      "image": "https://example.com/sunglasses21.jpg",
      "price": 1799,
      "faceShapeCompatibility": ["Square", "Heart"],
      "description": "Delicate circular frames soften angular features while balancing wider forehead of heart shapes."
    },
    {
      "id": 22,
      "name": "Square Thick Acetate",
      "image": "https://example.com/sunglasses22.jpg",
      "price": 1599,
      "faceShapeCompatibility": ["Round", "Oval"],
      "description": "Bold angular design adds definition to soft round features while complementing balanced oval proportions."
    },
    {
      "id": 23,
      "name": "Cat-Eye Subtle",
      "image": "https://example.com/sunglasses23.jpg",
      "price": 1899,
      "faceShapeCompatibility": ["Diamond", "Oblong"],
      "description": "Gentle upsweep highlights diamond cheekbones while adding width to narrow oblong faces."
    },
    {
      "id": 24,
      "name": "Oval Thin Rim",
      "image": "https://example.com/sunglasses24.jpg",
      "price": 1499,
      "faceShapeCompatibility": ["Square", "Heart"],
      "description": "Soft curves soften angular jawlines while balancing wider forehead of heart shapes."
    },
    {
      "id": 25,
      "name": "Rectangle Flat Top",
      "image": "https://example.com/sunglasses25.jpg",
      "price": 1699,
      "faceShapeCompatibility": ["Oblong", "Diamond"],
      "description": "Horizontal lines break up facial length while complementing angular diamond features."
    },
    {
      "id": 26,
      "name": "Butterfly Bold",
      "image": "https://example.com/sunglasses26.jpg",
      "price": 2099,
      "faceShapeCompatibility": ["Heart", "Oval"],
      "description": "Wide top narrows toward bottom, balancing heart proportions while flattering oval symmetry."
    },
    {
      "id": 27,
      "name": "Geometric Hexagon",
      "image": "https://example.com/sunglasses27.jpg",
      "price": 2399,
      "faceShapeCompatibility": ["Round", "Square"],
      "description": "Angular design adds structure to soft round features while softening strong square jawlines."
    },
    {
      "id": 28,
      "name": "Teardrop Double Bridge",
      "image": "https://example.com/sunglasses28.jpg",
      "price": 1899,
      "faceShapeCompatibility": ["Oblong", "Heart"],
      "description": "Tapered design adds width to narrow oblong faces while balancing wider heart forehead."
    },
    {
      "id": 29,
      "name": "Browline Thick",
      "image": "https://example.com/sunglasses29.jpg",
      "price": 1599,
      "faceShapeCompatibility": ["Oval", "Round"],
      "description": "Bold upper frame adds structure to round faces while enhancing balanced oval proportions."
    },
    {
      "id": 30,
      "name": "Shield Mirrored",
      "image": "https://example.com/sunglasses30.jpg",
      "price": 2199,
      "faceShapeCompatibility": ["Oblong", "Square"],
      "description": "Wide single lens adds width to narrow oblong faces while softening angular square features."
    },
    {
      "id": 31,
      "name": "Hexagon Metal",
      "image": "https://example.com/sunglasses31.jpg",
      "price": 1999,
      "faceShapeCompatibility": ["Diamond", "Heart"],
      "description": "Angular design highlights diamond cheekbones while balancing wider heart forehead."
    },
    {
      "id": 32,
      "name": "Rimless Round",
      "image": "https://example.com/sunglasses32.jpg",
      "price": 1799,
      "faceShapeCompatibility": ["Oval", "Oblong"],
      "description": "Minimal design doesn't overwhelm oval proportions while adding width to narrow oblong faces."
    },
    {
      "id": 33,
      "name": "Clubmaster Modern",
      "image": "https://example.com/sunglasses33.jpg",
      "price": 1699,
      "faceShapeCompatibility": ["Round", "Square"],
      "description": "Bold upper frame adds structure to round faces while softening strong square jawlines."
    },
    {
      "id": 34,
      "name": "Wrap Polarized",
      "image": "https://example.com/sunglasses34.jpg",
      "price": 2099,
      "faceShapeCompatibility": ["Oblong", "Diamond"],
      "description": "Curved design adds width to narrow oblong faces while complementing angular diamond features."
    },
    {
      "id": 35,
      "name": "Keyhole Round",
      "image": "https://example.com/sunglasses35.jpg",
      "price": 1499,
      "faceShapeCompatibility": ["Heart", "Oval"],
      "description": "Distinctive bridge detail draws attention to eyes, balancing heart shape while flattering oval symmetry."
    },
    {
      "id": 36,
      "name": "Phantos Bold",
      "image": "https://example.com/sunglasses36.jpg",
      "price": 1899,
      "faceShapeCompatibility": ["Square", "Diamond"],
      "description": "Rounded corners soften angular features of square and diamond face shapes."
    },
    {
      "id": 37,
      "name": "Oversized Square",
      "image": "https://example.com/sunglasses37.jpg",
      "price": 2299,
      "faceShapeCompatibility": ["Oval", "Heart"],
      "description": "Large proportions complement balanced oval features while adding width to narrower heart chin."
    },
    {
      "id": 38,
      "name": "Navigator Pilot",
      "image": "https://example.com/sunglasses38.jpg",
      "price": 1999,
      "faceShapeCompatibility": ["Oblong", "Round"],
      "description": "Wide design adds width to narrow oblong faces while adding structure to soft round features."
    },
    {
      "id": 39,
      "name": "Round Tortoise",
      "image": "https://example.com/sunglasses39.jpg",
      "price": 1599,
      "faceShapeCompatibility": ["Square", "Heart"],
      "description": "Circular frames soften angular jawlines and add width to narrower chins characteristic of heart-shaped faces."
    },
    {
      "id": 40,
      "name": "Square Gradient",
      "image": "https://example.com/sunglasses40.jpg",
      "price": 1799,
      "faceShapeCompatibility": ["Round", "Oval"],
      "description": "Structured silhouette adds definition to round faces while enhancing the natural symmetry of oval faces."
    },
    {
      "id": 41,
      "name": "Cat-Eye Crystal",
      "image": "https://example.com/sunglasses41.jpg",
      "price": 2199,
      "faceShapeCompatibility": ["Heart", "Diamond"],
      "description": "Upswept corners highlight cheekbones and balance wider foreheads of heart and diamond face shapes."
    },
    {
      "id": 42,
      "name": "Oval Gold",
      "image": "https://example.com/sunglasses42.jpg",
      "price": 1999,
      "faceShapeCompatibility": ["Square", "Diamond"],
      "description": "Gentle curves soften strong jawlines and angular features of square and diamond face shapes."
    },
    {
      "id": 43,
      "name": "Rectangle Sporty",
      "image": "https://example.com/sunglasses43.jpg",
      "price": 1899,
      "faceShapeCompatibility": ["Oblong", "Oval"],
      "description": "Horizontal lines break up facial length of oblong faces while enhancing natural oval symmetry."
    },
    {
      "id": 44,
      "name": "Butterfly Patterned",
      "image": "https://example.com/sunglasses44.jpg",
      "price": 2099,
      "faceShapeCompatibility": ["Heart", "Oval"],
      "description": "Wide top narrows toward bottom, balancing wider forehead of heart shapes while flattering oval proportions."
    },
    {
      "id": 45,
      "name": "Geometric Clear",
      "image": "https://example.com/sunglasses45.jpg",
      "price": 2499,
      "faceShapeCompatibility": ["Round", "Diamond"],
      "description": "Angular design adds definition to soft round features while complementing striking diamond cheekbones."
    },
    {
      "id": 46,
      "name": "Teardrop Vintage",
      "image": "https://example.com/sunglasses46.jpg",
      "price": 1899,
      "faceShapeCompatibility": ["Oblong", "Heart"],
      "description": "Tapered design adds width to narrow oblong faces while balancing wider forehead of heart shapes."
    },
    {
      "id": 47,
      "name": "Browline Thin",
      "image": "https://example.com/sunglasses47.jpg",
      "price": 1699,
      "faceShapeCompatibility": ["Oval", "Round"],
      "description": "Distinctive upper frame adds structure to round faces while enhancing balanced oval proportions."
    },
    {
      "id": 48,
      "name": "Shield Sport",
      "image": "https://example.com/sunglasses48.jpg",
      "price": 2199,
      "faceShapeCompatibility": ["Oblong", "Square"],
      "description": "Wide single lens adds width to narrow oblong faces while softening angular square features."
    },
    {
      "id": 49,
      "name": "Hexagon Bold",
      "image": "https://example.com/sunglasses49.jpg",
      "price": 2399,
      "faceShapeCompatibility": ["Diamond", "Heart"],
      "description": "Angular design highlights diamond cheekbones while balancing wider forehead of heart shapes."
    },
    {
      "id": 50,
      "name": "Rimless Lightweight",
      "image": "https://example.com/sunglasses50.jpg",
      "price": 1899,
      "faceShapeCompatibility": ["Oval", "Oblong"],
      "description": "Minimal design doesn't overwhelm oval proportions while adding subtle width to narrow oblong faces."
    },
    {
      "id": 51,
      "name": "Clubmaster Retro",
      "image": "https://example.com/sunglasses51.jpg",
      "price": 1799,
      "faceShapeCompatibility": ["Round", "Square"],
      "description": "Bold upper frame adds structure to round faces while softening strong square jawlines."
    },
    {
      "id": 52,
      "name": "Wrap Athletic",
      "image": "https://example.com/sunglasses52.jpg",
      "price": 1999,
      "faceShapeCompatibility": ["Oblong", "Diamond"],
      "description": "Curved design adds width to narrow oblong faces while complementing angular diamond features."
    },
    {
      "id": 53,
      "name": "Keyhole Vintage",
      "image": "https://example.com/sunglasses53.jpg",
      "price": 1599,
      "faceShapeCompatibility": ["Heart", "Oval"],
      "description": "Distinctive bridge detail draws attention to eyes, balancing heart shape while flattering oval symmetry."
    },
    {
      "id": 54,
      "name": "Phantos Soft",
      "image": "https://example.com/sunglasses54.jpg",
      "price": 1899,
      "faceShapeCompatibility": ["Square", "Diamond"],
      "description": "Rounded corners soften angular features of square and diamond face shapes."
    },
    {
      "id": 55,
      "name": "Oversized Glam",
      "image": "https://example.com/sunglasses55.jpg",
      "price": 2499,
      "faceShapeCompatibility": ["Oval", "Heart"],
      "description": "Large proportions complement balanced oval features while adding width to narrower heart chin."
    },
    {
      "id": 56,
      "name": "Navigator Bold",
      "image": "https://example.com/sunglasses56.jpg",
      "price": 2199,
      "faceShapeCompatibility": ["Oblong", "Round"],
      "description": "Wide design adds width to narrow oblong faces while adding structure to soft round features."
    },
    {
      "id": 57,
      "name": "Round Thin Metal",
      "image": "https://example.com/sunglasses57.jpg",
      "price": 1999,
      "faceShapeCompatibility": ["Square", "Heart"],
      "description": "Delicate circular frames soften angular features while balancing wider forehead of heart shapes."
    },
    {
      "id": 58,
      "name": "Square Thick Acetate",
      "image": "https://example.com/sunglasses58.jpg",
      "price": 1799,
      "faceShapeCompatibility": ["Round", "Oval"],
      "description": "Bold angular design adds definition to soft round features while complementing balanced oval proportions."
    },
    {
      "id": 59,
      "name": "Cat-Eye Subtle",
      "image": "https://example.com/sunglasses59.jpg",
      "price": 2099,
      "faceShapeCompatibility": ["Diamond", "Oblong"],
      "description": "Gentle upsweep highlights diamond cheekbones while adding width to narrow oblong faces."
    },
    {
      "id": 60,
      "name": "Oval Thin Rim",
      "image": "https://example.com/sunglasses60.jpg",
      "price": 1699,
      "faceShapeCompatibility": ["Square", "Heart"],
      "description": "Soft curves soften angular jawlines while balancing wider forehead of heart shapes."
    },
    {
      "id": 61,
      "name": "Rectangle Flat Top",
      "image": "https://example.com/sunglasses61.jpg",
      "price": 1899,
      "faceShapeCompatibility": ["Oblong", "Diamond"],
      "description": "Horizontal lines break up facial length while complementing angular diamond features."
    },
    {
      "id": 62,
      "name": "Butterfly Bold",
      "image": "https://example.com/sunglasses62.jpg",
      "price": 2299,
      "faceShapeCompatibility": ["Heart", "Oval"],
      "description": "Wide top narrows toward bottom, balancing heart proportions while flattering oval symmetry."
    },
    {
      "id": 63,
      "name": "Geometric Hexagon",
      "image": "https://example.com/sunglasses63.jpg",
      "price": 2599,
      "faceShapeCompatibility": ["Round", "Square"],
      "description": "Angular design adds structure to soft round features while softening strong square jawlines."
    },
    {
      "id": 64,
      "name": "Teardrop Double Bridge",
      "image": "https://example.com/sunglasses64.jpg",
      "price": 2099,
      "faceShapeCompatibility": ["Oblong", "Heart"],
      "description": "Tapered design adds width to narrow oblong faces while balancing wider heart forehead."
    },
    {
      "id": 65,
      "name": "Browline Thick",
      "image": "https://example.com/sunglasses65.jpg",
      "price": 1799,
      "faceShapeCompatibility": ["Oval", "Round"],
      "description": "Bold upper frame adds structure to round faces while enhancing balanced oval proportions."
    },
    {
      "id": 66,
      "name": "Shield Mirrored",
      "image": "https://example.com/sunglasses66.jpg",
      "price": 2399,
      "faceShapeCompatibility": ["Oblong", "Square"],
      "description": "Wide single lens adds width to narrow oblong faces while softening angular square features."
    },
    {
      "id": 67,
      "name": "Hexagon Metal",
      "image": "https://example.com/sunglasses67.jpg",
      "price": 2199,
      "faceShapeCompatibility": ["Diamond", "Heart"],
      "description": "Angular design highlights diamond cheekbones while balancing wider heart forehead."
    },
    {
      "id": 68,
      "name": "Rimless Round",
      "image": "https://example.com/sunglasses68.jpg",
      "price": 1999,
      "faceShapeCompatibility": ["Oval", "Oblong"],
      "description": "Minimal design doesn't overwhelm oval proportions while adding width to narrow oblong faces."
    },
    {
      "id": 69,
      "name": "Clubmaster Modern",
      "image": "https://example.com/sunglasses69.jpg",
      "price": 1899,
      "faceShapeCompatibility": ["Round", "Square"],
      "description": "Bold upper frame adds structure to round faces while softening strong square jawlines."
    },
    {
      "id": 70,
      "name": "Wrap Polarized",
      "image": "https://example.com/sunglasses70.jpg",
      "price": 2299,
      "faceShapeCompatibility": ["Oblong", "Diamond"],
      "description": "Curved design adds width to narrow oblong faces while complementing angular diamond features."
    },
    {
      "id": 71,
      "name": "Keyhole Round",
      "image": "https://example.com/sunglasses71.jpg",
      "price": 1699,
      "faceShapeCompatibility": ["Heart", "Oval"],
      "description": "Distinctive bridge detail draws attention to eyes, balancing heart shape while flattering oval symmetry."
    },
    {
      "id": 72,
      "name": "Phantos Bold",
      "image": "https://example.com/sunglasses72.jpg",
      "price": 2099,
      "faceShapeCompatibility": ["Square", "Diamond"],
      "description": "Rounded corners soften angular features of square and diamond face shapes."
    },
    {
      "id": 73,
      "name": "Oversized Square",
      "image": "https://example.com/sunglasses73.jpg",
      "price": 2499,
      "faceShapeCompatibility": ["Oval", "Heart"],
      "description": "Large proportions complement balanced oval features while adding width to narrower heart chin."
    },
    {
      "id": 74,
      "name": "Navigator Pilot",
      "image": "https://example.com/sunglasses74.jpg",
      "price": 2199,
      "faceShapeCompatibility": ["Oblong", "Round"],
      "description": "Wide design adds width to narrow oblong faces while adding structure to soft round features."
    },
    {
      "id": 75,
      "name": "Round Tortoise",
      "image": "https://example.com/sunglasses75.jpg",
      "price": 1799,
      "faceShapeCompatibility": ["Square", "Heart"],
      "description": "Circular frames soften angular jawlines and add width to narrower chins characteristic of heart-shaped faces."
    },
    {
      "id": 76,
      "name": "Square Gradient",
      "image": "https://example.com/sunglasses76.jpg",
      "price": 1999,
      "faceShapeCompatibility": ["Round", "Oval"],
      "description": "Structured silhouette adds definition to round faces while enhancing the natural symmetry of oval faces."
    },
    {
      "id": 77,
      "name": "Cat-Eye Crystal",
      "image": "https://example.com/sunglasses77.jpg",
      "price": 2399,
      "faceShapeCompatibility": ["Heart", "Diamond"],
      "description": "Upswept corners highlight cheekbones and balance wider foreheads of heart and diamond face shapes."
    },
    {
      "id": 78,
      "name": "Oval Gold",
      "image": "https://example.com/sunglasses78.jpg",
      "price": 2199,
      "faceShapeCompatibility": ["Square", "Diamond"],
      "description": "Gentle curves soften strong jawlines and angular features of square and diamond face shapes."
    },
    {
      "id": 79,
      "name": "Rectangle Sporty",
      "image": "https://example.com/sunglasses79.jpg",
      "price": 2099,
      "faceShapeCompatibility": ["Oblong", "Oval"],
      "description": "Horizontal lines break up facial length of oblong faces while enhancing natural oval symmetry."
    },
    {
      "id": 80,
      "name": "Butterfly Patterned",
      "image": "https://example.com/sunglasses80.jpg",
      "price": 2299,
      "faceShapeCompatibility": ["Heart", "Oval"],
      "description": "Wide top narrows toward bottom, balancing wider forehead of heart shapes while flattering oval proportions."
    },
    {
      "id": 81,
      "name": "Geometric Clear",
      "image": "https://example.com/sunglasses81.jpg",
      "price": 2699,
      "faceShapeCompatibility": ["Round", "Diamond"],
      "description": "Angular design adds definition to soft round features while complementing striking diamond cheekbones."
    },
    {
      "id": 82,
      "name": "Teardrop Vintage",
      "image": "https://example.com/sunglasses82.jpg",
      "price": 2099,
      "faceShapeCompatibility": ["Oblong", "Heart"],
      "description": "Tapered design adds width to narrow oblong faces while balancing wider forehead of heart shapes."
    },
    {
      "id": 83,
      "name": "Browline Thin",
      "image": "https://example.com/sunglasses83.jpg",
      "price": 1899,
      "faceShapeCompatibility": ["Oval", "Round"],
      "description": "Distinctive upper frame adds structure to round faces while enhancing balanced oval proportions."
    },
    {
      "id": 84,
      "name": "Shield Sport",
      "image": "https://example.com/sunglasses84.jpg",
      "price": 2399,
      "faceShapeCompatibility": ["Oblong", "Square"],
      "description": "Wide single lens adds width to narrow oblong faces while softening angular square features."
    },
    {
      "id": 85,
      "name": "Hexagon Bold",
      "image": "https://example.com/sunglasses85.jpg",
      "price": 2599,
      "faceShapeCompatibility": ["Diamond", "Heart"],
      "description": "Angular design highlights diamond cheekbones while balancing wider forehead of heart shapes."
    },
    {
      "id": 86,
      "name": "Rimless Lightweight",
      "image": "https://example.com/sunglasses86.jpg",
      "price": 2099,
      "faceShapeCompatibility": ["Oval", "Oblong"],
      "description": "Minimal design doesn't overwhelm oval proportions while adding subtle width to narrow oblong faces."
    },
    {
      "id": 87,
      "name": "Clubmaster Retro",
      "image": "https://example.com/sunglasses87.jpg",
      "price": 1999,
      "faceShapeCompatibility": ["Round", "Square"],
      "description": "Bold upper frame adds structure to round faces while softening strong square jawlines."
    },
    {
      "id": 88,
      "name": "Wrap Athletic",
      "image": "https://example.com/sunglasses88.jpg",
      "price": 2299,
      "faceShapeCompatibility": ["Oblong", "Diamond"],
      "description": "Curved design adds width to narrow oblong faces while complementing angular diamond features."
    },
    {
      "id": 89,
      "name": "Keyhole Vintage",
      "image": "https://example.com/sunglasses89.jpg",
      "price": 1799,
      "faceShapeCompatibility": ["Heart", "Oval"],
      "description": "Distinctive bridge detail draws attention to eyes, balancing heart shape while flattering oval symmetry."
    },
    {
      "id": 90,
      "name": "Phantos Soft",
      "image": "https://example.com/sunglasses90.jpg",
      "price": 2099,
      "faceShapeCompatibility": ["Square", "Diamond"],
      "description": "Rounded corners soften angular features of square and diamond face shapes."
    },
    {
      "id": 91,
      "name": "Oversized Glam",
      "image": "https://example.com/sunglasses91.jpg",
      "price": 2699,
      "faceShapeCompatibility": ["Oval", "Heart"],
      "description": "Large proportions complement balanced oval features while adding width to narrower heart chin."
    },
    {
      "id": 92,
      "name": "Navigator Bold",
      "image": "https://example.com/sunglasses92.jpg",
      "price": 2399,
      "faceShapeCompatibility": ["Oblong", "Round"],
      "description": "Wide design adds width to narrow oblong faces while adding structure to soft round features."
    },
    {
      "id": 93,
      "name": "Round Thin Metal",
      "image": "https://example.com/sunglasses93.jpg",
      "price": 2199,
      "faceShapeCompatibility": ["Square", "Heart"],
      "description": "Delicate circular frames soften angular features while balancing wider forehead of heart shapes."
    },
    {
      "id": 94,
      "name": "Square Thick Acetate",
      "image": "https://example.com/sunglasses94.jpg",
      "price": 1999,
      "faceShapeCompatibility": ["Round", "Oval"],
      "description": "Bold angular design adds definition to soft round features while complementing balanced oval proportions."
    },
    {
      "id": 95,
      "name": "Cat-Eye Subtle",
      "image": "https://example.com/sunglasses95.jpg",
      "price": 2299,
      "faceShapeCompatibility": ["Diamond", "Oblong"],
      "description": "Gentle upsweep highlights diamond cheekbones while adding width to narrow oblong faces."
    },
    {
      "id": 96,
      "name": "Oval Thin Rim",
      "image": "https://example.com/sunglasses96.jpg",
      "price": 1899,
      "faceShapeCompatibility": ["Square", "Heart"],
      "description": "Soft curves soften angular jawlines while balancing wider forehead of heart shapes."
    },
    {
      "id": 97,
      "name": "Rectangle Flat Top",
      "image": "https://example.com/sunglasses97.jpg",
      "price": 2099,
      "faceShapeCompatibility": ["Oblong", "Diamond"],
      "description": "Horizontal lines break up facial length while complementing angular diamond features."
    },
    {
      "id": 98,
      "name": "Butterfly Bold",
      "image": "https://example.com/sunglasses98.jpg",
      "price": 2499,
      "faceShapeCompatibility": ["Heart", "Oval"],
      "description": "Wide top narrows toward bottom, balancing heart proportions while flattering oval symmetry."
    },
    {
      "id": 99,
      "name": "Geometric Hexagon",
      "image": "https://example.com/sunglasses99.jpg",
      "price": 2799,
      "faceShapeCompatibility": ["Round", "Square"],
      "description": "Angular design adds structure to soft round features while softening strong square jawlines."
    },
    {
      "id": 100,
      "name": "Teardrop Double Bridge",
      "image": "https://example.com/sunglasses100.jpg",
      "price": 2299,
      "faceShapeCompatibility": ["Oblong", "Heart"],
      "description": "Tapered design adds width to narrow oblong faces while balancing wider heart forehead."
    },
    {
      "id": 101,
      "name": "Browline Thick",
      "image": "https://example.com/sunglasses101.jpg",
      "price": 1999,
      "faceShapeCompatibility": ["Oval", "Round"],
      "description": "Bold upper frame adds structure to round faces while enhancing balanced oval proportions."
    },
    {
      "id": 102,
      "name": "Shield Mirrored",
      "image": "https://example.com/sunglasses102.jpg",
      "price": 2599,
      "faceShapeCompatibility": ["Oblong", "Square"],
      "description": "Wide single lens adds width to narrow oblong faces while softening angular square features."
    },
    {
      "id": 103,
      "name": "Hexagon Metal",
      "image": "https://example.com/sunglasses103.jpg",
      "price": 2399,
      "faceShapeCompatibility": ["Diamond", "Heart"],
      "description": "Angular design highlights diamond cheekbones while balancing wider heart forehead."
    },
    {
      "id": 104,
      "name": "Rimless Round",
      "image": "https://example.com/sunglasses104.jpg",
      "price": 2199,
      "faceShapeCompatibility": ["Oval", "Oblong"],
      "description": "Minimal design doesn't overwhelm oval proportions while adding width to narrow oblong faces."
    },
    {
      "id": 105,
      "name": "Clubmaster Modern",
      "image": "https://example.com/sunglasses105.jpg",
      "price": 2099,
      "faceShapeCompatibility": ["Round", "Square"],
      "description": "Bold upper frame adds structure to round faces while softening strong square jawlines."
    },
    {
      "id": 106,
      "name": "Wrap Polarized",
      "image": "https://example.com/sunglasses106.jpg",
      "price": 2499,
      "faceShapeCompatibility": ["Oblong", "Diamond"],
      "description": "Curved design adds width to narrow oblong faces while complementing angular diamond features."
    },
    {
      "id": 107,
      "name": "Keyhole Round",
      "image": "https://example.com/sunglasses107.jpg",
      "price": 1899,
      "faceShapeCompatibility": ["Heart", "Oval"],
      "description": "Distinctive bridge detail draws attention to eyes, balancing heart shape while flattering oval symmetry."
    },
    {
      "id": 108,
      "name": "Phantos Bold",
      "image": "https://example.com/sunglasses108.jpg",
      "price": 2299,
      "faceShapeCompatibility": ["Square", "Diamond"],
      "description": "Rounded corners soften angular features of square and diamond face shapes."
    },
    {
      "id": 109,
      "name": "Oversized Square",
      "image": "https://example.com/sunglasses109.jpg",
      "price": 2699,
      "faceShapeCompatibility": ["Oval", "Heart"],
      "description": "Large proportions complement balanced oval features while adding width to narrower heart chin."
    },
    {
      "id": 110,
      "name": "Navigator Pilot",
      "image": "https://example.com/sunglasses110.jpg",
      "price": 2399,
      "faceShapeCompatibility": ["Oblong", "Round"],
      "description": "Wide design adds width to narrow oblong faces while adding structure to soft round features."
    },
    {
      "id": 111,
      "name": "Round Tortoise",
      "image": "https://example.com/sunglasses111.jpg",
      "price": 1999,
      "faceShapeCompatibility": ["Square", "Heart"],
      "description": "Circular frames soften angular jawlines and add width to narrower chins characteristic of heart-shaped faces."
    },
    {
      "id": 112,
      "name": "Square Gradient",
      "image": "https://example.com/sunglasses112.jpg",
      "price": 2199,
      "faceShapeCompatibility": ["Round", "Oval"],
      "description": "Structured silhouette adds definition to round faces while enhancing the natural symmetry of oval faces."
    },
    {
      "id": 113,
      "name": "Cat-Eye Crystal",
      "image": "https://example.com/sunglasses113.jpg",
      "price": 2599,
      "faceShapeCompatibility": ["Heart", "Diamond"],
      "description": "Upswept corners highlight cheekbones and balance wider foreheads of heart and diamond face shapes."
    },
    {
      "id": 114,
      "name": "Oval Gold",
      "image": "https://example.com/sunglasses114.jpg",
      "price": 2399,
      "faceShapeCompatibility": ["Square", "Diamond"],
      "description": "Gentle curves soften strong jawlines and angular features of square and diamond face shapes."
    },
    {
      "id": 115,
      "name": "Rectangle Sporty",
      "image": "https://example.com/sunglasses115.jpg",
      "price": 2299,
      "faceShapeCompatibility": ["Oblong", "Oval"],
      "description": "Horizontal lines break up facial length of oblong faces while enhancing natural oval symmetry."
    },
    {
      "id": 116,
      "name": "Butterfly Patterned",
      "image": "https://example.com/sunglasses116.jpg",
      "price": 2499,
      "faceShapeCompatibility": ["Heart", "Oval"],
      "description": "Wide top narrows toward bottom, balancing wider forehead of heart shapes while flattering oval proportions."
    },
    {
      "id": 117,
      "name": "Geometric Clear",
      "image": "https://example.com/sunglasses117.jpg",
      "price": 2899,
      "faceShapeCompatibility": ["Round", "Diamond"],
      "description": "Angular design adds definition to soft round features while complementing striking diamond cheekbones."
    },
    {
      "id": 118,
      "name": "Teardrop Vintage",
      "image": "https://example.com/sunglasses118.jpg",
      "price": 2299,
      "faceShapeCompatibility": ["Oblong", "Heart"],
      "description": "Tapered design adds width to narrow oblong faces while balancing wider forehead of heart shapes."
    },
    {
      "id": 119,
      "name": "Browline Thin",
      "image": "https://example.com/sunglasses119.jpg",
      "price": 2099,
      "faceShapeCompatibility": ["Oval", "Round"],
      "description": "Distinctive upper frame adds structure to round faces while enhancing balanced oval proportions."
    },
    {
      "id": 120,
      "name": "Shield Sport",
      "image": "https://example.com/sunglasses120.jpg",
      "price": 2599,
      "faceShapeCompatibility": ["Oblong", "Square"],
      "description": "Wide single lens adds width to narrow oblong faces while softening angular square features."
    }
  ]
  },

}

export const getProductsByGender = (gender, category = null, limit = 6) => {
  // Normalize gender to lowercase
  const normalizedGender = normalizeGender(gender);
  
  // Check if gender exists, fallback to unisex if not
  if (!products[normalizedGender]) {
    console.warn(`Gender "${normalizedGender}" not found, falling back to unisex products`);
    gender = 'unisex';
  } else {
    gender = normalizedGender;
  }
  
  const genderProducts = products[gender];
  
  // If genderProducts is still undefined, return empty array
  if (!genderProducts) {
    console.error('No products available for the specified gender');
    return [];
  }
  
  if (category && genderProducts[category]) {
    return genderProducts[category].slice(0, limit) || [];
  }
  
  // Return all products for the gender (mixed categories)
  const allProducts = [];
  
  // Collect all products from all categories
  Object.keys(genderProducts).forEach(cat => {
    if (Array.isArray(genderProducts[cat])) {
      allProducts.push(...genderProducts[cat]);
    }
  });
  
  return allProducts.slice(0, limit) || [];
};

export const getPersonalizedProducts = (gender, faceShape, skinTone, limit = 6) => {
  // Normalize gender to lowercase
  const normalizedGender = normalizeGender(gender);
  
  // Get base products with error handling
  let baseProducts = getProductsByGender(normalizedGender, null, limit * 2);
  
  // If no products found, return empty array
  if (!Array.isArray(baseProducts) || baseProducts.length === 0) {
    console.warn('No products found for personalization');
    return [];
  }
  
  // Simple personalization based on features
  const personalizedProducts = baseProducts.filter(product => {
    let score = 0;
    
    // Face shape based recommendations
    if (faceShape === 'oval') {
      if (product.tags && product.tags.includes('versatile')) score += 2;
    } else if (faceShape === 'round') {
      if (product.tags && product.tags.includes('structured')) score += 2;
    } else if (faceShape === 'square') {
      if (product.tags && product.tags.includes('soft')) score += 2;
    }
    
    // Skin tone based recommendations (updated to include "Brown")
    if (skinTone === 'fair' || skinTone === 'light') {
      if (product.colors && product.colors.some(color => ['#1E3A8A', '#7C3AED', '#DC2626'].includes(color))) score += 1;
    } else if (skinTone === 'medium' || skinTone === 'olive' || skinTone === 'brown') {
      if (product.colors && product.colors.some(color => ['#047857', '#F59E0B', '#EC4899'].includes(color))) score += 1;
    } else if (skinTone === 'dark' || skinTone === 'deep') {
      if (product.colors && product.colors.some(color => ['#FFFFFF', '#F59E0B', '#10B981'].includes(color))) score += 1;
    }
    
    return score > 0;
  });
  
  // Return personalized products if available, otherwise return base products
  return personalizedProducts.length > 0 ? personalizedProducts.slice(0, limit) : baseProducts.slice(0, limit);
};

export const getProductsByCategory = (gender, category, limit = 6) => {
  if (!products[gender]) {
    console.warn(`Gender "${gender}" not found, falling back to unisex products`);
    gender = 'unisex';
  }
  
  const genderProducts = products[gender];
  
  if (!genderProducts || !genderProducts[category]) {
    console.warn(`Category "${category}" not found for gender "${gender}"`);
    return [];
  }
  
  return genderProducts[category].slice(0, limit);
};

export const getCategoriesByGender = (gender) => {
  if (!products[gender]) {
    console.warn(`Gender "${gender}" not found, falling back to unisex products`);
    gender = 'unisex';
  }
  
  const genderProducts = products[gender];
  
  if (!genderProducts) {
    return [];
  }
  
  return Object.keys(genderProducts).filter(category => 
    Array.isArray(genderProducts[category]) && genderProducts[category].length > 0
  );
};