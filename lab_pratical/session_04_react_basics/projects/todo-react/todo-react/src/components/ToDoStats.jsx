import React from "react";
function ToDoStats({todos}) {
    return (
        <div className="alert alert-info py-2">
            Tổng số công việc:
            <strong id="todoCount">{todos.length}</strong>
        </div>
    )
}
export default ToDoStats