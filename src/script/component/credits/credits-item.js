class CreditItem extends HTMLElement {
	constructor() {
		super();
	}

	set credit(credit) {
		this._credit = credit;
		this.render();
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
		<li>${this._credit.title} &mdash;
			<a href="${this._credit.link}" target="_blank">${this._credit.text} </a>
		</li>
        `;
	}
}

customElements.define('credit-item', CreditItem);
