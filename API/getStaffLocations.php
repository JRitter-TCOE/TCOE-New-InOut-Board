<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

    $db = new SQLite3('../TCOE_InOut_Board.db');

    $results = $db->query('SELECT * FROM Staff_Locations');

    $response = [];

    while ($row = $results->fetchArray(SQLITE3_ASSOC)) {
        array_push($response, $row);
    }

    echo json_encode(['data'=>$response]);

    $db->close();


?>