import React from 'react';
import { Calendar } from 'lucide-react'; // or your preferred icon lib

interface ExperienceCardProps {
  title: string;
  subtitle: string;
  date: string;
  bullets: string[];
  bulletsAlt?: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  subtitle,
  date,
  bullets,
  bulletsAlt = [],
}) => {
  return (
    <div data-aos="fade-up" 
    className="bg-gray-800 p-8 rounded-2xl border-l-4 border-brand hover:bg-gray-750 transition-colors">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-brand font-semibold text-lg">{subtitle}</p>
        </div>
        <div className="flex items-center gap-2 text-gray-400 mt-4 lg:mt-0">
          <Calendar size={18} />
          <span>{date}</span>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6 text-gray-300">
        <div>
          {bullets.map((item, idx) => (
            <p key={idx}>• {item}</p>
          ))}
        </div>
        <div>
          {bulletsAlt.map((item, idx) => (
            <p key={idx}>• {item}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;