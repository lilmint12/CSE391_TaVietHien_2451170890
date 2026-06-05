// 1. pipe() — Nối chuỗi functions
function pipe(...fns) {
    return (initialValue) => {
        let value = initialValue;
        
        // Vòng lặp duyệt qua từng hàm trong mảng fns
        for (let fn of fns) {
            value = fn(value); // Cập nhật giá trị sau mỗi bước
        }
        
        return value;
    };
}

const process = pipe(
    x => x * 2,        // 5 → 10
    x => x + 10,       // 10 → 20
    x => x.toString(), // 20 → "20"
    x => "Kết quả: " + x
);
console.log(process(5)); // → "Kết quả: 20"

// 2. memoize() — Cache kết quả
function memoize(fn) { const cache = {}; // Nơi lưu trữ kết quả đã tính

    return function(n) {
        // Kiểm tra xem n đã có trong cache chưa
        if (cache[n] !== undefined) {
            return cache[n];
        }
        
        // Nếu chưa có, thực hiện tính toán
        const result = fn(n);
        
        // Lưu kết quả vào cache để lần sau dùng
        cache[n] = result;
        return result;
    };
}

const expensiveCalc = memoize((n) => {
    console.log("Đang tính...");
    let result = 0;
    for (let i = 0; i < n; i++) result += i;
    return result;
});
console.log(expensiveCalc(1000000)); // → "Đang tính..." → 499999500000
console.log(expensiveCalc(1000000)); // → (không in "Đang tính...", lấy cache!)

// 3. debounce() — Chờ user ngừng gõ mới thực hiện
function debounce(fn, delay) { 
    let timeoutId; // Biến lưu định danh của setTimeout
    
    return function(...args) {
        // Nếu người dùng gọi hàm lại trong lúc delay chưa hết,
        // chúng ta xóa lệnh gọi cũ đi và bắt đầu đếm ngược lại từ đầu.
        clearTimeout(timeoutId);
        // Thiết lập một lệnh gọi mới
        timeoutId = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}

const search = debounce((query) => {
    console.log("Searching:", query);
}, 500);
// Gọi liên tục → chỉ lần cuối mới chạy

// 4. retry() — Thử lại nếu lỗi
async function retry(fn, maxAttempts = 3) {
    for (let i = 0; i < maxAttempts; i++) {
        try {
            // Cố gắng thực thi hàm fn
            return await fn();
        } catch (error) {
            // Nếu đây là lần thử cuối cùng, ném lỗi ra ngoài
            if (i === maxAttempts - 1) throw error;
            
            console.log(`Lần thử ${i + 1} thất bại, đang thử lại...`);
        }
    }
}