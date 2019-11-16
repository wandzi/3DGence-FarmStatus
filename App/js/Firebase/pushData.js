
    const addPrinterForm = document.querySelector("#addPrinterForm");

    addPrinterForm.addEventListener('submit', (e) => {
        console.log('clicked');
        e.preventDefault();
        const printerModel = addPrinterForm.printerSelect,
            printerModelValue = printerModel[printerModel.selectedIndex].value,
            printingFileName = document.querySelector("#printingFileName").value,
            printingFileTime = document.querySelector("#printingFileTime").value;
            
        db.collection('printers').add({
            name: printerModelValue,
            printing_hours: printingFileTime,
        }).then(() => {
            // TODO: close modal & show notification Succes or Failed after pushing printer to DB
        });
    });
