import { GetServerSideProps } from "next"
import { TotalsTypes, TwitterResponse, TwitterUser } from "types"
import { accountsData } from "data/accounts"
import { Totals } from "ui/Totals"
import { Card } from "ui/Card"

export default function Home({ data }: { data: TwitterUser[] }) {
  if (data == null || data.length < 1) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <p className="text-4xl text-white">{`something went wrong :(`}</p>
      </div>
    )
  }

  return (
    <div className="h-full w-full max-w-4xl lg:max-w-6xl flex flex-col items-center justify-center py-4 px-2 mx-auto">
      <Totals data={data} />

      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-2 w-full">
        {data.map((user: TwitterUser, index: number) => {
          if (index === data.length - 1) user.name = user.name.slice(0, 10)
          return (
            <Card
              key={user.username}
              user={user}
              links={accountsData[index].socials}
            />
          )
        })}
      </ul>
      <footer className="mx-auto">
        <p className="text-sm text-black pt-4">
          &copy; {new Date().getFullYear()} fucked up network
        </p>
      </footer>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/all")
    const { data } = (await response.json()) as TwitterResponse
    if (data == null) {
      return {
        props: {
          data: null
        }
      }
    }

    return {
      props: {
        data: data
      }
    }
  } catch (e) {
    return {
      props: {
        data: null
      }
    }
  }
}
