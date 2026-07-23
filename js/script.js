function updateDateTime() {
    const now = new Date();
    
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = now.getFullYear();
    }
    
    const options = { 
        weekday: 'short', 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric',
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: true 
    };
    
    const formattedDateTime = now.toLocaleString(undefined, options);
    
    const clockElement = document.getElementById('live-clock');
    if (clockElement) {
        clockElement.textContent = formattedDateTime;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateDateTime();
    setInterval(updateDateTime, 1000);
});


const range = document.getElementById("priceRange");
const priceValue = document.getElementById("priceValue");

range.value = 2500;

range.oninput = function () {
priceValue.innerHTML = this.value;
}


const modal = new bootstrap.Modal(document.getElementById('cartModal'));

document.querySelectorAll('.addCartBtn').forEach(button => {

button.addEventListener('click', function(){

const productName = this.dataset.product;

document.getElementById('modalProductName').innerHTML =
"<strong>" + productName + "</strong> has been added to your cart.";

modal.show();

});

});