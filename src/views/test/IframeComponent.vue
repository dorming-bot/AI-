<template>
  <div class="container">
    <h1></h1>
    <div class="iframe-container">
      <iframe :src="iframeSrc"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iframeSrc: 'http://localhost/apps' // 替换为你要嵌入的页面 URL
    };
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh; /* 使容器高度占满视口高度 */
}

.iframe-container {
  flex: 1; /* 使 iframe 容器占满剩余空间 */
  display: flex;
}

iframe {
  flex: 1; /* 使 iframe 占满父容器 */
  border: none;
}
</style>
