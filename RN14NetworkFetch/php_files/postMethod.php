<?php

    header('Content-Type:text/plain; charset=utf-8');

    $name= $_POST['name'];
    $msg= $_POST['msg'];

    echo "NAME : $name \n";
    echo "MSG : $msg \n";

?>