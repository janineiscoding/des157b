(function() {
    'use strict';
    console.log('reading js');
    const paperRoute = document.querySelector('#paper-route');
    const plasticRoute = document.querySelector('#plastic-route');
    const toteRoute = document.querySelector('#tote-route');
    const h1Tag = document.querySelector('h1');
    const textbook = document.querySelector('#textbook');
    let routeClicked = false;

    // -------------------------------- Center --------------------------------
    // Paper Hover & Click
    paperRoute.addEventListener('click', function(){
        document.querySelector('#paper-left').className = 'show';
        document.querySelector('#paper-right').className = 'show';
        plasticRoute.className = 'hide';
        toteRoute.className = 'hide';
        paperRoute.style.backgroundColor = '#ffffff00';
        h1Tag.innerHTML = 'Paper Bag';
        routeClicked = true;
    });

    paperRoute.addEventListener('mouseover', function() {
        if (!routeClicked) {
            h1Tag.innerHTML = 'Paper Bag';
        }
    });
    
    paperRoute.addEventListener('mouseout', function() {
        if (!routeClicked) {
            h1Tag.innerHTML = 'Which bag do you want to use?';
        }
    });

    // News Paper SVG
    const newsSVG = document.querySelector('#news-svg');
    newsSVG.addEventListener('click', function(){
        preventDefault();
    });

    newsSVG.addEventListener('mouseover', function() {
        if (!routeClicked) {
            h1Tag.textContent = 'Completed: News Paper';
        }
    });
    
    newsSVG.addEventListener('mouseout', function() {
        if (!routeClicked) {
            h1Tag.textContent = 'Which bag do you want to use?';
        }
    });

    // Plastic Hover & Click
    plasticRoute.addEventListener('click', function(){
        document.querySelector('#paper-left').className = 'show';
        document.querySelector('#paper-right').className = 'show';
        paperRoute.className = 'hide';
        toteRoute.className = 'hide';
        plasticRoute.style.backgroundColor = '#ffffff00';
        h1Tag.innerHTML = 'Plastic Bag';
        routeClicked = true;
    });

    plasticRoute.addEventListener('mouseover', function() {
        if (!routeClicked) {
            h1Tag.innerHTML = 'Plastic Bag';
        }
    });
    
    plasticRoute.addEventListener('mouseout', function() {
        if (!routeClicked) {
            h1Tag.innerHTML = 'Which bag do you want to use?';
        }
    });

    // Tote Hover & Click
    toteRoute.addEventListener('click', function(){
        document.querySelector('#paper-left').className = 'show';
        document.querySelector('#paper-right').className = 'show';
        paperRoute.className = 'hide';
        plasticRoute.className = 'hide';
        toteRoute.style.backgroundColor = '#ffffff00';
        h1Tag.innerHTML = 'Tote Bag';
        routeClicked = true;
    });

    toteRoute.addEventListener('mouseover', function() {
        if (!routeClicked) {
            h1Tag.innerHTML = 'Tote Bag';
        }
    });
    
    toteRoute.addEventListener('mouseout', function() {
        if (!routeClicked) {
            h1Tag.innerHTML = 'Which bag do you want to use?';
        }
    });

    // -------------------------------- All --------------------------------    


    // -------------------------------- Left --------------------------------    
    document.querySelector('#school').addEventListener('click', function(){
        textbook.className = 'yes-opacity';
        document.querySelector('#school').className = 'selected';
    });

    document.querySelector('#textbook ul li:first-child').addEventListener('click', function(){
        document.querySelector('#sad').className = 'yes-opacity';
        document.querySelector('#textbook ul li:first-child').className = 'selected';
    });

    document.querySelector('#sad').addEventListener('click', function(){
        document.querySelector('#bin').className = 'yes-opacity';
    });

    // -------------------------------- Right --------------------------------
    let endPaper;

    document.querySelector('#recycle-bin').addEventListener('click', function(){
        document.querySelector('#repurpose').className = 'yes-opacity';
    });

    document.querySelector('#news-paper').addEventListener('click', function(){
        document.querySelector('#end').className = 'yes-opacity';
        h1Tag.innerHTML = 'News Paper';
        paperRoute.className = 'hide';
        document.querySelector('#news-svg').className = 'show';
        endPaper = 'news';
    });

    document.querySelector('#crane').addEventListener('click', function(){
        document.querySelector('#end').className = 'yes-opacity';
        h1Tag.innerHTML = 'Paper Crane';
        paperRoute.className = 'hide';
        document.querySelector('#crane-svg').className = 'show';
        endPaper = 'crane';
    });

    document.querySelector('#crane').addEventListener('click', function(){
        document.querySelector('#end').className = 'yes-opacity';
        h1Tag.innerHTML = 'Paper Crane';
        paperRoute.className = 'hide';
        document.querySelector('#crane-svg').className = 'show';
        endPaper = 'crane';
    });

    document.querySelector('#news-return').addEventListener('click', function(){
        h1Tag.innerHTML = 'Which bag do you want to use?';
        document.querySelector('#paper-right').className = 'hide';
        document.querySelector('#paper-left').className = 'hide';
        plasticRoute.className = 'show';
        toteRoute.className = 'show';
        document.querySelector(`#${endPaper}-svg`).className = 'show';
        routeClicked = false;
    });

})();