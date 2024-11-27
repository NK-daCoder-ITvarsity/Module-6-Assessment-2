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
    const { jsPDF } = window.jspdf;

    // Create a new PDF instance
    const pdf = new jsPDF();

    // Add Logo/image only supports png
    // Replace with your logo's path or URL
    const logoUrl = 'https://mir-s3-cdn-cf.behance.net/project_modules/hd/76527a11924043.56254adfdb229.png';
    // Adjust dimensions as needed
    pdf.addImage(logoUrl, 'PNG', 10, 10, 50, 20);

    // Add Client Info
    const clientName = document.getElementById('clientName').value || 'N/A';
    const clientEmail = document.getElementById('clientEmail').value || 'N/A';

    pdf.setFontSize(12);
    pdf.text('Invoice To:', 140, 15);
    pdf.text(`Name: ${clientName}`, 140, 25);
    pdf.text(`Email: ${clientEmail}`, 140, 35);

    // Table Headers
    const headers = ['Item', 'Quantity', 'Price', 'Total'];
    const tableData = [];
    const items = document.querySelectorAll('#itemsContainer .flex');

    items.forEach((itemRow) => {
        const itemName = itemRow.querySelector('[name="itemName[]"]').value || 'N/A';
        const itemQty = itemRow.querySelector('[name="itemQty[]"]').value || 0;
        const itemPrice = itemRow.querySelector('[name="itemPrice[]"]').value || 0;
        const itemTotal = (itemQty * itemPrice).toFixed(2);

        tableData.push([itemName, itemQty, `$${itemPrice}`, `$${itemTotal}`]);
    });

    // Table Styles
    pdf.autoTable({
        startY: 50,
        head: [headers],
        body: tableData,
        theme: 'grid',
        headStyles: { fillColor: [0, 0, 0], textColor: [255, 255, 255] }, // Black background, white text
        bodyStyles: { textColor: [0, 0, 0] }, // Black text
    });

    // Subtotal, Tax, and Total
    const subtotal = document.getElementById('subtotal').innerText;
    const tax = document.getElementById('tax').innerText;
    const total = document.getElementById('total').innerText;

    pdf.text(`Subtotal: ${subtotal}`, 140, pdf.lastAutoTable.finalY + 10);
    pdf.text(`Tax (15%): ${tax}`, 140, pdf.lastAutoTable.finalY + 20);
    pdf.setFontSize(14);
    pdf.text(`Total: ${total}`, 140, pdf.lastAutoTable.finalY + 30);

    // Footer
    pdf.setFontSize(10);
    pdf.text('Thank you for your business!', 10, 280);
    pdf.text('This is a computer-generated invoice.', 10, 290);

    // Download the PDF
    pdf.save('Invoice.pdf');
});



// Print Invoice
document.getElementById('printInvoice').addEventListener('click', () => {
    const preview = document.getElementById('invoicePreview');
    const newWindow = window.open('', '', 'width=800, height=600');
    newWindow.document.write(preview.innerHTML);
    newWindow.print();
});


