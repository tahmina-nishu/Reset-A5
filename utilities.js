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