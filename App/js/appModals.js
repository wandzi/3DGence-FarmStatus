window.setTimeout( () =>{
    //Add Printer Modal
    let addPrinterStatus = document.querySelector("#addPrinterStatusBtn"),
        closePrinterModalBtn = document.querySelector("#closePrinterModalBtn"),
        addPrinterModal = document.querySelector('#printerModal');

    addPrinterStatus.addEventListener('click', OpenAddPrinterModal);
    closePrinterModalBtn.addEventListener('click', CloseAddPrinterModal);

    function OpenAddPrinterModal() {
        addPrinterModal.classList.add("open");
    }
    function CloseAddPrinterModal() {
        addPrinterModal.classList.remove("open");
    }   

    //Notification Modal
    let notificationModalBtn = document.querySelector("#NotificationModalBtn"),
        closeNotificationModalBtn = document.querySelector("#closeNotificationModalBtn"),
        notificationModal = document.querySelector("#NotificationModal");

        notificationModalBtn.addEventListener('click', OpenNotificationModal);
        closeNotificationModalBtn.addEventListener('click', CloseNotificationModal);

    function OpenNotificationModal() {
        notificationModal.classList.add("open");
    }
    function CloseNotificationModal() {
        notificationModal.classList.remove("open");
    }   

}, 1000);
