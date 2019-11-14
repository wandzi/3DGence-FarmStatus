console.log('work');
window.setTimeout(() =>{
    console.log('work');
    const logoutBtn = document.querySelector("#logoutBtn");
    console.log(logoutBtn);
    logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        auth.signOut().then(() => {
        console.log('wylogowany');
        });
    });
}, 1000);