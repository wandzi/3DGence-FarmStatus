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

    let appendScript = (fileName) => {
      let script = document.createElement('script');
      script.setAttribute('src',`App/js/${fileName}.js`);
      document.body.appendChild(script);
    }

    changeRoute('/application');
    appendScript('clock');
    appendScript('getData');
    appendScript('app');
    appendScript('logout');

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
