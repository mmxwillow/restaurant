import './style.css';
import { printHeader } from './template.js';
import { printHomepageContent } from './homepage.js';
import { printMenu } from './menu.js';

printHeader();
printHomepageContent();


let home = document.getElementById("home");
let menu = document.getElementById("menu");
let contact = document.getElementById("contact");
let content = document.getElementById("content");

home.addEventListener('click', () => {
    let main = document.getElementById("main");
    main.remove();
    printHomepageContent();
});
menu.addEventListener('click', () => {
    let main = document.getElementById("main");
    main.remove();
    printMenu();
})