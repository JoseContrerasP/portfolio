AOS.init();

AOS.init({
	offset: 120,
	delay: 0,
	duration: 700,
	easing: "ease",
	once: true,
	mirror: false,
	anchorPlacement: "top-bottom",
})

document.querySelectorAll(".copy-link").forEach(copyLinkContainer => {
	const inputField = copyLinkContainer.querySelector(".copy-link-input");
	const copyButton = copyLinkContainer.querySelector(".copy-link-button");

	inputField.addEventListener("focus", () => inputField.select());
	copyButton.addEventListener("click", () => {
		const text = inputField.value;

		inputField.select();
		navigator.clipboard.writeText(text);

		inputField.value = "Copied!";
		setTimeout(() => inputField.value = text, 2000)
	})
});


// buttons
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const courseCards = document.querySelectorAll('.course-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover clase active de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Agregar clase active al botón clickeado
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            courseCards.forEach(card => {
                if (filterValue === 'all') {
                    card.style.display = 'block';
                } else {
                    if (card.classList.contains(filterValue)) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });
});