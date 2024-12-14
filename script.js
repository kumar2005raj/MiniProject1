
document.getElementById('businessCardForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get values from the form
    const name = document.getElementById('name').value;
    const title = document.getElementById('title').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const website = document.getElementById('website').value;

    // Set values to the card
    document.getElementById('cardName').innerText = name;
    document.getElementById('cardTitle').innerText = title;
    document.getElementById('cardEmail').innerText = email;
    document.getElementById('cardPhone').innerText = phone;
    document.getElementById('cardWebsite').innerText = website;

    // // Show the card
    // document.getElementById('card').classList.remove('hidden');


    //for taking backgroun Image
    const card = document.getElementById('card');
    card.style.backgroundImage = "url('https://BusinessCard.jpg')"; // Replace with your image URL
    card.style.backgroundSize = 'cover'; // Optional: cover the entire card
    card.style.backgroundPosition = 'center';

        // Show the card
    card.classList.remove('hidden');
});