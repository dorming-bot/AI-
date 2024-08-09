import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import { setupPageGuard } from './permission'
import { ChatLayout } from '@/views/chat/layout'
import mjlayout from '@/views/mj/layout.vue'
import MainPage from '@/views/MainPage.vue'
import sunoLayout from '@/views/suno/layout.vue'
import lumaLayout from '@/views/luma/layout.vue'
import multiLayout from '@/views/multi/Layout.vue'
import testLayout from '@/views/test/Layout.vue'
//import multiChatLayout from '@/views/multiChat/layout.vue'; // 新增引用

const routes: RouteRecordRaw[] = [
/*   {
    path: '/',
    name: 'main',
    component: MainPage,
    redirect: '/',
    children: [
      {
        path: '/',
        name: 'MainPage',
        component: () => import('@/views/MainPage.vue'),
      },
    ],
  }, */
  {
    path: '/',
    name: 'main',
    component: MainPage,
    redirect: '/mainpage', // 配置重定向
    children: [
      {
        path: 'mainpage',
        name: 'MainPage',
        component: MainPage, // 直接引入组件
      },
    ],
  },
  {
    path: '/chat',
    name: 'Root',
    component: ChatLayout,
    redirect: '/chat',
    children: [
      {
        path: '/chat/:uuid?',
        name: 'Chat',
        component: () => import('@/views/chat/index.vue'),
      },
    ],
  },
   {
    path: '/g',
    name: 'g',
    component: ChatLayout,
    redirect: '/g/turbo',
    children: [
      {
        path: '/g/:gid',
        name: 'GPTs',
        component: () => import('@/views/chat/index.vue'),
      },
    ],
  },
   {
    path: '/m',
    name: 'm',
    component: ChatLayout,
    redirect: '/m/turbo',
    children: [
      {
        path: '/m/:gid',
        name: 'Model',
        component: () => import('@/views/chat/index.vue'),
      },
    ],
  },
  {
    path: '/s',
    name: 's',
    component: ChatLayout,
    redirect: '/s/t',
    children: [
      {
        path: '/s/t',
        name: 'Setting',
        component: () => import('@/views/chat/index.vue'),
      },
    ],
  },


  {
    path: '/draw',
    name: 'Rootdraw',
    component: mjlayout,
    redirect: '/draw/index',
    children: [
      {
        path: '/draw/:uuid?',
        name: 'draw',
        component: () => import('@/views/mj/draw.vue'),
      },
    ],
  },

    {
    path: '/music',
    name: 'music',
    component: sunoLayout,
    redirect: '/music/index',
    children: [
      {
        path: '/music/:uuid?',
        name: 'music',
        component: () => import('@/views/suno/music.vue'),
      },
    ],

  },
   {
    path: '/video',
    name: 'video',
    component: lumaLayout,
    redirect: '/video/index',
    children: [
      {
        path: '/video/:uuid?',
        name: 'video',
        component: () => import('@/views/luma/video.vue'),
      },
    ],
  },

  // 新增的 test 功能区
  {
    path: '/multi1',
    name: 'multi',
    component: multiLayout,
    redirect: '/multi/index',
    children: [
      {
        path: '/multi/:uuid?',
        name: 'multi',
        component: () => import('@/views/multi/index2.vue'),
      },
    ],
  },
  // 新增的 test 功能区
  {
    path: '/test1',
    name: 'test',
    component: testLayout,
    redirect: '/test/index',
    children: [
      {
        path: '/test/:uuid?',
        name: 'test',
        component: () => import('@/views/test/index2.vue'),
      },
    ],
  },
  //调试
  // {
  //   path: '/mytest',
  //   name: 'mytest',
  //   component: () => import('@/views/mj/myTest.vue'),
  // },

  {
    path: '/404',
    name: '404',
    component: () => import('@/views/exception/404/index.vue'),
  },

  {
    path: '/500',
    name: '500',
    component: () => import('@/views/exception/500/index.vue'),
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    redirect: '/404',
  },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

setupPageGuard(router)

export async function setupRouter(app: App) {
  app.use(router)
  await router.isReady()
}
