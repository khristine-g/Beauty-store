//Data2.js
const groups = [
    { id: 1, name: 'Face', image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1671638859-41n2xR5IlLL._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*' },
    { id: 2, name: 'Lips', image: 'https://www.mentedcosmetics.com/cdn/shop/products/eyeshadow2020_1.jpg?v=1662647787' },
    { id: 3, name: 'Eyes', image: 'https://www.ethicalbrandco.com.au/wp-content/uploads/2020/03/FFT_group_800x800.jpg' },
    { id: 4, name: 'Skin', image: 'https://jurlique.com.au/cdn/shop/files/ba1f66dc1cba6a9a4884a94852b18297f596d437d4722e2c2b6fae7d86b9fc76.jpg?v=1713362891&width=1350' },
    
  ];
  
  const items = [
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
      name: 'e.l.f. Pink Quartz  Lip Oil',
      description: 'Eliminates all blackheads and leaves your skin supple smooth.',
      price: 29.99,
      categoryId: 2,
      image: 'https://media.ulta.com/i/ulta/2615649?w=800&$ProductCardNeutralBGLight$&fmt=auto',
    },
    {
      id: 6,
      name: 'Dior Addict lip glow oil',
      description: 'Beauty you can love.',
      price: 29.99,
      categoryId: 2,
      image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1728913834-dior-670d219e34b66.jpg?crop=1xw:1xh;center,top&resize=980:*',
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
      name: 'Dazller Luscious Lip Balm ',
      description: 'Best for days when you want length and volume. High quality.',
      price: 29.99,
      categoryId: 2,
      image: 'https://dazller.co.in/cdn/shop/files/frontimageBerry_1024x1024.jpg?v=1714040261',
    },
    {
      id: 9,
      name: 'The inkey list Caffeine Eye Cream',
      description: 'The inkey list’s Caffeine Eye Cream harnesses the anti-inflammatory, antioxidant powers of coffee to bring them to your skin.',
      price: 29.99,
      categoryId: 3,
      image: 'https://dreamskinhaven.co.ke/wp-content/uploads/2021/02/71j6QZrnvL._SL1500_.jpg',
    },
    {
      id: 10,
      name: 'LOréal paris revitalift laser renew eye cream',
      description: 'L’Oréal Paris Revitalift Laser Renew Eye Cream is your secret weapon for brighter, youthful-looking eyes. This powerful formula targets fine lines, wrinkles, and dark circles, leaving your eye area smoother and more radiant. Enriched with Pro-Xylane and Hyaluronic Acid, it deeply hydrates and rejuvenates, giving you a fresh, revitalized look every day.',
      price: 29.99,
      categoryId: 3,
      image: 'https://greenspoon.co.ke/wp-content/uploads/2024/06/greenspoon-LOreal-revivalift-laser-triple-action-eye-care-1-of-1-3.jpg',
    },
    {
      id: 11,
      name: 'Beauty for real mascara',
      description: 'A refillable microsuede, matte bronzer that adds buildable warmth and definition for a naturally sun-kissed tan effect.',
      price: 29.99,
      categoryId: 3,
      image: 'https://beautyforreal.com/cdn/shop/articles/hi-def-mascara-480_2048x.jpg?v=1479935802',
    },
    {
      id: 12,
      name: 'Beauty for real eyeliner',
      description: 'Beauty For Real Finish Line Liquid Eyeliner is a highly pigmented liquid eyeliner with a supple, saturated tip that glides across lids in one silky smooth black stroke. It’s the ultimate tool for both makeup newbies and beauty pros alike. Apply this liquid eyeliner looking straight into a mirror. ',
      price: 29.99,
      categoryId: 3,
      image: 'https://i5.walmartimages.com/seo/Beauty-For-Real-Finish-Line-Liquid-Eyeliner-Jet-Black-0-05-oz_61acf338-a3ae-4d03-8d97-ac4cebff37a5.35cd460cbae9b1b3ed5bdcce90601560.jpeg',
    },
    {
        id: 13,
        name: 'Real Techniques makeup brushes',
        description: 'Set of brushes with foundation brush, powder brush, contour brush, eyeshadow brush, and quality beauty blender.',
        price: 29.99,
        categoryId: 4,
        image: 'https://realtechniques.com/cdn/shop/files/1786_RT_EverydayEssentialsSet_OOP_Front_300dpiRGB_43d4fd29-39b4-4777-b419-cb2897a8ad71_1200x.jpg?v=1683303836',
      },
      {
        id: 14,
        name: 'Nars loose setting powder',
        description: 'A lightweight loose setting powder that blends seamlessly to set makeup for up to 14 hours!',
        price: 29.99,
        categoryId: 4,
        image: 'https://m.media-amazon.com/images/I/61I0C2ontsL.jpg',
      },
      {
        id: 15,
        name: 'Casablanca matte bronzer',
        description: 'A refillable microsuede, matte bronzer that adds buildable warmth and definition for a naturally sun-kissed tan effect.',
        price: 29.99,
        categoryId: 4,
        image: 'https://i5.walmartimages.com/asr/70dbbf93-0aac-4286-ab95-586a40c742bf.2013f530fff140c371efe2a5d57b4772.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
      }
     
];
      
 

      
    
 
export { groups, items };
