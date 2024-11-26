
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



/* =================== Employee management data generator Example 2 ===================== */

const employees = [
  { name: "John Doe", role: "Sales Manager", salary: "$7,500", status: "Active", payment: "Paid", image: "../../images/employee-profiles/john-doe.png", employee:"employed" },
  { name: "Jane Smith", role: "Finance Specialist", salary: "$6,200", status: "Active", payment: "Not Paid", image: "../../images/employee-profiles/jane-smith.png", employee:"employed" },
  { name: "Carlos Vega", role: "Mechanic", salary: "$4,800", status: "Inactive", payment: "Not Paid", image: "../../images/employee-profiles/carlos-vega.png", employee:"employed" },
  { name: "Samantha Lee", role: "Customer Support", salary: "$5,000", status: "Active", payment: "Paid", image: "../../images/employee-profiles/samantha-lee.png", employee:"employed" },
  { name: "Michael Brown", role: "Dealer", salary: "$6,500", status: "Active", payment: "Paid", image: "../../images/employee-profiles/michael-brown.png", employee:"employed" },
  { name: "Joseph Brown", role: "Dealer", salary: "$6,500", status: "Available", payment: "Need To Hire", image: "../../images/employee-profiles/michael-brown.png", employee:"Not employed" },
  { name: "Lee Brown", role: "Dealer", salary: "$6,500", status: "Available", payment: "Need To Hire", image: "../../images/employee-profiles/michael-brown.png", employee:"Not employed" },
];

const container = document.getElementById('employee-cards');

// Delegate the click event on the parent container of the buttons
container.addEventListener('click', (event) => {
  if (event.target.classList.contains('moreMenuBtn')) {
    const button = event.target;
    const dropdownId = button.getAttribute('data-dropdown-toggle');
    const dropdown = document.getElementById(dropdownId);
    
    // Toggle the dropdown visibility
    dropdown.classList.toggle('scale-0');
  }
});

// Function to render employees
// Function to render employees with the appropriate dropdown
function renderEmployees(filteredEmployees) {
  container.innerHTML = ""; // Clear current content
  filteredEmployees.forEach((employee, index) => {
    const card = document.createElement('div');
    card.className = "bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden relative transform hover:scale-105";
    
    // Generate the employee card dynamically
    card.innerHTML = `
      <div class="relative p-6 flex items-center gap-4 justify-between">
        <img src="${employee.image}" alt="${employee.name}'s Profile" class="rounded-full p-2 w-24 h-24 drop-shadow-lg bg-white object-cover">
        <section class="flex-1">
          <h3 class="text-lg font-semibold text-gray-900">${employee.name}</h3>
          <p class="text-sm text-gray-600">${employee.role}</p>
          <p class="text-lg font-semibold text-blue-600 mt-2">${employee.salary}</p>
          <div class="flex items-center gap-2 mt-2">
            <span class="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full ${employee.status === "Active" ? "bg-green-500" : "bg-gray-400"} text-white">
              <span class="material-symbols-rounded text-sm mr-1">${employee.status === "Active" ? "check_circle" : "pause_circle"}</span> ${employee.status}
            </span>
            <span class="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full ${employee.payment === "Paid" ? "bg-green-500" : "bg-red-500"} text-white">
              <span class="material-symbols-rounded text-sm mr-1">${employee.payment === "Paid" ? "check_circle" : "error"}</span> ${employee.payment}
            </span>
          </div>
        </section>

        <button class="moreMenuBtn z-20 absolute top-3 right-3 text-gray-600 hover:text-blue-500 websitebuilder-scale" data-dropdown-toggle="dropdown-${index}">
          <span class="material-symbols-rounded text-3xl">more_vert</span>
        </button>

        <!-- Dropdown menu for employed or not employed -->
        <section id="dropdown-${index}" class="transition-all transform scale-0 dropdown absolute top-1 right-10 bg-white rounded-xl shadow-lg p-3 w-40 z-50">
          <ul class="grid gap-3">
            ${employee.employee === "employed" ? `
              <li><button class="flex gap-2 text-sm text-gray-600 hover:text-blue-500"><span class="material-symbols-rounded">payments</span>Pay</button></li>
              <li><button class="flex gap-2 text-sm text-gray-600 hover:text-blue-500"><span class="material-symbols-rounded">edit</span>Edit</button></li>
              <li><button class="flex gap-2 text-sm text-gray-600 hover:text-blue-500"><span class="material-symbols-rounded">delete</span>Remove</button></li>
            ` : `
              <li><button class="flex gap-2 text-sm text-gray-600 hover:text-blue-500"><span class="material-symbols-rounded">schedule</span>Interview</button></li>
              <li><button class="flex gap-2 text-sm text-gray-600 hover:text-blue-500"><span class="material-symbols-rounded">badge</span>Hire Now</button></li>
              <li><button class="flex gap-2 text-sm text-gray-600 hover:text-blue-500"><span class="material-symbols-rounded">file_copy</span>View CV/Resume</button></li>
            `}
          </ul>
        </section>  
      </div>
    `;
    
    container.appendChild(card);
  });
}



// Event Listener for Filter Buttons

document.querySelectorAll('button[data-filter]').forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');
    let filteredEmployees;
    
    if (filter === "all") {
      filteredEmployees = employees.filter((emp) => emp.employee === "employed"); // Show all employees
    } 
    else if (filter === "Not Paid") {
      filteredEmployees = employees.filter((emp) => emp.payment === "Not Paid");
    } 
    else if (filter === "Inactive") {
      filteredEmployees = employees.filter((emp) => emp.status === "Inactive");
    } 
    else if (filter === "Not Hired") { // New case for employees to hire
      filteredEmployees = employees.filter((emp) => emp.payment === "Need To Hire");
    } 
    else {
      filteredEmployees = employees.filter((emp) => emp.status === "Active" && emp.payment === "Paid");
    }

    renderEmployees(filteredEmployees); // Re-render based on filter

    document.querySelectorAll(".moreMenuBtn").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".dropdown").forEach((dropdowns) => {
          const getAttributeOfBtn = btn.getAttribute("data-dropdown-toggle");
          if (dropdowns.id === getAttributeOfBtn) {
            dropdowns.classList.toggle("scale-0");
          }
        });
      });
    });
  });
});


// ================================= create an employee ============================

document.getElementById("addEmployeeBtn").addEventListener("click", () => {

});






// =================== Example customer data Example 1 ============================

const customers = Array.from({ length: 1245 }, (_, i) => ({
    name: `Customer ${i + 1}`,
    email: `customer${i + 1}@example.com`,
    phone: `(555) 555-55${String(i).padStart(2, '0')}`,
    lastPurchase: `2024-11-${String((i % 30) + 1).padStart(2, '0')}`,
  }));
  
  const entriesPerPage = 500; // Number of entries per page
  let currentPageCards = 1;
  let currentPageTable = 1;
  
  // Function to render a page of cards
  function renderCards(page) {
    const start = (page - 1) * entriesPerPage;
    const end = page * entriesPerPage;
    const paginatedCustomers = customers.slice(start, end);
  
    const customerContainer = document.getElementById('customerCards');
    customerContainer.innerHTML = ""; // Clear previous cards
  
    paginatedCustomers.forEach(customer => {
      const card = document.createElement('div');
      card.className = "bg-gray-50 p-6 rounded-lg border relative";
      card.innerHTML = `
        <div class="flex items-center gap-2 mb-2">
          <img src="https://via.placeholder.com/40" alt="${customer.name}" class="border-2 border-blue-400 rounded-full w-10 h-10" />
          <h3 class="text-lg font-semibold text-gray-800">${customer.name}</h3>
        </div>
        <p class="text-sm text-gray-500">Email: <span class="text-gray-700">${customer.email}</span></p>
        <p class="text-sm text-gray-500">Phone: <span class="text-gray-700">${customer.phone}</span></p>
        <p class="text-sm text-gray-500">Last Purchase: <span class="text-gray-700">${customer.lastPurchase}</span></p>
        <div class="mt-4 flex justify-between">
          <button class="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded-lg shadow hover:opacity-90 transition-all">Edit</button>
          <button class="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded-lg shadow hover:opacity-90 transition-all">View</button>
          <button class="absolute top-7 right-5">
            <span class="material-symbols-rounded text-gray-400 hover:text-red-500 transition-all">delete</span>
          </button>
        </div>`;
      customerContainer.appendChild(card);
    });
  
    renderPaginationControls('paginationControlsCards', page, Math.ceil(customers.length / entriesPerPage), renderCards);
  }
  
  // Function to render a page of table entries
  /*
  function renderTable(page) {
    const start = (page - 1) * entriesPerPage;
    const end = page * entriesPerPage;
    const paginatedCustomers = customers.slice(start, end);
  
    const tableBody = document.getElementById('customerTableBody');
    tableBody.innerHTML = ""; // Clear previous rows
  
    paginatedCustomers.forEach(customer => {
      const row = document.createElement('tr');
      row.className = "hover:bg-gray-100";
      row.innerHTML = `
        <td class="border border-gray-300 px-4 py-2">${customer.name}</td>
        <td class="border border-gray-300 px-4 py-2">${customer.email}</td>
        <td class="border border-gray-300 px-4 py-2">${customer.phone}</td>
        <td class="border border-gray-300 px-4 py-2">${customer.lastPurchase}</td>`;
      tableBody.appendChild(row);
    });
  
    renderPaginationControls('paginationControlsTable', page, Math.ceil(customers.length / entriesPerPage), renderTable);
  }
  */
  
  // Function to render pagination controls
  function renderPaginationControls(containerId, currentPage, totalPages, renderFunction) {
    const container = document.getElementById(containerId);
    container.innerHTML = ""; // Clear previous controls
  
    if (totalPages <= 1) return;
  
    for (let i = 1; i <= totalPages; i++) {
      const button = document.createElement('button');
      button.textContent = i;
      button.className = `px-4 py-2 m-1 rounded-lg ${
        i === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'
      }`;
      button.onclick = () => renderFunction(i);
      container.appendChild(button);
    }
  }
  
  // Initial Render
  renderCards(currentPageCards);
  // renderTable(currentPageTable);


  