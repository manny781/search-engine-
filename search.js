document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".search-bar");
    const gameItems = document.querySelectorAll(".game-list li");

    searchInput.addEventListener("keyup", function () {
        let filter = searchInput.value.toLowerCase();
        gameItems.forEach(item => {
            let text = item.textContent.toLowerCase();
            item.style.display = text.includes(filter) ? "" : "none";
        });
    });
});