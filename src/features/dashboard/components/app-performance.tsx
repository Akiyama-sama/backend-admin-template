import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { name: "Jan", server: 400, client: 240 },
  { name: "Feb", server: 300, client: 139 },
  { name: "Mar", server: 200, client: 980 },
  { name: "Apr", server: 278, client: 390 },
  { name: "May", server: 189, client: 480 },
  { name: "Jun", server: 239, client: 380 },
]

export function AppPerformance() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>服务器响应时间</CardTitle>
          <CardDescription>平均: 250ms</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data}>
              <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}ms`}
              />
              <Tooltip />
              <Line type="monotone" dataKey="server" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>客户端性能</CardTitle>
          <CardDescription>平均加载时间: 1.2s</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data}>
              <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}ms`}
              />
              <Tooltip />
              <Line type="monotone" dataKey="client" stroke="#82ca9d" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>错误率</CardTitle>
          <CardDescription>过去30天</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold">0.12%</div>
          <p className="text-xs text-muted-foreground">比上个月下降0.05%</p>
        </CardContent>
      </Card>
    </div>
  )
}

