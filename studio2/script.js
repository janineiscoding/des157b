(function(){
    'use strict'
    console.log('reading js');

    async function getData(){
        const data = await myBattery.json();
        // console.log(data);
    }
    
    let globalData;
    async function getData(){
        const myBattery = await fetch('data.json');
        const data = await myBattery.json();
        globalData = data;

        const usage = document.querySelector('#usage');
        const totalTime = document.querySelector('#total-time');

        document.querySelector('#day1').addEventListener('click', function(){
            const day1Use = data["4/13"].usage_percent;
            const day1Time = data["4/13"].usage_time;
            usage.innerHTML = day1Use;
            totalTime.innerHTML = day1Time;
        });

        document.querySelector('#day2').addEventListener('click', function(){
            const day2Use = data["4/14"].usage_percent;
            const day2Time = data["4/14"].usage_time;
            usage.innerHTML = day2Use;
            totalTime.innerHTML = day2Time;

            if (day2Use >= 1 && day2Use <= 100){
                document.querySelector('#battery').src = 'images/low.svg';
            } else if (day2Use >= 101 && day2Use <= 200){
                document.querySelector('#battery').src = 'images/half.svg';
            } else {
                document.querySelector('#battery').src = 'images/full.svg';
            }
        });

        document.querySelector('#day3').addEventListener('click', function(){
            const day3Use = data["4/15"].usage_percent;
            const day3Time = data["4/15"].usage_time;
            usage.innerHTML = day3Use;
            totalTime.innerHTML = day3Time;

            if (day3Use >= 1 && day3Use <= 100){
                document.querySelector('#battery').src = 'images/low.svg';
            } else if (day3Use >= 101 && day3Use <= 200){
                document.querySelector('#battery').src = 'images/half.svg';
            } else {
                document.querySelector('#battery').src = 'images/full.svg';
            }
        });

        document.querySelector('#day4').addEventListener('click', function(){
            const day4Use = data["4/16"].usage_percent;
            const day4Time = data["4/16"].usage_time;
            usage.innerHTML = day4Use;
            totalTime.innerHTML = day4Time;

            if (day4Use >= 1 && day4Use <= 100){
                document.querySelector('#battery').src = 'images/low.svg';
            } else if (day4Use >= 101 && day4Use <= 200){
                document.querySelector('#battery').src = 'images/half.svg';
            } else {
                document.querySelector('#battery').src = 'images/full.svg';
            }
        });

        document.querySelector('#day5').addEventListener('click', function(){
            const day5Use = data["4/17"].usage_percent;
            const day5Time = data["4/17"].usage_time;
            usage.innerHTML = day5Use;
            totalTime.innerHTML = day5Time;

            if (day5Use >= 1 && day5Use <= 100){
                document.querySelector('#battery').src = 'images/low.svg';
            } else if (day5Use >= 101 && day5Use <= 200){
                document.querySelector('#battery').src = 'images/half.svg';
            } else {
                document.querySelector('#battery').src = 'images/full.svg';
            }
        });

        document.querySelector('#day6').addEventListener('click', function(){
            const day6Use = data["4/18"].usage_percent;
            const day6Time = data["4/18"].usage_time;
            usage.innerHTML = day6Use;
            totalTime.innerHTML = day6Time;

            if (day6Use >= 1 && day6Use <= 100){
                document.querySelector('#battery').src = 'images/low.svg';
            } else if (day6Use >= 101 && day6Use <= 200){
                document.querySelector('#battery').src = 'images/half.svg';
            } else {
                document.querySelector('#battery').src = 'images/full.svg';
            }
        });

        document.querySelector('#day7').addEventListener('click', function(){
            const day7Use = data["4/19"].usage_percent;
            const day7Time = data["4/19"].usage_time;
            usage.innerHTML = day7Use;
            totalTime.innerHTML = day7Time;

            if (day7Use >= 1 && day7Use <= 100){
                document.querySelector('#battery').src = 'images/low.svg';
            } else if (day7Use >= 101 && day7Use <= 200){
                document.querySelector('#battery').src = 'images/half.svg';
            } else {
                document.querySelector('#battery').src = 'images/full.svg';
            }
        });

        document.querySelector('#day8').addEventListener('click', function(){
            const day8Use = data["4/20"].usage_percent;
            const day8Time = data["4/20"].usage_time;
            usage.innerHTML = day8Use;
            totalTime.innerHTML = day8Time;

            if (day8Use >= 1 && day8Use <= 100){
                document.querySelector('#battery').src = 'images/low.svg';
            } else if (day8Use >= 101 && day8Use <= 200){
                document.querySelector('#battery').src = 'images/half.svg';
            } else {
                document.querySelector('#battery').src = 'images/full.svg';
            }
        });

        document.querySelector('#day9').addEventListener('click', function(){
            const day9Use = data["4/21"].usage_percent;
            const day9Time = data["4/21"].usage_time;
            usage.innerHTML = day9Use;
            totalTime.innerHTML = day9Time;

            if (day9Use >= 1 && day9Use <= 100){
                document.querySelector('#battery').src = 'images/low.svg';
            } else if (day9Use >= 101 && day9Use <= 200){
                document.querySelector('#battery').src = 'images/half.svg';
            } else {
                document.querySelector('#battery').src = 'images/full.svg';
            }
        });

        document.querySelector('#day10').addEventListener('click', function(){
            const day10Use = data["Now"].usage_percent;
            const day10Time = data["Now"].usage_time;
            usage.innerHTML = day10Use;
            totalTime.innerHTML = day10Time;

            if (day10Use >= 1 && day10Use <= 100){
                document.querySelector('#battery').src = 'images/low.svg';
            } else if (day10Use >= 101 && day10Use <= 200){
                document.querySelector('#battery').src = 'images/half.svg';
            } else {
                document.querySelector('#battery').src = 'images/full.svg';
            }
        });
    } 

    getData();

    


})();