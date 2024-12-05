// JavaScript to enhance functionality

// Handle Booking Form Submission
function handleBooking(event, companyName) {
    event.preventDefault(); // Prevent page reload
    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    const date = form.date.value;
    const seat = form.seat.value;

    // Display a confirmation message
    alert(`Booking Confirmed!\n\nName: ${name}\nEmail: ${email}\nDate: ${date}\nSeat: ${seat}\nCompany: ${companyName}`);
}

// Dynamic Seat Generation
document.addEventListener("DOMContentLoaded", () => {
    const seatSelect = document.getElementById("seat");

    // Add 49 seat options dynamically
    for (let i = 1; i <= 49; i++) {
        const seatOption = document.createElement("option");
        seatOption.value = `Seat ${i}`;
        seatOption.textContent = `Seat ${i}`;
        seatSelect.appendChild(seatOption);
    }
});

// Background Image Lazy Loading (Optional)
document.addEventListener("DOMContentLoaded", () => {
    const bgImages = document.querySelectorAll("[data-bg]");

    bgImages.forEach((element) => {
        const bgUrl = element.getAttribute("data-bg");
        element.style.backgroundImage = `url(${bgUrl})`;
        element.style.backgroundSize = "cover";
        element.style.backgroundPosition = "center";
    });
});
