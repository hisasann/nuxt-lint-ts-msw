import Vue from 'vue';
import { AxiosRequestConfig } from 'axios';

/**
 * レスポンス json オブジェクト用インターフェイス
 */
export interface ApiInterface {
  id: string;
  name: string;
}

/**
 * store 用インターフェイス
 */
export interface StateInterface {
  result: ApiInterface[];
}

/**
 * state
 */
export const state = (): StateInterface => ({
  result: [{ id: 'initial id', name: 'initial name' }],
});

/**
 * getters
 */
export const getters = {
  getResult(state: StateInterface): ApiInterface | undefined {
    if (!state.result || state.result.length <= 0) {
      return;
    }

    return state.result[0];
  },
};

/**
 * mutations
 */
export const mutations = {
  saveApiResult(state: StateInterface, apiResult: ApiInterface[]): void {
    // オブジェクトの key 値の value を変更する場合、 Vue 側に通知がいかないので
    // Vue.set 経由で渡す
    // Vue.set(state.result, 'key', apiResult)

    // 既存の result オブジェクトに追加する場合
    // state.result = {
    //   ...state.result,
    //   apiResult
    // }

    // オブジェクトインスタンスをまるっと新しくして result に追加する場合
    // state.result = Object.assign({}, state.result, {
    //   age: 27,
    //   favoriteColor: 'Vue Green'
    // })

    // 配列をそのまま result に入れる場合
    state.result = apiResult;
  },
};

/**
 * actions
 */
export const actions = {
  async fetchApi(
    this: Vue,
    // @ts-ignore
    { _, commit }: any
  ): Promise<void> {
    try {
      // https://uncle-javascript.com/weird-nuxt-3-axios-data-fetch
      // @ts-ignore
      const { data }: any = await this.$axios.get(
        '/users',
        {} as AxiosRequestConfig // https://github.com/axios/axios/blob/master/index.d.ts
      );
      console.log('apiResult:', data);

      // 値をストアに保存
      commit('saveApiResult', data);
    } catch (err) {
      console.log(err);
    }
  },
};
