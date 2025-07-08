// podcast.js

document.addEventListener("DOMContentLoaded", () => {
    const podcastCards = document.querySelectorAll(".podcast-card button");

    podcastCards.forEach(button => {
        button.addEventListener("click", (event) => {
            const card = event.target.closest(".podcast-card");
            const title = card.querySelector("h2").textContent;
            alert(`Now playing: ${title}`);
        });
    });

    // Dynamic podcast list loading
    const podcastSection = document.querySelector(".podcast-section");
    const podcasts = [
        {
            title: "Tech Trends",
            description: "Explore the latest in technology and innovation.",
            image: "tech-trends.jpg",
        },
        {
            title: "Code Talks",
            description: "Insights from developers around the world.",
            image: "code-talks.jpg",
        },
        {
            title: "Startup Stories",
            description: "Journey through the world of entrepreneurship.",
            image: "startup-stories.jpg",
        },
    ];

    podcasts.forEach(podcast => {
        const card = document.createElement("div");
        card.className = "podcast-card";

        card.innerHTML = `
            <img src="${podcast.image}" alt="${podcast.title}">
            <div class="podcast-info">
                <h2>${podcast.title}</h2>
                <p>${podcast.description}</p>
                <button>Play</button>
            </div>
        `;

        podcastSection.appendChild(card);
    });
});
