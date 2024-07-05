<template>
  <div>
    <h1>Project Page</h1>
    <iframe :src="iframeSrc" width="100%" height="600px"></iframe>
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
iframe {
  border: none;
}
</style>
