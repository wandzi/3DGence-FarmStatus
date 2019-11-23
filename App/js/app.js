const printersList = document.querySelector('#printers-status-list');

class Printer {
    constructor(printer_ID, printer_model, printer_number, printing_begin_time_in_miliseconds, printing_file_name, printing_end_time_in_miliseconds) {
        this.printerId = printer_ID,
        this.printerModel = printer_model,
        this.printerNumber = printer_number,
        this.printingBeginTimeInMilisecond = printing_begin_time_in_miliseconds,
        this.printingFileName = printing_file_name,
        this.printingEndTimeInMiliseconds = printing_end_time_in_miliseconds;
    }
    
    containerColor() {
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

    printCountdown() {
        let refreshCountdown = setInterval(() => {
            let actualDate = new Date().getTime(),
                difference = this.printingEndTimeInMiliseconds - actualDate,
                days,
                hours,
                minutes,
                seconds;

            // Calculations to get days, hours minutes and seconds to the end of the print.
            days = Math.floor(difference / (1000 * 60 * 60 * 24));
            hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            seconds = Math.floor((difference % (1000 * 60)) / 1000);

            // Inner HTML

            const printerContainer = document.querySelector(`#printer-${this.printerId}`),
                  countdownTimer = document.querySelector(`#countdown-${this.printerId}`);

            if (days > 0) {
                countdownTimer.innerHTML = `${days} dni ${hours} godzin ${minutes} minut ${seconds} sekund`;
            } else if (hours > 0) {
                countdownTimer.innerHTML = `${hours} godzin ${minutes} minut ${seconds} sekund`;
            } else if (minutes > 0) {
                countdownTimer.innerHTML = `${minutes} minut ${seconds} sekund`;
            } else if (seconds > 0) {
                countdownTimer.innerHTML = `${seconds} sekund`;
            } else {
                countdownTimer.innerHTML = 'Zakończono wydruk.';
                clearInterval(refreshCountdown);
                
                this.pushNotification();
                this.movePrinterContainerToTheTop();
            }

            // Progress Bar

            const printingTimeInMiliseconds = this.printingEndTimeInMiliseconds - this.printingBeginTimeInMilisecond,
                  actualDifference = printingTimeInMiliseconds - difference,
                  onePercent = printingTimeInMiliseconds * 0.01,
                  actualPercentOfThePrint = (Math.round(actualDifference / onePercent));

            const progressBar = document.querySelector(`.progressBar-${this.printerId}`);

            if (actualPercentOfThePrint <= 100) {
                progressBar.innerHTML = `${actualPercentOfThePrint}%`;
                progressBar.style.width = `${actualPercentOfThePrint}%`;
            } else {
                progressBar.innerHTML = '100%';
                progressBar.style.width = '100%';
            }

        }, 1000);  
    }

    movePrinterContainerToTheTop() {
        let finishedPrinterContainer = document.querySelector(`#${this.printerId}`),
            containerCloseBtn;

        containerCloseBtn = document.createElement("span"); 
        containerCloseBtn.classList.add('close');
        containerCloseBtn.id = ('deleteContainerBtn');
        containerCloseBtn.innerHTML = "&times;";


        finishedPrinterContainer.insertBefore(containerCloseBtn, finishedPrinterContainer.childNodes[0]);;
        printersList.insertBefore(finishedPrinterContainer, printersList.childNodes[0]);
    }

    pushNotification() {
        let notificationModalContent = document.querySelector("#NotificationModalContent");
       
        notificationModalContent.innerHTML = `Drukarka ${this.printerModel} numer: ${this.printerNumber} wydrukowała ${this.printingFileName}`;
    }

}

//Generating UI printers list from DataBase
const setupPrintersList = (data) => {
    let list = '';
    data.forEach(doc => {
        const dataBase = doc.data(),
              printerID = doc.id,
              printer = new Printer(printerID, dataBase.printer_model, dataBase.printer_number, dataBase.printing_begin_time_in_miliseconds, dataBase.printing_file_name, dataBase.printing_end_time_in_miliseconds),
              moduleColor = printer.containerColor();

        printer.printCountdown();

        const printerContainer = `
        <div class="printer-container ${moduleColor}" id="${printer.printerId}">
            <p class="bigger-font ">${printer.printerModel} - nr: ${printer.printerNumber}</p>
            <p class="bigger-font">${printer.printingFileName}</p>
            <div class="w3-light-grey w3-round-xlarge">
                <div class="w3-container w3-blue w3-round-xlarge progressBar-${printer.printerId}">
                </div>
            </div> 
            <p class="smaller-font" id="countdown-${printer.printerId}"></p>
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

