const logoutBtn = document.querySelector("#logoutBtn");

logoutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        window.location.replace("index.html");
    });
});