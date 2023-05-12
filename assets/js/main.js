/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu')
      navToggle = document.getElementById('nav-toggle')
      navClose =document.getElementById('nav-close')
   

      if(navToggle){
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu')
            console.log("first")
        })
      }

      if(navClose){
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu')
            console.log("first")
        })
      }

/*=============== REMOVE MENU MOBILE ===============*/

/* this is import  */
const navLink = document.querySelectorAll('.nav__link')
const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(N => N.addEventListener('click', linkAction))







/*=============== ADD BLUR TO HEADER ===============*/


/*=============== EMAIL JS ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
