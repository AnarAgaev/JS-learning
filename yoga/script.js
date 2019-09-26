window.addEventListener('DOMContentLoaded', function () {

    'use strict'

    // Tab selector
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for(let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if ( tabContent[b].classList.contains('hide') ) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function (event) {
        let target = event.target;

        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {

                if ( target == tab[i] ) { 
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });


    // Timer
    let deadline = '2019-10-14';

    function getTimeRemaining (endtime) {

        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)));
        
        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
        };
    }

    function setClock (id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock () {
            let t = getTimeRemaining(endtime);

            hours.textContent = (t.hours < 10) ? '0' + t.hours : t.hours;
            minutes.textContent = (t.minutes < 10) ? '0' + t.minutes : t.minutes;
            seconds.textContent = (t.seconds < 10) ? '0' + t.seconds : t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval);

                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }

    setClock('timer', deadline);


    // Modal
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        btnInfoBlock = document.querySelectorAll('.description-btn');

    for (let i = 0; i < btnInfoBlock.length; i++) {
        btnInfoBlock[i].addEventListener('click', function() {
            showModal.call(this);
        });
    }
    
    more.addEventListener('click', function() {
        showModal.call(this);
    });
    
    close.addEventListener('click', hideModal.bind());
    
    function showModal() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    }

    function hideModal() {
        overlay.style.display = 'none';
        document.body.style.overflow = '';
        document.querySelector('.more-splash').classList.remove('more-splash');
    }
    

    // Forms
    let message = {
            loading: 'Loading...',
            success: 'Thanks! We will contact you soon!',
            failure: 'Something went wrong :( ...',
        };

    function sendForm(form) {
        form.addEventListener('submit', event => {
            event.preventDefault();
            
            let input = form.getElementsByTagName('input'),
                formData = new FormData(form),
                statusMessage = document.createElement('div');
            
            statusMessage.style.cssText = "color: white; padding-top: 10px";
            form.append(statusMessage);

            function postData(data) {
                return new Promise((reject, resolve) => {
                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php');
                    request.setRequestHeader('Content-type', 'application/json: charset= utf-8');
                    request.send(data);
                    request.addEventListener('readystatechange', function () {
                        if (request.readyState < 4) reject();
                        else if (request.readyState === 4 && request.status == 200) reject();
                        else resolve();                   
                    });
                });
            }

            function clearForm() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
            }

            postData(formData)
                .then(() => {statusMessage.innerHTML = message.loading;})
                .then(() => { statusMessage.innerHTML = message.success;})
                .catch(() => {statusMessage.innerHTML = message.failure;})
                .finally(clearForm());
        });
    }

    sendForm(document.querySelector('.main-form'));
    sendForm(document.getElementById('form'));
});


// Spread-операторы
class Options {
    
    constructor(content, height, widht, bg, fontSize, textAlign) {
        this.content   = content;
        this.height    = height;
        this.widht     = widht;
        this.bg        = bg;
        this.fontSize  = fontSize;
        this.textAlign = textAlign;
    }

    createBlock() {
        let block = document.createElement('div');
        block.textContent = this.content;
        block.style.cssText = `height: ${this.height}; widht: ${this.widht}; background: ${this.bg}; font-size: ${this.fontSize}; text-align: ${this.textAlign};`;
        document.body.append(block);
    }
}

let options = [
        'Some text',
        '300px',
        '500px',
        '#333',
        '31px',
        'center',
    ],
    modal = new Options(...options);

modal.createBlock();

