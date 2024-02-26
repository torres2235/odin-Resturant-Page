import _ from 'lodash';
import home from './/home.js';
import menu from './menu.js';
import contact from './contact.js';
import './style.css';

const content = document.getElementById("content");
const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const contactBtn = document.getElementById("contact");

home(content); //initally load page

function removeContent() {
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    };
}

homeBtn.addEventListener('click', () => {
    removeContent();
    home(content); 
});

menuBtn.addEventListener('click', () => {
    removeContent();
    menu(content);
});

contactBtn.addEventListener('click', () => {
    removeContent();
    contact(content);
});