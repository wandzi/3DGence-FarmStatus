window.setTimeout(() =>{
    let loginBtn = document.querySelector("#loginBtn"),
    closeLoginModalBtn = document.querySelector("#closeLoginModalBtn"),
    loginModal = document.querySelector('#loginModal');

    loginBtn.addEventListener('click', () => {
        loginModal.classList.add("open");
    });
    closeLoginModalBtn.addEventListener('click', () => {
        loginModal.classList.remove("open");
    });


}, 1000);
