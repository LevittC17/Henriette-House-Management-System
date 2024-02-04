// import house images
import House1 from './assets/img/houses/house1.png';
import House2 from './assets/img/houses/house2.png';
import House3 from './assets/img/houses/house3.png';
import House4 from './assets/img/houses/house4.png';
import House5 from './assets/img/houses/house5.png';
import House6 from './assets/img/houses/house6.png';
import House7 from './assets/img/houses/house7.png';
import House8 from './assets/img/houses/house8.png';
import House9 from './assets/img/houses/house9.png';
import House10 from './assets/img/houses/house10.png';
import House11 from './assets/img/houses/house11.png';
import House12 from './assets/img/houses/house12.png';
// import house large images
import House1Lg from './assets/img/houses/house1lg.png';
import House2Lg from './assets/img/houses/house2lg.png';
import House3Lg from './assets/img/houses/house3lg.png';
import House4Lg from './assets/img/houses/house4lg.png';
import House5Lg from './assets/img/houses/house5lg.png';
import House6Lg from './assets/img/houses/house6lg.png';
import House7Lg from './assets/img/houses/house7lg.png';
import House8Lg from './assets/img/houses/house8lg.png';
import House9Lg from './assets/img/houses/house9lg.png';
import House10Lg from './assets/img/houses/house10lg.png';
import House11Lg from './assets/img/houses/house11lg.png';
import House12Lg from './assets/img/houses/house12lg.png';

// import apartments images
import Apartment1 from './assets/img/apartments/a1.png';
import Apartment2 from './assets/img/apartments/a2.png';
import Apartment3 from './assets/img/apartments/a3.png';
import Apartment4 from './assets/img/apartments/a4.png';
import Apartment5 from './assets/img/apartments/a5.png';
import Apartment6 from './assets/img/apartments/a6.png';
// import apartments large images
import Apartment1Lg from './assets/img/apartments/a1lg.png';
import Apartment2Lg from './assets/img/apartments/a2lg.png';
import Apartment3Lg from './assets/img/apartments/a3lg.png';
import Apartment4Lg from './assets/img/apartments/a4lg.png';
import Apartment5Lg from './assets/img/apartments/a5lg.png';
import Apartment6Lg from './assets/img/apartments/a6lg.png';

// import agents images
import Agent1 from './assets/img/agents/agent1.png';
import Agent2 from './assets/img/agents/agent2.png';
import Agent3 from './assets/img/agents/agent3.png';
import Agent4 from './assets/img/agents/agent4.png';
import Agent5 from './assets/img/agents/agent5.png';
import Agent6 from './assets/img/agents/agent6.png';
import Agent7 from './assets/img/agents/agent7.png';
import Agent8 from './assets/img/agents/agent8.png';
import Agent9 from './assets/img/agents/agent9.png';
import Agent10 from './assets/img/agents/agent10.png';
import Agent11 from './assets/img/agents/agent11.png';
import Agent12 from './assets/img/agents/agent12.png';

export const housesData = [
  {
    id: 1,
    type: 'House',
    name: 'House 1',
    description:
      'This house has six bedrooms and three bathrooms and it has all the furniture and it has kitchen that is needed in the house. so we need five roomate but we need only male  one person will pay 200,000RWF.',
    image: House1,
    imageLg: House1Lg,
    Location: 'Kimisagara',
    status:'Not Available',
    address: 'KN 20 AVE, Kigali, Rwanda',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2024',
    price: '200,000RWF',
    agent: {
      image: Agent1,
      name: 'Linda Vanessa',
      phone: '078 123 4567',
    },
  },
  {
    id: 2,
    type: 'House',
    name: 'House 2',
    description:
      'This house has four bedrooms and four bathrooms and it has all the furniture and it has kitchen that is needed in the house. so we need five roomate but we need only female  one person will pay 150,000RWF.',
    image: House2,
    imageLg: House2Lg,
    Location: 'Gishushu',
    status:'Not Available',
    address: 'Kk 205 AVE, Kigali, Rwanda',
    bedrooms: '4',
    bathrooms: '4',
    surface: '4200 sq ft',
    year: '2024',
    price: '150,000RWF',
    agent: {
      image: Agent2,
      name: 'Bosco Niyonkuru',
      phone: '078 123 4567',
    },
  },
  {
    id: 3,
    type: 'House',
    name: 'House 3',
    description:
      ' This house has six bedrooms and Three bathrooms and it has all the furniture and it has kitchen that is needed in the house. so we need five roomate but we need only male  one person will pay 230 000RWF.',
    image: House3,
    imageLg: House3Lg,
    Location: 'Kacyiru',
    status:'Not Available',
    address: 'Kk 102 AVE, Kigali, Rwanda',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2024',
    price: '230,000RWF',
    agent: {
      image: Agent3,
      name: 'Jean Claude',
      phone: '078 123 4567',
    },
  },
  {
    id: 4,
    type: 'House',
    name: 'House 4',
    description:
      'Magnificent Apartment it is an apartment with Ten bedrooms and five bathrooms it has all the furniture you need. so we Need eight roommate of any kind they can be female or male one person will pay 100 000RWF  ',
    image: House4,
    imageLg: House4Lg,
    Location: 'Remera',
    status:'Available',
    address: 'kk 50 AVE, Kigali, Rwanda',
    bedrooms: '10',
    bathrooms: '5',
    surface: '4200 sq ft',
    year: '2024',
    price: '100,000RWF',
    agent: {
      image: Agent4,
      name: 'kenda Lora',
      phone: '078 123 4567',
    },
  },
  {
    id: 5,
    type: 'House',
    name: 'House 5',
    description:
      'This house has six bedrooms and three bathrooms and it hass all the furniture that is needed in the house. so we need five roomate but we need only female  one person will pay 210 000RWF  ',
    image: House5,
    imageLg: House5Lg,
    Location: 'Gikondo',
    status:'Avaliable',
    address: '28 Westport Dr. Warminster, PA 18974',
    bedrooms: '5',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2015',
    price: '210,000RWF',
    agent: {
      image: Agent5,
      name: 'Grover Robinson',
      phone: '0123 456 78910',
    },
  },
  {
    id: 6,
    type: 'House',
    name: 'House 6',
    description:
      'This house has eight bedrooms and four bathrooms and it hass all the furniture and it has kitchen that is needed in the house. so we need five roomate but we need only male  one person will pay 150 000RWF.',
    image: House6,
    imageLg: House6Lg,
    Location: 'Kibagabaga',
    status:'Available',
    address: '32 Pawnee Street Butte, MT 59701',
    bedrooms: '6',
    bathrooms: '3',
    surface: '6200 sq ft',
    year: '2024',
    price: '150,000RWF',
    agent: {
      image: Agent6,
      name: 'Teta Aleen',
      phone: '078 123 4567',
    },
  },
  {
    id: 7,
    type: 'Apartment',
    name: 'Apartment 1',
    description:
      'Elevate Estates Apartment it is apartment that  has six bedrooms and three bathrooms and it hass all the furniture that is needed in the house. so we need five roomate but we need only female  one person will pay 250 000RWF',
    image: Apartment1,
    imageLg: Apartment1Lg,
    Location: 'Gasabo',
    status:'Available',
    address: 'kk 209 AVE, Kigali, Rwanda',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1200 sq ft',
    year: '2024',
    price: '250,000RWF',
    agent: {
      image: Agent7,
      name: 'Laenna Smith',
      phone: '078 123 4567',
    },
  },
  {
    id: 8,
    type: 'Apartment',
    name: 'Apartment 2',
    description:
      'Morden Apartment it is apartment that  has six bedrooms and three bathrooms and it hass all the furniture that is needed in the house. so we need five roomate but we need only female  one person will pay 100 000RWF',
    image: Apartment2,
    imageLg: Apartment2Lg,
    Location: 'Kimironko',
    status:'Avaliable',
    address: 'kk 209 AVE, Kigali, Rwanda',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1000 sq ft',
    year: '2023',
    price: '100,000RWF',
    agent: {
      image: Agent8,
      name: 'Linda Smith',
      phone: '078 123 4567',
    },
  },
  {
    id: 9,
    type: 'Apartment',
    name: 'Apartment 3',
    description:
      'Stay with us Apartment it is apartment that  has twelve bedrooms and six bathrooms and it hass all the furniture that is needed in the house. so we need five roomate but we need only female  one person will pay 200 000RWF',
    image: Apartment3,
    imageLg: Apartment3Lg,
    Location: 'Kicukiro',
    status:'Available',
    address: 'kk 209 AVE, Kigali, Rwanda',
    bedrooms: '12',
    bathrooms: '6',
    surface: '1100 sq ft',
    year: '2024',
    price: '200,000RWF',
    agent: {
      image: Agent9,
      name: 'willy Smith',
      phone: '078 123 4567',
    },
  },
  {
    id: 10,
    type: 'Apartment',
    name: 'Apartment 17',
    description:
      'Harmony Haven Apartments it is apartment that  has Ten bedrooms and five bathrooms and it hass all the furniture that is needed in the house. so we need five roomate but we need female or male  one person will pay 150 000RWF',
    image: Apartment5,
    imageLg: Apartment5Lg,
    Location: 'Kabeza',
    status:'Available',
    address: 'kk 209 AVE, Kigali, Rwanda',
    bedrooms: '10',
    bathrooms: '5',
    surface: '1000 sq ft',
    year: '2024',
    price: '150,000RWF',
    agent: {
      image: Agent5,
      name: 'Aline umutoni',
      phone: '078 123 4567',
    },
  },
  {
    id: 11,
    type: 'Apartment',
    name: 'Apartment 7',
    description:
      'Stay with us Apartment it is apartment that  has twelve bedrooms and six bathrooms and it hass all the furniture that is needed in the house. so we need five roomate but we need only female  one person will pay 200 000RWF',
    image: Apartment4,
    imageLg: Apartment4Lg,
    Location: 'Kicukiro',
    status:'Available',
    address: 'kk 209 AVE, Kigali, Rwanda',
    bedrooms: '10',
    bathrooms: '5',
    surface: '1100 sq ft',
    year: '2024',
    price: '200,000RWF',
    agent: {
      image: Agent11,
      name: 'Deborah white',
      phone: '078 123 4567',
    },
  },
  {
    id: 12,
    type: 'Apartment',
    name: 'Apartment 6',
    description:
      'Stay with us Apartment it is apartment that  has twelve bedrooms and six bathrooms and it hass all the furniture that is needed in the house. so we need five roomate but we need only female  one person will pay 90 000RWF',
    image: Apartment6,
    imageLg: Apartment6Lg,
    Location: 'Kicukiro',
    status:'Available',
    address: 'kk 209 AVE, Kigali, Rwanda',
    bedrooms: '5',
    bathrooms: '3',
    surface: '1100 sq ft',
    year: '2024',
    price: '90,000RWF',
    agent: {
      image: Agent10,
      name: 'Esther Lee',
      phone: '078 123 4567',
    },
  },
];