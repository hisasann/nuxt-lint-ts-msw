<template>
  <div class="container">
    <div>
      <h1 class="title">リクエストのエラーのサンプル画面</h1>
      <p>{{ value }}</p>
    </div>
    <div>
      <button @click="clickHandler">click!</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions } from 'vuex';

export type DataType = {
  value: string;
};

export default Vue.extend({
  data(): DataType {
    return {
      value: 'initial value',
    };
  },
  computed: {},
  mounted(): void {
    console.log('モック mounted');
  },
  async created() {
    console.log('モック created');

    // 404 エラーが返ってくる想定
    this.value = await this.$axios.$get(`http://localhost:4000/user/hisasann2`);
  },
  methods: {
    ...mapActions({}),
    async clickHandler() {
      // 404 エラーが返ってくる想定
      this.value = await this.$axios.$get(
        `http://localhost:4000/user/hisasann2`
      );
    },
  },
});
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 50px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
