Câu A1 (5đ) — 3 Cách nhúng CSS
Đọc chương 08. Liệt kê 3 cách nhúng CSS vào HTML (inline, internal, external). Mỗi cách:

Viết 1 ví dụ code
Ưu điểm và nhược điểm
Khi nào nên dùng
Câu hỏi thêm: Nếu cùng 1 element có cả 3 cách CSS đồng thời áp dụng, cách nào "thắng"? Giải thích tại sao.

    - inline:
    <h1 style="font:100px"></h1>
    chỉnh sửa thuộc tính style trực tiếp trên element.
    Ưu điểm: chỉnh sửa cá nhân thuộc tính tốt
    Nhược điểm: mất thời gian chỉnh sửa từng element để phù hợp,Khi muốn chỉnh sửa phải vào tận dòng đó và chỉnh sửa(nếu file html tận nhiều dòng dòng) làm code dài dòng không tối ưu.
    -internal:
    Chỉnh sửa bằng thẻ <style> ở thẻ <head>
    <head>
        <style>
            img
            {
                width:60%;
            }
        </style>
    </head>
    Ưu điểm: chỉnh sửa  khởi tạo thuôc tính mặc định cho các thẻ ở trang đơn, chỉnh sửa ở đầu file dễ quan sát. 
    Nhược điểm:
    Tốn thời gian thay đổi thuộc tính của các trang, chỉ áp dụng được cho 1 trang.
    - external:
    tạo một file css riêng.
    gọi ở trong head ở trang :
    " <link rel="stylesheet" href="tên_file.css"> " 
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    ưu điểm:
    tạo fie chuyên biệt để style cho các thẻ và gọi bằng liên kết ở thẻ head html.
    tái sử dụng được ở nhiều trang .
    Dễ dàng bảo trì thẻ.
    tối ưu tốc độ, bộ nhớ cache lưu file css vào bộ nhớ đệm lúc lần load trang sau nhanh hơn.
    Giúp code sạch.
    Nhược điểm:
    giao diện bị lỗi nếu mất liên kết file

    Nếu cùng 1 element có cả 3 cách CSS đồng thời áp dụng, cách inline thắng vì theo mức độ ưu tiên thì external,internal->inline.external và internal phụ thuộc vào thứ tự đặt <link> và <style>

Câu A2 (8đ) — CSS Selectors — Dự đoán kết quả

    1. h1                           → Chọn: h1
    2. .price                       → Chọn: 
    thẻ nào có class = price
    3. #app header                  → Chọn: 
    <header class="top-bar dark">
    4. nav a:first-child             → Chọn: 
    <a href="/" class="active">Home</a>
    5. .product.featured h2         → Chọn: 
    <h2>MacBook Pro</h2>
    6. article > p                  → Chọn: 
    <p class="price">25.990.000đ</p>
    <p>Mô tả sản phẩm...</p>
    <p class="price">45.990.000đ</p>
    <p>Mô tả sản phẩm...</p>
    7. a[href="/"]                  → Chọn: 
    <a href="/" class="active">Home</a>
    8. .top-bar.dark h1              → Chọn: 
    <h1>ShopTLU</h1>

[alt text](/PBT_03/screenshots/a2.png)

Câu A3 (7đ) — Box Model — Tính toán kích thước
Đọc chương 11 (Box Model). Tính kích thước thực tế (chiều rộng thực tế render trên browser) cho mỗi trường hợp sau:

/* Trường hợp 1: content-box (mặc định) */
.box-1 {
    width: 400px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
}
→ Chiều rộng hiển thị = 450px
→ Không gian chiếm trên trang = 470px

/* Trường hợp 2: border-box */
.box-2 {
    box-sizing: border-box;
    width: 400px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
}
→ Chiều rộng hiển thị = 400px
→ Kích thước content thực tế = 350
→ Không gian chiếm trên trang = 420

/* Trường hợp 3: Margin collapse */
.box-a { margin-bottom: 25px; }
.box-b { margin-top: 40px; }
→ Khoảng cách giữa box-a và box-b = 40px
→ Giải thích tại sao KHÔNG PHẢI 65px
vì thuộc trường hợp collapse margin không có border,padding và thuộc vị trí không phải trái phỉa
Nâng cao: Nếu .box-a có margin-bottom: -10px và .box-b có margin-top: 40px, khoảng cách = 30px

Câu A4 (5đ) — Specificity (Độ ưu tiên)

    Cho các CSS rules sau cùng target 1 element 
    <p class="price" id="main-price">:

    p { color: black; }                    /* Rule A */
    .price { color: blue; }               /* Rule B */
    #main-price { color: red; }           /* Rule C */
    p.price { color: green; }             /* Rule D */
    Tính specificity score (a, b, c) cho mỗi rule
    Rule A:(0,0,1)
    Rule B:(0,1,0)
    Rule C:(1,0,0)
    Rule D:(0,1,1)
    Element sẽ có màu gì? Giải thích
    Nếu thêm 
    <p class="price" id="main-price"style="color: orange;">, element có màu gì?
    Nếu Rule A thêm !important, element có màu gì? Tại sao?
    
Bài B2 (20đ) — Box Model Lab
    Hộp 1 (content-box): chiều rộng thực tế =  350px (đo từ DevTools)
    Hộp 2 (border-box): chiều rộng thực tế =  300px (đo từ DevTools)
    Giải thích sự khác biệt: 
    -content box  : nở ra kiểm soát từng padding,margin,width,border nhưng phải thủ công.
    -border box : giới hạn ở ngoài, dễ kiểm soát
Bài B3 (15đ) — Specificity Battle
[!alttext](/PBT_03/screenshots/b3.png)
    p { color: wheat; }                          /* Specificity: 0,0,1 */
    .text { color: white; }                      /* Specificity: 0,1,0 */
    #demo{color: #bf4040;}                      /*Specificity: 1,0,0*/
    .highlight{color: aqua;}                    /*Specificity: 0,1,0*/
    .text.highlight{color: aqua;}               /*Specificity: 0,2,0*/
    p.text{color: green;}                    /* Specificity: 0,1,1 */
    p.text#demo{color: pink;}                    /* Specificity: 1,1,1 */
    p#demo{color: aquamarine;}                    /* Specificity: 1,1,0 */
    p.highlight#demo{color: black;}                    /* Specificity: 1,1,1 */
    p.text.highlight#demo{color: blue;}                   /* Specificity: 1,2,1*/
    
    element cuối cùng hiển thị là màu blue, vì có specificity cao nhất (1,2,1)

    thay đổi thứ tự rule không thay đổi vì trình duyệt ưu tiên css theo 3 bước nguồn gốc-> độ cụ thể-> thứ tự xuất hiện. vì 10 cai trên có độ cụ thệ khác nhau nên sẽ lấy rule có mức độ cao hơn.

Câu C1 (10đ) — Debug CSS Layout
    1. chiều rộng thực tế của sidebar 342px, content 722px
    2. layout bị vỡ vì sidebar và content có tổng độ rộng là 1064 px trong khi layout container có độ rộng là 960px nên content bị đẩy xuống dưới
    3.
    cách 1 (dùng border-box) Thiết lập thuộc tính box-sizing:border-box cho cả 3 layout trên điều này làm cho độ dài layout giới hạn đúng bằng width
    cách 2 : tính thủ công lại muốn được độ dài tương ứng với width thì width = width-(padding+border)*2
Câu C2 (10đ) — Cascade Puzzle

    <body>
        <div class="container">
            <div class="card" id="featured">
                <h2 class="title highlight">Sản phẩm A</h2>
                <p>Mô tả sản phẩm</p>
            </div>
            <div class="card">
                <h2 class="title">Sản phẩm B</h2>
                <p class="highlight">Mô tả sản phẩm B</p>
            </div>
        </div>
    </body>
cascade
    body { font-size: 16px; color: #333; }  (0,0,1)
    .container { font-size: 14px; }           (0,1,0)
    .card { color: blue; }                    (0,1,0)
    .card .title { font-size: 20px; }         (0,2,0)
    .card p { color: inherit; }               (0,1,1)
    #featured .title { color: red; }          (1,1,0)
    .highlight { color: green !important; }   (0,1,0) max
    ------------------------------
    1."Sản phẩm A" (h2) có font-size = 20 và color =  green
    cascade : color=h2(class = highlight) inheritance =max (!important) -> color=green
                    font-size = .card.title inherittance=(0,2,0) =20px
    2."Mô tả sản phẩm" (p trong card featured) có color = blue
    ban đầu .card p có color =inherit nghĩa là màu phụ thuộc vào phần tử cha nên 
    xem phàn tử cha là div(class =card) có màu blue
    3."Sản phẩm B" (h2) có font-size = 20px và color = blue
    cascade : H2 này không có class highlight, cũng không nằm trong #featured. Vì nó không có rule nào quy định màu sắc trực tiếp, nó sẽ kế thừa (inheritance) màu từ cha của nó là .card (đang có màu blue).

    4."Mô tả sản phẩm B" (p.highlight) có color = green
        cascade : color=h2(class = highlight) inheritance =max (!important) -> color=green