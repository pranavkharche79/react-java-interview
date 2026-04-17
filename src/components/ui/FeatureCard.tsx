import { Link } from 'react-router-dom';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: 'array' | 'string' | 'collection';
  link: string;
  color: 'blue' | 'green' | 'amber';
}

const icons = {
  array: (
    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
    </svg>
  ),
  string: (
    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 7V4h16v3M9 20h6M12 4v16" />
    </svg>
  ),
  collection: (
    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  ),
};

const colors = {
  blue: {
    bg: 'bg-primary-50 dark:bg-primary-900/20',
    text: 'text-primary-500',
    hover: 'hover:border-primary-300 dark:hover:border-primary-700',
    btn: 'bg-primary-500 hover:bg-primary-600',
  },
  green: {
    bg: 'bg-emerald-50 dark:bg-emerald-900/20',
    text: 'text-emerald-500',
    hover: 'hover:border-emerald-300 dark:hover:border-emerald-700',
    btn: 'bg-emerald-500 hover:bg-emerald-600',
  },
  amber: {
    bg: 'bg-amber-50 dark:bg-amber-900/20',
    text: 'text-amber-500',
    hover: 'hover:border-amber-300 dark:hover:border-amber-700',
    btn: 'bg-amber-500 hover:bg-amber-600',
  },
};

export default function FeatureCard({ title, description, icon, link, color }: FeatureCardProps) {
  const colorClasses = colors[color];

  return (
    <div className={`card ${colorClasses.hover} transition-all duration-300 group`}>
      <div className={`w-16 h-16 rounded-xl ${colorClasses.bg} ${colorClasses.text} flex items-center justify-center mb-5`}>
        {icons[icon]}
      </div>
      <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-2">{title}</h3>
      <p className="text-dark-500 dark:text-dark-400 mb-5">{description}</p>
      <Link
        to={link}
        className={`btn ${colorClasses.btn} text-white w-full group-hover:translate-y-0 group-hover:shadow-lg transition-all`}
      >
        Explore {title}
        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}

