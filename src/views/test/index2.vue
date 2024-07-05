<template>
  <div id="app">
    <IframeComponent />
  </div>
</template>

<script>
import IframeComponent from './IframeComponent.vue';

export default {
  name: 'App',
  components: {
    IframeComponent
  }
};
</script>

<style>
/* 你的全局样式 */
/* 将原来的 CSS 样式粘贴到这里 */
/* 基本样式 */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  height: 100vh;
  background-color: #8ED1FC;
  color: #333;
}

.container {
  display: grid;
  grid-template-columns: 150px 1fr; /* 缩短侧边栏宽度 */
  height: 100%;
}

/* 侧边栏样式 */
.sidebar {
  background-color: rgba(255, 255, 255, 0.5);
  color: #333;
  padding: 20px;
  transition: width 0.3s ease;
}

.sidebar.collapsed {
  width: 60px;
}

.sidebar nav {
  margin-top: 20px;
}

.sidebar nav a {
  display: flex;
  align-items: center;
  color: #333;
  padding: 10px;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
  opacity: 0.7;
}

.sidebar nav a:hover,
.sidebar nav a.active {
  background-color: #fff;
  color: #333;
  opacity: 1;
}

.sidebar nav a span {
  margin-left: 10px;
}

.sidebar.collapsed nav a span {
  display: none;
}

/* 主体区域样式 */
.main {
  display: grid;
  grid-template-rows: 1fr auto;
  padding: 20px;
}

/* 聊天窗口样式 */
.chat-windows {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
}

.chat-window {
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border: 2px solid transparent;
  position: relative;
}

.chat-window::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  z-index: -1;
  border-radius: 15px;
  background: linear-gradient(45deg, #87cefa, #ff7f50);
  background-origin: border-box;
}

.chat-window:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.chat-header {
  background-color: rgba(255, 255, 255, 0.5);
  color: #555;
  padding: 10px;
  display: flex;
  justify-content: center; /* 居中模型选择框 */
  align-items: center;
  border-bottom: 1px solid #ddd;
}

.chat-header select {
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 5px 10px;
  background-color: #f9f9f9;
  color: #555;
  font-size: 14px;
  margin: 0 auto;
  display: block;
}

.chat-body {
  padding: 10px;
  overflow-y: auto;
  color: #333;
  flex-grow: 1;
}

/* 布局切换按钮样式 */
.layout-buttons {
  display: flex;
  margin-right: 5px;
}

.layout-buttons button {
  background-color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 5px 5px;
  margin-right: 5px;
  opacity: 0.5;
  transition: opacity 0.3s;
}

.layout-buttons button:hover,
.layout-buttons button.active {
  opacity: 1;
}

.layout-buttons button svg {
  width: 32px;
  height: 32px;
}

/* 输入框样式 */
.input-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 10px;
}

.input-container input {
  flex-grow: 1;
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 3px;
  margin-left: 10px;
}

.input-button {
  margin-left: 10px;
  padding: 5px 10px;
  background-color: #87cefa;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.chat-windows {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
}

/* 消息气泡样式 */
.message {
  padding: 10px;
  border-radius: 10px;
  max-width: 70%;
  margin-bottom: 10px;
}

.user-message {
  background-color: #87cefa;
  color: #fff;
  margin-left: auto;
  align-self: flex-end;
}

.assistant-message {
  background-color: #f0f8ff;
  color: #333;
  margin-right: auto;
  align-self: flex-start;
}

.loading-message {
  background-color: #f0f8ff;
  color: #333;
  margin-right: auto;
  opacity: 0.5;
  align-self: flex-start;
}


</style>

