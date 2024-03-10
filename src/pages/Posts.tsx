import CamComponent from '../components/CamComponent'
import PostsComponent from '../components/PostsComponent'
import { createContext, useState } from 'react'

type AppContextState = {
  video?: HTMLVideoElement
  gesture?: 'scrollUp' | 'scrollDown' | ''
  timeSinceLastGesture?: Date
}
type AppContextType = AppContextState & {
  setContext: React.Dispatch<React.SetStateAction<AppContextState | null>>
}

export const AppContext = createContext<AppContextType | null>(null)

const Posts = () => {
  const [context, setContext] = useState<AppContextState | null>(null)

  return (
    <AppContext.Provider value={{ ...context, setContext }}>
      <div className="flex flex-col bg-gray-800 min-h-screen scroll-smooth">
        <PostsComponent />
        <CamComponent />
      </div>
    </AppContext.Provider>
  )
}

export default Posts
