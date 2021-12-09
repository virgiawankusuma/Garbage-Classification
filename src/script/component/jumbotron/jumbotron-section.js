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
                        <h1>${element.title}</h1>
                        <p class="fs-5 lh-lg">
                            ${element.deskripsi}
                        </p>
                        <a href="#content" class="btn btn-outline-light btn-lg mt-3" type="button">Coba
                            Sekarang</a>
                    </section>
                    <section class="col-lg-6 col-12 m-auto d-none d-sm-none d-md-none d-lg-block">
                        <img src="${element.gambar}"
                            alt="tempat sampah" class="img-fluid rounded">
                    </section>
                </div>
            </div>
        `;
        });
    }
}

customElements.define('jumbotron-section', JumbotronSection);
