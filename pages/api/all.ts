import { googleCreds } from "./../../configs/googleConfig"
import { accountsData } from "data/accounts"
import type { NextApiRequest, NextApiResponse } from "next"
import { twitter } from "configs/twitterConfig"
import { TwitterResponse, TwitterUser } from "types"
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

const fetchGoogleData = async (): Promise<number[]> => {
  try {
    await googleSheet.useServiceAccountAuth(googleCreds)
    await googleSheet.loadInfo()
    const sheet = googleSheet.sheetsByIndex[0]
    await sheet.loadCells("A2:E2")
    const impressions = [
      sheet.getCellByA1("A2").value,
      sheet.getCellByA1("B2").value,
      sheet.getCellByA1("C2").value,
      sheet.getCellByA1("D2").value,
      sheet.getCellByA1("E2").value
    ]
    return impressions
  } catch (e: any) {
    console.log("error in api google response: ", e.message)
    return [0, 0, 0, 0, 0]
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
  data.map((user, index) => (user.public_metrics.impressions = google[index]))
  if (data == null) {
    console.log("there was a twitter response but it is null")
    res.status(500).json({ message: "Error fetching data" })
  }
  res.status(200).json({ data })
}
