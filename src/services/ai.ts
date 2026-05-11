import { GoogleGenAI } from '@google/genai'

const ai = new GoogleGenAI({
  apiKey:
    import.meta.env.VITE_GOOGLE_API_KEY,
})

export async function generateInsight(
  metrics: any
) {
  const prompt = `
You are an expert SME business consultant.

Analyze these business KPIs:

Total Revenue:
₹${metrics.totalRevenue}

Average Order Value:
₹${metrics.averageOrderValue}

Best Sales Day:
${metrics.bestDay}

Best Revenue:
₹${metrics.bestRevenue}

Growth Percentage:
${metrics.growthPercentage}%

Sales Trend:
${metrics.trend}

Give:
1. Business performance summary
2. Key opportunities
3. Risks
4. Recommendations

Use simple language for Indian SME owners.
`

  const response =
    await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    })

  return response.text || 'No insights.'
}