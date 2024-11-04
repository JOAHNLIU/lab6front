function fetchUserData() {
    fetch('https://randomuser.me/api')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            displayUserData(user);
        })
        .catch(error => console.error('Помилка отримання даних:', error));
}

function fetchMultipleUsers(count) {
    fetch(`https://randomuser.me/api?results=${count}`)
        .then(response => response.json())
        .then(data => {
            const users = data.results;
            users.forEach(user => displayUserData(user));
        })
        .catch(error => console.error('Помилка отримання даних:', error));
}

function displayUserData(user) {
    const userContainer = document.getElementById('userContainer');
    const userCard = document.createElement('div');
    userCard.classList.add('user-card');
    userCard.innerHTML = `
        <img src="${user.picture.medium}" alt="User Picture">
        <p><strong>Телефон:</strong> ${user.cell}</p>
        <p><strong>Місто:</strong> ${user.location.city}</p>
        <p><strong>Поштовий індекс:</strong> ${user.location.postcode}</p>
        <p><strong>Email:</strong> ${user.email}</p>
    `;
    userContainer.appendChild(userCard);
}
