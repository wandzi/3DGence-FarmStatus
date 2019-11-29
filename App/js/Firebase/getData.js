//Getting data and ordering it by printing time than passing it to create UI Printers List
db.collection('printers').orderBy('printing_end_time_in_miliseconds').onSnapshot(data => {
    setupPrintersList(data.docs);
});

//Getting data and passing it to create 
db.collection('notifications').onSnapshot(data => {
    setupNotificationList(data.docs);
});