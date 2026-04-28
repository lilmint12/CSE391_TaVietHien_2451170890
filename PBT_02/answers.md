Câu A1 (5đ) — Input Types
Liệt kê 10 input types khác nhau trong HTML5, cho mỗi type:

Giao diện hiển thị (mô tả bằng lời)
Validation tự động (nếu có)
Use case cụ thể trong trang E-Commerce
    1. type="email" → Ô nhập text, tự kiểm tra có @ → Dùng cho form đăng ký
    2. type="text" → Ô nhập text, không có validation → Dùng cho form nhập thông tin địa chỉ, ghi chú 
    3. type="password" → Ô nhập text các kí tự bị ẩn đi, có minlength, pattern → Dùng cho form nhập mật khẩu 
    4. type="number" → Ô nhập số lượng, Chỉ cho phép nhập số; có thể giới hạn bởi thuộc tính min, max, và step → Dùng cho form nhập số lượng 
    5. type="tel" → Ô nhập số điện thoại , Không tự động kiểm tra định dạng (thường dùng kèm pattern cho từng quốc gia) → Dùng cho form nhập số điện thoại
    7. type="date" → date picker, Đảm bảo dữ liệu đúng định dạng ngày tháng (YYYY-MM-DD). → Dùng cho form nhập thời gian ngày 
    8. type="time" → time picker, Đảm bảo dữ liệu đúng định dạng thời gian. → Dùng cho form nhập thời gian
    9. type="color" → color picker, Đảm bảo dữ liệu đúng định dạng rgb. → Dùng cho form nhập màu
    10. type="checkbox" → hộp checkbock, Đảm bảo dữ liệu đúng định dạng true/false. → Dùng cho form chọn có hoặc không
Câu A2 (5đ) — Validation Attributes
Đọc chương 07. Không chạy code, hãy dự đoán điều gì xảy ra khi user bấm Submit cho mỗi trường hợp sau. Giải thích TẠI SAO.
    <!-- Trường hợp 1 -->

    <input type="text" required value="">   <!-- User để trống -->
    Báo message box yêu cầu nhập đầy đủ
    <!-- Trường hợp 2 -->
    <input type="email" value="abc">        <!-- User gõ "abc" -->
    Báo message box yêu cầu nhập phần @ ở sau
    <!-- Trường hợp 3 -->
    <input type="number" min="1" max="10" value="15"> <!-- User gõ 15 -->
    Thông báo nhập value <= 10 và >=1
    <!-- Trường hợp 4 -->
    <input type="text" pattern="[0-9]{10}" value="abc123"> <!-- User gõ "abc123" -->
    Thông báo nhập value không đúng chỉ nhập được kí tự số và có độ dài là 10
    <!-- Trường hợp 5 -->
    <input type="password" minlength="8" value="123">  <!-- User gõ "123" -->
    Thông báo nhập value phải ít nhất 8 kí tự
Câu A3 (5đ) — Accessibility
Đọc phần Accessibility trong chương 07. Giải thích:

    Tại sao <label for="email"> quan trọng cho người dùng screen reader?
    tại vì dùng cái đó giúp cho SEO và screen reader đọc hiểu nội dung được viết trong thẻ label là dùng cho nhập email 
    Khi nào dùng <fieldset> + <legend>? Cho ví dụ cụ thể.
    
    <fieldset>: Tạo ra một khung bao quanh các phần tử liên quan (mặc định sẽ có một đường viền mỏng).
    <legend>: Đóng vai trò là "tiêu đề" của cái khung đó. Nó sẽ nằm đè lên đường viền của <fieldset>.
    
    aria-label dùng khi nào? Tại sao KHÔNG nên dùng aria-label khi đã có <label>
    aria-label dùng khi muốn cung cấp nhãn riêng cho phần tử cần cung cấp giúp cho trình đọc màn hình hiểu đó là phần gì

Câu A4 (5đ) — Media

    Giải thích thuộc tính loading="lazy" trên thẻ <img>. Nó cải thiện gì? Khi nào KHÔNG nên dùng?
        Thuộc tính loading lazy Tải ảnh khi user scroll đến → trang load nhanh hơn. Không nên dùng khi dùng ảnh ở đầu trang web,logo ảnh đầu tiên mà user thấy làm ảnh xuất hiện chậm hơn bình thường
    Tại sao nên cung cấp nhiều <source> trong thẻ <video>? Liệt kê ít nhất 3 format video web phổ biến.
        tại vì trong thẻ video nếu một trong các nguồn mà trình duyệt  không thể truy cập được thì còn nguồn khác dự phòng để truy cập, tối ưu hóa khả năng truy cập cho từng loại mạng .
        3 format video web phổ biến là:
         -MP4 (H.264)
         -WebM (VP8/VP9)
         -Ogg (Theora)

    Thuộc tính alt trên <img> dùng để làm gì? Viết alt tốt cho 3 trường hợp:
    Ảnh sản phẩm iPhone 16
    Ảnh trang trí (decorative)
    Ảnh biểu đồ doanh thu Q1/2026
        Thuộc tính alt trên <img> dùng để mô tả hình ảnh cho trình đọc màn hình, và ghi lên màn hình nội dung nếu ảnh đó lỗi
        <img src="product.jpg" alt="Ảnh sản phẩm iPhone 16">
        <img src="product.jpg" alt="Ảnh trang trí (decorative)">
        <img src="product.jpg" alt="Ảnh biểu đồ doanh thu Q1/2026">

Câu A5 (5đ) — So sánh <figure> vs <img>

    <!-- Cách 1 -->
    <img src="product.jpg" alt="iPhone">
        Đặc điểm: Chỉ hiển thị hình ảnh, không có phần văn bản đi kèm để giải thích trực tiếp cho ảnh đó.
        Khi nào dùng: Khi hình ảnh chỉ mang tính chất minh họa bổ trợ, trang trí, hoặc là một phần của luồng văn bản mà không cần chú thích tách biệt.
    <!-- Cách 2 -->
    <figure>
        <img src="product.jpg" alt="iPhone 16 Pro Max 256GB Titan">
        <figcaption>iPhone 16 Pro Max — 25.990.000đ</figcaption>
    </figure>
    Đặc điểm: Nhóm hình ảnh và phần chú thích (<figcaption>) thành một khối nội dung độc lập.
    Ý nghĩa ngữ nghĩa (Semantic): Thông báo cho trình duyệt và bộ máy tìm kiếm (SEO) rằng: "Đây là một đơn vị nội dung quan trọng, và phần chữ bên dưới chính là mô tả chính xác cho hình ảnh này".

    Khi nào dùng: Khi hình ảnh cần một tiêu đề hoặc chú thích đi kèm để người dùng hiểu rõ thông tin chi tiết (ví dụ: tên sản phẩm + giá tiền).