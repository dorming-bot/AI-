<template>
  <div class="container">
    <div class="logo">
      <img src="@/assets/logo3.png" alt="Logo" />
    </div>
    <span class="logo-text">香港人工智能协会AI实训平台</span>
    <div class="content">
      <h1>请输入会议日期</h1>
      <input v-model="code" placeholder="20xx.xx.xx" class="input" />
      <button @click="checkCode" class="button">进入</button>
    </div>
    <div class="sponsor">
      <p>协办单位：南京大学南京南数数据运筹科学研究院</p>
    </div>
    <span class="logo-text2">有效期：2024.08.01~2024.08.31</span>
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
        alert('日期错误, 请重试');
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
  margin-left: 10%; /* 向右移动10% */
  margin-top: -5%; /* 向上移动5% */
  margin-bottom: 50px;
}

.logo {
  display: flex;
  align-items: center;
  margin-bottom: 20px; /* 增加 logo 与 logo-text 之间的间距 */
}

.logo img {
  width: 200px; /* 调整 logo 大小 */
}

.logo-text {
  font-size: 25px;
  color: #333;
  margin-left: 5px; /* Logo 与文字的间距 */
  margin-bottom: 30px; /* 增加 logo-text 与 content 之间的间距 */
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  border: 2px solid #ccc;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.9); /* 半透明白色背景 */
  margin-bottom: 20px;
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

.sponsor {
  margin-top: 20px;
  font-size: 14px;
  color: #555;
  text-align: center;
}

.logo-text2 {
  font-size: 14px;
  color: #333;
  margin-top: 10px; /* 调整与 sponsor 之间的间距 */
  text-align: center;
}
</style>


