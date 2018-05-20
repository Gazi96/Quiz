import './assets/scss/app.scss';

fetch('https://gist.githubusercontent.com/vergilius/6d869a7448e405cb52d782120b77b82c/raw/e75dc7c19b918a9f0f5684595899dba2e5ad4f43/history-flashcards.json')
    .then(resp => resp.json())
    .then(resp => {
        createElements(resp)
    });

function createElements(card){
	const cardContainer = document.getElementsByClassName("card__text")[0];
	const question = document.createElement("h2");
	question.classList = "card__question sg-header-primary sg-header-primary--small";
	
	const answerFirst = document.createElement("p");
	answerFirst.classList = "card__answer sg-header-secondary";
	const answerSecond = document.createElement("p");
	answerSecond.classList = "card__answer sg-header-secondary";
		
	appendElements(card, cardContainer, question, answerFirst, answerSecond);
}

function appendElements(card, cardContainer, question, answerFirst, answerSecond){
	cardContainer.textContent = "";
	cardContainer.appendChild(question);
	cardContainer.appendChild(answerFirst);
	cardContainer.appendChild(answerSecond);
	
	inputData(card, question, answerFirst, answerSecond);
}

function inputData(card, question, answerFirst, answerSecond){
	const cardFirst = card[0];
	question.textContent = cardFirst.question;
	answerFirst.textContent = cardFirst.answers[0].answer;
	answerSecond.textContent = cardFirst.answers[1].answer;
	
	eventListener(card, cardFirst);
}

function eventListener(card, cardFirst){
	const allAnswers = document.getElementsByClassName("card__answer");
	
	for(let i = 0; i < allAnswers.length; i++){
    	allAnswers[i].addEventListener('click', function(){
			checkAnswer(i, cardFirst, card, allAnswers);
		}, false)
	}
}

function checkAnswer(i, cardFirst, card){	
	if(cardFirst.answers[i].correct == true){
		card.splice(0,1);
	}
	else{
		card.push(card.shift());
	}

	createElements(card);
}
