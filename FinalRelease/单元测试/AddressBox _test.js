import { shallowMount } from '@vue/test-utils';
import AddressBox from '@/components/AddressBox.vue';

describe('AddressBox.vue', () => {
  const address = {
    linkUser: 'John Doe',
    linkPhone: '123-456-7890',
    linkAddress: '123 Main St, Anytown, USA'
  };

  it('renders address details correctly', () => {
    const wrapper = shallowMount(AddressBox, {
      propsData: { address }
    });
    expect(wrapper.text()).toContain(address.linkUser);
    expect(wrapper.text()).toContain(address.linkPhone);
    expect(wrapper.text()).toContain(address.linkAddress);
  });

  it('emits edit event when edit link is clicked', () => {
    const wrapper = shallowMount(AddressBox, {
      propsData: { address }
    });
    wrapper.find('a').trigger('click');
    expect(wrapper.emitted().edit).toBeTruthy();
  });

  it('emits delete event when delete link is clicked', () => {
    const wrapper = shallowMount(AddressBox, {
      propsData: { address }
    });
    wrapper.findAll('a').at(1).trigger('click');
    expect(wrapper.emitted().delete).toBeTruthy();
  });
});