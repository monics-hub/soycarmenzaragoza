import React from 'react';

type EducationCardProps = {
  date: string;
  title: string;
  institution: string;
  icon?: React.ElementType;
};

const EducationCard: React.FC<EducationCardProps> = ({ date, title, institution, icon: Icon }) => {
  return (
    <div
      data-aos="fade-up"
      className="bg-brand-bright/20 p-6 rounded-2xl border-l-4 border-brand hover:bg-gray-800"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-brand-bright rounded-full flex items-center justify-center">
          {Icon && <Icon className="text-white" size={20} />}
        </div>
        <div>
          <p className="text-brand font-semibold">{date}</p>
        </div>
      </div>
      <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300">{institution}</p>
    </div>
  );
};

export default EducationCard;