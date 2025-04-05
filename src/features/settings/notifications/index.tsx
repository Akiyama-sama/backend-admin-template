import ContentSection from '../components/content-section'
import { NotificationsForm } from './notifications-form'

export default function SettingsNotifications() {
  return (
    <ContentSection
      title='通知'
      desc='配置如何接收通知。'
    >
      <NotificationsForm />
    </ContentSection>
  )
}
