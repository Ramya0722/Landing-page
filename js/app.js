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

function getActiveElem() {
  let isInViewport = function(elem) {
    let bounding = elem.getBoundingClientRect();
    return (
      bounding.top <= 50 &&
      bounding.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <=
        (window.innerWidth || document.documentElement.clientWidth)
    );
  };
}
// Add class 'active' to section when near top of viewport
function setActive(){
  window.addEventListener("scroll", function(event){
    let section = getActiveElem();
    section.classList.add("your-active-class");
    for (let item of sections) {
      if(item.id !=section.id & item.classList.contains("your-active-class")){
        item.classlist.remove("your-active-class");
      }
    }
    const active = document.querySelector('li[data-nav="' + section.id + '"]');
        active.classList.add("active__link");
        // remove from other headers
        const headers = document.querySelectorAll(".menu__link");
        for (let item of headers) {
            console.log(item);
            if (item.dataset.nav != active.dataset.nav & item.classList.contains("active__link")) {
                item.classList.remove("active__link");
            }
          };
  });
};

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
getActiveElem();