const categories = [
    { id: 1, name: 'Skincare', image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1671638859-41n2xR5IlLL._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*' },
    { id: 2, name: 'Makeup', image: 'https://www.mentedcosmetics.com/cdn/shop/products/eyeshadow2020_1.jpg?v=1662647787' },
    { id: 3, name: 'Haircare', image: 'https://www.ethicalbrandco.com.au/wp-content/uploads/2020/03/FFT_group_800x800.jpg' },
    { id: 4, name: 'Shower', image: 'https://jurlique.com.au/cdn/shop/files/ba1f66dc1cba6a9a4884a94852b18297f596d437d4722e2c2b6fae7d86b9fc76.jpg?v=1713362891&width=1350' },
    { id: 5, name: 'Fragrances', image: 'https://www.instacart.com/image-server/1200x1200/www.instacart.com/assets/domains/product-image/file/large_b338d856-3a6a-462b-8c81-b28faf78037f.jpg' },
    { id: 6, name: 'Candles', image: 'https://m.media-amazon.com/images/I/31jEjZhejEL.jpg' },
   
  ];
  
  const products = [
    {
      id: 1,
      name: 'La Roshe-Posay serum',
      description: 'Best hyaluronic acid serum. Rich, dermatologist-developed moisturizer.',
      price: 29.99,
      categoryId: 1,
      image: 'https://cdn.salla.sa/dNNgg/njsY3ZT1CE28U0zE6Qmg2dryERzjzPVDLM2Mq4Yu.jpg',
    },
    {
      id: 2,
      name: 'Medik8 vitamin c',
      description: 'Helps brighten your skin. Dermatologist-developed moisturizer.',
      price: 30.99,
      categoryId: 1,
      image: 'https://media.glamourmagazine.co.uk/photos/6465ec2fa6025497ad889dcf/master/w_1280,c_limit/FACE%20SERUM%20180523%201.jpg',
    },
    {
      id: 3,
      name: 'Clinique moisturizer',
      description: 'Clinique Dramatically Different Moisturizing Cream is a rich, dermatologist-developed moisturizer for dry and dry combination skin types.',
      price: 19.99,
      categoryId: 1,
      image: 'https://static.beautytocare.com/media/catalog/product/cache/global/image/85e4522595efc69f496374d01ef2bf13/c/l/clinique-dramatically-different-moisturizing-cream-50ml.jpg',
    },
    {
      id: 4,
      name: 'Kombucha serum',
      description: 'Great for when your skin is acting up. Developed for all skin types.',
      price: 19.99,
      categoryId: 1,
      image: 'https://mesugatra.com/cdn/shop/files/14700206_1.jpg?v=1697637347',
    },
    {
      id: 5,
      name: 'SK-II facial essence',
      description: 'Eliminates all blackheads and leaves your skin supple smooth.',
      price: 29.99,
      categoryId: 1,
      image: 'https://sv4-cdn.stylevana.com/media/catalog/product/cache/005b379b5fee834623527f49c94522bc/s/k/sk-ii-facial-treatment-essence-pitera-essence--234.jpg',
    },
    {
      id: 6,
      name: 'Nars rising eyeshadow palette',
      description: 'Beauty you can love.',
      price: 29.99,
      categoryId: 2,
      image: 'https://www.narscosmetics.eu/dw/image/v2/BCMQ_PRD/on/demandware.static/-/Sites-itemmaster_NARS/default/dwa7a93877/hi-res/2023/OrgasmCollection2023/NARS_SP23_OrgasmCollection_PDPCrop_Soldier_9well_EyeshadowPalette_OrgasmRising_Open_GLBL_2000x2000_B.jpg?sw=1500&sh=1500&sm=fit',
    },
    {
      id: 7,
      name: 'Flormar silk matte liquid lipstick',
      description: 'A creamy rich lipstick formula with high color payoff in a no-shine matte finish.',
      price: 29.99,
      categoryId: 2,
      image: 'https://media.naheed.pk/catalog/product/cache/49dcd5d85f0fa4d590e132d0368d8132/1/2/1206442-1.jpg',
    },
    {
      id: 8,
      name: 'Makeup revolution mascara',
      description: 'Best for days when you want length and volume. High quality.',
      price: 29.99,
      categoryId: 2,
      image: 'https://static.thcdn.com/images/large/original//productimg/1600/1600/12657003-6424789914455688.jpg',
    },
    {
      id: 9,
      name: 'Real Techniques makeup brushes',
      description: 'Set of brushes with foundation brush, powder brush, contour brush, eyeshadow brush, and quality beauty blender.',
      price: 29.99,
      categoryId: 2,
      image: 'https://realtechniques.com/cdn/shop/files/1786_RT_EverydayEssentialsSet_OOP_Front_300dpiRGB_43d4fd29-39b4-4777-b419-cb2897a8ad71_1200x.jpg?v=1683303836',
    },
    {
      id: 10,
      name: 'Nars loose setting powder',
      description: 'A lightweight loose setting powder that blends seamlessly to set makeup for up to 14 hours!',
      price: 29.99,
      categoryId: 2,
      image: 'https://m.media-amazon.com/images/I/61I0C2ontsL.jpg',
    },
    {
      id: 11,
      name: 'Casablanca matte bronzer',
      description: 'A refillable microsuede, matte bronzer that adds buildable warmth and definition for a naturally sun-kissed tan effect.',
      price: 29.99,
      categoryId: 2,
      image: 'https://i5.walmartimages.com/asr/70dbbf93-0aac-4286-ab95-586a40c742bf.2013f530fff140c371efe2a5d57b4772.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
    },
    {
      id: 12,
      name: 'Mielle hair oil',
      description: 'Nourishes your scalp and strengthens your hair.',
      price: 29.99,
      categoryId: 3,
      image: 'https://assets.vogue.com/photos/62d5a0bf605bc16477f56a6c/3:4/w_748%2Cc_limit/slide_13.jpg',
    },
    {
      id: 13,
      name: 'Mielle coil sculpting custard',
      description: 'Defines and hydrates your curls for a lasting effect.',
      price: 29.99,
      categoryId: 3,
      image: 'https://m.media-amazon.com/images/I/41isHuaK5lS._SL500_.jpg',
    },
    {
      id: 14,
      name: 'Curl cloud hair gel',
      description: 'Adds definition and shine to your curls.',
      price: 29.99,
      categoryId: 3,
      image: 'https://cdn.shopify.com/s/files/1/0277/3201/7249/files/711No5YUqQS._SL1500.webp?v=1672953155',
    },
    {
      id: 15,
      name: 'Got 2b hair glue',
      description: 'Provides strong hold for styling and shaping.',
      price: 29.99,
      categoryId: 3,
      image: 'https://www.true.co.ke/cdn/shop/products/Got2b-Ultra-Glued-Styling-Gel-For-Edges-150ml_1024x1024.jpg?v=1616059666',
    },
    {
      id: 16,
      name: 'Zandaux flat iron',
      description: 'Crafted from advanced materials, features warp-resistant titanium plates.',
      price: 29.99,
      categoryId: 3,
      image: 'https://zandaux.com/image/images/643266c9e32d1.webp?p=full',
    },
    {
      id: 17,
      name: 'Vega professional hair brush',
      description: 'High-quality brush for professional styling.',
      price: 29.99,
      categoryId: 3,
      image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/hair-brush/6/u/1/ceramix-shine-round-brush-43mm-hair-brush-vpphb-03-vega-original-imagnhcggsghgnng.jpeg?q=20',
    },
   
        {

          id: 18,
          name: 'At the beach shower gel',
          description: 'This reﬁllable microsuede, matte bronzer adds buildable warmth and deﬁnition for a naturally sun-kissed tan effect. Feels lightweight and silky.',
          price: 29.99,
          categoryId: 4,
          image: 'https://www.bathandbodyworks.ca/on/demandware.static/-/Sites-bbw_ca-storefront-catalog/default/dw5115d1e6/hires/026266712.jpg'
        },
        {
          id: 19,
          name: 'Pantene shower gel',
          description: 'This reﬁllable microsuede, matte bronzer adds buildable warmth and deﬁnition for a naturally sun-kissed tan effect. Feels lightweight and silky.',
          price: 29.99,
          categoryId: 4,
          image: 'https://hips.hearstapps.com/hmg-prod/images/1-best-shower-products-pantene-micerelle-shampoo-1524513370.jpg'
        },
        {
          id: 20,
          name: 'Somerset milk shower gel',
          description: 'This refreshing shower gel is a rich cleanser for the body, offering a silky smooth touch to the skin. The softening foam gives an intense...',
          price: 29.99,
          categoryId: 4,
          image: 'https://www.webbsdirect.co.uk/images/products/large/833924.jpg'
        },
        {
          id: 21,
          name: 'Ray irish moss shower gel',
          description: 'This reﬁllable microsuede, matte bronzer adds buildable warmth and deﬁnition for a naturally sun-kissed tan effect. Feels lightweight and silky.',
          price: 29.99,
          categoryId: 4,
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbU2pVQrsYvv1GbjqIEZPg2vTE6J8v6iKJ3bB6eTZ0AubnFYqYy1ai-Ap7azAmf6-0UGk&usqp=CAU'
        },
        {
          id: 22,
          name: 'Byca body wash',
          description: 'This reﬁllable microsuede, matte bronzer adds buildable warmth and deﬁnition for a naturally sun-kissed tan effect. Feels lightweight and silky.',
          price: 29.99,
          categoryId: 4,
          image: 'https://static.smallable.com/1244921-648x648q80/cade-wood-cleansing-gel-480-ml.jpg'
        },
        {  
          id: 22,
          name: 'Plumeria Body Wash',
          description: 'This reﬁllable microsuede, matte bronzer adds buildable warmth and deﬁnition for a naturally sun-kissed tan effect. Feels lightweight and silky.',
          price: 29.99,
          categoryId: 4,
          image: 'https://dreamskinhaven.co.ke/wp-content/uploads/2023/07/026676456.jpg'
        },
        
       
        {
          id: 23,
          name: 'poison eau de toilette',
          description: 'Provocative and mysterious from its creation, Poison is the ultimate fragrant weapon of heightened seduction by Dior...',
          price: 30.99,
          categoryId: 5,
          image: 'https://static.sweetcare.pt/img/prd/488/v-638267402258635542/dior-002772di_01.jpg'
        },
        {
           
          id: 24,
          name: 'Black Orchid Eau de Parfum Set - TOM FORD',
          description: 'The dramatic Black Orchid Eau de Parfum opens with aphrodisiac black truffle and narcotic ylang ylang...',
          price: 23.99,
          categoryId: 5,
          image: 'https://storage.googleapis.com/scentfied/products/black-orchid-eau-de-parfum-set-tom-ford.webp'
        },
        {
          id: 25,
          name: 'Coco Mademoiselle chanel',
          description: 'The Coco Mademoiselle sparkling perfume begins with a seductive top note of Citrus and Bergamot...',
          price: 35.99,
          categoryId: 5,
          image: 'https://storage.googleapis.com/scentfied/products/coco-mademoiselle-eau-de-parfum.webp'
        },
        {
          id: 26,
          name: 'Baccarat Rouge 540',
          description: 'Luminous and sophisticated, Baccarat Rouge 540 lays on the skin like an amber floral and woody breeze...',
          price: 40.99,
          categoryId: 5,
          image: 'https://shopping-premiereavenue.com/medias/products/11184/500x500/baccarat-rouge-540-11184-9513661.jpg'
        },
        {
          id: 27,
          name: 'YSL Yves Saint Laurent Mon Paris',
          description: 'Mon Paris Eau de Parfum is a sweet fruity floral perfume for women...',
          price: 12.99,
          categoryId: 5,
          image: 'https://parfumaktion.ch/9292-large_default/ysl-yves-saint-laurent-mon-paris-set-50ml-bl-50ml.jpg'
        },
        {
          id: 28,
          name: 'The Dior Homme Sport Eau de Toilette',
          description: 'The new Dior Homme Sport Eau de Toilette plays with themes of freshness and sensuality...',
          price: 22.99,
          categoryId: 5,
          image: 'https://storage.googleapis.com/scentfied/products/the-dior-homme-sport-eau-de-toilette_5Xnb.webp'
        },
        {
          id: 29,
          name: 'Allure Homme Eau de Toilette Spray',
          description: 'Allure Homme Eau de Toilette Spray is a clean, crisp, warm and sexy fragrance...',
          price: 29.99,
          categoryId: 5,
          image: 'https://storage.googleapis.com/scentfied/products/allure-homme-eau-de-toilette-spray.webp'
        },
        {
          id: 30,
          name: 'Victoria’s Secret Bombshell Passion',
          description: 'This Eau de Parfum is a bouquet of electric florals...',
          price: 16.99,
          categoryId: 5,
          image: 'https://www.victoriassecret.com/p/874x1165/tif/4e/dc/4edc2e23ad2340a68de779b4a29fa6dc/111706547709_OF_F.jpg'
        },
        
        // For category6
        {
          id: 31,
          name: 'Vanilla Coco Scented Candle',
          description: 'The exotic scent of Coconut Vanilla carries you away to a bright summer beach...',
          price: 32.99,
          categoryId: 6                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 ,
          image: 'https://www.colishco.com/cdn/shop/products/VanillaCoco2wick_1445x.jpg?v=1686569676'
        },

        {
          id: 32,
          name: 'Bath Body Works White Barn Vanilla Bean',
          description: 'What it smells like: a creamy, cozy welcome home...',
          price: 30.99,
          categoryId: 6,
          image: 'https://tshop.r10s.jp/founder/cabinet/founderimages2/024339607.jpg?fitin=720%3A720'
        },

        {
            id: 33,
          name: 'Fancy Ceremony Scented Blue Glass Candle',
          description: 'Aromatize the room with our blue wax filled jar candle...',
          price: 40.99,
          categoryId: 6,
          image: 'https://www.purehomeandliving.com/cdn/shop/files/8907895093587_3.jpg?v=1693568829&width=1090'
        },
        {
          id: 34,
          name: 'Lalique The Night  Scented Candle',
          description: 'A scented candle featuring the luminous and sophisticated scent of Baccarat Rouge 540...',
          price: 35.99,
          categoryId: 6,
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0SWywblqYtt0-eKvsQuCYSETwPUKOVXV4Yw&s'
        },
        {
          id: 35,
          name: 'Maison Margiela Replica Lazy Sunday Morning Candle',
          description: 'Replica Lazy Sunday Morning candle evokes the soft sensation of freshly washed linen sheets...',
          price: 60.99,
          categoryId: 6,
          image: 'https://static.thcdn.com/productimg/960/960/13183547-9105070864109461.jpg'
        },
        {
          id: 36,
          name: 'White Barn Champagne Toast 3-Wick Scented Candle',
          description: 'The Champagne Toast 3-wick candle from Bath & Body Works...',
          price: 26.99,
          categoryId: 6,
          image: 'https://fnf.co.ke/wp-content/uploads/White-Barn-Champagne-Toast-3-Wick-Scented-Candle-e1696762206636.jpg'
        },
        {
          id: 37,
          name: 'HomeLights Luxury Scented Candle',
          description: 'This 3 wick soy blend candle is hand poured into a large glass jar...',
          price: 27.99,
          categoryId: 6,
          image: 'https://i.ebayimg.com/images/g/MfAAAOSwfdxm7QYK/s-l1200.jpg'
        },
        {
          id: 38,
          name: 'Maple Pumpkin Donut Colored Glass Candle',
          description: 'Perfect for cold winter days, this delicious-scented candle is a must-have for the holidays...',
          price: 28.99,
          categoryId: 6,
          image: 'https://theoldefarmstead.com/cdn/shop/files/FullSizeRender_f47ed67f-5abe-4ba1-8095-a0e8d37499f2_1200x.jpg?v=1724952373'
        },
        {
          id: 39,
          name: 'Blackberry Tea & Sage 3 Wick Candle',
          description: 'This fragrant candle has notes of ripe blackberry, herbal sage, and green tea...',
          price: 30.99,
          categoryId: 6,
          image: 'https://res.cloudinary.com/dioovnmjd/image/upload/w_600,h_600,c_lfill,f_auto/v1720435104/products/floral-leather-niche-candle'
        }
      ];
      
 

      
    
 
  export { categories, products };
  