import React from 'react';

import { cn } from '@shared/lib/utils';

const variants = {
  outer: 'max-w-[1220px] my-4 rounded-[40px] mx-4 px-4',
  inner: 'max-w-[1150px] md:px-6',
};

interface Props<C extends React.ElementType> {
  as?: C;
  children: React.ReactNode;
  className?: string;
  variant?: keyof typeof variants;
}

type ContainerTypes<C extends React.ElementType> = Props<C> &
  Omit<React.ComponentPropsWithoutRef<C>, keyof Props<C>>;

// Source: www.benmvp.com/blog/polymorphic-react-components-typescript/

export function Container<C extends React.ElementType = 'div'>({
  as,
  children,
  className,
  variant = 'inner',
  ...otherProps
}: ContainerTypes<C>) {
  const Component = as ?? 'div';

  return (
    <Component
      {...otherProps}
      className={cn(
        'max-w-[1150px] mx-auto',
        variants[variant],
        className,
      )}
    >
      {children}
    </Component>
  );
}
