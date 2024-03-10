import BaseCard from './BaseCard'
import { useEffect } from 'react'
import { useAppContext } from '../hooks/useAppContext'
import { scrollPage } from '../utils/scrollElement'

const PostsComponent = () => {
  const { gesture, timeSinceLastGesture } = useAppContext()

  useEffect(() => {
    if (gesture === 'scrollUp') {
      scrollPage('Up')
    } else if (gesture === 'scrollDown') {
      scrollPage('Down')
    }
  }, [gesture, timeSinceLastGesture])

  return (
    <div className="m-5 mx-auto">
      {Array.from({ length: 30 }).map((_, i) => (
        <BaseCard
          key={i}
          time="2h"
          username="Saleh"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      ))}
    </div>
  )
}

export default PostsComponent
