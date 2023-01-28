const LineChart = ({ data, dataType }: { data: any; dataType: string }) => {
  const chartWidth = 500,
    chartHeight = 100,
    offsetY = 40,
    paddingX = 20,
    paddingY = dataType === "impressions" ? 0 : -150,
    maxY = Math.max(
      ...data.map((item: any) => {
        if (!item.value) return 0
        return item.value
      })
    )

  const properties = data.map((property: any, index: any) => {
    const { value, date } = property
    const x = (index / data.length) * (chartWidth - paddingX) + paddingX / 2
    const y =
      chartHeight -
      offsetY -
      (value / maxY) * (chartHeight - (paddingY + offsetY)) -
      paddingY +
      offsetY

    return {
      value: value,
      date: date,
      x: x,
      y: y
    }
  })

  const points = properties.map((point: any) => {
    const { x, y } = point
    return `${x},${y}`
  })

  return (
    <div className="w-full h-[100px] mt-2 overflow-hidden">
      <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} role="presentation">
        <g className="translate-x-[10%]">
          <polyline
            fill="none"
            className="stroke-rose-600 w-full"
            strokeWidth={4}
            points={points}
          />

          {properties.map((property: any, index: any) => {
            const { value, date, x, y } = property

            return (
              <g key={index}>
                <circle
                  className="fill-rose-600"
                  cx={x}
                  cy={y}
                  r={4}
                  strokeWidth={2}
                />
              </g>
            )
          })}
        </g>
      </svg>
    </div>
  )
}

export default LineChart
