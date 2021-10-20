const elRedLamp = document.querySelectorAll('.trafficlight-red');
const elYellowLamp = document.querySelectorAll('.trafficlight-yellow');
const elGreenLamp = document.querySelectorAll('.trafficlight-green');
const elPeoples = document.querySelector('.peoples');
const elCars = document.querySelector('.cars'); 

function startTrafficLight(num) {
    setTimeout(() => {
        elRedLamp[num].style.backgroundColor = 'red';
        elPeoples.classList.add('peoples-move');
        elCars.classList.add('car-move');
    }, 0);
    
    setTimeout(() => {
        elYellowLamp[num].style.backgroundColor = 'yellow';
    }, 4100);
    setTimeout(() => {
        elYellowLamp[num].style.backgroundColor = '#aaa';
    }, 4600);
    setTimeout(() => {
        elYellowLamp[num].style.backgroundColor = 'yellow';
    }, 4900);
    setTimeout(() => {
        elYellowLamp[num].style.backgroundColor = '#aaa';
    },5400);
    setTimeout(() => {
        elYellowLamp[num].style.backgroundColor = 'yellow';
    },5700);
    setTimeout(() => {
        elRedLamp[num].style.backgroundColor = '#aaa';
        elYellowLamp[num].style.backgroundColor = '#aaa';
        elGreenLamp[num].style.backgroundColor = 'green';
    }, 6200);
    setTimeout(() => {
        elYellowLamp[num].style.backgroundColor = 'yellow';
    }, 10200);
    setTimeout(() => {
        elYellowLamp[num].style.backgroundColor = '#aaa';
    }, 10700);
    setTimeout(() => {
        elYellowLamp[num].style.backgroundColor = 'yellow';
    }, 11000);
    setTimeout(() => {
        elYellowLamp[num].style.backgroundColor = '#aaa';
    },11500);
    setTimeout(() => {
        elYellowLamp[num].style.backgroundColor = 'yellow';
    },11800);
    setTimeout(() => {
        elGreenLamp[num].style.backgroundColor = '#aaa';
        elYellowLamp[num].style.backgroundColor = '#aaa';
    }, 12300);
}
startTrafficLight(0);
startTrafficLight(1);


setInterval(() => {
    startTrafficLight(0);    
    startTrafficLight(1);    
}, 12300)

// let nums = [1, 2, 3, 9];
// let newNums = [];

// function resultArr (arr) {
//     let num = Number(arr.join(''));

//     num = String(num + 1);

//     newNums = String(num).split('');
//     return console.log(newNums);
// }

// resultArr(nums);