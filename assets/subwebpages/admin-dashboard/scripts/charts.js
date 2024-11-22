// Dummy Data Generation for the Chart (Randomized Data)
function generateRandomData(numDays) {
    let data = [];
    for (let i = 0; i < numDays; i++) {
      data.push(Math.floor(Math.random() * 1000) + 500); // Random values between 500 and 1500
    }
    return data;
  }

  // Blue Gradient Background for the Charts
  function createBlueGradient(ctx) {
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(29, 78, 216, 0.5)');  // Light blue
    gradient.addColorStop(1, 'rgba(59, 130, 246, 0.2)');  // Darker blue
    return gradient;
  }

  // Chart 1: Revenue Line Chart
  const revenueData = generateRandomData(30);
  const ctxRevenue = document.getElementById('revenueLineChart').getContext('2d');
  const revenueLineChart = new Chart(ctxRevenue, {
    type: 'line',
    data: {
      labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
      datasets: [{
        label: 'Revenue',
        data: revenueData,
        fill: true,
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: createBlueGradient(ctxRevenue), // Set blue gradient as the background
        tension: 0.3,
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          mode: 'nearest',
          intersect: false
        }
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  // Chart 2: Bids Per Car Bar Chart
  const bidsData = generateRandomData(30);
  const ctxBids = document.getElementById('bidsBarChart').getContext('2d');
  const bidsBarChart = new Chart(ctxBids, {
    type: 'bar',
    data: {
      labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
      datasets: [{
        label: 'Bids Per Car',
        data: bidsData,
        backgroundColor: createBlueGradient(ctxBids), // Set blue gradient as the background
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          mode: 'nearest',
          intersect: false
        }
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  // Form Submission Handling for CRUD Operations
  document.getElementById('financeForm').addEventListener('submit', (e) => {
    e.preventDefault();

    // Update Statistics with Form Data
    document.getElementById('revenue').innerText = `$${document.getElementById('revenueInput').value || 'Loading...'}`;
    document.getElementById('totalDeals').innerText = `${document.getElementById('totalDealsInput').value || 'Loading...'} Deals`;
    document.getElementById('activeBidsMoney').innerText = `$${document.getElementById('activeBidsInput').value || 'Loading...'}`;
  });