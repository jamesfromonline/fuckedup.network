import React from "react"

const GridItem = ({
  title,
  amount
}: {
  title: string
  amount: string | number
}) => (
  <li className="text-xl lg:text-3xl text-white flex flex-col items-center justify-center h-full bg-zinc-900">
    <span className="text-sm leading-none mb-1">{title}</span>
    <strong>{amount}</strong>
  </li>
)

export default GridItem
