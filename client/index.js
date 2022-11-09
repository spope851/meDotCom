const sendEmailBtn = document.getElementById('send-email')

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_q5mctvg', 'template_ebpu5h9', this)
            .then(function() {
                console.log('SUCCESS!');
                sendEmailBtn.value = 'sent!'
            }, function(error) {
                console.log('FAILED...', error);
                sendEmailBtn.innerHTML = 'failed!'
            });
    });
}

const projectsLinkBtn = document.getElementById('projects-link-btn')

projectsLinkBtn.addEventListener('click', () => window.location.pathname = '/projects')
projectsLinkBtn.addEventListener('mouseover', () => projectsLinkBtn.classList.add('tweet-hover'))
projectsLinkBtn.addEventListener('mouseleave', () => projectsLinkBtn.classList.remove('tweet-hover'))
