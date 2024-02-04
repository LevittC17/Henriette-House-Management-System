import React, { useState, useContext } from 'react';
import { RiWallet3Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { Menu } from '@headlessui/react';
import { HouseContext } from './HouseContext';

const PriceRangeDropdown = () => {
  const { price, setPrice } = useContext(HouseContext);
  useContext(HouseContext);

  const [isOpen, setIsOpen] = useState(false);

  const prices = [
    {
      value: 'Price range (any)',
    },
    {
      value: '90,000RWF - 100,000RWF',
    },
    {
      value: '100,000RWF - 150,000RWF',
    },
    {
      value: '200,0000RWF - 250,0000RWF',
    },
    {
      value: '300,0000RWF - 350,0000RWF',
    },
    {
      value: '400,000RWF - 450,000RWF',
    },
  ];

  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button onClick={() => setIsOpen(!isOpen)} className='dropdown-btn w-full text-left'>
        <RiWallet3Line className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>{price}</div>
          <div className='text-[13px]'>Choose Price Range</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className='dropdown-icon-secondary' />
        ) : (
          <RiArrowDownSLine className='dropdown-icon-secondary' />
        )}
      </Menu.Button>

      <Menu.Items className='dropdown-menu bg-black overflow-y-auto max-h-60'>
        {isOpen &&
          prices.map((price, index) => (
            <Menu.Item
              key={index}
              onClick={() => setPrice(price.value)}
              className='cursor-pointer hover:text-yellow-500 transition'
              as='li'
            >
              {price.value}
            </Menu.Item>
          ))}
      </Menu.Items>
    </Menu>
  );
};

export default PriceRangeDropdown;
