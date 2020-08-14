/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navbarlist = document.getElementById("navbar__list")
const navElements = document.querySelectorAll("section")
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
navElements.forEach(list => {
  const navbarlistElements = `<li class='menu__link ${list.className}' data-link=${list.id}><a href="#${list.id}"> ${list.dataset.nav}</li>`
  navbarlist.insertAdjacentHTML("beforeend", navbarlistElements)
})


// Scroll to anchor ID using scrollTO event
function scrollToClick(){
  navbarlist.addEventListener("click" , function(event){
    const elementToscroll = document.getElementById(event.target.dataset.nav)
    elementToscroll.scrollIntoView({block: 'end', behavior: 'smooth'});
  });
};


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click
scrollToClick();

// Set sections as active
