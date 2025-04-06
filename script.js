(function() {
    'use strict';

    const button = document.querySelector('button');
    const headerImg = document.querySelectorAll('header > img');
    const mainImg = document.querySelectorAll('main img');
    const footer = document.querySelector('footer');
    let mode = 'default';

    button.addEventListener('click', function() {
        if (mode === 'default') {
            button.innerHTML = '<img src="images/hide-toggle.svg" alt="hide toggle">';
            for (const images of headerImg) {
                images.className = 'show';
            }
            for (const images2 of mainImg) {
                images2.className = 'show';
            }
            footer.className = 'show';
            mode = 'annotate';
        } else {
            button.innerHTML = '<img src="images/see-toggle.svg" alt="see toggle">';
            for (const images3 of headerImg) {
                images3.className = 'hide';
            }
            headerImg.className = 'hide';
            for (const images4 of mainImg) {
                images4.className = 'hide';
            }
            footer.className = 'hide';
            mode = 'default'
        }
    })
})()