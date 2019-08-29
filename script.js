'use strict'

let ob = new Object(),
    options = {
        widht: 1024,
        heigh: 720,
        name: "test",
    };

console.log(options.name);

options.bool = false;
options.colors = {
    border: 'black',
    bg: 'red',
}

console.log(options);

function printObj(object) {
    for (let key in object) {
        if (typeof object[key] == 'object') {
            console.log(' Inner Object: ');
            printObj(object[key]);
            console.log('');
            
        } else {
            console.log(key + ': ' + object[key]);
        }
    }
}
printObj(options);

console.log(Object.keys(options).length);
