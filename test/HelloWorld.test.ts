import { mount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(HelloWorld);
    expect(wrapper.vm).toBeTruthy();
  });
});
