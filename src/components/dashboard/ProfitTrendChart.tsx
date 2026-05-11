import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts'

export default function ProfitTrendChart({
  data,
}: any) {
  // MOCK PROFIT
  const profitData = data.map(
    (item: any) => ({
      ...item,
      profit:
        Number(item.revenue) * 0.3,
    })
  )

  return (
    <div
      style={{
        width: '100%',
        height: 400,
      }}
    >
      <h2>Profit Trend</h2>

      <ResponsiveContainer>
        <AreaChart data={profitData}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="sale_date" />

          <YAxis />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="profit"
            stroke="#9333ea"
            fill="#c084fc"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}