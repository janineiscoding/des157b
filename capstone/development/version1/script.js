(function() {
    'use strict';
    console.log('reading js');
    const paperRoute = document.querySelector('#paper-route');
    const plasticRoute = document.querySelector('#plastic-route');
    const toteRoute = document.querySelector('#tote-route');

    document.querySelector('#paper-route').addEventListener('click', function(){
        document.querySelector('#location').className = 'show';
        plasticRoute.className = 'hide';
        toteRoute.className = 'hide';
        paperRoute.style.backgroundColor = '#ffffff00';
    });

})();