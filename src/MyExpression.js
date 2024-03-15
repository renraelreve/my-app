import "./App.css";

function MyTest() {
  const food = "noodles";
  const products = [
    { title: "Cabbage", id: 1 },
    { title: "Garlic", id: 2 },
    { title: "Apple", id: 3 },
  ];
  const listItems = products.map((product) => (
    <li key={product.id}>{product.title}</li>
  ));
  return (
    <div className="App">
      <h2>The answer to 12 * 9 is {12 * 9}</h2>
      <h3>My favourite food is {food}</h3>

      <ul>{listItems}</ul>
    </div>
  );
}

export default MyTest;
