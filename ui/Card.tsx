import { abbreviateNumber } from "utils"
import { TwitterUser } from "types"
import dynamic from "next/dynamic"
import Image from "next/image"
const GridItem = dynamic(() => import("./GridItem"))

const Card = ({
  user,
  links,
  isContactCard = false
}: {
  user: TwitterUser
  links: string[]
  isContactCard?: boolean
}) => {
  let { profile_image_url, username, name, public_metrics } = user
  const { followers_count, tweet_count, impressions } = public_metrics

  if (name.includes("AAAAAAAAAAAAAAAAAAAAAAAAAAA")) name = "AAAAAAAAAAA"

  return (
    <div className="flex flex-col items-center justify-start p-6 bg-black shadow-md">
      <div className="w-full grid grid-cols-1 gap-2">
        <div className="w-full flex flex-col items-center justify-center bg-zinc-900 py-4">
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
        </div>

        <ul
          className={`w-full h-full flex-auto grid grid-cols-1 sm:grid-cols-3 gap-2 items-center child:py-4 ${
            isContactCard ? "hidden" : ""
          }`}
        >
          <GridItem
            title="followers"
            amount={abbreviateNumber(followers_count)}
          />
          <GridItem title="tweets" amount={abbreviateNumber(tweet_count)} />
          <GridItem
            title="impressions"
            amount={abbreviateNumber(impressions)}
          />
        </ul>

        <a
          className={`w-full h-full flex-auto grid grid-cols-1 items-center py-4 bg-rose-600 hover:bg-rose-700 text-center text-white ${
            !isContactCard ? "hidden" : ""
          }`}
          href="https://twitter.com/kloogans"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-sm leading-none mb-1">contact</span>
          <span className="text-xl lg:text-3xl font-bold">dm on twitter</span>
        </a>

        <ul className="w-full flex items-center justify-center gap-2 pt-2">
          {links.map((link: string) => {
            const url = new URL(link)
            const domain = url.hostname.split(".")[0]
            const service = domain.split(".")[0]

            return (
              <a
                key={link}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-sm font-bold py-2 px-4 rounded-md"
              >
                <div className="w-7 h-7 icon bg-zinc-600 hover:bg-rose-700" />
                <style jsx>{`
                  .icon {
                    mask: url(/icons/${service}.svg) no-repeat center center;
                    mask-size: contain;
                  }
                `}</style>
              </a>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Card
