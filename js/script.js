const fade = document.querySelector('.animated');
const varArr = document.querySelectorAll('.nav-item');
const expander = document.querySelectorAll('.expander');
const hidden = document.querySelectorAll('.hidden');
const modal = document.querySelector("#myModal");
const navBar = document.querySelector(".navbar");

for (let i = 0; i < varArr.length; i++) {
    varArr[i].addEventListener('click', () => {
        if (varArr[i] === varArr[0]) {
            combine('index.html');
        } else if (varArr[i] === varArr[1]) {
            combine('work.html');
        } else if (varArr[i] === varArr[2]) {
            combine('about.html');
        }
    })
}

for (let i = 0; i < expander.length; i++) {
    expander[i].addEventListener('click', () => {
        if (expander[i] === expander[0]) {
            workDropDowns(i);
        } else if (expander[i] === expander[1]) {
            workDropDowns(i);
        }
    })
}

const combine = (file) => {
    fadeOut();
    setTimeout(() => {
        linkOut(file);
    }, 1000);
}

const fadeOut = () => {
    navBar.classList.remove('hover');
    fade.classList.remove('fadeIn');
    fade.classList.add('fadeOut');
}

const linkOut = (page) => {
    document.location.href = "file:///Users/EmanuelFlores/Desktop/Portfolio Site v2/portfolio_EF/" + page;
}

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