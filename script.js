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
    const launchDateDisplay = document.getElementById('launch-date-display');
    const currentYear = document.getElementById('current-year');
    const daysDisplay = document.getElementById('days');
    const hoursDisplay = document.getElementById('hours');
    const minutesDisplay = document.getElementById('minutes');
    const secondsDisplay = document.getElementById('seconds');

    launchDateDisplay.textContent = formatLaunchDate();

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear().toString();
    }

    const updateCountdown = () => {
        // Get today's date and time
        const now = new Date().getTime();

        // Find the distance between now and the launch date
        const distance = launchDate - now;

        if (distance < 0) {
            daysDisplay.textContent = '00';
            hoursDisplay.textContent = '00';
            minutesDisplay.textContent = '00';
            secondsDisplay.textContent = '00';
            return false;
        }

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the results
        daysDisplay.textContent = days.toString().padStart(2, '0');
        hoursDisplay.textContent = hours.toString().padStart(2, '0');
        minutesDisplay.textContent = minutes.toString().padStart(2, '0');
        secondsDisplay.textContent = seconds.toString().padStart(2, '0');

        return true;
    };

    updateCountdown();

    // Update the countdown every second
    const countdown = setInterval(function () {
        // If the countdown is finished, display a message
        if (!updateCountdown()) {
            clearInterval(countdown);
        }
    }, 1000);
});
