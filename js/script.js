var lowScore = "Mamamia... tu peux faire mieux.";
var mediumScore = "Yahoo ! C'est pas mal du tout !";
var highScore = "Here we go ! C'est un sans faute !";

function scoreText(score){
    if(score < 0.5){
        return lowScore;
    } else if(score >= 0.5 && score != 1){
        return mediumScore;
    } else{
        return highScore;
    }

}


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

function finishQuiz(){
    let score = 0;
    let total = 0;
    let results = document.querySelectorAll("[result='true']");
    for(let result of results){
        if(result.checked){
            score++;
        }
        total++;
    }
    scoreReveal(score, total);
}


function scoreReveal(score, total){
    hideQuizStart();
    let scoreDiv = document.querySelector("#scoreDisplay");
    scoreDiv.style.display = "initial";

    let scoreBalise = document.querySelector("#score");
    let totalBalise = document.querySelector("#total");
    let scoreComment = document.querySelector("#score-comment");
    scoreBalise.textContent = score;
    totalBalise.textContent = total;
    scoreComment.textContent = scoreText(score/total);
}

function quizStart() {
    alert("Le quiz va commencer !");
    
    revealQuiz();
}

