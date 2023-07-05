import { useState } from "react";

function App() {
  const [bill, setBill] = useState("");
  const [myReview, setMyReview] = useState(0);
  const [friendReview, setFriendReview] = useState(0);

  const tip = (bill * (myReview + friendReview)) / 2 / 100;
  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage review={myReview} onSelectReview={setMyReview}>
        How did you like the service ?
      </SelectPercentage>
      <SelectPercentage review={friendReview} onSelectReview={setFriendReview}>
        How did your friend like the service ?
      </SelectPercentage>
      <Output bill={Number(bill)} tip={tip} />
      {/* <Reset /> */}
    </div>
  );
}
function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>How much did you pay ?</label>
      <input
        type="text"
        placeholder="Enter bill"
        value={bill}
        onChange={(e) => onSetBill(e.target.value)}
      />
    </div>
  );
}

function SelectPercentage({ children, review, onSelectReview }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={review}
        onChange={(e) => onSelectReview(Number(e.target.value))}
      >
        <option value={0}>Not Good(0%)</option>
        <option value={5}>Fine(5%)</option>
        <option value={10}>Good(10%)</option>
        <option value={20}>Great(20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <h2>
      You Pay {bill + tip}(${bill}+${tip})
    </h2>
  );
}

export default App;
