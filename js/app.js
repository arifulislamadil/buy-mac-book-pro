//Product Price
function productPrice(product, price) {
    const memoryCost = document.getElementById(product);
    memoryCost.innerText = price;
    totalPrice();

}

//Price Total

function totalPrice() {
    const bestPrice = document.getElementById('best-price').innerText;
    const memoryCost = document.getElementById('memory-cost').innerText;
    const storageCost = document.getElementById('storage-cost').innerText;
    const deliveryCharge = document.getElementById('delivery-charge').innerText;
    const totalPrice = document.getElementById('total-price');
    const discountPrice = document.getElementById('discount-price');
    totalPrice.innerText = parseInt(bestPrice) + parseInt(memoryCost) + parseInt(storageCost) + parseInt(deliveryCharge);
    discountPrice.innerText = parseInt(totalPrice.innerText);
}

//Memory
const memoryEight = document.getElementById('memory-eight');
memoryEight.addEventListener('click', function () {
    productPrice('memory-cost', 0);
});

const memorySixteen = document.getElementById('memory-sixteen');
memorySixteen.addEventListener('click', function () {
    productPrice('memory-cost', 180);
});

//Storage

const storage256 = document.getElementById('storage-256');
storage256.addEventListener('click', function () {
    productPrice('storage-cost', 0);
});
const storage512 = document.getElementById('storage-512');
storage512.addEventListener('click', function () {
    productPrice('storage-cost', 100);
});
const storage1Tb = document.getElementById('storage-1Tb');
storage1Tb.addEventListener('click', function () {
    productPrice('storage-cost', 180);
});

//Delivery

const freeDelivery = document.getElementById('free-delivery');
freeDelivery.addEventListener('click', function () {
    productPrice('delivery-charge', 0);
});
const expressDelivery = document.getElementById('express-delivery');
expressDelivery.addEventListener('click', function () {
    productPrice('delivery-charge', 20);
});

//Promo Verification
document.getElementById('promo-btn').addEventListener('click', function () {
    const promoInput = document.getElementById('promo-input');
    const totalPrice = document.getElementById('total-price').innerText;
    const totalPriceInte = parseInt(totalPrice) * 0.2;
    const discountPrice = document.getElementById('discount-price');
    if (promoInput.value == 'stevekaku') {
        discountPrice.innerText = totalPrice - totalPriceInte;
    } else {
        discountPrice.innerText = totalPrice;
    }
    promoInput.value = '';
})

