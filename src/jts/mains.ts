const { CrateForm } = require('./mocks/mock.ts');
const { getNumberCard } = require('./cards/get_cards.ts');
const { CheckingCards, Luna } = require('./cards/checkings.ts');
const str = '4276014450895172'
const elem = new CrateForm();
elem.changeDOM();

const cards = new getNumberCard(str[0]);
const check = new CheckingCards(cards.startWork());
// const str = '39313131313131313131313131313131317';
// const str = '2202201302350075'
;
console.log('Готовсь', str)
const manual = check.startWork(str);
// console.log('manual 2: ', manual)
const luna = new Luna(manual, str);
console.log()
console.log('END: ', luna.startWork())