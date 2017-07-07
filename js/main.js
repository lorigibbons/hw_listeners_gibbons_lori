var newParagraph = document.getElementById( 'h1Event');

newParagraph.addEventListener( 'click', function() {
    var newElement = document.createElement( 'paragraph' );
    newParagraph.innerHTML = "<p>This is click number 1</p>";
    document.getElementsByClassName( 'container' ) [0].appendChild( newElement);
});
