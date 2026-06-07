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



PHẦN C — DEBUG & PHÂN TÍCH (15 điểm)
Câu C1 (8đ) — Debug DOM Code
Tìm và sửa tất cả lỗi (ít nhất 7 lỗi):

// App: Counter with history
const countDisplay = document.querySelector(".count");
const historyList = document.getElementById("history");

let count = 0;

document.querySelector("#incrementBtn").addEventListener("click", function() {
    count++;
    countDisplay.innerHTML = count;
    
    // Lưu history
    const li = document.createElement("li");
    li.textContent = "Count changed to " + count;
    li.addEventListener("click", function() {
        deleteHistory(this);
    });
    historyList.append(li);
});

document.querySelector("#decrementBtn").addEventListener("onclick", function() {
    count--;
    countDisplay.innerHTML = count;
});

document.querySelector("#resetBtn").addEventListener("click", () => {
    count = 0;
    countDisplay = count;
    historyList.innerHTML = null;
});

function deleteHistory(element) {
    element.parentNode.removeChild(element);
}

// Clear all history
document.querySelector("#clearHistory").addEventListener("click", () => {
    const items = historyList.querySelectorAll("li");
    items.forEach(item => {
        item.remove;
    });
});


// Save to localStorage
window.addEventListener("beforeunload", () => {
    localStorage.setItem("count", count);
    localStorage.setItem("history", historyList.innerHTML);
});

// Load from localStorage
window.addEventListener("load", () => {
    count = localStorage.getItem("count");
    countDisplay.textContent = count;
});
Lỗi 1: Sai tên event "onclick"

Code sai:

document.querySelector("#decrementBtn")
.addEventListener("onclick", function() {

addEventListener() chỉ nhận tên event:

"click"

Sửa:

document.querySelector("#decrementBtn")
.addEventListener("click", function() {
Lỗi 2: Reset gán sai đối tượng

Code sai:

countDisplay = count;

countDisplay là DOM element.

Dòng này làm mất reference đến element.

Sửa:

countDisplay.textContent = count;

hoặc

countDisplay.innerHTML = count;
Lỗi 3: Xóa history bằng null

Code:

historyList.innerHTML = null;

innerHTML nên là chuỗi.

Sửa:

historyList.innerHTML = "";
Lỗi 4: Quên gọi hàm remove()

Code:

item.remove;

Đây chỉ là tham chiếu tới function.

Không thực thi.

Sửa:

item.remove();
Lỗi 5: Không load history từ localStorage

Đang lưu:

localStorage.setItem(
    "history",
    historyList.innerHTML
);

Nhưng khi load:

window.addEventListener("load", () => {
    count = localStorage.getItem("count");
    countDisplay.textContent = count;
});

Không restore history.

Phải thêm:

historyList.innerHTML =
    localStorage.getItem("history") || "";
Lỗi 6: count lấy từ localStorage là String

Code:

count =
    localStorage.getItem("count");

localStorage luôn trả về String.

Ví dụ:

count = "5";
count++;

vẫn hoạt động do ép kiểu ngầm.

Nhưng không an toàn.

Sửa:

count =
    Number(
        localStorage.getItem("count")
    ) || 0;
Lỗi 7: Event click của history bị mất sau khi load

Ban đầu:

li.addEventListener(
    "click",
    function(){
        deleteHistory(this);
    }
);

Nhưng khi load lại:

historyList.innerHTML =
    localStorage.getItem("history");

Các event listener không được lưu.

Sau refresh:

click history item
↓
không xóa được

Nên dùng Event Delegation:

historyList.addEventListener(
    "click",
    e => {

        if(e.target.tagName === "LI"){
            deleteHistory(e.target);
        }
    }
);
Lỗi 8: Dùng innerHTML không cần thiết

Code:

countDisplay.innerHTML = count;

Counter chỉ là text.

An toàn hơn:

countDisplay.textContent = count;

Tránh XSS nếu dữ liệu không đáng tin cậy.

Phiên bản sửa đúng
const countDisplay =
    document.querySelector(".count");

const historyList =
    document.getElementById("history");

let count = 0;

document.querySelector("#incrementBtn")
.addEventListener("click", () => {

    count++;

    countDisplay.textContent = count;

    const li =
        document.createElement("li");

    li.textContent =
        "Count changed to " + count;

    historyList.append(li);
});

document.querySelector("#decrementBtn")
.addEventListener("click", () => {

    count--;

    countDisplay.textContent = count;
});

document.querySelector("#resetBtn")
.addEventListener("click", () => {

    count = 0;

    countDisplay.textContent = count;

    historyList.innerHTML = "";
});

function deleteHistory(element){

    element.remove();
}

historyList.addEventListener(
    "click",
    e => {

        if(e.target.tagName === "LI"){
            deleteHistory(e.target);
        }
    }
);

document.querySelector("#clearHistory")
.addEventListener("click", () => {

    historyList
        .querySelectorAll("li")
        .forEach(item => item.remove());
});

window.addEventListener(
    "beforeunload",
    () => {

        localStorage.setItem(
            "count",
            count
        );

        localStorage.setItem(
            "history",
            historyList.innerHTML
        );
    }
);

window.addEventListener(
    "load",
    () => {

        count =
            Number(
                localStorage.getItem("count")
            ) || 0;

        countDisplay.textContent =
            count;

        historyList.innerHTML =
            localStorage.getItem("history")
            || "";
    }
);

Câu C2 (7đ) — Performance
Giải thích: Tại sao bind event lên 1000 elements riêng lẻ là BAD PRACTICE? Event Delegation giải quyết thế nào?

Cho code:

for (let i = 0; i < 1000; i++) {
    const div = document.createElement("div");
    div.textContent = `Item ${i}`;
    document.body.appendChild(div);   // ← 1000 lần reflow!
}
Refactor dùng DocumentFragment để chỉ gây 1 lần reflow. Giải thích tại sao nhanh hơn.

Thay vì:

1000 elements
↓
1000 listeners

Ta dùng:

1 parent element
↓
1 listener

Ví dụ:

const list =
    document.querySelector("#list");

list.addEventListener(
    "click",
    e => {

        if(
            e.target.classList.contains("item")
        ){

            console.log(
                e.target.textContent
            );
        }
    }
);

HTML:

<ul id="list">
    <li class="item">A</li>
    <li class="item">B</li>
    <li class="item">C</li>
</ul>

Khi click:

Click li
↓
Event xảy ra trên li
↓
Bubble lên ul
↓
ul xử lý