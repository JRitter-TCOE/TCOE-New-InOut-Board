<?php

    $db = new SQLite3('../TCOE_InOut_Board.db');

    $results = $db->query('SELECT * FROM Visitors WHERE Time_Out IS NULL');

    $response = [];

    while ($row = $results->fetchArray(SQLITE3_ASSOC)) {
        array_push($response, $row);
    }

    echo json_encode(['data'=>$response]);

    $db->close();

?>