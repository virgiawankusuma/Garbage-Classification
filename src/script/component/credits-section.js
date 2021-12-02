class CreditsSection extends HTMLElement {
    connectedCallback() {
        this.render()
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
                    </div>
                    <div class="card-text text-center">
                        <ul>
                            <li>Datasets &mdash;<a
                                    href="https://www.kaggle.com/mostafaabla/garbage-classification">Kaggle
                                    Garbage Classification (12 classes)</a>
                            </li>
                            <li>Color Palette &mdash;<a
                                    href="https://coolors.co/264653-2a9d8f-e76f51-ddd8b8-ffffff">Generate
                                    from
                                    Coolors</a>
                            </li>
                            <li>CSS Framework &mdash;<a href="https://getbootstrap.com/">Bootstrap
                                    5.1.3</a>
                            </li>
                            <li>Icon Toolkit &mdash;<a href="https://fontawesome.com/">Font Awesome
                                    5.15.4</a>
                            </li>
                            <li>Gambar 1 &mdash;<a href="https://unsplash.com/photos/_j-EIqIysGM">Bin
                                    Unsplash
                                    by @badenabroad</a>
                            </li>
                            <li>Gambar 2 &mdash;<a href="https://unsplash.com/photos/_j-EIqIysGM">Programmer
                                    working in flat style Free Vector Freepick by @pikisuperstar</a>
                        </ul>

                        </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        `;
    }
}

customElements.define('credits-section', CreditsSection);