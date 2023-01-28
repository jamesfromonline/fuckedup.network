export interface ImpressionsHistoryItem {
  date: string
  impressions: number
}

export interface FollowerssHistoryItem {
  date: string
  followers: number
}

export interface AccountHistory {
  followers?: FollowerssHistoryItem[]
  impressions?: ImpressionsHistoryItem[]
}

export interface AccountTotals {
  impressions: number
  followers: number
}

export interface HistoryStats {
  fuckedupfoods: AccountHistory
  fuckedupcars: AccountHistory
  fuckeduppcs: AccountHistory
  AAAAAWTFAAAAA: AccountHistory
  imindatinghell: AccountHistory
  totals: AccountTotals
}

export interface GoogleDataResponse {
  history: HistoryStats
}

export interface TwitterUserMetrics {
  followers_count: number
  tweet_count: number
  impressions: number
}

export interface TwitterUser {
  profile_image_url: string
  username: string
  name: string
  public_metrics: TwitterUserMetrics
  history: HistoryStats
}

export interface TwitterResponse {
  data: TwitterUser[]
  history: HistoryStats | null
  message?: string
}

export interface TotalsTypes {
  accounts: number
  followers: number
  tweets: number
  impressions: number
}
