import React from 'react';
import './Friend.css'
import Button from '../Button';

const Friend = ({friend, onSelection, selectedFriend}) => {
    const {name,image,balance} = friend;
    const isSelected = selectedFriend?.id === friend.id
    return (
        
        <li className={isSelected ? "selected" : ""}>
        <img src={image} alt={name} />
        <h4>{name}</h4>
        {balance < 0 && (<p>You owe {name} ${Math.abs(balance)}</p>)}
        {balance > 0 && (<p>{name} owes you ${Math.abs(balance)}</p>)}
        {balance === 0 && (<p>You both are even</p>)}
        <Button onclick={() =>onSelection(friend)}>{isSelected ? "Close" : "Select"}</Button>
        </li>
    );
    
};

export default Friend;