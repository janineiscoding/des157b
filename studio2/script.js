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
            html += `<li id="${data[eachDate].date}">${data[eachDate].date}</li>`;
            document.querySelector('li').addEventListener('click', function(){
                const newValue = this.value;
                updateInterface(newValue, globalData);
            });
        });
        return html;
    }
    
    function updateInterface(value, jsonData){
        let html = ''
        html += `at ${jsonData[value].time} I was feeling ${feeling[ jsonData[value].mood] } because of: ${jsonData[value].reason}`;
        html += '</p>';
        $('#usage').innerHTML = `${data[eachDate].usage_percent}`;
        document.querySelector('#result').innerHTML = html;
    }

    getData();

})();