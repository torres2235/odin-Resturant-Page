import _ from 'lodash';
import home from './/home.js';
import menu from './/menu.js';
import about from './/about.js';

const content = document.getElementById("content");
const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const aboutBtn = document.getElementById("about");

home(content); //initally load page

homeBtn.addEventListener('click', () => {
    home(content);
});

menuBtn.addEventListener('click', () => {
    menu(content);
});

aboutBtn.addEventListener('click', () => {
    about(content);
});