window.setTimeout(() =>{
    const logoutBtn = document.querySelector("#logoutBtn");
    logoutBtn.addEventListener('click', () => {
        auth.signOut();
        changeRoute('/');
        location.reload();
    });
}, 1000);