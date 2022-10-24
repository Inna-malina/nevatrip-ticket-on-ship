import {
    ticketOne,
    ticketTwo,
    ticketThree
} from './plus-minus.js';

let btn = document.querySelector('.button-send');
let mainInfo = document.querySelector('.schedule__container');
let resaltInfo = document.querySelector('.resalt__container');


let ticketCostTere = 700;
let ticketCostBack = 700;
let tecketCostTereBack = 1200;
let quantity = 0;
let totalCost = 0;

let totalTicket = document.querySelector('.total-ticket');
let totalCostText = document.querySelector('.total-cost');
let totalWay = document.querySelector('.total-way');
let totalTime = document.querySelector('.total-time-resalt');
let radiobtns = document.querySelectorAll('.radio-element');

//Работаем со временем и его выводом в таблицу
let departure = document.querySelector('.departure-time');
let arrival = document.querySelector('.arrival-time');
let selectOne = document.querySelector('.select-elem-one');
let selectTwo = document.querySelector('.select-elem-two');
let selectTree = document.querySelector('.select-elem-three');
let selectFour = document.querySelector('.select-elem-four');


function showResalt(select) {
    //ковыряем значения объекта select
    let option = select.options[select.selectedIndex];
    departure.innerHTML = option.text; //записываем значение в таблицу

    let optionValue = option.text;
    let hour = Number(optionValue[0] + optionValue[1]);
    let minutes = Number(optionValue[5] + optionValue[6]);

    let resalt = hour + ':' + (minutes + 50);
    arrival.innerHTML = resalt;

    if ((minutes + 50) >= 60) {
        let hour2 = hour + 1;
        let minutes2 = (minutes + 50) - 60;
        if (minutes2 < 10) {
            arrival.innerHTML = hour2 + ':' + '0' + minutes2;

        } else {
            arrival.innerHTML = hour2 + ':' + minutes2;
        }
    }
}

function showResaltThree() {
    //ковыряем значения объекта select
    let optionDeparture = selectTree.options[selectTree.selectedIndex];
    departure.innerHTML = optionDeparture.text; //записываем значение в таблицу отправления

    let optionReturn = selectFour.options[selectFour.selectedIndex];
    let optionValue = optionReturn.text;
    let hour = Number(optionValue[0] + optionValue[1]);
    let minutes = Number(optionValue[5] + optionValue[6]);

    let resalt = hour + ':' + (minutes + 50);
    arrival.innerHTML = resalt;

    if ((minutes + 50) >= 60) {
        let hour2 = hour + 1;
        let minutes2 = (minutes + 50) - 60;
        if (minutes2 < 10) {
            arrival.innerHTML = hour2 + ':' + '0' + minutes2;

        } else {
            arrival.innerHTML = hour2 + ':' + minutes2;
        }
    }


}

btn.addEventListener('click', function (event) {
    event.preventDefault();
    if (selectTree.selectedIndex > selectFour.selectedIndex) {
        alert("Отправление в Питер должно произойти раньше, чем отправление обратно в Москву. Уточните время отправления в Москву.");
    } else {

        // форируем страницу с результатом покупки    
        mainInfo.classList.remove('active');
        mainInfo.classList.add('disactive');

        resaltInfo.classList.remove('disactive');
        resaltInfo.classList.add('active');

        // Количество билетов:
        quantity = Number(ticketOne.value) + Number(ticketTwo.value) + Number(ticketThree.value);
        totalTicket.innerHTML = quantity;

        // Общая стоимость:
        totalCost = (Number(ticketOne.value) * ticketCostTere) + (Number(ticketTwo.value) * ticketCostBack) + (Number(ticketThree.value) * tecketCostTereBack);
        totalCostText.innerHTML = totalCost;

        // Маршрут
        for (let i = 0; i < radiobtns.length; i++) {
            if (radiobtns[i].checked == true) {
                totalWay.innerHTML += `&#9875;${radiobtns[i].value};  `;
            }
            if (radiobtns[0].checked == true) {
                totalTime.innerHTML = 'поездка займёт 50 минут.';
                showResalt(selectOne);
            }


            if (radiobtns[1].checked == true) {
                totalTime.innerHTML = 'поездка займёт 50 минут.';
                showResalt(selectTwo);
            }

            if (radiobtns[2].checked == true) {
                totalTime.innerHTML = 'поездка займёт 1 час 40 минут';

                showResaltThree();
            }
        }
    }

});



let btnReturn = document.querySelector('.button-return');

btnReturn.addEventListener('click', function (event) {
    event.preventDefault();
    location.reload();

});