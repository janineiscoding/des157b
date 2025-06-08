(function() {
    'use strict';
    console.log('reading js');
    const paperRoute = document.querySelector('#paper-route');
    const startPaper = document.querySelector('#start-paper');
    const plasticRoute = document.querySelector('#plastic-route');
    const startPlastic = document.querySelector('#start-plastic');
    const toteRoute = document.querySelector('#tote-route');
    const startTote = document.querySelector('#start-tote');
    const h1Tag = document.querySelector('h1');
    const textbook = document.querySelector('#textbook');
    let routeClicked = false;

    // -------------------------------- Center --------------------------------
    // Paper Hover & Click
    startPaper.addEventListener('click', function(){
        document.querySelector('#paper-left').className = 'show';
        document.querySelector('#paper-right').className = 'show';
        plasticRoute.className = 'hide';
        toteRoute.className = 'hide';
        startPaper.style.backgroundColor = '#ffffff00';
        h1Tag.innerHTML = 'Paper Bag';
        routeClicked = true;
    });

    startPaper.addEventListener('mouseover', function() {
        if (!routeClicked) {
            h1Tag.innerHTML = 'Paper Bag';
        }
    });
    
    startPaper.addEventListener('mouseout', function() {
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
            h1Tag.textContent = 'Recycling is Repurposing – News Paper';
        }
    });
    
    newsSVG.addEventListener('mouseout', function() {
        if (!routeClicked) {
            h1Tag.textContent = 'Which bag do you want to use?';
        }
    });

    // Crane Paper SVG
    const craneSVG = document.querySelector('#crane-svg');
    craneSVG.addEventListener('click', function(){
        preventDefault();
    });
    
    craneSVG.addEventListener('mouseover', function() {
        if (!routeClicked) {
            h1Tag.textContent = 'Recycling is Repurposing – Paper Crane';
        }
    });
        
    craneSVG.addEventListener('mouseout', function() {
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
    startTote.addEventListener('click', function(){
        document.querySelector('#tote-left').className = 'show';
        document.querySelector('#tote-right').className = 'show';
        paperRoute.className = 'hide';
        plasticRoute.className = 'hide';
        toteRoute.style.backgroundColor = '#ffffff00';
        h1Tag.innerHTML = 'Tote Bag';
        routeClicked = true;
    });

    startTote.addEventListener('mouseover', function() {
        if (!routeClicked) {
            h1Tag.innerHTML = 'Tote Bag';
        }
    });
    
    startTote.addEventListener('mouseout', function() {
        if (!routeClicked) {
            h1Tag.innerHTML = 'Which bag do you want to use?';
        }
    });

    // Love My Tote
    const loveSVG = document.querySelector('#love-tote-svg');
    loveSVG.addEventListener('click', function(){
        preventDefault();
    });
    
    loveSVG.addEventListener('mouseover', function() {
        if (!routeClicked) {
            h1Tag.textContent = 'Love My Tote';
        }
    });
        
    loveSVG.addEventListener('mouseout', function() {
        if (!routeClicked) {
            h1Tag.textContent = 'Which bag do you want to use?';
        }
    });
    // -------------------------------- All --------------------------------    


    // -------------------------------- Left --------------------------------  
    // Paper  
    for( const eachLi of document.querySelectorAll("#paper-location ul li")){
        let itemClicked = false;

        eachLi.addEventListener('click', function(event){
            if( !itemClicked ){
                event.target.className = 'selected';
                document.querySelector('#paper-location').className = "done";
                itemClicked = true;
            }
        });
    }

    document.querySelector('#paper-school').addEventListener('click', function(){
        textbook.className = 'yes-opacity';
        document.querySelector('#paper-school').className = 'selected';
    });

    document.querySelector('#paper-store').addEventListener('click', function(){
        document.querySelector('#food').className = 'yes-opacity';
        document.querySelector('#paper-store').className = 'selected';
    });

    document.querySelector('#heavy1').addEventListener('click', function(){
        document.querySelector('#sad').className = 'yes-opacity';
        document.querySelector('#heavy1').className = 'selected';
    });

    for( const eachLi of document.querySelectorAll("#textbook ul li")){
        let itemClicked = false;
        eachLi.addEventListener('click', function(event){
            if( !itemClicked ){
                event.target.className = 'selected';
                document.querySelector('#textbook').className = "done";
                itemClicked = true;
            }
        });
    }

    document.querySelector('#heavy2').addEventListener('click', function(){
        document.querySelector('#sad').className = 'yes-opacity';
        document.querySelector('#heavy2').className = 'selected';
    });

    for( const eachLi of document.querySelectorAll("#food ul li")){
        let itemClicked = false;
        eachLi.addEventListener('click', function(event){
            if( !itemClicked ){
                event.target.className = 'selected';
                document.querySelector('#food').className = "done";
                itemClicked = true;
            }
        });
    }

    document.querySelector('#sad').addEventListener('click', function(){
        document.querySelector('#bin').className = 'yes-opacity';
    });

    // Tote bag
    document.querySelector('#tote-school').addEventListener('click', function(){
        document.querySelector('#continue').className = 'show';
        document.querySelector('#tote-school').className = 'selected';
    });

    for( const eachLi of document.querySelectorAll("#tote-location ul li")){
        let itemClicked = false;
        eachLi.addEventListener('click', function(event){
            if( !itemClicked ){
                event.target.className = 'selected';
                document.querySelector('#tote-location').className = "done";
                itemClicked = true;
            }
        });
    }

    document.querySelector('#continue').addEventListener('click', function(){
        document.querySelector('#condition').className = 'show';
    });   
    
    document.querySelector('#not-throw').addEventListener('click', function(){
        document.querySelector('#kept-well').className = 'show';
        document.querySelector('#condition').className = 'selected';
    });

    for( const eachLi of document.querySelectorAll('#condition ul li')){
        let itemClicked = false;
        eachLi.addEventListener('click', function(event){
            if( !itemClicked ){
                event.target.className = 'selected';
                document.querySelector('#condition').className = 'done';
                itemClicked = true;
            }
        });
    }

    // document.querySelector('#kept-well').addEventListener('click', function(){
    //     document.querySelector('#condition2').className = 'show';
    // });

    // document.querySelector('#not-throw2').addEventListener('click', function(){
    //     document.querySelector('#love').className = 'show';
    //     document.querySelector('#condition2').className = 'selected';
    //     document.querySelector('#old-tote-svg').className = 'hide';
    //     document.querySelector('#love-tote-svg').className = 'show';
    // });

    // for( const eachLi of document.querySelectorAll("#condition2 ul li")){
    //     let itemClicked = false;
    //     eachLi.addEventListener('click', function(event){
    //         if( !itemClicked ){
    //             event.target.className = 'selected';
    //             document.querySelector('#condition2').className = "done"
    //             itemClicked = true;
    //         }
    //     });
    // }

    document.querySelector('#not-throw').addEventListener('click', function(){
        document.querySelector('#condition').className = 'selected';
        document.querySelector('#start-tote').className = 'hide';
        document.querySelector('#old-tote-svg').className = 'show';
        document.querySelector('#kept-well').className = 'show';
    });

    // -------------------------------- Right --------------------------------
    // Paper
    let endPaper;

    document.querySelector('#recycle-bin').addEventListener('click', function(){
        document.querySelector('#repurpose').className = 'yes-opacity';
    });

    document.querySelector('#news-paper').addEventListener('click', function(){
        document.querySelector('#end').className = 'yes-opacity';
        h1Tag.innerHTML = 'News Paper';
        startPaper.className = 'hide';
        document.querySelector('#news-svg').className = 'show';
        endPaper = 'news';
    });

    for( const eachLi of document.querySelectorAll("#bin ul li")){
        let itemClicked = false;
        eachLi.addEventListener('click', function(event){
            if( !itemClicked ){
                event.target.className = 'selected';
                document.querySelector('#bin').className = "done"
                itemClicked = true;
            }
        });
    }

    document.querySelector('#crane').addEventListener('click', function(){
        document.querySelector('#end').className = 'yes-opacity';
        h1Tag.innerHTML = 'Paper Crane';
        startPaper.className = 'hide';
        document.querySelector('#crane-svg').className = 'show';
        endPaper = 'crane';
    });

    // document.querySelector('#cardboard').addEventListener('click', function(){
    //     document.querySelector('#end').className = 'yes-opacity';
    //     h1Tag.innerHTML = 'Cardboard';
    //     startPaper.className = 'hide';
    //     document.querySelector('#cardboard-svg').className = 'show';
    //     endPaper = 'cardboard';
    // });

    document.querySelector('#news-return').addEventListener('click', function(){
        h1Tag.innerHTML = 'Which bag do you want to use?';
        document.querySelector('#paper-right').className = 'hide';
        document.querySelector('#paper-left').className = 'hide';
        plasticRoute.className = 'show';
        toteRoute.className = 'show';
        document.querySelector(`#${endPaper}-svg`).className = 'show';
        routeClicked = false;
    });

    for( const eachLi of document.querySelectorAll("#repurpose ul li")){
        let itemClicked = false;
        eachLi.addEventListener('click', function(event){
            if( !itemClicked ){
                event.target.className = 'selected';
                document.querySelector('#repurpose').className = "done"
                itemClicked = true;
            }
        });
    }

    // Tote
    document.querySelector('#kept-well').addEventListener('click', function(){
        document.querySelector('#condition2').className = 'show';
    });

    document.querySelector('#not-throw2').addEventListener('click', function(){
        document.querySelector('#love').className = 'show';
        document.querySelector('#condition2').className = 'selected';
        document.querySelector('#old-tote-svg').className = 'hide';
        document.querySelector('#love-tote-svg').className = 'show';
    });

    for( const eachLi of document.querySelectorAll("#condition2 ul li")){
        let itemClicked = false;
        eachLi.addEventListener('click', function(event){
            if( !itemClicked ){
                event.target.className = 'selected';
                document.querySelector('#condition2').className = "done"
                itemClicked = true;
            }
        });
    }

    document.querySelector('#love-return').addEventListener('click', function(){
        h1Tag.innerHTML = 'Which bag do you want to use?';
        document.querySelector('#tote-right').className = 'hide';
        document.querySelector('#tote-left').className = 'hide';
        paperRoute.className = 'show';
        plasticRoute.className = 'show';
        document.querySelector(`#love-tote-svg`).className = 'show';
        routeClicked = false;
    });
})();