"use client";
import CamComponent from '@/components/CamComponent'
import PostsComponent from '@/components/PostsComponent'
import { useSpeech } from '@/hooks/useSpeech'
import { postsCommand } from '@/utils/commands'
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function Page() {
  const searchParams = useSearchParams()
  const handsfree = searchParams.get('handsfree')
  
  const notHandsfree = handsfree && handsfree === 'false' ? true : false
  const {transcript} =useSpeech(postsCommand(useRouter()), notHandsfree)
  
  if (notHandsfree) {
    return (
        <div className="flex flex-col min-h-screen scroll-smooth">
          <PostsComponent />
        </div>
    )
  }else{
    return (
        <div className="flex flex-col min-h-screen scroll-smooth">
          <PostsComponent />
          <h1 className='fixed ml-[110px] bottom-2 right-0 bg-black/20 text-clip text-gray-200'>{transcript}</h1>
          <CamComponent />
        </div>
    )
  }
}

export default function Posts() {
  return (
    <Suspense>
      <Page />
    </Suspense>
  )
}
