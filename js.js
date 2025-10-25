document.querySelector('.burger').addEventListener('click', function(e) {
    this.classList.toggle('act')
    document.querySelector('.header-item').classList.toggle('active')
})

document.querySelectorAll('.question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        
        // Переключение класса active и отображение ответа
        if(answer.style.display === 'block') {
            answer.style.display = 'none';
            question.classList.remove('active');
        } else {
            document.querySelectorAll('.answer').forEach(a => a.style.display = 'none'); // Скрываем остальные ответы
            document.querySelectorAll('.question').forEach(q => q.classList.remove('active')); // Убираем класс active у остальных вопросов
            
            answer.style.display = 'block';
            question.classList.add('active');
        }
    });
});