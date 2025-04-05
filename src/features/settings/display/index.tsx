import ContentSection from '../components/content-section'
import { DisplayForm } from './display-form'

export default function SettingsDisplay() {
  return (
    <ContentSection
      title='显示'
      desc="打开或关闭以控制应用程序中显示的内容。"
    >
      <DisplayForm />
    </ContentSection>
  )
}
