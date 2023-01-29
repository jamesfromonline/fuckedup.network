import useSWR from "swr"
import { GetServerSideProps } from "next"
import FlipNumbers from "react-flip-numbers"
import AccountHeader from "ui/AccountHeader"
import { accountsData } from "data/accounts"
import { FullScreen, useFullScreenHandle } from "react-full-screen"
import Link from "next/link"
import Loader from "ui/Loader"

const fetcher = (...args: any) => fetch(args).then((res) => res.json())

const getCounterClassName = (followers: number) => {
  // let className =
  let childNumber = null
  if (followers < 1000) return (childNumber = null)
  if (followers < 10000) return (childNumber = 1)
  if (followers < 100000) return (childNumber = 2)
  if (followers < 1000000) return (childNumber = 3)
  if (followers < 10000000) return (childNumber = 4)
  if (followers < 100000000) return (childNumber = 5)
  return childNumber
}

const AccountFollowersCounter = ({ username }: { username: string }) => {
  const { data, isLoading } = useSWR(`/api/followers/${username}`, fetcher, {
    refreshInterval: 30000,
    revalidateOnFocus: false
  })
  const handleFullScreen = useFullScreenHandle()

  const { followers, image, name } = data || { followers: 0, image: "" }
  const bigImage = image.length > 0 ? image.split("_normal")[0] + ".jpg" : image
  const childrenNumber = getCounterClassName(followers)

  const windowWidth = (typeof window !== "undefined" && window.innerWidth) || 0

  const isMobile = windowWidth < 768

  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center">
      <div className="absolute top-0 left-0 w-full flex items-center justfy-between p-4">
        <Link
          href="/"
          className="text-zinc-400 hover:text-rose-600 text-md font-bold"
        >
          go home
        </Link>
        <button
          className="text-white text-lg font-bold absolute top-4 right-4"
          onClick={handleFullScreen.enter}
        >
          {/* svg icon of 4 arrows pointing out, like a fullscreen icon */}
          <div className="w-7 h-7 icon bg-zinc-400 hover:bg-rose-700" />
          <style jsx>{`
            .icon {
              mask: url(/icons/fullscreen.svg) no-repeat center center;
              mask-size: contain;
            }
          `}</style>
        </button>
      </div>
      <FullScreen
        handle={handleFullScreen}
        className="h-full flex flex-col items-center justify-center"
      >
        <AccountHeader
          image={bigImage}
          username={username}
          name={name}
          className={`!bg-transparent ${isLoading ? "hidden" : ""}`}
        />

        {isLoading && <Loader />}

        <div className={`number-flipper ${isLoading ? "hidden" : ""}`}>
          <FlipNumbers
            height={isMobile ? 44 : 44}
            width={isMobile ? 30 : 44}
            color="white"
            background="transparent"
            play
            perspective={200}
            numbers={String(followers)}
          />
          <style jsx global>{`
            .number-flipper section span:nth-child(${childrenNumber}) {
              margin-right: 0.45rem;
            }
          `}</style>
        </div>
      </FullScreen>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const accounts = accountsData.map((account) => account.name)
  const { account } = context.query

  if (!accounts.includes(account as string)) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      username: account
    }
  }
}

export default AccountFollowersCounter
