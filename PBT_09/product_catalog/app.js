const products = [
    {
        id: 1,
        name: "iPhone 16",
        price: 25990000,
        category: "phone",
        image: "https://placehold.co/200",
        rating: 4.5,
        inStock: true
    },
    {
        id: 2,
        name: "Samsung S25",
        price: 22990000,
        category: "phone",
        image: "https://placehold.co/200",
        rating: 4.7,
        inStock: true
    },
    {
        id: 3,
        name: "Google Pixel 10",
        price: 21990000,
        category: "phone",
        image: "https://placehold.co/200",
        rating: 4.6,
        inStock: true
    },
    {
        id: 4,
        name: "MacBook Air M5",
        price: 32990000,
        category: "laptop",
        image: "https://placehold.co/200",
        rating: 4.9,
        inStock: true
    },
    {
        id: 5,
        name: "Dell XPS",
        price: 27990000,
        category: "laptop",
        image: "https://placehold.co/200",
        rating: 4.7,
        inStock: true
    },
    {
        id: 6,
        name: "Lenovo Legion",
        price: 30990000,
        category: "laptop",
        image: "https://placehold.co/200",
        rating: 4.8,
        inStock: true
    },
    {
        id: 7,
        name: "iPad Pro",
        price: 21990000,
        category: "tablet",
        image: "https://placehold.co/200",
        rating: 4.8,
        inStock: true
    },
    {
        id: 8,
        name: "Galaxy Tab",
        price: 17990000,
        category: "tablet",
        image: "https://placehold.co/200",
        rating: 4.4,
        inStock: true
    },
    {
        id: 9,
        name: "Xiaomi Pad",
        price: 9990000,
        category: "tablet",
        image: "https://placehold.co/200",
        rating: 4.3,
        inStock: true
    },
    {
        id: 10,
        name: "AirPods Pro",
        price: 5990000,
        category: "accessory",
        image: "https://placehold.co/200",
        rating: 4.7,
        inStock: true
    },
    {
        id: 11,
        name: "Apple Watch",
        price: 9990000,
        category: "accessory",
        image: "https://placehold.co/200",
        rating: 4.6,
        inStock: true
    },
    {
        id: 12,
        name: "Logitech MX Master",
        price: 2990000,
        category: "accessory",
        image: "https://placehold.co/200",
        rating: 4.9,
        inStock: true
    }
];
const app = document.querySelector("#app");

let currentCategory = "all";
let searchTerm = "";
let sortType = "";
let cartCount = 0;
function createLayout() {

    app.innerHTML = `
<div class="header">

<h1>Product Catalog</h1>

<div class="controls">

<input
id="search"
placeholder="Search products"
>

<select id="sort">
<option value="">
Sort
</option>

<option value="priceAsc">
Price ↑
</option>

<option value="priceDesc">
Price ↓
</option>

<option value="name">
Name A-Z
</option>

<option value="rating">
Rating
</option>

</select>

<button data-category="all">
All
</button>

<button data-category="phone">
Phone
</button>

<button data-category="laptop">
Laptop
</button>

<button data-category="tablet">
Tablet
</button>

<button data-category="accessory">
Accessory
</button>

<button id="darkBtn">
🌙
</button>

<div class="cart">
🛒
<span id="badge"
class="badge">
0
</span>
</div>

</div>

</div>

<div
id="products"
class="products">
</div>
`;

    bindControls();
}
function getFilteredProducts() {

    let result = [...products];

    if (currentCategory !== "all") {

        result =
            result.filter(
                p =>
                    p.category === currentCategory
            );

    }

    if (searchTerm) {

        result =
            result.filter(
                p =>
                    p.name
                        .toLowerCase()
                        .includes(
                            searchTerm.toLowerCase()
                        )
            );

    }

    switch (sortType) {

        case "priceAsc":
            result.sort(
                (a, b) => a.price - b.price
            );
            break;

        case "priceDesc":
            result.sort(
                (a, b) => b.price - a.price
            );
            break;

        case "name":
            result.sort(
                (a, b) =>
                    a.name.localeCompare(b.name)
            );
            break;

        case "rating":
            result.sort(
                (a, b) => b.rating - a.rating
            );
            break;

    }

    return result;
}
function renderProducts() {

    const container =
        document.querySelector("#products");

    container.innerHTML = "";

    getFilteredProducts()
        .forEach(product => {

            const card =
                document.createElement("div");

            card.className = "card";

            card.innerHTML = `
<img src="${product.image}">
<div class="card-content">
<h3>${product.name}</h3>
<p>
${product.price.toLocaleString()} ₫
</p>
<p>
⭐ ${product.rating}
</p>
<button>
Add To Cart
</button>
</div>
`;

            card.addEventListener(
                "click",
                () => {
                    openModal(product);
                }
            );

            card
                .querySelector("button")
                .addEventListener(
                    "click",
                    e => {

                        e.stopPropagation();

                        cartCount++;

                        document.querySelector(
                            "#badge"
                        ).textContent = cartCount;

                    }
                );

            container.appendChild(card);

        });
}
function openModal(product) {

    const overlay =
        document.createElement("div");

    overlay.className =
        "modal-overlay";

    overlay.innerHTML = `
<div class="modal">

<h2>${product.name}</h2>

<img src="${product.image}">

<p>
Price:
${product.price.toLocaleString()} ₫
</p>

<p>
Rating:
${product.rating}
</p>

<p>
Category:
${product.category}
</p>

<button id="closeModal">
Close
</button>

</div>
`;

    document.body.appendChild(
        overlay
    );

    overlay.addEventListener(
        "click",
        e => {

            if (
                e.target === overlay ||
                e.target.id === "closeModal"
            ) {

                overlay.remove();

            }

        }
    );

}
function bindControls() {

    document
        .querySelector("#search")
        .addEventListener(
            "input",
            e => {

                searchTerm =
                    e.target.value;

                renderProducts();

            }
        );

    document
        .querySelector("#sort")
        .addEventListener(
            "change",
            e => {

                sortType =
                    e.target.value;

                renderProducts();

            }
        );

    document
        .querySelectorAll(
            "[data-category]"
        )
        .forEach(btn => {

            btn.addEventListener(
                "click",
                () => {

                    currentCategory =
                        btn.dataset.category;

                    renderProducts();

                }
            );

        });

    document
        .querySelector("#darkBtn")
        .addEventListener(
            "click",
            () => {

                document.body
                    .classList.toggle(
                        "dark-mode"
                    );

            }
        );

} createLayout();
renderProducts();