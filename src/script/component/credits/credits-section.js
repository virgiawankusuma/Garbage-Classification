import data from './credits-data.js';
import './credits-item.js';

class CreditsSection extends HTMLElement {
	constructor() {
		super();
		this._credits = data;
	}

	set credits(credits) {
		this._credits = credits;
		this.render();
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
		<div class="col-12">
			<div class="card shadow py-5">
				<div class="card-body text-center">
					<h3 class="card-title hr-title">
						<i class="fas fa-info-circle"></i>
						Credits
					</h3>
					<ul class="card-text" id='credits-list'>
					</ul>
				</div>
			</div>
		</div>
		`;

		const creditList = document.getElementById('credits-list');

		this._credits.forEach(credit => {
			const creditElements = document.createElement('credit-item');
			creditElements.credit = credit;

			creditList.append(this.appendChild(creditElements));
		});
	}
}

customElements.define('credits-section', CreditsSection);
