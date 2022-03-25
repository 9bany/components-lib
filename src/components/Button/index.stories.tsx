import React, {PropsWithChildren} from 'react';
import { Meta, Story } from '@storybook/react';
import Button from "./index";

const meta: Meta<PropsWithChildren<{}>> = {
  title: 'Button',
  component: Button,
  argTypes: {
    label: {
      description: 'Content or elements to be rendered equal label',
      control: {
        type: 'text',
        default: "f"
      },
      
    },
  },
};

const Template: Story<PropsWithChildren<{}>> = (args) => <Button {...args} />;

const Basic = Template.bind({});
Basic.args = {
  label: 'Button',
};

export default meta;
export { Basic };
