import './style/style.css'
import { galleryArray } from './galleryArray.ts';
import { processArray } from './processArray.ts';



/**
 * Selectors
 */


const navButtons = document.querySelectorAll('.round-nav-button');

const startSection: HTMLElement | null = document.querySelector('#startSection');
const gallerySection: HTMLElement | null = document.querySelector('#gallerySection');
const flexGallerySection: HTMLElement | null = document.querySelector('#flexGallerySection');
const flexProcessSection: HTMLElement | null = document.querySelector('#flexProcessSection')
const processSection: HTMLElement | null = document.querySelector('#processSection');
const contactSection: HTMLElement | null = document.querySelector('#contactSection');
const backButton: HTMLButtonElement | null = document.querySelector('#backButton');

/* FORM */

const formName: HTMLInputElement | null = document.querySelector('#name');
const formMail: HTMLInputElement | null = document.querySelector('#email');
const formMessage: HTMLTextAreaElement | null = document.querySelector('#message');
const formButton: HTMLButtonElement | null = document.querySelector('#formButton');
const errorMessage: HTMLParagraphElement | null = document.querySelector('#errorMessage');

/**
 * 
 * Variables
 */
let index = 0;
let clearIntervalSlideshow: ReturnType<typeof setInterval>;


/**
 * 
 * functions
 */

function checkOutContact(){
    if(startSection === null || contactSection === null || gallerySection === null || backButton === null || processSection === null){
        return;
    }
    contactSection.classList.remove('hidden')
    processSection.classList.add('hidden')
    startSection.classList.add('hidden');
    gallerySection.classList.add('hidden');
    backButton.classList.remove('hidden');

}

function contactForm() {
    if(!formName || !formButton || !formMail || !formMessage || !errorMessage){
        return;
    }
    if(formName.value === '' || formMail.value === '' || formMessage.value === ''){
        errorMessage.innerHTML = 'Formuläret är under uppbyggnad.'
    }else {
        formName.value ='';
        formMail.value = '';
        formMessage.value = '';
        errorMessage.innerHTML = '';
        console.log('skicka mail')
    }

}

function checkOutProcess() {
    if(startSection === null || contactSection === null || gallerySection === null || backButton === null || processSection === null){
        return;
    }
    processSection.classList.remove('hidden')
    startSection.classList.add('hidden');
    gallerySection.classList.add('hidden');
    backButton.classList.remove('hidden');
    contactSection.classList.add('hidden');

    clearInterval(clearIntervalSlideshow);
    generateProcess()
}

function generateProcess(){
    if(flexProcessSection === null || flexGallerySection === null){
        return;
    }
    flexProcessSection.innerHTML = '';
    flexGallerySection.innerHTML= '';

    for(let i = 0; i < processArray.length; i++){
    flexProcessSection.innerHTML += `
    <div class="image fade">
    <img src="${processArray[i].src}" alt="${processArray[i].alt}" width="100" height="100" loading="lazy">
    </div>
    `;
 
    }
    displaySlideshow()
}

function displaySlideshow(){
    let i;
    const images = document.querySelectorAll(".image");
    for (i = 0; i < images.length; i++) {
      images[i].classList.add('none');
    }
    index++;
    if (index > images.length) {
      index = 1;
    }
    images[index-1].classList.add('block');
    clearIntervalSlideshow = setTimeout(displaySlideshow, 2000); 
}


function checkOutGallery() {
    if(startSection === null || contactSection === null || gallerySection === null || backButton === null || processSection === null){
        return;
    }

    startSection.classList.add('hidden');
    gallerySection.classList.remove('hidden');
    backButton.classList.remove('hidden');
    processSection.classList.add('hidden');
    contactSection.classList.add('hidden');


    generateGallery()
}

function generateGallery() {

    if(flexGallerySection === null){
        return;
    }

    flexGallerySection.innerHTML= '';

    for(let i = 0; i < galleryArray.length; i++){
        flexGallerySection.innerHTML +=`
        
        <img src="${galleryArray[i].src}" alt="${galleryArray[i].alt}" widht="100" height="100" loading="lazy">
        
        `;
    }
}

function checkClickedButton(e: Event){
    if(e === null || e.currentTarget === null){
        return;
    }
    const clickedButtonText = (e.target as Element).innerHTML;
    if ( clickedButtonText === 'Galleri'){
        checkOutGallery()
    }else if (clickedButtonText === 'Process'){
         checkOutProcess()

    } else if( clickedButtonText === 'Kontakt'){

        checkOutContact()
    }
}

function backToStartPage(){
    startSection?.classList.remove('hidden');
    gallerySection?.classList.add('hidden');
    processSection?.classList.add('hidden');
    backButton?.classList.add('hidden');
}
/**
 * Eventlisteners
 */

navButtons.forEach((btn) => {
    btn.addEventListener('click', checkClickedButton);
})

backButton?.addEventListener('click', backToStartPage);
formButton?.addEventListener('click', contactForm);