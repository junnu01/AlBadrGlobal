document.querySelector('form').addEventListener('submit', function(event) {
    alert('Inquiry submitted! We will get back to you soon.');
    event.preventDefault(); // Prevent form from refreshing the page
});

function redirectToWhatsApp(event) {
    event.preventDefault(); // Prevent form submission behavior if needed

    // Identify the clicked button and retrieve its parent card element
    const button = event.target;
    const card = button.closest('.card');

    if (card) {
        // Extract package details from the card
        const title = card.querySelector('h2, h3').innerText;
        const price = card.querySelector('p:nth-of-type(4)').innerText;
        const duration = card.querySelector('p:nth-of-type(5)').innerText;
        const mobileNumber = card.querySelector('p:nth-of-type(6)').innerText.match(/\d+/)[0]; // Extract only the number

        // Create a pre-filled message
        const message = `Hello, I am interested in the ${title}. 
Price: ${price}
Duration: ${duration}
Please provide more details.`;

        // Open WhatsApp chat with the message
        const whatsappUrl = `https://wa.me/${918857919998}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    } else {
        console.error("Card element not found!");
    }
}


