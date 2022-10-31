const langFlashBtn = document.getElementById('language-flash-btn')
const langFlashRow = document.getElementById('language-flash')

const secondTestBtn = document.getElementById('test-second-btn')
const secondTestRow = document.getElementById('test-second')

langFlashBtn.addEventListener('click', () => {
    langFlashRow.style = 'display: table-row;'
    secondTestRow.style = 'display: none;'
    document.location.hash = 'language-flash'
    langFlashBtn.classList.add('active')
    secondTestBtn.classList.remove('active')
})

secondTestBtn.addEventListener('click', () => {
    secondTestRow.style = 'display: table-row;'
    langFlashRow.style = 'display: none;'
    document.location.hash = 'test-second'
    secondTestBtn.classList.add('active')
    langFlashBtn.classList.remove('active')
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
