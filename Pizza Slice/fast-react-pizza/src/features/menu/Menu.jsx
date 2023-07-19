import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "../menu/MenuItem";

function Menu() {
  const menu = useLoaderData();
  return (
    <div className="flex items-center justify-center">
      <ul className=" mx-auto my-6 grid gap-6 sm:grid-cols-[1fr_1fr]  lg:grid-cols-[1fr_1fr_1fr] 2xl:grid-cols-[1fr_1fr_1fr_1fr]">
        {menu.map((pizza) => (
          <MenuItem pizza={pizza} key={pizza.id} />
        ))}
      </ul>
    </div>
  );
}

export async function loader() {
  return await getMenu();
}

export default Menu;
