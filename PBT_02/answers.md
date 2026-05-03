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

PHẦN C — PHÂN TÍCH & SUY LUẬN (20 điểm)


Câu C1 (10đ) — Debug Form
Form dưới đây có 8 lỗi về validation, accessibility, và best practices. Tìm và sửa tất cả.

    <form>
        Tên: <input type="text">
        
        <input type="email" placeholder="Email của bạn">
        
        <input type="password" placeholder="Mật khẩu">
        <input type="password" placeholder="Nhập lại mật khẩu">
        
        Phone: <input type="text" value="0901234567">
        
        <select>
            <option>Hà Nội</option>
            <option>TP.HCM</option>
        </select>
        
        <label>
            Tôi đồng ý điều khoản
        </label>
        
        <input type="submit" value="Gửi">
    </form>

    Lỗi 1: Dòng 2 — Input "Tên" thiếu thẻ <label> liên kết qua id và thiếu thuộc tính name.

    Sửa: <label for="name">Tên:</label> <input type="text" id="name" name="name" required>

    Lỗi 2: Dòng 4 — Input "Email" thiếu thẻ <label> và thuộc tính required.

    Sửa: <label for="email">Email:</label> <input type="email" id="email" name="email" placeholder="Email của bạn" required>

    Lỗi 3: Dòng 6 & 7 — Các ô "Mật khẩu" thiếu thẻ <label> và các thuộc tính ràng buộc độ mạnh mật khẩu.

    Sửa: <label for="pwd">Mật khẩu:</label> <input type="password" id="pwd" name="password" minlength="8" required>

    Lỗi 4: Dòng 9 — Input "Phone" dùng sai type="text" và thiếu thuộc tính pattern.

    Sửa: <label for="phone">Phone:</label> <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required>

    Lỗi 5: Dòng 11 — Thẻ <select> thiếu thuộc tính name và thiếu một tùy chọn mặc định (placeholder option).

    Sửa: <select name="city" id="city" required> <option value="" disabled selected>Chọn thành phố</option> ... </select>

    Lỗi 6: Dòng 16 — Thẻ <label> cho điều khoản thiếu thẻ <input type="checkbox"> bên trong hoặc liên kết ngoài.

    Sửa: <input type="checkbox" id="tos" name="tos" required> <label for="tos">Tôi đồng ý điều khoản</label>

    Lỗi 7: Toàn bộ Form — Thiếu thuộc tính action và method trong thẻ <form>.

    Sửa: <form action="/submit-path" method="POST">

    Lỗi 8: Dòng 19 — Nút Submit nên dùng thẻ <button type="submit"> để dễ tùy biến và hỗ trợ tốt hơn cho trợ năng.

    Sửa: <button type="submit">Gửi</button>

Câu C2 (10đ) — Thiết kế chiến lược Validation
Bạn xây dựng form đăng ký cho ngân hàng số. Yêu cầu:

CMND/CCCD: đúng 12 chữ số
Số tài khoản: 10-15 chữ số
Email: bắt buộc, đúng format
PIN: đúng 6 chữ số, KHÔNG hiển thị
Câu hỏi:

Viết pattern regex cho CMND/CCCD và Số tài khoản
CMND/CCCD (Đúng 12 chữ số):
    pattern="\d{12}" hoặc pattern="[0-9]{12}"

    Số tài khoản (Từ 10 đến 15 chữ số):
    pattern="\d{10,15}"
Giải thích: HTML5 validation đủ an toàn cho ứng dụng ngân hàng chưa? Tại sao?
    HTML5 validation chỉ là UX convenience — dễ dàng bypass bằng browser DevTools. Luôn phải validate ở server
Liệt kê 3 loại validation mà HTML5 KHÔNG THỂ làm được (phải dùng JavaScript)
    Kiểm tra sự tồn tại (Availability Check): Ví dụ: Kiểm tra xem Email hoặc Số tài khoản đã tồn tại trong cơ sở dữ liệu hay chưa ngay khi người dùng đang nhập.

    So khớp dữ liệu (Matching Validation): Ví dụ: Kiểm tra xem ô "Nhập lại mật khẩu" có trùng khớp hoàn toàn với ô "Mật khẩu" hay không.

    Logic phụ thuộc (Dependent Validation): Ví dụ: Nếu người dùng chọn phương thức nhận mã OTP là "Email" thì mới bắt buộc hiện và validate ô nhập Email, còn chọn "SMS" thì ẩn đi.
Nêu 2 rủi ro bảo mật nếu chỉ validate trên Frontend mà không validate Backend
    Tấn công tiêm nhiễm dữ liệu (Injection Attacks): Kẻ tấn công có thể sử dụng các công cụ như Postman hoặc cURL để gửi trực tiếp dữ liệu độc hại (SQL Injection, XSS) tới Server, bỏ qua hoàn toàn lớp bảo vệ của trình duyệt. Điều này dẫn đến nguy cơ lộ lọt dữ liệu hoặc hỏng hóc hệ thống.

    Sai lệch dữ liệu hệ thống (Data Integrity Violation): Nếu không có Backend validation, những dữ liệu sai định dạng hoặc dữ liệu rác (ví dụ: số tài khoản là chữ cái) sẽ được lưu vào cơ sở dữ liệu. Điều này gây lỗi nghiêm trọng cho các tiến trình xử lý giao dịch, tính toán tài chính và đối soát của ngân hàng.