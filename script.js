/* =========================================
   PRODUCT DATA
========================================= */

const products = [

    {
        id: 1,
        name: "Pink Glow Body Mask",
        category: "mask",
        categoryName: "BODY MASK",
        price: 299,
        oldPrice: 349,
        discount: 15,
        type: "bottle"
    },

    {
        id: 2,
        name: "Soft Skin Body Scrub",
        category: "scrub",
        categoryName: "BODY SCRUB",
        price: 259,
        oldPrice: 299,
        discount: 13,
        type: "jar"
    },

    {
        id: 3,
        name: "Moisture Body Lotion",
        category: "lotion",
        categoryName: "BODY LOTION",
        price: 289,
        oldPrice: 329,
        discount: 12,
        type: "lotion"
    },

    {
        id: 4,
        name: "SET A - Glow Set",
        category: "set",
        categoryName: "GIFT SET",
        price: 699,
        oldPrice: 847,
        discount: 17,
        type: "set"
    },

    {
        id: 5,
        name: "SET B - Premium Set",
        category: "set",
        categoryName: "GIFT SET",
        price: 899,
        oldPrice: 1136,
        discount: 21,
        type: "set"
    }

];


/* =========================================
   CART
========================================= */

let cart = [];


/* =========================================
   SHOW PRODUCTS
========================================= */

function renderProducts(data) {

    const grid =
        document.getElementById("productGrid");


    grid.innerHTML = "";


    data.forEach(product => {


        let productClass =
            "mock-product";


        if (product.type === "jar") {

            productClass += " jar";

        }


        if (product.type === "lotion") {

            productClass += " lotion";

        }


        let productText =
            product.categoryName
                .replace(" ", "<br>");


        grid.innerHTML += `

            <article class="product-card">

                <div class="discount">

                    -${product.discount}%

                </div>


                <div class="product-image">

                    <div class="${productClass}">

                        <div class="mock-cap"></div>

                        <div class="mock-text">

                            ${productText}

                        </div>

                    </div>

                </div>


                <div class="product-info">

                    <h3>

                        ${product.name}

                    </h3>


                    <div class="category">

                        ${product.categoryName}

                    </div>


                    <div class="product-price">

                        ฿${product.price}

                        <del>
                            ฿${product.oldPrice}
                        </del>

                    </div>


                    <button class="add-btn"
                            onclick="addToCart(
                                '${product.name}',
                                ${product.price}
                            )">

                        เพิ่มลงตะกร้า

                    </button>

                </div>

            </article>

        `;

    });

}


/* =========================================
   FILTER
========================================= */

function filterProducts(category, button) {


    document
        .querySelectorAll(".filter")
        .forEach(btn => {

            btn.classList.remove("active");

        });


    button.classList.add("active");


    if (category === "all") {

        renderProducts(products);

        return;

    }


    const filtered =
        products.filter(
            product =>
            product.category === category
        );


    renderProducts(filtered);

}


/* =========================================
   ADD CART
========================================= */

function addToCart(name, price) {


    cart.push({

        name: name,

        price: price

    });


    updateCart();


    alert(
        `${name} เพิ่มลงตะกร้าแล้ว ✨`
    );

}


/* =========================================
   UPDATE CART
========================================= */

function updateCart() {


    document.getElementById(
        "cartCount"
    ).textContent = cart.length;


    const items =
        document.getElementById(
            "cartItems"
        );


    if (cart.length === 0) {

        items.innerHTML = `

            <p style="
                text-align:center;
                padding:30px;
                color:#987985;
            ">

                ยังไม่มีสินค้าในตะกร้า

            </p>

        `;

        document.getElementById(
            "cartTotal"
        ).textContent = "฿0";

        return;

    }


    items.innerHTML = "";


    let total = 0;


    cart.forEach((item, index) => {

        total += item.price;


        items.innerHTML += `

            <div class="cart-item">

                <span>

                    ${item.name}

                </span>

                <strong>

                    ฿${item.price}

                </strong>

            </div>

        `;

    });


    document.getElementById(
        "cartTotal"
    ).textContent =
        "฿" + total.toLocaleString();

}


/* =========================================
   OPEN CART
========================================= */

function openCart() {

    document
        .getElementById("cartModal")
        .classList.add("show");

}


/* =========================================
   CLOSE CART
========================================= */

function closeCart() {

    document
        .getElementById("cartModal")
        .classList.remove("show");

}


/* =========================================
   DISCRETE MATHEMATICS
========================================= */


/* SET A */

const setA = new Set([

    "Body Mask",

    "Body Scrub",

    "Body Lotion"

]);


/* SET B */

const setB = new Set([

    "Body Mask",

    "Body Scrub",

    "Gift Packaging"

]);


/* =========================================
   UNION
   A ∪ B
========================================= */

function union(A, B) {

    return new Set([

        ...A,

        ...B

    ]);

}


/* =========================================
   INTERSECTION
   A ∩ B
========================================= */

function intersection(A, B) {

    return new Set(

        [...A].filter(
            item => B.has(item)
        )

    );

}


/* =========================================
   DIFFERENCE
   A - B
========================================= */

function difference(A, B) {

    return new Set(

        [...A].filter(
            item => !B.has(item)
        )

    );

}


/* =========================================
   IF / ELSE
========================================= */

function checkProduct(price) {


    if (price >= 500) {

        return "Premium";

    }

    else {

        return "Standard";

    }

}


/* =========================================
   DISPLAY SET LOGIC
========================================= */

function showLogic() {


    const unionResult =
        union(setA, setB);


    const intersectionResult =
        intersection(setA, setB);


    const differenceResult =
        difference(setA, setB);


    const productLevel =
        checkProduct(699);


    document.getElementById(
        "logicOutput"
    ).innerHTML = `

        <strong>
            A ∪ B
        </strong>

        =

        ${[...unionResult].join(", ")}

        <br>


        <strong>
            A ∩ B
        </strong>

        =

        ${[...intersectionResult].join(", ")}

        <br>


        <strong>
            A − B
        </strong>

        =

        ${[...differenceResult].join(", ")}

        <br>


        <strong>
            IF ฿699
        </strong>

        =

        ${productLevel}

    `;

}


/* =========================================
   MODAL CLICK OUTSIDE
========================================= */

document
    .getElementById("cartModal")
    .addEventListener(
        "click",
        function(event) {

            if (
                event.target === this
            ) {

                closeCart();

            }

        }
    );


/* =========================================
   START
========================================= */

renderProducts(products);

showLogic();
