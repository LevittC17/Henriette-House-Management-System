import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
// import { useHistory } from 'react-router-dom'; // Import useHistory hook

const AddProperty = () => {
  const [property, setProperty] = useState({
    name: '',
    profilePhoto: null,
    housePhoto: null,
    description: ''
  });

  // const history = useHistory(); // Initialize history

  const formAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/Aprop/house/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(property),
      });
      if (response.ok) {
        history.push('/')
      } else {
        console.error('Failed to add property');
      }
    } catch (error) {
      console.error('Failed to add property:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperty({ ...property, [name]: value });
  };

  const handleProfilePhotoChange = (e) => {
    const file = e.target.files[0];
    setProperty({ ...property, profilePhoto: URL.createObjectURL(file) });
  };

  const handleHousePhotoChange = (e) => {
    const file = e.target.files[0];
    setProperty({ ...property, housePhoto: URL.createObjectURL(file) });
  };

  return (
    <animated.div style={formAnimation} className='w-full min-h-screen flex justify-center items-center bg-black'>
      <div className='relative w-[520px] h-[620px] bg-yellow-500 rounded-lg p-8'>
        <h2 className='text-2xl font-bold mb-4'>Add Property</h2>

        <div className='mb-4'>
          <label htmlFor='name' className='block text-sm font-medium text-gray-700'>
            Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={property.name}
            onChange={handleChange}
            className='mt-1 p-2 w-full border rounded-md'
          />
        </div>

        <div className='mb-4'>
          <label htmlFor='profilePhoto' className='block text-sm font-medium text-gray-700'>
            Profile Photo
          </label>
          <input
            type='file'
            id='profilePhoto'
            name='profilePhoto'
            onChange={handleProfilePhotoChange}
            className='mt-1 p-2 w-full border rounded-md'
          />
        </div>

        <div className='mb-4'>
          <label htmlFor='housePhoto' className='block text-sm font-medium text-gray-700'>
            House Photo
          </label>
          <input
            type='file'
            id='housePhoto'
            name='housePhoto'
            onChange={handleHousePhotoChange}
            className='mt-1 p-2 w-full border rounded-md'
          />
        </div>

        <div className='mb-4'>
          <label htmlFor='description' className='block text-sm font-medium text-gray-700'>
            Description
          </label>
          <textarea
            id='description'
            name='description'
            value={property.description}
            onChange={handleChange}
            rows='3'
            className='mt-1 p-2 w-full border rounded-md'
          ></textarea>
        </div>

        <button
          type='button'
          onClick={handleSubmit}
          className='bg-white text-black p-2 rounded-md hover:bg-yellow-800'
        >
          Submit
        </button>
      </div>
    </animated.div>
  );
};

export default AddProperty;
