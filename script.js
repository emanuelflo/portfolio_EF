const fade = document.querySelector('.animated');
const varArr = document.querySelectorAll('.nav-item');

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

const combine = (x) => {
    fadeOut();
    setTimeout(() => {
        linkOut(x);
    }, 1000);
}

const fadeOut = () => {
    fade.classList.remove('fadeIn');
    fade.classList.add('fadeOut');
}

const linkOut = (page) => {
    window.location.href = "file:///Users/EmanuelFlores/Desktop/Portfolio%20Site%20v2/portfolio_EF/" + page;
}