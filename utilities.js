// -----Get Input value function -------
function getInputValueById(id)
{
    const input = document.getElementById(id).value;
    const inputNumber = parseFloat(input);
    return inputNumber;
}

// -----Get Text value function -------
function getTextValueById(id)
{
    const innerText = document.getElementById(id).innerText;
    const innerTextNumber = parseFloat(innerText)
    return innerTextNumber;
}

// Function to show success modal
function showSuccessModal() {
    const modal = document.getElementById('success-modal');
    modal.classList.remove('hidden');
}

// Close modal event listener
document.getElementById('close-modal-btn').addEventListener('click', function() {
    const modal = document.getElementById('success-modal');
    modal.classList.add('hidden');
});



// Shared Donation Function
function manageDonation(clickedBtn, totalbalance, donatedbalance, donatedFor) {
    document.getElementById(clickedBtn).addEventListener('click', function() {
        console.log('btn clicked');
    
        // Get available balance
        const availableBalance = getTextValueById('available-balance');
        console.log('Available balance is: ', availableBalance);
        
        // Get Total Balance
        const totalBalance = getTextValueById(totalbalance);
        console.log('Total balance of Noakhali is: ', totalBalance);
    
        // Get input for
        const donatedBalance = getInputValueById(donatedbalance);
        console.log('Donation: ', donatedBalance);
    
        // Check if the amount is a number
        if (isNaN(donatedBalance) || donatedBalance <= 0) {
            Toastify({
                text: "Please enter a valid number",
                duration: 3000,
                close: true,
                gravity: "top",
                position: "right",
                backgroundColor: "#FF4F5A",
                stopOnFocus: true
            }).showToast();
            return;
        }
        
        // Check availability of balance
        if (availableBalance < donatedBalance) {
            Toastify({
                text: "Sorry! You have not enough balance to donate.",
                duration: 3000,
                close: true,
                gravity: "top",
                position: "right",
                backgroundColor: "#FF4F5A",
                stopOnFocus: true
            }).showToast();
            return;
        }
    
        // Add donated balance with total balance
        const newBalance = totalBalance + donatedBalance;
        console.log('New total balance: ', newBalance);
    
        // Subtract donated balance from available balance
        const updatedAvailableBalance = availableBalance - donatedBalance;
        console.log('Updated available balance: ', updatedAvailableBalance);
    
        // Update total balance
        document.getElementById(totalbalance).innerText = newBalance;
    
        // Update available balance
        document.getElementById('available-balance').innerText = updatedAvailableBalance;
    
        // Show success modal
        showSuccessModal();
    
        // Add to history
        const div = document.createElement('div');
        div.classList.add('border-2', 'rounded-lg', 'px-5', 'py-3', 'space-y-3');
    
        // Get the current date and time in Bangladesh timezone
        const bangladeshTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" });
        const formattedDate = new Date(bangladeshTime).toString();
    
        // Add the innerHTML with the formatted date
        div.innerHTML = `
            <h3 class=" font-semibold text-[22px]">${donatedBalance} Taka is Donated ${document.getElementById(donatedFor).innerText}</h3>
            <p>Date: ${formattedDate}</p>
        `;
    
        document.getElementById('history-section').appendChild(div);
    });
}
