'use strict';

let json = '{"id":2,}';

try {
	let user = JSON.parse(json);
	if (!user.name) {
		throw new SyntaxError('Unfortunately haven`t name parametr'); // We can use all standart errors form JS
	}
} catch(error) {
	console.log(error);
} finally {
	console.log('I work always!');
}

console.log('Script is working late');
