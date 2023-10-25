// form validation
(() => {
    "use strict";
    const forms = document.querySelectorAll(".needs-validation");
    Array.from(forms).forEach((form) => {
        form.addEventListener(
            "submit",
            (event) => {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add("was-validated");
            },
            false
        );
    });
})();

// toggle navbar
const menuButton = document.getElementById("menu-button");
const menuLinks = document.getElementById("menu-links");

menuButton.addEventListener("click", () => {
    console.log();
    menuLinks.classList.add("flex");
    menuLinks.classList.toggle("hidden");
});
