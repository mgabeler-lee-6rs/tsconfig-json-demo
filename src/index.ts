import resources from './resources.json';
const details = require('./details.json');
import {foo} from './data';

export function fred(base: string): any {
	const fname = './extra/' + base + '.json';
	return require(fname);
}

function main() {
	const extra = fred('extra');

	console.log(resources);
	console.log(details);
	console.log(extra);
	foo();
}

if (require.main === module) {
	main();
}