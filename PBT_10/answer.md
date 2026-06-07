Câu A1: Sync vs Async (Event Loop)
Thứ tự output:

1 - Start

4 - End

3 - Promise

6 - Promise 2

2 - Timeout 0ms

7 - Nested timeout

5 - Timeout 100ms

Giải thích:

Sync: Các lệnh console.log được thực thi ngay lập tức trong Call Stack.

Microtask Queue: Các Promise (.then) có độ ưu tiên cao nhất, được xử lý ngay sau khi Call Stack trống, trước khi chuyển sang Macrotask tiếp theo.

Macrotask Queue: Các hàm setTimeout được đẩy vào đây. Chỉ được xử lý sau khi Microtask Queue đã rỗng. Nested timeout nằm trong Promise 2 nên nó được đẩy vào Macrotask sau khi Promise 2 thực thi.

Câu A2: Fetch API
Giải thích từng dòng:

fetch(...): Gửi request HTTP. Trả về một Promise chứa Response object. Cần await để chờ phản hồi từ server.

if (!response.ok): Kiểm tra trạng thái HTTP (200-299). Sẽ là false nếu: 404 (Not Found), 500 (Internal Server Error), 403 (Forbidden).

await response.json(): Dữ liệu stream từ server chưa sẵn sàng ngay. Cần await vì đây là thao tác bất đồng bộ để đọc và parse JSON.

try...catch: Bắt lỗi Network (ví dụ: mất kết nối), lỗi HTTP (do ta chủ động throw), hoặc lỗi parse JSON (nếu response không đúng định dạng).

Câu A3: Promise States
Callback Hell: Là hiện tượng code bất đồng bộ lồng nhau quá sâu (thường có dạng hình tam giác), gây khó đọc và khó bảo trì.

Ví dụ 4 cấp:

JavaScript
getData(a, (res1) => {
    getMore(res1, (res2) => {
        getEvenMore(res2, (res3) => {
            finish(res3, (final) => {
                console.log(final);
            });
        });
    });
});
Refactor với Async/Await:

JavaScript
try {
    const res1 = await getData(a);
    const res2 = await getMore(res1);
    const res3 = await getEvenMore(res2);
    const final = await finish(res3);
    console.log(final);
} catch (err) {
    console.error(err);
}

Câu C1. Error Handling Strategy (10đ)

Trong ứng dụng E-Commerce, việc xử lý lỗi rất quan trọng vì ứng dụng thường phải gọi nhiều API như sản phẩm, giỏ hàng, thanh toán và thông tin người dùng. Nếu không xử lý tốt, trải nghiệm người dùng sẽ bị ảnh hưởng.

1. Network Error (Mất kết nối mạng)

Lỗi này xảy ra khi người dùng bị mất Internet hoặc không thể kết nối đến server.

Cách xử lý:

Hiển thị thông báo cho người dùng biết đang mất kết nối.
Cho phép người dùng thử lại (Retry).
Không để ứng dụng bị treo hoặc crash.
async function getProducts() {
    try {
        const response = await fetch("/api/products");

        if (!response.ok) {
            throw new Error("Request failed");
        }

        return await response.json();

    } catch (error) {
        if (!navigator.onLine) {
            alert("Không có kết nối Internet");
        } else {
            alert("Không thể kết nối tới server");
        }
    }
}
2. API Errors
a. Lỗi 404 Not Found

Xảy ra khi tài nguyên không tồn tại, ví dụ người dùng truy cập một sản phẩm đã bị xóa.

Xử lý:

if (response.status === 404) {
    alert("Không tìm thấy sản phẩm");
}
b. Lỗi 500 Internal Server Error

Lỗi từ phía server.

Xử lý:

if (response.status === 500) {
    alert("Hệ thống đang gặp sự cố, vui lòng thử lại sau");
}
c. Lỗi 429 Too Many Requests

Người dùng gửi quá nhiều request trong thời gian ngắn.

Xử lý:

if (response.status === 429) {
    alert("Bạn thao tác quá nhanh, vui lòng thử lại sau");
}
3. Timeout (> 10 giây)

Nếu API phản hồi quá lâu thì nên hủy request để người dùng không phải chờ vô hạn.

Hàm fetchWithTimeout()
function fetchWithTimeout(url, ms = 10000) {
    const controller = new AbortController();

    const timeoutId = setTimeout(() => {
        controller.abort();
    }, ms);

    return fetch(url, {
        signal: controller.signal
    }).finally(() => clearTimeout(timeoutId));
}
Sử dụng
try {
    const response = await fetchWithTimeout(
        "/api/products",
        10000
    );

    const data = await response.json();

} catch (error) {

    if (error.name === "AbortError") {
        alert("Yêu cầu đã hết thời gian chờ");
    }
}
4. Retry Logic

Đối với lỗi mạng hoặc timeout, có thể tự động thử lại một vài lần trước khi báo lỗi cho người dùng.

Hàm fetchWithRetry()
async function fetchWithRetry(
    url,
    maxRetries = 3
) {

    for (let i = 0; i < maxRetries; i++) {

        try {

            const response = await fetch(url);

            if (!response.ok) {
                throw new Error("Request failed");
            }

            return await response.json();

        } catch (error) {

            if (i === maxRetries - 1) {
                throw error;
            }
        }
    }
}
Sử dụng
try {

    const products =
        await fetchWithRetry(
            "/api/products",
            3
        );

} catch (error) {

    alert("Không thể tải dữ liệu");
}
Kết luận

Trong ứng dụng E-Commerce:

Network Error → Thông báo mất mạng và cho phép Retry.
404 → Thông báo không tìm thấy dữ liệu.
500 → Thông báo lỗi hệ thống.
429 → Yêu cầu người dùng chờ một thời gian.
Timeout → Hủy request sau 10 giây.
Retry → Thử lại tối đa 3 lần với lỗi mạng hoặc timeout.
Câu C2. Promise.all vs Promise.allSettled vs Promise.race vs Promise.any (10đ)
Bảng so sánh
Method	Khi nào resolve?	Khi nào reject?	Use case
Promise.all()	Khi tất cả promise thành công	Khi có ít nhất 1 promise lỗi	Load nhiều dữ liệu bắt buộc
Promise.allSettled()	Khi tất cả promise hoàn thành	Không reject	Dashboard nhiều widget
Promise.race()	Promise hoàn thành đầu tiên	Promise đầu tiên bị lỗi	Timeout hoặc chọn server nhanh nhất
Promise.any()	Promise đầu tiên thành công	Khi tất cả promise lỗi	Nhiều nguồn dữ liệu dự phòng
1. Promise.all()

Promise.all() dùng khi tất cả dữ liệu đều cần thiết. Nếu một request thất bại thì toàn bộ quá trình thất bại.

Ví dụ

Trang checkout cần:

Thông tin user
Giỏ hàng
Địa chỉ giao hàng
const [user, cart, address] =
await Promise.all([
    fetch("/api/user").then(r => r.json()),
    fetch("/api/cart").then(r => r.json()),
    fetch("/api/address").then(r => r.json())
]);

Nếu một API lỗi thì Promise.all() sẽ reject ngay.

2. Promise.allSettled()

Promise.allSettled() đợi tất cả promise hoàn thành và trả về kết quả của từng promise.

Ví dụ

Dashboard gồm:

Widget thời tiết
Widget tin tức
Widget người dùng
const results =
await Promise.allSettled([
    fetch("/weather").then(r => r.json()),
    fetch("/news").then(r => r.json()),
    fetch("/users").then(r => r.json())
]);
results.forEach(result => {

    if (result.status === "fulfilled") {
        console.log(result.value);
    } else {
        console.log(result.reason);
    }
});

Nếu một widget lỗi thì các widget khác vẫn hiển thị bình thường.

3. Promise.race()

Promise.race() trả về kết quả của promise hoàn thành đầu tiên.

Ví dụ Timeout
const timeout = new Promise((_, reject) => {
    setTimeout(() => {
        reject(new Error("Timeout"));
    }, 10000);
});

const response =
await Promise.race([
    fetch("/api/products"),
    timeout
]);

Nếu API mất hơn 10 giây thì timeout sẽ xảy ra trước.

4. Promise.any()

Promise.any() trả về promise đầu tiên thành công.

Ví dụ

Lấy tỷ giá ngoại tệ từ nhiều API khác nhau.

const rates =
await Promise.any([
    fetch("https://api1.com").then(r => r.json()),
    fetch("https://api2.com").then(r => r.json()),
    fetch("https://api3.com").then(r => r.json())
]);

Nếu API1 và API2 lỗi nhưng API3 thành công thì kết quả từ API3 sẽ được sử dụng.

Nếu tất cả API đều lỗi thì Promise.any() sẽ reject với AggregateError.

Kết luận
Promise.all(): Dùng khi tất cả dữ liệu đều bắt buộc phải có.
Promise.allSettled(): Dùng khi các tác vụ độc lập với nhau.
Promise.race(): Dùng cho timeout hoặc chọn kết quả nhanh nhất.
Promise.any(): Dùng khi có nhiều nguồn dự phòng và chỉ cần một nguồn thành công.