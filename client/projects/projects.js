const twoTruthsBtn = document.getElementById('two-truths-btn')
const twoTruthsRow = document.getElementById('two-truths')

const langFlashBtn = document.getElementById('language-flash-btn')
const langFlashRow = document.getElementById('language-flash')

const cubeSolverBtn = document.getElementById('3x3-cube-btn')
const cubeSolverRow = document.getElementById('3x3-cube')

const timeclockBtn = document.getElementById('react-timeclock-btn')
const timeclockRow = document.getElementById('react-timeclock')

twoTruthsBtn.addEventListener('click', () => {
    twoTruthsRow.style = 'display: table-row;'
    langFlashRow.style = 'display: none;'
    cubeSolverRow.style = 'display: none;'
    timeclockRow.style = 'display: none;'
    document.location.hash = 'two-truths'
    twoTruthsBtn.classList.add('active')
    langFlashBtn.classList.remove('active')
    cubeSolverBtn.classList.remove('active')
    timeclockBtn.classList.remove('active')
})

langFlashBtn.addEventListener('click', () => {
    langFlashRow.style = 'display: table-row;'
    cubeSolverRow.style = 'display: none;'
    twoTruthsRow.style = 'display: none;'
    timeclockRow.style = 'display: none;'
    document.location.hash = 'language-flash'
    langFlashBtn.classList.add('active')
    cubeSolverBtn.classList.remove('active')
    twoTruthsBtn.classList.remove('active')
    timeclockBtn.classList.remove('active')
})

cubeSolverBtn.addEventListener('click', () => {
    cubeSolverRow.style = 'display: table-row;'
    langFlashRow.style = 'display: none;'
    twoTruthsRow.style = 'display: none;'
    timeclockRow.style = 'display: none;'
    document.location.hash = '3x3-cube'
    cubeSolverBtn.classList.add('active')
    langFlashBtn.classList.remove('active')
    twoTruthsBtn.classList.remove('active')
    timeclockBtn.classList.remove('active')
})

timeclockBtn.addEventListener('click', () => {
    timeclockRow.style = 'display: table-row;'
    langFlashRow.style = 'display: none;'
    twoTruthsRow.style = 'display: none;'
    cubeSolverRow.style = 'display: none;'
    document.location.hash = 'react-timeclock'
    timeclockBtn.classList.add('active')
    cubeSolverBtn.classList.remove('active')
    langFlashBtn.classList.remove('active')
    twoTruthsBtn.classList.remove('active')
})

const rows = Array.from(document.querySelectorAll('.projects-row'))

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
