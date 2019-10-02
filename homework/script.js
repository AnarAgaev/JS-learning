'use strict';

$(document).ready(() => {
    $('nav [href="#sheldure"], [href="#tour"], .contact').on('click', () => {
        $('.overlay')
            .css({ 
                'display': 'block', 
                'opacity': '0',
             })
            .animate({'opacity': '1'}, 200);
        $('.modal')
            .css({ 
                'display': 'block',
                'opacity': '0',
                'top': '-40px',
             })
            .animate({ 
                'opacity': '1',
                'top': '0',
            }, 300);
    });

    $('.close').on('click', () => {
        $('.overlay').animate({ 'opacity': '0' }, 200);

        $('.modal').animate({'opacity': '0','top': '-40px',}, 300);
        
        setTimeout(() => {
            $('.overlay, .modal').css('display','none');
        }, 300);
    });
});