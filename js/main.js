//First item- change h1 color
var pageHeading = document.getElementById( 'heading' );
pageHeading.addEventListener('mouseover', function(){
	pageHeading.className =  'orange';
});
pageHeading.addEventListener('mouseleave', function(){
	pageHeading.className =  '';
});

//Second item-Add text
var addText = document.images[0];
addText.addEventListener('click', function(){
    var newElement = document.createElement('h3');
    newElement.innerHTML= '<p>Look at me!  I am the new stuff, new stuff.</p>';
    document.getElementsByClassName( 'clearfix')[0].appendChild( newElement );
});

//Third item-
var removeText = document.images[1];
removeText.addEventListener('dblclick', function(){
    var newElement = document.getElementsByName('h3');
    newElement.innerHTML = "<p>Changed</>";
    document.getElementsByName( 'clearfix' )[0].appendChild(newElement);
});
