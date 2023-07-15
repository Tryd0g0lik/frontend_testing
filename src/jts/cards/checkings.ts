const _ = require('underscore.string');
export class CheckingCards {
	cards: any;
	singleCard: [string, number, number] = ['', 0, 0];
	constructor(cards: any[]) {
		this.cards = cards;

	}

	get getOneCards(): [string, number, number[]] {
		/*
			TODO: searching a name bank's card, first integer and a max count  integer from the card's number
		*/
		console.log('101 - this.cards:', this.cards)
		// const respon = this.cards.entries();
		let n: string;
		let arr_ofOne_card_manual: any = []; //[string, number[]]
		let elem: any[] = [];
		for (let elem_ of this.cards) {
			elem = elem_
			break
		}

		console.log("102 - :", Object.entries(elem[1])[0])
		n = elem[0]
		for (const [key, val] of Object.entries(elem[1])) {
			console.log('103 - key / val:', key, "/", val)
			arr_ofOne_card_manual.push(n) // bank's name 
			arr_ofOne_card_manual.push(Number(key)) // first integer of the card. It's a long number
			arr_ofOne_card_manual.push(Array(val)); // This's a long number of the card
			console.log("2 - arr_ofOne_card_manual: ", arr_ofOne_card_manual)
		}
		this.cards.shift();
		// console.log('2.1 - cards.shift(): ', this.cards)
		// console.log('3 - this.cards: ', this.cards)
		return arr_ofOne_card_manual
	}

	set setIntegOfCardNum(num_: string) {
		/*
	 TODO: return tru if a symbol count === max count integers from the card's number  or false.
	  This a max-count  we geting from the 'getOneCards'.
		:atrib num_: it's a card's number/
	*/
		let el = this.getOneCards;
		console.log("el: ", el)
		const elem = Array(el[2][0])[0];
		console.log("elem: ", elem)
		for (let i = 0; i < elem.length; i++) {
			if (String(num_).length === elem[i]) {

				this.singleCard = [el[0], el[1], elem[i]]
				console.log("sCard--------: ", [el[0], el[1], elem[i]])
				return
			}
		}
	}

	startWork(num: string): [string, number, number] {
		/*	
			TODO:
			:atrib num: card's number
			returns:[<string>, number, number], it's us spearing that we made all true alse ['', 0, 0] :-(
		*/
		// console.log('3.1 - num: ', num)
		for (let i = 0; i < this.cards.length; i++) {
			console.log('3.2 - num: ', num)
			this.setIntegOfCardNum = num;
			console.log('setIntegOfCardNum: ',)
			if (this.singleCard[0].length !== 0) this.cards = [];
		};
		console.log('3.3 - singleCard: ', this.singleCard)
		const sCard = this.singleCard;

		return sCard
	}
}


export class Luhn {
	manual: [string, number, number];
	card_num: string;
	constructor(card_manual: [string, number, number] = ['', 0, 0], card_num: string) {
		/*
			TODO: Card's number checking by the Luna-algorithm
			:atrib card_manual: this's "[card-name, first-integer, symbol count  of number card  ]"
			:atrib card_num: this's card's number.
			returns: true or false
		*/
		this.manual = card_manual;
		this.card_num = card_num;
	}

	get cardGet() {
		/*Прошел алгоритмя луна или нет */

		const new_manual = Array(this.manual)[0].slice();
		const num = ([this.card_num].slice())[0];
		console.log("4 - new_manual: ", new_manual)

		if (String(new_manual[0]).length > 0) {
			const arr = _.chop(num, 1);
			let int = 0;

			for (let i = 0; i < Array(arr)[0].length; i = i + 2) {
				let num = Number(Array(arr)[0][i]) * 2;
				console.log('4.1 - num: ', num)

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

			console.log("5 - Luna result: ", int)
			return (int) % 10 === 0 ? true : false;
		} 
		return false
	}

	startWork() {
		return this.cardGet
	}
}