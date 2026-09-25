import { Room, MenuItem, GalleryItem, Landmark } from '../types';

export const HOTEL_INFO = {
  name: 'Hare Krishna Hotel',
  tagline: 'Modern Hospitality, Made Simple',
  locationDisplay: 'Valsad, Gujarat, India',
  city: 'Valsad',
  state: 'Gujarat',
  country: 'India',
  phoneDisplay: 'Available on enquiry',
  whatsappDisplay: 'Direct Message',
  emailDisplay: 'enquiries@harekrishnahotel-valsad.in',
  googleMapsQuery: 'Hare+Krishna+Hotel+Valsad+Gujarat',
  demoNotice: 'Website Redesign Concept • Valsad, Gujarat',
};

export const QUICK_INFO_CARDS = [
  {
    id: 'location',
    title: 'Valsad Location',
    subtitle: 'Strategic Connectivity',
    description: 'Conveniently situated in Valsad with easy access to city transit, highway links, and local landmarks.',
    icon: 'MapPin',
    actionText: 'View Location',
    actionHref: '#location',
  },
  {
    id: 'dining',
    title: 'Dining Options',
    subtitle: 'Fresh Meals & Service',
    description: 'Explore on-site dining options and enquire directly for daily specials and menu selections.',
    icon: 'UtensilsCrossed',
    actionText: 'Explore Dining',
    actionHref: '#dining',
  },
  {
    id: 'stay',
    title: 'Accommodation',
    subtitle: 'Comfortable Stay',
    description: 'Designed for corporate visitors, families, and travelers. Full room details available on enquiry.',
    icon: 'BedDouble',
    actionText: 'Browse Rooms',
    actionHref: '#rooms',
  },
  {
    id: 'availability',
    title: 'Direct Enquiry',
    subtitle: 'Guest Assistance',
    description: 'Submit your preferred dates and requirements for quick confirmation directly from the hotel team.',
    icon: 'CalendarCheck',
    actionText: 'Availability Enquiry',
    actionHref: '#availability',
  },
];

export const DEMO_ROOMS: Room[] = [
  {
    id: 'executive-comfort',
    name: 'Executive Room Option',
    tierTag: 'Sample Room Concept',
    tagline: 'Refined accommodation designed for solo and corporate guests',
    description: 'Comfortable air-conditioned room setup with functional workspace, high-speed Wi-Fi, and essential guest amenities.',
    longDescription: 'A modern accommodation concept for business and solo travelers visiting Valsad. Features a clean layout, dedicated work desk, and restful ambiance. Exact room configurations and features provided upon enquiry.',
    occupancy: 'Standard Occupancy',
    bedType: 'Comfort Bedding',
    sizeSqFt: 'Spacious Layout',
    amenities: ['Air Conditioning', 'Wi-Fi Access', 'Television', 'Work Desk', 'En-suite Bathroom', 'Housekeeping Service'],
    imageUrl: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80'
    ],
    pricingNote: 'Details & pricing available on enquiry',
  },
  {
    id: 'deluxe-family-suite',
    name: 'Family Suite Option',
    tierTag: 'Sample Room Concept',
    tagline: 'Generous space and comfort tailored for families and small groups',
    description: 'Expansive room arrangement offering comfortable seating, multi-guest bedding setup, and attentive guest service.',
    longDescription: 'An accommodation concept suited for families traveling through Valsad and South Gujarat. Designed for comfort, convenience, and privacy. Exact inclusions and room arrangements available on enquiry.',
    occupancy: 'Family / Multi-Guest',
    bedType: 'Double / Twin Setup',
    sizeSqFt: 'Generous Living Space',
    amenities: ['Air Conditioning', 'Wi-Fi Access', 'Television', 'Seating Space', 'Private Bathroom', 'Room Service Options'],
    imageUrl: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1000&q=80'
    ],
    pricingNote: 'Details & pricing available on enquiry',
  },
  {
    id: 'premium-royal-suite',
    name: 'Premium Suite Option',
    tierTag: 'Sample Room Concept',
    tagline: 'Elevated comfort with enhanced living space and tranquil ambiance',
    description: 'Premium suite layout featuring curated ambient lighting, upgraded furnishings, and personalized guest assistance.',
    longDescription: 'Our premier accommodation concept offering refined tranquility for leisure travelers and long stays in Valsad. Features modern interior touches and dedicated service. Full details and seasonal tariffs provided on enquiry.',
    occupancy: '2 - 3 Guests',
    bedType: 'Premium King Bedding',
    sizeSqFt: 'Expanded Suite Layout',
    amenities: ['Climate Control', 'High-Speed Wi-Fi', 'Smart Television', 'Upgraded Bath Amenities', 'Lounge Seating', 'Front Desk Support'],
    imageUrl: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1000&q=80'
    ],
    pricingNote: 'Details & pricing available on enquiry',
  },
];

export const SAMPLE_MENU_ITEMS: MenuItem[] = [
  // Regional & Thali Concepts
  {
    id: 'din-1',
    category: 'Regional Specialities (Sample)',
    name: 'Special Gujarati Thali Concept',
    description: 'Wholesome assortment of seasonal vegetables, dal/kadhi, warm rotlis, rice, and traditional accompaniments.',
    dietary: 'chef-special',
    samplePrice: 'Sample Menu Item',
  },
  {
    id: 'din-2',
    category: 'Regional Specialities (Sample)',
    name: 'Kathiyawadi Meal Option',
    description: 'Classic regional preparation served with fresh bajra rotla, garlic chutney, and seasonal sides.',
    dietary: 'veg',
    samplePrice: 'Sample Menu Item',
  },
  {
    id: 'din-3',
    category: 'Regional Specialities (Sample)',
    name: 'Seasonal Vegetable Medley',
    description: 'Carefully prepared local vegetables cooked with traditional aromatic spices and pure ingredients.',
    dietary: 'veg',
    samplePrice: 'Sample Menu Item',
  },
  {
    id: 'din-4',
    category: 'Regional Specialities (Sample)',
    name: 'Special Dal & Kadhi Preparations',
    description: 'Simmered lentils and tempered buttermilk gravy prepared with authentic regional seasonings.',
    dietary: 'chef-special',
    samplePrice: 'Sample Menu Item',
  },

  // Main Course & Curries
  {
    id: 'cur-1',
    category: 'Main Course & Curries (Sample)',
    name: 'Paneer Butter Masala',
    description: 'Cottage cheese cubes simmered in a smooth tomato, butter, and cashew gravy.',
    dietary: 'veg',
    samplePrice: 'Sample Menu Item',
  },
  {
    id: 'cur-2',
    category: 'Main Course & Curries (Sample)',
    name: 'Royal Cashew Kaju Curry',
    description: 'Roasted whole cashew nuts simmered in a mildly spiced, rich specialty gravy.',
    dietary: 'chef-special',
    samplePrice: 'Sample Menu Item',
  },
  {
    id: 'cur-3',
    category: 'Main Course & Curries (Sample)',
    name: 'Slow-Simmered Dal Tadka / Makhani',
    description: 'Traditional lentils slow-cooked and tempered with desi ghee, cumin, and fresh herbs.',
    dietary: 'veg',
    samplePrice: 'Sample Menu Item',
  },
  {
    id: 'cur-4',
    category: 'Main Course & Curries (Sample)',
    name: 'Vegetable Dum Biryani',
    description: 'Long grain basmati rice layered with garden vegetables, saffron aroma, and paired with raita.',
    dietary: 'veg',
    samplePrice: 'Sample Menu Item',
  },

  // Breads & Accompaniments
  {
    id: 'brd-1',
    category: 'Breads & Tandoor (Sample)',
    name: 'Fresh Tandoori Roti & Butter Naan',
    description: 'Clay-oven baked flatbreads served hot with generous butter brushing.',
    dietary: 'veg',
    samplePrice: 'Sample Menu Item',
  },
  {
    id: 'brd-2',
    category: 'Breads & Tandoor (Sample)',
    name: 'Stuffed Kulcha / Paratha',
    description: 'Crisp layered flatbread filled with seasoned potato and paneer stuffing.',
    dietary: 'veg',
    samplePrice: 'Sample Menu Item',
  },

  // Beverages & Sweets
  {
    id: 'bev-1',
    category: 'Beverages & Sweets (Sample)',
    name: 'Mango Lassi / Sweet Lassi',
    description: 'Thick chilled yogurt shake freshly blended with sweet flavors.',
    dietary: 'chef-special',
    samplePrice: 'Sample Menu Item',
  },
  {
    id: 'bev-2',
    category: 'Beverages & Sweets (Sample)',
    name: 'Traditional Spiced Chhas (Buttermilk)',
    description: 'Refreshing churned buttermilk infused with roasted cumin, mint, and rock salt.',
    dietary: 'veg',
    samplePrice: 'Sample Menu Item',
  },
  {
    id: 'bev-3',
    category: 'Beverages & Sweets (Sample)',
    name: 'Traditional Warm Sweet Delight',
    description: 'Classic sweet delicacies served warm to complete your meal experience.',
    dietary: 'veg',
    samplePrice: 'Sample Menu Item',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Hospitality & Entrance Concept',
    category: 'exterior',
    imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    caption: 'Welcoming ambiance and modern hospitality reception.',
  },
  {
    id: 'gal-2',
    title: 'Executive Room Concept',
    category: 'rooms',
    imageUrl: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    caption: 'Air-conditioned accommodation option with functional conveniences.',
  },
  {
    id: 'gal-3',
    title: 'Dining Area Setting',
    category: 'dining',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    caption: 'Clean and comfortable dining environment for hotel guests and visitors.',
  },
  {
    id: 'gal-4',
    title: 'Family Room Concept',
    category: 'rooms',
    imageUrl: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80',
    caption: 'Generous accommodation option for family stays.',
  },
  {
    id: 'gal-5',
    title: 'Dining Table Setup',
    category: 'dining',
    imageUrl: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
    caption: 'Comfortable table settings for meals and refreshments.',
  },
  {
    id: 'gal-6',
    title: 'Guest Reception & Lounge',
    category: 'ambience',
    imageUrl: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80',
    caption: 'Warm reception desk and waiting lounge.',
  },
  {
    id: 'gal-7',
    title: 'Fresh Meal Offerings',
    category: 'dining',
    imageUrl: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1200&q=80',
    caption: 'Sample culinary presentation prepared fresh for guests.',
  },
  {
    id: 'gal-8',
    title: 'Premium Suite Details',
    category: 'rooms',
    imageUrl: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80',
    caption: 'Thoughtful room aesthetics designed for relaxation.',
  },
  {
    id: 'gal-9',
    title: 'Evening Hospitality Ambiance',
    category: 'ambience',
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    caption: 'Pleasant evening lighting and calm surroundings.',
  },
];

export const VALSAD_LANDMARKS: Landmark[] = [
  {
    name: 'Valsad Railway Junction',
    distance: 'City Transit Hub',
    driveTime: 'Short drive',
    description: 'Major Western Railway junction connecting Mumbai, Surat, and Ahmedabad.',
    iconName: 'Train',
  },
  {
    name: 'Tithal Beach & Coastal Promenade',
    distance: 'Coastal Area',
    driveTime: 'Convenient access',
    description: 'Scenic coastline destination in Valsad known for beachfront temple landmarks and sunsets.',
    iconName: 'Palmtree',
  },
  {
    name: 'National Highway 48 (NH-48)',
    distance: 'Highway Corridor',
    driveTime: 'Direct connection',
    description: 'Main highway artery linking Mumbai - Vapi - Valsad - Surat.',
    iconName: 'Navigation',
  },
  {
    name: 'Valsad City & Market Center',
    distance: 'City Center',
    driveTime: 'Nearby',
    description: 'Convenient access to local commercial centers, transport links, and city services.',
    iconName: 'Building2',
  },
];

export const WHY_CHOOSE_US = [
  {
    id: 'stay',
    title: 'Comfortable Accommodation',
    description: 'Thoughtfully arranged rooms equipped with essential comforts, air conditioning, and Wi-Fi for a relaxing stay in Valsad.',
    icon: 'Bed',
  },
  {
    id: 'location',
    title: 'Convenient Location',
    description: 'Centrally situated in Valsad with easy transit access to the railway junction, highway corridors, and local landmarks.',
    icon: 'MapPinned',
  },
  {
    id: 'dining',
    title: 'Dining & Refreshments',
    description: 'On-site restaurant options offering wholesome meals and welcoming dining service for guests and visitors.',
    icon: 'Utensils',
  },
  {
    id: 'enquiry',
    title: 'Easy Guest Enquiries',
    description: 'Direct and straightforward enquiry process for stay reservations, dining questions, and personalized travel assistance.',
    icon: 'Headphones',
  },
];
