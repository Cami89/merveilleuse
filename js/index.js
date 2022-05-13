// Ouverture nav burger

const menu = document.querySelector(".top-nav-ul");
const menuItems = document.querySelectorAll(".top-nav-link");
const burger= document.querySelector(".burger");
const closeIcon= document.querySelector(".closeIcon");
const burgerIcon = document.querySelector(".burgerIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    burgerIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    burgerIcon.style.display = "none";
  }
}

burger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)

// changement de couleur nav on scroll



// Retour au top

    //Get the button:
mybutton = document.getElementById("top-btn");

    // When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}

    // When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Hauteur VH

  function maFonction()
  {
  var w=window.innerWidth;
  var h=window.innerHeight;
  
  }
