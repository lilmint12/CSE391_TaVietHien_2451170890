Câu A1 (5đ) — HTTP & Browser
Đọc chương 01 (01_introduction_html_universe.md), trả lời:

1. Khi bạn gõ https://shopee.vn vào trình duyệt và nhấn Enter, hãy liệt kê đúng thứ tự ít nhất 5 bước xảy ra (từ DNS lookup đến render).
    Bước 1: DNS Lookup (Tra cứu DNS)  
    Request từ laptop → router WiFi → nhà mạng VNPT → hệ thống DNS để tìm địa chỉ IP của shopee.vn.
    Bước 2: TCP Handshake (Thiết lập kết nối TCP)  
    Sau khi có IP, Chrome bắt tay 3 bước với server Shopee (SYN → SYN-ACK → ACK) để mở kênh truyền dữ liệu.
    Bước 3: TLS/SSL Handshake (Kết nối bảo mật HTTPS)  
    Chrome và server Shopee trao đổi chứng chỉ SSL/TLS để mã hóa dữ liệu, đảm bảo an toàn khi truyền thông tin.
    Bước 4: HTTP Request/Response (Gửi và nhận dữ liệu)  
    Chrome gửi HTTP GET request: “Minh muốn xem trang chủ Shopee” → Server Shopee xử lý và trả về HTML, CSS, JS, hình ảnh sản phẩm.
    Bước 5: Rendering (Trình duyệt dựng trang)  
    Chrome nhận response → phân tích HTML, áp dụng CSS, chạy JavaScript → render giao diện Shopee với banner khuyến mãi và sản phẩm nổi bật.

2. Trong DevTools của Chrome, tab Network cho thấy thông tin gì? Hãy mở một trang web bất kỳ, chụp screenshot tab Network và đánh dấu (vẽ mũi tên/khoanh tròn) vào:

Status Code của request đầu tiên
Tổng thời gian load trang
Một request trả về file CSS

ảnh image_A1.png

![alt text](image_A1.png)


Câu A2 (5đ) — Semantic HTML
Đọc chương 04, trả lời: Tại sao trang web dưới đây bị Google đánh giá SEO thấp? Liệt kê ít nhất 4 lỗi semantic và sửa lại.

<div class="header">
    <div class="logo">ShopTLU</div>
    <div class="menu">
        <div><a href="/">Trang chủ</a></div>
        <div><a href="/products">Sản phẩm</a></div>
    </div>
</div>
<div class="main">
    <div class="product">
        <div class="title">iPhone 16 Pro</div>
        <div class="price">25.990.000đ</div>
        <div class="image"><img src="iphone.jpg"></div>
    </div>
</div>
<div class="footer">© 2026 ShopTLU</div>

1. Sử dụng thẻ <div> cho các thành phần cấu trúc chính
2. Thiếu các thẻ tiêu đề (Header)
3. Thiếu thẻ điều hướng(nav)
4. Thiếu thẻ Phần cuối  (footer)

sửa lại:
<header>
    <div class="logo">ShopTLU</div>
    <nav class="menu">
        <div><a href="/">Trang chủ</a></div>
        <div><a href="/products">Sản phẩm</a></div>
    </nav>
</header>
<main>
    <article class="product">
        <div class="title">iPhone 16 Pro</div>
        <div class="price">25.990.000đ</div>
        <figure class="image"><img src="iphone.jpg"></figure>
        <figcaption>iPhone 16 Pro - 25.990.000đ</figcaption>
    </article>
</main>
<footer>© 2026 ShopTLU</footer>

tuan_1_html5/04_visible_part_html.md


Câu A3 (5đ) — Block vs Inline

tuan_1_html5/04_visible_part_html.md

Không chạy code, hãy vẽ tay (hoặc mô tả bằng text art) kết quả hiển thị của đoạn HTML sau. Giải thích tại sao.

<div>Hộp 1</div>
<span>Text A</span>
<span>Text B</span>
<div>Hộp 2</div>
<span>Text C</span>
<strong>Text D</strong>
<div>Hộp 3</div>
Mô tả :
Hộp 1-----------------------
text A text B---------------
Hộp 2-----------------------
text C text D---------------
Hộp 3-----------------------

Câu A4 (5đ) — Table
Đọc chương 05. Giải thích sự khác nhau giữa <thead>, <tbody>, <tfoot>. Tại sao KHÔNG NÊN dùng table để tạo layout trang web? (Ghi rõ ít nhất 3 lý do)
Thẻ 	Vai trò	    ghi chú
<thead>	Header	    Tiêu đề cột
<tbody>	Body	    Dữ liệu chính
<tfoot>	Footer	    Tổng kết
tuan_1_html5/05_tables_hyperlinks.md


- Lý do 1: Sai lệch về mặt Ngữ nghĩa (Semantic Error)
Thẻ <table> được sinh ra chỉ để hiển thị dữ liệu dạng bảng (tabular data). Nếu dùng nó để làm layout, các công cụ tìm kiếm (Google) sẽ hiểu nhầm trang web của bạn là một tập tài liệu dữ liệu khô khan thay vì một trang web có cấu trúc. Điều này gây hại nghiêm trọng cho SEO.

- Lý do 2: Không linh hoạt với thiết kế di động (Responsive)
Bảng có cấu trúc rất cứng nhắc. Việc co giãn một hệ thống bảng phức tạp để hiển thị đẹp trên điện thoại là cực kỳ khó khăn. Trong khi đó, các công cụ hiện đại như Flexbox hay CSS Grid cho phép thay đổi vị trí các phần tử cực kỳ linh hoạt mà không cần sửa mã HTML.

- Lý do 3: Tốc độ tải trang và Hiệu suất render
Trình duyệt thường phải tải xong toàn bộ nội dung bên trong cặp thẻ <table> thì mới bắt đầu tính toán kích thước và hiển thị ra màn hình. Nếu trang web của bạn dài, người dùng sẽ thấy một màn hình trắng trong thời gian đợi bảng tải xong. Ngược lại, layout bằng thẻ <div> kết hợp CSS sẽ giúp nội dung hiện ra ngay khi từng phần được tải về.