import { FC } from 'react'

interface BaseButtonProps {
  name: string
  onClick?: () => void
}
const BaseButton: FC<BaseButtonProps> = (props) => {
  const { name, onClick } = props
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-800 rounded-lg  px-6 py-3.5 text-base font-medium text-center me-2 mb-2"
    >
      {name}
    </button>
  )
}

export default BaseButton
