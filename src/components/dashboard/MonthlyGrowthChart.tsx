import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts'

export default function MonthlyGrowthChart({
  data,
}: any) {
  return (
    <div
      style={{
        width: '100%',
        height: 400,
      }}
    >
      <h2>Monthly Growth</h2>

      <ResponsiveContainer>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="sale_date" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="revenue"
            fill="#16a34a"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}