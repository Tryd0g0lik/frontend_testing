const { CrateForm } = require('./mocks/mock.ts');
const { NumberCardGet } = require('./cards/get_cards.ts');
const { CheckingCards, Luna } = require('./cards/checkings.ts');

const elem = new CrateForm();
elem.changeDOM();

const cards = new NumberCardGet(3);
const check = new CheckingCards(cards.startWork());
// const str = '39313131313131313131313131313131317';
// const str = '2202201302350075'
const str = '4276014450895172';
const manual = check.startWork(str);
// console.log('manual 2: ', manual)
const luna = new Luna(manual, str);
luna.startWork()