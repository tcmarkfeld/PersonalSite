(function() {
    emailjs.init("user_K5TJyjFduhEPXtErGDy6D");
})();

function sendMail() {
    let name = document.getElementById("fname").value;
    let userEmail = document.getElementById("email").value;
    let userMessage = document.getElementById("subject").value;

    var contactParams = {
        from_name: name,
        from_email: userEmail,
        message: userMessage
    };

    emailjs.send('service_ltfp9jm', 'template_jnshlrw', contactParams).then(function(response){
        if (response.status == 200){
            alert("Your message has successfully been sent!");
        }
        else {
            alert("An error has occurred. Please try again.");
        }
    })
}