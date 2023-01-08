import { TotalsTypes, TwitterUser } from "types"
import { abbreviateNumber } from "utils"
import dynamic from "next/dynamic"
const GridItem = dynamic(() => import("./GridItem"))

const Totals = ({ data }: { data: TwitterUser[] }) => {
  const totals = {
    accounts: 0,
    followers: 0,
    tweets: 0,
    impressions: 0
  } satisfies TotalsTypes

  console.log(data)

  data.forEach((user) => {
    const {
      public_metrics: { followers_count, tweet_count, impressions }
    } = user

    totals.accounts += 1
    totals.followers += followers_count
    totals.tweets += tweet_count as number
    totals.impressions += impressions as number
  })

  return (
    <ul className="w-full grid grid-cols-1 md:grid-cols-4 gap-2 mb-2 child:py-4">
      <GridItem title="accounts" amount={totals.accounts} />
      <GridItem title="total tweets" amount={abbreviateNumber(totals.tweets)} />
      <GridItem
        animate
        title="total followers"
        amount={totals.followers}
        className="text-rose-600"
      />
      <GridItem
        animate
        title="monthly impressions"
        className="text-rose-600"
        amount={totals.impressions}
      />
    </ul>
  )
}

export default Totals
