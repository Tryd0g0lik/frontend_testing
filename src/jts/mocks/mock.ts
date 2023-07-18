/**
 * TODO: Only making form in web-page
 */
export class CrateForm {
	constructor() { }

	get formHtml(): HTMLElement {
		const div: HTMLDivElement = document.createElement('div')
		div.classList.add('col-md-5',)
		div.innerHTML = `<ul class="cards list-unstyled">
				<li><span class="card world cdisabled" title="World">World</span></li>
				<li><span class="card visa cdisabled" title="Visa">Visa</span></li>
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

		const inner_div: HTMLElement = document.createElement('div');
		inner_div.classList.add('form-group');

		const form: HTMLFormElement = document.createElement('form');
		form.id = 'form';
		form.classList.add('form-inline');
		form.toggleAttribute('novalidate');
		form.novalidate = 'novalidate';

		const inp: HTMLInputElement = document.createElement('input')
		inp.classList.add('form-control', 'col-md-6')
		inp.id = 'card_number'
		inp.setAttribute('value', '')
		inp['name'] = 'card_number'
		inp.type = 'text'
		inp['placeholder'] = 'Credit card number';

		const a_link: HTMLElement = document.createElement('a')
		a_link.classList.add('btn', 'btn-success')
		a_link.id = 'submitform'
		a_link.innerHTML = 'Click to Validate';

		div.insertAdjacentElement('beforeend', form)

		form.insertAdjacentElement('beforeend', inner_div);
		inner_div.insertAdjacentElement('beforeend', inp);
		inner_div.insertAdjacentElement('beforeend', a_link);
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

