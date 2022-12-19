import { accountsData } from "data/accounts"
import type { NextApiRequest, NextApiResponse } from "next"
import { twitter } from "configs/twitterConfig"
import { TwitterResponse, TwitterUser } from "types"

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
    return e.message as TwitterResponse
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TwitterResponse | Error>
) {
  if (req.method !== "GET")
    res.status(400).json({ message: "Method not supported" })
  const response = await fetchTwitterData()
  if (response == null) res.status(500).json({ message: "Error fetching data" })
  res.status(200).json({ data: response as TwitterUser[] })
}
