<?php

    $files= $_FILES['aaa'];

    //files라는 2차원배열의 사이즈
    $num= count($files); //출력 : 5
    $num2= count( $files['name'] ); //출력 : 100

    //즉, 전송된 파일의 개수를 알고싶다면..  $files를 count하면 안되고
    // $files['name']의 count()를 해야함.

    //전송된 파일개수
    $fileNum= count($files['name']);

    //파일의 개수만큼 반복
    for($i=0; $i<$fileNum; $i++){
        $srcName= $files['name'][$i]; //원본파일명
        $tmpName= $files['tmp_name'][$i];
        $fileType= $files['type'][$i];
        $fileSize= $files['size'][$i];

        echo "$srcName <br>";
        echo "$fileType <br>";
        echo "$fileSize <br>";
        echo "$tmpName <br>";
        echo "======================<br>";

        $dstName=date('Ymdhis').".$srcName";
        move_uploaded_file($tmpName, $dstName);
    }

?>