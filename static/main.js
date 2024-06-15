AOS.init();

AOS.init({
	offset: 120,
	delay: 0,
	duration: 700,
	easing: "ease",
	once: false,
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
