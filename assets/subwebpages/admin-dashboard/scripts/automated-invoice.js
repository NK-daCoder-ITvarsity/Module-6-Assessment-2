// Add new item row
document.getElementById('addItemButton').addEventListener('click', () => {
    const itemsContainer = document.getElementById('itemsContainer');
    const itemRow = document.createElement('div');
    itemRow.className = 'flex items-center gap-2';
    itemRow.innerHTML = `
        <input type="text" name="itemName[]" placeholder="Item Name" class="border border-gray-300 rounded-lg p-2 w-2/5" required>
        <input type="number" name="itemQty[]" placeholder="Qty" class="border border-gray-300 rounded-lg p-2 w-1/5" required>
        <input type="number" name="itemPrice[]" placeholder="Price" class="border border-gray-300 rounded-lg p-2 w-2/5" required>
        <button type="button" class="text-red-500 material-symbols-rounded" onclick="removeItem(this)">delete</button>
    `;
    itemsContainer.appendChild(itemRow);
});

// Remove item row
const removeItem = (button) => {
    button.parentElement.remove();
    calculateInvoice();
}

// Calculate Invoice
const calculateInvoice = () => {
    const quantities = document.getElementsByName('itemQty[]');
    const prices = document.getElementsByName('itemPrice[]');

    let subtotal = 0;

    for (let i = 0; i < quantities.length; i++) {
        const qty = parseFloat(quantities[i].value) || 0;
        const price = parseFloat(prices[i].value) || 0;
        subtotal += qty * price;
    }

    const tax = subtotal * 0.15;
    const total = subtotal + tax;

    document.getElementById('subtotal').innerText = `$${subtotal.toFixed(2)}`;
    document.getElementById('tax').innerText = `$${tax.toFixed(2)}`;
    document.getElementById('total').innerText = `$${total.toFixed(2)}`;
}

// Event Listeners for Calculations
document.getElementById('itemsContainer').addEventListener('input', calculateInvoice);
document.getElementById('invoiceForm').addEventListener('input', calculateInvoice);


// Generate Invoice Preview
document.getElementById('previewInvoice').addEventListener('click', () => {
    const form = document.getElementById('invoiceForm');
    const preview = document.getElementById('invoicePreview');
    const formData = new FormData(form);

    let html = '<h3 class="text-lg font-semibold mb-4">Invoice Preview</h3>';
    html += '<ul>';

    formData.getAll('itemName[]').forEach((item, index) => {
        html += `<li>${item} (Qty: ${formData.getAll('itemQty[]')[index]}, Price: ${formData.getAll('itemPrice[]')[index]})</li>`;
    });

    html += '</ul>';
    preview.innerHTML = html;
    preview.classList.remove('hidden');
});

// Download Invoice
document.getElementById('downloadInvoice').addEventListener('click', () => {
    const form = document.getElementById('invoiceForm');
    const formData = new FormData(form);
    let text = 'Invoice\\n';

    formData.getAll('itemName[]').forEach((item, index) => {
        text += `${item}, Qty: ${formData.getAll('itemQty[]')[index]}, Price: ${formData.getAll('itemPrice[]')[index]}\\n`;
    });

    const blob = new Blob([text], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'invoice.txt';
    link.click();
});

// Print Invoice
document.getElementById('printInvoice').addEventListener('click', () => {
    const preview = document.getElementById('invoicePreview');
    const newWindow = window.open('', '', 'width=800, height=600');
    newWindow.document.write(preview.innerHTML);
    newWindow.print();
});


