import React from 'react';
import './FormAddFriend.css'

const FormAddFriend = () => {
    return (
        <form className="form-add-friend" >
      <label>👫 Friend name</label>
      <input
        type="text"
      />

      <label>🌄 Image URL</label>
      <input
        type="text"
      />

      <button>Add</button>
    </form>
    );
};

export default FormAddFriend;