import React from 'react';
import { RiDribbbleFill, RiGithubFill, RiInstagramFill, RiLinkedinFill, RiTwitterFill, RiYoutubeFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const SocialIcons = () => {
  return (
    <div className='flex gap-6 pr-4'>
      <Link to='https://youtube.com/@poisonmods' className='text-[#08d9d6] text-2xl hover:-translate-y-1 transition-all duration-500' target='_blank'><RiYoutubeFill /></Link>
      <Link to='https://instagram.com/_abd.ulr_' className='text-[#f08a5d] text-2xl hover:-translate-y-1 transition-all duration-500' target='_blank'><RiInstagramFill /></Link>
      <Link to='https://twitter.com/@kevinlucas254' className='text-[#ff2e63] text-2xl hover:-translate-y-1 transition-all duration-500' target='_blank'><RiTwitterFill /></Link>
      <Link to='https://linkedin.com/in/' className='text-[#eaeaea] text-2xl hover:-translate-y-1 transition-all duration-500' target='_blank'><RiLinkedinFill /></Link>
      <Link to='https://github.com/x-poison' className='text-[#5272f2] text-2xl hover:-translate-y-1 transition-all duration-500' target='_blank'><RiGithubFill /></Link>
    </div>
  );
}

export default SocialIcons;
