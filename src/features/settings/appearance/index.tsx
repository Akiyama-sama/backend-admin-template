import ContentSection from '../components/content-section'
import { AppearanceForm } from './appearance-form'

export default function SettingsAppearance() {
  return (
    <ContentSection
      title='外观'
      desc='自定义应用程序的外观。自动在白天和夜间主题之间切换。'
    >
      <AppearanceForm />
    </ContentSection>
  )
}
