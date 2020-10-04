import React from 'react'
import ReactDOM from 'react-dom'
import { IntlProvider, FormattedMessage, FormattedNumber } from 'react-intl'
import zhCN from 'antd/es/locale/zh_CN'
import { ConfigProvider } from 'antd'

import App from './App'
import './styles.css'

const loadLocaleData = (type = 'zh') => {
  if (type == 'en') {
    return import('../compiled-lang/en.json')
  }
  if (type == 'zh') {
    return import('../compiled-lang/zh.json')
  }
}

const bootstrapApplication = async (locale) => {
  const messages = await loadLocaleData(locale)
  console.log(messages.default)
  ReactDOM.render(
    <ConfigProvider >
      <IntlProvider messages={messages} locale="zh" defaultLocale="en">
        <App name="a" />
      </IntlProvider>
    </ConfigProvider>,
    document.getElementById('root')
  )
}

bootstrapApplication()
