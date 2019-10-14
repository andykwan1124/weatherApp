const myInitCode = () => {
    if ("geolocation" in navigator) {
        
        console.log('API available');
        navigator.geolocation.getCurrentPosition(position => {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
        findTime();
        onClick(position.coords.latitude,position.coords.longitude);
        })
        
        
    } else {
        console.log('API not available');
    }
    
    
}

const onClick = (lat, long) => { 
    let loader =`<div class="load-box">
                    <span class="loader"><span class="loader-inner"></span></span>
                    <div id="loadingMsg">LOADING</div>
                </div>`;
            
    document.getElementById('hoverWrap').innerHTML = loader;

    $.getJSON(
        `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/c486de8f81ddf8d7a67e10d28ec20a9f/${lat},${long}?units=si`,
        function(data) {
            
            var currentTemp = document.querySelector('[currentTemp]');
            currentTemp.textContent = data.currently.apparentTemperature + `°C`;
            console.log(data);
        
            var currentIcon = data.currently.icon.replace(/-/g, "_").toUpperCase();
            console.log(currentIcon);
            var skycons = new Skycons({color: "black"},
                                        {"resizeClear": true})
            skycons.add(document.getElementById("icon1"), Skycons[currentIcon]);
            skycons.play();

            var firstData = document.querySelector('[firstData]');
            firstData.textContent = "LOL";

            var secondData = document.querySelector('[secondData]');
            secondData.textContent = "smh";

            for (var i = 1; i <= 3; i++) {
                var currentIcon = data.hourly.data[i].icon.replace(/-/g, "_").toUpperCase();
                console.log(currentIcon);
                var skycons = new Skycons({color: "black"},
                                            {"resizeClear": true})
                skycons.add(document.getElementById(`${i}icon`), Skycons[currentIcon]);
                skycons.play();
            }

            for (var i = 1; i <= 3; i++) {
                var futureTemp = document.getElementById(`${i}Data`);
                futureTemp.textContent = data.hourly.data[i].temperature + `°C`;
            }

            let doneLoading = `<div id="hoverBox">Hover for more info!</div>`
            document.getElementById('hoverWrap').innerHTML = doneLoading;
        })

}

const findTime = () => {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    var currTime = document.querySelector('[currTime]');
    currTime.textContent = `${hours}:${minutes}:${seconds}`;

    for (var i = 1; i <= 3; i++) {
        var futureTime = document.getElementById(`${i}Time`);
        var theTime = hours+i;

        if (theTime >= 24) {
            theTime = theTime - 24;
        }

        if (theTime < 10) {
            theTime = "0" + theTime;
        }

        futureTime.textContent = `${theTime}:00`
    }
}

myInitCode();













