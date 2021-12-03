import './developer-one';
import './developer-two';

class DeveloperSection extends HTMLElement {
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
        const developerOneElement = document.createElement('developer-one');
        developerOneElement.classList.add('col-lg-4', 'col-md-6', 'col-xl-4', 'col-12', 'my-3');
        this.appendChild(developerOneElement);

        const developerTwoElement = document.createElement('developer-two');
        developerTwoElement.classList.add('col-lg-4', 'col-md-6', 'col-xl-4', 'col-12', 'my-3');
        this.appendChild(developerTwoElement);
    }
}

customElements.define('developer-section', DeveloperSection);