// Прибавка-удаление количества билетов для "из Москвы в Питер"
let plasOne = document.querySelector('.plas-ticket-one');
let minusOne = document.querySelector('.minus-ticket-one');
let ticketOne = document.querySelector('.rout-one');

let quantityOne = 0;
plasOne.addEventListener('click', function (e) {
    e.preventDefault();
    ticketOne.value = quantityOne + 1;
    quantityOne++;
});

minusOne.addEventListener('click', function (e) {
    e.preventDefault();
    ticketOne.value = quantityOne;
    quantityOne--;
    if (quantityOne <= 0) {
        quantityOne = 0;
    }
});

// Прибавка-удаление количества билетов для "из Москвы в Питер"
let plasTwo = document.querySelector('.plas-ticket-two');
let minusTwo = document.querySelector('.minus-ticket-two');
let ticketTwo = document.querySelector('.rout-two');

let quantityTwo = 0;
plasTwo.addEventListener('click', function (e) {
    e.preventDefault();
    ticketTwo.value = quantityTwo + 1;
    quantityTwo++;
});

minusTwo.addEventListener('click', function (e) {
    e.preventDefault();
    ticketTwo.value = quantityTwo;
    quantityTwo--;
    if (quantityTwo <= 0) {
        quantityTwo = 0;
    }
});

// Прибавка-удаление количества билетов для "из Москвы в Питер"
let plasThree = document.querySelector('.plas-ticket-three');
let minusThree = document.querySelector('.minus-ticket-three');
let ticketThree = document.querySelector('.rout-three');

let quantityThree = 0;
plasThree.addEventListener('click', function (e) {
    e.preventDefault();
    ticketThree.value = quantityThree + 1;
    quantityThree++;
});

minusThree.addEventListener('click', function (e) {
    e.preventDefault();
    ticketThree.value = quantityThree;
    quantityThree--;
    if (quantityThree <= 0) {
        quantityThree = 0;
    }
});

export {ticketOne, ticketTwo, ticketThree};
