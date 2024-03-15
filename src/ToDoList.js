// import "./App.css";
import styles from "./MyComponent.module.css";

function ToDoList() {
  return (
    <div className={styles.bodyText1}>
      <h2>My To Do List</h2>
      <div>
        <input type="checkbox" />
        <label>Sleep</label>
      </div>
      <div>
        <input type="checkbox" />
        <label>Eat</label>
      </div>
    </div>
  );
}

export function ToDoList2() {
  return (
    <div className={styles.bodyText2}>
      <h2>My To Do List No. 2</h2>
      <div>
        <input type="checkbox" />
        <label>Sleep again</label>
      </div>
      <div>
        <input type="checkbox" />
        <label>Eat again</label>
        <p>Here's a math expression: 23 * 78 is {23 * 78}</p>
      </div>
    </div>
  );
}

export default ToDoList;
