/* eslint-disable react/prop-types */
import styles from "./TodoItems.module.css";
import TodoItem from "./TodoItem";
// eslint-disable-next-line react/prop-types, no-unused-vars
const TodoItems = ({ todoItems }) => {
  return (
    <>
      <div className={styles.itemsContainer}>
        {todoItems.map((item) => (
          <TodoItem
            todoDate={item.dueDate}
            todoName={item.name}
            key={item}
          ></TodoItem>
        ))}
      </div>
    </>
  );
};
export default TodoItems;
