// import 'bootstrap';
import 'waypoints/lib/noframework.waypoints';
import 'slick-carousel/slick/slick';
import mapboxgl from 'mapbox-gl';


mapboxgl.accessToken = 'pk.eyJ1IjoiYWxleC1kb3NzYW1lciIsImEiOiJja2c5ZGZsZDAwbXFvMnlta2tpMTdsMWppIn0.DTFDSkbKV0eKDHtOek73Vg';
const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/alex-dossamer/ckg9uiycp0exr19s0j37tog2q', // stylesheet location
center: [-72.729, 41.493], // starting position [lng, lat]
zoom: 8 // starting zoom
});

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