const header = document.getElementById('header');
const app = document.getElementById('app');


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

    console.log('Clean Spreadsheet Data:', cleanData);
    return cleanData.slice(1, cleanData.length);

  } catch (error) {
    console.error('Error fetching data from Google Sheet:', error);
  }
}


function createStaffCard(staffName, plannedLocations, currentLocation) {
    const card = document.createElement('div');
    card.classList.add('staffCard');

    const nameField = document.createElement('p');
    nameField.classList.add('staffName');
    nameField.innerHTML = staffName;

    const plannedField = document.createElement('p');
    plannedField.classList.add('plannedLocations');
    plannedField.innerHTML = '<strong>Scheduled:</strong> ' + plannedLocations;

    const currentField = document.createElement('p');
    currentField.classList.add('currentLocation');
    currentField.innerHTML = '<strong>Current:</strong> ' + currentLocation;

    const row = document.createElement('div');
    row.classList.add('row');

    row.append(nameField, currentField);

    card.append(row, plannedField);

    return card;
}

function createSearchBar() {
    const search = document.createElement('input');
    search.classList.add('staffSearch');
    return search;
}

function populateHeader() {
    const search = createSearchBar();
    header.append(search);
}

async function populateBoard() {
    const staffLocations = await fetchSheetData();

    for (let x of staffLocations) {
        const staffCard = createStaffCard(x[0], x[1], 'N/A');
        app.append(staffCard);
    }

}

populateHeader();
populateBoard();
