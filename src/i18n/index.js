import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export const messages = {
  'zh_CN': require('./zh_CN'),   // 中文语言包
  'EN': require('./EN')   // 中文语言包
}

export default new VueI18n({
  locale: 'zh_CN',    // 语言标识
  messages
})
