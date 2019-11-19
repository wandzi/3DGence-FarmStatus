const printersList = document.querySelector('#printers-status-list');

class Printer {
    constructor(printer_model, printer_number, printing_file_name, printing_hours){
        this.printerModel = printer_model;
        this.printerNumber = printer_number;
        this.printingFileName = printing_file_name;
        this.printingHours = printing_hours;
    }
    
    containerColor(){
        let moduleColor;
        
        switch (this.printerModel) {
            case ("One"):
                moduleColor = 'one-printer';
                break;
            case ("Double P255"):
                moduleColor = 'double-printer';
                break;
            case ("F340 - Pro"):
                moduleColor = 'f340-pro-printer';    
                break;
            case ("F340 - HT"):
                moduleColor = 'f340-ht-printer';
                break;
            case ("F340 - HT Max"):
                moduleColor = 'f340-htmax-printer';
                break;
            case ("FormLab Form2"):
                moduleColor = 'formlab-printer';
                break;
        }
        return moduleColor;
    }
}

//Generating UI printers list from DataBase
const SetupPrintersList = (data) => {

    let list = '';
    data.forEach(doc => {
        const dataBase = doc.data();
        const printer = new Printer(dataBase.printer_model, dataBase.printer_number, dataBase.printing_file_name, dataBase.printing_hours);
        const moduleColor = printer.containerColor();

        const printerContainer = `
        <div class="printer-container ${moduleColor}">
            <p class="bigger-font ">${printer.printerModel} - numer: ${printer.printerNumber}</p>
            <p class="bigger-font">${printer.printingFileName}</p>
            <div class="w3-light-grey w3-round-xlarge">
                <div class="w3-container w3-blue w3-round-xlarge progressBar">
                </div>
            </div> 
            <p class="smaller-font" id="">${printer.printingHours}h</p>
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

