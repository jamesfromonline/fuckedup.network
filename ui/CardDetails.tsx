import dynamic from "next/dynamic"
import { abbreviateNumber } from "utils"
const GridItem = dynamic(() => import("./GridItem"))

interface CardDetailsProps {
  chartType: string
  setChartType: (chartType: "impressions" | "followers") => void
  tweet_count: number
  followers_count: number
  latestImpressions: number
}

const CardDetails = ({
  show,
  props
}: {
  show: boolean
  props: CardDetailsProps
}) => {
  const {
    chartType,
    setChartType,
    tweet_count,
    followers_count,
    latestImpressions
  } = props
  return (
    <>
      <ul
        className={`w-full h-full flex-auto grid grid-cols-1 sm:grid-cols-3 gap-2 items-center child:py-4 ${
          show ? "hidden" : ""
        }`}
      >
        <GridItem title="posts" amount={abbreviateNumber(tweet_count)} />
        <GridItem
          title="followers"
          amount={abbreviateNumber(followers_count)}
          active={chartType === "followers"}
          onClick={() => setChartType("followers")}
        />
        <GridItem
          title="impressions"
          amount={abbreviateNumber(latestImpressions)}
          active={chartType === "impressions"}
          onClick={() => setChartType("impressions")}
        />
      </ul>

      <a
        className={`mx-auto w-full max-w-xl h-full flex-auto grid grid-cols-1 items-center py-4 bg-rose-600 hover:bg-rose-700 text-center text-white ${
          !show ? "hidden" : ""
        }`}
        href="https://twitter.com/kloogans"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="text-xl font-bold">get in touch</span>
      </a>
    </>
  )
}

export default CardDetails
