import classNames from 'classnames';
import React from 'react';
import { Col } from './Col';
import { Row } from './Row';


export interface GridProps extends React.InputHTMLAttributes<HTMLDivElement> {
  gutter?: 'sm' | 'md' | 'lg';
  container?: boolean;
}

const Grid = (props: GridProps) => {
  const {
    gutter,
    container = false,
    children,
    ..._props
  } = props;

  const gridClassName = classNames(
    props.className,
    'grid',
    {
      container,
      [`grid--gutter-${gutter}`]: gutter,
    });

  return (
    <div
      {..._props}
      className={gridClassName}
    >
      {children}
    </div>
  );
};

Grid.Row = Row;
Grid.Col = Col;


export { Grid };
