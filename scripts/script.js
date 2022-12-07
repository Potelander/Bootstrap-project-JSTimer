let button = document.querySelector("button");

function TimerFunction() {
    console.log("Timer has began!");
    let endOfTimer = Date.parse("Dec 7, 2022 15:30:00");//Hard coded countdown end point;
    let nowTime = new Date();//Getting a copy of the entire date and time from user
    let timeDifference = endOfTimer - nowTime;
    console.log(timeDifference);

    let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    let hours = Math.floor(timeDifference / (1000 * 60 * 60));
    let minutes = Math.floor(timeDifference / (1000 * 60));
    let seconds = Math.floor(timeDifference / 1000);

    console.log(seconds + "\n" + minutes + "\n" + hours + "\n" + days);

    console.log(days + 'd', hours + 'h', minutes + 'min', seconds + 'sec');

    let dayTime = days;
    let hourTime = hours - days * 24;
    let minuteTime = minutes - hours * 60;
    let secondTime = seconds - minutes * 60;

    console.log(dayTime, hourTime, minuteTime, secondTime);

    document.querySelector(".timer").innerHTML =
        "<div>" + dayTime + "</div>" +
        "<div>" + hourTime + "</div>" +
        "<div>" + minuteTime + "</div>" +
        "<div>" + secondTime + "</div>";

}


setInterval(
    "TimerFunction()", 1000);//code to be triggerd after delay time is up


button.addEventListener("click", () => {
    TimerFunction();
})