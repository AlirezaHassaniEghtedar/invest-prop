const rulesContainersButtons = document.querySelectorAll('.rules-container .rule-container')
const rulesSectionButtons = document.querySelectorAll('.rules .section-buttons button')
rulesSectionContainers = document.querySelectorAll('.rules .rules-container')

rulesContainersButtons.forEach(element => element.addEventListener('click' , handleRulesToggling))
rulesSectionButtons.forEach(button => button.addEventListener('click' , handleButtonClick))

function handleRulesToggling (e) {
    let ruleContainer = e.target.parentElement
    
    while(ruleContainer.nodeName !== 'DIV'){
        ruleContainer = ruleContainer.parentElement
    }
        ruleContainer.classList.toggle('active')
}

function handleButtonClick (e) {
    const clickedBtn = e.target
    
    rulesSectionButtons.forEach(btn => btn.classList.remove('active'))
    clickedBtn.classList.add('active')
    
    rulesSectionContainers.forEach((element , index) => {
        element.classList.remove('active')

        if(Number(clickedBtn.id) - 1 == index) element.classList.add('active')
    })
}