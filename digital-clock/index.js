const  hourElement = document.getElementById("hour");
const  minuteElement = document.getElementById("minutes");
const  secondElement = document.getElementById("seconds");
const  ampmElement = document.getElementById("ampm");


function updateClock(){
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    let second = new Date().getSeconds();
    let ampm = "AM";

    if(hour > 12){
        hour = hour - 12;
        ampm = "PM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;
    

    hourElement.innerText = hour;
    minuteElement.innerText = minute;
    secondElement.innerText = second;
    ampmElement.innerText = ampm;

    //call a function every seconds
    setTimeout(()=>{
        updateClock();
    }, 1000);

}

updateClock();