class JumbotronSection extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="container row mx-auto py-5 my-5">
            <section class="col-lg-6 col-12 m-auto d-block d-sm-none">
                <img src="https://images.unsplash.com/photo-1516847995948-c6523e129801?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    alt="tempat sampah" class="img-fluid rounded mb-2">
            </section>
            <section class="col-lg-6 col-12 m-auto text-center">
                <h1>Garbage Classification</h1>
                <p class="fs-5 lh-lg">
                    Mengklasifikasikan 12 jenis sampah melalui gambar menggunakan teknik Machine Learning Image
                    Classification, agar lebih efisien dalam pemilahan dan dapat mengurangi penumpukan sampah.
                </p>
                <a href="#content" class="btn btn-outline-light btn-lg mt-3" type="button">Coba
                    Sekarang</a>
            </section>
            <section class="col-lg-6 col-12 m-auto d-none d-sm-none d-md-none d-lg-block">
                <img src="https://images.unsplash.com/photo-1516847995948-c6523e129801?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    alt="tempat sampah" class="img-fluid rounded">
            </section>
        </div>
        `;
    }
}

customElements.define('jumbotron-section', JumbotronSection);