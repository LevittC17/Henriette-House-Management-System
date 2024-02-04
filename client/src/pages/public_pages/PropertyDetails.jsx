import React from 'react';
import { housesData } from '../../data';
import { useParams } from 'react-router-dom';

import { BiBed, BiBath, BiArea } from 'react-icons/bi';

import { Link } from 'react-router-dom';

const PropertyDetails = () => {
  const { id } = useParams();
  

  const house = housesData.find(house => {
    return house.id === parseInt(id);
  });

  return (
    <section className='ml-10 mr-10'>
      <div className='container mx-auto min-h-[800px] mb-14'>
        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
          <div>
            <h2 className='text-white text-2xl font-semibold'>{house.name}</h2>
            <h3 className='text-white text-lg mb-4'>{house.address}</h3>
          </div>
          <div className='mb-4 lg:mb-0 flex gap-x-2 text-sm'>
            <div className='text-white bg-yellow-500 px-3 rounded-full'>{house.type}</div>
            <div className='text-black bg-white px-3 rounded-full'>{house.Location}</div>
            <div className='text-black bg-yellow-500 px-3 rounded-full'>{house.status}</div>
          </div>
          <div className='text-yellow-500 text-3xl font-semibold'> {house.price}</div>
        </div>
        <div className='flex flex-col items-start gap-8 lg:flex-row'>
          <div className='max-w-[768px]'>
            <div className='mb-8'>
              <img src={house.imageLg} alt='' />
            </div>
            <div className='flex gap-x-6 text-yellow-500 mb-6'>
              <div className='flex gap-x-2 items-center'>
                <BiBed className='text-2xl'/>
                <div className='text-white'>{house.bedrooms}</div>
              </div>
              <div className='flex gap-x-2 items-center'>
                <BiBath className='text-2xl'/>
                <div className='text-white'>{house.bathrooms}</div>
              </div>
              <div className='flex gap-x-2 items-center'>
                <BiArea className='text-2xl'/>
                <div className='text-white'>{house.surface}</div>
              </div>
            </div>
            <div className='text-white'>{house.description}</div>
          </div> 
          <div className='flex-1 bg-white w-full mb-8 border-gray-300 rounded-lg px-6 py-8'>
            <div className='flex items-center gap-x-4 mb-8'>
              <div className='w-20 h-20 p-1 border border-gray-300 rounded-full'>
                <img src={house.agent.image} alt='' />
              </div>
              <div>
                <div className='text-black font-bold text-lg'>{house.agent.name}</div>
                <Link to='' className='text-yellow-500 text-sm'>View Listings</Link>
              </div>
            </div>
            <form className='flex flex-col gap-y-4'>
              <input className='border border-gray-300 focus:border-yellow-600 outline-none rounded w-full px-4 h-14 text-sm' type='text' placeholder='Name*' />
              <input className='border border-gray-300 focus:border-yellow-600 outline-none rounded w-full px-4 h-14 text-sm' type='text' placeholder='Email*'/>
              <input className='border border-gray-300 focus:border-yellow-600 outline-none rounded w-full px-4 h-14 text-sm' type='text' placeholder='Phone*'/>
              <textarea className='border border-gray-300  focus:border-yellow-600 outline-none resize-none rounded w-full p-4 h-36 text-sm text-gray-400' placeholder='Message*' defaultValue='Hello, I am Interested in Joining the [Modern apartment]'></textarea>
              <div className='flex gap-x-2'>
                <button className='bg-yellow-500 hover:bg-yellow-700 text-white rounded p-4 text-sm w-full transition'>Send Message</button>
                <button className='border border-yellow-500 text-yellow-600 hover:border-yellow-500 hover:text-yellow-700 rounded p-4 text-sm w-full transition'>Call</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PropertyDetails
