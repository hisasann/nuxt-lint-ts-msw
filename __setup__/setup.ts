// src/setupTests.js
import { server } from '../mocks/server';

// Establish API mocking before all tests.
beforeAll(() => server.listen());
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());
// Clean up after the tests are finished.
afterAll(() => server.close());

// https://vue-test-utils.vuejs.org/ja/installation/choosing-a-test-runner.html
// https://www.tohuandkonsome.site/entry/2018/11/08/175213
// テストのセットアップと登録
// require('jsdom-global')()
