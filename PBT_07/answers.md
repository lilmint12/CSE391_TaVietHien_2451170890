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
console.log(typeof null);              // "object"
console.log(typeof undefined);         // "undefined"
console.log(typeof NaN);              // "number"
console.log("5" + 3);                 // "53"
console.log("5" - 3);                 // 2
console.log("5" * "3");              // 15
console.log(true + true);            // 2
console.log([] + []);                // "" (Chuỗi rỗng)
console.log([] + {});                // "[object Object]"
console.log({} + []);                // "[object Object]" (hoặc 0 tùy thuộc vào môi trường chạy console)
```

Sau khi trả lời, chạy code kiểm tra. Giải thích **tại sao** `"5" + 3` và `"5" - 3` cho kết quả khác nhau.
1. Với phép cộng "5" + 3
Toán tử cộng trong JavaScript ưu tiên việc nối chữ. Chỉ cần một bên là chữ, bên còn lại sẽ bị biến thành chữ để dính vào nhau.

Số 3 bị biến thành chữ 3.

Chữ 5 dính với chữ 3 thành 53.

2. Với phép trừ "5" - 3
Toán tử trừ chỉ biết làm toán, không biết nối chữ. Vì vậy, nó sẽ ép các bên thành số để tính toán.

Chữ 5 bị biến thành số 5.

Lấy 5 trừ 3 bằng 2.
### Câu A3 (5đ) — So sánh == vs ===

Dự đoán `true` hay `false`:

```javascript
console.log(5 == "5");                // true
console.log(5 === "5");               // false
console.log(null == undefined);       // true
console.log(null === undefined);      // false
console.log(NaN == NaN);              // false
console.log(0 == false);              // true
console.log(0 === false);             // false
console.log("" == false);             // true
```

**Quy tắc:** Từ giờ trở đi, bạn nên dùng `==` hay `===`? Tại sao?
1. Dấu hai bằng (So sánh tương đối)
Dấu này chỉ quan tâm đến giá trị bên trong. Nếu hai bên khác kiểu dữ liệu (một bên là số, một bên là chữ hoặc boolean), JavaScript sẽ tự động ép chúng về cùng một kiểu rồi mới so sánh.

5 == "5" ra true vì chữ 5 bị biến thành số 5.

0 == false ra true vì false bị biến thành số 0.

"" == false ra true vì cả hai đều bị biến thành số 0.

null == undefined là một trường hợp đặc biệt được JavaScript quy định sẵn là bằng nhau.

2. Dấu ba bằng (So sánh tuyệt đối)
Dấu này nghiêm ngặt hơn. Nó bắt buộc hai bên phải giống nhau cả về giá trị lẫn kiểu dữ liệu. Nếu khác kiểu dữ liệu, nó lập tức báo false mà không cần suy nghĩ.

5 === "5" ra false vì một bên là số, một bên là chữ.

0 === false ra false vì một bên là số, một bên là boolean.

3. Trường hợp đặc biệt NaN == NaN
NaN có nghĩa là một giá trị không hợp lệ. Trong JavaScript, NaN là thứ duy nhất không bằng chính nó, vì vậy mọi phép so sánh với NaN đều ra false.
### Câu A4 (5đ) — Truthy & Falsy

Liệt kê TẤT CẢ giá trị Falsy trong JavaScript (đọc tài liệu). Sau đó dự đoán kết quả:

```javascript
if ("0") console.log("A");           //  In
if ("") console.log("B");            // không
if ([]) console.log("C");            // IN
if ({}) console.log("D");            // In 
if (null) console.log("E");          // không
if (0) console.log("F");             // không
if (-1) console.log("G");            // In
if (" ") console.log("H");           // In 
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

Phần C
Câu C1: Báo cáo Debug JavaScript
    1. Bảng liệt kê lỗi và cách sửa:

    Lỗi 1: Sử dụng toán tử gán thay vì so sánh
    Code đang dùng: if (giaSauGiam = 0)
    Cách sửa là: Thay bằng if (giaSauGiam === 0) để kiểm tra giá trị.

    Lỗi 2: Sai kiểu dữ liệu đầu vào (String thay vì Number)
    Code đang dùng: Truyền "100000" là kiểu chuỗi.
    Cách sửa là: Dùng Number(giaBan) để chuyển chuỗi sang số trước khi tính toán.

    Lỗi 3: Thiếu ký tự kết thúc lệnh
    Code đang dùng: return "Phần trăm giảm không hợp lệ"
    Cách sửa là: Thêm dấu ; ở cuối câu: return "Phần trăm giảm không hợp lệ";

    Lỗi 4: Lỗi cú pháp do dính dòng
    Code đang dùng: // Testconst gia = ...
    Cách sửa là: Xuống dòng để tách biệt phần chú thích (//) và phần lệnh thực thi (const).

    Lỗi 5: Lỗi phạm vi biến (vòng lặp bất đồng bộ)
    Code đang dùng: for (var i = 0; i < 5; i++)
    Cách sửa là: Thay var bằng let i để tạo phạm vi khối (block scope) riêng biệt.

    Lỗi 6: Thiếu kiểm tra giá trị đầu vào
    g có kiểm tra số âm cho giaBan.
    Cách sửa là: Thêm if (price < 0) vào điều kiện kiểm tra hợp lệ.

    2. Giải thích lỗi "ẩn" về var và let:

    Tại sao lỗi: Khi dùng var, biến i có phạm vi toàn hàm. Do setTimeout chạy sau 1 giây, khi đó vòng lặp đã thực hiện xong và i đã tăng lên đến 5. Kết quả là tất cả các lệnh in ra đều nhận giá trị cuối cùng là 5.

    Tại sao dùng let lại đúng: Từ khóa let tạo ra một phạm vi mới cho i trong mỗi vòng lặp. Điều này đảm bảo mỗi lần setTimeout thực thi, nó sẽ lấy đúng giá trị của i tương ứng với lần lặp đó (0, 1, 2, 3, 4).
Câu c2
function tinhHoaDon(danhSachMon, ngay) {
    let tongTruocGiam = 0;
    
    // Tính tổng tiền món ăn
    danhSachMon.forEach(mon => {
        tongTruocGiam += mon.gia * mon.soLuong;
    });

    // Tính tỷ lệ giảm giá
    let tiLeGiam = 0;
    if (tongTruocGiam > 1000) tiLeGiam = 0.15;
    else if (tongTruocGiam > 500) tiLeGiam = 0.10;
    
    // Giảm thêm nếu là thứ 4
    if (ngay === "Wednesday") tiLeGiam += 0.05;

    let tienGiam = tongTruocGiam * tiLeGiam;
    let sauGiam = tongTruocGiam - tienGiam;
    let vat = sauGiam * 0.08;
    let tip = sauGiam * 0.05;
    let thanhToan = sauGiam + vat + tip;

    // Xuất hóa đơn
    console.log("╔══════════════════════════════════════╗");
    console.log("║        HÓA ĐƠN NHÀ HÀNG              ║");
    console.log("╠══════════════════════════════════════╣");
    danhSachMon.forEach((mon, i) => {
        console.log(`║ ${i + 1}. ${mon.ten} x${mon.soLuong} @${mon.gia}k = ${mon.gia * mon.soLuong}k ║`);
    });
    console.log("╠══════════════════════════════════════╣");
    console.log(`║ Tổng cộng: ${tongTruocGiam}.000đ           ║`);
    console.log(`║ Giảm giá (${tiLeGiam*100}%): ${tienGiam}.000đ           ║`);
    console.log(`║ VAT (8%): ${vat.toFixed(0)}.000đ              ║`);
    console.log(`║ Tip (5%): ${tip.toFixed(0)}.000đ              ║`);
    console.log("╠══════════════════════════════════════╣");
    console.log(`║ THANH TOÁN: ${thanhToan.toFixed(0)}.000đ         ║`);
    console.log("╚══════════════════════════════════════╝");
}
---