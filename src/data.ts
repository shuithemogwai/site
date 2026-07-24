export type Property = {
  id: string;
  title: string;
  location: string;
  price: number;
  image: string;
  program: string;
  beds: number;
  baths: number;
  area: number;
  highlight: string;
};

export const properties: Property[] = [
  {
    id: 'p1',
    title: 'Bosphorus Waterfront Luxury Residence',
    location: 'Historic Peninsula, Istanbul',
    price: 2_000_000,
    image: 'https://images.pexels.com/photos/2417842/pexels-photo-2417842.jpeg?auto=compress&cs=tinysrgb&w=1200',
    program: 'Turkish Citizenship Program',
    beds: 3,
    baths: 2,
    area: 150,
    highlight: 'Panoramic Bosphorus Views · Historical Rejuvenation · Art & Culture Hub',
  },
  {
    id: 'p2',
    title: 'Urban Luxury Hotel-Concept Residence',
    location: 'Bomonti Business District, Istanbul',
    price: 850_000,
    image: 'https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=1200',
    program: 'Turkish Citizenship Program',
    beds: 2,
    baths: 2,
    area: 115,
    highlight: '5-Star Concierge Services · High Rental Potential · Central Business Hub',
  },
  {
    id: 'p3',
    title: 'Exclusive Urban Estate & Wellness Residence',
    location: 'Acıbadem, Istanbul',
    price: 550_000,
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200',
    program: 'Turkish Citizenship Program',
    beds: 2,
    baths: 2,
    area: 240,
    highlight: 'Holistic Wellness Concept · Nature-Integrated Architecture · Premium Business Club',
  },
  {
    id: 'p4',
    title: 'Maslak Koru',
    location: 'Sariyer, Istanbul',
    price: 2_450_000,
    image: 'https://images.pexels.com/photos/1643388/pexels-photo-1643388.jpeg?auto=compress&cs=tinysrgb&w=1200',
    program: 'Turkish Citizenship Program',
    beds: 4,
    baths: 4,
    area: 320,
    highlight: 'Belgrade Forest · Financial district · Nature-integrated living',
  },
  {
    id: 'p5',
    title: 'Forestline Signature Living',
    location: 'Gokturk, Istanbul',
    price: 1_650_000,
    image: 'https://images.pexels.com/photos/1732416/pexels-photo-1732416.jpeg?auto=compress&cs=tinysrgb&w=1200',
    program: 'Turkish Citizenship Program',
    beds: 3,
    baths: 2,
    area: 185,
    highlight: 'Eco-conscious boutique · Low-rise · 15 km from airport',
  },
  {
    id: 'p6',
    title: 'Kagithane Premier Residences',
    location: 'Kagithane, Istanbul',
    price: 1_380_000,
    image: 'https://images.pexels.com/photos/14275629/pexels-photo-14275629.jpeg?auto=compress&cs=tinysrgb&w=1200',
    program: 'Turkish Citizenship Program',
    beds: 2,
    baths: 2,
    area: 148,
    highlight: 'Smart-home features · Gated community · Premium security',
  },
];

export const formatPrice = (n: number, currency: string): string => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency === 'USD' ? 'USD' : 'USD',
    maximumFractionDigits: 0,
  });
  return formatter.format(n);
};
