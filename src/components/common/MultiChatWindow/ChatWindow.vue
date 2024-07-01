<template>
  <div class="chat-window">
    <div class="messages">
      <div v-for="(msg, index) in messages" :key="index" class="message">{{ msg }}</div>
    </div>
    <input v-model="input" @keyup.enter="handleSend" placeholder="Type a message..." />
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  props: {
    messages: Array
  },
  emits: ['sendMessage'],
  setup(_, { emit }) {
    const input = ref('');

    const handleSend = () => {
      emit('sendMessage', input.value);
      input.value = '';
    };

    return { input, handleSend };
  }
};
</script>

<style scoped>
.chat-window {
  border: 1px solid #ccc;
  padding: 10px;
  display: flex;
  flex-direction: column;
}
.messages {
  flex: 1;
  overflow-y: auto;
}
.message {
  margin: 5px 0;
}
input {
  border: 1px solid #ccc;
  padding: 5px;
}
</style>
