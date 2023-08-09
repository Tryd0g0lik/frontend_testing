/**
 * Class Page is a regulates for a style views form.
 * Class Form has a rules for a true workin form.
 */
export class Pages {
	manual: [string, number, number];
	cardNumber: number;
	respBoolean: boolean;
	constructor(card_manual: [string, number, number] = ['', 0, 0],
		cardNumber: number,
		respBoolean: boolean = false
	) {
		/*
		*	TODO:  This's class do changes a display page's view.
		*	:atribs card_manual: this's "[card-name, first-integer, symbol count  of number card  ]"
		*	:atribs cardNumber: this's card's number from user bank's card.
		*	:atribs respBoolean: 'true' means the bank's card number has been passed the all checs.
		*	returns void.
		*/
		this.manual = card_manual;
		this.cardNumber = cardNumber;
		this.respBoolean = respBoolean;

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
		const brandBankCard = this.getBrandCard.slice()
		let selector: string = '';

		if (brandBankCard === 'diners club') selector = 'li span.card.' + 'diners_club'
		else if (brandBankCard === 'мир') selector = 'li span.card.' + 'world'
		else if (brandBankCard === 'jcb international') selector = 'li span.card.' + 'jcb'
		else if (brandBankCard === 'American Express') selector = 'li span.card.' + 'amex'
		else if (brandBankCard === 'visa') selector = 'li span.card.' + 'visa'
		else if (brandBankCard === 'mastercard') selector = 'li span.card.' + 'master'
		else if (brandBankCard === 'maestro') selector = 'li span.card.' + 'maestro'
		else if (brandBankCard === 'china unionPay') selector = 'li span.card.' + 'china'
		else if (brandBankCard === 'discover') selector = 'li span.card.' + 'discover'
		else {
			const cardLists = document.querySelector('ul.cards') as HTMLElement;
			cardLists.insertAdjacentHTML('afterend', '<p style="color:red">Что-то не так</p>');

		}

		const oneCard = document.querySelector(selector) as HTMLElement;
		oneCard.classList.remove('cdisabled');
	}

	cleaningPage(): void {
		/**
		 * TODO: reset the all changes
		*/

		const allCards = document.querySelectorAll('.cards > li');
		for (let i = 0; i < allCards.length; i++) {
			const span = allCards[i].querySelector('span') as HTMLElement;
			span.classList.contains('cdisabled') === false ? span.classList.add('cdisabled') : null;
		}
	}

	startWork(): void {
		this.respBoolean === true ? this.chengeStyle() : null;
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
		const cardNumber = number_card_field['value'] as string;
		const cardLists = document.querySelector('ul.cards') as HTMLElement;

		const reg = new RegExp('[0-9 ]{12,72}');
		if (reg.test(cardNumber)) return cardNumber
		else if (cardNumber.length > 72 || cardNumber.length < 12) {


			const err = new Error();
			err.message = "Ckeck length the bank's  number card. Length betwen 12-72 intergers"
			err.name = 'DataForm'
			console.error(err.name, err.message);
			cardLists.insertAdjacentHTML('afterend', `<p style="color:red">${err.name}: ${err.message}</p>`);

		}
		else {
			const err = new Error();
			err.message = "Check the data type. Input only integers"
			err.name = 'DataTypeForm'
			console.error(err.name, err.message);
			cardLists.insertAdjacentHTML('afterend', `<p style="color:red">${err.name}: ${err.message}</p>`);

		}
		return '000000000000'
	}

	startWork(): void {
		const getForm = document.querySelector('#form') as HTMLFormElement;
		const sourceEvent = () => {
			const cardNumber = getForm.querySelector('[name="card_number"]') as HTMLFormElement;

			cardNumber.addEventListener('keyup', (e: any) => {
				/**
				 * Как подвесить прослушку на собыите - нажатие клавиши Enter в поле input?
				 */
				e.stopPropagation();
				let keyCode = e.key;
				keyCode === "Enter" || keyCode === "NumpadEnter" ? e.preventDefault : null;
			});



			cardNumber.addEventListener('input', (e): any => {
				e.preventDefault;
				e.stopPropagation();
			});

			cardNumber.addEventListener('click', (e): any => {
				e.preventDefault;
				e.stopPropagation();
			});

			cardNumber.addEventListener('blur', (e: Event): any => {
				e.preventDefault;
				e.stopPropagation;
			});

			const getButtom = getForm.querySelector('#submitform') as HTMLFormElement;
			getButtom.addEventListener('click', (e): any => {
				e.preventDefault;
				e.stopPropagation();
				return this.callback(this.getValueOfField);
			});
		}

		return sourceEvent();
	}
}
