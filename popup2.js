const myInitCode2 = () => {
    var userData = JSON.parse(localStorage.getItem('userData'));

    for (var i = 0; i <= 6; i++) {
        var futureTemp = document.getElementById(`${i}TempData`);
        futureTemp.textContent = userData.hourly.data[i].temperature + `°C`;
    }

    for (var i = 0; i <= 6; i++) {
        var currentIcon = userData.daily.data[i].icon.replace(/-/g, "_").toUpperCase();
        
        var skycons = new Skycons({color: "black"},
                                    {"resizeClear": true})
        skycons.add(document.getElementById(`day${i}icon`), Skycons[currentIcon]);
        skycons.play();
    }

    findTime();
}

const findTime = () => {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var weekday = currentTime.getDay();

    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    for (var i = 0; i <= 6; i++) {
        var futureDay = parseDay(weekday + i);
        var theDay = document.getElementById(`${i}dayData`);
        theDay.textContent = futureDay;
    }

    var currTime = document.querySelector('[currTime]');
    currTime.textContent = `${hours}:${minutes}:${seconds}`;

}

const parseDay = (day) => {
    if (day >= 7) {
        day = day - 7;
    }

    var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    return weekDays[day];
}
myInitCode2();




