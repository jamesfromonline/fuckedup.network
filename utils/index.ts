export const abbreviateNumber = (num: number, numDecimalPlaces = 1) => {
  if (num >= 1000000000) {
    return (
      (num / 1000000000).toFixed(numDecimalPlaces).replace(/\.0$/, "") + "G"
    )
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(numDecimalPlaces).replace(/\.0$/, "") + "M"
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(numDecimalPlaces).replace(/\.0$/, "") + "K"
  }
  return num
}

export const formatNumber = (num: number) => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}
