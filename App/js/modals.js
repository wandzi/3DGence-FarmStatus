let loginBtn = document.querySelector("#loginBtn"),
    closeLoginModalBtn = document.querySelector("#closeLoginModalBtn"),
    loginModal = document.querySelector('#loginModal');


    loginBtn.addEventListener('click', openLoginModal);
    closeLoginModalBtn.addEventListener('click', closeLoginModal);

function openLoginModal() {
    loginModal.style.display = "block";
}
function closeLoginModal() {
    loginModal.style.display = "none";
}   
