Câu C1 (10đ) — Thiết kế cấu trúc
Bạn được giao thiết kế cấu trúc HTML cho trang chi tiết sản phẩm (giống trang sản phẩm Shopee/Tiki). Trang bao gồm:

Header + Navigation
Breadcrumb (Trang chủ > Điện thoại > iPhone 16)
Khu vực ảnh sản phẩm (5 ảnh)
Thông tin sản phẩm (tên, giá, đánh giá sao, mô tả)
Bảng thông số kỹ thuật
Khu vực đánh giá/bình luận
Sidebar: Sản phẩm tương tự
Footer
Yêu cầu: Viết chỉ phần cấu trúc HTML (không cần nội dung thật, chỉ cần đúng thẻ và nesting). Mỗi thẻ phải có comment giải thích tại sao bạn chọn thẻ đó.

Header + Navigation
<header>
    <nav>
        <ul>
            <li><a href="/">Trang chủ</a></li>
        </ul>
    </nav>
</header>
    Lý do : chọn thẻ <header> để định danh nội dung ở đầu trang,
            chọn thẻ <nav> để định danh là nội dung điều hướng, liên kết ,
            chọn thẻ <ul> để định danh là danh sách không có thứ tự gồm các thành phần bằng thẻ <li>.

Breadcrumb (Trang chủ > Điện thoại > iPhone 16)
<nav aria-label="Breadcrumb">
        <ol>
            <li><a href="#">Trang chủ</a></li>
            <li><a href="#">Điện thoại</a></li>
            <li>iPhone 16</li>
        </ol>
</nav>
        Chọn thẻ <nav> để định danh đây là khu vực chứa các liên kết điều hướng vị trí.
        Chọn thẻ <ol> để định danh là danh sách có thứ tự, vì Breadcrumb thể hiện cấp bậc từ lớn đến nhỏ theo một trình tự nhất định.
        Chọn thẻ <li> để đại diện cho từng cấp bậc trong sơ đồ đường dẫn.

Khu vực ảnh sản phẩm (5 ảnh)
<section calss ="products">
    <figure>
        <img src ="p1.png" alt="mota">
        <img src ="p2.png" alt="mota">
        <img src ="p3.png" alt="mota">
        <img src ="p4.png" alt="mota">        
        <img src ="p5.png" alt="mota">
        <figcaption>Iphone 16</figcaption>
    <figure>
</section>
    Chọn thẻ <section> để định danh một vùng nội dung riêng biệt chứa các tài liệu hình ảnh của sản phẩm.
    Chọn thẻ <figure> để nhóm các tấm ảnh có liên quan chặt chẽ với nhau thành một khối minh họa.
    Chọn thẻ <img> để nhúng các tệp ảnh vào trang web.
    Chọn thẻ <figcaption> để cung cấp lời chú thích hoặc tiêu đề cho nhóm hình ảnh nằm trong figure.

Thông tin sản phẩm (tên, giá, đánh giá sao, mô tả)
<article class="product-info">
                <h2>Tên sản phẩm: iPhone 16</h2>
                <p class="price">Giá: 22.990.000đ</p>
                <div class="rating">Đánh giá: 5/5 sao</div>
                <p class="description">Mô tả tóm tắt sản phẩm...</p>
</article>
    Chọn thẻ <article> để định danh đây là một khối nội dung độc lập, có ý nghĩa trọn vẹn (thông tin chính của sản phẩm) mà không cần phụ thuộc vào các phần khác.
    Chọn các thẻ <h2>, <p>, <div> để phân cấp thông tin từ tiêu đề tên sản phẩm đến các chi tiết giá và mô tả.
    Bảng thông số kỹ thuật
<section class="product-specs">
    <h3>Thông số kỹ thuật</h3>
    <table>
        <thead>
            <tr>
                <th>Đặc tính</th>
                <th>Thông số</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Màn hình</td>
                <td>6.1 inch, OLED</td>
            </tr>
            <tr>
                <td>Chip</td>
                <td>A18 Bionic</td>
            </tr>
        </tbody>
    </table>
</section>
    Chọn thẻ <section> để tách biệt khu vực thông số kỹ thuật thành một phân đoạn riêng.
    Chọn thẻ <table> để định danh dữ liệu được trình bày dưới dạng bảng (hàng và cột).
    Chọn thẻ <thead> và <tbody> để phân chia rõ ràng giữa phần tiêu đề bảng và phần nội dung dữ liệu, giúp trình duyệt tối ưu hóa hiển thị.

Khu vực đánh giá/bình luận
<section class="customer-reviews">
    <h3>Đánh giá từ khách hàng</h3>
    <article>
        <h4>Nguyễn Văn A</h4>
        <p>Máy dùng rất mượt, giao hàng nhanh.</p>
    </article>
</section>


Sidebar: Sản phẩm tương tự
<aside>
        <h3>Sản phẩm tương tự</h3>
        <ul>
            <li>iPhone 15</li>
            <li>iPhone 16 Pro</li>
            <li>Samsung S24</li>
        </ul>
</aside>
    Chọn thẻ <aside> để định danh đây là nội dung phụ, liên quan gián tiếp đến sản phẩm chính đang xem (thường đặt ở cột bên cạnh).
    Chọn thẻ <ul> để liệt kê danh sách các sản phẩm gợi ý một cách trực quan.

Footer
<footer>
    <p>&copy; 2026 - Cửa hàng điện thoại của Hiên</p>
</footer>
    Chọn thẻ <footer> để định danh nội dung ở cuối trang, chứa các thông tin về bản quyền, chính sách hoặc thông tin liên hệ của cửa hàng.