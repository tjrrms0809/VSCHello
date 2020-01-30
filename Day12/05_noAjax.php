<?php

    header('Content-Type:text/html; charset=utf-8');

    $name= $_GET['name'];
    $email= $_GET['email'];

    //원대를 받은 데이터를 DB에 저장해야 하지만..시간상..
    //echo "$name  $email 이 등록되었습니다.";

    //그전에 보여지던 05_noAjax.html문서가 사라져버리기 때문에
    // 입력폼 모양 페이지가 없어져 버리고 echo된 문자열만 보이게 됨.

    //이게 싫다면...
    echo ("
    <!DOCTYPE html>
        <html>
            <head>
                <meta charset='utf-8'>
                <title></title>
            </head>
            <body>
                <h3>회원가입 페이지</h3>

                <form action='05_noAjax.php' method='get'>
                    <input type='text' name='name' value='$name'>
                    <input type='text' name='email' value='$email'>

                    <input type='submit'>
                </form>
                <hr>
                <textarea id='ta' cols='30' rows='3'>$name $email 이 등록되었습니다.</textarea>

            </body>
        </html>

    ");

?>