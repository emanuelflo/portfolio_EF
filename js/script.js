const fade = document.querySelector('.animated');
const varArr = document.querySelectorAll('.nav-item');
const expander = document.querySelectorAll('.expander');
const shared = document.querySelectorAll('.shared');

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
            shared[0].classList.add('add-height');
            expander[i].classList.add('arrows');
        } else if (expander[i] === expander[1]) {
            console.log('second');
        } else if (expander[i] === expander[2]) {
            console.log('third');
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
    fade.classList.remove('fadeIn');
    fade.classList.add('fadeOut');
}

const linkOut = (page) => {
    window.location.href = "file:///Users/EmanuelFlores/Desktop/Portfolio%20Site%20v2/portfolio_EF/" + page;
}