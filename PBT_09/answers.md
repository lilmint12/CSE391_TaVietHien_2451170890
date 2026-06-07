PHẦN A — KIỂM TRA ĐỌC HIỂU (15 điểm)
Câu A1 (5đ) — DOM Tree
Cho HTML:
```
<div id="app">
    <header>
        <h1>Todo App</h1>
        <nav>
            <a href="#" class="active">All</a>
            <a href="#">Active</a>
            <a href="#">Completed</a>
        </nav>
    </header>
    <main>
        <form id="todoForm">
            <input id="todoInput" type="text">
            <button type="submit">Add</button>
        </form>
        <ul id="todoList">
            <li class="todo-item">Learn HTML</li>
            <li class="todo-item completed">Learn CSS</li>
        </ul>
    </main>
</div>```
Vẽ DOM tree (sơ đồ cây) cho HTML trên
document
└── div#app
    ├── header
    │   ├── h1
    │   │   └── "Todo App"
    │   └── nav
    │       ├── a.active
    │       │   └── "All"
    │       ├── a
    │       │   └── "Active"
    │       └── a
    │           └── "Completed"
    │
    └── main
        ├── form#todoForm
        │   ├── input#todoInput
        │   └── button
        │       └── "Add"
        │
        └── ul#todoList
            ├── li.todo-item
            │   └── "Learn HTML"
            └── li.todo-item.completed
                └── "Learn CSS"
Viết querySelector cho mỗi yêu cầu:
a Chọn thẻ <h1>
document.querySelector("h1");
b Chọn input trong form
document.querySelector("#todoForm input");
hoặc
document.querySelector("form input");
c Chọn tất cả .todo-item
document.querySelectorAll(".todo-item");
d Chọn link đang active
document.querySelector("a.active");
e Chọn <li> đầu tiên trong #todoList
document.querySelector("#todoList li:first-child");
f Chọn tất cả <a> bên trong <nav>
document.querySelectorAll("nav a");
Câu A2 (5đ) — innerHTML vs textContent
Giải thích sự khác nhau. Cho ví dụ khi nào dùng mỗi cái.

Câu hỏi bảo mật: Tại sao innerHTML có thể gây lỗ hổng XSS? Viết 1 ví dụ code minh họa:

// Giả sử user nhập vào input: <img src=x onerror="alert('Hacked!')">
const userInput = document.querySelector("#search").value;
document.querySelector("#result").innerHTML = userInput;  // ← Nguy hiểm!
// Sửa thế nào?
Ví dụ nguy hiểm

Người dùng nhập:

<img src=x onerror="alert('Hacked!')">

Code:

const userInput = document.querySelector("#search").value;

document.querySelector("#result").innerHTML = userInput;

Sau khi gán, trình duyệt hiểu đây là HTML:

<div id="result">
    <img src="x" onerror="alert('Hacked!')">
</div>

Do ảnh x không tồn tại nên sự kiện onerror chạy:

alert('Hacked!')

=> JavaScript của kẻ tấn công được thực thi.
Câu A3 (5đ) — Event Bubbling
Không chạy code, dự đoán thứ tự console.log:

document.querySelector("#outer").addEventListener("click", () => {
    console.log("OUTER");
});

document.querySelector("#inner").addEventListener("click", () => {
    console.log("INNER");
});

document.querySelector("#btn").addEventListener("click", (e) => {
    console.log("BUTTON");
    // e.stopPropagation();  ← nếu bỏ comment → output thay đổi thế nào?
});
<div id="outer">
    <div id="inner">
        <button id="btn">Click me</button>
    </div>
</div>
Khi click vào button, output = Khi click button:
BUTTON
INNER
OUTER.
Nếu uncomment stopPropagation(), output = BUTTON
sẽ ngăn sự kiện tiếp tục bubbling lên các phần tử cha.