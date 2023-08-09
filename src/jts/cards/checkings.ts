/**
 * There i do two checjings for a user nuber card.
 * First checking it's some checklist for a user number wich has the personal rules from the getCards.ts page. 
 * It's rule name a 'CheckingCards'.
 * Second rules it's a popular Luhna algorotm.
 */
const _ = require('underscore.string');

export class CheckingCards {
	cards: any;
	singleCard: [string, number, number] = ['', 0, 0];
	constructor(cards: any[]) {
		this.cards = cards;

	}

	get getOneCards(): [string, number, number[]] {
		/*
		*	TODO: searching a name bank's card, first integer and a max count  integer from the card's number
		*/
		let n: string;
		let arrOfCardManual: any = []; //[string, number[]]
		let elem: any[] = [];
		for (let elem_ of this.cards) {

			console.log("CheckingCards ELEM_: ", elem_)
			elem = elem_
			break
		}

		n = elem[0]
		for (const [key, val] of Object.entries(elem[1])) {
			arrOfCardManual.push(n) // bank's name 
			arrOfCardManual.push(Number(key)) // first integer of the card. It's a long number
			arrOfCardManual.push(Array(val)); // This's a long number of the card
		}
		this.cards.shift();
		return arrOfCardManual
	}

	set setIntegOfCardNum(num_: string) {
		/*
	 * This a max-count  we geting from the 'getOneCards'.
	 * :atrib num_: it's a card's number/
	*/
		let el = this.getOneCards;
		const elem = Array(el[2][0])[0];
		for (let i = 0; i < elem.length; i++) {
			if (String(num_).length === elem[i]) {

				this.singleCard = [el[0], el[1], elem[i]]
				return
			}
		}
	}

	startWork(num: string): [string, number, number] {
		/*	
		*	TODO:
		*	:atrib num: user card's number
		*	returns:[<string-brand-bank's-card It's manual>, number, number], it's us spearing that we made all true alse ['', 0, 0] :-(
		*/
		for (let i = 0; i < this.cards.length; i++) {
			this.setIntegOfCardNum = num;
			if (this.singleCard[0].length !== 0) this.cards = [];
		};

		const sCard = this.singleCard;
		return sCard
	}
}


export class Luhn {
	manual: [string, number, number];
	cardNumber: string;
	constructor(cardManual: [string, number, number] = ['', 0, 0], cardNumber: string) {
		/*
		*	TODO: Card's number checking by the Luna-algorithm
		*	:atrib cardManual: this's "[card-name, first-integer, symbol count  of number card  ]"
		*	:atrib cardNumber: this's card's number.
		*	returns: true or false
		*/
		this.manual = cardManual;
		const regex = new RegExp('[a-zA-Zа-яёА-ЯЁ.?, ]', 'g');
		this.cardNumber = cardNumber.trim().replaceAll(regex, '');
		;
	}

	get cardGet() {
		/*Прошел алгоритмя луна или нет */

		const newManual = Array(this.manual)[0].slice();
		const num = ([this.cardNumber].slice())[0];

		if (String(newManual[0]).length > 0) {
			const arr = _.chop(num, 1);
			let int = 0;

			for (let i = 0; i < Array(arr)[0].length; i = i + 2) {
				let num = Number(Array(arr)[0][i]) * 2;

				if (num >= 10) {
					const symb1 = Number(String(num)[0]);
					const symb2 = Number(String(num)[1]);
					int = int + (symb1 + symb2);
				}
				else if (num < 10) {
					int = int + num;
				};
			}

			for (let i = 1; i < Array(arr)[0].length; i = i + 2)int += Number(Array(arr)[0][i]);
			return (int) % 10 === 0 ? true : false;
		} 
		return false
	}

	cleaningPage() {
		const cardLists = document.querySelector('p[style="color:red"]') as HTMLElement;

		cardLists !== undefined && cardLists !== null ? cardLists.remove() : null;
	}

	startWork() {
		const cardLists = document.querySelector('main') as any;

		if (this.cardGet === false) {
			// debugger;
			const err = new Error();
			err.message = "This number can't pass the checked (Luhna algoritm)"
			err.name = 'LuhnaError'

			cardLists.insertAdjacentHTML('beforeEnd', `<p style="color:red">${err}: ${err.message}</p>`);
			console.error(err.name, err.message);

		}
		return this.cardGet
	}
}