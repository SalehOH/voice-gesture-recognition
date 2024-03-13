'use client'
import { PostType } from '@/types'
import BaseCard from './BaseCard'
import { formatDate } from '@/utils/formatDate'
import { useEffect, useState } from 'react'
import { getPosts } from '@/utils/helpers'
import Loading from './Loading'

export default function PostsComponent() {
  
  const [posts, setPosts] = useState<PostType[]>([])
  
  useEffect(() => {
    const fetchPosts = async () => {
      const _posts = await getPosts() as PostType[]
      setPosts(_posts)
    }
    fetchPosts()
  }, [])

  if (!posts.length) {
    return <Loading />
  }
  return (
    <div className="m-5 mx-auto">
      {posts.map((post) => (  
        <BaseCard key={post.id} content={post.content} time={formatDate(post.date)} />
      ))}
    </div>
  )
}

