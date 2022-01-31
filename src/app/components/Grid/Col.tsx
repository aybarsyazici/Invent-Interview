import React from 'react';
import classNames from 'classnames';


export interface ColProps extends React.InputHTMLAttributes<HTMLDivElement> {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
  hiddenUntil?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
}

export const Col = ({
  children,
  className,
  xs = 12,
  sm,
  md,
  lg,
  xl,
  xxl,
  hiddenUntil = 'xs',
  ...props
}: ColProps) => {
  const colCls = classNames(
    'col',
    {
      ['col--xs-' + xs]: !!xs,
      ['col--sm-' + sm]: !!sm,
      ['col--md-' + md]: !!md,
      ['col--lg-' + lg]: !!lg,
      ['col--xl-' + xl]: !!xl,
      ['col--xxl-' + xxl]: !!xxl,
      ['col--' + hiddenUntil + '-show']: !!hiddenUntil,
      [`${className}`]: className,
    },
  );

  return (
    <div
      {...props}
      className={colCls}
    >
      {children}
    </div>
  );
};

export default Col;
