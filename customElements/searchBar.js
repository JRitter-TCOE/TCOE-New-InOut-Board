import Control from "../Control.js";
import { renderBoard } from "../helperFunctions/renderBoard.js";

export function createSearchBar() {
    const search = document.createElement('input');
    search.id = 'staffSearch';
    search.oninput = (e) => {
        Control.searchTerm = search.value;
        renderBoard();
    } 
    return search;
}