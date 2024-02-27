"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./style/style.css");
var galleryArray_ts_1 = require("./galleryArray.js");
var processArray_ts_1 = require("./processArray.js");
/**
 * Selectors
 */
var navButtons = document.querySelectorAll('.round-nav-button');
var startSection = document.querySelector('#startSection');
var gallerySection = document.querySelector('#gallerySection');
var flexGallerySection = document.querySelector('#flexGallerySection');
var flexProcessSection = document.querySelector('#flexProcessSection');
var processSection = document.querySelector('#processSection');
var contactSection = document.querySelector('#contactSection');
var backButton = document.querySelector('#backButton');
/* Form */
var formName = document.querySelector('#name');
var formMail = document.querySelector('#email');
var formMessage = document.querySelector('#message');
var formButton = document.querySelector('#formButton');
var errorMessage = document.querySelector('#errorMessage');
/**
 *
 * Variables
 */
var index = 0;
var clearIntervalSlideshow;
/**
 *
 * functions
 */
function checkOutContact() {
    if (startSection === null || contactSection === null || gallerySection === null || backButton === null || processSection === null) {
        return;
    }
    contactSection.classList.remove('hidden');
    processSection.classList.add('hidden');
    startSection.classList.add('hidden');
    gallerySection.classList.add('hidden');
    backButton.classList.remove('hidden');
}
function contactForm() {
    if (!formName || !formButton || !formMail || !formMessage || !errorMessage) {
        return;
    }
    if (formName.value === '' || formMail.value === '' || formMessage.value === '') {
        errorMessage.innerHTML = 'Formuläret är under uppbyggnad.';
    }
    else {
        formName.value = '';
        formMail.value = '';
        formMessage.value = '';
        errorMessage.innerHTML = '';
        console.log('skicka mail');
    }
}
function checkOutProcess() {
    if (startSection === null || contactSection === null || gallerySection === null || backButton === null || processSection === null) {
        return;
    }
    processSection.classList.remove('hidden');
    startSection.classList.add('hidden');
    gallerySection.classList.add('hidden');
    backButton.classList.remove('hidden');
    contactSection.classList.add('hidden');
    clearInterval(clearIntervalSlideshow);
    generateProcess();
}
function generateProcess() {
    if (flexProcessSection === null || flexGallerySection === null) {
        return;
    }
    flexProcessSection.innerHTML = '';
    flexGallerySection.innerHTML = '';
    for (var i = 0; i < processArray_ts_1.processArray.length; i++) {
        flexProcessSection.innerHTML += "\n    <div class=\"image fade\">\n    <img src=\"".concat(processArray_ts_1.processArray[i].src, "\" alt=\"").concat(processArray_ts_1.processArray[i].alt, "\" width=\"100\" height=\"100\" loading=\"lazy\">\n    </div>\n    ");
    }
    displaySlideshow();
}
function displaySlideshow() {
    var i;
    var images = document.querySelectorAll(".image");
    for (i = 0; i < images.length; i++) {
        images[i].classList.add('none');
    }
    index++;
    if (index > images.length) {
        index = 1;
    }
    images[index - 1].classList.add('block');
    clearIntervalSlideshow = setTimeout(displaySlideshow, 2000);
}
function checkOutGallery() {
    if (startSection === null || contactSection === null || gallerySection === null || backButton === null || processSection === null) {
        return;
    }
    startSection.classList.add('hidden');
    gallerySection.classList.remove('hidden');
    backButton.classList.remove('hidden');
    processSection.classList.add('hidden');
    contactSection.classList.add('hidden');
    generateGallery();
}
function generateGallery() {
    if (flexGallerySection === null) {
        return;
    }
    flexGallerySection.innerHTML = '';
    for (var i = 0; i < galleryArray_ts_1.galleryArray.length; i++) {
        flexGallerySection.innerHTML += "\n        \n        <img src=\"".concat(galleryArray_ts_1.galleryArray[i].src, "\" alt=\"").concat(galleryArray_ts_1.galleryArray[i].alt, "\" widht=\"100\" height=\"100\" loading=\"lazy\">\n        \n        ");
    }
}
function checkClickedButton(e) {
    if (e === null || e.currentTarget === null) {
        return;
    }
    var clickedButtonText = e.target.innerHTML;
    if (clickedButtonText === 'Galleri') {
        checkOutGallery();
    }
    else if (clickedButtonText === 'Process') {
        checkOutProcess();
    }
    else if (clickedButtonText === 'Kontakt') {
        checkOutContact();
    }
}
function backToStartPage() {
    startSection === null || startSection === void 0 ? void 0 : startSection.classList.remove('hidden');
    gallerySection === null || gallerySection === void 0 ? void 0 : gallerySection.classList.add('hidden');
    processSection === null || processSection === void 0 ? void 0 : processSection.classList.add('hidden');
    backButton === null || backButton === void 0 ? void 0 : backButton.classList.add('hidden');
    contactSection === null || contactSection === void 0 ? void 0 : contactSection.classList.add('hidden');
}
/**
 * Eventlisteners
 */
navButtons.forEach(function (btn) {
    btn.addEventListener('click', checkClickedButton);
});
backButton === null || backButton === void 0 ? void 0 : backButton.addEventListener('click', backToStartPage);
formButton === null || formButton === void 0 ? void 0 : formButton.addEventListener('click', contactForm);
