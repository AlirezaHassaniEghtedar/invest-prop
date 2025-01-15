const transactionsHeaderBtns = document.querySelectorAll('.main-content-content .reports-header button');

transactionsHeaderBtns.forEach(btn => btn.addEventListener('click' , handleToggle))

function handleToggle (e) {
    transactionsHeaderBtns.forEach(btn => btn.classList.remove('active'))

    e.target.classList.add('active')
}