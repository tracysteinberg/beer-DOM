var app = function(){

  var url = "https://api.punkapi.com/v2/beers";
  makeRequest(url, requestComplete);
  var image_url = "https://images.punkapi.com/v2/keg.png";
  makeRequest(image_url, requestComplete);

}


var makeRequest = function(url, callback) {
// create a new XMLHttpRequest object
  var request = new XMLHttpRequest();
// set the type of request we want to make (HINT:  GET)
  request.open('GET', url);
// tell the request which function to run when it has completed
  request.addEventListener('load', callback);
// send the request
  request.send();

}

var makeRequestImg = function(image_url, callback) {
// create a new XMLHttpRequest object
  var request = new XMLHttpRequest();
// set the type of request we want to make (HINT:  GET)
  request.open('GET', image_url);
// tell the request which function to run when it has completed
  request.addEventListener('load', callback);
// send the request
  request.send();

}


var requestComplete = function() {
   if (this.status !== 200) return;

   var jsonString = this.responseText;
   var beers = JSON.parse(jsonString);
   // console.log(countries);
   populateList(beers);

  
    var select = document.querySelector('select');
    select.addEventListener('change', function() {
    var pTag = document.querySelector('#beer-details');
    pTag.innerText = beers[this.value].name;
    pTag.innerText += beers[this.value].image;
  })


}

var populateList = function(beers) {
    var select = document.querySelector('#beers-list');


    for (var i = 0; i < beers.length; i++) {
   

    var option = document.createElement('option');
    option.innerText = beers[i].name;
    option.value =i;
    select.appendChild(option);


    }





};



window.addEventListener('load', app);