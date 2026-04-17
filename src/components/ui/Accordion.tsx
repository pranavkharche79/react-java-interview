import { useState, type ReactNode } from 'react';

interface AccordionItemProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

export function AccordionItem({ title, children, defaultOpen = false }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-dark-200 dark:border-dark-700 rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-5 py-4 flex items-center justify-between text-left transition-colors ${
          isOpen 
            ? 'bg-primary-50 dark:bg-primary-900/20' 
            : 'bg-white dark:bg-dark-800 hover:bg-dark-50 dark:hover:bg-dark-700'
        }`}
      >
        <span className={`font-medium ${isOpen ? 'text-primary-600 dark:text-primary-400' : 'text-dark-900 dark:text-white'}`}>
          {title}
        </span>
        <svg 
          className={`w-5 h-5 transition-transform duration-200 ${
            isOpen 
              ? 'rotate-180 text-primary-500' 
              : 'text-dark-400'
          }`} 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="px-5 py-4 bg-white dark:bg-dark-800 border-t border-dark-200 dark:border-dark-700 animate-fade-in">
          {children}
        </div>
      )}
    </div>
  );
}

interface AccordionProps {
  children: ReactNode;
}

export default function Accordion({ children }: AccordionProps) {
  return (
    <div className="space-y-3">
      {children}
    </div>
  );
}

