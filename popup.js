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

function myInitCode() {
    var lat;
    var long;
    if ("geolocation" in navigator) {
        console.log('API available');
        navigator.geolocation.getCurrentPosition(position => {
        console.log(position.coords.latitude);
        lat = position.coords.latitude;
        console.log(position.coords.longitude);
        long = position.coords.longitude;
        document.getElementById('btn1').addEventListener('click', onClick, false);
        })

        function onClick() { 
            var div1 = document.createElement("div");
            div1.textContent = lat;
            document.body.appendChild(div1);
            var div2 = document.createElement("div");
            div2.textContent = long;
            document.body.appendChild(div2);
        }

    } else {
        console.log('API not available');
    }
    
    
}











