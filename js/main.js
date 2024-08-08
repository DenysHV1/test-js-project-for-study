const body = document.querySelector('.body');
body.style.backgroundImage = 'linear-gradient(90deg,#9e50d3,#1a1fff,#1e98dd)'


// 1 variant 

const title = document.querySelector('.text-content');

const maxLength = 12;
const maxLengthDots = maxLength + 3;

title.addEventListener('click', myClickOnTheText);

function myClickOnTheText(event){
	const insideTitle = event.currentTarget;
	const titleWithSlice = insideTitle.textContent.slice(0, maxLength);

	if (insideTitle.textContent.length > maxLengthDots){
		const anotherText = insideTitle.textContent.slice(maxLength);
		insideTitle.setAttribute('data-text', anotherText);

		insideTitle.textContent = titleWithSlice + '...'
	}else{
		const anotherText2 = insideTitle.dataset.text
		if(anotherText2){
			insideTitle.textContent = titleWithSlice + anotherText2
		}
	}
}



// 3 variant 

body.insertAdjacentHTML('beforeend', '<p class = "trainingP">I have this text for my training, because i need test this</p>');

const specialTestP = document.querySelector('.trainingP');

const numberWithoutDots = 11;
const numbersWithDots = numberWithoutDots + 3;

specialTestP.addEventListener('click', testClick);

function testClick (event){
	const insideTestP = event.currentTarget;
	const firstHalfText = insideTestP.textContent.slice(0, numberWithoutDots);

	if (insideTestP.textContent.length > numbersWithDots){
		const secondHalfText = insideTestP.textContent.slice(numberWithoutDots);
		insideTestP.setAttribute('data-text', secondHalfText);
		insideTestP.textContent = firstHalfText + '...'
	}else{
		const takeSecondHalfText = insideTestP.dataset.text
		if(takeSecondHalfText){
			insideTestP.textContent = firstHalfText + takeSecondHalfText
		}
	}
}



// 2 variant 
const titleEasy = document.querySelector('.text-content1');

titleEasy.addEventListener('click', () => {

	if (titleEasy.textContent.length < 17){
		titleEasy.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
	}else {
		titleEasy.textContent = 'Lorem ipsum ...'
	}
	
})