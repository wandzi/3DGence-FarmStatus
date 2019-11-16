window.setTimeout(() =>{
// Login
const loginForm = document.querySelector("#login-form");

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    //User Login and Password
    const userEmail = document.querySelector("#user-email").value,
          userPassword = document.querySelector("#user-password").value;

    auth.signInWithEmailAndPassword(userEmail, userPassword)
        .then()
        .catch(error => {
            // Catching error message to UI
            document.querySelector(".error").innerHTML = error.message;
        });
});
}, 1000);