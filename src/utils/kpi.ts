export function calculateKPIs(sales: any[]) {
  if (!sales || sales.length === 0) {
    return {
      totalRevenue: 0,
      averageOrderValue: 0,
      bestDay: 'N/A',
      bestRevenue: 0,
      growthPercentage: 0,
      trend: 'No Data',
    }
  }

  // TOTAL REVENUE
  const totalRevenue = sales.reduce(
    (sum, sale) => sum + Number(sale.revenue),
    0
  )

  // AVERAGE ORDER VALUE
  const averageOrderValue =
    totalRevenue / sales.length

  // BEST DAY
  let bestSale = sales[0]

  sales.forEach((sale) => {
    if (
      Number(sale.revenue) >
      Number(bestSale.revenue)
    ) {
      bestSale = sale
    }
  })

  // GROWTH %
  const firstRevenue = Number(
    sales[0].revenue
  )

  const lastRevenue = Number(
    sales[sales.length - 1].revenue
  )

  let growthPercentage = 0

  if (firstRevenue !== 0) {
    growthPercentage =
      ((lastRevenue - firstRevenue) /
        firstRevenue) *
      100
  }

  // SALES TREND
  const trend =
    growthPercentage >= 0
      ? 'Growing'
      : 'Declining'

  return {
    totalRevenue,
    averageOrderValue,
    bestDay: bestSale.sale_date,
    bestRevenue: bestSale.revenue,
    growthPercentage:
      growthPercentage.toFixed(2),
    trend,
  }
}