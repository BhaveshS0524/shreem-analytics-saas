import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const inventoryData = [
  {
    name: 'In Stock',
    value: 400,
  },
  {
    name: 'Low Stock',
    value: 120,
  },
  {
    name: 'Out of Stock',
    value: 40,
  },
]

const COLORS = [
  '#2563eb',
  '#f59e0b',
  '#dc2626',
]

export default function InventoryAnalytics() {
  return (
    <div
      style={{
        width: '100%',
        height: 400,
      }}
    >
      <h2>Inventory Analytics</h2>

      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={inventoryData}
            dataKey="value"
            outerRadius={120}
            label
          >
            {inventoryData.map(
              (entry, index) => (
                <Cell
                  key={index}
                  fill={
                    COLORS[index % COLORS.length]
                  }
                />
              )
            )}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}