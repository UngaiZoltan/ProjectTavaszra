// Guests number start

const guests = document.getElementById('guests');
const warning = document.getElementById('warning');

guests.defaultValue = 1;

guests.addEventListener('input', () => {
    if (guests.value <= 0) {
        warning.innerText = 'A vendégek száma nem lehet kisebb vagy egyenlő 0-nál!';
        setTimeout(() => {
            warning.innerText = '';    
        }, 3000);
        guests.value = 1;
    } else if (guests.value > 0 && guests.value > 6) {
        warning.innerText = '6 főnél többet nem tudunk egyszerre fogadni!';
        setTimeout(() => {
            warning.innerText = '';
        }, 3000);
        guests.value = 6;
    } else {
        warning.innerText = '';
    }
});

// Guests number end

// Arrival time start

const arrivalDate = document.getElementById('arrival-date').value;
const departureDate = document.getElementById('departure-date').value;

const submit = document.getElementById('submit');

const startDate = new Date(arrivalDate);
const endDate = new Date(departureDate);
const actualDate = new Date();

const arrivalWarning = document.getElementById('arrival-warning');
const departureWarning = document.getElementById('departure-warning');

arrivalDate.addEventListener('input', () => {
    if (startDate < actualDate) {
        arrivalWarning.innerText = 'Az érkezési idő nem lehet a múltban!'
        setTimeout(() => {
            arrivalWarning.innerText = '';
        }, 2000);
        arrivalDate.value = '';
        return;
    }
});

departureDate.addEventListener('input', () => {
    if (endDate < startDate) {
        departureWarning.innerText = 'A távozás nem lehet hamarabb, mint az érkezés';
        setTimeout(() => {
            departureWarning.innerText = '';
        }, 2000);
        departureDate.value = '';
        return;
    }
});

// Arrival time end