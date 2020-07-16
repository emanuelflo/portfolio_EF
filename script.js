const work_page = document.querySelector('#work-page');

function workPage() {
    const main_div = document.querySelector('.main');
    main_div.classList.add('animated', 'fadeOut');
    setTimeout(removeNodes, 500);
    function removeNodes() {
        while (main_div.firstChild) {
            main_div.removeChild(main_div.firstChild);
        }
    }
}

work_page.addEventListener('click', workPage, false);