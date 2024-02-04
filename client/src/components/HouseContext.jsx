import React, { useState, useEffect, createContext} from 'react';

import { housesData } from '../data';

export const HouseContext = createContext();

const HouseContextProvider = ({children}) => {
  const [houses, setHouses] = useState(housesData);
  const [location, setLocation] = useState('Location (any)');
  const [locations, setLocations] = useState([]);
  const [property, setProperty] = useState('Property type (any)');
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState('Price range (any)');
  const [loading, setLoading] = useState(false);

  useEffect(()=> {
    const allLocations = houses.map((house) => {
      return house.Location;
    });
    
    const uniqueLocations = ['Location (any)', ...new Set(allLocations)];
    setLocations(uniqueLocations);
  }, []);

  useEffect(()=> {
    const allProperties = houses.map((house) => {
      return house.type;
    });
    
    const uniqueProperties = ['Property (any)', ...new Set(allProperties)];
    setProperties(uniqueProperties);

    setProperties(uniqueProperties);
  }, []);

  const handleClick = () => {
    setLoading(true);

    const isDefault = (str) => {
      return str.split(' ').includes('(any)');
    };
    const minPrice = parseInt(price.split(' ')[0]);
    const maxPrice = parseInt(price.split(' ')[2]);

    const newHouses = housesData.filter((house)=> {
      const housePrice = parseInt(house.price);

      if (
        house.Location === location &&
        house.type === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice
      ) {
        return house;
      }

      if (isDefault(location) && isDefault(property) && isDefault(price)) {
        return house;
      }

      if (!isDefault(location) && isDefault(property) && isDefault(price)) {
        return house.Location === location;
      }

      if (!isDefault(property) && isDefault(location) && isDefault(price)) {
        return house.type === property;
      }

      if (!isDefault(price) && isDefault(location) && isDefault(property)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house;
        }
      }

      if (!isDefault(location) && !isDefault(property) && isDefault(price)) {
        return house.Location === location && house.type === property;
      }

      if (!isDefault(location) && isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.Location === location;
        }
      }
      if (isDefault(location) && !isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.type === property;
        }
      }
    });
    setTimeout(() => {
      return (
      newHouses.length < 1 ? setHouses([]) :
      setHouses(newHouses),
      setLoading(false)
    );
    }, 1000);
  };
  
  return (
    <HouseContext.Provider value={{
      location,
      setLocation,
      locations,
      property,
      setProperty,
      properties,
      price,
      setPrice,
      houses,
      loading,
      handleClick,
      loading,
    }}>
      {children}
    </HouseContext.Provider>
  )
}

export default HouseContextProvider