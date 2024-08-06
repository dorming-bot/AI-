<template>
  <div class="container">
    <div class="logo">
      <img src="@/assets/HKAS_logo_black.png" alt="Logo" />
    </div>
    <div class="content">
      <h1>请输入秘钥</h1>
      <input v-model="code" placeholder="在此输入" class="input" />
      <button @click="checkCode" class="button">进入</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'MainPage',
  setup() {
    const code = ref('');
    const router = useRouter();

    const checkCode = () => {
      if (code.value === '20240810') {
        router.push('/g');
      } else {
        alert('秘钥错误, 请重试');
      }
    };

    return {
      code,
      checkCode,
    };
  },
});
</script>

<style scoped>
/* 重置全局样式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  width: 100%;
  height: 100%;
  overflow-x: hidden; /* 防止水平滚动 */
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%; /* 确保容器宽度为100% */

  padding: 20px;
  box-sizing: border-box;
  margin-left: 10%; /* 向右移动20% */
  margin-top: -5%; /* 向下移动20% */

}

.logo {
  margin-bottom: 20px;
}

.logo img {
  width: 100px; /* 调整logo大小 */
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  border: 2px solid #ccc;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.9); /* 半透明白色背景 */
}

h1 {
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
}

.input {
  width: 100%;
  max-width: 300px;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.button {
  width: 100%;
  max-width: 300px;
  padding: 10px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.button:hover {
  background-color: #0056b3;
}
</style>
