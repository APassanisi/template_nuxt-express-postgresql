<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const data = await $axios.$get('http://localhost:8000/data');
    const message = data.message;
    return { message };
  },
};
</script>

<style lang="scss">
@import '~/assets/css/main.scss';
</style>
