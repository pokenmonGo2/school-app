function showPage(pageName) {
    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById(pageName).classList.add("active");
}

const today = new Date();

document.getElementById("today").textContent =
    today.toLocaleDateString("nl-NL", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });
