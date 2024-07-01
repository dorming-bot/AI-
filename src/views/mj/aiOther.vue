//该组件监听 homeStore.myData.local 变化，当当前聊天记录存在时，自动创建一个新聊天记录
<script setup lang="ts">
import { mlog } from '@/api';
import { homeStore ,useChatStore} from '@/store';
import { watch } from 'vue'; 

const chatStore = useChatStore() //const chatStore = useChatStore()
//const dataSources = computed(() => chatStore.getChatByUuid(+uuid))
watch( ()=>homeStore.myData.local,n=>{
    if(! chatStore.active) return ;
    const dataSources =    chatStore.getChatByUuid(+chatStore.active) ;
    if( dataSources.length> 0 ){
        chatStore.addHistory({ title: 'New Chat', uuid: Date.now(), isEdit: false })
    }
    
})
 
</script>

<template></template>