import React from 'react';

const CourseCard = ({ course }) => {
  return (
    <div className="flex-shrink-0 w-[270px]">
      {/* Rating row — ABOVE the card */}
      <div className="flex items-center gap-1 mb-2 px-1">
        <svg className="w-3.5 h-3.5 text-[#EAB308] fill-current" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
        </svg>
        <span className="text-[12px] text-[#6B7280]">{course.rating} | {course.learners}+ learners</span>
      </div>

      {/* Card */}
      <div className={`bg-white rounded-[12px] shadow-[0_4px_16px_rgba(0,0,0,0.08)] overflow-hidden hover:shadow-lg transition-shadow duration-300 ${
        course.badge === 'Selling Fast' ? 'ring-2 ring-[#60A5FA]' : ''
      }`}>
        {/* Thumbnail */}
        <div className="relative">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-40 object-cover"
          />
          {course.badge && (
            <span className="absolute top-3 left-3 bg-[#F97316] text-white text-[11px] font-semibold px-3 py-1 rounded-[6px]">
              {course.badge}
            </span>
          )}
        </div>

        {/* Body */}
        <div className="p-4">
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            <span className="text-[11px] font-medium text-[#6B7280] border border-[#E5E7EB] rounded-full px-3 py-0.5">
              {course.language}
            </span>
            <span className="text-[11px] font-medium text-[#EC4899] border border-[#F9A8D4] rounded-full px-3 py-0.5">
              {course.level}
            </span>
            <span className="text-[11px] font-medium text-[#92400E] bg-[#FEF9C3] border border-[#EAB308] rounded-full px-3 py-0.5">
              {course.classes} classes
            </span>
          </div>

          {/* Title */}
          <h3 className="text-[15px] font-semibold leading-[22px] text-[#111827] line-clamp-2 mb-3">
            {course.title}
          </h3>

          {/* Instructor */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
              <svg className="w-3.5 h-3.5 text-[#6B21A8]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <span className="text-[13px] text-[#6B7280]">By: {course.instructor}</span>
          </div>

          {/* Meta + Cart */}
          <div className="flex items-center justify-between border-t border-[#E5E7EB] pt-3">
            <div className="flex items-center gap-3 text-[12px] text-[#6B7280]">
              <span className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                {course.duration}
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {course.students}
              </span>
              <span className="font-semibold text-[#111827]">₹{course.price}</span>
            </div>
            <button className="w-8 h-8 bg-[#F3F4F6] rounded-[8px] flex items-center justify-center hover:bg-gray-200 transition-colors flex-shrink-0">
              <svg className="w-4 h-4 text-[#374151]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
