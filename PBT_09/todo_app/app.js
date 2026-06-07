const todoForm = document.querySelector("#todoForm");
const todoInput = document.querySelector("#todoInput");
const todoList = document.querySelector("#todoList");
const itemsLeft = document.querySelector("#itemsLeft");
const clearCompletedBtn =
    document.querySelector("#clearCompleted");

const filterButtons =
    document.querySelectorAll(".filter-btn");

let todos =
    JSON.parse(localStorage.getItem("todos")) || [];

let currentFilter = "all";

function saveTodos() {
    localStorage.setItem(
        "todos",
        JSON.stringify(todos)
    );
}

function updateCounter() {

    const activeCount =
        todos.filter(todo => !todo.completed)
             .length;

    itemsLeft.textContent =
        `${activeCount} items left`;
}

function createTodoElement(todo) {

    const li = document.createElement("li");

    li.className =
        `todo-item ${
            todo.completed ? "completed" : ""
        }`;

    li.dataset.id = todo.id;

    const span =
        document.createElement("span");

    span.className = "todo-text";
    span.textContent = todo.text;

    const deleteBtn =
        document.createElement("button");

    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "❌";

    li.appendChild(span);
    li.appendChild(deleteBtn);

    return li;
}

function renderTodos() {

    todoList.innerHTML = "";

    let filteredTodos = [...todos];

    if (currentFilter === "active") {
        filteredTodos =
            todos.filter(todo => !todo.completed);
    }

    if (currentFilter === "completed") {
        filteredTodos =
            todos.filter(todo => todo.completed);
    }

    filteredTodos.forEach(todo => {
        todoList.appendChild(
            createTodoElement(todo)
        );
    });

    updateCounter();
    saveTodos();
}

todoForm.addEventListener("submit", e => {

    e.preventDefault();

    const text = todoInput.value.trim();

    if (!text) return;

    todos.push({
        id: Date.now(),
        text,
        completed: false
    });

    todoInput.value = "";

    renderTodos();
});

todoList.addEventListener("click", e => {

    const li = e.target.closest(".todo-item");

    if (!li) return;

    const id = Number(li.dataset.id);

    if (
        e.target.classList.contains("delete-btn")
    ) {

        todos =
            todos.filter(todo => todo.id !== id);

        renderTodos();
    }

    if (
        e.target.classList.contains("todo-text")
    ) {

        const todo =
            todos.find(todo => todo.id === id);

        todo.completed =
            !todo.completed;

        renderTodos();
    }
});

todoList.addEventListener("dblclick", e => {

    if (
        !e.target.classList.contains("todo-text")
    ) return;

    const span = e.target;

    const li =
        span.closest(".todo-item");

    const id =
        Number(li.dataset.id);

    const input =
        document.createElement("input");

    input.type = "text";
    input.value = span.textContent;
    input.className = "edit-input";

    span.replaceWith(input);

    input.focus();

    input.addEventListener(
        "keydown",
        event => {

            if (event.key === "Enter") {

                const newText =
                    input.value.trim();

                if (!newText) return;

                const todo =
                    todos.find(
                        todo => todo.id === id
                    );

                todo.text = newText;

                renderTodos();
            }
        }
    );
});

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        currentFilter =
            button.dataset.filter;

        renderTodos();
    });
});

clearCompletedBtn.addEventListener(
    "click",
    () => {

        todos =
            todos.filter(
                todo => !todo.completed
            );

        renderTodos();
    }
);

renderTodos();