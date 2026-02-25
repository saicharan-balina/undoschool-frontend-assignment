import React, { useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AgeSelector from '../components/AgeSelector';
import CourseCard from '../components/CourseCard';
import TeacherCard from '../components/TeacherCard';
import CategoryCard from '../components/CategoryCard';
import TimeFilterCard from '../components/TimeFilterCard';
import { courses, teachers, categories, timeSlots } from '../data/courses';

const BrowseCourses = () => {
  const [activeCategory, setActiveCategory] = useState(1);

  // Reusable horizontal-scroll course section
  const CourseSection = ({ title, subtitle }) => {
    const sectionRef = useRef(null);
    const scroll = (dir) => {
      if (sectionRef.current) {
        sectionRef.current.scrollBy({ left: dir === 'left' ? -580 : 580, behavior: 'smooth' });
      }
    };

    return (
      <section className="py-[60px] px-4 sm:px-8 lg:px-[116px] bg-white">
        <div className="max-w-[1208px] mx-auto">
          {/* Heading */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold leading-tight lg:leading-[44px] text-[#111827] mb-2">{title}</h2>
            <p className="text-[14px] sm:text-[16px] font-normal text-[#6B7280]">{subtitle}</p>
          </div>

          {/* Scroll row with arrows */}
          <div className="relative -mx-2">
            <button
              onClick={() => scroll('left')}
              className="absolute left-2 top-1/2 -translate-y-1/2 -translate-x-5 z-10 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow hidden lg:flex border border-[#E5E7EB]"
            >
              <svg className="w-5 h-5 text-[#374151]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div
              ref={sectionRef}
              className="flex gap-5 overflow-x-auto px-2 pb-4 pt-2"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>

            <button
              onClick={() => scroll('right')}
              className="absolute right-2 top-1/2 -translate-y-1/2 translate-x-5 z-10 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow hidden lg:flex border border-[#E5E7EB]"
            >
              <svg className="w-5 h-5 text-[#374151]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-white font-['Poppins',sans-serif]">
      <Navbar />
      <Hero />
      <AgeSelector />

      {/* New Launches */}
      <CourseSection
        title="New Launches ⭐"
        subtitle="Our most loved courses that kids absolutely adore!"
      />

      {/* Featured Courses */}
      <CourseSection
        title="Featured Courses ⭐"
        subtitle="Our most loved courses that kids absolutely adore!"
      />

      {/* Learn from Top Teachers */}
      <section
        className="py-10 sm:py-[60px] px-4 sm:px-8 lg:px-[116px]"
        style={{ background: 'linear-gradient(160deg, #EDE9FE 0%, #F5F3FF 40%, #FFFFFF 100%)' }}
      >
        <div className="max-w-[1208px] mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold leading-tight lg:leading-[44px] text-[#111827] mb-2">Learn from Top Teachers</h2>
            <p className="text-[14px] sm:text-[16px] font-normal text-[#6B7280]">Expert instructors who make learning fun and engaging for every child</p>
          </div>
          <div
            className="flex gap-6 overflow-x-auto px-2 pb-4 pt-2 -mx-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {teachers.map((teacher) => (
              <TeacherCard key={teacher.id} teacher={teacher} />
            ))}
          </div>
        </div>
      </section>

      {/* Webinar Section */}
      <section className="py-10 sm:py-[60px] px-4 sm:px-8 lg:px-[116px] bg-white">
        <div className="max-w-[1208px] mx-auto">
          <div className="mb-6 sm:mb-8 text-center">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold leading-tight lg:leading-[44px] text-[#111827]">
              ── Webinar starting within 24 hrs ──
            </h2>
          </div>
          <div
            className="flex gap-5 overflow-x-auto px-2 pb-4 pt-2 -mx-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {courses.map((course) => (
              <CourseCard key={`webinar-${course.id}`} course={{ ...course, badge: 'Starting in 2 days' }} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-10 sm:py-[60px] px-4 sm:px-8 lg:px-[116px] bg-[#F9FAFB]">
        <div className="max-w-[1208px] mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold leading-tight lg:leading-[44px] text-[#111827] mb-2">Popular Categories</h2>
            <p className="text-[14px] sm:text-[16px] font-normal text-[#6B7280]">
              Pick what you love most! These categories have everything you need to learn something awesome ✨
            </p>
          </div>

          <div
            className="flex flex-row gap-4 mb-10 overflow-x-auto pb-2"
            style={{ overflowY: 'visible', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                isActive={activeCategory === category.id}
                onClick={() => setActiveCategory(category.id)}
              />
            ))}
          </div>

          {/* Category Courses row */}
          <div
            className="flex gap-5 overflow-x-auto px-2 pb-4 pt-2 -mx-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {courses.map((course) => (
              <CourseCard key={`category-${course.id}`} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Filter with Time */}
      <section className="py-10 sm:py-[60px] px-4 sm:px-8 lg:px-[116px] bg-white">
        <div className="max-w-[1208px] mx-auto">
          <div className="mb-6 sm:mb-8">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold leading-tight lg:leading-[44px] text-[#111827] mb-2">Filter with Time</h2>
            <p className="text-[14px] sm:text-[16px] font-normal text-[#6B7280]">Choose the perfect time that fits your child's schedule</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 mb-8">
            {timeSlots.map((slot) => (
              <TimeFilterCard key={slot.id} timeSlot={slot} />
            ))}
          </div>
          <div className="flex gap-5 overflow-x-auto px-2 pb-4 pt-2 -mx-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {courses.slice(0, 3).map((course) => (
              <CourseCard key={`time-${course.id}`} course={{ ...course, badge: 'Morning class' }} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#000000] text-white py-8 px-4 sm:px-8 lg:px-[116px]">
        <div className="max-w-[1208px] mx-auto text-center">
          <p className="text-[#6B7280] text-[14px]">© 2026 UndoSchool. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default BrowseCourses;
