const ticketsHeaderBtns = document.querySelectorAll('.main-content-content .tickets-header-buttons button');

ticketsHeaderBtns.forEach(btn => btn.addEventListener('click' , handleToggle))

function handleToggle (e) {
    ticketsHeaderBtns.forEach(btn => btn.classList.remove('active'))

    e.target.classList.add('active')
}