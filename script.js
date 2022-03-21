const dateNow = document.querySelector('header .date');
setInterval(function() {
    let date = new Date();
    let annee = date.getFullYear();
    let mois = date.getMonth() + 1;
    let jour = date.getDate();
    let heure = date.getHours();
    let minute = date.getMinutes();
    let seconde = date.getSeconds();
    let now = "Aujourd'hui le " + jour + "/" + mois + "/" + annee + " à " + heure + "h " + minute + "mn " + seconde + "s";
    dateNow.textContent = now;
}, 1000)

document.getElementById('carousel-arrow-next').addEventListener('click',carouselSwipe,false);
document.getElementById('carousel-arrow-prev').addEventListener('click',carouselSwipe,false);

/**
 * Switch header carousel to next image (swipe right)
 */
function carouselSwipe() {
	
    // Récupère les numéros de l'ancienne et la nouvelle image
    var currentImg = document.getElementsByClassName('carousel-img-displayed')[0].id.substring(9);
	var newImg = parseInt(currentImg);
    
    // Gestion du début et de la fin de la liste d'images
	if (this.id == 'carousel-arrow-next') {
        newImg++;
        if (newImg >= document.getElementsByClassName('carousel-img').length) {
            newImg = 0;
        }
	} else if (this.id == 'carousel-arrow-prev') {
        newImg--;
        if (newImg<0) {
            newImg = document.getElementsByClassName('carousel-img').length-1;
        }
    }
    
	// Disparition progressive de l'ancienne image
    document.getElementById('carousel-'+currentImg).className = 'carousel-img carousel-img-hidden';
	
    // Apparition progressive de la nouvelle image
    var displayedCarousel = document.getElementById('carousel-'+newImg);
	displayedCarousel.className = 'carousel-img carousel-img-hidden';
	setTimeout(function() {
		displayedCarousel.className = 'carousel-img carousel-img-displayed';
	},20);
    
    // Disparition totale de l'ancienne image
	setTimeout(function() {
		document.getElementById('carousel-'+currentImg).className = 'carousel-img carousel-img-noDisplay';
	},520);
    
}



const hamburger = document.querySelector(".hamburger");
const MenuHamberger = document.querySelector(".MenuHamberger");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  MenuHamberger.classList.toggle("active");
})