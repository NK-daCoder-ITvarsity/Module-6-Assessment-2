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
document.getElementById('downloadInvoice').addEventListener('click', generatePDF);

// arrow functions does not work with async functions
async function generatePDF() {
    // Fetch the invoice details
    const clientName = document.getElementById('clientName').value;
    const clientEmail = document.getElementById('clientEmail').value;
    const items = document.querySelectorAll('#itemsContainer .flex');
    const subtotal = document.getElementById('subtotal').innerText;
    const tax = document.getElementById('tax').innerText;
    const total = document.getElementById('total').innerText;

    // Initialize jsPDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Set styling for the PDF
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.text('Invoice', 105, 20, null, null, 'center');

    // Client Details
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    doc.text(`Client Name: ${clientName}`, 10, 40);
    doc.text(`Client Email: ${clientEmail}`, 10, 50);

    // Table Header
    doc.setFont('helvetica', 'bold');
    doc.text('Item', 10, 70);
    doc.text('Qty', 100, 70);
    doc.text('Price', 140, 70);
    doc.text('Total', 180, 70);

    doc.setFont('helvetica', 'normal');
    let yPos = 80; // Starting position for items

    items.forEach((itemRow) => {
        const itemName = itemRow.querySelector('input[name="itemName[]"]').value;
        const itemQty = itemRow.querySelector('input[name="itemQty[]"]').value;
        const itemPrice = itemRow.querySelector('input[name="itemPrice[]"]').value;
        const itemTotal = (itemQty * itemPrice).toFixed(2);

        doc.text(itemName, 10, yPos);
        doc.text(itemQty, 100, yPos);
        doc.text(`$${itemPrice}`, 140, yPos);
        doc.text(`$${itemTotal}`, 180, yPos);
        yPos += 10; // Move to next line
    });

    // Summary Section
    yPos += 10;
    doc.text('Subtotal:', 140, yPos);
    doc.text(subtotal, 180, yPos);
    yPos += 10;
    doc.text('Tax (15%):', 140, yPos);
    doc.text(tax, 180, yPos);
    yPos += 10;
    doc.text('Total:', 140, yPos);
    doc.setFont('helvetica', 'bold');
    doc.text(total, 180, yPos);

    // Footer
    yPos += 20;
    doc.setFont('helvetica', 'italic');
    doc.text('Thank you for your business!', 105, yPos, null, null, 'center');

    // Save the PDF
    doc.save('invoice.pdf');
}


// Print Invoice
document.getElementById('printInvoice').addEventListener('click', () => {
    const preview = document.getElementById('invoicePreview');
    const newWindow = window.open('', '', 'width=800, height=600');
    newWindow.document.write(preview.innerHTML);
    newWindow.print();
});


