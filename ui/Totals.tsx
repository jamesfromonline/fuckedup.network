import { TotalsTypes, TwitterUser } from "types"
import { abbreviateNumber } from "utils"
import dynamic from "next/dynamic"
const GridItem = dynamic(() => import("./GridItem"))

const Totals = ({ data }: { data: TwitterUser[] }) => {
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
      <GridItem title="total tweets" amount={abbreviateNumber(totals.tweets)} />
      <GridItem
        title="total followers"
        amount={abbreviateNumber(totals.followers)}
      />
      <GridItem title="accounts" amount={totals.accounts} />
    </ul>
  )
}

export default Totals
