import { HistoryStats, TwitterUser } from "types"
import dynamic from "next/dynamic"
import Image from "next/image"
import { useState } from "react"
import AccountHeader from "./AccountHeader"
const CardDetails = dynamic(() => import("./CardDetails"))
const LineChart = dynamic(() => import("./LineChart"))
const Description = dynamic(() => import("./Description"))
const CardLinks = dynamic(() => import("./CardLinks"))

const Card = ({
  user,
  links,
  history,
  isContactCard = false
}: {
  user: TwitterUser
  links: string[]
  history: HistoryStats
  isContactCard?: boolean
}) => {
  let { profile_image_url, username, name, public_metrics } = user
  const { followers_count, tweet_count, impressions } = public_metrics

  const [chartType, setChartType] = useState<"impressions" | "followers">(
    "impressions"
  )

  // @ts-ignore
  const userHistory = history[username]
  const latestImpressions = userHistory
    ? userHistory.impressions[userHistory.impressions.length - 1].impressions
    : 0

  const chartData = userHistory
    ? [
        ...userHistory[chartType].map((item: any) => {
          return { date: item.date, value: Number(item[chartType]) }
        })
      ].slice(-7)
    : []

  if (name.includes("AAAAAAAAAAAAAAAAAAAAAAAAAAA")) name = "AAAAAAAAAAA"

  return (
    <div
      className={`flex flex-col items-center justify-start p-6 bg-black shadow-md ${
        isContactCard
          ? "cols-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2"
          : ""
      }`}
    >
      <Description show={isContactCard} />
      <div className="w-full grid grid-cols-1 gap-2">
        <AccountHeader
          image={profile_image_url.split("_normal")[0] + ".jpg"}
          username={username}
          name={name}
        />
        {/* <div className="w-full max-w-xl mx-auto flex flex-col items-center justify-center bg-zinc-900 py-4 relative">
          <Image
            className="rounded-full mb-2"
            src={profile_image_url.split("_normal")[0] + ".jpg"}
            width={100}
            height={100}
            alt="alt image"
          />
          <div className="flex flex-col items-center justify-center">
            <p className="text-xl font-bold leading-none mb-1 text-center">
              {name}
            </p>
            <p className="text-md text-zinc-400 leading-none mb-3 text-center">
              @{username}
            </p>
          </div>
        </div> */}

        {userHistory && userHistory.impressions && (
          <LineChart data={chartData} dataType={chartType} />
        )}

        <CardDetails
          show={isContactCard}
          props={{
            chartType,
            setChartType,
            tweet_count,
            followers_count,
            latestImpressions
          }}
        />

        <CardLinks links={links} />
      </div>
    </div>
  )
}

export default Card
