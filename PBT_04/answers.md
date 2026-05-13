
### Câu A1 (10đ) — 5 Loại Positioning

Đọc chương 12. Điền bảng sau mà **KHÔNG** tra Google:

| Position | Vẫn chiếm chỗ trong flow? | Tham chiếu vị trí | Cuộn theo trang? | Use case |
|----------|---------------------------|-------------------|------------------|----------|
| `static` | có                        | mặc định          | có               | mặc định cho phần tử |
|`relative`| có                        | tham chiếu vị trí ban đầu của nó | có| làm điểm tọa độ cho phần tử con|
|`absolute`| không bay ra khỏi flow|| bám vào cha relative gần nhất|Đặt icon, label hoặc tooltip đè lên một khung hình/nút.|
| `fixed` | không, bay ra khỏi ngoài flow | khung trình duyệt viewport | không | Đặt icon, label hoặc tooltip đè lên một khung hình/nút. |
| `sticky` | có | phần tử cha hoặc khung trình duyệt | Có (cho đến khi chạm ngưỡng) |header của bảng hoặc thanh menu luôn dính ở trên cùng khi cuộn.|
Câu hỏi thêm: Khi nào absolute tham chiếu body? Khi nào tham chiếu parent? Giải thích khái niệm "nearest positioned ancestor".
absolute tham chiếu vào body khi trong html không có relative cha. Trong CSS, khái niệm "nearest positioned ancestor" (tổ tiên được định vị gần nhất) là một quy tắc quan trọng để xác định điểm mốc tọa độ khi bạn sử dụng thuộc tính position: absolute.

### Câu A2 (10đ) — Flexbox vs Grid

Không chạy code, dự đoán layout cho mỗi trường hợp. Vẽ sơ đồ bố cục (text art hoặc vẽ tay chụp ảnh).

/* Trường hợp 1 */
.container { display: flex; }
.item { flex: 1; }
/* 4 items → Bố cục = ??? */

item | item | item | item

vì item có flex chỉ số là một tức mỗi thg đều có tỉ lệ chiếm không gian bằng nhau và lấp đầy container

/* Trường hợp 2 */
.container { display: flex; flex-wrap: wrap; }
.item { width: 45%; margin: 2.5%; }
/* 6 items → Bố cục = ??? (mấy hàng, mấy cột?) */
item | item
item | item
item | item
thuộc tính flex-wrap : wrap cho phép phần tử con nhày xuống hàng mới khi bị đầy
mỗi item chiếm 50% view port nên một dòng chứa được  2 item
/* Trường hợp 3 */
.container { display: flex; justify-content: space-between; align-items: center; }
/* 3 items → Bố cục = ??? */

justify-content: space-between căng chỉnh theo trục ngang tâm của các item nằm trên đường trục ngang của container xếp theo kiểu 
space-between hai phần tử đầu và cuối sẽ ở trái và phải ngoài cùng của container phần ở giữa chia đều lấy trung tâm
align-items: center lấy tâm của item tạo đưuòng ngang là đường trung bình container đi qua tâm của item
             flex-start
             flex-end

/* Trường hợp 4 */
.container { display: grid; grid-template-columns: 200px 1fr 200px; gap: 20px; }
/* 3 items → Bố cục = ??? */
item-1---- item-2-----item-3
item-1 có cái hộp độ rộng là 200px
item-2 có cái hộp độ rộng là 1fr (toàn bộ không gian còn lại)
item-3 có cái hộp độ rộng là 200px
|<--- 200px --->|   |<------- 1fr (Linh hoạt) ------->|   |<--- 200px --->|
[    Item 1    ] gap [            Item 2            ] gap [    Item 3    ]
                 20px                                  20px
khoảng cách -- của các item là 20px

/* Trường hợp 5 */
.container { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
/* 7 items → Bố cục = ??? (mấy hàng? item cuối ở đâu?) */
3 hàng item cuối ở đầu hàng thứ 3



### Câu C1 (10đ) — Flexbox vs Grid: Khi nào dùng gì?

Cho 5 tình huống layout thực tế. Với mỗi tình huống, trả lời: dùng Flexbox, Grid, hay kết hợp cả hai? Giải thích ngắn gọn tại sao.

1. Navigation bar ngang (logo + menu + buttons)
dùng kết hợp cả 2 các menu dùng grid, logo, button dung flex vì logo,button ở lề flex sẽ hợp hơn grid, menu các nav cần khoảng các ổn định nên dùng grid
2. Lưới ảnh Instagram (3 cột đều nhau, số ảnh không biết trước)
    grid
    Grid cực mạnh trong việc chia cột đều nhau (1fr 1fr 1fr). Dù có 10 hay 100 ảnh, chúng vẫn tự động xếp đúng hàng lối mà không cần tính toán phần trăm width như Flex.
3. Layout blog: main content + sidebar
    grid
    Quản lý khung lớn (Layout tổng) tốt nhất. Giúp cố định Sidebar (ví dụ 300px) và để Main Content tự co giãn linh hoạt mà không bị xung đột.
4. Footer với 4 cột thông tin (Về chúng tôi, Liên kết, Hỗ trợ, Liên hệ)
    grid
    Giúp 4 cột luôn thẳng hàng tăm tắp. Khi sang màn hình điện thoại, chỉ cần đổi grid-template-columns thành 1 hoặc 2 cột là xong, cực kỳ nhanh.
5. Card sản phẩm (ảnh trên, text giữa, nút dưới — nút luôn dính đáy)
    flex
    Phù hợp để sắp xếp các thành phần bên trong một khối. Cơ chế margin-top: auto của Flexbox là cách "vô đối" để dính nút bấm vào đáy card.
### Câu C2 (10đ) — Debug Flexbox
Layout sau bị lỗi. Mô tả lỗi và sửa.

1. Lỗi 1: Cards không đều chiều cao — nút "Mua" bị nhảy lên/xuống

.card-container { display: flex; flex-wrap: wrap; }
.card { width: 30%; margin: 1.5%; }
.card img { width: 100%; }
.card h3 { font-size: 18px; }
.card .btn { padding: 10px; }

    Khi dùng Flexbox cho thẻ cha, các .card sẽ có chiều cao bằng nhau (nhờ mặc định align-items: stretch). Tuy nhiên, các thành phần bên trong .card không biết tự dàn hàng. Nếu tiêu đề h3 dài ngắn khác nhau, nút bấm sẽ nằm ngay sau chữ, dẫn đến hàng nút bị "nhấp nhô".
lỗi do h3 và button có tổng chiều dài vùa container thì button sẽ bị ngay gần dòng với h3-> thêm margin-top cho button
chiều cao button k đều được vì có đoạn văn bản dài ngắn khác nhau khiến container co dãn theo ta dùng flex-direction: column  để cho các phần tử xếp thành hàng dọc không bị trùng dòng

2. Lỗi 2: Muốn items nằm giữa cả ngang lẫn dọc trong container 100vh, nhưng item vẫn dính góc trái trên

.hero {
    height: 100vh;
    display: flex;
}
.hero-content {
    text-align: center;
}
lỗi do không sử dụng justify-content :center cái này giúp content được căn ở giữa hero, align-items : center giúp item ở giữa theo trục ngang

3. Lỗi 3: Sidebar bị co lại khi content quá dài

.layout { display: flex; }
.sidebar { width: 250px; }
.content { flex: 1; }

lỗi do content để flex là 1 còn sidebar là px tĩnh nên conten sẽ chiếm hết phần còn lại của layout nếu conten quá dài thì sẽ bóp phần tử kia lại 
Cho mỗi lỗi: Giải thích nguyên nhân → Viết code sửa → Chụp screenshot trước/sau.

