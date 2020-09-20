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
 // the id of nav (global variable)
 const NAV = document.getElementById('navbar__list');
 const SEC = document.querySelectorAll('section');
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

const navigationBuilding = () => {

    let navcontainer = '';
    // section's loop
    SEC.forEach(section => {

       /*  const secID = section.id;
        const secDataNav = section.dataset.nav; */

        navcontainer += `<li><a class="menu__link" href="#${section.id}">${section.dataset.nav}</a></li>`;

    });
    // appear elements 
    NAV.innerHTML = navcontainer;


};

navigationBuilding();

// Add class 'active' to section when near top of viewport


// taking the largest value (less,equal,large) of the number but we taking the ceil value for section
const sub = (section) => {
    return Math.ceil(section.getBoundingClientRect().top);
};



// removing class that's active... to adding after that the new active class for sec
const removingActiveClass = (section) => {
    section.classList.remove('your-active-class');
    //taking color from style.css file
    section.style.cssText = "background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)";
    //to remove active sec from navbar
   // secId = section.id.slice(7,8) -1;
    NAV.childNodes[section.id.slice(7,8) -1].style.cssText = "background-color: #6465B0;";
};



// adding  new class that's active...
const addingActiveClass = (conditionalsec, section) => {
    if(conditionalsec){
        section.classList.add('your-active-class');
        //saving color after scroll fn.
        section.style.cssText = "background-color: #9DCFBF;";
       //to add active sec to navbar
        //secId = section.id.slice(7,8) -1;
        NAV.childNodes[section.id.slice(7,8) -1].style.cssText = "background-color: #9DCFBF;";
        //console.log(section.id.slice(7,8));
    };
};



//implementating the actual active fn. for sec

const ActiviateSec = () => {
    SEC.forEach(section => {
        const elementsub = sub(section);

        elementport = () => elementsub < 160 && elementsub >= -160;

        removingActiveClass(section);
        addingActiveClass(elementport(),section);
    });
};

window.addEventListener('scroll' , ActiviateSec);




// Scroll to anchor ID using scrollTO event
//SEC is global var
const scrollSec = () => {

    const scrollNavs = document.querySelectorAll('.navbar__menu a');
    scrollNavs.forEach(scrollNav => {
        scrollNav.addEventListener('click', () => {
            for (j = 0 ; j< SEC ; j++){
                SEC[j].addEventListener("click",sectionScroll(scrollNav));
            }
        });
    });

};

scrollSec();

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


//to make active sec innavbar but not working yet >> try it again later
// taking the largest value (less,equal,large) of the number but we taking the ceil value for section

/* const subnav = (navbar__list) => {
    return Math.ceil(navbar__list.getBoundingClientRect().top);
};

// removing class that's active... to adding after that the new active class for nav
const removingActiveClassNav = (navbar__list) => {
    navbar__list.classList.remove('your-active-class');
    //taking color from style.css file
    navbar__list.style.cssText = "background-color: #6465B0";
};

// adding  new class that's active...for nav
const addingActiveClassNav = (conditionalnav, navbar__list) => {
    if(conditionalnav){
        navbar__list.classList.add('your-active-class');
        //saving color after scroll fn.
        navbar__list.style.cssText = "background-color: gray;";
    };
};


//implementating the actual active fn. for Nav

 const ActiviateNav = () => {
    NAV.forEach(navbar__list => {
        const elementsubnav = subnav(navbar__list);

        elementportnav = () => elementsubnav < 160 && elementsubnav >= -160;

        removingActiveClassNav(navbar__list);
        addingActiveClassNav(elementportnav(),navbar__list);
    });
};

window.addEventListener('scroll' , ActiviateNav); 
 */