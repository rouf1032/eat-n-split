import { useState } from 'react'
import Friends from './FriendList/Friends'
import FormAddFriend from './FormAddFriend/FormAddFriend'
import FormSplitBill from './FormSplitBill/FormSplitBill'
import Button from './Button'

const FriendsList = [
  {id:101,name:"John Smidth",image:"https://i.postimg.cc/bYMvRkQy/pexels-olly-839011.jpg",balance:-7},
  {id:102,name:"Michel Clerck",image:"https://i.postimg.cc/TYgWLCZM/confident-attractive-caucasian-guy-beige-pullon-smiling-broadly-while-standing-against-gray.jpg",balance:125},
  // {id:103,name:"Sam Billing",image:"https://i.postimg.cc/gJ1nrZs2/inside-portrait-confident-young-man-white-clothes-posing-with-charming-smile-isolated-wall.jpg",balance:-125},
  // {id:104,name:"J. Walton",image:"https://i.postimg.cc/fW0Vp8Wt/handsome-bearded-guy-posing-against-white-wall.jpg",balance:0},
]

function App() {

  const [showAddFriend, setShowAddFriend] = useState(false)
  const [friends, setFriends] = useState(FriendsList)
  const [selectedFriend, setSelectedFriend] = useState(null)



  const handleShowAddFriend = () => {
    setShowAddFriend((show) => !show)
    // console.log(showAddFriend);
  }

  const handleAddFriend = (friend) => {
    setFriends((friends) =>[...friends,friend])
  }

  const handleSelection = (friend) => {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend))
    setShowAddFriend(false)
    
  }

  return (
    <div className='app'>
      <div className="sidebar">
      <Friends friends={friends} selectedFriend={selectedFriend} onSelection={handleSelection}/>
      {showAddFriend && <FormAddFriend handleAddFriend={handleAddFriend}/>}
      <Button onclick={handleShowAddFriend}>{showAddFriend ? 'Close' : 'Add Friend'}</Button>
      </div>
      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend}/>}
      
    </div>
  )
}

export default App
