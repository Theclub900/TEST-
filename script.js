document.addEventListener('DOMContentLoaded', function() {
	const contactForm = document.getElementById('contact-form');
	
	if (contactForm) {
		contactForm.addEventListener('submit', function(event) {
			event.preventDefault();
			
			const name = document.getElementById('name').value;
			const email = document.getElementById('email').value;
			const message = document.getElementById('message').value;
			
			if (!name || !email || !message) {
				alert('Please fill out all fields.');
				return;
			}
			
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			if (!emailRegex.test(email)) {
				alert('Please enter a valid email address.');
				return;
			}
			
			console.log('Form submitted!');
			console.log('Name:', name);
			console.log('Email:', email);
			console.log('Message:', message);
			
			alert('Message sent! Thank you for your interest.');
			
			contactForm.reset();
		});
	} else {
		console.log("Contact form not found!");
	}
});