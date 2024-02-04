import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import { BiBed, BiBath, BiArea } from 'react-icons/bi';
import './house.css';

const House = ({ house }) => {
  const { image, type, Location, address, bedrooms, bathrooms, surface, price } = house;

  const fadeInAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: config.slow,
  });

  const slideUpAnimation = useSpring({
    transform: 'translateY(0)',
    from: { transform: 'translateY(20px)' },
    config: config.default,
  });

  const hoverAnimation = useSpring({
    scale: 1.05,
    zIndex: 1,
    config: config.default,
  });

  const boxShadowStyle = {
    boxShadow: '30px 30px 50px rgba(255, 255, 0, 0.4)',
  };

  return (
    <animated.div
      className='bg-black p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer shadow-md'
      id='house-list'
      style={{
        ...fadeInAnimation,
        ...slideUpAnimation,
        ...hoverAnimation,
        borderRadius: '20px',
        ...boxShadowStyle,
        marginTop: '150px',
      }}
    >
      <img className='mb-8' src={image} alt='' />
      <div className='mb-4 flex gap-x-2 text-sm'>
        <div className='bg-black rounded-full text-yellow-500 px-3'>{type}</div>
        <div className='bg-white rounded-full text-black px-3'>{Location}</div>
      </div>
      <div className='text-lg font-semibold max-w-[260px]'>{address}</div>
      <div className='flex gap-x-4 my-4'>
        <div className='flex items-center text-gray-400 gap-1'>
          <div className='text-[20px]'>
            <BiBed />
          </div>
          <div>{bedrooms}</div>
        </div>
        <div className='flex items-center text-gray-400 gap-1'>
          <div className='text-[20px]'>
            <BiBath />
          </div>
          <div>{bathrooms}</div>
        </div>
        <div className='flex items-center text-gray-400 gap-1'>
          <div className='text-[20px]'>
            <BiArea />
          </div>
          <div>{surface}</div>
        </div>
      </div>
      <div className='text-lg font-semibold text-white mb-4'>{price}</div>
    </animated.div>
  );
};

export default House;
