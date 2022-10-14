import clsx from 'clsx';
import { ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode,
}

export function Button ({ children }: ButtonProps) {
  return (
    <button className={clsx(
      'py-4 px-3 rounded-lg font-semibold text-sm w-full',
      'bg-pink-200 text-pink-900 transition-colors hover:bg-pink-400',
      'active:bg-pink-800 active:text-pink-400'
    )}>
      { children }
    </button>
  )
}
