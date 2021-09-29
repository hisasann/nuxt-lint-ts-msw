import axios from 'axios';
import Vue from 'vue';

export default function ({ error }: any) {
  // via https://qiita.com/clomie/items/73fa1e9f61e5b88826bc
  // Vue.config.errorHandler でフックできないものたちは以下の2パターンで監視するのもありです。
  window.addEventListener('error', (event) => {
    console.log('Captured in error EventListener', event.error);
  });
  window.addEventListener('unhandledrejection', (event) => {
    console.log('Captured in unhandledrejection EventListener', event.reason);
  });

  Vue.config.errorHandler = (err, _vm, info) => {
    console.log(`Captured in Vue.config.errorHandler: ${info}`, err);

    if (axios.isAxiosError(err)) {
      if (!info.match(/(created|mounted)/)) {
        console.log('!created|mounted:', err);
        return;
      }
      console.log('created|mounted:', err);

      // axios のエラーで、且つ created や mounted イベントでキャプチャされた場合
      error({ statusCode: err.response?.request.status });
    } else {
      console.log('axiosのエラーではない:', err);
    }
  };
}
