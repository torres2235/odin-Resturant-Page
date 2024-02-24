import _ from 'lodash';
import home from './/home.js';
import menu from './/menu.js';
import contact from './contact.js';

const content = document.getElementById("content");
const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const contactBtn = document.getElementById("contact");

home(content); //initally load page

homeBtn.addEventListener('click', () => {
    home(content); 
});

menuBtn.addEventListener('click', () => {
    menu(content);
});

contactBtn.addEventListener('click', () => {
    contact(content);
});