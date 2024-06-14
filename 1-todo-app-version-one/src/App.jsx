import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TOdoItem1 from "./components/TodoItem1";
import TOdoItem2 from "./components/TodoItem2";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>

      <div className="items-container">
        <TOdoItem1></TOdoItem1>
        <TOdoItem2></TOdoItem2>
      </div>
    </center>
  );
}
export default App;
