// Manage History button
document.getElementById('history-btn').addEventListener('click', function(){
    console.log('clicked history button');
    //Show active button
    document.getElementById('donation-btn').classList.remove('bg-[#B4F461]');
    document.getElementById('history-btn').classList.add('bg-[#B4F461]');

    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.remove('hidden');
})


// Manage Donation button
document.getElementById('donation-btn').addEventListener('click', function(){
    console.log('clicked donation button');
    //Show active button
    document.getElementById('history-btn').classList.remove('bg-[#B4F461]');
    document.getElementById('donation-btn').classList.add('bg-[#B4F461]');

    document.getElementById('history-section').classList.add('hidden');
    document.getElementById('donation-section').classList.remove('hidden');
})