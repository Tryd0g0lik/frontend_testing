
export class getNumberCard {
	names: any;
	cardsNumOfUser: string | number;
	constructor(num: string | number) {
		/*
		TODO: string or number geting from the bank's card. Got the bank's card number from user we checking the bank's card type 
		:atributs bank: It's string or number geting from the bank's card.
		*/
		this.cardsNumOfUser = num;
		/*
		 card's template is
			 'brand' : {'first integer of card's number' : [max count integers of the card's number]}
		*/
		this.names = {
			'мир': { '2': [12, 16] },
			'diners club': { '3': [30, 36, 38] },
			'jcb international': { '3': [31, 35] },
			'American Express': { '3': [34, 37] },
			'visa': { '4': [16,] },
			'mastercard': { '5': [51, 52, 53, 54, 55] },
			'maestro': {
				'5': [50, 56, 57, 58],
				'6': [63, 67]
			},
			'china unionPay': { '6': [62,] },
			'discover': { '6': [60,] },
			'uek': { '7': [] }
		}
	}

	get integerCards(): number {
		/*
			TODO: card's number geting.
			Return the first integers of номера.
		*/
		let cardNum_len!: number;
		let cardNum: number;

		cardNum_len = String(this.cardsNumOfUser).replace(' ', '').length;
		if (cardNum_len > 0) {
			cardNum = Number(String(this.cardsNumOfUser)[0]);

		} else {
			const err = new Error("You no inserted a bak's card number, maybe. Please insert/write the number from a bank's card");
			err.name = 'Error integerCards 01';
			console.error(err.name, err.message);
			return 0
		}
		return cardNum
	}

	get cardsManuals(): any[] {
		/* 
			Получив первые две цифры из пользовательского номера карты
				получаем список карт (с максимальной длиной номера карты )
		*/

		let list_elem: string[] = [];
		let map: any = new Map();

		// geting names (brands) bank's cards. It's keys from the 'this.names'
		for (const elem in this.names) list_elem.push(elem);
		Array.from(list_elem).forEach((brand) => {
			/*
				we searching names (brands bank's kard) where 'this.names["brand"].keys() === this.cardsNumOfUser'
					This a searched numbers saveing to Map();
			*/

			// making a simple copy of the data
			const integer_cards = [this.integerCards].filter((integ) => integ > 0 ? integ : 0);
			const strFirst_integ_OfNumberCard: string[] = [];
			const strMaxCount_integ_OfNumberCard: number[] = [];

			for (let str of Object.keys(this.names[brand])) strFirst_integ_OfNumberCard.push(str);
			for (let str of Object.keys(this.names[brand])) strMaxCount_integ_OfNumberCard.push(this.names[brand][str]);

			if (strFirst_integ_OfNumberCard.length > 0) {
				if ((strFirst_integ_OfNumberCard).length < 2
					&& Number(strFirst_integ_OfNumberCard[0]) === integer_cards[0]) {
					map.set(brand, this.names[brand]);

				} else if ((strFirst_integ_OfNumberCard).length > 1) {
					if (Number(strFirst_integ_OfNumberCard[0]) === integer_cards[0]) {
						for (const ind in Object.keys(this.names[brand])) map.set(brand, this.names[brand][ind])
					}
				}
			} else { null }

		});
		let resul: any[] = [];
		// let resp : [string, { key: number, value: number[] }]
		let resp: any;
		for (resp of Array.from(map.entries())) resul.push(resp);
		return resul
	}


	startWork() {
		return this.cardsManuals;
	}
}