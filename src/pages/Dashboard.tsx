import { lazy, Suspense } from 'react'

const RevenueLineChart = lazy(
  () =>
    import(
      '../components/dashboard/RevenueLineChart'
    )
)

import MonthlyGrowthChart from '../components/dashboard/MonthlyGrowthChart'

import ProfitTrendChart from '../components/dashboard/ProfitTrendChart'

import InventoryAnalytics from '../components/dashboard/InventoryAnalytics'

import DistributorPerformance from '../components/dashboard/DistributorPerformance'
import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import { generateInsight } from '../services/ai'
import { calculateKPIs } from '../utils/kpi'

export default function Dashboard() {
  const [sales, setSales] = useState<any[]>([])
  const [insight, setInsight] = useState('')

  const [kpis, setKpis] = useState<any>({
    totalRevenue: 0,
    averageOrderValue: 0,
    bestDay: '',
    bestRevenue: 0,
    growthPercentage: 0,
    trend: '',
  })

  useEffect(() => {
    fetchSales()
  }, [])

  const fetchSales = async () => {
    const { data, error } = await supabase
      .from('sales')
      .select('*')

    if (error) {
      console.error(error)
      return
    }

    if (data) {
      setSales(data)

      const calculatedKPIs =
        calculateKPIs(data)

      setKpis(calculatedKPIs)

      const aiInsight =
        await generateInsight(
          calculatedKPIs
        )

      setInsight(aiInsight)
    }
  }

  return (
    <div
      style={{
        padding: 40,
        fontFamily: 'Arial',
      }}
    >
      <h1>
        Shreem Analytics Dashboard
      </h1>

      <hr />

      {/* KPI CARDS */}

      <div
        style={{
          display: 'grid',
          gridTemplateColumns:
            'repeat(2, 1fr)',
          gap: 20,
          marginTop: 20,
        }}
      >
        <div
          style={{
            border: '1px solid #ccc',
            padding: 20,
            borderRadius: 10,
          }}
        >
          <h3>Total Revenue</h3>

          <h2>
            ₹{kpis.totalRevenue}
          </h2>
        </div>

        <div
          style={{
            border: '1px solid #ccc',
            padding: 20,
            borderRadius: 10,
          }}
        >
          <h3>
            Average Order Value
          </h3>

          <h2>
            ₹
            {Number(
              kpis.averageOrderValue
            ).toFixed(2)}
          </h2>
        </div>

        <div
          style={{
            border: '1px solid #ccc',
            padding: 20,
            borderRadius: 10,
          }}
        >
          <h3>Best Day</h3>

          <h2>{kpis.bestDay}</h2>

          <p>
            Revenue:
            ₹{kpis.bestRevenue}
          </p>
        </div>

        <div
          style={{
            border: '1px solid #ccc',
            padding: 20,
            borderRadius: 10,
          }}
        >
          <h3>Growth %</h3>

          <h2>
            {kpis.growthPercentage}%
          </h2>

          <p>{kpis.trend}</p>
        </div>
      </div>
<hr
  style={{
    marginTop: 40,
    marginBottom: 40,
  }}
/>

<Suspense fallback={<p>Loading chart...</p>}>
  <RevenueLineChart data={sales} />
</Suspense>
      <hr
        style={{
          marginTop: 40,
          marginBottom: 40,
        }}
      />

      {/* AI INSIGHTS */}

      <div
        style={{
          border: '1px solid #ccc',
          padding: 20,
          borderRadius: 10,
        }}
      >
        <h2>AI Business Insights</h2>

        <p
          style={{
            whiteSpace: 'pre-wrap',
          }}
        >
          {insight}
        </p>
      </div>

      <hr
        style={{
          marginTop: 40,
          marginBottom: 40,
        }}
      />

      {/* SALES DATA */}

      <h2>Sales Data</h2>

      {sales.map((sale) => (
        <div
          key={sale.id}
          style={{
            borderBottom:
              '1px solid #eee',
            padding: 10,
          }}
        >
          <p>
            {sale.sale_date} :
            ₹{sale.revenue}
          </p>
        </div>
      ))}
    </div>
  )
}