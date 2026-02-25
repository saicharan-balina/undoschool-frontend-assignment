import React, { useState } from 'react';

const TimeFilterCard = ({ timeSlot, isSelected }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Icon components with professional SVGs
  const icons = {
    morning: (
      <svg className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 transition-all duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="5" fill="#FDB813" stroke="#F59E0B" strokeWidth="1"/>
        <line x1="12" y1="1" x2="12" y2="3" stroke="#F59E0B" strokeLinecap="round"/>
        <line x1="12" y1="21" x2="12" y2="23" stroke="#F59E0B" strokeLinecap="round"/>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="#F59E0B" strokeLinecap="round"/>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="#F59E0B" strokeLinecap="round"/>
        <line x1="1" y1="12" x2="3" y2="12" stroke="#F59E0B" strokeLinecap="round"/>
        <line x1="21" y1="12" x2="23" y2="12" stroke="#F59E0B" strokeLinecap="round"/>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="#F59E0B" strokeLinecap="round"/>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="#F59E0B" strokeLinecap="round"/>
      </svg>
    ),
    afternoon: (
      <svg className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 transition-all duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="12" cy="12" r="5" fill="#FB923C" stroke="#EA580C" strokeWidth="1.5"/>
        <g className="animate-pulse">
          <line x1="12" y1="1" x2="12" y2="3" stroke="#EA580C" strokeWidth="2" strokeLinecap="round"/>
          <line x1="12" y1="21" x2="12" y2="23" stroke="#EA580C" strokeWidth="2" strokeLinecap="round"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="#EA580C" strokeWidth="2" strokeLinecap="round"/>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="#EA580C" strokeWidth="2" strokeLinecap="round"/>
          <line x1="1" y1="12" x2="3" y2="12" stroke="#EA580C" strokeWidth="2" strokeLinecap="round"/>
          <line x1="21" y1="12" x2="23" y2="12" stroke="#EA580C" strokeWidth="2" strokeLinecap="round"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="#EA580C" strokeWidth="2" strokeLinecap="round"/>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="#EA580C" strokeWidth="2" strokeLinecap="round"/>
        </g>
      </svg>
    ),
    evening: (
      <svg className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 transition-all duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="#818CF8" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    lateEvening: (
      <svg className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 transition-all duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="#A78BFA" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="17" cy="6" r="1" fill="#FDB813" className="animate-pulse"/>
        <circle cx="20" cy="9" r="0.5" fill="#FDB813" className="animate-pulse" style={{animationDelay: '0.2s'}}/>
        <circle cx="19" cy="4" r="0.5" fill="#FDB813" className="animate-pulse" style={{animationDelay: '0.4s'}}/>
      </svg>
    )
  };

  // Define color schemes based on time slot
  const getColorScheme = () => {
    switch (timeSlot.id) {
      case 1: // Morning classes
        return {
          bg: isSelected ? 'bg-amber-50 border-amber-300' : 'bg-white border-gray-200',
          hoverBg: 'hover:bg-amber-50 hover:border-amber-300',
          icon: icons.morning,
          iconColor: 'text-amber-500',
          hoverAnimation: 'group-hover:rotate-90 group-hover:scale-110'
        };
      case 2: // Afternoon classes
        return {
          bg: isSelected ? 'bg-orange-50 border-orange-300' : 'bg-white border-gray-200',
          hoverBg: 'hover:bg-orange-50 hover:border-orange-300',
          icon: icons.afternoon,
          iconColor: 'text-orange-500',
          hoverAnimation: 'group-hover:scale-110'
        };
      case 3: // Evening classes
        return {
          bg: isSelected ? 'bg-indigo-50 border-indigo-300' : 'bg-white border-gray-200',
          hoverBg: 'hover:bg-indigo-50 hover:border-indigo-300',
          icon: icons.evening,
          iconColor: 'text-indigo-500',
          hoverAnimation: 'group-hover:-rotate-12 group-hover:scale-110'
        };
      case 4: // Late evening classes
        return {
          bg: isSelected ? 'bg-purple-50 border-purple-300' : 'bg-white border-gray-200',
          hoverBg: 'hover:bg-purple-50 hover:border-purple-300',
          icon: icons.lateEvening,
          iconColor: 'text-purple-500',
          hoverAnimation: 'group-hover:rotate-12 group-hover:scale-110'
        };
      default:
        return {
          bg: 'bg-white border-gray-200',
          hoverBg: 'hover:bg-gray-50 hover:border-gray-300',
          icon: icons.morning,
          iconColor: 'text-gray-600',
          hoverAnimation: 'group-hover:scale-110'
        };
    }
  };

  const colorScheme = getColorScheme();

  return (
    <div 
      className={`rounded-xl sm:rounded-2xl border-2 p-4 sm:p-6 transition-all duration-300 cursor-pointer group w-full max-w-[240px] text-center shadow-sm ${
        colorScheme.bg
      } ${colorScheme.hoverBg} ${
        isSelected ? 'shadow-lg scale-105 ring-2 ring-purple-500' : 'hover:shadow-md hover:-translate-y-1'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`flex justify-center items-center mb-3 sm:mb-4 transform transition-all duration-500 ${
        isHovered ? colorScheme.hoverAnimation : ''
      } ${colorScheme.iconColor}`}>
        {colorScheme.icon}
      </div>
      <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base transition-colors duration-300 group-hover:text-purple-600">
        {timeSlot.title}
      </h3>
      <p className="text-xs sm:text-sm text-gray-600 transition-colors duration-300 group-hover:text-gray-800 font-medium">
        {timeSlot.time}
      </p>
    </div>
  );
};

export default TimeFilterCard;
