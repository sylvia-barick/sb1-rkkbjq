import React from 'react';

interface SkillBadgeProps {
  name: string;
  level: number;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name, level }) => {
  return (
    <div className="group relative">
      <div className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition cursor-help">
        {name}
      </div>
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-700 rounded text-sm opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap">
        Proficiency: {level}%
      </div>
    </div>
  );
};

export default SkillBadge;