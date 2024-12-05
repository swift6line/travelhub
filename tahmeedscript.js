// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Dynamic Seat Selection for Booking Form (Optional Example)
const seatSelect = document.getElementById('seat');

// Dynamically adding seat options
window.addEventListener('DOMContentLoaded', () => {
    for (let i = 1; i <= 49; i++) {
        const seatLetter = (i % 2 === 0) ? 'B' : 'A';  // Alternating seat letters A, B
        const option = document.createElement('option');
        option.value = `${i}${seatLetter}`;
        option.textContent = `${i}${seatLetter}`;
        seatSelect.appendChild(option);
    }
});

// Handle Form Submission (Example of Basic Validation)
function handleBooking(event, busCompany) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const seat = document.getElementById('seat').value;

    if (!name || !email || !date || !seat) {
        alert("Please fill all the fields correctly!");
    } else {
        alert(`Booking Successful!\n\nName: ${name}\nBus Company: ${busCompany}\nDate: ${date}\nSeat: ${seat}`);
    }
}
