import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const feedbacks = [
  {
    id: 1,
    user: "Alice Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    comment: "爱新的仪表板功能！它如此直观且有用。",
  },
  {
    id: 2,
    user: "Bob Smith",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4,
    comment: "总体来说，这个应用程序很好，但可以改进加载速度。",
  },
  {
    id: 3,
    user: "Carol Williams",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    comment: "客户支持非常出色。他们迅速解决了我的问题。",
  },
]

export function UserFeedback() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>用户满意度</CardTitle>
          <CardDescription>总体评分: 4.5/5</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold">90%</div>
          <p className="text-sm text-muted-foreground">会推荐我们的应用程序</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>最近反馈</CardTitle>
          <CardDescription>最新用户评论</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {feedbacks.map((feedback) => (
              <div key={feedback.id} className="flex items-start space-x-4">
                <Avatar>
                  <AvatarImage src={feedback.avatar} alt={feedback.user} />
                  <AvatarFallback>
                    {feedback.user
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="font-semibold">{feedback.user}</h4>
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className={`h-4 w-4 ${i < feedback.rating ? "text-yellow-400" : "text-gray-300"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">{feedback.comment}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

