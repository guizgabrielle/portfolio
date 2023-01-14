const btn = document.getElementById('button');

document.getElementById('contact-form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'Sending...';

        const serviceID = 'contact-service';
        const templateID = 'contact-template';
        
        
        emailjs.sendForm(serviceID, templateID, this)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                document.getElementById("contact-form").reset();
                alert("Form Submitted Successfully");
            }, function (error) {
                console.log('FAILED...', error);
                alert("Form Submission Failed! Try Again");
            });
        event.preventDefault();

        

    });



