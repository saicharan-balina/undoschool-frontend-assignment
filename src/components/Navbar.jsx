import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white sticky top-0 z-50 shadow-[0_7px_29px_rgba(100,100,111,0.20)] border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[116px]">
        <div className="flex justify-between items-center h-[76px]">

          {/* Left: Logo + Nav */}
          <div className="flex items-center gap-8">
            {/* Logo wordmark */}
            <span className="text-[24px] font-bold leading-8 text-[#111827]">Logo</span>

            {/* Nav Links */}
            <div className="hidden lg:flex items-center gap-1">
              <a href="#" className="text-[14px] font-medium text-[#6B7280] px-4 py-2 hover:text-[#111827] transition-colors">Home</a>
              <a href="#" className="relative text-[14px] font-semibold text-[#6B21A8] px-4 py-2">
                Course
                <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#6B21A8] rounded-full"></span>
              </a>
              <a href="#" className="text-[14px] font-medium text-[#6B7280] px-4 py-2 hover:text-[#111827] transition-colors">Live Classes</a>
              <a href="#" className="text-[14px] font-medium text-[#6B7280] px-4 py-2 hover:text-[#111827] transition-colors">Blog</a>
              <a href="#" className="text-[14px] font-medium text-[#6B7280] px-4 py-2 hover:text-[#111827] transition-colors flex items-center gap-1">
                More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: CTA */}
          <div className="flex items-center gap-4">
            {/* Login — plain text link */}
            <button className="text-[14px] font-medium text-[#111827] hover:text-[#6B21A8] transition-colors">
              Login
            </button>
            {/* Register — purple rounded-full pill */}
            <button className="bg-[#6B21A8] text-white font-semibold px-4 sm:px-6 py-2 sm:py-2.5 text-[12px] sm:text-[14px] rounded-full hover:bg-[#5B1898] transition-colors whitespace-nowrap shadow-sm">
              <span className="hidden sm:inline">Register for free</span>
              <span className="sm:hidden">Sign up</span>
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
