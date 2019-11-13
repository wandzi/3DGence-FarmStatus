const logoutBtn = document.querySelector("#logoutBtn");

logoutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
    console.log('wylogowany');
});
