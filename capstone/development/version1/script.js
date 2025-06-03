(function() {
    'use strict';
    console.log('reading js');
    const paperRoute = document.querySelector('#paper-route');
    const plasticRoute = document.querySelector('#plastic-route');
    const toteRoute = document.querySelector('#tote-route');
    const h1Tag = document.querySelector('h1');
    const textbook = document.querySelector('#textbook');
    let hasBeenClicked = false;

    // need to fix paperroute


    // -------------------------------- Center --------------------------------
    // Paper Hover & Click
    paperRoute.addEventListener('click', function(){
        document.querySelector('#left').className = 'show';
        document.querySelector('#right').className = 'show';
        plasticRoute.className = 'hide';
        toteRoute.className = 'hide';
        paperRoute.style.backgroundColor = '#ffffff00';
        h1Tag.innerHTML = 'Paper Bag';
        hasBeenClicked = true;
    });

    paperRoute.addEventListener('mouseover', function() {
        if (!hasBeenClicked) {
            h1Tag.innerHTML = 'Paper Bag';
        }
    });
    
    paperRoute.addEventListener('mouseout', function() {
        if (!hasBeenClicked) {
            h1Tag.innerHTML = 'Which bag do you want to use?';
        }
    });

    // // News Paper SVG
    // document.querySelector('#news-svg').addEventListener('mouseover', function() {
    //     // if (!hasBeenClicked) {
    //         h1Tag.innerHTML = 'News Paper';
    //     // }
    // });
    
    // document.querySelector('#news-svg').addEventListener('mouseout', function() {
    //     // if (!hasBeenClicked) {
    //         h1Tag.innerHTML = 'Which bag do you want to use?';
    //     // }
    // });

    // Plastic Hover & Click
    plasticRoute.addEventListener('click', function(){
        document.querySelector('#left').className = 'show';
        document.querySelector('#right').className = 'show';
        paperRoute.className = 'hide';
        toteRoute.className = 'hide';
        plasticRoute.style.backgroundColor = '#ffffff00';
        h1Tag.innerHTML = 'Plastic Bag';
        hasBeenClicked = true;
    });

    plasticRoute.addEventListener('mouseover', function() {
        if (!hasBeenClicked) {
            h1Tag.innerHTML = 'Plastic Bag';
        }
    });
    
    plasticRoute.addEventListener('mouseout', function() {
        if (!hasBeenClicked) {
            h1Tag.innerHTML = 'Which bag do you want to use?';
        }
    });

    // Tote Hover & Click
    toteRoute.addEventListener('click', function(){
        document.querySelector('#left').className = 'show';
        document.querySelector('#right').className = 'show';
        paperRoute.className = 'hide';
        plasticRoute.className = 'hide';
        toteRoute.style.backgroundColor = '#ffffff00';
        h1Tag.innerHTML = 'Tote Bag';
        hasBeenClicked = true;
    });

    toteRoute.addEventListener('mouseover', function() {
        if (!hasBeenClicked) {
            h1Tag.innerHTML = 'Tote Bag';
        }
    });
    
    toteRoute.addEventListener('mouseout', function() {
        if (!hasBeenClicked) {
            h1Tag.innerHTML = 'Which bag do you want to use?';
        }
    });

    // -------------------------------- Left --------------------------------
    document.querySelector('#school').addEventListener('click', function(){
        textbook.className = 'yes-opacity';
    });

    document.querySelector('#textbook ul li:first-child').addEventListener('click', function(){
        document.querySelector('#sad').className = 'yes-opacity';
    });

    document.querySelector('#sad').addEventListener('click', function(){
        document.querySelector('#bin').className = 'yes-opacity';
    });

    // -------------------------------- Right --------------------------------
    document.querySelector('#recycle-bin').addEventListener('click', function(){
        document.querySelector('#repurpose').className = 'yes-opacity';
    });

    document.querySelector('#news-paper').addEventListener('click', function(){
        document.querySelector('#end').className = 'yes-opacity';
        h1Tag.innerHTML = 'News Paper';
        paperRoute.innerHTML = '<id="news-svg" img src="../../images/news-paper.svg" alt="news paper"></img>';
    });

    document.querySelector('#news-return').addEventListener('click', function(){
        h1Tag.innerHTML = 'Which bag do you want to use?';
        document.querySelector('#right').className = 'hide';
        document.querySelector('#left').className = 'hide';
        plasticRoute.className = 'show';
        toteRoute.className = 'show';
    });

})();