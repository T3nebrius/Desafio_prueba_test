import { mount } from '@vue/test-utils';
import Parent from '@/components/ParentComponent.vue';

describe('Parent.vue', () => {
  test('Debe recibir texto del componente Child', async () => {
    const wrapper = mount(Parent);
    const child = wrapper.findComponent({ name: 'Child' });

    child.vm.$emit('sendText', 'Hola, mundo');
    await wrapper.vm.$nextTick();

    expect(wrapper.text()).toContain('Texto recibido: Hola, mundo');
  });
});