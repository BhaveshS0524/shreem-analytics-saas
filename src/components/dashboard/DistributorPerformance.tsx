import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from 'recharts'

const distributorData = [
  {
    distributor: 'Ahmedabad',
    performance: 90,
  },
  {
    distributor: 'Surat',
    performance: 75,
  },
  {
    distributor: 'Rajkot',
    performance: 60,
  },
  {
    distributor: 'Vadodara',
    performance: 80,
  },
]

export default function DistributorPerformance() {
  return (
    <div
      style={{
        width: '100%',
        height: 400,
      }}
    >
      <h2>Distributor Performance</h2>

      <ResponsiveContainer
        width="100%"
        height="100%"
      >
        <RadarChart data={distributorData}>
          <PolarGrid />

          <PolarAngleAxis dataKey="distributor" />

          <PolarRadiusAxis />

          <Radar
            name="Performance"
            dataKey="performance"
            stroke="#2563eb"
            fill="#60a5fa"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}