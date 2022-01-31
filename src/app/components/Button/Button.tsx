import React, { FunctionComponent } from "react";
import classnames from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    active: boolean;
    variant?: 'primary' | 'secondary';
}
 
const Button: FunctionComponent<ButtonProps> = ({children, active, variant="primary", className,...props}) => {

    const btnCls = classnames('btn', className, {'btn--active': active}, `btn--${variant}`);

    return (
        <button className={btnCls} {...props}>{children}</button>
    );
}
 
export default Button;