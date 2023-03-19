// Code goes here

// Open menu items in a new tab
const menuLinks = document.querySelectorAll('.nav-item a');

menuLinks.forEach(link => {
  if (link.getAttribute('href').startsWith('#')) {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  } else {
    link.setAttribute('target', '_blank');
  }
});

// Show/hide menu items based on search input
const searchInput = document.getElementById('search-input');
const menuItems = document.querySelectorAll('.menu-item');

searchInput.addEventListener('input', (event) => {
  const searchValue = event.target.value.toLowerCase();
  menuItems.forEach(item => {
    const itemName = item.querySelector('.item-name').innerText.toLowerCase();
    if (itemName.includes(searchValue)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
});

