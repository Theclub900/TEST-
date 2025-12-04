// Contact Form Handler
// Created by Theclub900 on 12/4/25

document.addEventListener('DOMContentLoaded', function() {
	const contactForm = document.getElementById('contact-form');
	
	if (contactForm) {
		contactForm.addEventListener('submit', function(event) {
			event.preventDefault(); // Prevent default form submission
			
			// Basic form validation
			const name = document.getElementById('name').value;
			const email = document.getElementById('email').value;
			const message = document.getElementById('message').value;
			
			if (!name || !email || !message) {
				alert('Please fill out all fields.');
				return;
			}
			
			// Email validation
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			if (!emailRegex.test(email)) {
				alert('Please enter a valid email address.');
				return;
			}
			
			// Simulate sending the form data (replace with actual API call)
			console.log('Form submitted!');
			console.log('Name:', name);
			console.log('Email:', email);
			console.log('Message:', message);
			
			alert('Message sent! Thank you for your interest.');
			
			// Clear the form
			contactForm.reset();
		});
	} else {
		console.log("Contact form not found!");
	}
});