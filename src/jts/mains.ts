const { CrateForm } = require('./mocks/mock.ts');
const { NumberCardGet } = require('./cards/get_cards.ts');
const { CheckingCards } = require('./cards/checkings.ts');

const elem = new CrateForm();
elem.changeDOM();

const cards = new NumberCardGet(3);
const check = new CheckingCards(cards.startWork());
check.startWork();