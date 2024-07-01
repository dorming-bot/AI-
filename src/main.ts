import { createApp } from 'vue'
import App from './App.vue'
import { setupI18n } from './locales'
import { setupAssets, setupScrollbarStyle } from './plugins'
import { setupStore } from './store'
import { setupRouter } from './router'

async function bootstrap() {
// 创建一个Vue应用实例
  const app = createApp(App)

// 设置静态资源，例如图标和样式
  setupAssets()

// 设置自定义滚动条样式
  setupScrollbarStyle()

 // 配置Vuex存储
  setupStore(app)

// 配置国际化
  setupI18n(app)

 // 配置路由，并等待路由设置完成 
  await setupRouter(app)

  // 挂载Vue应用实例
  app.mount('#app')
}

bootstrap()
