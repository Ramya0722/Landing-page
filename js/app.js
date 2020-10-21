
*/
const navbarlist = document.getElementById("navbar__list")
const navElements = document.querySelectorAll("section")

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



// Scroll to section on link click
scrollToClick();

// Set sections as active
