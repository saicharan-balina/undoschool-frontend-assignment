import React, { useState } from 'react';
import { ageGroups } from '../data/courses';

// Border color group as per Figma spec
const getChipStyle = (value, isSelected) => {
  const [min] = value.split('-').map(Number);
  let border = '#6B7280';
  let hoverBg = 'hover:bg-gray-50';
  if (min <= 6)  { border = '#EAB308'; hoverBg = 'hover:bg-amber-50'; }
  else if (min <= 10) { border = '#EC4899'; hoverBg = 'hover:bg-pink-50'; }
  else if (min <= 12) { border = '#A855F7'; hoverBg = 'hover:bg-purple-50'; }
  else if (min <= 14) { border = '#22C55E'; hoverBg = 'hover:bg-green-50'; }

  return {
    borderColor: isSelected ? border : border,
    className: `border-[1.5px] rounded-[8px] px-4 py-2 text-[12px] font-medium text-[#374151]
      whitespace-nowrap transition-colors ${hoverBg}
      ${isSelected ? 'text-white' : ''}`,
    style: {
      borderColor: border,
      backgroundColor: isSelected ? border : 'white',
      color: isSelected ? 'white' : '#374151',
    },
  };
};

const AgeSelector = () => {
  const [selectedAge, setSelectedAge] = useState(null);

  return (
    <section
      className="py-[60px] px-4 sm:px-8 lg:px-[116px]"
      style={{ background: 'linear-gradient(180deg, #FDF4FF 0%, #FFFFFF 100%)' }}
    >
      <div className="max-w-[1208px] mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-[36px] font-bold leading-[44px] text-[#111827] mb-2">
            How Old Are You? 🎯
          </h2>
          <p className="text-[16px] font-normal text-[#6B7280]">
            Pick your age and find the perfect courses just for you!
          </p>
        </div>

        <div
          className="flex gap-3 overflow-x-auto px-2 py-2 -mx-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {ageGroups.map((age) => {
            const chip = getChipStyle(age.value, selectedAge === age.value);
            return (
              <button
                key={age.value}
                onClick={() => setSelectedAge(age.value)}
                className={chip.className}
                style={chip.style}
              >
                {age.label}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AgeSelector;
