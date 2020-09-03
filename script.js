

let burgerMenuChange = () => {
    let hamburger = document.querySelector('.burgerBtn');
    let menu = document.querySelector('.menuOpen1');
    let menuLine1 = document.querySelector('.x1');
    let menuLine2 = document.querySelector('.x2');
    hamburger.addEventListener('click', () => menuLine1.classList.toggle('line1'))
    hamburger.addEventListener('click', () => menuLine2.classList.toggle('line2'))
    hamburger.addEventListener('click', () => menu.classList.toggle('menuOpen'))
};

burgerMenuChange();