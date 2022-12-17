import { TotalsTypes, TwitterUser } from "types"
import { abbreviateNumber } from "utils"

const Total = ({ type, amount }: { type: string; amount: string | number }) => (
  <li className="text-xl lg:text-3xl text-white flex flex-col items-center justify-center h-full bg-zinc-900">
    <span className="text-sm leading-none mb-1">total {type}</span>
    <strong>{amount}</strong>
  </li>
)

export const Totals = ({ data }: { data: TwitterUser[] }) => {
  const totals = {
    accounts: 0,
    followers: 0,
    tweets: 0
  } satisfies TotalsTypes

  data.forEach((user) => {
    const {
      public_metrics: { followers_count, tweet_count }
    } = user

    totals.accounts += 1
    totals.followers += followers_count
    totals.tweets += tweet_count as number
  })

  return (
    <ul className="w-full grid grid-cols-1 md:grid-cols-3 gap-2 mb-2 child:py-4">
      <Total type="followers" amount={abbreviateNumber(totals.followers)} />
      <Total type="tweets" amount={abbreviateNumber(totals.tweets)} />
      <Total type="accounts" amount={totals.accounts} />
    </ul>
  )
}
