const accountHeaderBtns = document.querySelectorAll('.dashboard .main-content-content .accounts-header button')

accountHeaderBtns.forEach(btn => btn.addEventListener('click' , handleAccountHeaderBtnClick))

function handleAccountHeaderBtnClick (e) {
    accountHeaderBtns.forEach(btn => btn.classList.remove('active'))

    e.target.classList.add('active')
}