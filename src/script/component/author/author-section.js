import data from './author-data.js';
import './authors.js';

class AuthorSection extends HTMLElement {
	constructor() {
		super();
		this.author = data;
	}

	set authors(authors) {
		this._authors = authors;
		this.render();
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
        <section class="col-lg-4 col-md-12 col-xl-4 col-12 my-3">
            <div class="card border-0 h-100 shadow">
                <div class="card-body my-3 text-center">
                    <h3 class="card-title hr-title">
                        <i class="fas fa-user-friends"></i>
                        Tim Pengembang
                    </h3>
                    <img src="https://image.freepik.com/free-vector/programmer-working-flat-style_52683-15041.jpg"
                        class="card-img-bottom" alt="Programmer working in flat style">
                </div>
            </div>
        </section>
        `;
		this.author.forEach((author) => {
			const authorElement = document.createElement('author-dev');
			authorElement.classList.add(
				'col-lg-4',
				'col-md-6',
				'col-xl-4',
				'col-12',
				'my-3'
			);
			authorElement.author = author;
			this.appendChild(authorElement);
		});
	}
}

customElements.define('author-section', AuthorSection);
