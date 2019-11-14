window.setTimeout(() =>{
    let loginBtn = document.querySelector("#loginBtn"),
    closeLoginModalBtn = document.querySelector("#closeLoginModalBtn"),
    loginModal = document.querySelector('#loginModal');

    loginBtn.addEventListener('click', openLoginModal);
    closeLoginModalBtn.addEventListener('click', closeLoginModal);

    function openLoginModal() {
        loginModal.classList.add("open");
    }
    function closeLoginModal() {
        loginModal.classList.remove("open");
    }   
}, 1000);
