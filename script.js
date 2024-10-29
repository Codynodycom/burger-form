const BURGER_PRICE = 11.995; // 11.995 - 1 burger
const feesPrice = 4.99;
let discountPrice = 0; // percent
let basketPrice = 23.99; 
let totalPrice = basketPrice + feesPrice;

function setDiscountPrice() {
    discountPrice = totalPrice * 10 / 100;

    const priceElement = document.querySelector(".check-price-discount");
    priceElement.innerHTML = `$${discountPrice.toFixed(2)}`;
}

function changeBasketPrice(price, sign) {
    if (sign === "+") {
        basketPrice += price;
    } else {
        basketPrice -= price;
    }
    const priceElement = document.querySelector(".basket-price");
    priceElement.innerHTML = `$${basketPrice.toFixed(2)}`;
}

function changeTotalPrice() {
    totalPrice = basketPrice + feesPrice - discountPrice;

    const priceElement = document.querySelector(".final-price");
    priceElement.innerHTML = `$${totalPrice.toFixed(2)}`;
}

function changeSubtotalPrice() {
    const priceElement = document.querySelector(".check-price-subtotal");
    priceElement.innerHTML = `$${basketPrice.toFixed(2)}`;
}

function increaseCount() {
    const basketPriceElement = document.querySelector(".digit");
    const newCount = parseInt(basketPriceElement.textContent) + 1;
    basketPriceElement.textContent = `${newCount}`;

    changeBasketPrice(BURGER_PRICE, "+");
    changeSubtotalPrice();
    changeTotalPrice();
}

function reduceCount() {
    const basketPriceElement = document.querySelector(".digit");
    const newCount = parseInt(basketPriceElement.textContent) - 1;

    if (newCount === 0){
        alert("Невозможно удалить последний бургер!");
        return;
    }
    
    basketPriceElement.textContent = `${newCount}`;

    changeBasketPrice(BURGER_PRICE, "-");
    changeSubtotalPrice();
    changeTotalPrice();
}

function applyCoupon() {
    const saleCoupon = "sale";
    const inputCoupon = document.getElementById("input-coupon");

    if (saleCoupon === inputCoupon.value) {
        alert("Добавлен купон! " + saleCoupon);
        setDiscountPrice()
        changeTotalPrice();
        disableCouponBlock();
    } else {
        alert("Купон не активен!");
    }
}

function disableCouponBlock() {
    const couponPartElement = document.querySelector(".apply-coupon-part");
    const couponButtonElement = document.querySelector(".apply-button");
    const couponInputElement = document.querySelector(".input-field");

    couponPartElement.className = "disable";
    couponButtonElement.className = "disable-button";
    couponInputElement.className = "disable-input";
}
