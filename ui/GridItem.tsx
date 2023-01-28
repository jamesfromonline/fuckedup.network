import CountUp from "react-countup"
import { abbreviateNumber } from "utils"

const GridItem = ({
  title,
  amount,
  animate = false,
  className = "",
  active = false,
  onClick
}: {
  title: string
  amount: string | number
  animate?: boolean
  className?: string
  active?: boolean
  onClick?: () => void
}) => (
  <li
    role="button"
    onClick={onClick}
    className={`text-3xl select-none text-white flex flex-col items-center justify-center h-full ${
      active ? "bg-rose-600" : "bg-zinc-900"
    }  ${className}`}
  >
    <span className="text-sm leading-none mb-1 text-white">{title}</span>
    {animate ? (
      <span style={{ fontWeight: 900 }}>
        <CountUp
          end={amount as number}
          duration={3}
          formattingFn={(value) => abbreviateNumber(value, 2) as string}
        />
      </span>
    ) : (
      <span style={{ fontWeight: 900 }}>{amount}</span>
    )}
  </li>
)

export default GridItem
