let homePage = `
  <section class="welcome-page" id="welcome-page">
    <img class="logo" alt="logo" src="App/img/logo.png"> 
    <button class="login" id="loginBtn">Sign-in</button>
    <div class="version">version 0.0.1</div>
    </section>
  <!-– –––––––––––––––––––––––––––––––––––––––––––––––––– Login Modal  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div id="loginModal" class="modal">
    <!-- Modal content -->
    <div class="modal-content modal-content-login">
        <span class="close" id="closeLoginModalBtn">&times;</span>
        <div id="loginContainer">
            <img src="App/img/logo.png" class="login-logo"/>
            <form id="login-form">
            <div class="login-container">
                <label>E-mail:</label>
                <input type="email" id="user-email" /></br>
                <label>Password:</label>
                <input type="password" id="user-password" />
            </div>
            <button class="signin-button">Login</button>
            <span class="error"></span>
            </form>
        </div>
        </div>
    </div>
  `;

let application = `
  <nav>
    <div id="clock" class="clock">
      <span id="hour"></span>
    </div>
    <img alt="app-logo" class="app-page-logo" src="App/img/logo.png">
    <div class="menu">
      <i class="fa fa-bell" id="notificationModalBtn">              
        <span class="notification-counter" id="notificationCounterContainer"></span>
      </i> 
      <i class="fa fa-sign-out" aria-hidden="true" id="logoutBtn"></i>
    </div>
  </nav> 
  <i class="fa fa-plus addBtn" id="addPrinterStatusBtn"></i>

  <div class="printers-status" id="printers-status-list">
    <!-- Genereted UI printers list from DataBase -->
  </div>  

  <!-- Modals -->
  <div id="printerModal" class="modal">
    <div class="modal-content">
      <span class="close" id="closeModalBtn">&times;</span>
      <div class="container">
        <form name="addPrinterForm" class="addPrinterForm" id="addPrinterForm">
          <label for="printer_model" id="addPrintersName">Model drukarki</label>

          <select name="printerSelect">
            <option selected hidden>Wybierz model drukarki</option>
            <option>One</option>
            <option>Double P255</option>
            <option>F340 - Pro</option>
            <option>F340 - HT</option>
            <option>F340 - HT Max</option>
            <option>FormLab Form2</option>
          </select>

          <label >Numer drukarki</label>
          <input type="number" id="printerNumber" name="lastname">

          <label >Nazwa wydruku</label>
          <input type="text" id="printingFileName" name="lastname">

          <label>Czas druku</label>
          <input type="text" id="printingFileTime" name="quantity">    

          <input type="submit" class="addPrinterToDatabaseBtn" id="addPrinterToDatabaseBtn" value="Dodaj">
        </form>
      </div>  
    </div>
  </div>
  `;

routes = {
'/': homePage,
'/application': application,
};

let root = document.querySelector("#app");
root.innerHTML = routes[window.location.pathname];

// History
let changeRoute = (pathName) => {

  window.history.pushState(
    {}, 
    pathName,
    window.location.origin + pathName
  );
  root.innerHTML = routes[pathName];
  
}

//Checking authentication status
auth.onAuthStateChanged(user => {

  if (user) {

    let appendScript = (path) => {
      let script = document.createElement('script');
      script.setAttribute('src',`${path}`);
      document.body.appendChild(script);
    }

    changeRoute('/application');
    appendScript('App/js/clock.js');
    appendScript('App/js/appModals.js');
    appendScript('App/js/Firebase/getData.js');
    appendScript('App/js/Firebase/pushData.js');
    appendScript('App/js/Firebase/logout.js');
    appendScript('App/js/app.js');

    window.onpopstate = () => {
      root.innerHTML = routes[window.location.pathname];
    }

  } else {

    changeRoute('/');
    window.onpopstate = () => {
      root.innerHTML = routes[window.location.pathname];
    }

  }
});
