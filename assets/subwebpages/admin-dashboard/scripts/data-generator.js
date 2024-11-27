

// =================== Example customer data Example 1 with pagination ============================

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


