import { useSelector } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay() {
  const account = useSelector((store) => store.account.balance);
  return <div className="balance">{formatCurrency(`${Number(account)}`)}</div>;
}

export default BalanceDisplay;
