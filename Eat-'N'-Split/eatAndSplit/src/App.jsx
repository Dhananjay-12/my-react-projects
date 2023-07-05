import { useState } from "react";
import "./index.css";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);
  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }
  function handleSelectedFriend(friend) {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          selectedFriend={selectedFriend}
          onSetSelectedFriend={handleSelectedFriend}
        />
        {showAddFriend && (
          <FormAddFriend
            friends={friends}
            onSetFriends={setFriends}
            onShowAddFriends={handleShowAddFriend}
          />
        )}

        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
          key={selectedFriend.id}
        />
      )}
    </div>
  );
}

function FriendList({ friends, selectedFriend, onSetSelectedFriend }) {
  return (
    <ul>
      {friends.map((friend, key) => (
        <Friend
          id={friend.id}
          name={friend.name}
          image={friend.image}
          balance={friend.balance}
          selectedFriend={selectedFriend}
          onSetSelectedFriend={onSetSelectedFriend}
          key={key}
        />
      ))}
    </ul>
  );
}

function Friend({
  id,
  name,
  image,
  balance,
  selectedFriend,
  onSetSelectedFriend,
}) {
  const isSelected = selectedFriend?.id === id;
  return (
    <ul>
      <li className={isSelected ? "selected" : ""}>
        <img src={image} alt={name} />
        <h3>{name}</h3>

        {balance < 0 && (
          <p className="red">
            You owe {name} ${Math.abs(balance)}
          </p>
        )}
        {balance > 0 && (
          <p className="green">
            {name} owes you ${Math.abs(balance)}
          </p>
        )}
        {balance === 0 && <p>You and {name} are even</p>}
        <Button
          onClick={() => onSetSelectedFriend({ id, name, image, balance })}
        >
          {isSelected ? "Close" : "Select"}
        </Button>
      </li>
    </ul>
  );
}

function FormAddFriend({ friends, onSetFriends, onShowAddFriends }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmitEvent(e) {
    e.preventDefault();
    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };
    onSetFriends([...friends, newFriend]);
    onShowAddFriends();
    setName("");
    setImage("https://i.pravatar.cc/48");
  }
  return (
    <form className="form-add-friend" onSubmit={handleSubmitEvent}>
      <label>🧑‍🤝‍🧑Friend Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>🖼️Image Url</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add </Button>
    </form>
  );
}

function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !paidByUser) return;

    onSplitBill(whoIsPaying === "user" ? bill - paidByUser : -paidByUser);
  }
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split the bill with {selectedFriend.name}</h2>
      <label>🤑Bill Value</label>
      <input type="text" onChange={(e) => setBill(Number(e.target.value))} />
      <label>🕴️Your Expense</label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      />
      <label>🧑‍🤝‍🧑{selectedFriend.name}'s Expense</label>
      <input type="text" value={bill ? bill - paidByUser : ""} disabled />
      <label>😄Who's paying the bill</label>
      <select onChange={(e) => setWhoIsPaying(e.target.value)}>
        <option value={whoIsPaying}>You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}

export default App;
