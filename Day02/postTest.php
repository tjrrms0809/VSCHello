<?php

    header('Content-Type:text/html; charset=utf-8');

    $name= $_POST['name'];
    $pw= $_POST['pw'];
    $gender= $_POST['rg1'];
    $msg= $_POST['msg'];
    $brand= $_POST['sel'];

    //text
    $msg= nl2br($msg);

    echo "$name <br>";
    echo "$pw <br>";
    echo "$gender <br>";
    echo "$msg <br>";
    echo "$brand <br>";

    //체크박스에 선택된 값은 여러개일 수 있어서 배열로 받아짐
    $fruits= $_POST['fruits']; //대입된 $fruits변수는 배열임!!
    //배열의 길이를 구해주는 함수
    $len= count($fruits);
    for($i=0; $i<$len; $i++){
        echo "$fruits[$i], "  ;
    }

?>