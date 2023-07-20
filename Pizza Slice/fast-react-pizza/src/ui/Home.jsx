import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  const username = useSelector((state) => state.user.username);
  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8 text-xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className=" text-yellow-400">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {username === "" ? (
        <CreateUser />
      ) : (
        <>
          <h3 className="m-2">Welcome, {username} :)</h3>
          <Button to="/menu" type="primary">
            Continue Ordering
          </Button>
        </>
      )}
    </div>
  );
}

export default Home;
