import { FC } from 'react'

interface BaseCardProps {
  username: string
  pic?: string
  time: string
  content: string
}
const BaseCard: FC<BaseCardProps> = props => {
  const { username, pic, time, content } = props
  return (
    <div className="flex flex-col bg-gray-700 max-w-[800px] p-6 rounded-md my-1">
      <div className="flex items-center text-3xl border-b border-gray-200/20">
        <div className="flex items-center">
          {pic && (<img src={pic} alt="profile" className="w-10 h-10 rounded-full" />)}
          <h3 className={'text-white font-semibold ' + (pic ? 'ml-2' : '')}>{ username }</h3>
        </div>
        <div className="ml-auto">
          <span className="text-gray-300">{time}</span>
        </div>
      </div>
      <p className="font-bold text-3xl mt-3">{ content }</p>
    </div>
  )
}

export default BaseCard
