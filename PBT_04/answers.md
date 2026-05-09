
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
