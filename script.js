// Récupérer les éléments
const form = document.getElementById('reservationForm');
const resultatDiv = document.getElementById('resultat');

// Quand on soumet le formulaire
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Empêche le rechargement de la page
  
  // Récupérer les valeurs des champs
  const adults = document.getElementById('adults').value;
  const children = document.getElementById('children').value;
  const rooms = document.getElementById('rooms').value;
  const workTrip = document.getElementById('work-trip').checked ? 'Oui' : 'Non';

  // Mettre à jour les informations dans la div à droite
  document.getElementById('resAdults').textContent = adults;
  document.getElementById('resChildren').textContent = children;
  document.getElementById('resRooms').textContent = rooms;
  document.getElementById('resWork').textContent = workTrip;

  // Afficher la div des résultats
  resultatDiv.style.display = 'block';
});
