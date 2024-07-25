<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class services_unit extends Model
{
    use HasFactory;

    protected $table = 'ld_service_units';

    protected $primaryKey = 'id';

    public function category(): HasOne
    {
        return $this->hasOne(services_cat::class, 'id', 'catid');
    }

    public function prices(): HasMany
    {
        return $this->hasMany(services_unit_price::class, 'service_unit_id', 'id');
    }
}
