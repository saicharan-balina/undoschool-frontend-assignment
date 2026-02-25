import React from 'react';

// Apple-style 3D emoji images via CDN
const emojiImages = {
  '💻': 'https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f4bb.png',
  '🎤': 'https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f3a4.png',
  '♟':  'https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/265f-fe0f.png',
  '📚': 'https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f4da.png',
  '📱': 'https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f4f1.png',
};

const CategoryCard = ({ category, isActive, onClick }) => {
  const imgSrc = emojiImages[category.icon];
  const activeColor = category.activeColor || '#F97316';

  return (
    <div
      onClick={onClick}
      style={isActive ? { backgroundColor: activeColor } : {}}
      className={`
        relative flex-shrink-0 flex items-center justify-between
        w-[230px] h-[106px] rounded-2xl px-5
        cursor-pointer select-none
        transition-all duration-200
        ${
          isActive
            ? 'shadow-xl'
            : 'bg-white border border-gray-200 hover:shadow-md hover:border-gray-300'
        }
      `}
    >
      {/* Label — left side */}
      <span
        className={`font-semibold text-[14px] leading-snug z-10 ${
          isActive ? 'text-white' : 'text-[#374151]'
        }`}
        style={{ maxWidth: '105px' }}
      >
        {category.name}
      </span>

      {/* Emoji container — fixed bounding box, clips the image */}
      <div
        className={`flex items-center justify-center flex-shrink-0 overflow-hidden transition-all duration-200 ${
          isActive ? 'w-[80px] h-[80px]' : 'w-[64px] h-[64px]'
        }`}
      >
        <img
          src={imgSrc}
          alt={category.name}
          className="w-full h-full object-contain"
          style={{ filter: 'drop-shadow(0 3px 6px rgba(0,0,0,0.18))' }}
        />
      </div>
    </div>
  );
};

export default CategoryCard;
