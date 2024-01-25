gsap.registerPlugin(TextPlugin, ScrollTrigger, ScrollSmoother, ScrollToPlugin);

//swiper
const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
  
	
	pagination: {
	  el: '.swiper-pagination',
	},
  
	
	navigation: {
	  nextEl: '.swp-button-next',
	  prevEl: '.swp-button-prev',
	},
  
	
	scrollbar: {
	  el: '.swiper-scrollbar',
	},
});



const title = document.getElementsByClassName('header__sub-title')

let counter = 0;

const strings =[
	"On my personal site",
	"I`m a web-developer",
	"Here are",
	"Magic of site creation",
	"Experience",
	"Quality",
	"Creativity",
]

function getString(){
	if (counter === 7 ) counter = 1;
	return string = strings[counter++];
}

gsap.to(title, {
	duration: 2,
	text: {
		value:"Welcome!",
		type: "diff",
	}
});

setInterval(() => {
	gsap.to(title, {
		duration: 2,
		text: {
			value:getString(),
		}
	});
}, 4000);

ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content',
	smooth:1.5,
	effects: true,
})

const idSec = ["#header", "#about", "#works","#skills", "#contacts"]

	document.querySelectorAll(".header__item").forEach((el, index )=> {
		el.addEventListener("click", () => {
			gsap.to(window, {duration: 1, scrollTo:{y: idSec[index], autokill: true}})
		})
	})

	
	


//hamburger animation
const hamburgerIcon = document.querySelector(".hamburger-icon");
const mobMenu = document.querySelector(".header__nav-mobile-menu");

hamburgerIcon.addEventListener("click", () => {
	hamburgerIcon.classList.toggle("active");
	mobMenu.classList.toggle("active");
	document.querySelectorAll(".header__item-mob").forEach((el, index )=> {
		el.addEventListener("click", () => {
			gsap.to(window, {duration: 1, scrollTo:{y: idSec[index], autokill: true}})
			
		})
	})
})



 