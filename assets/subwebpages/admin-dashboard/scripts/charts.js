
/* ============================== Sales =========================================== */

// Create gradient helper
function createGradient(ctx, color1, color2) {
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, color1);
    gradient.addColorStop(1, color2);
    return gradient;
}

// Sales Over Time Chart
const salesCtx = document.getElementById('salesChart').getContext('2d');
const salesGradient = createGradient(salesCtx, '#34d399', '#059669');

const salesChart = new Chart(salesCtx, {
    type: 'line',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Cars Sold',
            data: [5, 10, 8, 15, 12, 9, 13],
            backgroundColor: salesGradient,
            borderColor: '#10b981',
            borderWidth: 3,
            fill: true,
            tension: 0.4,
            borderCapStyle: 'round'
        }],
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false }
        }
    }
});

// Revenue Distribution Chart
const revenueCtx = document.getElementById('revenueChart').getContext('2d');
const revenueGradient = createGradient(revenueCtx, '#60a5fa', '#3b82f6');

const revenueChart = new Chart(revenueCtx, {
    type: 'bar',
    data: {
        labels: ['Model A', 'Model B', 'Model C', 'Model D'],
        datasets: [{
            label: 'Revenue ($)',
            data: [10000, 15000, 20000, 17000],
            backgroundColor: revenueGradient
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Sales by Model Chart
const salesModelCtx = document.getElementById('salesModelChart').getContext('2d');
const salesModelChart = new Chart(salesModelCtx, {
    type: 'bar',
    data: {
        labels: ['Sedan', 'SUV', 'Truck', 'Coupe'],
        datasets: [{
            label: 'Units Sold',
            data: [50, 70, 40, 30],
            backgroundColor: '#a855f7'
        }]
    },
    options: {
        responsive: true,
        indexAxis: 'y', // Makes it a horizontal bar chart
        plugins: {
            legend: { display: false }
        },
        scales: {
            x: {
                beginAtZero: true
            }
        }
    }
});


// Revenue by Salesperson Chart
const salespersonCtx = document.getElementById('salespersonChart').getContext('2d');

// Create individual gradients for each slice
const salespersonGradients = [
    createGradient(salespersonCtx, '#ff9a9e', 'red'), // Gradient 1
    createGradient(salespersonCtx, '#a1c4fd', 'green'), // Gradient 2
    createGradient(salespersonCtx, '#ffecd2', 'blue'), // Gradient 3
    createGradient(salespersonCtx, '#fbc2eb', 'yellow')  // Gradient 4
];

const salespersonChart = new Chart(salespersonCtx, {
    type: 'pie',
    data: {
        labels: ['John', 'Emily', 'Sarah', 'Michael'],
        datasets: [{
            label: 'Revenue ($)',
            data: [12000, 18000, 15000, 20000],
            backgroundColor: salespersonGradients // Use the gradients array
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    font: { size: 14 },
                    color: '#333'
                }
            }
        }
    }
});

// Gradient Helper Function
function createGradient(ctx, color1, color2) {
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, color1);
    gradient.addColorStop(1, color2);
    return gradient;
}

/* ================ GP margins ==================== */


// Initialize the chart with default data for the last 7 days
const ctx = document.getElementById('gpMarginChart').getContext('2d');
let gpMarginChart = new Chart(ctx, {
  type: 'line', // Line chart
  data: {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'], // Default 7 days
    datasets: [{
      label: 'GP Margin (%)',
      data: [18, 19, 20, 21, 20, 19, 20], // Sample data
      borderColor: '#FFD700',
      backgroundColor: 'rgba(255, 215, 0, 0.2)',
      borderWidth: 2,
      tension: 0.4, // Smooth curves
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `GP Margin: ${context.raw}%`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value) {
            return `${value}%`;
          }
        }
      }
    }
  }
});

// Function to update the chart data
function updateGPChart(days) {
  const labels = days === '7' 
    ? ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7']
    : ['Week 1', 'Week 2', 'Week 3', 'Week 4']; // Example for 30 days as weekly data
  const data = days === '7' 
    ? [18, 19, 20, 21, 20, 19, 20] 
    : [18, 20, 19, 21]; // Replace with actual data

  gpMarginChart.data.labels = labels;
  gpMarginChart.data.datasets[0].data = data;
  gpMarginChart.update();
}

/* ============== Conversion rates ============ */

// Initialize the chart variable globally
let conversionRateChart;

function renderConversionRateChart(data, labels) {
  const ctx = document.getElementById('conversionRateChart').getContext('2d');

  // Destroy the previous chart instance if it exists
  if (conversionRateChart) {
    conversionRateChart.destroy();
  }

  // Create a new chart
  conversionRateChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels, // X-axis labels
      datasets: [
        {
          label: 'Conversion Rate (%)',
          data: data, // Y-axis data
          borderColor: '#6B46C1', // Purple line color
          backgroundColor: 'rgba(107, 70, 193, 0.2)', // Light purple fill
          borderWidth: 2,
          pointRadius: 4,
          pointBackgroundColor: '#6B46C1',
          pointBorderColor: '#FFFFFF',
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: 'top',
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              return `${context.raw}%`;
            },
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: '#4A5568', // Dark gray
          },
          grid: {
            display: false, // Hide X-axis grid lines
          },
        },
        y: {
          beginAtZero: true,
          ticks: {
            color: '#4A5568',
            callback: function (value) {
              return `${value}%`;
            },
          },
          grid: {
            color: '#E2E8F0', // Light gray grid lines
          },
        },
      },
    },
  });
}

// Function to update the chart data
function updateConversionChart(period) {
  let data, labels;

  if (period === '7') {
    // Example data for the last 7 days
    labels = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'];
    data = [32, 34, 30, 35, 36, 33, 35];
  } else if (period === '30') {
    // Example data for the last 30 days
    labels = Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`);
    data = Array.from({ length: 30 }, () => Math.floor(Math.random() * 10) + 30); // Random data between 30% and 40%
  }

  renderConversionRateChart(data, labels);
}

// Initialize the chart on page load with default data for the last 7 days
document.addEventListener('DOMContentLoaded', () => {
  updateConversionChart('7');
});


/* ===== Salesman ==== */

// Example Salesmen Data
const salesmen = [
  { name: 'John Doe', carsSold: 50, revenue: 1200000, avgDealSize: 24000, phone: '+1 (555) 123-1000', email: 'john.doe@example.com' },
  { name: 'Jane Smith', carsSold: 60, revenue: 1500000, avgDealSize: 25000, phone: '+1 (555) 123-1001', email: 'jane.smith@example.com' },
  { name: 'Mike Johnson', carsSold: 45, revenue: 1100000, avgDealSize: 24500, phone: '+1 (555) 123-1002', email: 'mike.johnson@example.com' },
  { name: 'Emily Davis', carsSold: 55, revenue: 1350000, avgDealSize: 24545, phone: '+1 (555) 123-1003', email: 'emily.davis@example.com' },
  { name: 'Chris Brown', carsSold: 65, revenue: 1600000, avgDealSize: 24615, phone: '+1 (555) 123-1004', email: 'chris.brown@example.com' },
  { name: 'Sarah Wilson', carsSold: 20, revenue: 950000, avgDealSize: 23750, phone: '+1 (555) 123-1005', email: 'sarah.wilson@example.com' },
  { name: 'David Martinez', carsSold: 70, revenue: 1750000, avgDealSize: 25000, phone: '+1 (555) 123-1006', email: 'david.martinez@example.com' },
  { name: 'Lisa Taylor', carsSold: 15, revenue: 920000, avgDealSize: 24210, phone: '+1 (555) 123-1007', email: 'lisa.taylor@example.com' },
  { name: 'James Anderson', carsSold: 62, revenue: 1550000, avgDealSize: 25000, phone: '+1 (555) 123-1008', email: 'james.anderson@example.com' },
  { name: 'Sophia Thompson', carsSold: 52, revenue: 1300000, avgDealSize: 25000, phone: '+1 (555) 123-1009', email: 'sophia.thompson@example.com' },
  { name: 'Ethan Garcia', carsSold: 48, revenue: 1180000, avgDealSize: 24583, phone: '+1 (555) 123-1010', email: 'ethan.garcia@example.com' },
  { name: 'Olivia Robinson', carsSold: 58, revenue: 1450000, avgDealSize: 25000, phone: '+1 (555) 123-1011', email: 'olivia.robinson@example.com' }
];


// Populate the Salesmen Data Table
const salesmanDataTable = document.getElementById('salesmen-data');

salesmen.forEach((salesman, index) => {
  salesmanDataTable.innerHTML += `
      <tr>
          <td class="px-4 py-2"><input type="checkbox" /></td>
          <td class="px-4 py-2">${salesman.name}</td>
          <td class="px-4 py-2">${salesman.carsSold}</td>
          <td class="px-4 py-2">$${salesman.revenue.toLocaleString()}</td>
          <td class="px-4 py-2">$${salesman.avgDealSize.toLocaleString()}</td>
          <td class="px-4 py-2">${(salesman.carsSold >= 50 ? '🔥 Good' : '👎 Needs Improvement')}</td>
      </tr>
  `;
});

// Function to populate the salesmen data table
const populateSalesmenTable = () => {
  const salesmanDataTable = document.getElementById('salesmen-data');
  salesmanDataTable.innerHTML = ''; // Clear the existing table data

  salesmen.forEach((salesman, index) => {
    salesmanDataTable.innerHTML += `
      <tr>
          <td class="px-4 py-2"><input type="checkbox" /></td>
          <td class="px-4 py-2">${salesman.name}</td>
          <td class="px-4 py-2">${salesman.carsSold}</td>
          <td class="px-4 py-2">$${salesman.revenue.toLocaleString()}</td>
          <td class="px-4 py-2">$${salesman.avgDealSize.toLocaleString()}</td>
          <td class="px-4 py-2">${(salesman.carsSold >= 50 ? '🔥 Good' : '👎 Needs Improvement')}</td>
      </tr>
    `;
  });
};

// Function to update the chart
const updateSalesPerformanceChart = () => {
  salesPerformanceChart.data.labels = salesmen.map(salesman => salesman.name);
  salesPerformanceChart.data.datasets[0].data = salesmen.map(salesman => salesman.carsSold);
  salesPerformanceChart.update(); // Refresh the chart with updated data
};

// Existing code to set up the chart
const ctxSalsmen = document.getElementById('salesPerformanceChart').getContext('2d');
const salesPerformanceChart = new Chart(ctxSalsmen, {
  type: 'line',
  data: {
    labels: salesmen.map(salesman => salesman.name),
    datasets: [{
      label: 'Cars Sold',
      data: salesmen.map(salesman => salesman.carsSold),
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 2,
      pointRadius: 4,
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// ======================= Add A Salseman =======================================

document.getElementById("addSalesmanSubmitBtn").addEventListener("click", () => {
  
  const newSalesman = {};

  // Collect the values from the form inputs
  document.querySelectorAll(".salesmanInfo").forEach((input) => {
    const inputName = input.name;  // Assuming each input has a 'name' attribute in the html
    newSalesman[inputName] = input.value;
  });

  // Add the new salesman to the salesmen array
  salesmen.unshift(newSalesman);

  // Update the table and chart
  populateSalesmenTable();
  updateSalesPerformanceChart();

  document.getElementById("addSalesManForm").classList.remove("scale-100");
  document.querySelector("body").className = "overflow-y-auto";
});

// ======================= Edit sales man =================================

document.getElementById("update-salesman").addEventListener("click", () => {
  // Get the checked checkboxes
  const selectedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  
  // If exactly one salesman is selected, allow editing
  if (selectedCheckboxes.length === 1) {
    const selectedIndex = Array.from(selectedCheckboxes).map(checkbox => {
      return Array.from(checkbox.closest('tr').parentElement.children).indexOf(checkbox.closest('tr'));
    })[0];  // Get the index of the checked checkbox row
    
    // Get the selected salesman
    const selectedSalesman = salesmen[selectedIndex];
    
    // Populate the form with the selected salesman's data
    document.querySelector('input[name="name"]').value = selectedSalesman.name;
    document.querySelector('input[name="carsSold"]').value = selectedSalesman.carsSold;
    document.querySelector('input[name="revenue"]').value = selectedSalesman.revenue;
    document.querySelector('input[name="avgDealSize"]').value = selectedSalesman.avgDealSize;
    document.querySelector('input[name="phone"]').value = selectedSalesman.phone;
    document.querySelector('input[name="email"]').value = selectedSalesman.email;

    // Show the form for editing
    document.getElementById("addSalesManForm").classList.add("scale-100");
    document.querySelector("body").className = "overflow-y-hidden";

    // When the form is submitted, update the salesman data
    document.getElementById("addSalesmanSubmitBtn").addEventListener("click", () => {
      // Collect the edited values
      const updatedSalesman = {
        name: document.querySelector('input[name="name"]').value,
        carsSold: parseInt(document.querySelector('input[name="carsSold"]').value),
        revenue: parseFloat(document.querySelector('input[name="revenue"]').value),
        avgDealSize: parseFloat(document.querySelector('input[name="avgDealSize"]').value),
        phone: document.querySelector('input[name="phone"]').value,
        email: document.querySelector('input[name="email"]').value,
      };

      // Update the salesmen array with the updated data
      salesmen[selectedIndex] = updatedSalesman;

      // Close the form and reset the body class
      document.getElementById("addSalesManForm").classList.remove("scale-100");
      document.querySelector("body").className = "overflow-y-auto";

      // Re-populate the table and update the chart
      populateSalesmenTable();
      updateSalesPerformanceChart();
    });
  } else {
    // If no or multiple salesmen are selected, alert the user
    alert('Please select exactly one salesman to edit.');
  }
});

// ======================= Delete sales man =================================

document.getElementById("delete-salesman").addEventListener("click", () => {
  // Find all the checkboxes that are checked
  const checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
  
  // Loop through each checked checkbox
  checkboxes.forEach((checkbox) => {
    const row = checkbox.closest('tr'); // Get the closest row for each checkbox
    const salesmanName = row.querySelector('td:nth-child(2)').textContent; // Get the name of the salesman from the row
    
    // Find the index of the salesman to be deleted
    const salesmanIndex = salesmen.findIndex(salesman => salesman.name === salesmanName);

    // Remove the salesman from the array
    if (salesmanIndex !== -1) {
      salesmen.splice(salesmanIndex, 1);
    }
  });

  // Update the table and chart after deletion
  populateSalesmenTable();
  updateSalesPerformanceChart();
});





// Close the form
document.getElementById("cancleSalesmanBtn").addEventListener("click", () => {
  document.getElementById("addSalesManForm").classList.remove("scale-100");
  document.querySelector("body").className = "overflow-y-auto";
});

document.getElementById("add-salesman").addEventListener("click", () => {
  document.getElementById("addSalesManForm").classList.add("scale-100");
  document.querySelector("body").className = "overflow-y-hidden";
});