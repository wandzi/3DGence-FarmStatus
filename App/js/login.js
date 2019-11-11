const loginForm = document.querySelector("#login-form");

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    //Login user
    const userEmail = document.querySelector("#user-email").value,
          userPassword = document.querySelector("#user-password").value;

    auth.signInWithEmailAndPassword(userEmail, userPassword)
        .then(user => {
                window.location.replace("app.html");
        })
        .catch(error => {
            document.querySelector(".error").innerHTML = error.message;
        });

});

