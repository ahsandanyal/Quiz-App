const quizData = [
   {
       question: "which language run in a web?",
       a: "Java",
       b: "C",
       c: "python",
       d: "javascript",
       correct: "d",
   },
   {
    question: "Which of the following is a disadvantage of using JavaScript?",
    a: "Client-side JavaScript does not allow the reading or writing of files.",
    b: " JavaScript can not be used for Networking applications because there is no such support available.",
    c: "JavaScript doesn't have any multithreading or multiprocess capabilities.",
    d: "All of the above.",
    correct: "d",
},
{
    question: "How can you get the total number of arguments passed to a function??",
    a: "Using args.length property",
    b: "Using arguments.length property",
    c: "Both of the above.",
    d: "None of the above.",
    correct: "b",
},
{
    question: "Which of the following type of variable takes precedence over other if names are same",
    a: "global variable",
    b: " local variable",
    c: " Both of the above.",
    d: "None of the above.",
    correct: "b",
},
{
    question: "Which of the following function of String object returns a number indicating the Unicode value of the character at the given index?",
    a: "charAt()",
    b: "charCodeAt()",
    c: "concat()",
    d: "indexOf()",
    correct: "b",
},
{
    question: "Which of the following function of Array object returns true if at least one element in this array satisfies the provided testing function?",
    a: "reverse()",
    b: "shift()",
    c: "slice()",
    d: "some()",
    correct: "d",
},
]
console.log(quizData[0]);
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
// questionEl.innerText = quizData[0];
let currentQuiz = 0;
let score = 0; 

function loadQuiz(){
    deselectAnswers();
   const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}
loadQuiz();

function deselectAnswers(){
    answerEls.forEach( answerEl => answerEl.checked = false)
}
function getSelected(){
    let answer

    answerEls.forEach(answerEl =>{
        if(answerEl.checked){
          answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', ()=>{
    const answer = getSelected();
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++
        }
        currentQuiz++
        if(currentQuiz < quizData.length){
            loadQuiz()
        }else{
            quiz.innerHTML = `
             <h2>your correct answer is ${score}
             /${quizData.length} questions</h2>
             <button onclick="Location.reload()">Reload</button>
            `
        }
    }
});
