import './choose-img';
import './classify-img';

class ClassifySection extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <h3 class="card-title hr-title">
                <i class="fas fa-expand"></i>
                Klasifikasikan
            </h3>
        `;
        const chooseImgElement = document.createElement('choose-img');
        chooseImgElement.classList.add('col-lg-6', 'col-md-6', 'col-12', 'mb-5');
        this.appendChild(chooseImgElement);

        const classifyImgElement = document.createElement('classify-img');
        classifyImgElement.classList.add('col-lg-6', 'col-md-6', 'col-12', 'mb-5');
        classifyImgElement.setAttribute('id', 'hasil-klasifikasi');
        this.appendChild(classifyImgElement);
    }
}

customElements.define('classify-section', ClassifySection);