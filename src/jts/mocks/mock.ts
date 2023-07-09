export class CrateForm {
	constructor() { }

	get formHtml(): HTMLElement {
		const div: HTMLDivElement = document.createElement('div')
		div.classList.add('col-md-5',)
		div.innerHTML = `<ul class="cards list-unstyled">
				<li><span class="card visa" title="Visa">Visa</span></li>
				<li><span class="card master cdisabled" title="Mastercard">Mastercard</span></li>
				<li><span class="card amex cdisabled" title="American Express">American Express</span></li>
				<li><span class="card discover cdisabled" title="Discover">Discover</span></li>
				<li><span class="card jcb cdisabled" title="JCB">JCB</span></li>
				<li><span class="card diners_club cdisabled" title="Diners Club">Diners Club</span></li>
			</ul>`
		return div
	}

	get picPreviewHtml(): HTMLElement {
		const div: HTMLElement = document.createElement('div');
		div.classList.add('form',);

		const inp: HTMLInputElement = document.createElement('input')
		inp.classList.add('form-control', 'col-md-6')
		inp.id = 'card_number'
		inp['name'] = 'card_number'
		inp.type = 'text'
		inp['placeholder'] = 'Credit card number';

		const a_link: HTMLElement = document.createElement('a')
		a_link.classList.add('btn', 'btn-success')
		a_link.id = 'submitform'
		a_link.innerHTML = 'Click to Validate';


		div.insertAdjacentElement('beforeend', inp);
		div.insertAdjacentElement('beforeend', a_link);
		return div
	}

	changeDOM(): void {
		// TODO: type classElem is a string. It's variable
		// keep the class-name from the www-page, into which will be the two html-element insert 

		const web_elem = document.querySelector('main') as HTMLElement;
		web_elem.insertAdjacentElement('beforeend', this.formHtml);
		web_elem.insertAdjacentElement('beforeend', this.picPreviewHtml);

	}
}

