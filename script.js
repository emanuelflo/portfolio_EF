const home = document.querySelector('#home_page');
const work = document.querySelector('#work_page');
const about = document.querySelector('#about_page');
const fade = document.querySelector('.animated');

const varArr = [home, work, about];


for (let i = 0; i < varArr.length; i++) {
    varArr[i].addEventListener('click', (link) => {
        if (link.srcElement.innerText === 'HOME' || link.path[1].id === 'home_page') {
            fadeOut();
            setTimeout(function() {
                linkOut('index.html');
            }, 1000);
        } else if (link.srcElement.innerText === 'WORK' || link.path[1].id === 'work_page') {
            fadeOut();
            setTimeout(function() {
                linkOut('work.html');
            }, 1000);
        } else if (link.srcElement.innerText === 'ABOUT'|| link.path[1].id === 'about_page') {
            fadeOut();
            setTimeout(function() {
                linkOut('about.html');
            }, 1000);
        }
    })
}

const fadeOut = () => {
    fade.classList.remove('fadeIn');
    fade.classList.add('fadeOut');
}

function linkOut(page) {
    window.location.href = "file:///Users/EmanuelFlores/Desktop/Portfolio%20Site%20v2/portfolio_EF/" + page;
}