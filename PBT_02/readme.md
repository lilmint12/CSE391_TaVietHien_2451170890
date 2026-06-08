---

### 📂 Thư mục: `PBT_02/README.md`
```markdown
# 📋 PHIẾU BÀI TẬP 02: HTML5 FORMS & MEDIA
## Biểu mẫu, Validation & Đa phương tiện

### 👤 THÔNG TIN SINH VIÊN
- **Họ và tên:** [Họ và tên của bạn]
- **Mã số sinh viên (MSSV):** 2451170890
- **Ngành:** Kỹ thuật Phần mềm (KTPM)
- **Lớp:** 66KTPM1

---

### 📁 CẤU TRÚC THƯ MỤC NỘP BÀI
```text
PBT_02/
├── README.md
├── answers.md              # Trả lời lý thuyết về Input Types & Attributes
├── register.html           # Bài B1: Biểu mẫu đăng ký thành viên E-Commerce
├── media_showcase.html     # Bài B2: Trang trưng bày đa phương tiện
└── videos/
    └── pbt_02_validation.mp4   # Video demo các kịch bản Validation biểu mẫu
📝 TÓM TẮT NỘI DUNG THỰC HIỆN
Phần A — Đọc hiểu: Tổng hợp 10 loại dữ liệu đầu vào (input type), cơ chế tự động validate ứng dụng thực tiễn e-commerce; phân tích hành vi nộp form tương ứng với thuộc tính validate; chuẩn hóa thuộc tính alt cho hình ảnh.

Bài B1: Thiết kế form đăng ký tài khoản đầy đủ các trường dữ liệu kết hợp biểu thức chính quy (pattern regex mã hóa độ bảo mật mật khẩu).

Bài B2: Nhúng phần tử Multimedia đa dạng bao gồm ảnh tối ưu, thẻ <video> cục bộ có ảnh poster dự phòng và iframe nhúng YouTube video trực tuyến.

🎬 CHECKLIST VIDEO MINH HỌA (OBS STUDIO)
[x] Giới thiệu thông tin sinh viên có hiển thị Webcam cá nhân góc màn hình.

[x] Vừa gõ mã nguồn vừa giải thích công dụng của thuộc tính <fieldset> và <legend> đối với tính năng hỗ trợ tiếp cận (Accessibility).

[x] Thực hiện click vào thẻ nhãn <label for="..."> để demo tính năng tự động di chuyển con trỏ chuột tập trung (focus) vào thẻ input liên kết.

[x] Demo kiểm thử (Testing) thất bại ít nhất 3 kịch bản nhập sai dữ liệu để trình duyệt hiển thị thông báo lỗi tự động.

[x] Diễn giải chi tiết chuỗi biểu thức chính quy Regex: (?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,} kiểm soát độ mạnh của mật khẩu.