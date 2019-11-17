const addPrinterForm = document.querySelector("#addPrinterForm");

addPrinterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const printerModel = addPrinterForm.printerSelect,
        printerModelValue = printerModel[printerModel.selectedIndex].value,
        printerNumber = document.querySelector("#printerNumber").value,
        printingFileName = document.querySelector("#printingFileName").value,
        printingFileTime = document.querySelector("#printingFileTime").value;   

    db.collection('printers').add({
        printer_model: printerModelValue,
        printer_number: printerNumber,
        printing_file_name: printingFileName,
        printing_hours: printingFileTime,
    }).then(() => {
        document.querySelector('#printerModal').classList.remove("open");
        addPrinterForm.reset();
        PrinterSuccessfullyAddedToDatabase("Drukarka została dodana do listy",'succes-alert');
    });
    
});

