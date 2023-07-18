const { CrateForm } = require('./mocks/mock.ts');
const { getNumberCard } = require('./cards/get_cards.ts');
const { CheckingCards, Luhn } = require('./cards/checkings.ts');
const { Pages, Forms } = require('./cards/pages.ts');

// const str = "number from bank's card";
// const str = '2202201302350075'


const elem = new CrateForm();
elem.changeDOM();


function trash(str: string) {
	const cards = new getNumberCard(str);
	const check = new CheckingCards(cards.startWork());
	const manual = check.startWork(str); //return [<string-brand-bank's-card It's manual>, number, number]

	const luhn = new Luhn(manual, str); /* Luhna algoritm */
	const resp_boolean = luhn.startWork(); /* return ther tru or false.
	If got a true be means - User insert a mien bank's card number 
	wich a number passed the Luhn algoritm luhna */
	console.log('END-Luhn: ', resp_boolean)

	const page = new Pages(manual, str, resp_boolean);/* change a DOM */
	console.log('page: ', page)
	page.startWork()


	const element_form = document.querySelector('#form') as HTMLElement;
	const element_submit = document.querySelector('#submitform') as HTMLElement
}

const f = new Forms(trash);
f.startWork();