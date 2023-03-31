const basket = {

};


const open_btn = document.querySelector('.basket');
const basketOpen = document.querySelector('.section-cart__body');
open_btn.addEventListener('click', () => {
    basketOpen.style.display = 'block';
});


const close_btn = document.querySelector('.close-menu');
const basketClose = document.querySelector('.section-cart__body');
close_btn.addEventListener('click', () => {
    basketClose.style.display = 'none';
});




const totalEl = document.querySelector('div.cart-footer__price span');
const countEl = document.querySelector('div.cart-footer__count span');
const countBasketEl = document.querySelector('.cartIconWrap span');

const basketAdd = document.querySelectorAll('.btnAdd');

basketAdd.forEach(btnAdd => {
    btnAdd.addEventListener('click', function (e) {
        const dataJsonId = e.target.dataset.id;
        console.log(dataJsonId);
        const filtered = dataJson.filter((x) => x.id == dataJsonId);
        console.log(filtered[0]);
        if (basket[dataJsonId]) {
            basket[dataJsonId].count++
        } else {
            basket[dataJsonId] = Object.assign({}, filtered[0]);
            basket[dataJsonId].count = 1;
        }
        renderCart();
        renderTotal(countTotal());
        renderCount(countCount());
        renderBasket(countCount());
    });
});

const cartItemTemplateEl = document.querySelector('.template');
function renderCartItem(productObject) {
    const cartItemEl = cartItemTemplateEl.content.querySelector('.product').cloneNode(true);

    cartItemEl.style.display = 'grid';
    cartItemEl.style.gridTemplateColumns = '1fr 1fr 1fr 1fr';

    cartItemEl.querySelector('.product__title').textContent = productObject.name;
    cartItemEl.querySelector('.product-count').textContent = productObject.count;
    cartItemEl.querySelector('.product__price').textContent = productObject.price;
    cartItemEl.querySelector('.btn-delete').addEventListener('click', () => {
        if (basket[productObject.id].count > 1) {
            basket[productObject.id].count--
        } else {
            delete basket[productObject.id]
        }
        renderCart()
        renderTotal(countTotal())
        renderCount(countCount());
        renderBasket(countCount());
    });
    return cartItemEl;
}


const cartEl = document.querySelector('.product');
function renderCart() {
    cartEl.replaceChildren();
    Object.values(basket).forEach(productObject => {
        const cartItemEl = renderCartItem(productObject);
        cartEl.appendChild(cartItemEl);
    });
}


function countTotal() {
    let total = 0;
    Object.values(basket).forEach(productObject => {
        total += productObject.price * productObject.count
    })
    return total;
}

function countCount() {
    let count = 0;
    Object.values(basket).forEach(productObject => {
        count += productObject.count
    })
    return count;
}




function renderTotal(total) {
    totalEl.textContent = total;
}
function renderCount(count) {
    countEl.textContent = count;
}
function renderBasket(count) {
    countBasketEl.textContent = count;
}
