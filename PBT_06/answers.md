## 🅱️ TRACK A — BOOTSTRAP 5

### PHẦN A — ĐỌC HIỂU (20 điểm)

#### Câu A1 (10đ) — Grid System

Đọc tài liệu Grid System. Không chạy code, vẽ layout cho HTML sau ở 3 kích thước:

```html
<div class="container">
    <div class="row">
        <div class="col-12 col-md-6 col-lg-3">Box 1</div>
        <div class="col-12 col-md-6 col-lg-3">Box 2</div>
        <div class="col-12 col-md-6 col-lg-3">Box 3</div>
        <div class="col-12 col-md-6 col-lg-3">Box 4</div>
    </div>
</div>
```

| Kích thước | < 768px | 768px - 991px | ≥ 992px |
|------------|---------|---------------|---------|
| Số cột |1  |2  |4  |
| Box layout |4 box xếp thành 1 cột  | 4 box xếp thành 2 cột  | xếp thành 4 cột  |

**Câu hỏi thêm:** `col-md-6` nghĩa là gì? Tại sao không cần viết `col-sm-12`?

col md 6 la colum của row breakpoint là >=768px chiếm 6/12 của hàng

không cần viết col-sm-12 vì đã đặt col default là chiếm 12 nên việc đặt thêm breakpoint là không cần thiết

#### Câu A2 (10đ) — Utilities & Components

1. Giải thích class `d-none d-md-block`. Element này hiển thị khi nào, ẩn khi nào?
ẩn khi device-width <768px và hiển thị khi >=768px
2. Liệt kê 5 spacing utilities (margin/padding) và giải thích. VD: `mt-3`, `px-4`, `mb-auto`
mt-3 : khoảng cách giữa các thực thể 3px
px-4 : khoảng trống từ viền vào content ở trái phải là 4px
mb-auto : margin bottom tự động chỉnh
border-2:độ dày đường viền 2px
ms-5:khoảng cách ngoài trái độ lớn 5 (rem)
3. Sự khác nhau giữa `.container`, `.container-fluid`, `.container-md`?
 Container: max-width + center + padding 
<div class="container">
     Tự động căn giữa, có max-width theo breakpoint 
</div>

 Container-fluid: luôn full width
<div class="container-fluid">
    Full width mọi kích thước — dùng cho hero/footer/banner 
</div>

Container theo breakpoint (>=768px) 
<div class="container-md">
     Full width dưới md, có max-width từ md trở lên
</div>






### PHẦN C — PHÂN TÍCH (20 điểm)

#### Câu C1 (10đ) — Tùy biến Bootstrap

1. Bạn muốn đổi màu `$primary` từ xanh mặc định sang `#E63946`. Giải thích quy trình (cần công cụ gì, modify file nào).
2. Tại sao KHÔNG nên override trực tiếp `.btn-primary { background: red; }` mà nên dùng SASS variables?

#### Câu C2 (10đ) — So sánh

Viết CSS thuần (từ PBT trước) để tạo 1 navbar responsive + 1 product card. So sánh với Bootstrap version:
- Số dòng CSS cần viết
- Thời gian phát triển
- Khả năng tùy biến  
- Khi nào NÊN và KHÔNG NÊN dùng Bootstrap?

---

