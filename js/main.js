//get the submit button
var formSubmit = document.getElementById( 'submit' );

//listen for submission of form while preventing submission of form
formSubmit.addEventListener('click', function(thisFunction){
    thisFunction.preventDefault();
    var fName = document.getElementById('firstName').value;
    console.log('The firstName is: ' + fName);
    var lName = document.getElementById('lastName').value;
    console.log('The lastName is: ' + lName);
    var formEmail = document.getElementById('email').value;
    console.log('The email is: ' + formEmail);
    var formMessage = document.getElementById('message').value;
    console.log('The message is: ' + formMessage);
})
