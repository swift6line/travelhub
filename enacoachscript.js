// Handle the booking form submission
function handleBooking(event, busCompany) {
    event.preventDefault(); // Prevent form from submitting normally

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const seat = document.getElementById('seat').value;
    
    // Display an alert with the booking information
    alert(`Booking Details:
    Name: ${name}
    Email: ${email}
    Bus Company: ${busCompany}
    Travel Date: ${date}
    Seat: ${seat}`);

    // Clear the form after submission
    document.getElementById('enacoach-form').reset();
}
