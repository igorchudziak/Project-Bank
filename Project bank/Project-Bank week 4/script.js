
//Inloggen pagina
const gebruikersnamen = ["Muhamed Ali", "Furkan Ura", "Kete Pitu"];
const wachtwoorden = ["M#gHS902jT1", "TcH`698O6!$#", "9cKT6_a65>Nl"];
const gebruikersnaam = document.getElementById('gebruiksnaam');
const wachtwoord = document.getElementById('wachtwoord');

function validateLogin(inputGebruikersnaam, inputWachtwoord) {
    for (let i = 0; i < gebruikersnamen.length; i++) {
      if (inputGebruikersnaam === gebruikersnamen[i] && inputWachtwoord === wachtwoorden[i]) {
        return true;
      }
    }
    return false;
  }
// Onclick functie
  function handleLogin() {
    const gebruikersnaam = document.getElementById('gebruikersnaam').value;
    const wachtwoord = document.getElementById('wachtwoord').value;

    if (validateLogin(gebruikersnaam, wachtwoord)) {
      alert('Login Successful!');
      window.location.href = 'dashboard.html';
    } else {
      alert('Kan niet inloggen :(');
    }
  }

//Dashboard pagina
const addRekening = document.getElementById('addRekening');
const formContainer = document.getElementById('formContainer');
const createRekening = document.getElementById('createRekening');
const rekeningenContainer = document.getElementById('rekeningen');

addRekening.addEventListener('click', () => {
formContainer.classList.toggle('hidden');
});

createRekening.addEventListener('click', () => {
const rekeningNaamInput = document.getElementById('rekeningNaam');
const rekeningNaam = rekeningNaamInput.value.trim();

if (rekeningNaam) {
// Maak nieuwe rekening element
const newrekening = document.createElement('div');
newrekening.classList.add('rekening');
newrekening.innerHTML = 
`<span>${rekeningNaam}</span>
<span>€0.00</span>`;

rekeningenContainer.appendChild(newrekening);

rekeningNaamInput.value = '';
formContainer.classList.add('hidden');
} else {
alert('Er is iets misgegaan.');
}
});

//Geld overschrijven

/*
let balance = 1500;

document.getElementById("transferButton").addEventListener("click", function () {
    const amountInput = document.getElementById("amount").value;
    const messageDiv = document.getElementById("message");
    const amount = parseFloat(amountInput);

    messageDiv.innerHTML = "";
    messageDiv.className = "message";

    if (isNaN(amount) || amount <= 0) {
        messageDiv.textContent = "Voer een geldig bedrag in.";
        messageDiv.classList.add("error");
        messageDiv.style.display = "block";
        return;
    }

    if (amount <= balance) {
        balance -= amount;
        messageDiv.textContent = `€${amount.toFixed(2)} is succesvol overgeschreven van Betaalrekening naar Spaarrekening.`;
        messageDiv.classList.add("success");
        messageDiv.style.display = "block";
    } else {
        messageDiv.textContent = "Onvoldoende saldo voor deze transactie.";
        messageDiv.classList.add("error");
        messageDiv.style.display = "block";
    }
});
*/