const open_bars = document.querySelector('.userBars');
const close_bars = document.querySelector('.close-btn');
const nav = document.querySelectorAll('.nav');

open_bars.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.add('visible'));
});

close_bars.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.remove('visible'));
});

