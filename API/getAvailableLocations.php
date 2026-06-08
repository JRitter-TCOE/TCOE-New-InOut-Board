<?php

    $db = new SQLite3('../TCOE_InOut_Board.db');

    $results = $db->query('SELECT * FROM Locations');

    $response = [];

    while ($row = $results->fetchArray(SQLITE3_ASSOC)) {
        array_push($response, $row);
    }

    echo json_encode(['response'=>$response]);

?>