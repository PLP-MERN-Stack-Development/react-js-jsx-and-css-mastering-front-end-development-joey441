import Card from '../components/Card'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <div className="space-y-6">
      <Card>
        <h1 className="text-2xl font-semibold">Welcome</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">This app demonstrates component architecture, hooks, state management, and API integration with Tailwind CSS.</p>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link to="/tasks">
          <Card className="hover:scale-[1.01] transition-transform">
            <h2 className="text-lg font-medium">Task Manager</h2>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">Add, complete, delete, and filter tasks. Local storage persistence.</p>
          </Card>
        </Link>

        <Link to="/posts">
          <Card className="hover:scale-[1.01] transition-transform">
            <h2 className="text-lg font-medium">Posts (API)</h2>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">Fetch posts from JSONPlaceholder, with search and pagination.</p>
          </Card>
        </Link>
      </div>
    </div>
  )
}
