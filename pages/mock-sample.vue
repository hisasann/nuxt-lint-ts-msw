<template>
  <div class="container">
    <div>
      <h1 class="title">モックサンプル画面</h1>
      <p>{{ value1 }}</p>
      <p>{{ value2 }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions } from 'vuex';

export type DataType = {
  value1: string;
};

// via https://qiita.com/is_ryo/items/6fc799ba4214db61d8ab
export default Vue.extend({
  // data をリアクティブに更新するならこちらを使う
  async asyncData({ $axios }) {
    // この /users がモックサーバーを見に行く
    const { data } = await $axios.get(`/users`);

    return {
      value1: data[0].name,
    };
  },
  data(): DataType {
    return {
      value1: 'initial value',
    };
  },
  // Vuex を使うならこちらを使う
  async fetch({ store }) {
    await store.dispatch('fetchApi');
  },
  computed: {
    value2() {
      return this.$store.state.result[1].name;
    },
  },
  mounted(): void {
    console.log('モック mounted');
  },
  created(): void {
    console.log('モック created');
    // asyncData や fetch はいずれ廃止されるので、なるべく使わないほうがよいかもしれない
    // this.fetchApi()
  },
  methods: {
    ...mapActions({
      fetchApi: 'fetchApi',
    }),
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
