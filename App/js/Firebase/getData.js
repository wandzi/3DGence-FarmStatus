//Getting data and passing it to create UI Printers List
db.collection('printers').onSnapshot(data => {
    SetupPrintersList(data.docs);
});
