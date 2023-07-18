export class Pages {
	manual: [string, number, number];
	number_card: number;
	resp_boolean: boolean;
	constructor(card_manual: [string, number, number] = ['', 0, 0],
		number_card: number,
		resp_boolean: boolean = false
	) {
		/*
		*	TODO:  This's class do changes a display page's view.
		*	:atribs card_manual: this's "[card-name, first-integer, symbol count  of number card  ]"
		*	:atribs number_card: this's card's number from user bank's card.
		*	:atribs resp_boolean: 'true' means the bank's card number has been passed the all checs.
		*	returns void.
		*/
		this.manual = card_manual;
		this.number_card = number_card;
		this.resp_boolean = resp_boolean;

		this.cleaningPage();
	}

	get getBrandCard(): string {
		/**
		 * TODO: return an array has been template [string, number, number]. 
		 * If returning ['', 0, 0] - look in line 'ComplectDataOfPagesClass' from the consolle. 
		 * If return 
		 * [<name/bran user bank's card>, <first integer of user card>, <count all integers from the user number card>]. It's properties user's card for a bank.
		 */
		if (this.manual[0].length === 0) {
			const err = new Error();
			err.message = "Not: What's so wrong in the 'this.manual' property. Look the 'chengeStyle' method from the 'Page' class";
			err.name = "ComplectDataOfPagesClass:";
			console.error(String(err.name) + ': ' + String(err.message))

		}

		return this.manual[0]
	}

	chengeStyle(): void {
		/**
		 * TODO: changing the display page views
		 * return void.
		 */
		const brand_bank_card = this.getBrandCard.slice()
		let selector: string = '';

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
		/**
		 * TODO: reset the all changes
		*/
		const dom_ul = document.querySelector('p[style="color:red"]') as HTMLElement;
		dom_ul !== undefined && dom_ul !== null ? dom_ul.remove() : null;

		const dom_liAll = document.querySelectorAll('.cards > li');
		for (let i = 0; i < dom_liAll.length; i++) {
			const span = dom_liAll[i].querySelector('span') as HTMLElement;
			span.classList.contains('cdisabled') === false ? span.classList.add('cdisabled') : null;

		}

	}

	startWork(): void {
		this.resp_boolean === true ? this.chengeStyle() : null;
	}

}

export class Forms {
	callback: Function;
	constructor(callback: Function) {
		/**
		 * TODO: class wich on input geting the callback:function. This's callback  geting geting the string  and start work
		 * return void
		 */
		this.callback = callback;
	}

	get getValueOfField(): string | void {
		/**
		 * TODO: Get the string of the form's value,
		 * return string  2202201302350075
		 */
		const number_card_field = document.querySelector('#form [name="card_number"]') as HTMLFormElement;
		const number_card = number_card_field['value'] as string;

		const reg = new RegExp('[0-9 ]{12,72}');
		if (reg.test(number_card)) return number_card
		return '000000000000'
	}

	startWork(): void {
		const get_form = document.querySelector('#form') as HTMLFormElement;
		const resp: string = '';
		const source_event = () => {
			const number_card = get_form.querySelector('[name="card_number"]') as HTMLFormElement;

			number_card.addEventListener('keyup', (e: any) => {
				/**
				 * Как подвесить прослушку на собыите - нажатие клавиши Enter в поле input?
				 */
				e.stopPropagation();

				// debugger;

				let keyCode = e.key;
				keyCode === "Enter" || keyCode === "NumpadEnter" ? e.preventDefault : null;

				// debugger
			});




			number_card.addEventListener('input', (e): any => {
				e.preventDefault;
				e.stopPropagation();
				// return this.callback(this.getValueOfField);
			});

			number_card.addEventListener('click', (e): any => {
				e.preventDefault;
				e.stopPropagation();
				// return this.callback(this.getValueOfField);
			});

			number_card.addEventListener('blur', (e: Event): any => {
				e.preventDefault;
				e.stopPropagation;
				// return this.callback(this.getValueOfField);
			});

			const get_buttom = get_form.querySelector('#submitform') as HTMLFormElement;
			get_buttom.addEventListener('click', (e): any => {
				e.preventDefault;
				e.stopPropagation();
				return this.callback(this.getValueOfField);
			});


		}

		return source_event();
	}
}

