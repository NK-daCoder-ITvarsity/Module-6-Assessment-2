
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
  { name: 'John Doe', carsSold: 50, revenue: 1200000, avgDealSize: 24000 },
  { name: 'Jane Smith', carsSold: 60, revenue: 1500000, avgDealSize: 25000 },
  { name: 'Mike Johnson', carsSold: 45, revenue: 1100000, avgDealSize: 24500 },
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

// Sales Performance Chart (using Chart.js)
const ctxSalsmen = document.getElementById('salesPerformanceChart').getContext('2d');
const salesPerformanceChart = new Chart(ctxSalsmen, {
  type: 'bar',
  data: {
      labels: salesmen.map(salesman => salesman.name),
      datasets: [{
          label: 'Cars Sold',
          data: salesmen.map(salesman => salesman.carsSold),
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
      }]
  },
  options: {
      scales: {
          y: {
              beginAtZero: true
          }
      }
  }
});

// Admin actions (Add, Update, Delete Salesman)
document.getElementById('add-salesman').addEventListener('click', () => {
  // Add Salesman Logic (e.g., open a modal to add a new salesman)
  alert('Add Salesman Feature (Coming Soon)');
});

document.getElementById('update-salesman').addEventListener('click', () => {
  // Update Salesman Logic (e.g., open a modal to update selected salesman)
  alert('Update Salesman Feature (Coming Soon)');
});

document.getElementById('delete-salesman').addEventListener('click', () => {
  // Delete Salesman Logic (e.g., prompt to delete selected salesman)
  alert('Delete Salesman Feature (Coming Soon)');
});
  