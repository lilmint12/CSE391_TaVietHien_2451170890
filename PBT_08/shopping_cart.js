function createCart() {
    let items = [];
    let discount = 0; // Lưu tỷ lệ giảm giá (VD: 0.1)
    let discountFixed = 0; // Lưu giảm giá tiền mặt (VD: 30000)

    return {
        addItem(product, quantity = 1) {
            const found = items.find(item => item.id === product.id);
            if (found) {
                found.quantity += quantity;
            } else {
                items.push({ ...product, quantity });
            }
        },

        removeItem(productId) {
            items = items.filter(item => item.id !== productId);
        },

        updateQuantity(productId, newQuantity) {
            const item = items.find(item => item.id === productId);
            if (item) item.quantity = newQuantity;
        },

        getTotal() {
            let total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            total = total * (1 - discount) - discountFixed;
            return Math.max(0, total); // Đảm bảo không âm
        },

        applyDiscount(code) {
            if (code === "SALE10") discount = 0.1;
            else if (code === "SALE20") discount = 0.2;
            else if (code === "FREESHIP") discountFixed = 30000;
        },

        getItemCount() {
            return items.reduce((sum, item) => sum + item.quantity, 0);
        },

        clearCart() {
            items = [];
            discount = 0;
            discountFixed = 0;
        },

        printCart() {
            console.log("┌──────────────────────────────────────────────┐");
            console.log("│ # │ Sản phẩm       │ SL │ Đơn giá      │ Tổng        │");
            items.forEach((item, index) => {
                let total = item.price * item.quantity;
                console.log(`│ ${index + 1} │ ${item.name.padEnd(14)} │  ${item.quantity} │ ${item.price.toLocaleString().padStart(10)} │ ${total.toLocaleString().padStart(11)} │`);
            });
            console.log("├──────────────────────────────────────────────┤");
            console.log(`│ Tổng cộng: ${(this.getTotal()).toLocaleString().padStart(24)}đ │`);
            console.log("└──────────────────────────────────────────────┘");
        }
    };
}
// === TEST ===
const cart = createCart();

cart.addItem({ id: 1, name: "iPhone 16", price: 25990000 }, 1);
cart.addItem({ id: 3, name: "AirPods Pro", price: 6990000 }, 2);
cart.addItem({ id: 1, name: "iPhone 16", price: 25990000 }, 1); // Tăng lên 2

cart.printCart();
// Kỳ vọng:
// ┌──────────────────────────────────────────────┐
// │ # │ Sản phẩm      │ SL │ Đơn giá     │ Tổng        │
// │ 1 │ iPhone 16      │  2 │ 25.990.000  │ 51.980.000  │
// │ 2 │ AirPods Pro    │  2 │  6.990.000  │ 13.980.000  │
// ├──────────────────────────────────────────────┤
// │ Tổng cộng:                       65.960.000đ │
// └──────────────────────────────────────────────┘

cart.applyDiscount("SALE10");
cart.printCart();
// → Tổng: 59.364.000đ (giảm 10%)

console.log("Số SP:", cart.getItemCount()); // → 4
cart.removeItem(3);
console.log("Sau xóa:", cart.getItemCount()); // → 2