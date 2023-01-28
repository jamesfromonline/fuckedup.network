import { HistoryStats, TotalsTypes, TwitterUser } from "types"
import { abbreviateNumber } from "utils"
import dynamic from "next/dynamic"
const GridItem = dynamic(() => import("./GridItem"))

const Totals = ({
  data,
  history
}: {
  data: TwitterUser[]
  history: HistoryStats
}) => {
  const totals = {
    accounts: 0,
    followers: 0,
    tweets: 0,
    impressions:
      // @ts-ignore
      history.totals.impressions[history.totals.impressions.length - 1]
        .impressions
  } satisfies TotalsTypes

  data.forEach((user) => {
    const {
      public_metrics: { followers_count, tweet_count, impressions }
    } = user

    // @ts-ignore
    const userHistory = history[user.username]
    const latestImpressions =
      userHistory.impressions[userHistory.impressions.length - 1].impressions
    const latestFollowers =
      userHistory.followers[userHistory.followers.length - 1]
    // const latestFollowers = userHistory[userHistory.length - 1].followers

    totals.accounts += 1
    totals.followers += followers_count
    totals.tweets += tweet_count as number
    // totals.impressions += latestImpressions as number
  })

  return (
    <ul className="w-full h-full md:max-h-[87px] flex flex-col md:flex-row items-center justify-center gap-2 mb-2 child:py-4 child:flex-auto child:w-full md:child:max-w-[25%]">
      <GridItem title="accounts" amount={totals.accounts} />
      <GridItem title="total posts" amount={abbreviateNumber(totals.tweets)} />
      <GridItem
        animate
        title="total followers"
        amount={totals.followers}
        className="text-rose-600"
      />
      <GridItem
        animate
        title="28-day impressions"
        className="text-rose-600"
        amount={totals.impressions}
      />
    </ul>
  )
}

export default Totals
