import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';

export interface CheckboxProps {}

export function Checkbox ({}: CheckboxProps) {
  return (
    <RadixCheckbox.Root className='w-6 h-6 p-[2px] bg-pink-100 rounded'>
      <RadixCheckbox.Indicator asChild>
        <Check weight='bold' className='h-5 w-5 text-pink-900'/>
      </RadixCheckbox.Indicator>
    </RadixCheckbox.Root>
  )
}
