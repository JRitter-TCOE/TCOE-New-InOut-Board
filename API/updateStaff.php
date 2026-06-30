<?php

$csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vR56lAVBbeUxdEE58m1NDq4119y-srA1kObRNQ4TI8zS9h3tbgdWHNYIzENlRyJ_xOfqJFzr6K9-QlL/pub?gid=0&single=true&output=csv";

$staff = [];

if (($handle = fopen($csvUrl, "r")) !== FALSE) {
    while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
        $staff[] = $data[0]; 
    }
    fclose($handle);
}

array_shift($staff);

 // This script sets/resets all staff in the DB 
    $db = new SQLite3('../TCOE_InOut_Board.db');

    $sql = 'DELETE FROM Staff_Locations';
    $stmt = $db->prepare($sql);
    $stmt->execute();

    foreach ($staff as $member) {
        $sql = 'INSERT INTO Staff_Locations (Full_Name, Current_Location) VALUES (:Full_Name, :Current_Location)';
        $stmt = $db->prepare($sql);

        $stmt->bindValue(':Full_Name', $member, SQLITE3_TEXT);
        $stmt->bindValue(':Current_Location', 'Out', SQLITE3_TEXT);

        $stmt->execute();

    }

    echo json_encode(["data"=>'Staff Added Successfully!']);

    $db->close();


?>