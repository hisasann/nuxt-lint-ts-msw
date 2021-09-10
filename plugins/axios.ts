import { Plugin } from '@nuxt/types';
import { AxiosError } from 'axios';

const axiosPlugin: Plugin = ({ $axios, app, req, error }): void => {
  /**
   * $axios.onResponseError
   */
  $axios.onResponseError((response: AxiosError): void => {
    console.log('$axios.onResponseError');
    // 通信エラー
    if (!response.response) {
      return;
    }

    const { status, statusText, config } = response.response;

    // 404
    if (status === 404) {
      const message = statusText;
      // ここで error 関数を呼ぶと axios の 404 が発生したら必ずエラーページに遷移する
      // error({ statusCode: status, message });
    }
  });
};

export default axiosPlugin;
