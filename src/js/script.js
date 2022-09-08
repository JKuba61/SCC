//nav
const burgerBtn = document.querySelector(`.burger-btn`)
const mobileNav = document.querySelector(`.nav--mobile__dropdown`)
//footer year
const footerYear = document.querySelector('.footer__year')
//cookies fix?
document.cookie = 'SameSite=None; Secure'

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

burgerBtn.addEventListener(`click`, () => {
	mobileNav.classList.toggle(`show`)
})
handleCurrentYear()
