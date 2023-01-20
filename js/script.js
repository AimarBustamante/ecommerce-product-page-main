// Variables

let minusBtn = document.querySelector(".input__minus");
let plusBtn = document.querySelector(".input__plus");
let userInput = document.querySelector(".input__number");
let userInputNumber = 0;

const addToCartBtn = document.querySelector(".details__button");
let cartNotification = document.querySelector(".header__cart--notification");
let lastValue = parseInt(cartNotification.innerText);


// Add items

plusBtn.addEventListener("click", () => {

    userInputNumber++;
    userInput.value = userInputNumber;
    console.log(userInputNumber);

});

minusBtn.addEventListener("click", () => {

    userInputNumber--;

    if(userInputNumber <= 0){
        userInputNumber = 0;
    }

    userInput.value = userInputNumber;
    console.log(userInputNumber);

});


// Add item to cart

addToCartBtn.addEventListener("click", ()=> {

    lastValue = lastValue + userInputNumber;

    cartNotification.innerText = lastValue;
    cartNotification.style.display = "block";
    drawProductInModal();

});


// Display cart modal

const cartIconBtn = document.querySelector(".header__cart");
const cartModal = document.querySelector(".cart-modal");
const productContainer = document.querySelector(".cart-modal__checkout-container");

cartIconBtn.addEventListener("click", ()=> {
    cartModal.classList.toggle("show"); 

    if(lastValue == 0){
        productContainer.innerHTML = `<p class="cart-empty">Your cart is empty</p>`;
    }else{
        drawProductInModal()
    }

});


// Delete cart content

function deleteProduct(){

    const deleteProductBtn = document.querySelector(".cart-modal__delete");

    deleteProductBtn.addEventListener("click", ()=> {
        productContainer.innerHTML = `<p class="cart-empty">Your cart is empty</p>`;
        lastValue = 0;
        cartNotification.innerText = lastValue;
    });

}


// Display images with arrows

const imageContainer = document.querySelector(".gallery__image-container");
const previousGalleryBtn = document.querySelector(".gallery__previous");
const nextGalleryBtn = document.querySelector(".gallery__next");
let imgIndex = 1;

nextGalleryBtn.addEventListener("click", ()=> {
    changeNextImage(imageContainer);
});

previousGalleryBtn.addEventListener("click", ()=> {
    changePreviousImage(imageContainer);
});


// Display desktop modal

const imageModal = document.querySelector(".modal-gallery__background")
const closeModalBtn = document.querySelector(".modal-gallery__close")

imageContainer.addEventListener("click", ()=> {
    imageModal.style.display = "grid";
});

closeModalBtn.addEventListener("click", ()=>{
    imageModal.style.display = "none";
});


// Change thumbnails images

let thumbnails = document.querySelectorAll(".gallery__thumnail");
thumbnails = [...thumbnails]

thumbnails.forEach(thumbnail=>{

    thumbnail.addEventListener("click", event=>{

        console.log(event.target.id)
        imageContainer.style.backgroundImage = `url('../images/image-product-${event.target.id}.jpg')`

    });

});


// Change modal thumbnails images

let modalThumbnails = document.querySelectorAll(".modal-gallery__thumnail");
modalThumbnails = [...modalThumbnails]
const modalImgContainer = document.querySelector(".modal-gallery__image-container")

modalThumbnails.forEach(modalThumbnails => {

    modalThumbnails.addEventListener("click", event=>{

        console.log(event.target.id.slice(-1))
        modalImgContainer.style.backgroundImage = `url('../images/image-product-${event.target.id.slice(-1)}.jpg')`

    });

});


// Change modal thumbnails images with arrows

const previusModalBtn = document.querySelector(".modal-gallery__previous");
const nextModalBtn = document.querySelector(".modal-gallery__next");

nextModalBtn.addEventListener("click", ()=> {
    changeNextImage(modalImgContainer);
});

previusModalBtn.addEventListener("click", ()=> {
    changePreviousImage(modalImgContainer);
});


// Display menu mobile

const hamburgerMenu = document.querySelector(".header__menu");
const modalNavbar = document.querySelector(".modal-navbar__background");
const closeModalNavbar = document.querySelector(".modal-navbar__close");

modalNavbar.style.display = "none"

hamburgerMenu.addEventListener("click", ()=>{
    console.log('abrir modal');
    modalNavbar.style.display = "block";
});

closeModalNavbar.addEventListener("click", ()=>{
    modalNavbar.style.display = "none";
});


// Functions

function drawProductInModal(){

    productContainer.innerHTML = `
    
        <div class="cart-modal__details-container"> 

          <img src="images/image-product-1-thumbnail.jpg" id="1" class="cart-modal__image" alt="thumnail">

          <div>
            <p class="cart-modal__product">Autum Limited Edition</p>
            <p class="cart-modal__price">125 x 3 = <span>375.00</span> </p>
          </div>

          <img src="images/icon-delete.svg" alt="icon-delete" class="cart-modal__delete">

        </div>

        <button class="cart-modal__checkout">Checkout</button>`

    deleteProduct()

    let priceModal = document.querySelector(".cart-modal__price");
    priceModal.innerHTML = `125 x ${lastValue} = <span>$ ${lastValue*125}.00</span>`;

}

function changeNextImage(imgContainer){

    if(imgIndex == 4){
        imgIndex = 1;
    }else{
        imgIndex++;
    }

    imgContainer.style.backgroundImage = `url('../images/image-product-${imgIndex}.jpg')`
}

function changePreviousImage(imgContainer){

    if(imgIndex == 1){
        imgIndex = 4;
    }else{
        imgIndex--;
    }

    imgContainer.style.backgroundImage = `url('../images/image-product-${imgIndex}.jpg')`

}