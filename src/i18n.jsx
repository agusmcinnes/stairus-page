import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'
import React from 'react'
import global_es from "./translations/es/global.json"
import global_en from "./translations/en/global.json"


i18n.use(initReactI18next).init({
    interpolation: {escapeValue: false},
    debug: true,
    lng: "es",

    resources: {
        es: {
            global: global_es
        },
        en: {
            global: global_en
        }
    }
})

export default i18n;