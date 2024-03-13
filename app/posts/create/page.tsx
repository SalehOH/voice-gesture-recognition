"use client";
import BaseButton from '@/components/BaseButton';
import { useSpeech } from '@/hooks/useSpeech';
import { createPostCommand } from '@/utils/commands';
import { submitPost } from '@/utils/helpers';
import { useRouter, useSearchParams } from 'next/navigation';
import { FormEvent, useEffect, useState, Suspense } from 'react';

function Page() {
  const searchParams = useSearchParams()
  const handsfree = searchParams.get('handsfree')
  const notHandsfree = handsfree && handsfree === 'false' ? true : false
  
  const router = useRouter()
  const [transcripts, setTranscript] = useState('')
  const { transcript } = useSpeech(createPostCommand(router, transcripts), notHandsfree)
  
  useEffect(() => {
    if (notHandsfree) {
      return
    }
    setTranscript(transcript)
  }, [transcript, notHandsfree])
  
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (notHandsfree) {
      setTranscript(e.target.value)
    }
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    if (transcripts === '') 
      return
    
    try{
      event.preventDefault()
      await submitPost(transcripts)

      setTranscript('')
      router.push('/posts?handsfree=false')
    }catch(error){
      console.log(error)
    }
  }

  return (
      <div className='flex flex-col items-center h-screen lg:w-[700px] mx-2 lg:mx-auto'>
        <div className="flex flex-col justify-center mx-1 mt-3">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">
            Create a new post
          </h1>
          {!notHandsfree && (<div className="mx-1 mb-6 text-base font-normal text-gray-300 lg:text-xl">
            <h2 className='mb-2 pb-2 border-b'>
              - Two words are reserved for the voice command: 
              <span className='text-white font-semibold underline ml-2'>Back</span> and <span className='text-white font-semibold underline ml-1'>Submit</span>.
            </h2>
            <h2 className='mb-2 pb-2 border-b'>
              - They are used to navigate back to the previous page and submit the post.
            </h2>
            <h2 className='mb-2 pb-2 border-b'>
              - To submit You have to pause (stop speaking) then say <span className='text-white font-semibold underline ml-4'>Submit</span>
            </h2>
            <h2 className='mb-2'>
              - You can start speeking now.
            </h2>
          </div>
          )}         
        </div>
        <form className='w-full lg:h-[320px] mt-10' onSubmit={handleSubmit}>
          <div className="w-full h-full lg:mb-4 border border-gray-200 rounded-lg bg-gray-900 ">
              <div className="px-4 py-2 rounded-t-lg bg-gray-950">
                  <label htmlFor="comment" className="sr-only">Your comment</label>
                  <textarea 
                    id="comment"
                    rows={6}
                    readOnly={notHandsfree? false : true}
                    onChange={handleChange}
                    value={transcripts}
                    className="flex-grow resize-none w-full p-1 rounded pl-1 px-0 text-base lg:text-2xl bg-inherit border-0 focus:ring-0 text-white placeholder-gray-400" 
                    placeholder="You can speek now" required />
              </div>
              {notHandsfree && (
                <div className="px-3 py-2 border-t border-gray-600">
                    <BaseButton type='submit' name='Submit' />
                </div>
              )}
          </div>
        </form>
      </div>
  )
}

export default function CreatePost() {
  return (
    <Suspense>
      <Page />
    </Suspense>
  )
}