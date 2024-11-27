/* =================== Inventory management data generator Example 2 ===================== */
const cars = [
    {
      manufacturer: "Toyota",
      manufacturerLogo: "../../images/manufacturer-logo/toyota.png",
      carName: "Toyota GR 86",
      carType: "Sports Model",
      topSpeed: "225 km/h",
      location: "Dubai",
      fuelType: "Petrol",
      fuelIcon: "local_gas_station",
      stockStatus: "Available",
      stockAvailable: "25",
      carPrice: "285,892",
      carImages: "../../images/cars/toyota/toyota-gr-86/toyota-gr-86.png"
    },
    {
      manufacturer: "Audi",
      manufacturerLogo: "../../images/manufacturer-logo/audi.png",
      carName: "Audi RS7",
      carType: "Sports Model",
      topSpeed: "280 km/h",
      location: "New York",
      fuelType: "Hybrid",
      fuelIcon: "flash_on",
      stockStatus: "Shortage",
      stockAvailable: "5",
      carPrice: "349,990",
      carImages: "../../images/cars/audi/audi-rs7/audi-rs7.png"
    },
    {
      manufacturer: "Tesla",
      manufacturerLogo: "../../images/manufacturer-logo/tesla.png",
      carName: "Tesla Model S",
      carType: "Sports Model",
      topSpeed: "250 km/h",
      location: "San Francisco",
      fuelType: "Electric",
      fuelIcon: "electric_bolt",
      stockStatus: "Available",
      stockAvailable: "8",
      carPrice: "799,990",
      carImages: "../../images/cars/tesla/tesla-modal-s/tesla-modal-s.png"
    },
    {
      manufacturer: "Honda",
      manufacturerLogo: "../../images/manufacturer-logo/honda.png",
      carName: "Honda CR-V",
      carType: "Family SUV",
      topSpeed: "200 km/h",
      location: "Tokyo",
      fuelType: "Petrol",
      fuelIcon: "local_gas_station",
      stockStatus: "Available",
      stockAvailable: "30",
      carPrice: "175,000",
      carImages: "../../images/cars/honda/honda-crv/honda-crv-v.png"
    },
    {
      manufacturer: "Ford",
      manufacturerLogo: "../../images/manufacturer-logo/ford.png",
      carName: "Ford Explorer",
      carType: "Family SUV",
      topSpeed: "210 km/h",
      location: "Chicago",
      fuelType: "Hybrid",
      fuelIcon: "flash_on",
      stockStatus: "Available",
      stockAvailable: "20",
      carPrice: "310,500",
      carImages: "../../images/cars/ford/explorer/ford-explorer.webp"
    },
    {
      manufacturer: "BMW",
      manufacturerLogo: "../../images/manufacturer-logo/bmw.png",
      carName: "BMW X5",
      carType: "Luxury SUV",
      topSpeed: "230 km/h",
      location: "Munich",
      fuelType: "Diesel",
      fuelIcon: "local_gas_station",
      stockStatus: "Limited",
      stockAvailable: "10",
      carPrice: "499,000",
      carImages: "../../images/cars/BMW/BMW-x5/BMW-X5.png"
    },
    {
      manufacturer: "Mercedes",
      manufacturerLogo: "../../images/manufacturer-logo/mercedes.png",
      carName: "Mercedes-Benz G-Class",
      carType: "Luxury SUV",
      topSpeed: "220 km/h",
      location: "Berlin",
      fuelType: "Petrol",
      fuelIcon: "local_gas_station",
      stockStatus: "Available",
      stockAvailable: "15",
      carPrice: "620,000",
      carImages: "../../images/cars/mercedes-benz/g-class/Mercedes-Benz-G-Class.png"
    }
  ];
  
  
  
  const inventoryCardContainer = document.getElementById("inventory-card");
  
  
  cars.forEach((car) => {
    const createList = document.createElement("li");
    createList.className = "relative rounded-3xl overflow-hidden border transition-all transform hover:scale-105";
    createList.innerHTML = `
    <article class="grid grid-cols-1 lg:grid-cols-2 gap-6 overflow-hidden transition-transform duration-300 hover:scale-105">
      <!-- Image Section -->
      <section class="relative flex items-center justify-center car-image--size">
        <img
          src="${car.carImages}"
          alt="${car.carName}"
          class="w-full h-auto object-cover transition-opacity duration-300 hover:opacity-90 lg:absolute lg:-left-3 lg:w-96 lg:object-cover pr-3"
        />
      </section>
  
      <!-- Content Section -->
      <section class="p-6 flex flex-col gap-4 z-10">
        <!-- Header: Profile -->
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <img
              src="${car.manufacturerLogo}"
              alt="${car.manufacturer}"
              class="w-10 object-cover"
            />
            <h2 class="font-medium text-gray-800 text-base">
              ${car.manufacturer}
            </h2>
          </div>
          <button class="p-2 text-gray-400 hover:text-gray-700 websitebuilder-scale">
            <span class="material-symbols-rounded inventory-more-button">more_vert</span>
          </button>
        </div>
  
        <!-- Car Details -->
        <div class="z-10">
          <h2 class="text-xl font-semibold text-gray-900">${car.carName}</h2>
          <p class="font-semibold text-blue-600 text-2xl">
            $<span>${car.carPrice}</span>
          </p>
          <p class="text-sm text-gray-600 mt-3 mb-2 absolute top-3 left-3">
            <span class="${car.stockStatus === "Available" ? "text-white bg-gradient-to-bl from-green-400 to-green-800 rounded-3xl p-2 text-shadow" : "text-white bg-gradient-to-bl from-red-400 to-red-800 rounded-3xl p-2 text-shadow"}">
              ${car.stockStatus}
            </span>
          </p>
          <p class="text-sm text-gray-600 mb-1">
            Available Units: <span>${car.stockAvailable}</span>
          </p>
        </div>
  
        <!-- Features -->
        <ul class="flex justify-between gap-4 text-sm text-gray-600 z-10">
          <li class="flex flex-col items-center inventory-more-button text-center">
            <span class="material-symbols-rounded text-blue-500">speed</span>
            <span>${car.topSpeed}</span>
          </li>
          <li class="flex flex-col items-center inventory-more-button text-center">
            <span class="material-symbols-rounded text-blue-500">${car.fuelIcon}</span>
            <span>${car.fuelType}</span>
          </li>
          <li class="flex flex-col items-center inventory-more-button text-center">
            <span class="material-symbols-rounded text-blue-500">location_on</span>
            <span>${car.location}</span>
          </li>
        </ul>
      </section>
    </article>
  
     
    `
    inventoryCardContainer.appendChild(createList);
  })