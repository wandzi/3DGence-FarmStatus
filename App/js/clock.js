function time() {
    
    // Variables
    
    var date = new Date(),
        hour = date.getHours(),
        minutes = date.getMinutes(),
        displayHour = document.querySelector('#hour');

    // Display minutes with 0 
    
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    
    // Display time and date

    displayHour.innerHTML = hour + ":" + minutes;
    
    setTimeout("time()", 1000);
}    

time();