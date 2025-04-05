import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Insights() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>最活跃的功能</CardTitle>
          <CardDescription>基于用户交互</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-semibold">Dashboard Analytics</p>
          <p className="text-sm text-muted-foreground">78%的用户每天使用</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>用户参与度</CardTitle>
          <CardDescription>平均使用时间</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-semibold">45分钟</p>
          <p className="text-sm text-muted-foreground">比上周增加5分钟</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>转化率</CardTitle>
          <CardDescription>免费用户到付费用户</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-semibold">12.5%</p>
          <p className="text-sm text-muted-foreground">比上个月增加2.3%</p>
        </CardContent>
      </Card>
      <Card className="col-span-full">
        <CardHeader>
          <CardTitle>关键洞察</CardTitle>
          <CardDescription>重要指标和观察</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li>用户留存率在最新功能发布后提高了7%。</li>
            <li>移动使用率首次超过桌面使用率。</li>
            <li>新的入职流程将流失率降低了25%。</li>
            <li>与聊天支持功能互动的用户升级到付费计划的可能性是其他用户的3倍。</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

