import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>)
    </header>
  );
}
function Menu() {
  // const pizzaData = [];
  const numPizzas = pizzaData.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from our
            stone oven, all organic, all delicious
          </p>
          <ul className="pizzas">
            {pizzaData.map((el, key) => (
              <Pizza
                key={key}
                name={el.name}
                ingredients={el.ingredients}
                photoName={el.photoName}
                price={el.price}
                soldOut={el.soldOut}
              />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back again later :)</p>
      )}
    </main>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const open = 8;
  const closed = 22;
  const isOpen = hour >= open && hour <= closed;
  console.log(hour);
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closed={closed} />
      ) : (
        <p>
          We're happy to welcome you between {open}:00 and {closed}:00 :){" "}
        </p>
      )}
    </footer>
  );
}

function Pizza({ name, ingredients, photoName, price, soldOut }) {
  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt="" />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <p>{soldOut ? "Sold Out" : price}</p>
      </div>
    </li>
  );
}

function Order({ closed }) {
  return (
    <div className="order">
      <p>We're open until {closed}:00. Come visit is or order online</p>
      <button className="btn">Order</button>
    </div>
  );
}

export default App;
