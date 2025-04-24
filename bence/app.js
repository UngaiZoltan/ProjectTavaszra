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

// Arrival & Departure time start

const arrivalInput = document.getElementById('arrival-date');
const departureInput = document.getElementById('departure-date');
const form = document.getElementById('form');

const arrivalWarning = document.getElementById('arrival-warning');
const departureWarning = document.getElementById('departure-warning');

form.addEventListener('input', () => {
    const startDate = new Date(arrivalInput.value);
    const endDate = new Date(departureInput.value);
    const actualDate = new Date();

    if (arrivalInput.value && startDate < actualDate.setHours(0, 0, 0, 0)) {
        arrivalWarning.innerText = 'Az érkezési idő nem lehet a múltban!';
        setTimeout(() => {
            arrivalWarning.innerText = '';
        }, 3000);
        arrivalInput.value = '';
    }

    if (arrivalInput.value && departureInput.value && endDate < startDate) {
        departureWarning.innerText = 'A távozás nem lehet hamarabb, mint az érkezés!';
        setTimeout(() => {
            departureWarning.innerText = '';
        }, 3000);
        departureInput.value = '';
    }
});

// Arrival & Departure time end

// Sikeres Foglalás start

/* const successName = document.getElementById('success-name');
const successEmail = document.getElementById('success-email');
const successRoom = document.getElementById('success-room');
const successGuests = document.getElementById('success-guests');
const successArrive = document.getElementById('success-arrive');
const successDeparture = document.getElementById('success-departure');
const successPickup = document.getElementById('success-pickup');
const successRequest = document.getElementById('success-request');


let nameValue = document.getElementById('name');
let email = document.getElementById('email');
let room = document.getElementById('roomtype');
let guestNumber = document.getElementById('guests');
let accept = document.getElementById('accept');
let deny = document.getElementById('deny');
let request = document.getElementById('special-request');

successName = `${nameValue}`;
successEmail = `${email}`;
successRoom = `${room}`;
successGuests = `${guestNumber}`;
successArrive = `${arrivalInput}`;
successDeparture = `${departureInput}`;
successPickup = `${accept}`;
successRequest = `${request}`; */

// Sikeres Foglalás end