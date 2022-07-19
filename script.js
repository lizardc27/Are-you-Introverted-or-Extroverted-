var introScore = 0;
var extroScore = 0;

var questionCount = 0;

var result=document.getElementById("result");
  
var q1a1=document.getElementById("q1a1");
var q1a2=document.getElementById("q1a2")

var q2a1=document.getElementById("q2a1");
var q2a2=document.getElementById("q2a2");

var q3a1=document.getElementById("q3a1");
var q3a2=document.getElementById("q3a2");

q1a1.addEventListener("click",introvert);
q1a2.addEventListener("click",extrovert);

q2a1.addEventListener("click",extrovert);
q2a2.addEventListener("click",introvert);

q3a1.addEventListener("click",introvert);
q3a2.addEventListener("click",extrovert);

q4a1.addEventListener("click",introvert);
q4a2.addEventListener("click",extrovert);

q5a1.addEventListener("click",extrovert);
q5a2.addEventListener("click",introvert);

function introvert(){
  introScore=introScore+1;
  questionCount=questionCount+1;
  console.log("questionCount= "+questionCount+"introScore"+introScore);
  

if (questionCount==5){
  console.log("The quiz is done!")
  updateResult();
  }
}
function extrovert(){
  extroScore=extroScore+1;
  questionCount=questionCount+1;
  console.log("questionCount= "+questionCount+"extroScore"+extroScore);

if (questionCount==5){
  console.log("The quiz is done!")
  updateResult();
  }
}

if (introScore>=3){
  console.log("You're an Introvert!");
  }else if(extroScore>=3){
  console.log("You're an Extrovert");
   }


function updateResult(){if (introScore>=3){
  result.innerHTML="You're an Introvert!"
  console.log("You're an Introvert!");
  }else if(extroScore>=3){
  result.innerHTML="You're an Extrovert!"
  console.log("You're an Extrovert"); }
   }

var restart = document.getElementById("restart");
restart.addEventListener("click", restartQuiz);
                                  
function restartQuiz() {
  result.innerHTML = "Your result is..."; 
  questionCount = 0;
  introScore = 0; 
  extroScore = 0;
  enableQuestions();
}


q1a1.addEventListener("click", disableQ1);
q1a2.addEventListener("click", disableQ1);

q2a1.addEventListener("click", disableQ2);
q2a2.addEventListener("click", disableQ2);

q3a1.addEventListener("click", disableQ3);
q3a2.addEventListener("click", disableQ3);

q4a1.addEventListener("click", disableQ4);
q4a2.addEventListener("click", disableQ4);

q5a1.addEventListener("click", disableQ5);
q5a2.addEventListener("click", disableQ5);

function disableQ1() {
  q1a1.disabled = true; 
  q1a2.disabled = true; 
}

function disableQ2() {
  q2a1.disabled = true; 
  q2a2.disabled = true; 
}

function disableQ3() {
  q3a1.disabled = true; 
  q3a2.disabled = true; 
}

function disableQ4() {
  q4a1.disabled = true; 
  q4a2.disabled = true; 
}

function disableQ5() {
  q5a1.disabled = true; 
  q5a2.disabled = true; 
}

function enableQuestions(){
  q1a1.disabled = false; 
  q1a2.disabled = false; 
  q2a1.disabled = false; 
  q2a2.disabled = false;
  q3a1.disabled = false; 
  q3a2.disabled = false;
  q4a1.disabled = false; 
  q4a2.disabled = false;
  q5a1.disabled = false; 
  q5a2.disabled = false;
}


var retry=document.getElementById("restart");
retry.addEventListener(click,restart);
function introvert(){
  introScore=introScore+1;
  questionCount=questionCount+1;
  console.log("questionCount= "+questionCount+"introScore"+introScore);
  

if (questionCount==5){
  console.log("The quiz is done!")
  updateResult();
  }
}