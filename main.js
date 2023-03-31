const dataJson = JSON.parse(json)['goods'];
// console.log(dataJson);


const featuredItemsEl = document.querySelector('.featuredItems');
const cardTemplate = document.querySelector('.cardTemplate');



function createCard(cardObject) {
    const featuredItemsTemplate = cardTemplate.content.querySelector('.featuredItem');
    const clonefeaturedItemsTemplate = featuredItemsTemplate.cloneNode('true');

    featuredItemsEl.appendChild(clonefeaturedItemsTemplate);

    clonefeaturedItemsTemplate.querySelector('.templateImg').src = cardObject.img;
    clonefeaturedItemsTemplate.querySelector('.featuredName').textContent = cardObject.name;
    clonefeaturedItemsTemplate.querySelector('.featuredText').textContent = cardObject.description;
    clonefeaturedItemsTemplate.querySelector('.featuredPrice').textContent = cardObject.price;

    clonefeaturedItemsTemplate.querySelector('.addToCart').dataset.id = cardObject.id;
    // clonefeaturedItemsTemplate.querySelector('.addToCart').setAttribute("data-id", cardObject.id);

    clonefeaturedItemsTemplate.querySelector('.addToCart').classList.add('btnAdd');
};

dataJson.forEach(object => {
    createCard(object);
});


