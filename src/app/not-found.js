import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-16 text-center bg-white dark:bg-gray-900">
      <h1 className="mb-4 text-6xl font-bold text-primary">404</h1>
      <h2 className="mb-8 text-2xl font-semibold">Page Not Found</h2>
      <p className="max-w-md mb-8 text-gray-600 dark:text-gray-400">
        Oops! The page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 font-medium text-white transition-colors rounded-md bg-primary hover:bg-blue-600"
      >
        Return Home
      </Link>
    </div>
  );
}