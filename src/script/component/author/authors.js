class AuthorDev extends HTMLElement {
    constructor() {
        super();
    }

    set author(author) {
        this._author = author;
        this.render();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="card border-0 h-100 pt-5">
            <img src="${this._author.img}" class="card-team" alt="Foto Profile ${this._author.name}">
            <!--<svg class="bd-placeholder-img card-team" xmlns="http://www.w3.org/2000/svg" role="img"
                aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false">
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#777"></rect>
            </svg> -->
            <div class="card-body shadow">
                <div class="card-item">
                    <div class="card-top">
                        <h5 class="card-title text-center">${this._author.name}</h5>
                        <p class="card-text text-center">${this._author.bio}</p>
                        <ul>
                            <li>${this._author.group}</li>
                            <li>${this._author.hobby}</li>
                        </ul>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-12 d-grid gap-2">
                            <a href="${this._author.linkedin}" target="_blank"
                                class="btn btn-primary rounded-0"><i class="fab fa-linkedin"></i>
                                LinkedIn</a>
                        </div>
                        <div class="col-lg-6 col-md-6 col-12 d-grid gap-2">
                            <a href="${this._author.github}" target="_blank" class="btn btn-dark rounded-0"><i
                                    class="fab fa-github"></i> GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    }
}

customElements.define('author-dev', AuthorDev);
