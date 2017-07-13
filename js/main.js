//First item
//This changes the h1 color from  black to orange when moused over, and goes back to black when the mouse leaves the h1.
var pageHeading = document.getElementById( 'heading' );
pageHeading.addEventListener('mouseover', function(){
	pageHeading.className =  'orange';
});
pageHeading.addEventListener('mouseleave', function(){
	pageHeading.className =  '';
});

//Second item-
//This adds text under the pictures when the first picture is clicked.
var addText = document.images[0];
addText.addEventListener('click', function(){
    var newElement = document.createElement('h3');
    newElement.innerHTML= '<p>Look at me!  I am the new stuff, new stuff.</p>';
    document.getElementsByClassName( 'clearfix')[0].appendChild( newElement );
});

//Third item- Double click on second picture to delete text added in second item
var removeText = document.images[1];
removeText.addEventListener('dblclick', function(){
    var newElement = document.getElementsByTagName('p');
    var removeListSize = newElement.length;
    for (var i = 0; i< removeListSize; i++){
        newElement[0].remove();
    }
});

//Other item-
//Adds random numbers to footer area when the mouse is moving. https://www.w3schools.com/js/js_htmldom_eventlistener.asp
document.getElementById("numGen").addEventListener("mousemove", theFunction);
function theFunction(){
    document.getElementById('numbers').innerHTML = Math.random();
}
