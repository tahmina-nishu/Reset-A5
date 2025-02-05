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
