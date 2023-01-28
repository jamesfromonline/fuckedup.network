import { GoogleDataResponse, HistoryStats } from "./../../types/index"
import { googleCreds } from "./../../configs/googleConfig"
import { accountsData } from "data/accounts"
import type { NextApiRequest, NextApiResponse } from "next"
import { twitter } from "configs/twitterConfig"
import { TwitterResponse } from "types"
import { GoogleSpreadsheet } from "google-spreadsheet"
export const googleSheet = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID)

type Error = {
  message: string
}

const accounts = accountsData.map((account) => account.name)

const fetchTwitterData = async () => {
  try {
    const { data } = (await twitter.v2.usersByUsernames(accounts, {
      "user.fields": "public_metrics,id,name,profile_image_url,username"
    })) as TwitterResponse
    return data
  } catch (e: any) {
    console.log("error in twitter response: ", e.message)
    return []
  }
}

const fetchGoogleData = async (): Promise<GoogleDataResponse | null> => {
  try {
    await googleSheet.useServiceAccountAuth(googleCreds)
    await googleSheet.loadInfo()
    const impressionsSheet = googleSheet.sheetsByIndex[0]
    const followersSheet = googleSheet.sheetsByIndex[1]
    const impressionRows = await impressionsSheet.getRows()
    const followerRows = await followersSheet.getRows()

    const allHistory = {
      fuckedupfoods: {
        followers: [],
        impressions: []
      },
      fuckedupcars: {
        followers: [],
        impressions: []
      },
      fuckeduppcs: {
        followers: [],
        impressions: []
      },
      AAAAAWTFAAAAA: {
        followers: [],
        impressions: []
      },
      imindatinghell: {
        followers: [],
        impressions: []
      },

      totals: {
        followers: [],
        impressions: []
      }
    }

    for (const row of impressionRows) {
      const allCells = row._rawData
      const date = allCells[0] as string
      let index = 0
      for (const cell of allCells) {
        if (index !== 0 && index !== 6) {
          const accountName = accounts[index - 1]
          const impressionsHistoryItem = {
            date,
            impressions: cell as number
          }
          // @ts-ignore
          allHistory[accountName]?.impressions.push(impressionsHistoryItem)
        }
        index += 1
      }

      // @ts-ignore
      const total = allCells[allCells.length - 1]
      // @ts-ignore
      allHistory.totals.impressions.push({ date, impressions: total as number })
    }

    for (const row of followerRows) {
      const allCells = row._rawData
      const date = allCells[0] as string
      let index = 0
      for (const cell of allCells) {
        if (index !== 0 && index !== 6) {
          const accountName = accounts[index - 1]
          const followersHistoryItem = {
            date,
            followers: cell as number
          }
          // @ts-ignore
          allHistory[accountName]?.followers.push(followersHistoryItem)
        }
        index += 1
      }

      // @ts-ignore
      const total = allCells[allCells.length - 1]
      // @ts-ignore
      allHistory.totals.followers.push({ date, followers: total as number })
    }

    return {
      // @ts-ignore
      history: allHistory
    }
  } catch (e: any) {
    console.log("error in api google response: ", e.message)
    return null
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TwitterResponse | Error>
) {
  if (req.method !== "GET")
    res.status(400).json({ message: "Method not supported" })
  const data = await fetchTwitterData()
  const google = await fetchGoogleData()

  if (data == null) {
    console.log("there was a twitter response but it is null")
    res.status(500).json({ message: "Error fetching data" })
  }
  res.status(200).json({ data, history: google ? google.history : null })
}
