const _ = require('underscore.string');
export class CheckingCards {
	cards: any;
	singleCard: [string, number, number] = ['', 0, 0];
	constructor(cards: any[]) {
		this.cards = cards;

	}

	get getOneCards(): [string, number, number[]] {
		console.log('///:', this.cards)
		// const respon = this.cards.entries();
		let n: string;
		let arr_ofOne_card: any = []; //[string, number[]]
		let elem: any[] = [];
		for (let elem_ of this.cards) {
			elem = elem_
			break
		}

		n = elem[0]
		for (const [key, val] of Object.entries(elem[1])) {
			arr_ofOne_card.push(n) // bank's name 
			arr_ofOne_card.push(Number(key)) // first integer of the card. It's a long number
			arr_ofOne_card.push(Array(val)); // This's a long number of the card
			console.log("2 - arr_ofOne_card: ", arr_ofOne_card)
		}
		this.cards.shift();
		console.log('3 - this.cards: ', this.cards)
		return arr_ofOne_card
	}

	set setIntegOfCardNum(num_: string) {
		/*
	 TODO: return tru if a symbol count === integer or false. It integer is some from the 'getOneCards'.
		:atrib num_: it's a card's number/
	*/
		let el = this.getOneCards;
		console.log("el: ", el)
		const elem = Array(el[2][0])[0];
		console.log("elem: ", elem)
		for (let i = 0; i < elem.length; i++) {
			if (String(num_).length === elem[i]) {
				console.log("sCard--------: ",)
				this.singleCard = [el[0], el[1], elem[i]]

				return
			}
		}
	}

	startWork(num: string) {
		/*	
			TODO:
			:atrib num: cart's number
			returns:[<string>, number, number], it's us spearing that we made all true alse ['', 0, 0] :-(
		*/
		for (let i = 0; i < this.cards.length; i++) {
			this.setIntegOfCardNum = String(num)
			if (this.singleCard[0].length !== 0) this.cards = [];
		};
		const sCard = this.singleCard;

		return sCard
	}
}


export class Luna {
	manual: [string, number, number];
	card_num: string;
	constructor(card_manual: [string, number, number] = ['', 0, 0], card_num: string) {
		/*
			TODO: Card's number checking by the Luna-algorithm
			:atrib card_manual: this's [cart-name, first-integer, symbol count  of number card  ]
			:atrib card_num: this's cart's number.
			returns: true or false
		*/
		this.manual = card_manual;
		this.card_num = card_num;
	}

	get card() {
		/*Прошел алгоритмя луна или нет */

		const new_man = Array(this.manual)[0].slice();
		const num = ([this.card_num].slice())[0];
		console.log("====>> 2", new_man)
		if (String(new_man[0]).length > 0) {
			const arr = _.chop(num, 1);
			let int = 0;

			for (let i = 0; i < Array(arr)[0].length; i = i + 2) {
				let num = Number(Array(arr)[0][i]) * 2;
				int += (String(num).length > 2 ? num / 2 : num);

			}

			for (let i = 1; i < Array(arr)[0].length; i++) {
				let num = (i % 2) !== 0 ? Number(Array(arr)[0][i]) : 0;
				int += num

			}
			console.log("====>> 3", int)
			return (int + 1) % 10 === 0 ? true : false;
		}
		return false
	}

	startWork() {
		this.card
	}
}