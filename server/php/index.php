<?php
/*
 * jQuery File Upload Plugin PHP Example
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2010, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

error_reporting(E_ALL | E_STRICT);
require('UploadHandler.php');
//include('upload_wistia.php');
$upload_handler = new UploadHandler();

$response=$upload_handler->get_response();

$data = array(
    'api_password' => '0936ba35e79565fa689fa23e4cc1788a4d22bcb2f9d9b21c674f33b470e2a613',
    'url' => $response['files'][0]->url,
	'project_id'=>'kga82ciu72'
);

$chss = curl_init('https://upload.wistia.com');
curl_setopt_array($chss, array(
    CURLOPT_POST => TRUE,
    CURLOPT_RETURNTRANSFER => TRUE,
    CURLOPT_POSTFIELDS => http_build_query($data)
));

// Send the request
$KReresponse = curl_exec($chss);

// Decode the response
$KReresponseData = json_decode($KReresponse, TRUE);



