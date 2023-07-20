import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };

    dispatch(addItem(newItem));
  }

  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;
  return (
    <li
      className={` m-auto w-72 overflow-hidden rounded-lg bg-white shadow-2xl  ${
        !soldOut
          ? "shadow-inner-xl transition-transform duration-300 hover:scale-105"
          : ""
      } `}
    >
      <img
        className={`w-full object-cover ${
          soldOut ? "opacity-70 grayscale" : ""
        }`}
        src={imageUrl}
        alt={name}
      />
      <div className="p-4">
        <p className="mb-2 text-xl font-bold">{name}</p>
        <p className="mb-4 text-gray-600">{ingredients.join(", ")}</p>
        <div className="flex items-center justify-between">
          {!soldOut ? (
            <>
              <p className="text-lg font-bold">{formatCurrency(unitPrice)}</p>

              {!isInCart ? (
                <Button type="round" onClick={handleAddToCart}>
                  Add to Cart
                </Button>
              ) : (
                <div className="flex items-center gap-2">
                  <UpdateItemQuantity
                    pizzaId={id}
                    currentQuantity={currentQuantity}
                  />
                  <DeleteItem pizzaId={id} />
                </div>
              )}
            </>
          ) : (
            <p className="font-bold text-red-600">Sold out</p>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
