// Change background color on button click
const button = document.querySelector('#button');
const body = document.querySelector('body');

button.addEventListener('click', () => {
  body.style.backgroundColor = 'pink';
});

// Display current date and time
const dateDisplay = document.querySelector('#date-display');

setInterval(() => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  dateDisplay.innerHTML = formattedDate;
}, 1000);

// Add a menu item to the cart
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const menuItem = event.target.dataset.menuItem;
    console.log(`Added ${menuItem} to cart!`);
    // Add code to update cart here
  });
});
