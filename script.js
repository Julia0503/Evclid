/* burger*/

const burger = document?.querySelector('[data-burger]');
const nav = document?.querySelector('[data-nav]');
const navItems = nav?.querySelectorAll('a');
const body = document.body;
const header = document?.querySelector('.header');
const headerHeight = header.offsetHeight;
console.log(headerHeight)
document.querySelector(':root').style.setProperty('--header-height', `${headerHeight}px`);

burger?.addEventListener('click', () => {
  body.classList.toggle('stop-scroll');
  burger?.classList.toggle('burger--active');
  nav?.classList.toggle('nav--visible');
});

navItems.forEach(el => {
  el.addEventListener('click', () => {
    body.classList.remove('stop-scroll');
  burger?.classList.remove('burger--active');
  nav?.classList.remove('nav--visible');
  });
});

/*accordion*/

document.addEventListener("DOMContentLoaded", function() {
  let acc = new Accordion('.accordion__list', {
  duration: 500,
  elementClass:	'accordion__item',
  triggerClass: 'accordion__top',
  panelClass: 'accordion__bottom',
  showMultiple: false,
  openOnInit: [-1],
    collapse: true
});
})

/*document.addEventListener('DOMContentLoaded', () => {
	const accordions = document.querySelectorAll('.question');

	accordions.forEach(el => {
		el.addEventListener('click', (e) => {
			const self = e.currentTarget;
			const control = self.querySelector('.heading');
			const content = self.querySelector('.question__content');

			self.classList.toggle('open');

			// если открыт аккордеон
			if (self.classList.contains('open')) {
				control.setAttribute('aria-expanded', true);
				content.setAttribute('aria-hidden', false);
				content.style.maxHeight = content.scrollHeight + '10px';
			} else {
				control.setAttribute('aria-expanded', false);
				content.setAttribute('aria-hidden', true);
				content.style.maxHeight = null;
			}
		});
	});
});*/

/*swiper*/


const container = document.querySelector(".container")
const swiper = new Swiper('.hero__swiper', {
  // Default parameters

  speed: 300,
  pagination: {
    el: '.hero__pagination',
    type: 'bullets',
    clickable: true
  },

  a11y: {
    paginationBulletMessage: 'Следующий слайд'
  }

})

/*const swiper = new Swiper('.swiper', {


  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',

  },
});*/

/*tabs*/

let tabsBtn = document.querySelectorAll('.how-step-link');
let tabsItem = document.querySelectorAll('.how-blocks');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){ btn.classList.remove('how-step-link--active')});
    e.currentTarget.classList.add('how-step-link--active');

    tabsItem.forEach(function(element){ element.classList.remove('how-blocks--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('how-blocks--active');
  });
});


/*search*/

document.addEventListener('DOMContentLoaded', (e) => {
  document.getElementById('open-search-form').addEventListener('click', (e) => {
    document.getElementById('search-form').classList.add('search-form_show')
  })

  document.getElementById('search-form-close').addEventListener('click', (e) => {
    document.getElementById('search-form').classList.remove('search-form_show')
  })

  document.getElementById('search-form').addEventListener('submit', (e) => {
    e.preventDefault()

})

})

