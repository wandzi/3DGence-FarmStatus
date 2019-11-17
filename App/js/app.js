const printersList = document.querySelector('#printers-status-list');

//Generating UI printers list from DataBase
const SetupPrintersList = (data) => {
    let list = '';
    data.forEach(doc => {
        const printer = doc.data();
        const printerContainer = `
        <div class="printer-container">
            <p class="bigger-font">${printer.printer_model} - numer: ${printer.printer_number}</p>
            <p class="bigger-font">${printer.printing_file_name}</p>
            <div class="w3-light-grey w3-round-xlarge">
                <div class="w3-container w3-blue w3-round-xlarge">
                </div>
            </div> 
            <p class="smaller-font" id="">${printer.printing_hours}h</p>
        </div>
        `;      
        list+= printerContainer;
    });

    printersList.innerHTML = list;
}

function PrinterSuccessfullyAddedToDatabase(message, className) {

    const div = document.createElement("div");
    div.className = `${className}`;
    div.appendChild(document.createTextNode(message));

    const printersStatusList = document.querySelector("#printers-status-list");

    printersStatusList.before(div);

    setTimeout(function(){
        document.querySelector('.succes-alert').remove();
    },2100);
    
}

