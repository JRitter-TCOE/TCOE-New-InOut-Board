<?php

    $db = new SQLite3('../TCOE_InOut_Board.db');

    if (!$db) {
        echo $db->lastErrorMsg();
    }
    else {
        echo "Database connected.";
    }

?>