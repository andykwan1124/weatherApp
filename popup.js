// function check() {
    
// }

// function main() {
//     check();
// }

if ("geolocation" in navigator) {
    console.log('API available');
    navigator.geolocation.getCurrentPosition(position => {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
    });
} else {
    console.log('API not available');
}  
