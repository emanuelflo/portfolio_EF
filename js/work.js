const expander = document.querySelectorAll('.expander');
const hidden = document.querySelectorAll('.hidden');
const modal = document.querySelector("#myModal");
const imgBtns = document.querySelectorAll('.js-btn');
const closeBtn = document.querySelector('.close');
const imgVar = document.querySelector('#imgLocation');
const images = ['images/ash-logos.png', 'images/bates_boys.png'];

for (let i = 0; i < expander.length; i++) {
    expander[i].addEventListener('click', () => {
        if (expander[i] === expander[0]) {
            workDropDowns(i);
        } else if (expander[i] === expander[1]) {
            workDropDowns(i);
        }
    })
}

for (let i = 0; i < imgBtns.length; i++) {
    imgBtns[i].addEventListener('click', () => {
        navBar.style.display = 'none';
        openModal();
        if (imgBtns[i] === imgBtns[0]) {
            imgSwap(images[0]);
        } else if (imgBtns[i] === imgBtns[1]) {
            imgSwap(images[1]);
        }
    })
}

closeBtn.addEventListener('click', () => {
    closeModal();
    navBar.style.display = 'initial';
})

const workDropDowns = (i) => {
    expander[i].classList.toggle('arrows');
    hidden[i].classList.toggle('show');
}

const openModal = () => {
    modal.style.display = "block";
}

const closeModal = () => {
    modal.style.display = "none";
}

const imgSwap = (url) => {
    imgVar.src = url;
}