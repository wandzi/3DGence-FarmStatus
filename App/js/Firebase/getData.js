//Getting data and passing it to create UI Printers List
db.collection('printers').onSnapshot(data => {
    setupPrintersList(data.docs);
});

//Getting data and passing it to create 
db.collection('notifications').onSnapshot(data => {
    setupNotificationList(data.docs);
});