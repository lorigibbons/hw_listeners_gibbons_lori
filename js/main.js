var newParagraph = document.getElementsByTagName('h1')[0]

//Now make something happen when I click the h1
// newParagraph.addEventListener('click', myFunctionName () {
//     var newElement = document.createElement( 'paragraph' );
//     newParagraph.innerHTML = "<p>This is click number 1</p>";
//     document.getElementsByClassName( 'container' ) [0].appendChild( newElement);
// });
newParagraph.addEventListener('click', myFunctionName);

function myFunctionName() {
    var paragraph = document.createElement('p');
    paragraph.innerHTML = 'This is click number: ';
    newParagraph.appendChild(paragraph);
}
