import React, { useContext } from 'react';
import LocationDropDown from './LocationDropDown';
import PropertyDropdown from './PropertyDropdown';
import PriceRangeDropdown from './PriceRangeDropdown';
import { RiSearch2Line } from 'react-icons/ri';
import { HouseContext } from './HouseContext';

const Search = () => {
  const {handleClick} = useContext(HouseContext);
  return (
    <div className='px-4 py-6 max-w-[1170px] mx-auto text-white flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-5 ring-yellow-600 bg-black bg-opacity-30 lg:backdrop-blur rounded-lg'>
      <LocationDropDown />
      <PropertyDropdown />
      <PriceRangeDropdown />
      <button onClick={() => handleClick()} className='bg-yellow-500 hover:bg-yellow-700 transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-lg'>
        <RiSearch2Line className='' />
      </button>
    </div>
  );
};

export default Search;