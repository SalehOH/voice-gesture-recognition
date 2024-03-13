'use client'
import BaseButton from "@/components/BaseButton";
import { useSpeech } from "@/hooks/useSpeech";
import { homeCommand } from "@/utils/commands";
import { useRouter, useSearchParams } from "next/navigation";
import HelpModal from "@/components/HelpModal";
import { Suspense, useState } from "react";

 function Page() {
  const router = useRouter()
  const [showHelp, setShowHelp] = useState(false)
  const searchParams = useSearchParams()
  const handsfree = searchParams.get('handsfree')
  const notHandsfree = handsfree && handsfree === 'false' ? true : false
  
  const { transcript } = useSpeech(homeCommand(router, setShowHelp), notHandsfree)

  if (showHelp) {
    return <HelpModal />
  }
  return (
    <>
      <div className="flex-col justify-between items-center mx-auto mt-10">
        <header className="w-full bg-gray mb-8">
          <h1 className="mb-4 text-center font-bold text-6xl text-transparent bg-clip-text bg-gradient-to-r to-cyan-300 from-gray-400">
            WaveTalk
          </h1>
          <h3 className="text-center text-base md:text-lg mb-4 font-semibold">
            Create posts using only your voice!.<br/>
          </h3>
          <h3 className="text-center text-base md:text-lg mb-4 font-semibold">
             You can scroll through the posts handsfree!.
          </h3>
          <h4 className="text-center text-base md:text-lg mt-10 font-semibold">
            To start, say <span className="text-cyan-500"> Help </span>
          </h4>
        </header>
        {notHandsfree &&(
          <div className="flex flex-col w-[400px] lg:w-[700px]">
            <BaseButton onClick={()=> router.push("/posts?handsfree=false")} name="Read Posts!" />
            <BaseButton onClick={()=> router.push("/posts/create?handsfree=false")} name="Create a Post!" />
          </div>
        )}
      </div>
      <p>{transcript}</p>
    </>
  )
}

export default function Home() {
  return (
    <Suspense>
      <Page />
    </Suspense>
  )
}
