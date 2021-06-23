import { createLocalVue } from '@vue/test-utils';
import axios from 'axios';
import Vuex from 'vuex';
import * as storeIndex from '@/store/index';

// Vue のセットアップ
const localVue = createLocalVue();
localVue.use(Vuex);

describe('storeIndex tests', () => {
  let store: any;

  beforeEach(() => {
    // @ts-ignore
    store = new Vuex.Store(storeIndex);
    // これをしておかないと this.$axios が使えない
    store.$axios = axios;
  });

  test('apiのレスポンス0のテスト', async (done) => {
    // @ts-ignore
    await store.dispatch('fetchApi');
    // getters 経由でアクセスする場合
    expect(store.getters.getResult.name).toBe('foo');
    // 非同期のテストは done しないとずっと完了してくれない
    done();
  });

  test('apiのレスポンス1のテスト', async (done) => {
    // @ts-ignore
    await store.dispatch('fetchApi');
    // state 経由でアクセスする場合
    expect(store.state.result[1].name).toBe('bar');
    done();
  });
});
