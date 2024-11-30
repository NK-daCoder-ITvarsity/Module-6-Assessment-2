import {cars} from "../../../../scripts/data/index-data.js"

document.getElementById("filterToggleBtnShowRoom").addEventListener("click", () => {
    document.getElementById("filter-list").classList.toggle("scale-0");
});


const cardListContainer = document.getElementById("Showroom");
cardListContainer = document.createElement("ul");
cardListContainer.className = "grid grid-cols-3 gap-3";

cars.forEach((car) => {
    cardListContainer.innerHTML = `
    <li>
        <article class="border rounded-2xl p-2">
            <div>
                <img src="${car.carImages}" alt="${car.carName}">
            </div>
            <section>
                <!-- car name -->
                <h1 class="text-lg">${car.carName}</h1>
                <!-- price -->
                <p class="text-3xl">${car.carPrice}</p>
                <!-- car type -->
                <p>${car.carType}</p>
            </section>
            <!-- cta -->
            <section>
                <ul class="flex justify-between">
                    <li>
                        <button class="flex gap-1">
                            <span class="material-symbols-rounded align-middle">shopping_bag_speed</span>
                            Buy Now
                        </button>
                    </li>
                    <li>
                        <button class="flex gap-1">
                            Learn more
                        </button>
                    </li>
                </ul>
            </section>
        </article>
    </li>
    `;
});

