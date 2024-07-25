<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\services_unit;

class Products extends Controller
{
    public function getPaginated(Request $request)
    {
        $catId = $request->category;
        /* $length = $request->get('length');
        $page = $request->get('page'); */

        $data = services_unit::where(['catid' => $catId])->with(['category', 'prices', 'prices.washes'])->paginate(10);

        return $this->sendResponse($data);
    }
}
