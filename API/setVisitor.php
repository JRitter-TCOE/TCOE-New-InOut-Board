<?php
    // This script sets/resets all staff in the DB 
    $db = new SQLite3('../TCOE_InOut_Board.db');

    $json = file_get_contents('php://input');
    $data = (array) json_decode($json);

    $Full_Name = trim(htmlspecialchars((strip_tags($data['Full_Name']))));
    $Organization = trim(htmlspecialchars((strip_tags($data['Organization']))));
    $Time_In = $data['Time_In'];
    $Visiting = trim(htmlspecialchars((strip_tags($data['Visiting']))));
    $Add_With = trim(htmlspecialchars((strip_tags($data['Add_With']))));

    $sql = 'INSERT INTO Visitors (Full_Name, Organization, Time_In, Visiting, Add_With) VALUES (:Full_Name, :Organization, :Time_In, :Visiting, :Add_With)';
    $stmt = $db->prepare($sql);

    $stmt->bindValue(':Full_Name', $Full_Name, SQLITE3_TEXT);
    $stmt->bindValue(':Organization', $Organization, SQLITE3_TEXT);
    $stmt->bindValue(':Time_In', $Time_In, SQLITE3_TEXT);
    $stmt->bindValue(':Visiting', $Visiting, SQLITE3_TEXT);
    $stmt->bindValue(':Add_With', $Add_With, SQLITE3_TEXT);

    $stmt->execute();


    echo json_encode(["data"=>'Visitor Added Successfully!']);

    $db->close();


?>