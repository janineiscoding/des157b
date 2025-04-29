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
        document.querySelector('#date').innerHTML = allDays(data);
    } 
    
    function allDays(data){
        let html = '';
        const dataPoints = Object.keys(data);
        console.log(dataPoints);
        dataPoints.forEach(function(eachDate){
            html += `<li class="${data[eachDate].id}">${data[eachDate].date}</li>`;
            document.querySelector('li').addEventListener('click', function(){
                const newValue = this.value;
                updateInterface(newValue, globalData);
            });
        });
        return html;
    }

    getData();

    const usage = document.querySelector('#usage');
    const totalTime = document.querySelector('#total-time');

    document.querySelector('.day1').addEventListener('click', function(){
        usage.innerHTML += 'hi';
        console.log('um');
    });

    // document.querySelector('li').addEventListener('click', function(){
    //     if (className == day1){
    //         usage.innerHTML = 'number';
    //     }
    // });

    

})();