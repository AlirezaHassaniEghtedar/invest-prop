const svgContainers = document.querySelectorAll('.dashboard .dashboard-reset-password-container .svg-container')
const passwords = document.querySelectorAll('.dashboard .dashboard-reset-password-container .input-container input')

svgContainers.forEach(element => element.addEventListener('click', handleToggleLine))

function handleToggleLine(e) {
    let targetElement = e.target;
    if (targetElement.nodeName === 'DIV' && targetElement.classList.contains('svg-container')) {
        targetElement.classList.toggle('line-through')
    }
    if (targetElement.nodeName === 'svg') {
        targetElement.parentElement.classList.toggle('line-through')
        targetElement = targetElement.parentElement;
    }
    if (targetElement.nodeName === 'path') {
        targetElement.parentElement.parentElement.classList.toggle('line-through')
        targetElement = targetElement.parentElement.parentElement;
    }

    const input = targetElement.parentElement.querySelector('input');
    const newValue = input.getAttribute('type') === 'password' ? 'text' : 'password';

    input.setAttribute('type', `${newValue}`);
}