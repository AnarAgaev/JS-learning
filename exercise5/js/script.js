'use strict'

let menu        = document.querySelector('.menu'),                      // Меню
    btns        = document.getElementsByClassName('menu-item'),         // Ссылки в меню - коллекция
    fithBtn     = document.createElement('li'),                         // Пятая ссылка в меню 
    title       = document.getElementById('title'),                     // Заголовок
    column      = document.getElementsByClassName('column'),            // Левый блок с контентом
    adv         = document.querySelector('.adv'),                       // Блок с рекламой
    answer      = prompt('What do you think about Apple gadgets', ''),  // Вопрос: мнение о технике Apple
    answerBlock = document.querySelector('#prompt');

// Меняем кнопки местами
menu.insertBefore(btns[2], btns[1]);

// Добавляем пятый пятую кнопку в меню
fithBtn.classList.add('menu-item');
fithBtn.innerHTML = 'Пятый пункт';
menu.appendChild(fithBtn);

//Меняем картинку бэкграунда у боди
document.body.style.backgroundImage = 'url(img/apple_true.jpg)';

// Меняем заголовок
title.innerHTML = 'Мы продаем только подлинную технику Apple';

// Удаляем рекламу со странцицы
// column[1].removeChild(adv); // старая методология, лучше использовать метов remove()
adv.remove();

// Добавляем мнение о технике Apple
answerBlock.innerHTML = answer;