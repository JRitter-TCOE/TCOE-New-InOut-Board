<?php
    // This script returns a list of all available locations from DB

    $db = new SQLite3('../TCOE_InOut_Board.db');

    $results = $db->query('SELECT * FROM Locations');

    $response = [];

    while ($row = $results->fetchArray(SQLITE3_ASSOC)) {
        array_push($response, $row);
    }

    echo json_encode(['data'=>$response]);

?>