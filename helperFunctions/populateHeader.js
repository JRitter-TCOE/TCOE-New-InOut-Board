import Control from "../Control.js";
import { createAddVisitorBtn } from "../customElements/addVisitorBtn.js";
import { createSearchBar } from "../customElements/searchBar.js";
import { createVisitorBtn } from "../customElements/visitorBtn.js";

export function populateHeader() {
    const logo = document.createElement('img');
    logo.src = 'TCOE_logo_thumbnail.png';
    logo.classList.add('logo');

    const logoText = document.createElement('h3');
    logoText.innerText = 'Trinity County Office of Education';
    logoText.classList.add('logoText');

    const logoContainer = document.createElement('div');
    logoContainer.classList.add('row');
    logoContainer.append(logo, logoText);

    const searchLabel = document.createElement('label');
    searchLabel.setAttribute('for', 'staffSearch');
    searchLabel.innerHTML = '<ion-icon name="search-outline"></ion-icon>';
    const search = createSearchBar();

    const searchContainer = document.createElement('div');
    searchContainer.classList.add('row');
    searchContainer.append(searchLabel, search);

    const addVisitorBtn = createAddVisitorBtn();
    const visitorBtn = createVisitorBtn(addVisitorBtn, searchContainer);

    

    Control.header.append(logoContainer, searchContainer, addVisitorBtn, visitorBtn);
}