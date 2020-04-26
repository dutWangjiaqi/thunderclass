<?php
header("Content-type:text/html;charset=utf-8");
$url = "http://47.94.201.157:9090/login/ping";
$contents = file_get_contents($url);
echo $contents;
?>