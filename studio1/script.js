(function(){
    'use strict'
    console.log('reading js');

    const text = document.querySelector('#text');
    const thought = document.querySelector('#thought');
    const arrow = document.querySelector('#arrow');
    const sign = document.querySelector('#sign');
    const invalid = setInterval(checkTime, 1000);
    const myVideo = document.querySelector('#my-video');
    const loading = document.querySelector('.fa-spinner');

    myVideo.addEventListener('playing', function() {
        loading.style.display = 'none';
    });

    myVideo.addEventListener('mousemove', function(){
        myVideo.style.filter = 'saturate(0)';
    })


    function checkTime(){
        if (0 < myVideo.currentTime && myVideo.currentTime < 3){
            text.className = 'showing';
        } else {
            text.className = 'hidden';
        }

        if (5 < myVideo.currentTime && myVideo.currentTime < 8){
            arrow.className = 'showing';
        } else {
            arrow.className = 'hidden';
        }

        if (13 < myVideo.currentTime && myVideo.currentTime < 16){
            thought.className = 'showing';
        } else {
            thought.className = 'hidden';
        }

        if (21 < myVideo.currentTime && myVideo.currentTime < 26){
            sign.className = 'showing';
        } else {
            sign.className = 'hidden';
        }
    }
})();