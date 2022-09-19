const accordions = document.querySelectorAll(`.faq__accordion-box`)
const accordionBtns = document.querySelectorAll(`.faq__accordion-btn`)

const handleAccordion = e => {
	if (e.target.closest('.faq__accordion-box').classList.contains(`active`)) {
		e.target.closest('.faq__accordion-box').classList.remove(`active`)
	} else {
		accordions.forEach(accordion => {
			accordion.classList.remove(`active`)
		})
		e.target.closest('.faq__accordion-box').classList.add(`active`)
	}
}

accordionBtns.forEach(btn => {
	btn.addEventListener(`click`, handleAccordion)
})
