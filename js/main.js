var consoleAction = document.getElementById( 'contactForm' );

consoleAction.addEventListener('click', function(thisFunction){
    thisFunction.preventDefault();
    var fName = document.getElementById( 'firstName' );
    console.log(fName);
})
