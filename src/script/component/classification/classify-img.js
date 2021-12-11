class ClassifyImg extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <button id="btn-predict" class="btn border-0 h-100 w-100 p-0 m-0">
            <div
                class="wrapper-2 rounded-3 position-relative d-flex py-5 w-100 h-100 align-items-center justify-content-center">
                <div
                    class="image position-absolute d-flex w-100 h-100 align-items-center justify-content-center">
                    <img id="img-classified" src="" alt="" class="h-100 w-100">
                </div>
                <div class="content">
                    <div class="icon"><i class="fas fa-compress"></i>
                    </div>
                    <div class="text">Klasifikasikan</i>
                    </div>
                </div>
                <div class="file-name">
                    <div class="spinner-grow text-light d-none" style="width: 100px; height: 100px;" role="status"></div>
                    <p class="file-name-classified-icon d-none"><i class="fas fa-trash-alt"></i></p>
                    <span class="file-name-classified-name d-none">Jenis sampah <b id='jensam'>[...]</b></span>
                </div>
            </div>
        </button>
        `;
    }
}

customElements.define('classify-img', ClassifyImg);