import { jobs, cars } from './data/index-data.js'

// indexing into an array then into an object to get the value
// console.log(employees[0].name)

/*
    <li class="flex items-center">
        <a href="" class="text-sm transform transition-all hover:scale-105 hover:underline">Sales Manager</a>
    </li>
*/

const listContainer = document.getElementById("careesList");

jobs.forEach((employee) => {
    // console.log(employee.role);
    const listItem = document.createElement("li");
    listItem.className = "flex items-center"
    listItem.innerHTML = `
        <a href="" class="text-sm transform transition-all hover:scale-105 hover:underline text-white">${employee.role}</a> 
   `;

   listContainer.appendChild(listItem);
});


const motherCardContainer = document.getElementById("cardContainer");

cars.forEach((carObjects, index) => {
    const cardContainerChild = document.createElement("div");
    cardContainerChild.className = "shadow-md hover:shadow-xl object-cover rounded-3xl index-card--darkbackground index-card--dark-border shadow-md rounded-lg overflow-hidden hover:scale-110 transform transition-all cursor-pointer "
    cardContainerChild.innerHTML =  `
        <img src="${carObjects.carImages}" alt="${carObjects.carName}" class="w-full rounded-3xl p-3 backdrop-blur-xl">
        <div class="px-7 py-8">
            <h4 class="text-lg font-semibold text-gray-100">${carObjects.carName}</h4>
            <p class="text-gray-400 mt-2">Starting at $${carObjects.carPrice}</p>
            <ul class="flex justify-between items-center">
                <li>
                    <button class="websitebuilder-scale flex gap-1 mt-4 px-4 py-2 text-white text-shadow bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-md shadow hover:opacity-90">
                        <span class="material-symbols-rounded align-middle">shopping_bag_speed</span>
                        Buy Now
                    </button>
                </li>
                <li>
                    <button data-card="infoCard-${index}" class="learn-more-car-card-btns websitebuilder-scale flex mt-4 px-4 py-2 text-blue-500 rounded-md shadow hover:opacity-90">
                        <span class="material-symbols-rounded align-middle transform scale-50">
                            arrow_forward_ios
                        </span>
                        Learn More
                    </button>
                </li>
            </ul>
        </div>
    `;

    motherCardContainer.appendChild(cardContainerChild);
});


const article = document.getElementById("articleContainer");

cars.forEach((carObjects, index) => {
    const cardContent = document.createElement("div");

    cardContent.className = "infoCard transform scale-0 transition-transform fixed top-0 left-0 w-screen bg-transparent--black h-screen z-50 flex justify-center items-center";
    cardContent.id = `infoCard-${index}`

    cardContent.innerHTML = `
        <button data-card="infoCard-${index}" class="websitebuilder-scale closingInfoCardBtns fixed top-4 right-4 w-10 h-10 rounded-full p-3 flex items-center justify-center border border-gray-800 white-text">
            <span class="material-symbols-rounded">
                close
            </span>
        </button>
        <!-- Card Container -->
        <article class="rounded-3xl overflow-y-auto gap-4 p-2 md:p-4 md:w-1/2 flex flex-col justify-center items-center index-card--dark-border index-card--darkbackground h-full md:h-3/4">
            <!-- Car Name -->
            <img src="${carObjects.carImages}" alt="${carObjects.carName}" class="md:w-1/2"/>
            <section>
                <h2>${carObjects.carName}</h2>
            </section>
            
            <!-- Car Specs -->
            <section>
                <ul class="flex justify-between gap-5">
                    <li class="flex flex-col items-center justify-center">
                        <span class="material-symbols-rounded text-white">${carObjects.fuelIcon}</span>
                        ${carObjects.fuelType}
                    </li>
                    <li class="flex flex-col items-center justify-center">
                        <span class="material-symbols-rounded text-white">${carObjects.speedIcon}</span>
                        ${carObjects.topSpeed}
                    </li>
                    <li class="flex flex-col items-center justify-center">
                        <span class="material-symbols-rounded text-white">${carObjects.locationIcon}</span>
                        ${carObjects.location}
                    </li>
                </ul>
            </section>

            <!-- Car Descriptions -->
            <section>
                <p class="text-sm">
                    ${carObjects.description}
                </p>
            </section>
        
        </article>
    `;

    article.appendChild(cardContent);
});

document.querySelectorAll(".learn-more-car-card-btns").forEach((btns) => {
    const getDataAttribute = btns.getAttribute("data-card")
    btns.addEventListener("click", () => {
       document.querySelectorAll(".infoCard").forEach(infoCards => {
            if(infoCards.id === getDataAttribute) {
                infoCards.classList.toggle("scale-0");
            }
       });
        
    });
});

document.querySelectorAll(".closingInfoCardBtns").forEach((btns) => {
    btns.addEventListener("click", () => {
        document.querySelectorAll(".infoCard").forEach(infoCards => {
            infoCards.classList.add("scale-0");
       });
    });
});


const containerPartner = document.getElementById("trustedPartners");

cars.forEach(companies => {
    const companyList = document.createElement("li");
    companyList.className = "flex-shrink-0";
    companyList.innerHTML = `
        <img src="${companies.manufacturerLogo}" alt="${companies.manufacturer}" class="w-16 md:w-20 filter grayscale transform transition-all hover:scale-125 hover:grayscale-0 cursor-pointer"/>
    `;
    containerPartner.appendChild(companyList);

});


// ============================== Burger Menu =======================================

document.getElementById("menuBtn").addEventListener("click", () => {
    document.getElementById("menuBtnIcon-1").classList.toggle("hidden");
    document.getElementById("menuBtnIcon-2").classList.toggle("hidden");

    if (document.getElementById("toggleMenu").classList.contains("h-0")) {
        document.getElementById("toggleMenu").classList.toggle("h-screen");
    }
    
})