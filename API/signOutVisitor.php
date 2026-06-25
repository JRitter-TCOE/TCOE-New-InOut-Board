<?php
    // This script sets/resets all staff in the DB 
    $db = new SQLite3('../TCOE_InOut_Board.db');

    $json = file_get_contents('php://input');
    $data = (array) json_decode($json);

    $visitorID = $data['id'];
    $Time_Out = $data['Time_Out'];

    $sql = 'UPDATE Visitors SET Time_Out = :Time_Out WHERE id = :id';
    $stmt = $db->prepare($sql);

    $stmt->bindValue(':id', $visitorID, SQLITE3_TEXT);
    $stmt->bindValue(':Time_Out', $Time_Out, SQLITE3_TEXT);

    $stmt->execute();


    echo json_encode(["data"=>'Visitor Signed Out Successfully!']);

    $db->close();


?>