const { CrateForm } = require('./mocks/mock.ts');
const { NumberCardGenerate } = require('./cards/checkings.ts');

const elem = new CrateForm();
elem.changeDOM();

const cards = new NumberCardGenerate(3);
cards.startWork();