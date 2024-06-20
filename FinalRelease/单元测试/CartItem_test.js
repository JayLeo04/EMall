import { shallowMount } from '@vue/test-utils';
import CartItem from '@/components/CartItem.vue';

describe('CartItem.vue', () => {
  const cart = {
    createTime: '2024-06-20',
    goodId: 1,
    img: '/path/to/image.jpg',
    goodName: 'Sample Product',
    standard: 'Standard',
    price: 100,
    discount: 0.9,
    count: 2,
    store: 10
  };

  it('renders cart item details correctly', () => {
    const wrapper = shallowMount(CartItem, {
      propsData: { cart }
    });
    expect(wrapper.text()).toContain(cart.goodName);
    expect(wrapper.text()).toContain(cart.standard);
    expect(wrapper.text()).toContain('180.00'); // Total price (100 * 0.9 * 2)
  });

  it('emits delete event when delete button is clicked', async () => {
    const wrapper = shallowMount(CartItem, {
      propsData: { cart }
    });
    wrapper.vm.del = jest.fn(() => Promise.resolve({ code: '200' }));
    wrapper.find('.el-popconfirm button').trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.del).toBeCalled();
  });

  it('navigates to payment page when pay button is clicked', () => {
    const wrapper = shallowMount(CartItem, {
      propsData: { cart },
      mocks: {
        $router: {
          push: jest.fn()
        }
      }
    });
    wrapper.find('.el-button').trigger('click');
    expect(wrapper.vm.$router.push).toBeCalled();
  });
});