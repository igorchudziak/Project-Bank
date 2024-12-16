const gebruikersnamen = ["Ayden Waters", "Derek Hale", "Roberta Blaese", "Chloe Ferguson"];
const wachtwoorden = ["M#gHS902jT1", "TcH`698O6!$#", "9cKT6_a65>Nl", "/J)962<PfahE"];
const gebruikersnaam = document.getElementById('gebruiksnaam');
const wachtwoord = document.getElementById('wachtwoord');

function validateLogin(inputGebruikersnaam, inputWachtwoord) {
    for (let i = 0; i < gebruikersnamen.length; i++) {
      if (inputGebruikersnaam === gebruikersnamen[i] && inputWachtwoord === wachtwoorden[i]) {
        return true; // Login successful
      }
    }
    return false; // Login failed
  }

  function handleLogin() {
    const gebruikersnaam = document.getElementById('gebruikersnaam').value;
    const wachtwoord = document.getElementById('wachtwoord').value;

    if (validateLogin(gebruikersnaam, wachtwoord)) {
      alert('Login Successful!');
      window.location.href = 'dashboard.html';
    } else {
      alert('Login Failed!');
    }
  }