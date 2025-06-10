(function() {
    'use strict';
    console.log('reading js');
    const paperRoute = document.querySelector('#paper-route');
    const startPaper = document.querySelector('#start-paper');
    const brokeBag = document.querySelector('#broke-bag');
    const plasticRoute = document.querySelector('#plastic-route');
    const startPlastic = document.querySelector('#start-plastic');
    const toteRoute = document.querySelector('#tote-route');
    const startTote = document.querySelector('#start-tote');
    const h1Tag = document.querySelector('h1');
    const textbook = document.querySelector('#textbook');
    let routeClicked = false;
    let paperCompleted = false;
    let plasticCompleted = false;
    let toteCompleted = false;
    let toteBadCompleted = false;
    let defaultText;

    // -------------------------------- Center --------------------------------
    sustainabilityBags();
    h1Tag.innerHTML = `${defaultText}`;

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
            h1Tag.innerHTML = `${defaultText}`;
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
            newsSVG.style.cursor = 'default';
        }
    });
    
    newsSVG.addEventListener('mouseout', function() {
        if (!routeClicked) {
            h1Tag.textContent = `${defaultText}`;
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
            craneSVG.style.cursor = 'default';
        }
    });
        
    craneSVG.addEventListener('mouseout', function() {
        if (!routeClicked) {
            h1Tag.textContent = `${defaultText}`;
        }
    });

    // Cardboard SVG
    const cardboardSVG = document.querySelector('#cardboard-svg');
    craneSVG.addEventListener('click', function(){
        preventDefault();
    });
    
    cardboardSVG.addEventListener('mouseover', function() {
        if (!routeClicked) {
            h1Tag.textContent = 'Recycling is Repurposing – Cardboard';
            cardboardSVG.style.cursor = 'default';
        }
    });
        
    cardboardSVG.addEventListener('mouseout', function() {
        if (!routeClicked) {
            h1Tag.textContent = `${defaultText}`;
        }
    });

    // New Paper Bag SVG
    const newPaperSVG = document.querySelector('#paper-bag-svg');
    newPaperSVG.addEventListener('click', function(){
        preventDefault();
    });
    
    newPaperSVG.addEventListener('mouseover', function() {
        if (!routeClicked) {
            h1Tag.textContent = 'Recycling is Repurposing – Paper Bag';
            newPaperSVG.style.cursor = 'default';
        }
    });
        
    newPaperSVG.addEventListener('mouseout', function() {
        if (!routeClicked) {
            h1Tag.textContent = `${defaultText}`;
        }
    });

    // Plastic Hover & Click
    startPlastic.addEventListener('click', function(){
        document.querySelector('#plastic-left').className = 'show';
        document.querySelector('#plastic-right').className = 'show';
        paperRoute.className = 'hide';
        toteRoute.className = 'hide';
        plasticRoute.style.backgroundColor = '#ffffff00';
        h1Tag.innerHTML = 'Plastic Bag';
        routeClicked = true;
    });

    startPlastic.addEventListener('mouseover', function() {
        if (!routeClicked) {
            h1Tag.innerHTML = 'Plastic Bag';
        }
    });
    
    startPlastic.addEventListener('mouseout', function() {
        if (!routeClicked) {
            h1Tag.innerHTML = `${defaultText}`;
        }
    });

    // Plate
    const plateSVG = document.querySelector('#plate');
    plateSVG.addEventListener('click', function(){
        preventDefault();
    });
    
    plateSVG.addEventListener('mouseover', function() {
        if (!routeClicked) {
            h1Tag.textContent = 'Consuming Convenience';
            plateSVG.style.cursor = 'default';
        }
    });
        
    plateSVG.addEventListener('mouseout', function() {
        if (!routeClicked) {
            h1Tag.textContent = `${defaultText}`;
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
            h1Tag.innerHTML = `${defaultText}`;
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
            loveSVG.style.cursor = 'default';
        }
    });
        
    loveSVG.addEventListener('mouseout', function() {
        if (!routeClicked) {
            h1Tag.textContent = `${defaultText}`;
        }
    });

    // Trash Tote
    const trashToteSVG = document.querySelector('#trash-tote-svg');
    trashToteSVG.addEventListener('click', function(){
        preventDefault();
    });
    
    trashToteSVG.addEventListener('mouseover', function() {
        if (!routeClicked) {
            h1Tag.textContent = 'Fast Fashion';
            trashToteSVG.style.cursor = 'default';
        }
    });
        
    trashToteSVG.addEventListener('mouseout', function() {
        if (!routeClicked) {
            h1Tag.textContent = `${defaultText}`;
        }
    });

    // OLD Trash Tote
    const oldTrashToteSVG = document.querySelector('#old-trash-tote-svg');
    oldTrashToteSVG.addEventListener('click', function(){
        preventDefault();
    });
    
    oldTrashToteSVG.addEventListener('mouseover', function() {
        if (!routeClicked) {
            h1Tag.textContent = 'About Time';
            oldTrashToteSVG.style.cursor = 'default';
        }
    });
        
    oldTrashToteSVG.addEventListener('mouseout', function() {
        if (!routeClicked) {
            h1Tag.textContent = `${defaultText}`;
        }
    });
    
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
        textbook.className = 'show';
        document.querySelector('#paper-school').className = 'selected';
    });

    document.querySelector('#heavy1').addEventListener('click', function(){
        document.querySelector('#sad h2').innerHTML = 'Darn! The bag broke from the weight!';
        document.querySelector('#sad').className = 'show';
        document.querySelector('#heavy1').className = 'selected';
        document.querySelector('#start-paper').className = 'hide';
        brokeBag.className = 'show';
        setTimeout(function(){
            document.querySelector('#bin').className = 'show';
        },1000)
    });

    document.querySelector('#not-heavy1').addEventListener('click', function(){
        document.querySelector('#sad h2').innerHTML = 'Darn, the bag broke! The handle was too thin.';
        document.querySelector('#sad').className = 'show';
        document.querySelector('#not-heavy1').className = 'selected';
        document.querySelector('#start-paper').className = 'hide';
        brokeBag.className = 'show';
        setTimeout(function(){
            document.querySelector('#bin').className = 'show';
        },1000)
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

    document.querySelector('#paper-store').addEventListener('click', function(){
        document.querySelector('#food').className = 'show';
        document.querySelector('#paper-store').className = 'selected';
    });

    document.querySelector('#heavy2').addEventListener('click', function(){
        document.querySelector('#drop h2').innerHTML = 'Darn! The bag broke from the weight!';
        document.querySelector('#drop').className = 'show';
        document.querySelector('#heavy1').className = 'selected';
        document.querySelector('#start-paper').className = 'hide';
        brokeBag.className = 'show';
        setTimeout(function(){
            document.querySelector('#bin').className = 'show';
        },1000)
    });

    document.querySelector('#not-heavy2').addEventListener('click', function(){
        document.querySelector('#drop h2').innerHTML = 'Darn, the bag broke! Should have double-bagged.';
        document.querySelector('#drop').className = 'show';
        document.querySelector('#not-heavy2').className = 'selected';
        document.querySelector('#start-paper').className = 'hide';
        brokeBag.className = 'show';
        setTimeout(function(){
            document.querySelector('#bin').className = 'show';
        },1000)
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

    document.querySelector('#paper-park').addEventListener('click', function(){
        document.querySelector('#rain').className = 'show';
        document.querySelector('#paper-park').className = 'selected';
    });

    document.querySelector('#heavy3').addEventListener('click', function(){
        document.querySelector('#wet h2').innerHTML = 'The paper bag got wet and broke as you ran.';
        document.querySelector('#wet').className = 'show';
        document.querySelector('#heavy3').className = 'selected';
        document.querySelector('#start-paper').className = 'hide';
        brokeBag.className = 'show';
        setTimeout(function(){
            document.querySelector('#bin').className = 'show';
        },1000)
    });

    document.querySelector('#not-heavy3').addEventListener('click', function(){
        document.querySelector('#wet h2').innerHTML = 'It took too long to get home and the wet paper-bag broke.';
        document.querySelector('#wet').className = 'show';
        document.querySelector('#not-heavy3').className = 'selected';
        document.querySelector('#start-paper').className = 'hide';
        brokeBag.className = 'show';
        setTimeout(function(){
            document.querySelector('#bin').className = 'show';
        },1000)
    });

    for( const eachLi of document.querySelectorAll("#rain ul li")){
        let itemClicked = false;
        eachLi.addEventListener('click', function(event){
            if( !itemClicked ){
                event.target.className = 'selected';
                document.querySelector('#rain').className = "done";
                itemClicked = true;
            }
        });
    }

    document.querySelector('#paper-office').addEventListener('click', function(){
        document.querySelector('#accident').className = 'show';
        document.querySelector('#paper-office').className = 'selected';
    });

    document.querySelector('#heavy4').addEventListener('click', function(){
        document.querySelector('#rip').className = 'show';
        document.querySelector('#heavy3').className = 'selected';
        document.querySelector('#start-paper').className = 'hide';
        brokeBag.className = 'show';
        setTimeout(function(){
            document.querySelector('#bin').className = 'show';
        },1000)
    });

    document.querySelector('#not-heavy4').addEventListener('click', function(){
        document.querySelector('#rip').className = 'show';
        document.querySelector('#heavy3').className = 'selected';
        document.querySelector('#start-paper').className = 'hide';
        brokeBag.className = 'show';
        setTimeout(function(){
            document.querySelector('#bin').className = 'show';
        },1000)
    });

    for( const eachLi of document.querySelectorAll("#accident ul li")){
        let itemClicked = false;
        eachLi.addEventListener('click', function(event){
            if( !itemClicked ){
                event.target.className = 'selected';
                document.querySelector('#accident').className = "done";
                itemClicked = true;
            }
        });
    }
    // Plastic
    const microplastic = document.querySelector('#microplastic');
    document.querySelector('#plastic-school').addEventListener('click', function(){
        document.querySelector('#waves').className = 'show';
        document.querySelector('#plastic-location').className = 'selected';
        setTimeout(function(){
            startPlastic.className = 'hide';
            microplastic.className = 'show';
            document.querySelector('#sea-animal').className = 'show';
        },1000)
    });

    document.querySelector('#plastic-store').addEventListener('click', function(){
        document.querySelector('#waves').className = 'show';
        document.querySelector('#plastic-location').className = 'selected';
        setTimeout(function(){
            startPlastic.className = 'hide';
            microplastic.className = 'show';
            document.querySelector('#sea-animal').className = 'show';
        },1000)
    });

    document.querySelector('#plastic-park').addEventListener('click', function(){
        document.querySelector('#waves').className = 'show';
        document.querySelector('#plastic-location').className = 'selected';
        setTimeout(function(){
            startPlastic.className = 'hide';
            microplastic.className = 'show';
            document.querySelector('#sea-animal').className = 'show';
        },1000)
    });

    document.querySelector('#plastic-office').addEventListener('click', function(){
        document.querySelector('#waves').className = 'show';
        document.querySelector('#plastic-location').className = 'selected';
        setTimeout(function(){
            startPlastic.className = 'hide';
            microplastic.className = 'show';
            h1Tag.innerHTML = 'Microplastic';
            document.querySelector('#sea-animal').className = 'show';
        },1000)
    });

    for( const eachLi of document.querySelectorAll("#plastic-location ul li")){
        let itemClicked = false;
        eachLi.addEventListener('click', function(event){
            if( !itemClicked ){
                event.target.className = 'selected';
                document.querySelector('#plastic-location').className = "done";
                itemClicked = true;
            }
        });
    } 

    let caughtFish;
    document.querySelector('#salmon').addEventListener('click', function(){
        microplastic.classList = 'hide';
        document.querySelector('#salmon-svg').className = 'show';
        h1Tag.innerHTML = 'Salmon';
        caughtFish = 'salmon';
        setTimeout(function(){
            document.querySelector('span').innerHTML = caughtFish;
            document.querySelector('#caught').className = 'show';
            document.querySelector('#salmon-svg').className = 'hide';
            document.querySelector('#salmon-plate-svg').className = 'show';
        },1000)
        setTimeout(function(){
            document.querySelector('#research').className = 'show';
        },3000)
        setTimeout(function(){
            document.querySelector('#convenience').className = 'show';
        },5000)
    });

    document.querySelector('#crab').addEventListener('click', function(){
        microplastic.classList = 'hide';
        document.querySelector('#crab-svg').className = 'show';
        h1Tag.innerHTML = 'Crab';
        caughtFish = 'crab';
        setTimeout(function(){
            document.querySelector('span').innerHTML = caughtFish;
            document.querySelector('#caught').className = 'show';
            document.querySelector('#crab-svg').className = 'hide';
            document.querySelector('#crab-plate-svg').className = 'show';
        },1000)
        setTimeout(function(){
            document.querySelector('#research').className = 'show';
        },3000)
        setTimeout(function(){
            document.querySelector('#convenience').className = 'show';
        },5000)
    });

    document.querySelector('#shrimp').addEventListener('click', function(){
        microplastic.classList = 'hide';
        document.querySelector('#shrimp-svg').className = 'show';
        h1Tag.innerHTML = 'Shrimp';
        caughtFish = 'shrimp';
        setTimeout(function(){
            document.querySelector('span').innerHTML = caughtFish;
            document.querySelector('#caught').className = 'show';
            document.querySelector('#shrimp-svg').className = 'hide';
            document.querySelector('#shrimp-plate-svg').className = 'show';
        },1000)
        setTimeout(function(){
            document.querySelector('#research').className = 'show';
        },3000)
        setTimeout(function(){
            document.querySelector('#convenience').className = 'show';
        },5000)
    });

    document.querySelector('#clam').addEventListener('click', function(){
        microplastic.classList = 'hide';
        document.querySelector('#clam-svg').className = 'show';
        h1Tag.innerHTML = 'Clam';
        caughtFish = 'clam';
        setTimeout(function(){
            document.querySelector('span').innerHTML = caughtFish;
            document.querySelector('#caught').className = 'show';
            document.querySelector('#clam-svg').className = 'hide';
            document.querySelector('#clam-plate-svg').className = 'show';
        },1000)
        setTimeout(function(){
            document.querySelector('#research').className = 'show';
        },3000)
        setTimeout(function(){
            document.querySelector('#convenience').className = 'show';
        },5000)
    });

    for( const eachLi of document.querySelectorAll("#sea-animal ul li")){
        let itemClicked = false;
        eachLi.addEventListener('click', function(event){
            if( !itemClicked ){
                event.target.className = 'selected';
                document.querySelector('#sea-animal').className = "done";
                itemClicked = true;
            }
        });
    } 


    // Tote bag
    const toteLocation = document.querySelector('#tote-location');
    const condition = document.querySelector('#condition');

    document.querySelector('#tote-school').addEventListener('click', function(){
        document.querySelector('#continue').className = 'show';
        toteLocation.className = 'selected';
        setTimeout(function(){
            condition.className = 'show';
        },1000)
    });

    document.querySelector('#tote-store').addEventListener('click', function(){
        document.querySelector('#continue').className = 'show';
        toteLocation.className = 'selected';
        setTimeout(function(){
            condition.className = 'show';
        },1000)
    });

    document.querySelector('#tote-park').addEventListener('click', function(){
        document.querySelector('#continue').className = 'show';
        toteLocation.className = 'selected';
        setTimeout(function(){
            condition.className = 'show';
        },1000)
    });

    document.querySelector('#tote-office').addEventListener('click', function(){
        document.querySelector('#continue').className = 'show';
        toteLocation.className = 'selected';
        setTimeout(function(){
            condition.className = 'show';
        },1000)
    });

    for( const eachLi of document.querySelectorAll("#tote-location ul li")){
        let itemClicked = false;
        eachLi.addEventListener('click', function(event){
            if( !itemClicked ){
                event.target.className = 'selected';
                toteLocation.className = "done";
                itemClicked = true;
            }
        });
    } 
    
    document.querySelector('#not-throw').addEventListener('click', function(){
        document.querySelector('#kept-well').className = 'show';
        document.querySelector('#start-tote').className = 'hide';
        document.querySelector('#old-tote-svg').className = 'show';
        condition.className = 'selected';
        setTimeout(function(){
            document.querySelector('#condition2').className = 'show';
        },1000)
    });

    document.querySelector('#throw').addEventListener('click', function(){
        document.querySelector('#tote-right').style.gap = '10vh';
        document.querySelector('#trash').className = 'show';
        startTote.className = 'hide';
        h1Tag.innerHTML = 'Trash';
        document.querySelector('#trash-tote-svg').className = 'show';
        setTimeout(function(){
            document.querySelector('#sustainability').className = 'show';
        },1000)
        setTimeout(function(){
            document.querySelector('#fashion').className = 'show';
        },3000)
    });

    for( const eachLi of document.querySelectorAll('#condition ul li')){
        let itemClicked = false;
        eachLi.addEventListener('click', function(event){
            if( !itemClicked ){
                event.target.className = 'selected';
                condition.className = 'done';
                itemClicked = true;
            }
        });
    }

    // -------------------------------- Right --------------------------------
    // Paper
    let endPaper;

    document.querySelector('#recycle-bin').addEventListener('click', function(){
        document.querySelector('#repurpose').className = 'yes-opacity';
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

    document.querySelector('#trash-bin').addEventListener('click', function(){
        document.querySelector('#trash-bin').className = 'inactive';
    });

    document.querySelector('#compost-bin').addEventListener('click', function(){
        document.querySelector('#compost-bin').className = 'inactive';
    });

    document.querySelector('#news-paper').addEventListener('click', function(){
        document.querySelector('#end').className = 'yes-opacity';
        h1Tag.innerHTML = 'News Paper';
        brokeBag.className = 'hide';
        document.querySelector('#news-svg').className = 'show';
        endPaper = 'news';
    });

    document.querySelector('#crane').addEventListener('click', function(){
        document.querySelector('#end').className = 'yes-opacity';
        h1Tag.innerHTML = 'Paper Crane';
        brokeBag.className = 'hide';
        document.querySelector('#crane-svg').className = 'show';
        endPaper = 'crane';
    });

    document.querySelector('#cardboard').addEventListener('click', function(){
        document.querySelector('#end').className = 'yes-opacity';
        h1Tag.innerHTML = 'Cardboard';
        brokeBag.className = 'hide';
        document.querySelector('#cardboard-svg').className = 'show';
        endPaper = 'cardboard';
    });

    document.querySelector('#new-paper-bag').addEventListener('click', function(){
        document.querySelector('#end').className = 'yes-opacity';
        h1Tag.innerHTML = 'Another Paper Bag';
        brokeBag.className = 'hide';
        document.querySelector('#paper-bag-svg').className = 'show';
        endPaper = 'paper-bag';
    });

    document.querySelector('#paper-return').addEventListener('click', function(){
        document.querySelector('#paper-right').className = 'hide';
        document.querySelector('#paper-left').className = 'hide';
        plasticRoute.className = 'show';
        toteRoute.className = 'show';
        document.querySelector(`#${endPaper}-svg`).className = 'show';
        routeClicked = false;
        paperCompleted = true;
        sustainabilityBags()
        h1Tag.innerHTML = `${defaultText}`
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
    // Plastic
    document.querySelector('#convenience-return').addEventListener('click', function(){
        document.querySelector('#plastic-right').className = 'hide';
        document.querySelector('#plastic-left').className = 'hide';
        paperRoute.className = 'show';
        toteRoute.className = 'show';
        document.querySelector(`#${caughtFish}-plate-svg`).className = 'hide';
        document.querySelector('#plate').className = 'show';
        routeClicked = false;
        plasticCompleted = true;
        sustainabilityBags();
        h1Tag.innerHTML = `${defaultText}`
    });

    // Tote
    document.querySelector('#not-throw2').addEventListener('click', function(){
        document.querySelector('#love').className = 'show';
        document.querySelector('#condition2').className = 'selected';
        document.querySelector('#old-tote-svg').className = 'hide';
        document.querySelector('#love-tote-svg').className = 'show';
    });

    document.querySelector('#throw2').addEventListener('click', function(){
        document.querySelector('#old-tote-svg').className = 'hide';
        document.querySelector('#old-trash-tote-svg').className = 'show';
        h1Tag.innerHTML = 'Trash';
        document.querySelector('#about-time').className = 'show';
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
        document.querySelector('#tote-right').className = 'hide';
        document.querySelector('#tote-left').className = 'hide';
        paperRoute.className = 'show';
        plasticRoute.className = 'show';
        document.querySelector(`#love-tote-svg`).className = 'show';
        routeClicked = false;
        toteCompleted = true;
        sustainabilityBags();
        h1Tag.innerHTML = `${defaultText}`
    });

    document.querySelector('#fashion-return').addEventListener('click', function(){
        document.querySelector('#tote-right').className = 'hide';
        document.querySelector('#tote-left').className = 'hide';
        paperRoute.className = 'show';
        plasticRoute.className = 'show';
        document.querySelector(`#trash-tote-svg`).className = 'show';
        routeClicked = false;
        toteBadCompleted = true;
        sustainabilityBags();
        h1Tag.innerHTML = `${defaultText}`
    });

    document.querySelector('#time-return').addEventListener('click', function(){
        document.querySelector('#tote-right').className = 'hide';
        document.querySelector('#tote-left').className = 'hide';
        paperRoute.className = 'show';
        plasticRoute.className = 'show';
        document.querySelector(`#old-trash-tote-svg`).className = 'show';
        routeClicked = false;
        sustainabilityBags();
        h1Tag.innerHTML = `${defaultText}`
    });

    function sustainabilityBags(){
        if(paperCompleted == true && plasticCompleted == true && toteCompleted == true){
            defaultText = 'Congradulations! You have seen the journey of all bags.';
        } else if(paperCompleted == true && plasticCompleted == true && toteBadCompleted == true){
            defaultText = 'Congradulations! You have seen the journey of all bags.';
        } else if(paperCompleted == true && plasticCompleted == false && toteCompleted == true){
            defaultText = 'Thank you for choosing sustainability!';
        } else if(paperCompleted == false && plasticCompleted == true && toteCompleted == false){
            defaultText = `Life in plastic, it's not fantastic ♪`
        } else {
            defaultText = 'Which bag do you want to use?';
        }
    }
})();