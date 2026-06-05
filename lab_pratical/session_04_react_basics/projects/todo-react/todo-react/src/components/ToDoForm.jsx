import React, { useState } from "react"; // Added { useState } here

function ToDoForm({onAddTodo}) {
    const handleSubmit = (e) =>{
        e.preventDefault();
        const newToDo={
            id: Date.now(),
            text: document.getElementById('todoInput').value,
            completed: false
        };
        onAddTodo(newToDo);
    }
    return (
        // Changed class to className
        <form id="todoForm" className="d-flex gap-2 mb-4">
            <input
                type="text"
                id="todoInput"
                className="form-control" // Changed class to className
                placeholder="Nhập công việc..."
            />
            <button 
                type="submit" 
                className="btn btn-primary" 
                onClick={handleSubmit}
            >
                Thêm
            </button>
        </form>
    );
}

export default ToDoForm;