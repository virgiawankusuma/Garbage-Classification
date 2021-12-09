class ChooseImg extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="card h-100 border-0">
            <div
                class="wrapper-1 rounded-3 position-relative d-flex w-100 align-items-center justify-content-center">
                <div
                    class="image position-absolute d-flex w-100 h-100 align-items-center justify-content-center">
                    <img id="img-classify" src="" alt="" class="w-100 h-100">
                </div>
                <div class="content">
                    <div class="icon"><i class="far fa-image"></i>
                    </div>
                    <div class="text">Tidak ada gambar terpilih</i>
                    </div>
                </div>
                <div id="btn-cancel"><i class="fas fa-times"></i></div>
                <div class="file-name">Nama file</div>
            </div>
            <input type="file" id="btn-default" accept="image/,.jpg,.jpeg,.png" hidden>
            <button id="btn-upload" class="btn btn-secondary mt-2"><i class="fas fa-upload"></i> Pilih
                gambar..</button>
        </div>
        `;
    }
}

customElements.define('choose-img', ChooseImg);