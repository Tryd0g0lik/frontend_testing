const { CrateForm } = require('./mocks/mock.ts');
const { getNumberCard } = require('./cards/get_cards.ts');
const { CheckingCards, Luhn } = require('./cards/checkings.ts');


const str = "number from bank's card";

const elem = new CrateForm();
elem.changeDOM();

const cards = new getNumberCard(str[0]);
const check = new CheckingCards(cards.startWork());
const manual = check.startWork(str);

const luhn = new Luhn(manual, str);
console.log('END-Luhn: ', luhn.startWork())