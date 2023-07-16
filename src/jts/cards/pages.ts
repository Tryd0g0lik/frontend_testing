export class Pages {
	manual: [string, number, number];
	number_card: number;
	resp_boolean: boolean;
	constructor(card_manual: [string, number, number] = ['', 0, 0],
		number_card: number,
		resp_boolean: boolean = false
	) {
		/*
			TODO:
			:atribs card_manual: this's "[card-name, first-integer, symbol count  of number card  ]"
			:atribs number_card: this's card's number from user bank's card.
			:atribs resp_boolean: 'true' means the bank's card number has been passed the all checs.
			returns void. But this's class changes a view display the page style
		*/
		this.manual = card_manual;
		this.number_card = number_card;
		this.resp_boolean = resp_boolean;

		this.cleaningPage();
	}

	get getBrandCard(): string {
		if (this.manual[0].length === 0) {
			const err = new Error();
			err.message = "Not: What's so wrong in the 'this.manual' property. Look the 'chengeStyle' method from the 'Page' class";
			err.name = "ComplectDataOfPagesClass:";
			console.error(String(err.name) + ': ' + String(err.message))

		}

		return this.manual[0]
	}

	chengeStyle(): void {
		const brand_bank_card = this.getBrandCard.slice()
		let selector: string = '';
		console.log('6 - style: ', brand_bank_card)
		if (brand_bank_card === 'diners club') selector = 'li span.card.' + 'diners_club'
		else if (brand_bank_card === 'мир') selector = 'li span.card.' + 'world'
		else if (brand_bank_card === 'jcb international') selector = 'li span.card.' + 'jcb'
		else if (brand_bank_card === 'American Express') selector = 'li span.card.' + 'amex'
		else if (brand_bank_card === 'visa') selector = 'li span.card.' + 'visa'
		else if (brand_bank_card === 'mastercard') selector = 'li span.card.' + 'master'
		else if (brand_bank_card === 'maestro') selector = 'li span.card.' + 'maestro'
		else if (brand_bank_card === 'china unionPay') selector = 'li span.card.' + 'china'
		else if (brand_bank_card === 'discover') selector = 'li span.card.' + 'discover'
		else {
			const dom_ul = document.querySelector('ul.cards') as HTMLElement;
			dom_ul.insertAdjacentHTML('afterend', '<p style="color:red">Что-то не так</p>');

		}

		const dom_li = document.querySelector(selector) as HTMLElement;
		console.log('dom_li: ', dom_li, selector)
		dom_li.classList.remove('cdisabled');


	}

	cleaningPage(): void {
		/**reset the all changes */
		const dom_ul = document.querySelector('p[style="color:red"]') as HTMLElement;
		dom_ul !== undefined && dom_ul !== null ? dom_ul.remove() : null;

		const dom_liAll = document.querySelectorAll('.cards > li');
		for (let i = 0; i < dom_liAll.length; i++) {
			const span = dom_liAll[i].querySelector('span') as HTMLElement;
			span.classList.contains('cdisabled') === false ? span.classList.add('cdisabled') : null;

		}

	}

	startWork(): void {
		console.log('6.0 - checking')
		this.resp_boolean === true ? this.chengeStyle() : null;
	}

}