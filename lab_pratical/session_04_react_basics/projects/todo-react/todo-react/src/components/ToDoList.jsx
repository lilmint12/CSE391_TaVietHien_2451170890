import React from "react";
import ToDoItem from "./ToDoItem";

// Chỉ nhận vào 1 đối tượng 'props' duy nhất
function ToDoList(props) {
    return (
        <ul id="todoList" className="list-group">
            {/* Truy cập qua props.todos */}
            {props.todos.map(todo => (
                <ToDoItem 
                    key={todo.id} 
                    todo={todo} 
                    // Truy cập qua props.onDeleteToDo
                    onDeleteToDo={() => props.onDeleteToDo(todo.id)}
                />
            ))}
        </ul>
    );
}

export default ToDoList;