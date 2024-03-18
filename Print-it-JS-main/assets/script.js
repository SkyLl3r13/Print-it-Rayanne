const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let current_point = 0;

const arrow_left = document.querySelector(".arrow_left");
const arrow_right = document.querySelector(".arrow_right");
const dotsContainer = document.querySelector(".dots");
let banner = document.querySelector('.banner-img');

function updateDots() {
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    if (index === current_point) {
      dot.classList.add('dot_selected');
    } else {
      dot.classList.remove('dot_selected');
    }
  });
}

arrow_left.addEventListener("click", function() {
  current_point = (current_point === 0) ?slides.length -  1 : current_point - 1;
  updateDots();
  banner.src = "./assets/images/slideshow/" + slides[current_point].image
}
);

arrow_right.addEventListener("click", function() {
  current_point = (current_point === slides.length - 1) ? 0 : current_point + 1; // Si slide actuel et en dernière position, sinon incrémenté de 1 pour slide suivant
  updateDots();
  banner.src = "./assets/images/slideshow/" + slides[current_point].image
});

for (let i = 0; i < slides.length; i++) { // a chaque itération i est incrémenté de 1
	const dot = document.createElement('div'); // ajoute dot a chaque itération
	dot.classList.add('dot'); 
	if (i === 0) { 
		dot.classList.add('dot_selected');
	}
	dot.addEventListener('click', function() {
	  current_point = i; // MAJ l'index de la diapo
	  updateDots();
	});
	dotsContainer.appendChild(dot);
}