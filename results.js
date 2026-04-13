const chosen = localStorage.getItem('chosenOption');
const againButton = document.getElementById("againButton");

if (chosen) {
    document.querySelector('.question').innerHTML = chosen;
} else {
    document.querySelector('.question').innerHTML = "No option selected";
}

const percentage = Math.floor(Math.random() * 46) + 30;
document.querySelector('.percent').innerHTML = percentage + '%';

againButton.addEventListener('click', () => {
    window.location.href = 'index.html';
});