
<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


    // This script sets/resets all staff in the DB 
    $db = new SQLite3('../TCOE_InOut_Board.db');

    $json = file_get_contents('php://input');
    $data = (array) json_decode($json);
    $staff = $data['staff'];

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