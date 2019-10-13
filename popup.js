// function check() {
    
// }

// function main() {
//     check();
// }

if( document.readyState !== 'loading' ) {
    console.log( 'document is already ready, just execute code here' );
    myInitCode();
} else {
    document.addEventListener('DOMContentLoaded', function () {
        console.log( 'document was not ready, place code here' );
        myInitCode();
    });
}

var lat;
var long;

function myInitCode() {
    if ("geolocation" in navigator) {
        console.log('API available');
        navigator.geolocation.getCurrentPosition(position => {
        console.log(position.coords.latitude);
        lat = position.coords.latitude;
        console.log(position.coords.longitude);
        long = position.coords.longitude;
        onClick();
        })
    } else {
        console.log('API not available');
    }
    
    
}

function onClick() { 
    // var myLat = document.createElement("div");
    // myLat.textContent = lat;
    // document.body.appendChild(myLat);
    // var myLong = document.createElement("div");
    // myLong.textContent = long;
    // document.body.appendChild(myLong);
    $.getJSON(
        "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/c486de8f81ddf8d7a67e10d28ec20a9f/49.1535231,-123.13546529999999?units=si",
        function(data) {
            var currentTemp = document.createElement("div");
            currentTemp.textContent = data.currently.apparentTemperature + `°C`;
            document.getElementById("tempData").appendChild(currentTemp);
            console.log(data);
        
            const currentIcon = data.currently.icon.replace(/-/g, "_").toUpperCase();
            console.log(currentIcon);
            const skycons = new Skycons({color: "black"},
                                        {"resizeClear": true})
            skycons.add(document.getElementById("icon1"), Skycons[currentIcon]);
            skycons.play();
        })
}













