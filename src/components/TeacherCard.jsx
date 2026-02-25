import React from 'react';

const TeacherCard = ({ teacher }) => {
  return (
    <div className="relative pt-12 flex-shrink-0">
      {/* Avatar — overflows above card */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90px] h-[90px] rounded-full overflow-hidden ring-4 ring-white shadow-md z-10">
        <img
          src={teacher.image}
          alt={teacher.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Card */}
      <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-[0_2px_12px_rgba(0,0,0,0.06)] pt-12 pb-5 px-5 flex flex-col items-center text-center min-w-[180px] w-[200px]">
        {/* Name */}
        <h3 className="text-[16px] font-bold leading-6 text-[#111827] mb-1">{teacher.name}</h3>

        {/* Role */}
        <p className="text-[12px] text-[#6B7280] mb-1">{teacher.role}</p>

        {/* Students */}
        <p className="text-[12px] text-[#6B7280] mb-4">{teacher.students}</p>

        {/* Subject chip */}
        <span className="text-[12px] font-medium text-[#374151] bg-white border border-[#E5E7EB] px-4 py-1.5 rounded-full">
          {teacher.subject}
        </span>
      </div>
    </div>
  );
};

export default TeacherCard;
