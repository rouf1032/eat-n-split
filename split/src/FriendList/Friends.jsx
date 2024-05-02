import React from "react";
import Friend from "./Friend";
import "./Friends.css";

const Friends = ({ friends, onSelection, selectedFriend }) => {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend} onSelection={onSelection} selectedFriend={selectedFriend}/>
      ))}
    </ul>
  );
};

export default Friends;
