import { Link } from 'react-router'

export function NotFound() {
  return (
    <div className="space-y-2 text-center">
      <h1 className="text-2xl font-bold">Page not found</h1>
      <Link to="/" className="text-teal-700 underline dark:text-teal-400">
        Back to home
      </Link>
    </div>
  )
}
