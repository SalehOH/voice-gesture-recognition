import Image from "next/image"

const HelpModal = () => {
  return (
    <>
    <div className="flex mx-auto mb-56 overflow-y-auto overflow-x-hidden absolute justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div className="relative p-4 w-full max-w-2xl max-h-full">
            <div className="relative rounded-lg shadow bg-gray-700">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        How to use WaveTalk, say <span className="text-cyan-500"> Close </span> to exit
                    </h3>  
                </div>
                <div className="p-2 md:p-5 space-y-4">
                    <div className="text-base leading-relaxed text-gray-300">
                        <h2 className="text-lg mb-1 text-gray-200">
                            WaveTalk is a voice controlled social media platform. You can create posts and navigate through the app using only your voice. <br/>
                            <span className="underline">Four main commands are available: </span>
                        </h2>
                        <span className="text-cyan-500 font-bold"> - Create a post </span> Takes you to Create Post Page <br/> 
                        <span className="text-cyan-500 font-bold"> - Read posts </span> Takes you to Read Post Page <br/>
                        <span className="text-cyan-500 font-bold"> - Home </span> Takes you to Home Page <br/>
                        <span className="text-cyan-500 font-bold"> - Back </span> Takes you back to previous page <br/>
                    </div>
                    <h3 className="underline font-semibold text-white"> Note that it takes time for it to be activated</h3>
                    <hr/>
                    <div className="text-base leading-relaxed  text-gray-300">
                        <h2 className="text-lg mb-2 text-gray-200">
                            The read post page is controlled by hand gestures. <span className="text-white underline">Your palm must be facing the camera for the gestures to work.</span> <br/>
                        </h2>
                        <div className="flex justify-evenly">
                            <div className="flex flex-col items-center">
                            <span className="text-cyan-500 font-bold"> scroll up </span>
                            <Image src={"/up.jpg"} width={200} height={50} alt="hand image of showing how to scroll up"/>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-cyan-500 font-bold"> scroll down </span>
                            <Image src={"/down.jpg"} width={200} height={50} alt="hand image of showing how to scroll down"/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default HelpModal