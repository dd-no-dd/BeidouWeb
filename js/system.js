$('.carousel').carousel()
// 手风琴
let panels = document.querySelectorAll('.panel')
panels.forEach((item, index) => {
    item.addEventListener('click', () => {
        panels.forEach(panel => {
            panel.classList.remove('active')
        })
        document.querySelectorAll('.panel')[index].classList.add('active')
    })
})