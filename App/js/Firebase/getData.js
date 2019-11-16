//Getting data and passing it to create UI Printers List
db.collection('printers').get().then(data => {
    setupPrintersList(data.docs);
});
