<?php

namespace App\Http\Controllers;

abstract class Controller
{
    //

    function sendResponse($data = [], $code = 200) {
        return response()->json([
            'code' => $code,
            'status' => true,
            'response' => $data
        ], 200);
    }
}
