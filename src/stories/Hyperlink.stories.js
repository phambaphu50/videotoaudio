import Hyperlink from './Hyperlink'

export default {
    title: 'Example/Hyperlink',
    component: Hyperlink,
  };

const Template = (args) => <Hyperlink {...args} />;

export const HyperLinkTest = Template.bind({});
HyperLinkTest.args = {
  src: '#', 
  target: '__blank', 
  title: 'Click me!'
};