
/**
 * TODO: There,  function got the numbre from a user bank's card and determine a view card.
 * Basic views cards has been saved into database. 'this.names' it's db.
 */
export class getNumberCard {
	names: any;
	cardsNumOfUser: string;
	constructor(num: string) {
		/**
		 * TODO: string or number geting from the bank's card. Got the bank's card number from user we checking the bank's card type 
		 * :atributs bank: It's string or number geting from the bank's card.
		*/
		const regex = new RegExp('[a-zA-Zа-яёА-ЯЁ.?, ]', 'g');
		this.cardsNumOfUser = num.trim().replaceAll(regex, '');
		/**
		 * card's template is
		 * 'brand' : {'first integer of card's number' : [max count integers of the card's number]}
		 *5437419573427824
		*/
		this.names = {
			'мир': { '2': [12, 16] },
			'diners club': { '3': [30, 36, 38] },
			'jcb international': { '3': [31, 35] },
			'American Express': { '3': [34, 37] },
			'visa': { '4': [16, 19] },
			'mastercard': { '5': [16, 51, 52, 53, 54, 55] },
			'maestro': {
				'5': [50, 56, 57, 58],
				'6': [63, 67]
			},
			'china unionPay': { '6': [62,] },
			'discover': { '6': [60,] },
			'uek': { '7': [] }
		}
	}

	get getFirstInt(): number {
		/**
		 * TODO: card's number geting.
		 * Return the first integers of номера.
		*/
		let cardNum_len!: number;
		let cardNum: number;
		cardNum_len = String(this.cardsNumOfUser).length;
		if (cardNum_len > 0) {
			cardNum = Number(String(this.cardsNumOfUser)[0]);

		} else {
			const err = new Error("You no inserted a bak's card number, maybe. Please insert/write the number from a bank's card");
			err.name = 'Error getFirstInt 01';
			console.error(err.name, err.message);
			return 0
		}
		return cardNum
	}

	get cardsManuals(): any[] {
		/* 
		* TODO: on the entrance getiing first integer from the card's number. Provider is a getFirstInt 
	  * returns [<Brand card>:string, {<first int fron numbers-brand>:string, [<count integers>:number,]}]
		*/

		let list_elem: string[] = [];
		let map: any = new Map();

		// geting names (brands) bank's cards. It's keys from the 'this.names'
		for (const elem in this.names) list_elem.push(elem);
		Array.from(list_elem).forEach((brand) => {
			/*
			*	TODO: we searching names (brands bank's kard) where 'this.names["brand"].keys() === this.cardsNumOfUser'
			*		This a searched numbers saveing to Map();
		  * 
			*/

			// making a simple copy of the data
			const integer_cards = [this.getFirstInt].filter((integ) => integ > 0 ? integ : 0);
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
			}
		});
		let resul: any[] = [];
		// let resp : [string, { key: number, value: number[] }]
		// let resp: any;
		let k: string = '';
		let v: any[] = []

		// debugger;
		if (map.size > 0) {			

			for ([k, v] of map.entries()) resul.push([k, v]);
		} else {
			// const form = document.querySelector('.form') as any;
			// const err = new Error();
			// err.message = "This number can't faound by the monual. 'cardsManuals' method from the get_cards.ts"
			// err.name = 'CardsManualsError'

			// form.insertAdjacentHTML('beforeEnd', `<p style="color:red">${err}: ${err.message}</p>`);
			// console.error(err.name, err.message);
			null
			return ['NaN', { 0: [0,] }]
		}
		// simple return ['Visa', {'4': [16. 19]}]
		return resul

	}


	startWork() {
		return this.cardsManuals;
	}
}


	// 	a: "Testing card number for a bank's name: 'Мир 02'",
	// 	name: 'Мир 02',
	// 	number: ['2202201302350074'],
	// 	expected: ['мир', { 2: [12, 16] }]
	// },
	// {
	// 	a: "Testing card number for a bank's name: 'Мир 03'",
	// 	name: 'Мир 03',
	// 	number: ['3202201302350075'],
	// 	expected: ['мир', { '2': [12, 16] }]
	// },
	// {
	// 	a: "Testing card number for a bank's name: 'Мир 04'",
	// 	name: 'Мир 04',
	// 	number: ['22022013023500755'],
	// 	expected: ['мир', { '2': [12, 16] }]
	// },
	// {
	// 	a: "Testing card number for a bank's name: 'Мир 05'",
	// 	name: 'Мир 05',
	// 	number: [' 2202201302350075'],
	// 	expected: ['2202201302350075']
	// },
	// {
	// 	a: "Testing card number for a bank's name: 'Мир 06'",
	// 	name: 'Мир 06',
	// 	number: ['2202201302350075 '],
	// 	expected: ['2202201302350075']
	// },
	// {
	// 	a: "Testing card number for a bank's name: 'Мир 07'",
	// 	name: 'Мир 07',
	// 	number: [' 2202201302350075 '],
	// 	expected: ['2202201302350075']
	// },
	// {
	// 	a: "Testing card number for a bank's name: 'Мир 08'",
	// 	name: 'Мир 08',
	// 	number: ['22022013 02350075'],
	// 	expected: ['2202201302350075']
	// },
	// {
	// 	a: "Testing card number for a bank's name: 'Мир 09'",
	// 	name: 'Мир 09',
	// 	number: ['22022013 023 50075'],
	// 	expected: ['2202201302350075']
	// },
	// {
	// 	a: "Testing card number for a bank's name: 'Мир 10'",
	// 	name: 'Мир 10',
	// 	number: ['22022013 023 50075 '],
	// 	expected: ['2202201302350075']
	// },
	// {
	// 	a: "Testing card number for a bank's name: 'Мир 11'",
	// 	name: 'Мир 11',
	// 	number: [' 22022013 023 50075'],
	// 	expected: ['2202201302350075']
	// },
	// {
	// 	a: "Testing card number for a bank's name: 'Мир 12'",
	// 	name: 'Мир 12',
	// 	number: [' 22022013 023 50075 '],
	// 	expected: ['2202201302350075']
	// },
	// {
	// 	a: "Testing card number for a bank's name: 'Мир 13'",
	// 	name: 'Мир 13',
	// 	number: ['220f2201302350075'],
	// 	expected: []
	// },
	// {
	// 	a: "Testing card number for a bank's name: 'Мир 14'",
	// 	name: 'Мир 14',
	// 	number: ['220f220130235007'],
	// 	expected: []
	// },
	// {
	// 	a: "Testing card number for a bank's name: 'Мир 15'",
	// 	name: 'Мир 15',
	// 	number: ['2055744470178618688'],
	// 	expected: []
	// },