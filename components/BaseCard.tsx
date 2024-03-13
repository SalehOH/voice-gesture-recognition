import { FC } from 'react'

interface BaseCardProps {
  time: string
  content: string
}
const BaseCard: FC<BaseCardProps> = props => {
  const {time, content } = props
  return (
    <div className="flex flex-col bg-gray-700 max-w-[800px] p-6 rounded-md my-1">
      <div className="flex items-center text-3xl border-b border-gray-200/20">
          <span className="text-cyan-500">WaveTalker</span>
          <span className="ml-auto text-gray-300">{time}</span>
      </div>
      <p className="font-bold text-3xl mt-3">{ content }</p>
    </div>
  )
}

export default BaseCard
