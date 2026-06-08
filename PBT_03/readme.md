### 📂 Thư mục: `PBT_03/README.md`
```markdown
# 📋 PHIẾU BÀI TẬP 03: CSS CORE
## Selectors, Box Model, Inheritance & Cascade

### 👤 THÔNG TIN SINH VIÊN
- **Họ và tên:** [Họ và tên của bạn]
- **Mã số sinh viên (MSSV):** 2451170890
- **Ngành:** Kỹ thuật Phần mềm (KTPM)
- **Lớp:** 66KTPM1

---

### 📁 CẤU TRÚC THƯ MỤC NỘP BÀI
```text
PBT_03/
├── README.md
├── answers.md              # Giải thích độ ưu tiên bộ chọn & Margin Collapse
├── selectors_test.html     # Bài tập kiểm chứng độ ưu tiên CSS hiển thị màu sắc
├── box_model_demo.html     # Bài thực hành so sánh Content-box và Border-box
├── boxmodel.css            # Tệp định dạng CSS chính cho bài làm
└── videos/
    └── pbt_03_boxmodel.mp4 # Video giải thích chi tiết cơ chế Box Model tính toán
📝 TÓM TẮT NỘI DUNG THỰC HIỆN
Phần A — Đọc hiểu: So sánh 3 phương thức nhúng mã CSS (Inline, Internal, External) kèm thứ tự ghi đè; phân tích thứ tự ưu tiên (Specificity Score) và cơ chế chập lề (Margin Collapse).

Bài tập thực hành: Tạo lập song song 2 khối hộp <div> có chung thông số kích thước, đường viền và khoảng đệm nhưng cấu hình thuộc tính box-sizing khác biệt nhằm chứng minh trực quan sự biến đổi size vật lý trên trình duyệt web.

🎬 CHECKLIST VIDEO MINH HỌA (OBS STUDIO)
[x] Quay video giới thiệu bản thân đầu đủ kèm webcam cá nhân rõ ràng.

[x] Thực hiện tính toán bằng miệng (Mental Calculation) diện tích chiếm dụng thực tế của 2 hộp trước khi chạy chương trình.

[x] Kiểm tra phần tử qua DevTools mở tab Computed chỉ vào sơ đồ hình học (Box Model diagram) xác thực kích cỡ pixel thực tế.

[x] Phân tích lý do tại sao quy tắc Reset * { box-sizing: border-box; } luôn luôn xuất hiện ở dòng đầu tiên của mọi dự án thực tế.

[x] Viết code thực hiện trực quan hóa hiện tượng Margin Collapse khi xếp chồng 2 khối div liên tiếp.