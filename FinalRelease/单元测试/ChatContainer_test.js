import { shallowMount } from '@vue/test-utils';
import ChatContainer from '@/components/ChatContainer.vue';
import axios from 'axios';

jest.mock('axios');

describe('ChatContainer.vue', () => {
  it('renders initial bot message', () => {
    const wrapper = shallowMount(ChatContainer);
    expect(wrapper.text()).toContain("Hello! How can I help you today?");
  });

  it('sends user message and receives bot reply', async () => {
    const wrapper = shallowMount(ChatContainer);
    wrapper.setData({ input: 'Hello' });

    axios.post.mockResolvedValue({ data: { data: 'Hi there!' } });

    wrapper.find('el-button').trigger('click');
    
    await wrapper.vm.$nextTick();

    expect(wrapper.text()).toContain('Hello');
    expect(wrapper.text()).toContain('Hi there!');
  });
});