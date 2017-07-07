var h1Event = document.getElementById( 'h1Event');

h1Event.addEventListener( 'click', function(){
    var newParagraph = document.createElement( 'paragraph');
    newParagraph.innerHTML = '<p>this is click number x</p>'
});
