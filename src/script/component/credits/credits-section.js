import data from './credits-data.js';
import './credits-list';

class CreditsSection extends HTMLElement {
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
		this.innerHTML = `
            <section class="col-12">
                <div class="card shadow py-5">
                    <div class="card-body">
                        <div class="card-title text-center">
                            <h3 class="card-title hr-title">
                                <i class="fas fa-info-circle"></i>
                                Credits
                            </h3>
                            <div class="card-text text-center">
							<ul id='credit-card-text'>
                            </ul>
							</div>
                        </div>
                    </div>
                </div>
            </section>
            `;
		document.querySelector('#credit-card-text').innerHTML =
			'<credits-list></credits-list>';
	}
}

customElements.define('credits-section', CreditsSection);
