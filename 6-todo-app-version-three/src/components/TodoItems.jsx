/* eslint-disable react/prop-types */
import styles from "./TodoItems.module.css";
import TodoItem from "./TodoItem";
// eslint-disable-next-line react/prop-types, no-unused-vars
const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <>
      <div className={styles.itemsContainer}>
        {todoItems.map((item) => (
          <TodoItem
            todoDate={item.dueDate}
            todoName={item.name}
            key={item.name}
            onDeleteClick={onDeleteClick}
          ></TodoItem>
        ))}
      </div>
    </>
  );
};
export default TodoItems;
