
let num = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

const mainLogic = function() {
    const guess = Number(document.querySelector('.inputnum').value);

    
    if(!guess){
        document.querySelector('.instruction').textContent = "❌⛔ No Input...";
    }
    else if(guess === num){
        document.querySelector('.instruction').textContent = "🎉 Correct Number!!!";
        
        document.querySelector('.ansnum').textContent = num;

        document.querySelector('.container').style.backgroundColor = '#60b347';

        document.querySelector('.ansnum').style.width = '15vw';

        if(highscore < score){
            highscore = score;
        }
    
        document.querySelector('.highscorenum').textContent = highscore;
    }
    else if(num !== guess){
        if(score > 1){

            document.querySelector('.instruction').textContent = num < guess ? "📈 Too High..." : "📉 Too Low...";
            score--;
            document.querySelector('.scorenum').textContent = score;
        }
        else{
            document.querySelector('.instruction').textContent = "💥 You Lose";
            document.querySelector('.scorenum').textContent = 0;
        }
    }

};

document.querySelector('.chkbtn').addEventListener('click', mainLogic);

document.addEventListener('keydown', function(e){
    console.log(e);
    if(e.key === 'Enter'){
        mainLogic();
    }
})

document.querySelector('.againbtn').addEventListener('click', function() {
    document.querySelector('.instruction').textContent = "👍 Start Guessing...";

    document.querySelector('.ansnum').textContent = '?';

    document.querySelector('.container').style.backgroundColor = '#222';

    document.querySelector('.ansnum').style.width = '10vw';

    num = Math.trunc(Math.random() * 20) + 1;

    score = 20;

    document.querySelector('.scorenum').textContent = 20;

    document.querySelector('.inputnum').value = '';
})
