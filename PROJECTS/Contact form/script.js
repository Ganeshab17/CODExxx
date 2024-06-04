
function validateForm() {

    let isValid = true;
    function Greeting(){
        document.getElementById('message-sent').style.display="block";
    }
    // Validate first name
    const firstName = document.getElementById('firstName').value;
    if (!firstName) {
        document.getElementById('firstNameError').style.display = 'block';
        document.getElementById('firstName').style="border-color:red;"
        isValid = false;
    } else {
        document.getElementById('firstNameError').style.display = 'none';
    }

    // Validate last name
    const lastName = document.getElementById('lastName').value;
    if (!lastName) {
        document.getElementById('lastNameError').style.display = 'block';
         document.getElementById('lastName').style="border-color:red;"
        isValid = false;
    } else {
        document.getElementById('lastNameError').style.display = 'none';
    }

    // Validate email
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
        document.getElementById('emailError').style.display = 'block';
         document.getElementById('email').style="border-color:red;"
        isValid = false;
    } else {
        document.getElementById('emailError').style.display = 'none';
    }

    // Validate query type
    const queryType = document.querySelector('input[name="queryType"]:checked');
    if (!queryType) {
        document.getElementById('queryTypeError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('queryTypeError').style.display = 'none';
    }

    // Validate message
    const message = document.getElementById('message').value;
    if (!message) {
        document.getElementById('messageError').style.display = 'block';
         document.getElementById('message').style="border-color:red;"
        isValid = false;
    } else {
        document.getElementById('messageError').style.display = 'none';
    }

    // Validate consent
    const consent = document.getElementById('consent').checked;
    if (!consent) {
        document.getElementById('consentError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('consentError').style.display = 'none';
    }
   
    return isValid;
   
}
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('message-sent').style.display='block';
    // Simulate form submission
    setTimeout(function() {
       document.getElementById('message-sent').style.display="none";
       document.getElementById('contactForm').reset();
    },2000);

});




 
