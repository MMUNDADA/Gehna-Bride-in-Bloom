

// Fortune Teller
function showFortune() {
    const fortunes = [
        "Gehna is going to steal the spotlight on the dance floor!",
        "A dance battle might break out!",
        "The Bride will take everyone's breath away",
        "Gehna will get drunk,lose her 'properness' and start dancing on Chaiyya Chaiyya!",
        "Gehna will be showing 'eyes' to people who aren't drinking and dancing!",
        "You’ll lose your voice cheering during the sangeet, but gain unforgettable memories!",
        "At least one relative will dramatically cry during the wedding—bonus points if it's not you.",
        "Your outfits will be flawless",
        "Your feet will be sore from dancing, but your heart will be full of joy!",
        "You will be annoyed about why Mehndi is taking so long",
        "The groom’s squad will pull off a stunt no one saw coming!",
        "During sangeet, the uncles and aunties will put all the youngsters to shame on the dance floor!",
        "You will hear the phrase 'just one more drink' at least 20 times during cocktail night",
        "Ayush will sneak loving glances at Gehna even in the middle of all the chaos",
        "Ayush will randomly hold Gehna's hand tightly when no one’s looking, just to say I am here",
        "Ayush will make a grand romantic gesture on stage, even if he’s shy"
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
