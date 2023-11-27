var timer = 60;
var score = 0;

function handleTimer(){
    setInterval(() => {
        if(timer>0){
            timer--;
            document.querySelector('#timerdiv').textContent = timer;
        }
        else{
            document.querySelector('#btm').innerHTML = `<h1>Game🎮Over❌. <br> Your Score Is 🎯. ${score}</h1>`
            btm.style.color="#3b0263"
        }
     }, 1000);
}

function getNewHit(){
    hitNum = Math.floor(Math.random()*10)
    document.querySelector('#hitdiv').textContent = hitNum;
}

function increaseScore(){
    score = score + 10;
    document.querySelector('#scorediv').textContent = score;
}

function makeBubbles(){
    document.querySelector("#btm").innerHTML = "";
    for(var i = 1; i<169; i++){
        var rn = Math.floor(Math.random()*10);
        document.querySelector("#btm").innerHTML += `<div class="bubble">${rn}</div`;
        
    }
}

function handleBubbleClick(){
    document.querySelector('#btm').addEventListener('click',function(dets){
        if(Number(dets.target.textContent) === hitNum){
            increaseScore();
            getNewHit();
            makeBubbles();
        }
    });
}

handleTimer();
getNewHit();
makeBubbles();
handleBubbleClick();