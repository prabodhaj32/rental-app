import bmwImg from '../assets/images/car-bmw.jpg';
import porscheGtImg from '../assets/images/car-porsche-gt.jpg';
import corvetteImg from '../assets/images/car-corvette.jpg';
import mercedesImg from '../assets/images/car-mercedes.jpg';
import lamboImg from '../assets/images/car-lamborghini.jpg';
import audiImg from '../assets/images/car-audi.jpg';
import suvImg from '../assets/images/car-suv.jpg';

export const categories = [
  'All',
  'Premium',
  'Coupe',
  'Hypercars',
  'Sportcar',
  'Cabriolet',
  'SUV',
];

export const vehicles = [
  {
    id: 1,
    name: 'BMW M8 Coupe',
    category: 'Coupe',
    image: bmwImg,
    featured: true,
    rating: 4.8,
    reviews: 2453,
    passengers: 4,
    transmission: 'Automatic',
    speed: '280 km/h',
    price: 2000,
    description: 'Luxury sports coupe with exceptional performance and comfort.',
  },
  {
    id: 2,
    name: 'Porsche 911 GT3',
    category: 'Hypercars',
    image: porscheGtImg,
    featured: true,
    rating: 4.9,
    reviews: 1892,
    passengers: 2,
    transmission: 'Automatic',
    speed: '320 km/h',
    price: 3500,
    description: 'Track-bred sports car with iconic design and precision engineering.',
  },
  {
    id: 3,
    name: 'Corvette C8',
    category: 'Sportcar',
    image: corvetteImg,
    featured: true,
    rating: 4.7,
    reviews: 1234,
    passengers: 2,
    transmission: 'Automatic',
    speed: '312 km/h',
    price: 1800,
    description: 'American mid-engine supercar with stunning performance.',
  },
  {
    id: 4,
    name: 'Mercedes-AMG GT',
    category: 'Premium',
    image: mercedesImg,
    featured: false,
    rating: 4.8,
    reviews: 2100,
    passengers: 4,
    transmission: 'Automatic',
    speed: '318 km/h',
    price: 2200,
    description: 'Grand tourer combining luxury with motorsport DNA.',
  },
  {
    id: 5,
    name: 'Lamborghini Huracan',
    category: 'Hypercars',
    image: lamboImg,
    featured: false,
    rating: 4.9,
    reviews: 892,
    passengers: 2,
    transmission: 'Automatic',
    speed: '325 km/h',
    price: 3000,
    description: 'Exotic supercar with breathtaking design and power.',
  },
  {
    id: 6,
    name: 'Audi R8 V10',
    category: 'Sportcar',
    image: audiImg,
    featured: false,
    rating: 4.7,
    reviews: 1567,
    passengers: 2,
    transmission: 'Automatic',
    speed: '330 km/h',
    price: 3200,
    description: 'Quattro-powered supercar with everyday usability.',
  },
  {
    id: 7,
    name: 'Range Rover Sport',
    category: 'SUV',
    image: suvImg,
    featured: false,
    rating: 4.8,
    reviews: 1232,
    passengers: 7,
    transmission: 'Automatic',
    speed: '250 km/h',
    price: 2500,
    description: 'Luxury SUV with outstanding off-road capability.',
  },
];

export function getVehicleById(id) {
  return vehicles.find((v) => String(v.id) === String(id));
}

export function getFeaturedVehicles() {
  return vehicles.filter((v) => v.featured);
}

export function getDealVehicles() {
  return vehicles.slice(0, 4);
}
