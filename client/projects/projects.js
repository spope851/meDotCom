const langFlashBtn = document.getElementById('language-flash-btn')
const langFlashRow = document.getElementById('language-flash')

const secondTestBtn = document.getElementById('test-second-btn')
const secondTestRow = document.getElementById('test-second')

langFlashBtn.addEventListener('click', () => {
    langFlashRow.style = 'display: table-row'
    secondTestRow.style = 'display: none'
    document.location.hash = 'language-flash'
})

secondTestBtn.addEventListener('click', () => {
    secondTestRow.style = 'display: table-row'
    langFlashRow.style = 'display: none'
    document.location.hash = 'test-second'
})

const rows = document.querySelectorAll('tr')

if (document.location.hash) {
    rows.forEach(row => {
        if (row.id === (document.location.hash.slice(1) || 'thead')) row.style = 'display: none;'
    })
} else {
    Array.from(rows).slice(2).forEach(row => {
        row.style = 'display: none;' 
    })
}
