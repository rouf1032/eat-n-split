import React from 'react';
import Friend from './Friend';
import './Friends.css'

const Friends = ({friends}) => {
    
    return (
        <ul>
            {friends.map((friend) => (
                <Friend key={friend.id} friend={friend}/>
            ))}
        </ul>
    );
};

export default Friends;