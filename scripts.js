// @ts-check

import { state } from "./state.js";
console.log("It works");

const list =document.querySelector('[data-list]')
const isHtmlElement = list instanceof HTMLElement;

if (!isHtmlElement) {
    throw new Error('"data-list" attribute not found in HTML');
}

const preview = document.createElement('li');
preview.className = "task";

preview.innerHTML = /*html */ `

`;