// Selecting the necessary DOM elements for interaction
const incomeInput = document.getElementById('income');
const taxRateInput = document.getElementById('tax-rate');
const taxAmount = document.getElementById('tax-amount');
const totalAmount = document.getElementById('total-amount');
const calculateBtn = document.getElementById('calculate-btn');

// Event listener for the calculate button
calculateBtn.addEventListener('click', () => {
  // Get the values of income and tax rate from the inputs
  const income = parseFloat(incomeInput.value);
  const taxRate = parseFloat(taxRateInput.value);

  // Check if the input values are valid numbers
  if (isNaN(income) || isNaN(taxRate) || income <= 0 || taxRate < 0) {
    // If not, display error message and exit function
    alert("Please enter valid income and tax rate values.");
    return;
  }

  // Calculate tax amount
  const tax = (income * taxRate) / 100;

  // Calculate total after tax
  const total = income + tax;

  // Update the UI with the calculated values
  taxAmount.textContent = `$${tax.toFixed(2)}`; // Show tax amount with 2 decimals
  totalAmount.textContent = `$${total.toFixed(2)}`; // Show total after tax with 2 decimals
});