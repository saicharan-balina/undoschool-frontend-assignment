import React, { useState } from 'react';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-[620px] mx-auto px-4 sm:px-0">
      <div className="flex items-center bg-white rounded-full h-14 px-4 shadow-lg">
        <svg className="w-5 h-5 text-gray-400 flex-shrink-0 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="What do you want to learn today?"
          className="flex-1 text-[14px] text-gray-500 placeholder-gray-400 focus:outline-none bg-transparent"
        />
        <button
          type="submit"
          className="bg-[#6B21A8] text-white px-8 py-2 rounded-full text-[14px] font-semibold hover:bg-[#5B1898] transition-colors flex-shrink-0"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
