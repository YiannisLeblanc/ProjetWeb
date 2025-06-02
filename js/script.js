function hideQuizStart() {
    let quiz = document.querySelector("#quiz-form");
    quiz.style.display = "none";
}

function revealQuiz(){
    let presentation = document.querySelector("#presentation");
    presentation.style.display = "none";
    let quiz = document.getElementById("quiz-form");
    quiz.style.display = "initial";
}


function quizStart() {
    alert("Le quiz va commencer !");
    
    revealQuiz();
}