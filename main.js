const menuEmail = document.querySelector(`.navbar-email`);
const desktopMenu = document.querySelector(`.desktop-menu`);
const menuHamIcon = document.querySelector(`.menu`);
const mobileMenu = document.querySelector(`.mobile-menu`);
const menuCarritoIcon = document.querySelector(`.navbar-shopping-cart`);
const aside = document.querySelector(`.product-detail`);
const cardsContainer = document.querySelector(`.cards-container`);

menuEmail.addEventListener(`click`, toggleDesktopMenu);
menuHamIcon.addEventListener(`click`, toggleMobileMenu);
menuCarritoIcon.addEventListener(`click`, toggleCarritoAside);

function toggleDesktopMenu(event) {
    /*
    if (desktopMenu.classList.contains(`inactive`)) {
        desktopMenu.classList.remove(`inactive`);
    } else {
        desktopMenu.classList.add(`inactive`);
    }
    */
    const isAsideClosed = aside.classList.contains(`inactive`);

    if (!isAsideClosed) {
        aside.classList.add(`inactive`);
    }

    desktopMenu.classList.toggle(`inactive`);
}

function toggleMobileMenu(event) {
    const isAsideClosed = aside.classList.contains(`inactive`);

    if (!isAsideClosed) {
        aside.classList.add(`inactive`);
    }

    mobileMenu.classList.toggle(`inactive`);
}

function toggleCarritoAside(event) {
    const isMobileMenuClosed = mobileMenu.classList.contains(`inactive`);
    const isDesktopMenuClosed = desktopMenu.classList.contains(`inactive`);

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add(`inactive`);
    } else if (!isDesktopMenuClosed) {
        desktopMenu.classList.add(`inactive`);
    }

    aside.classList.toggle(`inactive`);
}

const productList = [];

function creaProducto(name, price, image) {
    this.name = name;
    this.price = price;
    this.image = image;
}

const bike1 = new creaProducto(`Bike`, 120, `https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`);

const pantalla1 = new creaProducto(`Pantalla`, 220, `https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`);

const computador1 = new creaProducto(`Compu`, 620, `https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`);

const bike2 = new creaProducto(`Bike`, 120, `https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`);

const pantalla2 = new creaProducto(`Pantalla`, 220, `https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`);

const computador2 = new creaProducto(`Compu`, 620, `https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`);

productList.push(bike1);
productList.push(pantalla1);
productList.push(computador1);
productList.push(bike2);
productList.push(pantalla2);
productList.push(computador2);

renderProducts(productList);

function renderProducts(arr) {
    for (const product of arr) {
        const productCard = document.createElement(`div`);
        productCard.classList.add(`product-card`);

        const productImg = document.createElement(`img`);
        productImg.setAttribute(`src`, product.image);

        const productInfo = document.createElement(`div`);
        productInfo.classList.add(`product-info`);

        const productInfoDiv = document.createElement(`div`);
        const productPrice = document.createElement(`p`);
        productPrice.innerText = `$ ${product.price}`;
        const productName = document.createElement(`p`);
        productName.innerText = product.name;

        productInfoDiv.append(productPrice, productName);


        const productInfoFigure = document.createElement(`figure`);
        const productImgCart = document.createElement(`img`);
        productImgCart.setAttribute(`src`, `./icons/bt_add_to_cart.svg`);

        productInfoFigure.appendChild(productImgCart);

        productInfo.append(productInfoDiv, productInfoFigure);

        productCard.append(productImg, productInfo);

        cardsContainer.appendChild(productCard);
    }
}