// function check() {
    
// }

// function main() {
//     check();
// }

// if( document.readyState !== 'loading' ) {
//     console.log( 'document is already ready, just execute code here' );
//     myInitCode();
// } else {
//     document.addEventListener('DOMContentLoaded', function () {
//         console.log( 'document was not ready, place code here' );
//         myInitCode();
//     });
// }


const myInitCode = () => {
    if ("geolocation" in navigator) {
        console.log('API available');
        navigator.geolocation.getCurrentPosition(position => {
        console.log(position.coords.latitude);
        var lat = position.coords.latitude;
        console.log(position.coords.longitude);
        var long = position.coords.longitude;
        onClick(lat,long);
        })
    } else {
        console.log('API not available');
    }
    
    
}

const onClick = (lat, long) => { 
    // var myLat = document.createElement("div");
    // myLat.textContent = lat;
    // document.body.appendChild(myLat);
    // var myLong = document.createElement("div");
    // myLong.textContent = long;
    // document.body.appendChild(myLong);
    $.getJSON(
        `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/c486de8f81ddf8d7a67e10d28ec20a9f/${lat},${long}?units=si`,
        function(data) {
            var currentTemp = document.createElement("div");
            currentTemp.textContent = data.currently.apparentTemperature + `°C`;
            document.getElementById("tempData").appendChild(currentTemp);
            console.log(data);
        
            var currentIcon = data.currently.icon.replace(/-/g, "_").toUpperCase();
            console.log(currentIcon);
            var skycons = new Skycons({color: "black"},
                                        {"resizeClear": true})
            skycons.add(document.getElementById("icon1"), Skycons[currentIcon]);
            skycons.play();
        })
}

myInitCode();













