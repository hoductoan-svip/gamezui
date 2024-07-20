const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const responseDiv = document.getElementById('response');

yesButton.addEventListener('click', () => {
    responseDiv.innerHTML = '<span class="heart">thía á</span> ui hạnh phúc thía';
});

noButton.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});
