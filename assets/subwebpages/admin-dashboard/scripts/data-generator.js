const customerStatuses = ['Completed', 'Pending', 'Cancelled'];

const generateRandomPhone = () => `(${Math.floor(Math.random() * 900) + 100}) ${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 9000) + 1000}`;
    const generateRandomDate = () => {
    const start = new Date(2022, 0, 1);
    const end = new Date();
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return date.toISOString().split('T')[0];
};

const tableBody = document.getElementById('customer-table-body');

for (let i = 1; i <= 1245; i++) {
    const name = `Customer ${i}`;
    const email = `customer${i}@example.com`;
    const phone = generateRandomPhone();
    const lastPurchase = generateRandomDate();
    const status = customerStatuses[Math.floor(Math.random() * customerStatuses.length)];

    const row = `
    <tr class="border-b">
        <td class="py-3 px-4">${name}</td>
        <td class="py-3 px-4">${email}</td>
        <td class="py-3 px-4">${phone}</td>
        <td class="py-3 px-4">${lastPurchase}</td>
        <td class="py-3 px-4">${status}</td>
        <td class="py-3 px-14"><input type="checkbox"/></td>
    </tr>
    `;
    tableBody.insertAdjacentHTML('beforeend', row);
};

const customers = Array.from({ length: 1245 }, (_, index) => ({
    name: `Customer ${index + 1}`,
    email: `customer${index + 1}@example.com`,
    phone: `(${Math.floor(Math.random() * 900) + 100}) ${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 9000)}`,
    lastPurchase: new Date(Date.now() - Math.random() * 10000000000).toISOString().split('T')[0],
    status: ["Completed", "Pending", "Canceled"][Math.floor(Math.random() * 3)],
}));

const leads = Array.from({ length: 342 }, (_, index) => ({
    name: `Lead ${index + 1}`,
    email: `lead${index + 1}@example.com`,
    phone: `(${Math.floor(Math.random() * 900) + 100}) ${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 9000)}`,
}));

const customerContainer = document.getElementById('customerCards');

customers.forEach(customer => {
    const card = document.createElement('div');
    card.className = "bg-gray-50 p-6 rounded-lg border relative";
    card.innerHTML = `
    <div class="flex items-center gap-2 mb-2">
        <img src="" alt="${customer.name}" class="border-2 border-blue-400 rounded-full w-10 h-10" />
        <h3 class="text-lg font-semibold text-gray-800">${customer.name}</h3>
    </div>
    <p class="text-sm text-gray-500">Email: <span class="text-gray-700">${customer.email}</span></p>
    <p class="text-sm text-gray-500">Phone: <span class="text-gray-700">${customer.phone}</span></p>
    <p class="text-sm text-gray-500">Last Purchase: <span class="text-gray-700">${customer.lastPurchase}</span></p>
    <p class="text-sm text-gray-500">Status: <span class="text-gray-700">${customer.status}</span></p>
    <div class="mt-4 flex justify-between">
        <button class="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded-lg shadow hover:opacity-90 text-shadow mobile-active-click transition-all">Edit</button>
        <button class="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded-lg shadow hover:opacity-90 text-shadow mobile-active-click transition-all">View</button>
        <button class="absolute top-7 right-5 mobile-active-click transition-all">
        <span class="material-symbols-rounded">delete</span>
        </button>
    </div>`;
    customerContainer.appendChild(card);
});
