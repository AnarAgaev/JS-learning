import tabs      from './modules/tabs';
import setClock  from './modules/timer';
import showModal from './modules/modal';
import sendForm  from './modules/forms';
import slider    from './modules/slider';
import calc      from './modules/calc';

window.addEventListener('DOMContentLoaded', function () {
   
    tabs();
    setClock('timer', '2019-10-19');
    showModal();
    sendForm(document.querySelector('.main-form'));
    sendForm(document.getElementById('form'));
    slider();
    calc();

});

// Spread-операторы
// class Options {
    
//     constructor(content, height, widht, bg, fontSize, textAlign) {
//         this.content   = content;
//         this.height    = height;
//         this.widht     = widht;
//         this.bg        = bg;
//         this.fontSize  = fontSize;
//         this.textAlign = textAlign;
//     }

//     createBlock() {
//         let block = document.createElement('div');
//         block.textContent = this.content;
//         block.style.cssText = `height: ${this.height}; widht: ${this.widht}; background: ${this.bg}; font-size: ${this.fontSize}; text-align: ${this.textAlign};`;
//         document.body.append(block);
//     }
// }

// let options = [
//         'Some text',
//         '300px',
//         '500px',
//         '#333',
//         '31px',
//         'center',
//     ],
//     modal = new Options(...options);

// modal.createBlock();