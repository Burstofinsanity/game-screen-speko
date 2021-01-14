var count = 0;
var dad = window.opener;
var counter = null;
var startTimeout = null;
var endTimeout = null;
var status = 0;
var getReady = new Audio('assets/media/getReady.mp4');
var goA = new Audio('assets/media/go.mp4');
var letsPlay = new Audio('assets/media/letsPlay.mp4');
var speco = new Audio('assets/media/speco.mp4');
var failed = new Audio('assets/media/failed.mp4');
var faster = new Audio('assets/media/faster.mp4');
var music = new Audio("assets/media/music.aac");
music.volume = 0.25;
var sound_interval = "";
var sound_timeout = "";
var faster_timeout = "";
music.loop = true;
music.play();

sound_interval = setInterval(function(){letsPlay.play();},30000);
function start(){
    clearInterval(sound_interval);
    document.getElementById('count_letPlay').classList.remove('won');
    document.getElementById('count_letPlay').classList.remove('fail');
    document.getElementById('count_letPlay').classList.add('ready');
    sound_timeout= setTimeout(function(){getReady.play();},300);
    sound_timeout= setTimeout(function(){goA.play();},1300);
    startTimeout = setTimeout(function(){
        document.getElementById('count_letPlay').classList.add('playing');
        document.getElementById('count_letPlay').classList.remove('ready');
        counterDown();
    },2300);
}

function counterDown(){
    count = 1;
    document.getElementById('count_'+count).classList.add('show');
    counter = setInterval(function(){
        if(count > 0)
        {
            document.getElementById('count_'+count).classList.remove('show');
        }
        count ++;
        if(count > 10){
            clearInterval(counter);
            end();
        }
        else
            document.getElementById('count_'+count).classList.add('show');
        
    },1000);
}

function end(){
    clearInterval(counter);
    clearTimeout(startTimeout);
    document.getElementById('count_letPlay').classList.remove('ready');
    document.getElementById('count_letPlay').classList.remove('playing');
    if(status == true){
        document.getElementById('count_letPlay').classList.add('won');
        speco.play();
    }
    else{
        document.getElementById('count_letPlay').classList.add('fail');
        failed.play();
    }
        for(var x = 1; x < 11; x ++){
    
            document.getElementById('count_'+x).classList.remove('show');
        }
    endTimeout = setTimeout(function(){
        document.getElementById('count_letPlay').classList.remove('won');
        document.getElementById('count_letPlay').classList.remove('fail');
    },5000);
    sound_interval = setInterval(function(){letsPlay.play();},30000);
    status = 0;
    dad.end();
}

function won(){
    status = 1;
}

function fail(){
    status = 0;
}

function func_faster(){
    document.getElementById('count_letPlay').classList.remove('faster');
    faster.pause();
    faster.currentTime = 0;
    document.getElementById('count_letPlay').classList.add('faster');
    faster.play();
    faster_timeout = setTimeout(function(){
        document.getElementById('count_letPlay').classList.remove('faster');
    },600)
}

function reset(){
    clearInterval(counter);
    clearTimeout(startTimeout);
    clearTimeout(faster_timeout);
    clearTimeout(endTimeout);
    document.getElementById('count_letPlay').classList.add('show');
    document.getElementById('count_letPlay').classList.remove('won');
    document.getElementById('count_letPlay').classList.remove('fail');
    document.getElementById('count_letPlay').classList.remove('faster');
    for(var x = 1; x < 11; x ++){
    
        document.getElementById('count_'+x).classList.remove('show');
    }
}