

// Fortune Teller
function showFortune() {
    const fortunes = [
        "Someone is going to steal the spotlight on the dance floor!",
        "You will eat the best dessert of your life.",
        "Beware of a surprise speech that will make everyone laugh.",
        "A dance battle might break out!"
    ];
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    document.getElementById("fortune-output").innerText = randomFortune;
}


document.addEventListener("DOMContentLoaded", function() {
    const scrollButton = document.getElementById("scrollToNext");
    
    if (scrollButton) {
        scrollButton.addEventListener("click", function() {
            document.getElementById("countdown").scrollIntoView({ behavior: "smooth" });
        });
    }

    document.addEventListener("wheel", (event) => {
        if (event.deltaY > 0) {
            let currentSection = document.querySelector(".section:target") || document.querySelector(".section");
            let nextSection = currentSection.nextElementSibling;
            if (nextSection) {
                nextSection.scrollIntoView({ behavior: "smooth" });
            }
        }
    });
});



document.addEventListener("DOMContentLoaded", function() {
    function updateCountdown() {
        const weddingDate = new Date("2025-04-20T00:00:00+05:30").getTime(); // IST Timezone
        const now = new Date().getTime();
        const timeLeft = weddingDate - now;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("countdown-days").innerText = days.toString().padStart(2, '0');
        document.getElementById("countdown-hours").innerText = hours.toString().padStart(2, '0');
        document.getElementById("countdown-minutes").innerText = minutes.toString().padStart(2, '0');
        document.getElementById("countdown-seconds").innerText = seconds.toString().padStart(2, '0');

        // Adding transition effect
        document.querySelector(".countdown-container").style.transform = "scale(1)";
        setTimeout(() => {
            document.querySelector(".countdown-container").style.transform = "scale(1)";
        }, 500);
    }
    
    setInterval(updateCountdown, 1000);
    updateCountdown();
});
