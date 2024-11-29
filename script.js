// Add event listener to the Order Now button
document.getElementById('orderButton').addEventListener('click', function () {
    // Get the selected Polaroid type
    const polaroidType = document.getElementById('polaroidType').value;

    // Get the quantity entered by the user
    const quantity = parseInt(document.getElementById('quantity').value);

    // Initialize the price per unit
    let pricePerUnit = 0;

    // Determine price per unit based on Polaroid type
    if (polaroidType === 'classic') {
        pricePerUnit = 8;
    } else if (polaroidType === 'customized') {
        pricePerUnit = 10;
    } else if (polaroidType === 'mini') {
        pricePerUnit = 5;
    }

    // Calculate the total amount
    const totalAmount = pricePerUnit * quantity;

    // Display the total amount in an alert
    if (quantity > 0) {
        alert(`Thanks for ordering! Your total amount is ₹${totalAmount}.`);
        alert(`Mail us your photos at polaroid@gmail.com!`);
    } else {
        alert('Please enter a valid quantity.');
    }
});
