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
        document.getElementById('btn1').addEventListener('click', onClick, false);
        })
    } else {
        console.log('API not available');
    }
    
    
}

function onClick() { 
    var div1 = document.createElement("div");
    div1.textContent = lat;
    document.body.appendChild(div1);
    var div2 = document.createElement("div");
    div2.textContent = long;
    document.body.appendChild(div2);
    $.getJSON(
        "https://api.darksky.net/forecast/c486de8f81ddf8d7a67e10d28ec20a9f/49.1535231,-123.13546529999999",
        function(data) {
            console.log(data);
        })
}











