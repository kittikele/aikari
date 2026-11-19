
/* Karácsonyi visszaszámláló */

const countDownDate = new Date(
    "December 24, 2026 00:00:00"
).getTime();

const countdownElement = document.getElementById("demo");

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    if (distance < 0) {
        countdownElement.textContent = "🎄 Boldog karácsonyt!";
        clearInterval(countdown);
        return;
    }

    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) / 1000
    );

    countdownElement.textContent =
        days + " nap " +
        hours + " óra " +
        minutes + " perc " +
        seconds + " másodperc";
}

updateCountdown();

const countdown = setInterval(updateCountdown, 1000);


/* Termékek */

const products = [
    {
        id: 1,
        name: "Karácsonyi gyertya",
        description: "Meghitt hangulatú, illatos ünnepi gyertya.",
        price: 2990,
        image: "https://images.unsplash.com/photo-1602523961358-f9f03dd557db?w=600",
        available: true
    },
    {
        id: 2,
        name: "Ünnepi ajándékdoboz",
        description: "Elegáns csomagolás különleges ajándékokhoz.",
        price: 4490,
        image: "https://images.unsplash.com/photo-1512909006721-3d6018887383?w=600",
        available: true
    },
    {
        id: 3,
        name: "Karácsonyi dekoráció",
        description: "Természetes stílusú ünnepi dísz.",
        price: 3490,
        image: "https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=600",
        available: false
    },
    {
        id: 4,
        name: "Ünnepi bögre",
        description: "Tökéletes választás forró csokoládéhoz.",
        price: 2490,
        image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600",
        available: true
    },
    {
        id: 5,
        name: "Karácsonyi koszorú",
        description: "Kézzel készített ünnepi hangulat.",
        price: 5990,
        image: "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=600",
        available: false
    },
    {
        id: 6,
        name: "Ünnepi fényfüzér",
        description: "Meleg fehér fények az otthonodba.",
        price: 3990,
        image: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=600",
        available: true
    },
    {
        id: 7,
        name: "Karácsonyi díszgömb",
        description: "Elegáns arany színű karácsonyfadísz.",
        price: 1990,
        image: "https://images.unsplash.com/photo-1545608444-f045a6db6133?w=600",
        available: true
    },
    {
        id: 8,
        name: "Ajándékcsomag",
        description: "Különleges meglepetés szeretteidnek.",
        price: 7990,
        image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600",
        available: false
    },
    {
        id: 9,
        name: "Karácsonyi pléd",
        description: "Puha és meleg kiegészítő a téli estékre.",
        price: 8990,
        image: "https://images.unsplash.com/photo-1600369671236-e74521d4b6ad?w=600",
        available: true
    }
];


/* Termékek megjelenítése */

const productList = document.getElementById("product-list");

function renderProducts() {
    productList.innerHTML = products.map(product => `
        <div class="col-12 col-sm-6 col-lg-4">
            <div class="product-card ${product.available ? '' : 'unavailable'}">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    class="product-image"
                    loading="lazy"
                >

                <div class="product-content">

                    ${product.available ? "" : `
                        <span class="stock-badge">
                            ✕ JELENLEG NEM ELÉRHETŐ
                        </span>
                    `}

                    <h3 class="product-title">
                        ${product.name}
                    </h3>

                    <p class="product-description">
                        ${product.description}
                    </p>

                    <div class="product-price">
                        ${product.price.toLocaleString("hu-HU")} Ft
                    </div>

                    ${product.available ? `
                        <button
                            class="btn btn-christmas"
                            onclick="addToCart(${product.id})"
                        >
                            + Kosárba
                        </button>
                    ` : `
                        <button class="btn btn-unavailable" disabled>
                            Elfogyott
                        </button>
                    `}

                </div>
            </div>
        </div>
    `).join("");
}


/* Kosár számláló */

let cartCount = 0;

function addToCart(productId) {
    const product = products.find(
        item => item.id === productId
    );

    if (!product || !product.available) {
        return;
    }

    cartCount++;

    document.getElementById("cart-count").textContent = cartCount;
}


/* Oldal indítása */

renderProducts();
