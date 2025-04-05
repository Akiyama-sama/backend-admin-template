import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UserStats } from "@/features/dashboard/components/user-stats"
import { AppPerformance } from "@/features/dashboard/components/app-performance"
import { Insights } from "@/features/dashboard/components/insights"
import { UserFeedback } from "@/features/dashboard/components/user-feedback"

export default function Dashboard() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">数据分析仪表盘</h1>
      <Tabs defaultValue="user-stats" className="space-y-4">
        <TabsList>
          <TabsTrigger value="user-stats">用户统计</TabsTrigger>
          <TabsTrigger value="app-performance">应用性能</TabsTrigger>
          <TabsTrigger value="insights">洞察</TabsTrigger>
          <TabsTrigger value="user-feedback">用户反馈</TabsTrigger>
        </TabsList>
        <TabsContent value="user-stats">
          <UserStats />
        </TabsContent>
        <TabsContent value="app-performance">
          <AppPerformance />
        </TabsContent>
        <TabsContent value="insights">
          <Insights />
        </TabsContent>
        <TabsContent value="user-feedback">
          <UserFeedback />
        </TabsContent>
      </Tabs>
    </div>
  )
}

