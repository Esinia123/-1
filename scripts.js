document.addEventListener('DOMContentLoaded', function() {
    // Пример простого теста
    const quizQuestions = [
        { question: 'Как зовут лучшего друга Гарри?', answer: 'Рон Уизли' },
        { question: 'В каком доме учился Гарри в Хогвартсе?', answer: 'Гриффиндор' }
    ];

    document.getElementById('quiz').addEventListener('click', function() {
        let score = 0;
        for (let i = 0; i < quizQuestions.length; i++) {
            const userAnswer = prompt(quizQuestions[i].question);
            if (userAnswer.toLowerCase() === quizQuestions[i].answer.toLowerCase()) {
                alert('Правильно!');
                score++;
            } else {
                alert('Неправильно.');
            }
        }
        alert(`Вы правильно ответили на ${score} вопросов из ${quizQuestions.length}.`);
    });
});
