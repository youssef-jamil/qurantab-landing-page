import { clickLabelHandler, observeElement } from "./utils.js";
const labelElement = document.querySelectorAll("label");
const sectionElements = document.querySelectorAll("section");

labelElement.forEach(clickLabelHandler);

observeElement(sectionElements);
