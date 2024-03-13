import { FC } from 'react'

interface BaseButtonProps {
  type?: 'button' | 'submit' | 'reset'
  name?: string
  onClick?: () => void
}
const BaseButton: FC<BaseButtonProps> = (props) => {
  const { name, onClick, type } = props
  return (
    <button
      type={type || 'button'}
      onClick={onClick}
      className="flex-1 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-800 rounded-lg px-6 py-3.5 lg:py-6 text-base lg:text-2xl font-semibold text-center me-2 mb-2"
    >
      {name}
    </button>
  )
}

export default BaseButton
