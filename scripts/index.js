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

cars.forEach(carObjects => {
    const cardContainerChild = document.createElement("div");
    cardContainerChild.className = "shadow-md hover:shadow-xl object-cover rounded-3xl index-card--darkbackground index-card--dark-border shadow-md rounded-lg overflow-hidden hover:scale-110 transform transition-all cursor-pointer "
    cardContainerChild.innerHTML =  `
        <img src="${carObjects.carImages}" alt="${carObjects.carName}" class="w-full rounded-3xl p-3 backdrop-blur-xl">
        <div class="px-7 py-8">
            <h4 class="text-lg font-semibold text-gray-100">${carObjects.carName}</h4>
            <p class="text-gray-400 mt-2">Starting at $${carObjects.carPrice}</p>
            <button class="websitebuilder-scale flex gap-1 mt-4 px-4 py-2 text-white text-shadow bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-md shadow hover:opacity-90">
                <span class="material-symbols-rounded align-middle">shopping_bag_speed</span>
                Buy Now
            </button>
        </div>
    `;

    motherCardContainer.appendChild(cardContainerChild);
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