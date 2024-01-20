import React, { ReactNode } from 'react';

import { cn } from '@shared/lib/utils';

const Variants = {
  primary: 'btn-primary text-white',
  orange: 'bg-orange-700 text-white shadow-sm',
  black: 'bg-black text-white hover:bg-primary transition',
  success: 'bg-green-600 gray-50',
};

const sizes = {
  sm: 'px-7 py-3 rounded-[100px]',
  md: 'px-7 py-3 font-medium w-fit',
  lg: 'px-9 py-2 font-medium',
  full: 'w-full py-2 font-medium',
};

type ButtonType = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: string | ReactNode;
  className?: string;
  size?: keyof typeof sizes;
  variant?: keyof typeof Variants;
};

function Button({
  children = null,
  className = '',
  size = 'md',
  variant = 'primary',
  ...otherProps
}: ButtonType) {
  return (
    <button
      className={cn(
        'disabled:opacity-70 disabled:cursor-not-allowed focus:outline-none font-mont',
        Variants[variant],
        sizes[size],
        className,
      )}
      type='button'
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default Button;
