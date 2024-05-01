import React from 'react';

const Button = ({children,onclick}) => {
    return (
        <button className='button' onClick={onclick}>{children}</button>
    );
};

export default Button;