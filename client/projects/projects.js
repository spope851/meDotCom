const twoTruthsBtn = document.getElementById('two-truths-btn')
const twoTruthsRow = document.getElementById('two-truths')

const langFlashBtn = document.getElementById('language-flash-btn')
const langFlashRow = document.getElementById('language-flash')

const cubeSolverBtn = document.getElementById('cube-solver-btn')
const cubeSolverRow = document.getElementById('cube-solver')

twoTruthsBtn.addEventListener('click', () => {
    twoTruthsRow.style = 'display: table-row;'
    langFlashRow.style = 'display: none;'
    cubeSolverRow.style = 'display: none;'
    document.location.hash = 'two-truths'
    twoTruthsBtn.classList.add('active')
    langFlashBtn.classList.remove('active')
    cubeSolverBtn.classList.remove('active')
})

langFlashBtn.addEventListener('click', () => {
    langFlashRow.style = 'display: table-row;'
    cubeSolverRow.style = 'display: none;'
    twoTruthsRow.style = 'display: none;'
    document.location.hash = 'language-flash'
    langFlashBtn.classList.add('active')
    cubeSolverBtn.classList.remove('active')
    twoTruthsBtn.classList.remove('active')
})

cubeSolverBtn.addEventListener('click', () => {
    cubeSolverRow.style = 'display: table-row;'
    langFlashRow.style = 'display: none;'
    twoTruthsRow.style = 'display: none;'
    document.location.hash = 'cube-solver'
    cubeSolverBtn.classList.add('active')
    langFlashBtn.classList.remove('active')
    twoTruthsBtn.classList.remove('active')
})

const rows = Array.from(document.querySelectorAll('tr')).slice(1)

const hash = document.location.hash

const tabs = document.querySelector('.tabs').children

Array.from(tabs).map(tab => tab.classList.remove('active'))

if (hash) {
    document.getElementById(`${hash.slice(1)}-btn`).classList.add('active')
    rows.forEach(row => {
        console.log(row.id);
        if (row.id !== hash.slice(1)) {
            row.style = 'display: none;'
        }
    })
} else {
    tabs[0].classList.add('active')
    rows.slice(1).forEach(row => {
        row.style = 'display: none;'
    })
}
