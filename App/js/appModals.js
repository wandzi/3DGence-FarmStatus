window.setTimeout(() =>{
    let addPrinterStatus = addPrinterStatusBtn = document.querySelector("#addPrinterStatusBtn"),
    modalBtn = document.querySelector("#closeModalBtn"),
    addPrinterModal = document.querySelector('#printerModal');

    addPrinterStatus.addEventListener('click', OpenModal);
    closeModalBtn.addEventListener('click', CloseModal);

    function OpenModal() {
        addPrinterModal.classList.add("open");
    }
    function CloseModal() {
        addPrinterModal.classList.remove("open");
    }   
}, 1000);
