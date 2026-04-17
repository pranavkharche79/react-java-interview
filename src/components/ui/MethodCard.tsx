import CodeBlock from './CodeBlock';

interface MethodCardProps {
  title: string;
  description: string;
  code: string;
  complexity?: string;
  badge?: 'primary' | 'success' | 'warning' | 'info';
}

export default function MethodCard({ title, description, code, complexity, badge = 'primary' }: MethodCardProps) {
  const badgeColors = {
    primary: 'bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400',
    success: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
    warning: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
    info: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400',
  };

  return (
    <div className="card card-hover p-0 overflow-hidden">
      <div className="p-5 border-b border-dark-200 dark:border-dark-700">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-dark-900 dark:text-white font-mono">
            {title}
          </h3>
          {complexity && (
            <span className={`badge ${badgeColors[badge]} shrink-0`}>
              {complexity}
            </span>
          )}
        </div>
        <p className="mt-2 text-sm text-dark-600 dark:text-dark-400">
          {description}
        </p>
      </div>
      <div className="p-4 bg-dark-50 dark:bg-dark-900/50">
        <CodeBlock code={code} showLineNumbers={false} />
      </div>
    </div>
  );
}

