var consoleAction = document.getElementById( 'reset' );

consoleAction.addEventListener('click', function(thisFunction){
    thisFunction.preventDefault();
    var fName = document.getElementById( 'firstName' );
    console.log(fName);
})
