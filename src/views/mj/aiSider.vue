//提供一个侧边栏界面，包含导航按钮和工具提示，用于在应用程序的不同功能区之间进行导航，并显示用户信息和设置选项。
//src/views/mj/aiSider.vue
<script setup lang="ts">
import { computed,defineAsyncComponent ,ref} from "vue";
import { SvgIcon ,HoverButton} from '@/components/common'
import { useBasicLayout } from '@/hooks/useBasicLayout'
const { isMobile } = useBasicLayout()
import { NAvatar,NTooltip } from 'naive-ui'
import { homeStore, useUserStore,useChatStore } from '@/store'
import defaultAvatar from '@/assets/avatar.jpg'
import { router } from '@/router'
import { isDisableMenu } from "@/api";
import { useRouter } from "vue-router";

//import gallery from '@/views/gallery/index.vue'

const chatStore = useChatStore()
const Setting = defineAsyncComponent(() => import('@/components/common/Setting/index.vue'))
const userStore = useUserStore()

const st= ref({'show':false,showImg:false, menu:[],active:'chat'})


const userInfo = computed(() => userStore.userInfo)

const urouter = useRouter() //
 
const goHome =computed(  () => {
  //router.push('/')
  return router.currentRoute.value.name
});
// const go=(n:string)=>{
//   if('chat'==n){
//         router.push('/chat/'+ chatStore.active??'1002')
//     }
//     if('draw'==n){
//         router.push('/draw/'+ chatStore.active??'1002')
//         st.value.show=true;
//     }
// }
//mlog('g', goHome() );
const chatId= computed(()=>chatStore.active??'1002' );
</script>
<template>
<div class="flex-shrink-0 w-[60px] z-[1000]  h-full" v-if="!isMobile" data-tauri-drag-region>
    <div class="flex h-full select-none flex-col items-center justify-between bg-[#e8eaf1] px-2 pt-4 pb-8 dark:bg-[#25272d]">
        <div class="flex flex-col space-y-4 flex-1 " :class="{ 'pt-5': homeStore.myData.isClient }" data-tauri-drag-region>
            <a      @click="st.active='chat'; urouter.push(`/chat`)" class="router-link-active router-link-exact-active h-12 w-12 cursor-pointer rounded-xl bg-white duration-300 dark:bg-[#34373c] hover:bg-[#bbb] dark:hover:bg-[#555]">
                <n-tooltip placement="right" trigger="hover">
                  <template #trigger> 
                    <div  class="flex h-full justify-center items-center py-1 flex-col " :class="[ goHome =='Chat' ? 'active' : '']">
                    <SvgIcon icon="ri:wechat-line" class="text-3xl  flex-1"></SvgIcon>
                     <span class="text-[10px]">{{$t('mjtab.chat')}}</span>
                    </div>
                 </template>
                AI Chat
                </n-tooltip>
            </a> 
            <a  v-if="!isDisableMenu ( 'gpts')"   @click="homeStore.setMyData({act:'showgpts'}) " class=" router-link-exact-active h-12 w-12 cursor-pointer rounded-xl bg-white duration-300 dark:bg-[#34373c] hover:bg-[#bbb] dark:hover:bg-[#555]">
                <n-tooltip placement="right" trigger="hover">
                  <template #trigger> 
                    <div  class="flex h-full justify-center items-center   py-1 flex-col" >
                    <SvgIcon icon="ri:apps-fill" class="text-3xl flex-1"></SvgIcon>
                     <span class="text-[10px]">GPTs</span>
                    </div> 
                  </template>
                    ChatGPT Store 
                </n-tooltip>
            </a>


            <a v-if="!isDisableMenu ( 'draws')"  @click="st.active='draw'; urouter.push(`/draw`)" class=" router-link-exact-active h-12 w-12 cursor-pointer rounded-xl bg-white duration-300 dark:bg-[#34373c] hover:bg-[#bbb] dark:hover:bg-[#555]">
                <n-tooltip placement="right" trigger="hover">
                  <template #trigger> 
                    <div  class="flex h-full justify-center items-center   py-1 flex-col" :class="[goHome=='draw' ? 'active' : '']">
                    <SvgIcon icon="ic:outline-palette" class="text-3xl flex-1"></SvgIcon>
                     <span class="text-[10px]">{{$t('mjtab.draw')}}</span>
                    </div> 
                  </template>
                    {{$t('mjtab.drawinfo')}}
                </n-tooltip>
            </a>



             <a  v-if="!isDisableMenu ( 'gallery')"  @click="homeStore.setMyData({act:'gallery'}) " class=" router-link-exact-active h-12 w-12 cursor-pointer rounded-xl bg-white duration-300 dark:bg-[#34373c] hover:bg-[#bbb] dark:hover:bg-[#555]">
                <n-tooltip placement="right" trigger="hover">
                  <template #trigger> 
                    <div  class="flex h-full justify-center items-center   py-1 flex-col" >
                    <SvgIcon icon="material-symbols:imagesmode-outline" class="text-3xl flex-1"></SvgIcon>
                     <span class="text-[10px]">{{$t('mjtab.gallery')}}</span>
                    </div> 
                  </template>
                    {{ $t('mjtab.galleryInfo') }}
                </n-tooltip>
            </a>


            <a v-if="!isDisableMenu ( 'music')"      @click="st.active='music'; urouter.push('/music')" class=" router-link-exact-active h-12 w-12 cursor-pointer rounded-xl bg-white duration-300 dark:bg-[#34373c] hover:bg-[#bbb] dark:hover:bg-[#555]"
             >
                <n-tooltip placement="right" trigger="hover">
                  <template #trigger> 
                    <div  class="flex  h-full justify-center items-center py-1 flex-col " :class="[ goHome =='music' ? 'active' : '']">
                      <SvgIcon icon="arcticons:wynk-music" class="text-3xl flex-1"></SvgIcon>
                      <span class="text-[10px]">{{ $t('suno.menu') }}</span>
                    </div>  
                  </template>
                    {{ $t('suno.menuinfo') }}
                </n-tooltip>                
            </a>

              <a v-if="!isDisableMenu ( 'video')"      @click="st.active='video'; urouter.push('/video')" class=" router-link-exact-active h-12 w-12 cursor-pointer rounded-xl bg-white duration-300 dark:bg-[#34373c] hover:bg-[#bbb] dark:hover:bg-[#555]"
             >
                <n-tooltip placement="right" trigger="hover">
                  <template #trigger> 
                    <div  class="flex  h-full justify-center items-center py-1 flex-col " :class="[ goHome =='video' ? 'active' : '']">
                      <SvgIcon icon="ri:video-on-line" class="text-3xl flex-1"></SvgIcon>
                      <span class="text-[10px]">{{ $t('video.menu') }}</span>
                    </div>  
                  </template>
                    {{ $t('video.menuinfo') }}
                </n-tooltip>                
            </a>
              <!-- 新增的 test 功能区按钮 -->
           <a v-if="!isDisableMenu ( 'multi')"  @click="st.active='multi'; urouter.push(`/multi`)" class=" router-link-exact-active h-12 w-12 cursor-pointer rounded-xl bg-white duration-300 dark:bg-[#34373c] hover:bg-[#bbb] dark:hover:bg-[#555]">
                <n-tooltip placement="right" trigger="hover">
                  <template #trigger> 
                    <div  class="flex h-full justify-center items-center   py-1 flex-col" :class="[goHome=='multi' ? 'active' : '']">
                    <SvgIcon icon="ri:wechat-line" class="text-3xl flex-1"></SvgIcon>
                     <span class="text-[10px]">{{$t('mjtab.multi')}}</span>
                    </div> 
                  </template>
                    {{$t('mjtab.multi')}}
                </n-tooltip>
            </a>
                          <!-- 新增的 test 功能区按钮 -->
           <a v-if="!isDisableMenu ( 'test')"  @click="st.active='test'; urouter.push(`/test`)" class=" router-link-exact-active h-12 w-12 cursor-pointer rounded-xl bg-white duration-300 dark:bg-[#34373c] hover:bg-[#bbb] dark:hover:bg-[#555]">
                <n-tooltip placement="right" trigger="hover">
                  <template #trigger> 
                    <div  class="flex h-full justify-center items-center   py-1 flex-col" :class="[goHome=='test' ? 'active' : '']">
                    <SvgIcon icon="ri:wechat-line" class="text-3xl flex-1"></SvgIcon>
                     <span class="text-[10px]">{{$t('mjtab.test')}}</span>
                    </div> 
                  </template>
                    {{$t('mjtab.mtest')}}
                </n-tooltip>
            </a>

      </div>
        <!-- 底部用户信息和设置按钮 -->
    <div class="flex flex-col space-y-2 mt-auto">
      <NAvatar size="large" round :src="userInfo.avatar" v-if="userInfo.avatar" :fallback-src="defaultAvatar" class="cursor-pointer" />
      <HoverButton>
        <div class="text-xl text-[#4f555e] dark:text-white flex h-full justify-center items-center" @click="st.show = true">
          <SvgIcon icon="ri:settings-4-line" />
        </div>
      </HoverButton>
    </div>
  </div>

  <Setting v-if="st.show" v-model:visible="st.show" />
</div>
</template>


 