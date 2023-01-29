import { NextApiRequest, NextApiResponse } from "next"
import { twitter } from "configs/twitterConfig"

interface Response {
  followers: number
  image: string
  name: string
}

const fetchTwitterData = async (username: string) => {
  try {
    const { data } = await twitter.v2.userByUsername(username, {
      "user.fields": "public_metrics,profile_image_url,name"
    })

    return {
      followers: data.public_metrics.followers_count,
      image: data.profile_image_url,
      name: data.name
    } as Response
  } catch (e: any) {
    return {
      followers: 0,
      image: "",
      name: ""
    }
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response | string>
) {
  // error code for wrong method
  if (req.method !== "GET") res.status(405).json("Method not supported")
  const { followers, image, name } = await fetchTwitterData(
    req.query.username as string
  )

  res.status(200).json({ followers, image, name })
}
