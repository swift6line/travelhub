// Handle the booking form submission
function handleBooking(event, busCompany) {
    event.preventDefault(); // Prevent form from submitting normally

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const seat = document.getElementById('seat').value;

    // Add borders to input fields when the form is submitted
    const inputs = document.querySelectorAll('input, select'); // Select all input and select elements

    inputs.forEach(input => {
        input.style.border = '2px solid #004085'; // Add a blue border to the fields
    });

    // Show an alert with the booking details
    alert(`Booking Details:
    Name: ${name}
    Email: ${email}
    Bus Company: ${busCompany}
    Travel Date: ${date}
    Seat: ${seat}`);

    // Clear the form after submission (Optional if you want to reset fields)
    document.getElementById('moderncoast-form').reset();

    // Optionally, reset the border after the form reset (if desired)
    setTimeout(() => {
        inputs.forEach(input => {
            input.style.border = ''; // Remove border styling after reset
        });
    }, 2000); // Adjust the delay as needed
}
