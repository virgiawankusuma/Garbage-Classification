class DeveloperTwo extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="card border-0 h-100 pt-5">
            <!-- <img src="" class="card-team" alt="Foto Virgiawan Teguh Kusuma"> -->
            <svg class="bd-placeholder-img card-team" xmlns="http://www.w3.org/2000/svg" role="img"
                aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false">
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#777"></rect>
            </svg>
            <div class="card-body shadow">
                <div class="card-item">
                    <h5 class="card-title text-center">Virgiawan Teguh Kusuma</h5>
                    <p class="card-text text-center">Mahasiswa Teknik Informatika, Universitas Islam
                        Nahdlatul Ulama
                        Jepara</p>
                    <ul>
                        <li>Machine Learning & Front-End Web Developer M3 Group</li>
                        <li>Front-End Enthusiast</li>
                    </ul>
                    <hr>
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-12 d-grid gap-2">
                            <a href="https://www.linkedin.com/in/virgiawankusuma"
                                class="btn btn-primary rounded-0"><i class="fab fa-linkedin"></i>
                                LinkedIn</a>
                        </div>
                        <div class="col-lg-6 col-md-6 col-12 d-grid gap-2">
                            <a href="https://github.com/virgiawankusuma" class="btn btn-dark rounded-0"><i
                                    class="fab fa-github"></i> GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define('developer-two', DeveloperTwo);