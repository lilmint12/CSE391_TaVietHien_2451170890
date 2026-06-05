import { useState } from "react";

function GoodCounter() {
    const [count, setCount] = useState(0);  // ← useState!
    // count là biến chạy từ usestate(bắt đầu), hàm setcount hoặc hàm khác để
    // đổi trạng thái của count
    function handleClick() {
        setCount(count + 1);  // React biết cần re-render!
    }
    
    return (
        <div style={{ padding: "20px" }}>
            <h2>✅ Counter "tốt" (dùng useState)</h2>
            <p>Bộ đếm: {count}</p>
            <button onClick={handleClick}>Tăng (+1)</button>
            <p style={{ color: "green" }}>
                ✅ Nhấn nút → Số trên màn hình CẬP NHẬT!
            </p>
        </div>
    );
}

export default GoodCounter;