import { useEffect, useMemo, useState, type ComponentPropsWithoutRef } from 'react';
import PageHeader from '../components/ui/PageHeader';
import Accordion, { AccordionItem } from '../components/ui/Accordion';
import CodeBlock from '../components/ui/CodeBlock';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

const README_URL = '/java-theory.md';
const RAW_IMAGE_BASE =
  'https://raw.githubusercontent.com/sudheerj/java-interview-questions/main/';

interface QuestionItem {
  number: number;
  title: string;
  content: string;
}

function parseQuestions(markdown: string): QuestionItem[] {
  const questionsStart = '<!-- QUESTIONS_START -->';
  const questionsEnd = '<!-- QUESTIONS_END -->';

  const startIndex = markdown.indexOf(questionsStart);
  const endIndex = markdown.indexOf(questionsEnd);
  const source =
    startIndex !== -1 && endIndex !== -1
      ? markdown.slice(startIndex + questionsStart.length, endIndex)
      : markdown;

  return source
    .split(/\n(?=\d+\.\s+###\s+)/g)
    .map((block) => {
      const titleMatch = block.match(/^(\d+)\.\s+###\s+(.+)$/m);
      if (!titleMatch) return null;

      const number = Number(titleMatch[1]);
      const title = titleMatch[2].trim();
      const body = block
        .slice(block.indexOf(titleMatch[0]) + titleMatch[0].length)
        .replace(/\*\*\[⬆ Back to Top\]\(#table-of-contents\)\*\*/g, '')
        .trim();

      return { number, title, content: body };
    })
    .filter((item): item is QuestionItem => item !== null);
}

function resolveImageSrc(src?: string): string {
  if (!src) return '';
  if (/^https?:\/\//i.test(src)) return src;

  const normalized = src.replace(/^\.?\//, '');
  return `${RAW_IMAGE_BASE}${normalized}`;
}

export default function JavaTheory() {
  const [content, setContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const loadTheory = async () => {
      try {
        setIsLoading(true);
        setError('');

        const response = await fetch(README_URL);
        if (!response.ok) {
          throw new Error(`Failed to fetch content (${response.status})`);
        }

        const text = await response.text();
        setContent(text);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unable to load Java theory content.');
      } finally {
        setIsLoading(false);
      }
    };

    loadTheory();
  }, []);

  const questions = useMemo(() => parseQuestions(content), [content]);

  const markdownComponents = {
    h1: (props: ComponentPropsWithoutRef<'h1'>) => (
      <h1 className="text-2xl font-bold text-dark-900 dark:text-white mt-6 mb-3" {...props} />
    ),
    h2: (props: ComponentPropsWithoutRef<'h2'>) => (
      <h2 className="text-xl font-semibold text-dark-900 dark:text-white mt-5 mb-3" {...props} />
    ),
    h3: (props: ComponentPropsWithoutRef<'h3'>) => (
      <h3 className="text-lg font-semibold text-dark-900 dark:text-white mt-4 mb-2" {...props} />
    ),
    p: (props: ComponentPropsWithoutRef<'p'>) => (
      <p className="text-dark-700 dark:text-dark-200 leading-7 mb-3" {...props} />
    ),
    ul: (props: ComponentPropsWithoutRef<'ul'>) => (
      <ul className="list-disc ml-6 mb-3 text-dark-700 dark:text-dark-200" {...props} />
    ),
    ol: (props: ComponentPropsWithoutRef<'ol'>) => (
      <ol className="list-decimal ml-6 mb-3 text-dark-700 dark:text-dark-200" {...props} />
    ),
    li: (props: ComponentPropsWithoutRef<'li'>) => <li className="mb-1 leading-7" {...props} />,
    a: (props: ComponentPropsWithoutRef<'a'>) => (
      <a className="text-primary-600 dark:text-primary-400 hover:underline" {...props} />
    ),
    table: (props: ComponentPropsWithoutRef<'table'>) => (
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse border border-dark-300 dark:border-dark-700" {...props} />
      </div>
    ),
    th: (props: ComponentPropsWithoutRef<'th'>) => (
      <th
        className="border border-dark-300 dark:border-dark-700 bg-dark-100 dark:bg-dark-800 text-left p-2"
        {...props}
      />
    ),
    td: (props: ComponentPropsWithoutRef<'td'>) => (
      <td className="border border-dark-300 dark:border-dark-700 p-2 align-top" {...props} />
    ),
    code: ({ className, children, ...props }: ComponentPropsWithoutRef<'code'>) => {
      const match = /language-(\w+)/.exec(className || '');
      const codeContent = String(children).replace(/\n$/, '');

      if (match) {
        return <CodeBlock code={codeContent} language={match[1]} showLineNumbers />;
      }

      return (
        <code
          className="px-1.5 py-0.5 rounded bg-dark-100 dark:bg-dark-800 text-primary-700 dark:text-primary-300"
          {...props}
        >
          {children}
        </code>
      );
    },
    img: ({ src, alt, ...props }: ComponentPropsWithoutRef<'img'>) => (
      <img
        src={resolveImageSrc(src)}
        alt={alt || 'Java theory diagram'}
        className="my-4 rounded-lg border border-dark-200 dark:border-dark-700 max-w-full h-auto"
        loading="lazy"
        {...props}
      />
    ),
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <PageHeader
        title="Java Theory"
        description="Complete Java interview questions and answers in a readable web format."
        gradient="orange"
      />

      <div className="bg-white dark:bg-dark-900 border border-dark-200 dark:border-dark-700 rounded-2xl shadow-sm p-6 mb-6">
        <p className="text-sm text-dark-600 dark:text-dark-300">
          Source: offline local copy from <code>/public/java-theory.md</code>
        </p>
        {!isLoading && !error && (
          <p className="text-sm text-dark-500 dark:text-dark-400 mt-2">
            Loaded {questions.length} questions
          </p>
        )}
      </div>

      {isLoading ? (
        <div className="p-6 bg-white dark:bg-dark-900 border border-dark-200 dark:border-dark-700 rounded-2xl text-dark-600 dark:text-dark-300">
          Loading Java theory...
        </div>
      ) : error ? (
        <div className="p-6 bg-white dark:bg-dark-900 border border-dark-200 dark:border-dark-700 rounded-2xl text-red-600 dark:text-red-400">
          Failed to load content: {error}
        </div>
      ) : (
        <Accordion>
          {questions.map((question, index) => (
            <AccordionItem
              key={question.number}
              title={`${question.number}. ${question.title}`}
              defaultOpen={index === 0}
            >
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={markdownComponents}
              >
                {question.content}
              </ReactMarkdown>
            </AccordionItem>
          ))}
        </Accordion>
      )}
    </div>
  );
}
