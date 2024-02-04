import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import hous from '../../assets/img/hous.png';

const About = () => {
  const fadeInAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: config.slow,
  });

  const scaleAnimation = useSpring({
    transform: 'scale(1)',
    from: { transform: 'scale(0.8)' },
    config: config.default,
  });

  return (
    <animated.div className="font-sans opacity-75 p-4 mb-8 flex" style={{ ...fadeInAnimation, ...scaleAnimation }}>
      <div className='font-semibold'>
        <h1 className="text-center text-2xl font-bold mb-4 text-yellow-500">
          ABOUT US
        </h1>
        <p className="text-white mb-4">
          Welcome to our amazing SplitSpace platform! We are dedicated to providing you with the best <br />
          property listing and management experience. Our team is passionate about connecting people <br />
           with
          their dream homes and helping property owners showcase their spaces.
        </p>

        <p className="text-white mb-4">
          With a user-friendly interface and powerful features, we strive to make the process of buying,<br />
          selling, and managing properties seamless for everyone.
        </p>
        <p className="text-white mb-4">
          Explore our website to find your perfect home or list your property with us. We're here <br /> to
          simplify the real estate journey for you!
        </p>
        <h1 className="text-center text-2xl font-bold mb-4 text-yellow-500">
          WHO WE ARE
        </h1>
        <p className="text-white mb-4">
        Welcome to SPLITE SPACE Website, where finding the perfect roommate is more than just a search <br /> 
        it's a shared journey towards creating memorable living spaces. Our story is one of collaboration, <br /> 
        connection, and a commitment to making shared living an enriching experience for everyone involved
        
        </p>
        <h1 className=" text-center text-2xl font-bold mb-4 text-yellow-500">
          OUR MISSION
        </h1>
        <p className="text-white mb-4">
        At Split Space, we envision a future where the burden of housing costs is lightened through  <br />
        shared responsibility We aim to create a network of like-minded individuals who recognize the value <br />
         of cooperative living and the positive impact it can have on both their wallets and overall well-being.
        </p>

        
      </div>
      
      <div className="ml-2 mb-8">
        <img src={hous} alt="backgraound" />

      </div>
    </animated.div>
  );
};

export default About;
