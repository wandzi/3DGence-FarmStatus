const printersList = document.querySelector('#printers-status-list');

//Generating UI printers list from DataBase
const setupPrintersList = (data) => {
    let list = '';
    data.forEach(doc => {
        const printer = doc.data();
        console.log(`Drukarka: ${printer.name} drukuje ${printer.printing_hours}`);
    });
}

