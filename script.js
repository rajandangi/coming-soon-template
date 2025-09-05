// Calculate a date 3 months from now
const calculateLaunchDate = () => {
    const today = new Date();
    // Add 3 months to the current date
    let launchDate = new Date(today);
    launchDate.setMonth(today.getMonth() + 3);
    return launchDate.getTime();
};

// Set the launch date to 3 months from now
const launchDate = calculateLaunchDate();

// Format and display the launch date
const formatLaunchDate = () => {
    const date = new Date(launchDate);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
};

// DOM ready function
document.addEventListener('DOMContentLoaded', () => {
    // Display the formatted launch date
    document.getElementById('launch-date-display').textContent = formatLaunchDate();

    // Update the countdown every second
    const countdown = setInterval(function () {
        // Get today's date and time
        const now = new Date().getTime();

        // Find the distance between now and the launch date
        const distance = launchDate - now;

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the results
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

        // If the countdown is finished, display a message
        if (distance < 0) {
            clearInterval(countdown);
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
        }
    }, 1000);
});
