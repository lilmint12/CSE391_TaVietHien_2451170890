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