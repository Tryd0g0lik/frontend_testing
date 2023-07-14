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

	set setSumIntegOfCardNum(num_: number) {
		/*
	 TODO: return tru if a symbol count === integer or false. It integer is some from the 'getOneCards'.
		:atrib num_: it's a card's number/
	*/

		const elem = Array(this.getOneCards[2][0])[0];
		for (let i = 0; i < elem.length; i++) {
			if (String(num_).length === elem[i]) {
				this.singleCard = [this.getOneCards[0], this.getOneCards[1], elem[i]]
			}
		}
	}

	startWork() {
		this.setSumIntegOfCardNum = 0;
	}
}