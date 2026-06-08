### 📂 Thư mục: `PBT_10/README.md`
```markdown
# 📋 PHIẾU BÀI TẬP 10: ASYNC JAVASCRIPT & API INTEGRATION
## Lập trình bất đồng bộ & Tích hợp kết nối dữ liệu API từ máy chủ thực tế

### 👤 THÔNG TIN SINH VIÊN
- **Họ và tên:** [Họ và tên của bạn]
- **Mã số sinh viên (MSSV):** 2451170890
- **Ngành:** Kỹ thuật Phần mềm (KTPM)
- **Lớp:** 66KTPM1

---

### 📁 CẤU TRÚC THƯ MỤC NỘP BÀI
```text
PBT_10/
├── README.md
├── answers.md              # Phân tích thứ tự in ra của Event Loop & cơ chế luồng hàng đợi
├── weather_app/            # Ứng dụng dự báo thời tiết gọi API thời gian thực (Mini-App 1)
│   ├── index.html
│   ├── style.css
│   └── app.js
├── user_directory/         # Ứng dụng danh bạ hoặc bảng tin ảnh tải chậm tự động (Mini-App 2)
│   ├── index.html
│   ├── style.css
│   └── app.js
└── videos/
    └── pbt_10_async_api.mp4# Video thực hiện lập trình bất đồng bộ & kịch bản ngắt mạng lỗi
📝 TÓM TẮT NỘI DUNG THỰC HIỆN
Phần A — Đọc hiểu: Giải mã chi tiết thứ tự đầu ra của chuỗi lệnh đan xen đồng bộ và bất đồng bộ bằng mô hình kiến trúc Vòng lặp sự kiện (Event Loop), Hàng đợi vi nhiệm vụ (Microtask Queue) và Hàng đợi vĩ nhiệm vụ (Macrotask Queue); phân tích chức năng từ khóa cú pháp async/await.

Bài B1 (Weather App): Xây dựng ứng dụng tra cứu thời tiết đô thị kết nối nạp dữ liệu từ máy chủ API thật, xử lý lưu trữ ghi nhớ lịch sử kiếm tìm của người dùng vào bộ nhớ trình duyệt LocalStorage.

Bài B2 (User/Photo Feed): Xây dựng hệ thống lưới hiển thị hình ảnh/người dùng responsive đa màn hình, ứng dụng công nghệ theo dõi vùng nhìn IntersectionObserver tối ưu hiệu năng trang web thông qua cơ chế tải ảnh khi cuộn tới đâu tải tới đó (Lazy loading images) và cuộn vô hạn (Infinite Scroll).