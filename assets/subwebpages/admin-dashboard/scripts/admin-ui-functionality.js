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

// Sales
document.querySelectorAll(".salesViewDetailBtns").forEach((btn) => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".salesCardSection").forEach((section) => {
            const btnAttribute = btn.getAttribute("data-section");
            if(section.id === btnAttribute) {
                section.classList.toggle("hidden");
            }
            else {
                section.classList.add("hidden");
            }
            
        });
    })
})

// JavaScript to handle commission calculations, etc.
const salesData = {
    carsSold: 50,
    revenueGenerated: 1200000,
    avgDealSize: 24000,
    commissionRate: 0.05, // 5% commission
    targetSales: 70
};

// Calculate Commission
const commission = salesData.revenueGenerated * salesData.commissionRate;

// Update the UI with dynamic data
document.getElementById('cars-sold').innerText = salesData.carsSold;
document.getElementById('revenue-generated').innerText = `$${salesData.revenueGenerated.toLocaleString()}`;
document.getElementById('avg-deal-size').innerText = `$${salesData.avgDealSize.toLocaleString()}`;
document.getElementById('commission-amount').innerText = `$${commission.toLocaleString()}`;

// Calculate Progress Bar
const progressPercent = (salesData.carsSold / salesData.targetSales) * 100;
document.getElementById('progress-bar').style.width = `${progressPercent}%`;

// Marketing and promotions
document.querySelectorAll(".marketingPromotionalBtns").forEach((btns) => {
    btns.addEventListener("click", () => {
        const getAttribute = btns.getAttribute("data-section");

        document.querySelectorAll(".marketManagementSections").forEach((sections)=>{
            if (sections.id === getAttribute) {
                sections.classList.remove("hidden");
            }
            else {
                sections.classList.add("hidden");
            }
        });
    });
})




