// let hamburger = document.getElementById('hamburger')
//  hamburger.addEventListener('click', () => {
//     hamburger.classList.toggle('is-active')
//  })
window.onload = function () {
	document.body.classList.add('loaded_hiding')
	window.setTimeout(function () {
		document.body.classList.add('loaded')
		document.body.classList.remove('loaded_hiding')
	}, 500)
}
const mainHeader = document.querySelector('.main-header')
const sideMenu = document.querySelector('.side-menu')
const sideMenuItems = document.querySelectorAll('.side-menu-item')
const sideMenuCloseDiv = document.querySelector('.side-menu-close-div')

const HEADER_HEIGHT = 70
const TOP_DISTANCE_TO_HIDE_THE_HEADER = 330
const SIDE_MENU_WIDTH = 1000

const DEFAULT_TRANSITION_TIME = 350

// SHOW/HIDE MAIN HEADER ON SCROLL
const showMainHeader = () => (mainHeader.style.top = '0')
const hideMainHeader = () => (mainHeader.style.top = `-${HEADER_HEIGHT}px`)
let previousScrollPosition = window.pageYOffset

const toggleMainHeader = (window.onscroll = () => {
	let currentScrollPosition = window.pageYOffset
	if (
		previousScrollPosition > currentScrollPosition ||
		currentScrollPosition < TOP_DISTANCE_TO_HIDE_THE_HEADER
	)
		showMainHeader()
	else hideMainHeader()
	previousScrollPosition = currentScrollPosition
})

// TOGGLE SIDE MENU
let sideMenuState = 0
const openSideMenu = () => {
	sideMenu.style.left = '0'
	setTimeout(
		() => (sideMenuCloseDiv.style.background = 'rgba(0, 0, 0, 0.6)'),
		DEFAULT_TRANSITION_TIME
	)
}

const closeSideMenu = () => {
	sideMenuCloseDiv.style.background = 'rgba(0, 0, 0, 0)'
	setTimeout(
		() => (sideMenu.style.left = `-${SIDE_MENU_WIDTH}px`),
		DEFAULT_TRANSITION_TIME
	)
	sideMenuState = 0
}

const toggleSideMenu = (n) => {
	sideMenuState += n
	switch (sideMenuState) {
		case 1:
			openSideMenu()
			break
		default:
			closeSideMenu()
	}
}

const closeSideMenuSelectingItem = (() =>
	sideMenuItems.forEach((item) =>
		item.addEventListener('click', closeSideMenu)
	))()
sideMenuCloseDiv.addEventListener('click', () => {
	closeSideMenu()
	qwe.classList.remove('bur')
})

// let offset = 0
// const but = document.querySelector('.slide-container')
// const image3 = document.querySelector('.block_3_box2')
// const next = document.querySelector('.slide-but-next')

// next.addEventListener('click', () => {
// 	offset = offset + 1000
// 	if (offset > 3000) {
// 		offset = 0
// 	}
// 	but.style.left = -offset + 'px'
// })

// const prev = document.querySelector('.slide-but-prev')

// prev.addEventListener('click', () => {
// 	offset = offset - 1000
// 	if (offset < 0) {
// 		offset = 3000
// 	}
// 	but.style.left = -offset + 'px'
// })

const block_but = document.querySelector('.block_4_but')
const block_4_p_3 = document.querySelector('.block_4_p_3')
const block_4_p_2 = document.querySelector('.block_4_p_2')

block_but.addEventListener('click', () => {
	if (block_4_p_3.style.display === 'none') {
		block_4_p_3.style.display = 'block'
		block_4_p_2.style.margin = '0'
	} else {
		block_4_p_3.style.display = 'none'
		block_4_p_2.style.marginBottom = '50px'
	}
})

$(document).ready(function () {
	$('.menuIcon').click(function () {
		if ($('.NavigationSlideOut').css('right') == '-350px') {
			$('.NavigationSlideOut').animate({ right: '0px' }, 350)
		} else {
			$('.NavigationSlideOut').animate({ right: '-350px' }, 350)
		}
	})
	$(document).click(function () {
		if (
			$('.NavigationSlideOut').css('right') == '0px' &&
			$('.menuIcon').hasClass('on')
		) {
			$('.NavigationSlideOut').animate({ right: '-350px' }, 350)
			$('.menuIcon').toggleClass('on')
		}
	})
	$('.menuIcon').click(function () {
		$(this).toggleClass('on')
	}) // animation = -> x

	// $('.single-item').slick({
	// 	infinite: true,
	// 	dots: true,
	// 	slidesToShow: 3,
	// 	slidesToScroll: 1,
	// 	arrow: false,
	// })
	$('.single-items').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: false,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
	})
	AOS.init()
})

new Swiper('.vertical', {})

var swiper = new Swiper('.coverflow', {
	effect: 'coverflow',
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: 'auto',
	coverflowEffect: {
		rotate: 50,
		stretch: 0,
		depth: 100,
		modifier: 1,
		slideShadows: true,
	},
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	pagination: {
		el: '.swiper-pagination',
	},
})
let qwe = document.querySelector('.main-header-side-menu-button')
let rty = document.querySelectorAll('.stripes')
qwe.addEventListener('click', () => {
	qwe.classList.toggle('bur')
})

let animate = document.querySelectorAll('.menu-animate')
let menu_list = document.querySelector('.menu_list')
let menu_box = document.querySelector('.menu_box')
let menu_button = document.querySelector('.menu_button')

animate.forEach((btn) =>
	btn.addEventListener('click', () => {
		menu_list.style.display = 'flex'
		menu_box.style.display = 'none'
	})
)

menu_button.onclick = () => {
	menu_list.style.display = 'none'
	menu_box.style.display = 'grid'
}
let contactText = document.querySelector('.contact-text')
let contactEmail = document.querySelector('.contact-email')
let send = document.getElementById('send_form')

send.onclick = (event) => {
	event.preventDefault()
	if (contactText.value === '' && contactEmail.value === '') {
		tata.warn('Обьязательно заполните формы', '', {
			position: 'tl',
			duration: 5000,
			animate: 'slide',
		})
	} else if (contactText.value === '') {
		tata.warn('Обьязательно заполните форму Name', '', {
			position: 'tl',
			duration: 5000,
			animate: 'slide',
		})
	} else if (contactEmail.value === '') {
		tata.warn('Обьязательно заполните форму E-mail', '', {
			position: 'tl',
			duration: 5000,
			animate: 'slide',
		})
	} else {
		tata.success('Вы успешно заполнили форму', '', {
			position: 'tr',
			duration: 5000,
			animate: 'slide',
		})
	}
}
let person = document.querySelector('.person')
let data = document.querySelector('.data')
let time = document.querySelector('.time')
console.log(person)
document.querySelector('.selbtn').onclick = (event) => {
	event.preventDefault()
	if (data.value === '') {
		tata.warn('Укажите дату', '', {
			position: 'tl',
			duration: 5000,
			animate: 'slide',
		})
	} else {
		tata.success(
			`Вы забронировали место на ${person.value}, в ${data.value} числа, в ${time.value} часов`,
			'',
			{
				position: 'tr',
				duration: 5000,
				animate: 'slide',
			}
		)
	}
}

// let vyvod = document.getElementById('vyvod')
// let plus = document.getElementById('plus')
// let minus = document.getElementById('minus')
// let count = 0
// vyvod.innerHTML = count

// plus.addEventListener('click', () => {
// 	count = count + 1
// 	vyvod.innerHTML = count
// })

// minus.addEventListener('click', () => {
// 	if (count >= 1) {
// 		count = count - 1
// 		vyvod.innerHTML = count
// 	} else {
// 		vyvod.innerHTML = count
// 	}
// })

// tata.error('Вы успешно заполнили форму', 'CSSScript.Com', {
// 	position: 'tr',
// 	duration: 5000,
// 	animate: 'slide',
// })
