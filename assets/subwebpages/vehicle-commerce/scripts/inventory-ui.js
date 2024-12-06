import { cars, BASE_PATH } from "../../../../scripts/data/index-data.js";


/* ==================================== Nav Functionality ============================================= */

const navToggleBtns = document.querySelectorAll(".sectionToggleBtn");
const comerceSections = document.querySelectorAll(".sectionCommerce");
const navSymbols = document.querySelectorAll(".navSymbols");

navToggleBtns.forEach((navBtns) => {
  const getAttribute = navBtns.getAttribute("data-section");

  navToggleBtns.forEach((navBtn) => {
    navBtn.addEventListener("click", () => {
      // Get the target section from the data attribute
      const getAttribute = navBtn.getAttribute("data-section");
      console.log(getAttribute);
  
      // Reset all symbols to inactive styles
      navSymbols.forEach((symbol) => {
        symbol.classList.remove("bg-orange--v1", "text-white");
        symbol.classList.add("text-gray-400");
      });
  
      // Add active classes to the icon inside the clicked button
      const activeSymbol = navBtn.querySelector(".navSymbols");
      if (activeSymbol) {
        activeSymbol.classList.remove("text-gray-400");
        activeSymbol.classList.add("bg-orange--v1", "text-white");
      }
  
      // Show the corresponding section and hide others
      comerceSections.forEach((section) => {
        if (section.id === getAttribute) {
          section.classList.remove("hidden");
        } else {
          section.classList.add("hidden");
        }
      });
    });
  });
  
  
});



/* ====================================== filter button =========================================== */

/* 
console.log("Original Cars Array:");
cars.forEach((car, index) => {
    console.log(`Car ${index + 1}:`, car);
});
*/

document.getElementById("filterToggleBtnShowRoom").addEventListener("click", () => {
    document.getElementById("filter-list").classList.toggle("scale-0");
});

// createing a new path for each directory items
const NEW_BASE_PATH = "../../../../assets/images/";

const updatedCars = cars.map(car => ({
    ...car,
    // manufacturerLogo: car.manufacturerLogo.replace("BASE_PATH", BASE_PATH),
    carImages: car.carImages.replace(BASE_PATH, NEW_BASE_PATH),
}));

// Print the updated objects
console.log("Updated Cars Array:");
updatedCars.forEach((car, index) => {
    console.log(`Car ${index + 1}:`, car);
});

/* ==================================== Car ShowRoom ================================== */
// Track the currently applied filters
let currentCarType = 'All'; // Default to all car types
let currentPriceRange = null; // Default to no price filter
let currentYearFilter = null;

// this filter button is for filtering by car eg:suv, sports car ....
const filterButtons = document.querySelectorAll('#filter-list button');
const showRoomContainer = document.getElementById('Showroom');

// Get the filter buttons and the Showroom container
const cardListContainer = document.createElement("ul");
cardListContainer.className = "grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3";

// Function to render the cars
function renderCars(carsArray) {
    // Clear previous car list
    showRoomContainer.innerHTML = '';

    // Append the new filtered list of cars
    const cardListContainer = document.createElement("ul");
    cardListContainer.className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3";

    carsArray.forEach((car) => {
        const listElement = document.createElement("li");
        listElement.innerHTML = `
        <article class="bg-white rounded-lg border hover:shadow-lg transition-shadow p-4">
        <!-- Car Image -->
        <div class="overflow-hidden rounded-lg relative mb-4">
            <img class="w-full h-48" src="${car.carImages}" alt="${car.carName}">
            <div class="absolute top-2 left-2 bg-orange--v1 text-white text-xs px-2 py-1 rounded">
                ${car.carType}
            </div>
        </div>

        <!-- Car Details -->
        <section>
            <!-- Car Name -->
            <h1 class="text-lg font-medium text-gray-900">${car.carName}</h1>
            <!-- Price -->
            <p class="text-3xl font-bold text-orange my-2">$${car.carPrice}</p>
        </section>

        <!-- CTA -->
        <section class="mt-4">
            <div class="flex justify-between">
                <!-- Buy Now Button -->
                <button class="websitebuilder-scale bg-orange--v1 flex items-center gap-2 px-4 py-2 text-shadow text-white text-sm font-medium rounded-md shadow hover:bg-blue-600">
                    <span class="material-symbols-rounded">shopping_bag_speed</span>
                    Buy Now
                </button>
                <!-- Learn More Button -->
                <button class="websitebuilder-scale px-4 py-2 border-orange bg-orange text-sm font-medium text-orange rounded-md hover:bg-blue-50">
                    Learn More
                </button>
            </div>
        </section>
    </article>
        `;
        cardListContainer.appendChild(listElement);
    });

    showRoomContainer.appendChild(cardListContainer);
}

// Initial render with all cars
renderCars(updatedCars);

// Filter button event listener: Filter based on button text Contents
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.textContent.trim();
        console.log(category);

        let filteredCars;

        // Filter cars based on the category
        if (category === 'All') {
            filteredCars = updatedCars;
        } else {
            filteredCars = updatedCars.filter(car => car.carCategory === category);
        }

        // Render the filtered cars
        renderCars(filteredCars);
    });
});

// ------ filtering based on prices -------------------
// Select the price filter container
const filterPriceButtons = document.getElementById("filter-price-buttons");

// Function to extract price ranges dynamically
function getPriceRanges(carsArray) {
  // Convert string prices to numbers for comparison
  const prices = carsArray.map(car => parseInt(car.carPrice.replace(/,/g, ''), 10));
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  // Determine the step size for the ranges (e.g., divide range into 4 intervals)
  const rangeStep = Math.ceil((maxPrice - minPrice) / 5);

  // Create ranges based on step size
  const ranges = [
      { label: `Under $${(minPrice + rangeStep).toLocaleString()}`, min: 0, max: minPrice + rangeStep },
      { label: `$${(minPrice + rangeStep + 1).toLocaleString()} - $${(minPrice + 2 * rangeStep).toLocaleString()}`, min: minPrice + rangeStep + 1, max: minPrice + 2 * rangeStep },
      { label: `$${(minPrice + 2 * rangeStep + 1).toLocaleString()} - $${(minPrice + 3 * rangeStep).toLocaleString()}`, min: minPrice + 2 * rangeStep + 1, max: minPrice + 3 * rangeStep },
      { label: `Above $${(minPrice + 3 * rangeStep).toLocaleString()}`, min: minPrice + 3 * rangeStep, max: Infinity },
  ];

  return ranges;
}

// Create price filter buttons
function renderPriceButtons(carsArray) {
    filterPriceButtons.innerHTML = ''; // Clear any existing buttons
    const ranges = getPriceRanges(carsArray);

    ranges.forEach(range => {
        const button = document.createElement('button');
        button.className = "rounded-2xl flex gap-1 text-gray-600 py-2 px-4 border border-gray-200 font-semibold websitebuilder-scale text-sm";
        button.textContent = range.label;

        // Attach event listener for each button
        button.addEventListener('click', () => {
            const filteredCars = carsArray.filter(car => {
                const carPrice = parseInt(car.carPrice.replace(/,/g, ''), 10);
                return carPrice >= range.min && carPrice <= range.max;
            });
            renderCars(filteredCars); // Render cars matching the selected price range
        });

        filterPriceButtons.appendChild(button);
    });
}

// Create filter buttons for year ranges

// Function to filter cars based on the current filters
function applyFilters() {
  let filteredCars = updatedCars;
  
  // Filter by car type
  if (currentCarType !== 'All') {
      filteredCars = filteredCars.filter(car => car.carCategory === currentCarType);
  }

  // Filter by price range
  if (currentPriceRange) {
      const { min, max } = currentPriceRange;
      filteredCars = filteredCars.filter(car => {
          const carPrice = parseInt(car.carPrice.replace(/,/g, ''), 10);
          return carPrice >= min && carPrice <= max;
      });
  }

  // Filter by year
  if (currentYearFilter) {
    filteredCars = filteredCars.filter(car => car.yearReleased === currentYearFilter);
  }

  // Render the filtered cars
  renderCars(filteredCars);
}

function renderYearButtons(carsArray) {
  const filterYearButtons = document.getElementById("filter-year-buttons");
  filterYearButtons.innerHTML = '';

  const uniqueYears = [...new Set(carsArray.map(car => car.yearReleased))].sort((a, b) => b - a);

  uniqueYears.forEach(year => {
      const button = document.createElement('button');
      button.className = "rounded-xl flex gap-1 text-gray-600 py-2 px-4 border border-gray-200 font-semibold";
      button.textContent = year;

      button.addEventListener('click', () => {
          currentYearFilter = year;
          applyFilters();
      });

      filterYearButtons.appendChild(button);
  });
}

// Event listener for car type buttons
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
      const category = button.textContent.trim();
      console.log(category);

      let filteredCars;

      if (category === 'All') {
          // Reset filters when 'All' is clicked
          currentCarType = 'All'; 
          currentPriceRange = null; // Reset price range filter
          currentYearFilter = null; // Reset year filter
          filteredCars = updatedCars; // Show all cars
      } else {
          // Filter cars based on the selected category
          currentCarType = category;
          filteredCars = updatedCars.filter(car => car.carCategory === currentCarType);
      }

      // Render the filtered cars
      renderCars(filteredCars);
  });
});


document.getElementById("filter-price-btn").addEventListener("click", () => {
  document.getElementById("filter-price-buttons").classList.toggle("scale-0");
});

document.getElementById("filter-by-year-btn").addEventListener("click", () => {
  document.getElementById("filter-year-buttons").classList.toggle("scale-0");
});

// Initial setup
renderCars(updatedCars);
renderPriceButtons(updatedCars);
renderYearButtons(updatedCars);


/* =============================== Calander ==================================== */

const calendarEl = document.getElementById("calendar");
const scheduleModal = document.getElementById("schedule-modal");
const selectedDateEl = document.getElementById("selected-date");
const scheduleForm = document.getElementById("schedule-form");
const cancelBtn = document.getElementById("cancel-btn");
const prevMonthBtn = document.getElementById("prev-month");
const nextMonthBtn = document.getElementById("next-month");
const calendarTitle = document.getElementById("calendar-title");
const scheduledListEl = document.getElementById("scheduled-list"); // List of scheduled appointments

let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let scheduledDays = new Set(); // Store only the dates of scheduled appointments
let scheduledDetails = []; // Store detailed test drive information

function getMonthName(monthIndex) {
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  return monthNames[monthIndex];
}

function generateCalendar(month, year) {
  calendarEl.innerHTML = "";
  calendarTitle.textContent = `${getMonthName(month)} ${year}`;

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Add empty slots for days before the first day of the month
  for (let i = 0; i < firstDay; i++) {
    const emptyDiv = document.createElement("div");
    calendarEl.appendChild(emptyDiv);
  }

  // Add days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const dayEl = document.createElement("div");
    dayEl.textContent = day;
    dayEl.className =
      "p-4 border rounded-md cursor-pointer transition hover:bg-indigo-100";
    const formattedDate = `${year}-${month + 1}-${day}`;

    // Highlight scheduled days
    if (scheduledDays.has(formattedDate)) {
      dayEl.classList.add("bg-green-100");
    }

    dayEl.addEventListener("click", () => openModal(day, month, year));
    calendarEl.appendChild(dayEl);
  }
}

function openModal(day, month, year) {
  const formattedDate = `${year}-${month + 1}-${day}`;
  selectedDateEl.textContent = `Selected Date: ${formattedDate}`;
  scheduleModal.classList.remove("hidden");
  scheduleModal.dataset.selectedDate = formattedDate;
}

function closeModal() {
  scheduleModal.classList.add("hidden");
  scheduleForm.reset();
}

function handleFormSubmit(event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const carType = document.getElementById("car-type").value.trim();
  const selectedDate = scheduleModal.dataset.selectedDate;

  if (name && carType) {
    // Add the selected date to the scheduledDays Set
    scheduledDays.add(selectedDate);

    // Store the detailed information in scheduledDetails
    scheduledDetails.push({ date: selectedDate, name, carType });

    // Re-render the calendar to display the newly scheduled day
    generateCalendar(currentMonth, currentYear);

    // Update the scheduled list
    updateScheduledList();

    alert(`Test drive scheduled for ${selectedDate} by ${name} for a ${carType}`);
    closeModal();
  }
}

// Update the list of scheduled test drives
function updateScheduledList() {
  scheduledListEl.innerHTML = ""; // Clear the list before updating

  if (scheduledDetails.length === 0) {
    scheduledListEl.innerHTML = "<p class='text-gray-500'>No test drives scheduled.</p>";
    return;
  }

  scheduledDetails.forEach((item) => {
    const listItem = document.createElement("div");
    listItem.classList.add("p-4", "bg-white", "rounded-lg", "border", "hover:shadow-lg", "transition", "duration-300");

    listItem.innerHTML = `
      <div class="flex items-center space-x-4">
        <span class="material-symbols-rounded text-indigo-600">drive_eta</span>
        <div>
          <strong class="text-lg text-gray-800">${item.date}</strong>
          <p class="text-sm text-gray-600">Name: ${item.name}</p>
          <p class="text-sm text-gray-600">Car: ${item.carType}</p>
        </div>
      </div>
    `;

    scheduledListEl.appendChild(listItem);
  });
}

// Event listeners
scheduleForm.addEventListener("submit", handleFormSubmit);
cancelBtn.addEventListener("click", closeModal);
prevMonthBtn.addEventListener("click", () => {
  currentMonth = (currentMonth - 1 + 12) % 12;
  generateCalendar(currentMonth, currentYear);
});
nextMonthBtn.addEventListener("click", () => {
  currentMonth = (currentMonth + 1) % 12;
  generateCalendar(currentMonth, currentYear);
});

// Initial setup
generateCalendar(currentMonth, currentYear);