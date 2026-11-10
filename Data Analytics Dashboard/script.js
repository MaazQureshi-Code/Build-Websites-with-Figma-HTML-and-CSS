// 1. Get all the elements we need
const menuToggle = document.querySelector('.menu-toggle');
const menuItems = document.querySelector('.menu-items');
const arrowBtn = document.querySelector('.arrow'); // <--- NEW

// 2. Open/Close the menu when clicking the Hamburger button
menuToggle.addEventListener('click', () => {
    menuItems.classList.toggle('active');
    menuToggle.classList.toggle('is-open'); 
});

// 3. Close the menu when clicking the Arrow button
arrowBtn.addEventListener('click', () => {
    // Remove the active class from the menu to hide it
    menuItems.classList.remove('active');
    
    // Remove the is-open class from the hamburger so it changes back to the "hamburger" icon
    menuToggle.classList.remove('is-open'); 
});