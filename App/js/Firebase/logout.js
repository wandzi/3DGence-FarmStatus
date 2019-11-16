window.setTimeout(() =>{
    const logoutBtn = document.querySelector("#logoutBtn");
    logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        auth.signOut();
        changeRoute('/');
        location.reload();
    });
}, 1000);