export async function fetchSheetData() {
  // Google Sheet ID
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

    return cleanData.slice(1, cleanData.length);

  } catch (error) {
    console.error('Error fetching data from Google Sheet:', error);
  }
}