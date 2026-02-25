import React from 'react';
import SearchBar from './SearchBar';

const Hero = () => {
  return (
    <section
      className="relative text-white overflow-hidden w-full"
      style={{ background: 'linear-gradient(135deg, #4C1D95 0%, #6B21A8 60%, #7C3AED 100%)' }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[116px] py-10 sm:py-14 lg:py-[80px] relative">

        {/* Stats — 500+ Courses */}
        <div className="hidden lg:flex absolute top-10 left-[116px] flex-col items-center justify-center w-[98px] h-[98px] rounded-full bg-white/20 backdrop-blur-md border border-white/20 shadow-xl">
          <span className="text-[22px] font-extrabold leading-7 text-white">500+</span>
          <span className="text-[12px] font-normal text-white/90">Courses</span>
        </div>

        {/* Stats — Rating */}
        <div className="hidden lg:flex absolute bottom-16 left-[116px] items-center gap-3 bg-white/20 backdrop-blur-md rounded-2xl px-5 py-4 shadow-xl border border-white/20">
          <svg className="w-8 h-8 text-[#EAB308]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
          </svg>
          <div className="flex flex-col">
            <span className="text-[18px] font-bold leading-6 text-white">4.9</span>
            <span className="text-[12px] font-normal text-white/90">Rating</span>
          </div>
        </div>

        {/* Stats — Happy Kids */}
        <div className="hidden lg:flex absolute top-10 right-[116px] items-center gap-3 bg-white/20 backdrop-blur-md rounded-2xl px-5 py-4 shadow-xl border border-white/20">
          <svg className="w-8 h-8 text-[#EAB308]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
          </svg>
          <div className="flex flex-col">
            <span className="text-[18px] font-bold leading-6 text-white">10k+</span>
            <span className="text-[12px] font-normal text-white/90">Happy Kids</span>
          </div>
        </div>

        {/* Mobile stats row */}
        <div className="flex lg:hidden justify-center gap-2 sm:gap-4 mb-5 flex-wrap">
          <div className="flex flex-col items-center justify-center w-[62px] h-[62px] sm:w-[72px] sm:h-[72px] rounded-full bg-white/20 border border-white/20">
            <span className="text-[13px] sm:text-[16px] font-extrabold text-white">500+</span>
            <span className="text-[9px] sm:text-[10px] text-white/90">Courses</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 bg-white/20 rounded-2xl px-3 sm:px-4 py-2 border border-white/20">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#EAB308]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            <div className="flex flex-col">
              <span className="text-[12px] sm:text-[14px] font-bold text-white">4.9</span>
              <span className="text-[9px] sm:text-[10px] text-white/90">Rating</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 bg-white/20 rounded-2xl px-3 sm:px-4 py-2 border border-white/20">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#EAB308]" fill="currentColor" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
            <div className="flex flex-col">
              <span className="text-[12px] sm:text-[14px] font-bold text-white">10k+</span>
              <span className="text-[9px] sm:text-[10px] text-white/90">Happy Kids</span>
            </div>
          </div>
        </div>

        {/* Main Content — centered */}
        <div className="relative z-10 text-center max-w-[700px] mx-auto">
          <h1 className="text-[26px] sm:text-[36px] lg:text-[48px] font-bold leading-tight lg:leading-[58px] text-white mb-1">
            Learn a New Skill
          </h1>
          <h2 className="text-[26px] sm:text-[36px] lg:text-[48px] font-extrabold leading-tight lg:leading-[58px] text-[#EAB308] mb-7 sm:mb-10">
            Everyday, Anytime, and Anywhere.
          </h2>
          <SearchBar />
        </div>

      </div>
    </section>
  );
};

export default Hero;
