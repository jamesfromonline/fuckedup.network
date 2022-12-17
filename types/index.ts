export interface TwitterUserMetrics {
  followers_count: number
  tweet_count: number
}

export interface TwitterUser {
  profile_image_url: string
  username: string
  name: string
  public_metrics: TwitterUserMetrics
}

export interface TwitterResponse {
  data: TwitterUser[]
}

export interface TotalsTypes {
  accounts: number
  followers: number
  tweets: number
}
