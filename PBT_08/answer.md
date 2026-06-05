Câu A1 (5đ) — Function Declaration vs Expression vs Arrow
Viết cùng 1 hàm tinhThueBaoHiem(luong) theo 3 cách:

Function Declaration
function tinhThueBaoHiem(luong) {
    let thue = 0;
    if (luong > 11000000) {
        thue = luong * 0.1;
    }
    let thuc_nhan = luong - thue;
    return { thue: thue, thuc_nhan: thuc_nhan };
}
Function Expression
const tinhThueBaoHiem = function(luong) {
    let thue = 0;
    if (luong > 11000000) {
        thue = luong * 0.1;
    }
    let thuc_nhan = luong - thue;
    return { thue: thue, thuc_nhan: thuc_nhan };
};
Arrow Function
const tinhThueBaoHiem = (luong) => {
    let thue = (luong > 11000000) ? luong * 0.1 : 0;
    let thuc_nhan = luong - thue;
    return { thue: thue, thuc_nhan: thuc_nhan };
};
Hàm tính: Thuế = 10% nếu lương > 11 triệu, 0% nếu ≤ 11 triệu. Trả về object { thuong, thuc_nhan }.

////////////////////

Câu A2 (5đ) — Scope & Closure
Không chạy code, dự đoán output:

// Đoạn 1:
function counter() {
    let count = 0;
    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    };
}
const c = counter();
console.log(c.increment());  // ???
console.log(c.increment());  // ???
console.log(c.increment());  // ???
console.log(c.decrement());  // ???
console.log(c.getCount());   // ???

// Đoạn 2:
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("var:", i), 100);
}
for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log("let:", j), 200);
}
// Output sau 200ms: ???
Giải thích chi tiết: Tại sao var và let cho kết quả khác nhau trong vòng lặp setTimeout?
Dự đoán Output
Đoạn 1 (Closure):
    console.log(c.increment()); // 1
    console.log(c.increment()); // 2
    console.log(c.increment()); // 3
    console.log(c.decrement()); // 2
    console.log(c.getCount());   // 2

Đoạn 2 (Vòng lặp với setTimeout):
    Sau 100ms: var: 3, var: 3, var: 3
    Sau 200ms: let: 0, let: 1, let: 2
Giải thích chi tiết
Về Đoạn 1 (Closure):
Hiện tượng này gọi là Closure. Hàm counter trả về một đối tượng chứa các hàm con. Các hàm này vẫn giữ được quyền truy cập vào biến count nằm trong phạm vi của hàm cha (counter), ngay cả khi hàm cha đã thực thi xong. Do count được duy trì trạng thái riêng biệt bên trong closure, mỗi lần gọi increment hay decrement, giá trị count thực tế vẫn thay đổi liên tục.

Về Đoạn 2 (Sự khác biệt giữa var và let):
Với var (Function Scope):
Biến i được khai báo bằng var không có phạm vi trong vòng lặp mà có phạm vi toàn hàm. Khi setTimeout thực thi sau 100ms, vòng lặp for đã chạy xong từ lâu và giá trị của i đã là 3. Vì cả ba hàm console.log đều cùng chia sẻ một biến i đó, nên tất cả đều in ra giá trị cuối cùng là 3.

Với let (Block Scope):
Biến j được khai báo bằng let có phạm vi trong chính khối lệnh {} của vòng lặp đó. Với mỗi vòng lặp, JavaScript tạo ra một "phiên bản" mới của j cho riêng khối lệnh đó. Vì vậy, mỗi hàm setTimeout sẽ "ghi nhớ" giá trị của j tại thời điểm nó được tạo ra (0, 1, và 2).

Câu A3 (5đ) — Array Methods
Đọc chương 06. Cho mảng: const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Viết 1 dòng code cho mỗi yêu cầu (dùng arrow function):

1. Lấy các số chẵn                    → [2, 4, 6, 8, 10]
const evens = nums.filter(x => x % 2 === 0);
2. Nhân mỗi số với 3                  → [3, 6, 9, ..., 30]
const multiplied = nums.map(x => x * 3);
3. Tính tổng tất cả                   → 55
const sum = nums.reduce((acc, curr) => acc + curr, 0);
4. Tìm số đầu tiên > 7               → 8
const firstOver7 = nums.find(x => x > 7);
5. Kiểm tra CÓ số > 10 không         → false
const hasOver10 = nums.some(x => x > 10);
6. Kiểm tra TẤT CẢ đều > 0           → true
const allPositive = nums.every(x => x > 0);
7. Tạo mảng "Số X là [chẵn/lẻ]"      → ["Số 1 là lẻ", "Số 2 là chẵn", ...]
const descriptions = nums.map(x => `Số ${x} là ${x % 2 === 0 ? 'chẵn' : 'lẻ'}`);
8. Đảo ngược mảng (không mutate gốc)  → [10, 9, ..., 1]
const reversed = [...nums].reverse();
Câu A4 (5đ) — Object Destructuring & Spread
Không chạy code, dự đoán output:

const product = {
    name: "iPhone 16",
    price: 25990000,
    specs: { ram: 8, storage: 256, color: "Titan" }
};

// Destructuring
const { name, price, specs: { ram, color } } = product;
console.log(name, price, ram, color);  // iPhone 16 25990000 8 Titan
console.log(specs);                     // ReferenceError: specs is not defined (Vì chúng ta đã "phá vỡ" cấu trúc để lấy ram và color, bản thân biến specs không được tạo ra).

// Spread
const updated = { ...product, price: 23990000, sale: true };
console.log(updated.price);            // 23990000
console.log(updated.sale);             // true
console.log(product.price);            // 25990000 (Không đổi, vì Spread tạo ra object mới).

// Spread gotcha
const copy = { ...product };
copy.specs.ram = 16;
console.log(product.specs.ram);        // 6 (Bị đổi thành 16)
