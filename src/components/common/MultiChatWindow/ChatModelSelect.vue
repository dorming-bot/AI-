<template>
  <select v-model="selectedModel">
    <option v-for="model in models" :key="model" :value="model">{{ model }}</option>
  </select>
</template>

<script>
export default {
  props: {
    models: Array,
    modelValue: String
  },
  emits: ['update:modelValue'],
  computed: {
    selectedModel: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:modelValue', value);
      }
    }
  }
};
</script>

<style scoped>
select {
  padding: 5px;
  margin-bottom: 10px;
}
</style>
