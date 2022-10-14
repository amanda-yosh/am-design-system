import { Slot } from '@radix-ui/react-slot';
import { InputHTMLAttributes, ReactNode } from 'react';

export interface TextInputIconProps {
  children: ReactNode
}

export interface TextInputRootProps {
  children: ReactNode
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string,
}

function TextInputIcon ({ children }: TextInputIconProps) {
  return (
    <Slot className='w-6 h-6 text-pink-400'>
      { children }
    </Slot>
  )
}
TextInputIcon.displayName = 'TextInput.Icon'

function TextInputRoot ({ children }: TextInputRootProps) {
  return (
    <div className='flex items-center gap-3 h-12 py-4 px-3 rounded-lg w-full bg-pink-100 focus-within:ring-2 ring-pink-700'>
      { children }
    </div>
  )
}
TextInputRoot.displayName = 'TextInput.Root'


function Input (props: InputProps) {
  return (
    <input
      className='bg-transparent flex-1 text-xs outline-none text-gray-700 placeholder:text-pink-400'
      { ...props }
    />
  )
}
TextInputRoot.displayName = 'TextInput.Input'

export const TextInput = {
  Input,
  Root: TextInputRoot,
  Icon: TextInputIcon
}
