import Control from "../Control.js";
import { createSearchBar } from "../customElements/searchBar.js";

export function populateHeader() {
    const logo = document.createElement('img');
    logo.src = 'TCOE_logo_thumbnail.png';
    logo.classList.add('logo');

    const logoText = document.createElement('h3');
    logoText.innerText = 'Trinity County Office of Education';
    logoText.classList.add('logoText');

    const searchLabel = document.createElement('label');
    searchLabel.setAttribute('for', 'staffSearch');
    searchLabel.innerHTML = '<ion-icon name="search-outline"></ion-icon>';
    const search = createSearchBar();

    const searchContainer = document.createElement('div');
    searchContainer.classList.add('row');
    searchContainer.append(searchLabel, search)

    const spacer = document.createElement('div');
    spacer.classList.add('spacer');

    Control.header.append(logo, logoText, spacer, searchContainer);
}