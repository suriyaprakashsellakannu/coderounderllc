const contactBtn = document.getElementById('contactBtn');
const contactModal = document.getElementById('contactModal');
const closeModal = document.getElementById('closeModal');

contactBtn.addEventListener('click', function(event) {
	event.preventDefault();
	contactModal.style.display = 'flex';
});

closeModal.addEventListener('click', function() {
	contactModal.style.display = 'none';
});

window.addEventListener('click', function(event) {
	if (event.target === contactModal) {
		contactModal.style.display = 'none';
	}
});