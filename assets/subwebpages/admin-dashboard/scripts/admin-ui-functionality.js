const dashboardNavBtns = document.querySelectorAll(".navButtons");
const mainMobileBtn = document.getElementById("mainMobileBtn");
const mainMenu = document.getElementById("mainMenu");
const mainMenuCancleBtn = document.getElementById("cancleBtn");
const dashboardSections = document.querySelectorAll(".page-article");
const toggleTableCardBtns = document.querySelectorAll(".table-card--toggle");


dashboardNavBtns.forEach((navBtns) => {
    navBtns.addEventListener("click", () => {
        dashboardNavBtns.forEach((btns) => {
            btns.classList.remove("border-l-4", "border-blue-500", "text-blue-500");
        });
        navBtns.classList.add("border-l-4", "border-blue-500", "text-blue-500");

        const getTargetSections = navBtns.getAttribute("data-section");

        dashboardSections.forEach((sections) => {
            if (sections.id === getTargetSections) {
                sections.classList.remove("hidden"); // Show the matching section
            } else {
                sections.classList.add("hidden"); // Hide other sections
            }
        });

    });
});

mainMobileBtn.addEventListener("click", () => {
    mainMenu.classList.remove("hidden");
});

mainMenuCancleBtn.addEventListener("click", () => {
    mainMenu.classList.add("hidden");
});


document.querySelectorAll(".table-card--toggle").forEach((btns) => {
    btns.addEventListener("click", () => {
        document.querySelectorAll(".table-card--toggle").forEach((btn) => {
            btn.classList.add("text-gray-400");
        });
        btns.classList.remove("text-gray-400");

        const retrivedAttribute = btns.getAttribute("data-section");

        document.querySelectorAll(".data-cards-tables").forEach((dataElement) => {
            if(dataElement.id === retrivedAttribute) {
                dataElement.classList.remove("hidden");
            }
            else {
                dataElement.classList.add("hidden");
            }
        });
    });
});




