document.getElementById("changeName").addEventListener("click", function () {
    document.getElementById("studentName").textContent =
        "Arnie Arizobal";
});

document.getElementById("changeBackground").addEventListener("click", function () {
    const profile = document.getElementById("profile");

    if (profile.style.backgroundColor === "lightblue") {
        profile.style.backgroundColor = "white";
    } else {
        profile.style.backgroundColor = "lightblue";
    }
});

document.getElementById("toggleDetails").addEventListener("click", function () {
    document.getElementById("details").classList.toggle("hidden");
});