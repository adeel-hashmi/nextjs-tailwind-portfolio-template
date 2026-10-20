"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { notFound, useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react"

const blogPosts = {
  "optimizing-react-performance": {
    title: "Optimizing React Performance: Advanced Techniques",
    content: `
# Optimizing React Performance: Advanced Techniques

React applications can become slow as they grow in complexity. In this comprehensive guide, we'll explore advanced techniques to optimize React performance and create lightning-fast user experiences.

## Understanding React Performance

Before diving into optimization techniques, it's crucial to understand how React works under the hood. React uses a virtual DOM to efficiently update the actual DOM, but even this process can become expensive with complex component trees.

## Key Optimization Techniques

### 1. Memoization with React.memo

React.memo is a higher-order component that memoizes the result of a component. It only re-renders if its props have changed.

\`\`\`jsx
const ExpensiveComponent = React.memo(({ data }) => {
  return (
    <div>
      {data.map(item => <Item key={item.id} item={item} />)}
    </div>
  );
});
\`\`\`

### 2. useMemo and useCallback Hooks

These hooks help prevent unnecessary recalculations and function recreations.

\`\`\`jsx
const MyComponent = ({ items, filter }) => {
  const filteredItems = useMemo(() => {
    return items.filter(item => item.category === filter);
  }, [items, filter]);

  const handleClick = useCallback((id) => {
    // Handle click logic
  }, []);

  return (
    <div>
      {filteredItems.map(item => 
        <Item key={item.id} item={item} onClick={handleClick} />
      )}
    </div>
  );
};
\`\`\`

### 3. Code Splitting with React.lazy

Split your code into smaller chunks that load on demand.

\`\`\`jsx
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
\`\`\`

## Performance Monitoring

Use React DevTools Profiler to identify performance bottlenecks in your application. Monitor component render times and identify unnecessary re-renders.

## Conclusion

Performance optimization is an ongoing process. Start with measuring, identify bottlenecks, and apply these techniques strategically. Remember, premature optimization can lead to complex code without significant benefits.
    `,
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["React.js", "Performance", "Optimization"],
    excerpt:
      "Learn advanced techniques for optimizing React applications, including memoization, code splitting, and performance monitoring.",
  },
  "nextjs-app-router-guide": {
    title: "Complete Guide to Next.js App Router",
    content: `
# Complete Guide to Next.js App Router

The App Router is a new paradigm in Next.js 13+ that introduces powerful features like Server Components, streaming, and improved developer experience. Let's explore everything you need to know.

## What is the App Router?

The App Router is built on React's latest features and provides a more intuitive way to structure your Next.js applications. It uses the \`app\` directory instead of the traditional \`pages\` directory.

## Key Features

### Server Components by Default

Components in the App Router are Server Components by default, which means they run on the server and don't include JavaScript in the client bundle.

\`\`\`jsx
// This is a Server Component
export default async function Page() {
  const data = await fetch('https://api.example.com/data');
  const posts = await data.json();

  return (
    <div>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </div>
  );
}
\`\`\`

### Client Components

When you need interactivity, use the \`"use client"\` directive.

\`\`\`jsx
"use client"

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
\`\`\`

## Conclusion

The App Router represents the future of Next.js development. It provides better performance, improved developer experience, and leverages the latest React features.
    `,
    date: "2024-01-10",
    readTime: "12 min read",
    tags: ["Next.js", "App Router", "Server Components"],
    excerpt:
      "Everything you need to know about the new App Router in Next.js 13+, including server components and streaming.",
  },
  "typescript-best-practices": {
    title: "TypeScript Best Practices for React Developers",
    content: `
# TypeScript Best Practices for React Developers

TypeScript has become essential for building maintainable React applications. Here are the best practices every React developer should follow when using TypeScript.

## Component Props Typing

Always define explicit types for your component props:

\`\`\`tsx
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  disabled = false 
}) => {
  return (
    <button 
      className={\`btn btn-\${variant}\`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
\`\`\`

## Conclusion

Following these TypeScript best practices will help you build more robust and maintainable React applications. Start implementing these patterns in your projects today!
    `,
    date: "2024-01-05",
    readTime: "6 min read",
    tags: ["TypeScript", "React.js", "Best Practices"],
    excerpt: "Essential TypeScript patterns and best practices for building type-safe React applications.",
  },
}

export default function BlogPostPage() {
  const params = useParams<{ slug: string }>()
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-16 space-y-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Link href="/blog">
          <Button variant="ghost" className="mb-8 text-gray-400 hover:text-white p-0">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>

        <article className="space-y-6">
          <header className="space-y-4">
            <h1 className="text-3xl font-bold">{post.title}</h1>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </div>
              </div>

              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Share2 className="mr-2 h-3 w-3" />
                Share
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="border-gray-700 text-gray-300 text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </header>

          <div className="prose prose-invert max-w-none">
            <div
              className="text-gray-400 leading-relaxed space-y-4"
              dangerouslySetInnerHTML={{
                __html: post.content
                  .replace(/\n/g, "<br />")
                  .replace(/```jsx/g, '<pre class="bg-gray-900 p-4 rounded-lg overflow-x-auto"><code>')
                  .replace(/```tsx/g, '<pre class="bg-gray-900 p-4 rounded-lg overflow-x-auto"><code>')
                  .replace(/```/g, "</code></pre>")
                  .replace(/`([^`]+)`/g, '<code class="bg-gray-800 px-2 py-1 rounded text-sm">$1</code>')
                  .replace(/## ([^\n]+)/g, '<h2 class="text-xl font-bold text-white mt-8 mb-4">$1</h2>')
                  .replace(/### ([^\n]+)/g, '<h3 class="text-lg font-semibold text-white mt-6 mb-3">$1</h3>')
                  .replace(/# ([^\n]+)/g, '<h1 class="text-2xl font-bold text-white mb-6">$1</h1>'),
              }}
            />
          </div>
        </article>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="pt-8 border-t border-gray-800 text-center"
      >
        <h3 className="text-xl font-bold mb-2">Enjoyed this article?</h3>
        <p className="text-gray-400 mb-4">Follow me for more insights on frontend development and React.js.</p>
        <div className="flex justify-center gap-4">
          <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800 bg-transparent">
            Follow on Twitter
          </Button>
          <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800 bg-transparent">
            Connect on LinkedIn
          </Button>
        </div>
      </motion.div>
    </div>
  )
}
