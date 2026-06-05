function ToDoItem({ todo, onDeleteToDo }) {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span>{todo.text}</span>
            <button
                className="btn btn-danger btn-sm"
                onClick={() => {
                    console.log("button clicked");
                    onDeleteToDo(todo.id);
                }}
            >
                Delete
            </button>
        </li>
    );
}
export default ToDoItem;