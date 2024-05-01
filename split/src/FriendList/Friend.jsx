import React from 'react';
import './Friend.css'

const Friend = ({friend}) => {
    const {name,image,balance} = friend;
    return (
        <li>
        <img src={image} alt={name} />
        <h4>{name}</h4>
        {balance < 0 && (<p>You owe {name} ${Math.abs(balance)}</p>)}
        {balance > 0 && (<p>{name} owes you ${Math.abs(balance)}</p>)}
        {balance === 0 && (<p>You both are even</p>)}
        <button className='button'>Select</button>
        </li>
    );
};

export default Friend;