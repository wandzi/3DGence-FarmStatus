const addPrinterForm = document.querySelector("#addPrinterForm");

printerSuccessfullyAdded = () => {
    const printersStatusList = document.querySelector("#printers-status-list"),
          div = document.createElement("div"),
          message = document.createTextNode('Printer was successfully added.');

    div.className = 'succes-alert';
    div.appendChild(message);
    printersStatusList.insertBefore(div, printersStatusList.childNodes[0]);

    setTimeout(() => {
        document.querySelector('.succes-alert').remove();;
    }, 3000);
}

//Pushing new printer to Data base "printers"

addPrinterForm.addEventListener('submit', (e) => {

    e.preventDefault();
    const printerModel = addPrinterForm.printerSelect,
        printerModelValue = printerModel[printerModel.selectedIndex].value,
        printerNumber = document.querySelector("#printerNumber").value,
        printingFileName = document.querySelector("#printingFileName").value,
        printingFileTime = document.querySelector("#printingFileTime").value;   

    //Converting time & date to miliseconds.
    let printingBeginTimeInMiliseconds = new Date().getTime(),
        printingFileTimeInMiliseconds = printingFileTime * 3600000,
        printingEndTimeInMiliseconds = printingBeginTimeInMiliseconds + printingFileTimeInMiliseconds;

    //Pushing data to the Firebase 
    db.collection('printers').add({
        printer_model: printerModelValue,
        printer_number: printerNumber,
        printing_file_name: printingFileName,
        printing_begin_time_in_miliseconds: printingBeginTimeInMiliseconds,
        printing_end_time_in_miliseconds: printingEndTimeInMiliseconds,
    }).then(() => {
        document.querySelector('#printerModal').classList.remove("open");
        addPrinterForm.reset();
        printerSuccessfullyAdded();
    });
    
});


