<template>
  <div class="multi-chat-window">
    <div v-for="(chat, index) in chats" :key="index" class="chat-window">
      <ChatModelSelect :models="models" v-model="chat.model" />
      <ChatWindow :messages="chat.messages" @sendMessage="sendMessage(index, chat.model)" />
    </div>
  </div>
</template>

<script>
import ChatWindow from './ChatWindow.vue';
import ChatModelSelect from './ChatModelSelect.vue';
import { ref } from 'vue';
import { useMultiChat } from '@/hooks/useMultiChat';

export default {
  components: {
    ChatWindow,
    ChatModelSelect
  },
  setup() {
    const { chats, models, sendMessage } = useMultiChat();
    return { chats, models, sendMessage };
  }
};
</script>

<style scoped>
.multi-chat-window {
  display: flex;
  flex-wrap: wrap;
}
.chat-window {
  flex: 1 1 50%;
  padding: 10px;
}
</style>
