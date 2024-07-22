// Counter

const counters = document.querySelectorAll(".counter h2");
const duration = 8000; // Duration in milliseconds

counters.forEach((counter) => {
    const updateCount = () => {
        const target = +counter.getAttribute("data-target").replace(/,/g, ""); // Remove commas from target
        const count = parseFloat(counter.innerText.replace(/,/g, "")); // Remove commas for calculation

        // Divide the target by duration to calculate the increment
        const increment = (target / duration) * 30;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment).toLocaleString(); // Format number with commas
            setTimeout(updateCount, 30);
        } else {
            counter.innerText = target.toLocaleString(); // Format final number with commas
        }
    };

    updateCount();
});

// ** Counter ** //
