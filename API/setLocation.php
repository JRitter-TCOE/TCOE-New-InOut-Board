<?php
    $db = new SQLite3('../TCOE_InOut_Board.db');

    $json = file_get_contents('php://input');
    $data = (array) json_decode($json);

    $name = $data['name'];
    $location = $data['location'];

    $sql = 'UPDATE Staff_Locations SET Current_Location = :location WHERE Full_Name = :name';
    $stmt = $db->prepare($sql);
    $stmt->bindValue(':location', $location);
    $stmt->bindValue(':name', $name);
    $stmt->execute();

    echo json_encode(['data'=>$location]);

    $db->close();

?>