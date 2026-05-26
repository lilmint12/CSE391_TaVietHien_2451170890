# 📋 PHIẾU BÀI TẬP 07

## PHẦN A — KIỂM TRA ĐỌC HIỂU (25 điểm)

### Câu A1 (5đ) — var / let / const

Đọc chương 03. **Không chạy code**, dự đoán output cho từng đoạn:

```javascript
// Đoạn 1
console.log(x);
var x = 5;
->undefined
// Đoạn 2
console.log(y);
let y = 10;
->undefined

// Đoạn 3
const z = 15;
z = 20;
console.log(z);
-> báo lỗi do không được thay đổi kiểu dữ liệu const
// Đoạn 4
const arr = [1, 2, 3];
arr.push(4);
console.log(arr);
-> in ra mảng 1,2,3,5
// Đoạn 5
let a = 1;
{
    let a = 2;
    console.log("Trong block:", a);
}
console.log("Ngoài block:", a);
->> trong block 2, ngoài block 1
```

Ghi dự đoán → Tạo file `-`, chạy → So sánh. Giải thích các kết quả bất ngờ.

### Câu A2 (5đ) — Data Types & Coercion

Không chạy code, dự đoán kết quả:

```javascript
console.log(typeof null);              // ???
console.log(typeof undefined);         // ???
console.log(typeof NaN);              // ???
console.log("5" + 3);                 // ???
console.log("5" - 3);                 // ???
console.log("5" * "3");              // ???
console.log(true + true);            // ???
console.log([] + []);                // ???
console.log([] + {});                // ???
console.log({} + []);                // ???
```

Sau khi trả lời, chạy code kiểm tra. Giải thích **tại sao** `"5" + 3` và `"5" - 3` cho kết quả khác nhau.

### Câu A3 (5đ) — So sánh == vs ===

Dự đoán `true` hay `false`:

```javascript
console.log(5 == "5");                // ???
console.log(5 === "5");               // ???
console.log(null == undefined);       // ???
console.log(null === undefined);      // ???
console.log(NaN == NaN);             // ???
console.log(0 == false);             // ???
console.log(0 === false);            // ???
console.log("" == false);            // ???
```

**Quy tắc:** Từ giờ trở đi, bạn nên dùng `==` hay `===`? Tại sao?

### Câu A4 (5đ) — Truthy & Falsy

Liệt kê TẤT CẢ giá trị Falsy trong JavaScript (đọc tài liệu). Sau đó dự đoán kết quả:

```javascript
if ("0") console.log("A");           // In hay không?
if ("") console.log("B");            // In hay không?
if ([]) console.log("C");            // In hay không?
if ({}) console.log("D");            // In hay không?
if (null) console.log("E");          // In hay không?
if (0) console.log("F");             // In hay không?
if (-1) console.log("G");            // In hay không?
if (" ") console.log("H");           // In hay không? (space)
```

### Câu A5 (5đ) — Template Literals

Viết lại 3 cách nối chuỗi sau bằng **template literal** (backtick):

```javascript
// Cách 1:
var greeting = "Xin chào " + name + "! Bạn " + age + " tuổi.";

// Cách 2:
var url = "https://api.example.com/users/" + userId + "/orders?page=" + page;

// Cách 3:
var html = "<div class=\"card\">" +
    "<h2>" + title + "</h2>" +
    "<p>" + description + "</p>" +
    "<span>Giá: " + price + "đ</span>" +
    "</div>";
```

---