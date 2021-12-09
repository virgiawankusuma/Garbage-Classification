import data from './credits-data.js';
import './credits-item.js';

class CreditsList extends HTMLElement {
	constructor() {
		super();
		this.credit = data;
	}

	set credits(credits) {
		this._credits = credits;
		this.render();
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.credit.forEach((element) => {
			const creditElements = document.createElement('credit-item');
			creditElements.credit = element;
			this.appendChild(creditElements);
		});
	}
}

customElements.define('credits-list', CreditsList);
