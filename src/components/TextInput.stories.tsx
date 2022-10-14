import { Meta, StoryObj} from '@storybook/react';
import { TextInput, TextInputRootProps } from './TextInput';

import { At } from 'phosphor-react';

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    children: (
      <TextInput.Input placeholder='Digite aqui...' />
    ),
  },
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {
  argTypes: {
    children: {
      table: {
        disable: true,
      }
    },
  }
}

export const WithIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: (
      <>
        <TextInput.Icon>
          <At />
        </TextInput.Icon>
        <TextInput.Input placeholder='Digite aqui...' />
      </>
    ),
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      }
    },
  }
}
