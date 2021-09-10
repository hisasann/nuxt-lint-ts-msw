<template>
  <div>
    <template v-if="error.statusCode === 404">
      <span>ERROR {{ error.message }}</span>
      <h2>ページが見つかりません。</h2>
      <nuxt-link to="/"> TOP</nuxt-link>
    </template>
  </div>
</template>

<script>
export default {
  props: ['error'],
};
</script>
