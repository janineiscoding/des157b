(function() {
    'use strict';

    const button = document.querySelector('button');
    const headerImg = document.querySelector('header > img');
    const mainImg = document.querySelectorAll('main img');
    const footer = document.querySelector('footer');
    let mode = 'default';

    button.addEventListener('click', function() {
        if (mode === 'default') {
            button.innerHTML = '<img src="images/hide-toggle.svg" alt="hide toggle">';
            headerImg.className = 'show';
            for (const images of mainImg) {
                images.className = 'show';
            }
            footer.className = 'show';
            mode = 'annotate';
        } else {
            button.innerHTML = '<img src="images/see-toggle.svg" alt="see toggle">';
            headerImg.className = 'hide';
            for (const images2 of mainImg) {
                images2.className = 'hide';
            }
            footer.className = 'hide';
            mode = 'default'
        }
    })
})()