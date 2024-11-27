/* =================== Employee management data generator Example 2 ===================== */

const employees = [
    { name: "John Doe", role: "Sales Manager", salary: "$7,500", status: "Active", payment: "Paid", image: "../../images/employee-profiles/john-doe.png", employee: "employed" },
    { name: "Jane Smith", role: "Finance Specialist", salary: "$6,200", status: "Active", payment: "Not Paid", image: "../../images/employee-profiles/jane-smith.png", employee: "employed" },
    { name: "Carlos Vega", role: "Mechanic", salary: "$4,800", status: "Inactive", payment: "Not Paid", image: "../../images/employee-profiles/carlos-vega.png", employee: "employed" },
    { name: "Samantha Lee", role: "Customer Support", salary: "$5,000", status: "Active", payment: "Paid", image: "../../images/employee-profiles/samantha-lee.png", employee: "employed" },
    { name: "Michael Brown", role: "Dealer", salary: "$6,500", status: "Active", payment: "Paid", image: "../../images/employee-profiles/michael-brown.png", employee: "employed" },
    { name: "Joseph Brown", role: "Dealer", salary: "$6,500", status: "Available", payment: "Need To Hire", image: "../../images/employee-profiles/michael-brown.png", employee: "Not employed" },
    { name: "Lee Brown", role: "Dealer", salary: "$6,500", status: "Available", payment: "Need To Hire", image: "../../images/employee-profiles/michael-brown.png", employee: "Not employed" },
    { name: "Evelyn Clark", role: "Automotive Cybersecurity Specialist", salary: "$8,000", status: "Active", payment: "Paid", image: "../../images/employee-profiles/evelyn-clark.png", employee: "employed" },
    { name: "Oscar Martinez", role: "Car Security Technician", salary: "$5,700", status: "Active", payment: "Paid", image: "../../images/employee-profiles/oscar-martinez.png", employee: "employed" },
    { name: "Nina Patel", role: "Telematics Engineer", salary: "$7,200", status: "Active", payment: "Not Paid", image: "../../images/employee-profiles/nina-patel.png", employee: "employed" },
    { name: "Lucas Wang", role: "Vehicle Software Developer", salary: "$9,000", status: "Active", payment: "Paid", image: "../../images/employee-profiles/lucas-wang.png", employee: "employed" },
    { name: "Emily Nguyen", role: "Fleet Manager", salary: "$6,800", status: "Available", payment: "Need To Hire", image: "../../images/employee-profiles/emily-nguyen.png", employee: "Not employed" },
    { name: "Jack Evans", role: "Performance Tuner", salary: "$6,500", status: "Inactive", payment: "Not Paid", image: "../../images/employee-profiles/jack-evans.png", employee: "employed" },
    { name: "Sophia Perez", role: "Automotive AI Specialist", salary: "$10,000", status: "Active", payment: "Paid", image: "../../images/employee-profiles/sophia-perez.png", employee: "employed" },
    { name: "Ethan Rivera", role: "GPS Navigation System Specialist", salary: "$5,400", status: "Active", payment: "Paid", image: "../../images/employee-profiles/ethan-rivera.png", employee: "employed" },
    { name: "Olivia King", role: "Collision Avoidance Systems Engineer", salary: "$7,800", status: "Available", payment: "Need To Hire", image: "../../images/employee-profiles/olivia-king.png", employee: "Not employed" },
    { name: "Benjamin Taylor", role: "Electric Vehicle Charging Infrastructure Manager", salary: "$8,500", status: "Active", payment: "Paid", image: "../../images/employee-profiles/benjamin-taylor.png", employee: "employed" }
];
  
// Function to update the stats
function updateDashboardStats() {
    // Total Employees
    const totalEmployees = employees.filter(employee => employee.employee === "employed").length;
    document.getElementById("totalStaff").textContent = totalEmployees;

    // Employees to Hire
    const employeesToHire = employees.filter(employee => employee.payment === "Need To Hire" && employee.employee === "Not employed").length;
    document.getElementById("employeesToHire").textContent = employeesToHire;

    // Employees to Pay
    const employeesToPay = employees.filter(employee => employee.payment === "Not Paid" && employee.employee === "employed").length;
    document.getElementById("employeesToPay").textContent = employeesToPay;

    // Employees with Queries (Assuming this is based on the status 'Inactive')
    const employeesWithQueries = employees.filter(employee => employee.status === "Inactive").length;
    document.getElementById("employeeQueries").textContent = employeesWithQueries;
}

// Run the function to update the stats on page load
window.onload = updateDashboardStats;

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
        card.className = "border rounded-2xl hover:shadow-2xl transition-all overflow-hidden relative transform hover:scale-105";
        
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

// Event Listener for Filter Buttons from the divs
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

// ================================= create an employee form ============================

// populating select element based onm the roles available in the array object
const roleSelect = document.getElementById('role');
    employees.forEach(employee => {
    const option = document.createElement('option');
    option.value = employee.role;
    option.textContent = employee.role;
    roleSelect.appendChild(option);
});


// add employee form functionality

document.getElementById("addEmployeeBtn").addEventListener("click", () => {
    document.getElementById("addEmployeeFormContainer").classList.add("scale-100");
});

document.getElementById("addEmployeeSalesCancleBtn").addEventListener("click", () => {
    document.getElementById("addEmployeeFormContainer").classList.remove("scale-100");
});


// Function to get the salary based on role
function getSalaryByRole(role) {
    // Find the employee based on the role
    const employee = employees.find(emp => emp.role === role);
    // If employee is found, return the salary, otherwise return a default value
    return employee ? employee.salary : "$0";
}


document.getElementById("submitEmployeeBtn").addEventListener("click", (e) => {
    e.preventDefault();  // Prevent default behavior to ensure no reload
    // Capture the form data
    const fullName = document.getElementById("full-name").value;
    const role = document.getElementById("role").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const profileImage = document.getElementById("profile-image").files[0];

    console.log(fullName, role, email, phone, profileImage);

    // Create newEmployee object
    const newEmployee = {
        name: fullName,
        role: role,
        salary: getSalaryByRole(role), // Dynamically set the salary based on the role
        status: "Active", // Default to Active or modify based on your needs
        payment: "Not Paid", // Default value for payment status
        image: profileImage ? URL.createObjectURL(profileImage) : "", // Create a URL for the uploaded image if it exists
        employee: "employed", // Default to employed
    };


    // Add the new employee to the employees array
    employees.unshift(newEmployee);

    // updating stats dynamically
    const totalEmployees = employees.filter(employee => employee.employee === "employed").length;
    document.getElementById("totalStaff").textContent = totalEmployees;
    
    // Employees to Hire
    const employeesToHire = employees.filter(employee => employee.payment === "Need To Hire" && employee.employee === "Not employed").length;
    document.getElementById("employeesToHire").textContent = employeesToHire;

    // Employees to Pay
    const employeesToPay = employees.filter(employee => employee.payment === "Not Paid" && employee.employee === "employed").length;
    document.getElementById("employeesToPay").textContent = employeesToPay;

    // Employees with Queries (Assuming this is based on the status 'Inactive')
    const employeesWithQueries = employees.filter(employee => employee.status === "Inactive").length;
    document.getElementById("employeeQueries").textContent = employeesWithQueries;


    // Clear the form fields after submission
    document.getElementById("addEmployeeFormContainer").reset();

    // Optionally update the UI or show a success message
    alert("Employee added successfully!");

});