import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider, FormattedMessage, FormattedNumber } from 'react-intl'
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd'
 
import App from "./App";
import "./styles.css";


const loadLocaleData = (type = 'en') => {
    if (type == 'en') {
        return import('../lang/en.json')
    }
}

const bootstrapApplication = async locale => {
    const messages = await loadLocaleData(locale)
     
    ReactDOM.render(
        <ConfigProvider locale={zhCN}>
            <IntlProvider messages={messages.default}  locale='en'>
                <App name='a' />
            </IntlProvider>
        </ConfigProvider>
        , 
        document.getElementById("root"))
}

bootstrapApplication()