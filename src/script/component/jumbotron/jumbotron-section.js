import data from './jumbotron-data.js';

class JumbotronSection extends HTMLElement {
    constructor() {
        super();
        this.text = data;
    }

    set texts(texts) {
        this._texts = texts;
        this.render();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.text.forEach((element) => {
            this.innerHTML = `
            <div class="jumbotron py-3">
                <div class="container row mx-auto py-5 my-5">
                    <section class="col-lg-6 col-12 m-auto text-center">
                        <h2>${element.title}</h2>
                        <p class="fs-5 lh-lg">
                            ${element.description}
                        </p>
                        <a href="#content" class="btn btn-lg btn-outline-light" type="button">Coba
                            Sekarang</a>
                    </section>
                    <section class="col-lg-6 col-12 m-auto mt-3">
                        <img src="${element.image}"
                            alt="${element.alt}" class="img-fluid rounded">
                    </section>
                </div>
            </div>
        `;
        });
    }
}

customElements.define('jumbotron-section', JumbotronSection);
