import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import video from '../assets/video.mp4';
import Search from '../components/Search';

const Banner = () => {
  const fadeInAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: config.slow,
  });

  const scaleAnimation = useSpring({
    transform: 'scale(1)',
    from: { transform: 'scale(0.95)' },
    config: config.default,
  });

  return (
    <animated.section className='h-full max-h-[640px] mb-8 xl:mb-24 ml-10 mr-10' style={scaleAnimation}>
      <video className='w-full h-[500px] object-cover object-center' src={video} autoPlay loop />
      <div>
        <animated.div className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full" style={fadeInAnimation}>
          <h1 className="text-yellow-500 text-4xl font-bold">Real Dreams, Real Home</h1>
        </animated.div>
      </div>
      <Search />
    </animated.section>
  );
}

export default Banner;
