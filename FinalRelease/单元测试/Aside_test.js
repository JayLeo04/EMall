import { shallowMount } from '@vue/test-utils';
import Aside from '@/components/Aside.vue';

describe('Aside.vue', () => {
  it('renders menu items based on user role', async () => {
    // Mock the API response
    const mockRequest = jest.fn(() => Promise.resolve({ code: '200', data: 'admin' }));
    Aside.methods.request = mockRequest;

    const wrapper = shallowMount(Aside, {
      propsData: { isCollapse: false }
    });

    // Wait for the role to be set from the API response
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.role).toBe('admin');
    expect(wrapper.vm.menuFlags.userMenu).toBe(true);
    expect(wrapper.vm.menuFlags.fileMenu).toBe(true);
  });
});