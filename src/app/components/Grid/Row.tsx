import classNames from 'classnames';
import React from 'react';

export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  alignItems?: 'center' | 'start' | 'end' | 'stretch' | 'baseline';
}

export const Row = (
  { className, children, alignItems, ...props }: RowProps) => {
  const rowCls = classNames(
    'row',
    className,
    { [`row--align-items-${alignItems}`]: alignItems },
  );

  return (
    <div
      {...props}
      className={rowCls}
    >
      {children}
    </div>
  );
};

export default Row;
