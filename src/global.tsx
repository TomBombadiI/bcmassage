import '@/styles'
import type { GlobalProps } from 'minista'
import { Head } from 'minista'
import Header from '@/layouts/Header'
import Content from '@/layouts/Content'
import Footer from '@/layouts/Footer'
import appleTouchIcon from '@/assets/favicons/apple-touch-icon.png'
import favicon32 from '@/assets/favicons/favicon-32x32.png'
import favicon16 from '@/assets/favicons/favicon-16x16.png'
import manifest from '@/assets/favicons/site.webmanifest'
import Root from './layouts/Root'
import Popup from './components/Popup'
import FeedbackForm from './sections/FeedbackForm'

export default (props: GlobalProps) => {
  const { children, title, url } = props

  return (
    <Root>
      <Head htmlAttributes={{ lang: 'en' }}>
        <title>Friendly Frontend Starter | {title}</title>
        <script src="/src/main.ts" type="module" />
        <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
        <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
        <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
        <link rel="manifest" href={manifest} />
        <script type="text/javascript" src="https://vk.com/js/api/openapi.js?168"></script>
      </Head>
      <Header url={url} />
      <Content>{children}</Content>
      <Footer />
      <Popup popupName='feedback-popup' title="Отправьте заявку">
        <FeedbackForm />
      </Popup>
    </Root>
  )
}
