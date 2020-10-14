// import 'bootstrap';
import 'waypoints/lib/noframework.waypoints';
import 'slick-carousel/slick/slick';

$(document).ready(() => {
    $('.banner-carousel').slick({
        autoplay: true,
        arrows: false,
        dots: false,
        draggable: false,
        swipe: false,
        pauseOnFocus: false,
        pauseOnHover: false
    });
});

const navbar = document.getElementById('navbar');
const wrapper = document.querySelector('.wrapper.content');

const scrollingUpWaypoint = new Waypoint({
    element: wrapper,
    handler: (direction) => setNavPositioning(direction),
    offset: navbar.offsetHeight,
});

const setNavPositioning = (direction) => {  
    navbar.classList.toggle('fixed-nav');
};