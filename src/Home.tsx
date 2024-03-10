import { useState } from 'react'
import BaseButton from './components/BaseButton'
import Posts from './pages/Posts'

const App = () => {
  const [page, setPage] = useState<'Posts' | 'CreatePost' | 'Home'>('Home')

  if (page === 'Posts') {
    return <Posts />
  }
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center">
        <BaseButton onClick={() => setPage('Posts')} name="Read Post!" />
        <BaseButton onClick={() => setPage('CreatePost')} name="Create a Post!" />
      </div>
    </div>
  )
}

export default App
