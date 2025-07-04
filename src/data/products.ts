import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Luxury Executive Chair',
    price: 7999,
    originalPrice: 9999,
    image: 'https://images.pexels.com/photos/586763/pexels-photo-586763.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'chairs',
    description: 'Premium executive chair with ergonomic design and leather upholstery. Perfect for long working hours with superior comfort and style.',
    inStock: true,
    rating: 4.8,
    reviews: 124,
    features: ['Ergonomic Design', 'Genuine Leather', 'Height Adjustable', '360° Swivel'],
    dimensions: { width: 65, height: 120, depth: 70 }
  },
  {
    id: '2',
    name: 'Stylish Garden Chair',
    price: 6999,
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'chairs',
    description: 'Weather-resistant outdoor chair with modern design. Perfect for gardens, patios, and outdoor spaces.',
    inStock: true,
    rating: 4.6,
    reviews: 89,
    features: ['Weather Resistant', 'UV Protection', 'Stackable Design', 'Easy Maintenance'],
    dimensions: { width: 55, height: 85, depth: 60 }
  },
  {
    id: '3',
    name: 'Black Studio Lamp',
    price: 5999,
    originalPrice: 7499,
    image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'lamps',
    description: 'Professional studio lamp with adjustable brightness and positioning. Ideal for photography, reading, and workspace lighting.',
    inStock: true,
    rating: 4.7,
    reviews: 156,
    features: ['Adjustable Brightness', 'Flexible Positioning', 'LED Technology', 'Energy Efficient'],
    dimensions: { width: 25, height: 65, depth: 25 }
  },
  {
    id: '4',
    name: 'Designer Ceramic Jars',
    price: 4999,
    image: 'https://images.pexels.com/photos/6195129/pexels-photo-6195129.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'decorations',
    description: 'Set of handcrafted ceramic jars with unique patterns. Perfect for storage and home decoration.',
    inStock: true,
    rating: 4.5,
    reviews: 73,
    features: ['Handcrafted', 'Food Safe', 'Unique Patterns', 'Set of 3'],
    dimensions: { width: 15, height: 20, depth: 15 }
  },
  {
    id: '5',
    name: 'Amazing Decorative Bulb',
    price: 499,
    image: 'https://images.pexels.com/photos/1123262/pexels-photo-1123262.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'lamps',
    description: 'Vintage-style decorative LED bulb with warm lighting. Perfect for creating ambient atmosphere.',
    inStock: true,
    rating: 4.3,
    reviews: 201,
    features: ['Vintage Design', 'LED Technology', 'Warm Light', 'Energy Efficient'],
    dimensions: { width: 6, height: 14, depth: 6 }
  },
  {
    id: '6',
    name: 'Modern Oak Desk',
    price: 12999,
    originalPrice: 15999,
    image: 'https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'desks',
    description: 'Solid oak desk with modern design and ample storage. Perfect for home office or study room.',
    inStock: true,
    rating: 4.9,
    reviews: 67,
    features: ['Solid Oak Wood', 'Multiple Drawers', 'Cable Management', 'Scratch Resistant'],
    dimensions: { width: 140, height: 75, depth: 70 }
  },
  {
    id: '7',
    name: 'Dining Table Set',
    price: 24999,
    originalPrice: 29999,
    image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'tables',
    description: 'Elegant dining table set for 6 people. Includes table and matching chairs with premium finish.',
    inStock: true,
    rating: 4.8,
    reviews: 45,
    features: ['Seats 6 People', 'Premium Finish', 'Matching Chairs', 'Easy Assembly'],
    dimensions: { width: 180, height: 75, depth: 90 }
  },
  {
    id: '8',
    name: 'Indoor Plant Collection',
    price: 2999,
    image: 'https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'plants',
    description: 'Curated collection of air-purifying indoor plants with decorative pots. Perfect for home and office.',
    inStock: true,
    rating: 4.4,
    reviews: 112,
    features: ['Air Purifying', 'Low Maintenance', 'Decorative Pots', 'Set of 3'],
    dimensions: { width: 20, height: 40, depth: 20 }
  },
  {
    id: '9',
    name: 'Wall Art Collection',
    price: 3999,
    image: 'https://images.pexels.com/photos/1579708/pexels-photo-1579708.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'decorations',
    description: 'Modern abstract wall art collection. Set of 3 framed prints to enhance your living space.',
    inStock: true,
    rating: 4.6,
    reviews: 88,
    features: ['Set of 3', 'Framed Prints', 'Modern Design', 'Ready to Hang'],
    dimensions: { width: 40, height: 60, depth: 3 }
  },
  {
    id: '10',
    name: 'Yellowstone Sofa Collection',
    price: 29999,
    originalPrice: 39999,
    image: 'https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'collections',
    description: 'Premium Yellowstone collection sofa with premium fabric and comfortable seating for 3 people.',
    inStock: true,
    rating: 4.9,
    reviews: 156,
    features: ['Premium Fabric', 'Seats 3 People', 'Comfortable Cushions', 'Modern Design'],
    dimensions: { width: 220, height: 85, depth: 95 }
  }
];

export const categories = [
  { id: 'all', name: 'All Products', icon: 'Home' },
  { id: 'chairs', name: 'Chairs', icon: 'Armchair' },
  { id: 'desks', name: 'Desks', icon: 'Laptop' },
  { id: 'tables', name: 'Tables', icon: 'Table' },
  { id: 'lamps', name: 'Lamps', icon: 'Lightbulb' },
  { id: 'plants', name: 'Plants', icon: 'TreePine' },
  { id: 'decorations', name: 'Decorations', icon: 'Palette' },
  { id: 'collections', name: 'Collections', icon: 'Package' }
];