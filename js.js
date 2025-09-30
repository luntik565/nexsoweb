document.querySelector('.burger').addEventListener('click', function(e) {
    this.classList.toggle('act')
    document.querySelector('.header-item').classList.toggle('active')
})