import { getAvailableLocations } from "./Requests/getAvailableLocations.js";
import { getStaffLocations } from "./Requests/getStaffLocations.js";
import { postData } from "./Requests/postData.js";
import { setLocation } from "./Requests/setLocation.js";
import { setStaff } from "./Requests/setStaff.js";

const header = document.getElementById('header');
const app = document.getElementById('app');
const aside = document.getElementById('aside');


let staffSchedules = null;
let staffLocations = null;
let searchTerm = '';
let selectedStaff = null;


async function fetchSheetData() {
  // Replace with your actual Google Sheet ID
  const sheetId = '1odg7IvL8q0vvQo0TpieqHvQ__6fdcM3t1NlQlmIqDjE'; 
  // Set to '0' for the first tab, or use your specific sheet ID (gid)
  const baseGid = '0'; 
  
  const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&gid=${baseGid}`;

  try {
    const response = await fetch(url);
    const text = await response.text();
    
    // The endpoint returns data wrapped in a callback function: /*O_o*/google.visualization.Query.setResponse(...);
    // This slice extracts only the raw JSON string
    const jsonString = text.substring(text.indexOf('{'), text.lastIndexOf('}') + 1);
    const json = JSON.parse(jsonString);
    
    const rows = json.table.rows;
    const columns = json.table.cols;

    // Map through rows to create clean data arrays or objects
    const cleanData = rows.map(row => {
      return row.c.map(cell => cell ? cell.v : null);
    });

    staffSchedules = cleanData.slice(1, cleanData.length);

  } catch (error) {
    console.error('Error fetching data from Google Sheet:', error);
  }
}

function getStaffNames() {
    const names = [];
    
    for (let x of staffSchedules) {
        names.push(x[0]);
    }

    return names;
}


function createStaffCard(staffName, plannedLocations, currentLocation) {
    const card = document.createElement('div');
    card.classList.add('staffCard');

    const nameField = document.createElement('p');
    nameField.classList.add('staffName');
    nameField.innerHTML = staffName;

    const plannedField = document.createElement('p');
    plannedField.classList.add('plannedLocations');
    plannedField.innerHTML = '<ion-icon name="calendar-outline"></ion-icon> ' + plannedLocations;

    const currentField = document.createElement('p');
    currentField.classList.add('currentLocation');
    currentField.innerHTML = '<ion-icon name="location-outline"></ion-icon> ' + currentLocation;

    card.onclick = async () => {
        await setLocation(staffName, currentLocation == 'TCOE Main Office' ? 'Out' : 'TCOE Main Office');
        staffLocations = await getStaffLocations();
        renderBoard();
    }

    currentField.onclick = (e) => {
        e.stopPropagation();
        aside.classList.add('active');
        selectedStaff = staffName;
    }

    const row = document.createElement('div');
    row.classList.add('row');

    row.append(nameField, currentField);

    card.append(row, plannedField);

    return card;
}

function createSearchBar() {
    const search = document.createElement('input');
    search.id = 'staffSearch';
    search.oninput = (e) => {
        searchTerm = search.value;
        renderBoard();
    } 
    return search;
}

function populateHeader() {
    const searchLabel = document.createElement('label');
    searchLabel.setAttribute('for', 'staffSearch');
    searchLabel.innerHTML = '<ion-icon name="search-outline"></ion-icon>';
    const search = createSearchBar();
    header.append(searchLabel, search);
}

async function renderBoard() {
    app.innerHTML = '';
    let i = 0;
    for (let x of staffSchedules) {
        if (x[0].toLowerCase().includes(searchTerm.toLowerCase())) {
            const staffCard = createStaffCard(x[0], x[1], staffLocations[x[0]]);
            app.append(staffCard);
        }
    }

}

function createAsideCloseBtn() {
    const closeBtn = document.createElement('button');
    closeBtn.id = 'closeBtn';
    closeBtn.innerHTML = 'X';
    closeBtn.onclick = () => {
        aside.classList.remove('active');
    }

    return closeBtn;
}

function createLocButton(loc) {
    const btn = document.createElement('button');
    btn.classList.add('loc');
    btn.innerText = loc.Name;
    btn.style.backgroundColor = loc.Color;
    btn.style.color = `contrast-color(${loc.Color})`;
    
    btn.onclick = async () => {
        aside.classList.remove('active');
        const result = await setLocation(selectedStaff, loc.Name);
        staffLocations = await getStaffLocations();
        renderBoard();
    };
    
    return btn;
}

async function createLocationList() {
    const locList = document.createElement('div');
    locList.id = 'locList';

    const locations = await getAvailableLocations();

    for (let loc of locations) {
        const btn = createLocButton(loc);
        locList.append(btn);
    }

    aside.append(locList);

}

function populateAside() {
    const closeBtn = createAsideCloseBtn();

    aside.append(closeBtn);
}

async function initApp() {
    await fetchSheetData();
    await setStaff(getStaffNames()); //Resets DB on reload
    staffLocations = await getStaffLocations();
    populateHeader();
    populateAside();
    renderBoard();
    createLocationList();
}


initApp();