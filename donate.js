
// Donation Function for Noakhali
document.getElementById('noakhali-donation-btn').addEventListener('click', function(){
    console.log('btn clicked');

    // Get available balance
    const availableBalance = getTextValueById('available-balance')
    console.log('Available balance is : ', availableBalance);
    
    // Get Total Balance of Noakhali
    const totalBalanceOfNoakhali = getTextValueById('noakhali-total-balance');
    console.log('Total balance of Noakhali is : ', totalBalanceOfNoakhali);

    // Get input for Noakhali
    const donatedBalanceNoakhali = getInputValueById('noakhali-donated-balance');
    console.log('Donation : ', donatedBalanceNoakhali);
    
    // Check availability of balance
    if(availableBalance < donatedBalanceNoakhali)
        {
            // Using Toastify to show an error
            Toastify({
                text: "Sorry! You have not enough balance to donate.",
                duration: 3000, // 3 seconds
                close: true,
                gravity: "top", // top or bottom
                position: "right", // left, center, right
                backgroundColor: "#FF4F5A", // Red background for error
                stopOnFocus: true // Stops toast on hover
            }).showToast();
            return;
        }

    // Add donated balance with total balance
    const newBalance = totalBalanceOfNoakhali + donatedBalanceNoakhali;
    console.log('New total balance : ', newBalance);

    // Subtract donated balance from available balance
    const updatedAvailableBalance = availableBalance - donatedBalanceNoakhali;
    console.log('Updated available balance : ',updatedAvailableBalance);

    // Uptade total balance
    document.getElementById('noakhali-total-balance').innerText = newBalance;

    // Uptade available balance
    document.getElementById('available-balance').innerText = updatedAvailableBalance;
})