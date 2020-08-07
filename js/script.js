const fade = document.querySelector('.animated');
const varArr = document.querySelectorAll('.nav-item');
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
