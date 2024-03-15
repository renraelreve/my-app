import "./App.css";
import MyComponent from "./MyComponent";
import ToDoList, { ToDoList2 } from "./ToDoList";
import MyTest from "./MyExpression";

function App() {
  return (
    <div className="App">
      <h2>My name is Teck Guan.</h2>
      <p>I am very excited to learn React. </p>
      <p>I hope to be able to build a useful and attractive app.</p>
      <MyComponent />
      <ToDoList />
      <ToDoList2 />
      <MyTest />
    </div>
  );
}

export default App;
