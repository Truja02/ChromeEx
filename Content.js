
let seconds = 0;
let minutes = 0;
let hours = 0;


let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;



let interval = null;


let status = "stopped";


function stopWatch(){

    seconds++;

    
    if(seconds / 60 === 1){
        seconds = 0;
        minutes++;

        if(minutes / 60 === 1){
            minutes = 0;
            hours++;
        }

    }

    
    if(seconds < 10){
        displaySeconds = "0" + seconds.toString();
    }
    else{
        displaySeconds = seconds;
    }

    if(minutes < 10){
        displayMinutes = "0" + minutes.toString();
    }
    else{
        displayMinutes = minutes;
    }

    if(hours < 10){
        displayHours = "0" + hours.toString();
    }
    else{
        displayHours = hours;
    }
	
	//from 0 to 40, blue background, 
	//from 40:01 to 41:00 green, 
	//41:01 to 45 yellow, 
	//and 45 onwards red.
	
	if(displayHours > 0 && displayMinutes >= 0 && displaySeconds > 0){
		console.log("RED");
		document.getElementById("display").style.background = 'red';
	}else if(displayMinutes >= 45 && displaySeconds > 0){
		console.log("RED");
		document.getElementById("display").style.background = 'red';
	}else if(displayMinutes >= 41 && displayMinutes <= 45 && displaySeconds > 0){
		console.log("YELLOW");
        window.alert(message);
		document.getElementById("display").style.background = 'yellow';	
	}else if(displayMinutes == 40 && displaySeconds > 0){
		console.log("GREEN");
		document.getElementById("display").style.background = 'green';	
	}else if(displaySeconds > 0){
		document.getElementById("display").style.background = 'blue';
	}

	
    
    document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;

}



function startStop(){

    if(status === "stopped"){

       
        interval = window.setInterval(stopWatch, 1000);
        document.getElementById("startStop").innerHTML = "Stop";
        status = "started";

    }
    else{

        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";
        status= "stopped";

    }

}

//reset
function reset(){

    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("display").innerHTML = "00:00:00";
    document.getElementById("startStop").innerHTML = "Start";
}




